"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/data/products";

export default function SearchOverlay() {
  const { panel, closePanel } = useStore();
  const open = panel === "search";
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    setQ("");
  }, [open]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(t) ||
        p.category.toLowerCase().includes(t)
    ).slice(0, 6);
  }, [q]);

  return (
    <div
      className={`fixed inset-0 z-[70] ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={closePanel}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-x-0 top-0 mx-auto w-full max-w-2xl px-4 transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-2xl">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <Search size={20} className="text-accent" />
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search gadgets..."
              className="w-full bg-transparent text-base text-white outline-none placeholder:text-ink-500"
            />
            <button
              onClick={closePanel}
              aria-label="Close"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white"
            >
              <X size={16} />
            </button>
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-3">
            {q.trim() === "" ? (
              <p className="p-6 text-center text-sm text-ink-400">
                Start typing to search products…
              </p>
            ) : results.length === 0 ? (
              <p className="p-6 text-center text-sm text-ink-400">
                No products found for &ldquo;{q}&rdquo;.
              </p>
            ) : (
              results.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  onClick={closePanel}
                  className="flex items-center gap-3 rounded-2xl p-2.5 transition hover:bg-white/5"
                >
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-ink-850">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-white">
                      {p.name}
                    </span>
                    <span className="block text-xs text-ink-400">
                      {p.category}
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    ${p.price}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
