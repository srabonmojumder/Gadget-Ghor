"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Play,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import GridBackdrop from "@/components/ui/GridBackdrop";

const HERO_SLUGS = ["nimbus-vr-one", "studiomax-headphones", "aurora-phone-x5"];
const HERO = HERO_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(
  Boolean
);

export default function Hero() {
  const [i, setI] = useState(0);
  const product = HERO[i];
  const go = (d: number) => setI((v) => (v + d + HERO.length) % HERO.length);

  return (
    <section id="home" className="relative overflow-hidden bg-ink-950">
      <GridBackdrop />
      <div className="blob left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 bg-accent" />

      <div className="container-x relative z-10 py-14 text-center lg:py-16">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          <Sparkles size={14} /> New Arrivals · 2026 Collection
        </motion.span>

        {/* Showcase: outline wordmark + product */}
        <div className="relative mx-auto mt-8 flex h-72 max-w-4xl items-center justify-center sm:h-80 lg:h-96">
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[15vw] font-extrabold leading-none tracking-tighter text-stroke">
            GADGET-GHOR
          </span>

          <div className="relative z-10">
            <div className="absolute inset-0 rounded-full bg-accent/25 blur-[80px]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative h-60 w-60 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="320px"
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <span className="float-pill absolute -left-3 top-8 px-3 py-1.5 text-xs sm:-left-12">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Immersive Experience
            </span>
            <span className="float-pill absolute -right-3 bottom-10 px-3 py-1.5 text-xs sm:-right-12">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Enhanced Learning
            </span>
          </div>
        </div>

        {/* Slider arrows */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-accent hover:text-ink-950"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-accent hover:text-ink-950"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <h1 className="mx-auto mt-8 max-w-3xl text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Discover the Latest Electronics at{" "}
          <span className="text-accent">Unbeatable</span> Prices
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
          Seamless shopping, genuine warranties and lightning-fast delivery —
          bringing innovation right to your doorstep with Gadget-Ghor.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href={`/product/${product.slug}`} className="btn btn-primary">
            Buy Now <ArrowUpRight size={18} />
          </Link>
          <Link href="/shop" className="btn btn-secondary">
            <Play size={16} /> Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
