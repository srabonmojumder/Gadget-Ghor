"use client";

import Image from "next/image";
import { useState } from "react";
import { Quote, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Testimonial } from "@/lib/types";
import Stars from "./Stars";

export default function TestimonialCard({ item }: { item: Testimonial }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="card card-hover flex h-full w-full flex-col p-7 text-left"
      >
        <div className="flex items-center justify-between">
          <Quote size={34} className="text-accent" />
          <Stars rating={item.rating} size={15} />
        </div>
        <p className="mt-5 line-clamp-4 flex-1 text-[15px] leading-relaxed text-muted">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
          <Image
            src={item.avatar}
            alt={item.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-accent/30"
          />
          <div>
            <p className="text-sm font-semibold text-white">{item.name}</p>
            <p className="text-xs text-ink-400">
              {item.role} · {item.location}
            </p>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-ink-900 p-8"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X size={18} />
              </button>
              <Quote size={40} className="text-accent" />
              <p className="mt-4 text-lg leading-relaxed text-white">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={52}
                  height={52}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40"
                />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-ink-400">
                    {item.role} · {item.location}
                  </p>
                  <div className="mt-1">
                    <Stars rating={item.rating} size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
