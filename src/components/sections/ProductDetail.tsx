"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Check,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RefreshCcw,
  ChevronRight,
} from "lucide-react";
import type { Product } from "@/lib/types";
import Stars from "@/components/ui/Stars";
import Badge from "@/components/ui/Badge";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { useStore } from "@/context/StoreContext";
import { TESTIMONIALS } from "@/data/testimonials";

const TABS = ["Description", "Specifications", "Reviews"] as const;

export default function ProductDetail({ product }: { product: Product }) {
  const thumbs = product.gallery?.length
    ? product.gallery
    : [product.image, product.image, product.image, product.image];
  const { addToCart, toggleWishlist, isWished } = useStore();
  const [main, setMain] = useState(thumbs[0]);
  const [tab, setTab] = useState<(typeof TABS)[number]>("Description");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const wished = isWished(product.slug);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  const specs: [string, string][] = [
    ["Model", product.name],
    ["SKU", product.sku],
    ["Category", product.category],
    ...product.highlights.map(
      (h, i) => [`Feature ${i + 1}`, h] as [string, string]
    ),
    ["Warranty", "2 years"],
  ];

  return (
    <div>
      <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
        <Link href="/" className="transition hover:text-accent">
          Home
        </Link>
        <ChevronRight size={14} />
        <Link href="/shop" className="transition hover:text-accent">
          Shop
        </Link>
        <ChevronRight size={14} />
        <span className="text-white">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900">
            {product.badge && (
              <div className="absolute left-4 top-4 z-10">
                <Badge label={product.badge} />
              </div>
            )}
            <Image
              src={main}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {thumbs.map((t, i) => (
              <button
                key={i}
                onClick={() => setMain(t)}
                className={`relative aspect-square overflow-hidden rounded-xl border bg-ink-900 transition ${
                  main === t ? "border-accent" : "border-white/10"
                }`}
              >
                <Image src={t} alt="" fill sizes="120px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <Link href="/shop" className="text-sm font-medium text-accent">
            {product.category}
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <Stars rating={product.rating} size={16} />
            <span className="text-sm text-ink-400">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="font-display text-4xl font-bold text-white">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-xl text-ink-500 line-through">
                ${product.oldPrice}
              </span>
            )}
            {discount > 0 && (
              <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-ink-950">
                Save {discount}%
              </span>
            )}
          </div>

          <p className="mt-5 text-muted">{product.description}</p>

          <ul className="mt-6 space-y-2.5">
            {product.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2.5 text-sm text-ink-200"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent">
                  <Check size={13} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <QuantitySelector value={qty} onChange={setQty} />
            <button
              onClick={() => {
                addToCart(product.slug, qty);
                setAdded(true);
                setTimeout(() => setAdded(false), 1600);
              }}
              className="btn btn-primary"
            >
              {added ? (
                <>
                  <Check size={18} /> Added!
                </>
              ) : (
                <>
                  <ShoppingCart size={18} /> Add To Cart
                </>
              )}
            </button>
            <button
              onClick={() => toggleWishlist(product.slug)}
              aria-label="Add to wishlist"
              className={`grid h-12 w-12 place-items-center rounded-full border transition ${
                wished
                  ? "border-accent bg-accent text-ink-950"
                  : "border-white/15 text-white hover:border-accent hover:text-accent"
              }`}
            >
              <Heart size={18} fill={wished ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-400">
            <span>
              SKU: <span className="text-ink-200">{product.sku}</span>
            </span>
            <span>
              Category: <span className="text-ink-200">{product.category}</span>
            </span>
            <span className="font-medium text-accent">
              {product.inStock ? "In stock" : "Out of stock"}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center text-xs text-ink-400">
            <div>
              <Truck className="mx-auto text-accent" size={20} />
              <p className="mt-1.5">Free shipping</p>
            </div>
            <div>
              <ShieldCheck className="mx-auto text-accent" size={20} />
              <p className="mt-1.5">2-yr warranty</p>
            </div>
            <div>
              <RefreshCcw className="mx-auto text-accent" size={20} />
              <p className="mt-1.5">30-day returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-14">
        <div className="flex gap-2 border-b border-white/10">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-4 py-3 text-sm font-medium transition ${
                tab === t ? "text-accent" : "text-ink-400 hover:text-white"
              }`}
            >
              {t}
              {t === "Reviews" ? ` (${product.reviews})` : ""}
              {tab === t && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="py-7 text-muted">
          {tab === "Description" && (
            <div className="max-w-3xl space-y-4">
              <p>{product.description}</p>
              <p>
                Designed and tested by the Gadget-Ghor team, the {product.name}{" "}
                blends premium materials with thoughtful engineering to deliver
                an experience that feels effortless every single day.
              </p>
            </div>
          )}
          {tab === "Specifications" && (
            <div className="max-w-2xl overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <tbody>
                  {specs.map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-white/5" : ""}>
                      <td className="px-4 py-3 font-medium text-ink-300">{k}</td>
                      <td className="px-4 py-3 text-white">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab === "Reviews" && (
            <div className="grid gap-5 sm:grid-cols-2">
              {TESTIMONIALS.slice(0, 2).map((t) => (
                <div key={t.id} className="card p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {t.name}
                        </p>
                        <p className="text-xs text-ink-400">{t.location}</p>
                      </div>
                    </div>
                    <Stars rating={t.rating} />
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
