"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Play } from "lucide-react";
import { STATS } from "@/data/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink-950 text-white"
    >
      {/* Decorative background */}
      <div className="grid-pattern absolute inset-0 opacity-70" />
      <div className="blob left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 bg-brand-500/40" />
      <div className="blob right-[6%] bottom-[6%] h-72 w-72 bg-brand-400/20" />

      <div className="container-x relative z-10 py-14 text-center lg:py-20">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="eyebrow-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
        >
          <Sparkles size={14} /> New Arrivals · 2026 Collection
        </motion.span>

        {/* Product showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mx-auto mt-8 w-full max-w-2xl"
        >
          {/* glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/30 blur-[90px]" />

          <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
            <Image
              src="/images/hero-vr.jpg"
              alt="Next-gen VR headset"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 640px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </div>

          {/* floating pills */}
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="float-pill absolute left-2 top-10 px-4 py-2 text-sm font-medium sm:-left-6"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-400" />
            Immersive Experience
          </motion.span>
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="float-pill absolute bottom-12 right-2 px-4 py-2 text-sm font-medium sm:-right-5"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-400" />
            Immersive Gaming
          </motion.span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-10 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
        >
          Discover the Latest Electronics at{" "}
          <span className="text-gold">Unbeatable</span> Prices
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-5 max-w-xl text-base text-ink-300 sm:text-lg"
        >
          Seamless shopping, genuine warranties and lightning-fast delivery —
          bringing innovation right to your doorstep with Gadget-Ghor.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#featured" className="btn btn-primary">
            Buy Now <ArrowRight size={18} />
          </a>
          <a href="#categories" className="btn btn-outline-light">
            <Play size={16} /> Learn More
          </a>
        </motion.div>

        {/* trust row */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((n) => (
              <img
                key={n}
                src={`/images/avatar-${n}.jpg`}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-ink-950 object-cover"
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1 text-brand-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-ink-300">
              Loved by <strong className="text-white">50,000+</strong> customers
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="container-x relative z-10 pb-14">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4 sm:p-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
