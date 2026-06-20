"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { getProduct } from "@/data/products";
import type { Product } from "@/lib/types";

export default function CartView() {
  const { cart, setQty, removeFromCart, cartTotal, cartCount } = useStore();

  const items = cart
    .map((i) => ({ ...i, product: getProduct(i.slug) }))
    .filter((i): i is { slug: string; qty: number; product: Product } =>
      Boolean(i.product)
    );
  const shipping = cartTotal === 0 || cartTotal >= 99 ? 0 : 9.99;
  const total = cartTotal + shipping;

  if (items.length === 0) {
    return (
      <div className="card flex flex-col items-center gap-4 p-12 text-center">
        <ShoppingBag size={48} className="text-ink-600" />
        <h2 className="text-xl font-semibold text-white">Your cart is empty</h2>
        <p className="text-muted">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/shop" className="btn btn-primary mt-2">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
      <div className="space-y-4">
        {items.map(({ product, qty, slug }) => (
          <div
            key={slug}
            className="card flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
          >
            <Link
              href={`/product/${slug}`}
              className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-ink-850"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </Link>
            <div className="flex-1">
              <Link
                href={`/product/${slug}`}
                className="font-semibold text-white transition hover:text-accent"
              >
                {product.name}
              </Link>
              <p className="text-sm text-accent">{product.category}</p>
              <p className="mt-1 text-sm text-muted">${product.price} each</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-white/15">
                <button
                  onClick={() => setQty(slug, qty - 1)}
                  aria-label="Decrease"
                  className="grid h-9 w-9 place-items-center text-white transition hover:text-accent"
                >
                  <Minus size={14} />
                </button>
                <span className="w-9 text-center text-sm tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty(slug, qty + 1)}
                  aria-label="Increase"
                  className="grid h-9 w-9 place-items-center text-white transition hover:text-accent"
                >
                  <Plus size={14} />
                </button>
              </div>
              <span className="w-20 text-right font-semibold text-white">
                ${(product.price * qty).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(slug)}
                aria-label="Remove"
                className="text-ink-400 transition hover:text-red-400"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="card p-6">
          <h2 className="font-display text-lg font-bold text-white">
            Order Summary
          </h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-muted">
              <span>Subtotal ({cartCount} items)</span>
              <span className="text-white">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Shipping</span>
              <span className="text-white">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-ink-400">
                Add ${(99 - cartTotal).toFixed(2)} more for free shipping.
              </p>
            )}
          </div>
          <div className="mt-4 flex justify-between border-t border-white/10 pt-4">
            <span className="font-semibold text-white">Total</span>
            <span className="font-display text-xl font-bold text-white">
              ${total.toFixed(2)}
            </span>
          </div>
          <Link href="/checkout" className="btn btn-primary mt-6 w-full">
            Proceed to Checkout
          </Link>
          <Link
            href="/shop"
            className="mt-3 block text-center text-sm text-ink-400 transition hover:text-accent"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
