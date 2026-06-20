"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Lock } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { getProduct } from "@/data/products";
import type { Product } from "@/lib/types";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500 focus:border-accent transition";

const PAY = [
  { v: "card", l: "Card" },
  { v: "bkash", l: "bKash" },
  { v: "cod", l: "Cash on Delivery" },
];

export default function CheckoutView() {
  const { cart, cartTotal, cartCount, clearCart } = useStore();
  const [pay, setPay] = useState("card");
  const [done, setDone] = useState<{
    id: string;
    total: number;
    count: number;
  } | null>(null);

  const items = cart
    .map((i) => ({ ...i, product: getProduct(i.slug) }))
    .filter((i): i is { slug: string; qty: number; product: Product } =>
      Boolean(i.product)
    );
  const shipping = cartTotal === 0 || cartTotal >= 99 ? 0 : 9.99;
  const total = cartTotal + shipping;

  if (done) {
    return (
      <div className="card mx-auto max-w-lg p-10 text-center">
        <CheckCircle2 size={52} className="mx-auto text-accent" />
        <h2 className="mt-4 text-2xl font-bold text-white">Order placed!</h2>
        <p className="mt-2 text-muted">
          Thank you for your purchase. A confirmation has been sent to your
          email.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-ink-900 p-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">Order number</span>
            <span className="font-semibold text-accent">{done.id}</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-muted">Items</span>
            <span className="text-white">{done.count}</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-muted">Total paid</span>
            <span className="font-semibold text-white">
              ${done.total.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/track" className="btn btn-primary">
            Track Order
          </Link>
          <Link href="/shop" className="btn btn-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="card p-10 text-center">
        <p className="text-muted">Your cart is empty.</p>
        <Link href="/shop" className="btn btn-primary mt-4">
          Browse Shop
        </Link>
      </div>
    );
  }

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setDone({
      id: "GG-" + Math.floor(100000 + Math.random() * 900000),
      total,
      count: cartCount,
    });
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form onSubmit={placeOrder} className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      <div className="space-y-8">
        <div className="card p-6">
          <h2 className="font-display text-lg font-bold text-white">Contact</h2>
          <div className="mt-4">
            <input
              required
              type="email"
              placeholder="Email address"
              className={inputCls}
            />
          </div>
        </div>

        <div className="card p-6">
          <h2 className="font-display text-lg font-bold text-white">
            Shipping address
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <input required placeholder="First name" className={inputCls} />
            <input required placeholder="Last name" className={inputCls} />
            <input
              required
              placeholder="Address"
              className={`${inputCls} sm:col-span-2`}
            />
            <input required placeholder="City" className={inputCls} />
            <input required placeholder="ZIP / Postcode" className={inputCls} />
            <input required placeholder="Country" className={inputCls} />
            <input required placeholder="Phone" className={inputCls} />
          </div>
        </div>

        <div className="card p-6">
          <h2 className="font-display text-lg font-bold text-white">Payment</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {PAY.map((p) => (
              <button
                type="button"
                key={p.v}
                onClick={() => setPay(p.v)}
                className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  pay === p.v
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-white/15 text-ink-300 hover:border-white/30"
                }`}
              >
                {p.l}
              </button>
            ))}
          </div>
          {pay === "card" && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Card number"
                className={`${inputCls} sm:col-span-2`}
              />
              <input required placeholder="MM / YY" className={inputCls} />
              <input required placeholder="CVC" className={inputCls} />
            </div>
          )}
        </div>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="card p-6">
          <h2 className="font-display text-lg font-bold text-white">
            Your order
          </h2>
          <div className="mt-4 space-y-3">
            {items.map(({ product, qty, slug }) => (
              <div key={slug} className="flex items-center gap-3">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-ink-850">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                  <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-ink-950">
                    {qty}
                  </span>
                </span>
                <span className="line-clamp-1 flex-1 text-sm text-white">
                  {product.name}
                </span>
                <span className="text-sm text-white">
                  ${(product.price * qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm">
            <div className="flex justify-between text-muted">
              <span>Subtotal</span>
              <span className="text-white">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Shipping</span>
              <span className="text-white">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="mt-3 flex justify-between border-t border-white/10 pt-3">
            <span className="font-semibold text-white">Total</span>
            <span className="font-display text-xl font-bold text-white">
              ${total.toFixed(2)}
            </span>
          </div>
          <button type="submit" className="btn btn-primary mt-6 w-full">
            <Lock size={16} /> Place Order
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">
            Demo checkout — no real payment is processed.
          </p>
        </div>
      </div>
    </form>
  );
}
