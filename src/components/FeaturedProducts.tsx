"use client";

import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { FEATURED } from "@/data/site";
import ProductCard from "./ui/ProductCard";
import Reveal from "./ui/Reveal";

const TABS = [
  "All",
  "Audio & Wearables",
  "Laptops & Tablets",
  "Smartphones",
  "Gaming Gear",
] as const;

export default function FeaturedProducts() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");
  const swiperRef = useRef<SwiperType | null>(null);

  const items = useMemo(
    () =>
      active === "All"
        ? FEATURED
        : FEATURED.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="featured" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        {/* Header: heading left, arrows right */}
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Top Picks</span>
              <h2 className="mt-4 text-3xl text-ink-950 sm:text-4xl lg:text-5xl">
                Our Top Products
              </h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                aria-label="Previous"
                onClick={() => swiperRef.current?.slidePrev()}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 text-ink-950 transition hover:border-ink-950 hover:bg-ink-950 hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Next"
                onClick={() => swiperRef.current?.slideNext()}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink-200 text-ink-950 transition hover:border-ink-950 hover:bg-ink-950 hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === t
                  ? "bg-ink-950 text-white"
                  : "bg-ink-100 text-ink-600 hover:bg-ink-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <Swiper
            key={active}
            modules={[Navigation]}
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
