"use client";

import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { PRODUCTS, PRODUCT_TABS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function TopProducts() {
  const [active, setActive] = useState<(typeof PRODUCT_TABS)[number]>("All");
  const swiperRef = useRef<SwiperType | null>(null);

  const items = useMemo(
    () =>
      active === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="featured" className="bg-ink-950 py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Top Picks</span>
              <h2 className="mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                Our Top Products
              </h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                aria-label="Previous"
                onClick={() => swiperRef.current?.slidePrev()}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-accent hover:text-ink-950"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Next"
                onClick={() => swiperRef.current?.slideNext()}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-accent hover:text-ink-950"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-1">
          {PRODUCT_TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === t
                  ? "bg-accent text-ink-950"
                  : "bg-white/5 text-ink-300 hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <Swiper
            key={active}
            onBeforeInit={(s) => (swiperRef.current = s)}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {items.map((p) => (
              <SwiperSlide key={p.id} className="h-auto">
                <div className="h-full pb-1">
                  <ProductCard product={p} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
