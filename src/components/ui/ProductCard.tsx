"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, Eye, ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/data/site";
import Stars from "./Stars";

const badgeStyles: Record<string, string> = {
  New: "bg-brand-400 text-ink-950",
  Hot: "bg-ink-950 text-white",
  "-25%": "bg-brand-400 text-ink-950",
  "Best Seller": "bg-ink-950 text-white",
  Limited: "bg-accent-500 text-ink-950",
};

export default function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="card card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden bg-ink-100">
        {/* badges */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                badgeStyles[product.badge] ?? "bg-brand-400 text-ink-950"
              }`}
            >
              {product.badge}
            </span>
          )}
          {discount > 0 && product.badge !== "-25%" && (
            <span className="rounded-full bg-brand-400 px-2.5 py-1 text-[11px] font-bold text-ink-950">
              -{discount}%
            </span>
          )}
        </div>

        {/* quick actions */}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <button
            onClick={() => setWished((w) => !w)}
            aria-label="Add to wishlist"
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-700 shadow-md transition hover:bg-ink-950 hover:text-white"
          >
            <Heart size={16} fill={wished ? "currentColor" : "none"} />
          </button>
          <button
            aria-label="Quick view"
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-700 shadow-md transition hover:bg-ink-950 hover:text-white"
          >
            <Eye size={16} />
          </button>
        </div>

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {product.category}
        </span>
        <h3 className="mt-1 line-clamp-1 text-[15px] font-semibold text-ink-950">
          {product.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5">
          <Stars rating={product.rating} />
          <span className="text-xs text-ink-400">({product.reviews})</span>
        </div>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-ink-950">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-ink-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to cart */}
        <button
          onClick={() => {
            setAdded(true);
            setTimeout(() => setAdded(false), 1600);
          }}
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
            added
              ? "border-brand-400 bg-brand-400 text-ink-950"
              : "border-ink-300 text-ink-950 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
          }`}
        >
          {added ? (
            <>
              <Check size={16} /> Added!
            </>
          ) : (
            <>
              <ShoppingCart size={16} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
