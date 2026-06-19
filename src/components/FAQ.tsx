"use client";

import { useState } from "react";
import { Plus, MessageCircleQuestion } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Got Questions?"
            title={
              <>
                Answers You Need,{" "}
                <span className="text-highlight">Anytime</span>
              </>
            }
            subtitle="Everything you need to know about shopping, shipping and support at Gadget-Ghor."
          />
          <div className="mt-8 flex items-center gap-4 rounded-3xl border border-ink-100 bg-ink-50/70 p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
              <MessageCircleQuestion size={22} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-950">
                Still have questions?
              </p>
              <p className="text-sm text-ink-500">
                Our team replies in minutes —{" "}
                <a href="#" className="font-semibold text-brand-600">
                  chat with us
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-brand-200 bg-brand-50/40"
                    : "border-ink-100 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-ink-950 sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-brand-400 text-ink-950"
                        : "bg-ink-100 text-ink-600"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
