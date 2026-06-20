"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Eye, ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/lib/types";
import { useStore } from "@/context/StoreContext";
import Stars from "./Stars";
import Badge from "./Badge";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWished } = useStore();
  const [added, setAdded] = useState(false);
  const wished = isWished(product.slug);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-ink-850">
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {product.badge && <Badge label={product.badge} />}
          {discount > 0 && product.badge !== "-25%" && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-ink-950">
              -{discount}%
            </span>
          )}
        </div>

        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <button
            onClick={() => toggleWishlist(product.slug)}
            aria-label="Add to wishlist"
            className={`grid h-9 w-9 place-items-center rounded-full backdrop-blur transition hover:bg-accent hover:text-ink-950 ${
              wished ? "bg-accent text-ink-950" : "bg-ink-950/80 text-white"
            }`}
          >
            <Heart size={16} fill={wished ? "currentColor" : "none"} />
          </button>
          <Link
            href={`/product/${product.slug}`}
            aria-label="Quick view"
            className="grid h-9 w-9 place-items-center rounded-full bg-ink-950/80 text-white backdrop-blur transition hover:bg-accent hover:text-ink-950"
          >
            <Eye size={16} />
          </Link>
        </div>

        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-medium text-accent">
          {product.category}
        </span>
        <h3 className="mt-1 line-clamp-1 text-[15px] font-semibold text-white">
          <Link
            href={`/product/${product.slug}`}
            className="transition hover:text-accent"
          >
            {product.name}
          </Link>
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5">
          <Stars rating={product.rating} />
          <span className="text-xs text-ink-400">({product.reviews})</span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-white">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-ink-500 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => {
            addToCart(product.slug);
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
            added
              ? "bg-accent text-ink-950"
              : "bg-white/10 text-white hover:bg-accent hover:text-ink-950"
          }`}
        >
          {added ? (
            <>
              <Check size={16} /> Added!
            </>
          ) : (
            <>
              <ShoppingCart size={16} /> Add To Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
