"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import Drawer from "./Drawer";
import { useStore } from "@/context/StoreContext";
import { getProduct } from "@/data/products";
import type { Product } from "@/lib/types";

export default function WishlistDrawer() {
  const { panel, closePanel, wishlist, toggleWishlist, addToCart, wishCount } =
    useStore();
  const open = panel === "wishlist";

  const items = wishlist
    .map((s) => getProduct(s))
    .filter((p): p is Product => Boolean(p));

  return (
    <Drawer open={open} onClose={closePanel} title={`Wishlist (${wishCount})`}>
      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 p-10 text-center">
          <Heart size={40} className="text-ink-600" />
          <p className="text-muted">Your wishlist is empty.</p>
          <Link href="/shop" onClick={closePanel} className="btn btn-primary mt-2">
            Browse Shop
          </Link>
        </div>
      ) : (
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {items.map((product) => (
            <div key={product.slug} className="flex gap-3">
              <Link
                href={`/product/${product.slug}`}
                onClick={closePanel}
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-ink-850"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col">
                <Link
                  href={`/product/${product.slug}`}
                  onClick={closePanel}
                  className="line-clamp-1 text-sm font-semibold text-white transition hover:text-accent"
                >
                  {product.name}
                </Link>
                <span className="text-sm font-semibold text-accent">
                  ${product.price}
                </span>
                <div className="mt-auto flex items-center gap-2">
                  <button
                    onClick={() => {
                      addToCart(product.slug);
                      toggleWishlist(product.slug);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-accent hover:text-ink-950"
                  >
                    <ShoppingCart size={14} /> Move to cart
                  </button>
                  <button
                    onClick={() => toggleWishlist(product.slug)}
                    aria-label="Remove"
                    className="text-ink-400 transition hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Drawer>
  );
}
