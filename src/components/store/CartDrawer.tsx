"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Drawer from "./Drawer";
import { useStore } from "@/context/StoreContext";
import { getProduct } from "@/data/products";
import type { Product } from "@/lib/types";

export default function CartDrawer() {
  const { panel, closePanel, cart, setQty, removeFromCart, cartCount, cartTotal } =
    useStore();
  const open = panel === "cart";

  const items = cart
    .map((i) => ({ ...i, product: getProduct(i.slug) }))
    .filter((i): i is { slug: string; qty: number; product: Product } =>
      Boolean(i.product)
    );

  return (
    <Drawer open={open} onClose={closePanel} title={`Your Cart (${cartCount})`}>
      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 p-10 text-center">
          <ShoppingBag size={40} className="text-ink-600" />
          <p className="text-muted">Your cart is empty.</p>
          <Link href="/shop" onClick={closePanel} className="btn btn-primary mt-2">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {items.map(({ product, qty, slug }) => (
              <div key={slug} className="flex gap-3">
                <Link
                  href={`/product/${slug}`}
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
                    href={`/product/${slug}`}
                    onClick={closePanel}
                    className="line-clamp-1 text-sm font-semibold text-white transition hover:text-accent"
                  >
                    {product.name}
                  </Link>
                  <span className="text-sm font-semibold text-accent">
                    ${product.price}
                  </span>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-white/15">
                      <button
                        onClick={() => setQty(slug, qty - 1)}
                        aria-label="Decrease"
                        className="grid h-8 w-8 place-items-center text-white transition hover:text-accent"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm tabular-nums">
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(slug, qty + 1)}
                        aria-label="Increase"
                        className="grid h-8 w-8 place-items-center text-white transition hover:text-accent"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(slug)}
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

          <div className="border-t border-white/10 p-5">
            <div className="flex items-center justify-between">
              <span className="text-muted">Subtotal</span>
              <span className="font-display text-xl font-bold text-white">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="mt-1 text-xs text-ink-400">
              Shipping &amp; taxes calculated at checkout.
            </p>
            <button className="btn btn-primary mt-4 w-full">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </Drawer>
  );
}
