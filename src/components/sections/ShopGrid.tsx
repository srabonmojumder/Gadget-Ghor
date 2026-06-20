"use client";

import { useMemo, useState } from "react";
import { Check, SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import ProductCard from "@/components/ui/ProductCard";

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
const PAGE_SIZE = 8;
const MAX_PRICE = 1300;

export default function ShopGrid() {
  const [cats, setCats] = useState<string[]>([]);
  const [price, setPrice] = useState(MAX_PRICE);
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleCat = (name: string) => {
    setPage(1);
    setCats((c) =>
      c.includes(name) ? c.filter((x) => x !== name) : [...c, name]
    );
  };

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) => (cats.length === 0 || cats.includes(p.category)) && p.price <= price
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc")
      list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "rating")
      list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cats, price, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const shown = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const sidebar = (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
          Categories
        </h3>
        <div className="mt-4 space-y-3">
          {CATEGORIES.map((c) => {
            const checked = cats.includes(c.name);
            return (
              <label
                key={c.slug}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-300 transition hover:text-white"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleCat(c.name)}
                  className="sr-only"
                />
                <span
                  className={`grid h-5 w-5 place-items-center rounded-md border transition ${
                    checked
                      ? "border-accent bg-accent text-ink-950"
                      : "border-white/15"
                  }`}
                >
                  {checked && <Check size={13} />}
                </span>
                {c.name}
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
          Max Price
        </h3>
        <input
          type="range"
          min={0}
          max={MAX_PRICE}
          value={price}
          onChange={(e) => {
            setPage(1);
            setPrice(Number(e.target.value));
          }}
          className="mt-4 w-full accent-[#fcd33d]"
        />
        <div className="mt-2 flex justify-between text-sm text-ink-400">
          <span>$0</span>
          <span className="text-accent">${price}</span>
        </div>
      </div>
      <button
        onClick={() => {
          setCats([]);
          setPrice(MAX_PRICE);
          setSort("featured");
          setPage(1);
        }}
        className="text-sm font-medium text-accent"
      >
        Clear all filters
      </button>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="hidden lg:block">{sidebar}</aside>

      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-ink-400">
            Showing <span className="text-white">{shown.length}</span> of{" "}
            {filtered.length} products
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white lg:hidden"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-white/15 bg-ink-900 px-4 py-2 text-sm text-white outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value} className="bg-ink-900">
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {shown.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {shown.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-ink-400">
            No products match your filters.
          </p>
        )}

        {pages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`grid h-10 w-10 place-items-center rounded-full text-sm font-medium transition ${
                  current === i + 1
                    ? "bg-accent text-ink-950"
                    : "border border-white/15 text-white hover:bg-white/10"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile filters drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="absolute left-0 top-0 h-full w-[82%] max-w-xs overflow-y-auto bg-ink-950 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Filters</h3>
              <button
                onClick={() => setFiltersOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white"
              >
                <X size={18} />
              </button>
            </div>
            {sidebar}
          </div>
        </div>
      )}
    </div>
  );
}
