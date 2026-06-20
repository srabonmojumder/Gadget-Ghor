"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { getProduct } from "@/data/products";

export type CartItem = { slug: string; qty: number };
export type Panel = "cart" | "wishlist" | "search" | null;

type StoreCtx = {
  cart: CartItem[];
  wishlist: string[];
  panel: Panel;
  openPanel: (p: Panel) => void;
  closePanel: () => void;
  addToCart: (slug: string, qty?: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  setQty: (slug: string, qty: number) => void;
  toggleWishlist: (slug: string) => void;
  isWished: (slug: string) => boolean;
  cartCount: number;
  wishCount: number;
  cartTotal: number;
};

const Ctx = createContext<StoreCtx | null>(null);

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used within StoreProvider");
  return c;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [panel, setPanel] = useState<Panel>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem("gg-cart");
      const w = localStorage.getItem("gg-wishlist");
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("gg-cart", JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem("gg-wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    document.body.style.overflow = panel ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [panel]);

  const addToCart = useCallback((slug: string, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing)
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: i.qty + qty } : i
        );
      return [...prev, { slug, qty }];
    });
  }, []);

  const removeFromCart = useCallback(
    (slug: string) => setCart((p) => p.filter((i) => i.slug !== slug)),
    []
  );

  const clearCart = useCallback(() => setCart([]), []);

  const setQty = useCallback(
    (slug: string, qty: number) =>
      setCart((p) =>
        qty <= 0
          ? p.filter((i) => i.slug !== slug)
          : p.map((i) => (i.slug === slug ? { ...i, qty } : i))
      ),
    []
  );

  const toggleWishlist = useCallback(
    (slug: string) =>
      setWishlist((p) =>
        p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]
      ),
    []
  );

  const isWished = useCallback(
    (slug: string) => wishlist.includes(slug),
    [wishlist]
  );

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const wishCount = wishlist.length;
  const cartTotal = cart.reduce((sum, i) => {
    const p = getProduct(i.slug);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);

  return (
    <Ctx.Provider
      value={{
        cart,
        wishlist,
        panel,
        openPanel: setPanel,
        closePanel: () => setPanel(null),
        addToCart,
        removeFromCart,
        clearCart,
        setQty,
        toggleWishlist,
        isWished,
        cartCount,
        wishCount,
        cartTotal,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
