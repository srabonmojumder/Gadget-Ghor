"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Wall of Love"
          title={
            <>
              Trusted by Customers{" "}
              <span className="text-highlight">Worldwide</span>
            </>
          }
          subtitle="Real reviews from real people who upgraded their tech with Gadget-Ghor."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <figure className="card flex h-full flex-col rounded-3xl p-7">
                  <div className="flex items-center justify-between">
                    <Quote size={34} className="text-brand-500" />
                    <div className="flex gap-0.5 text-accent-500">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-600">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-200"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-ink-400">
                        {t.role} · {t.location}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
