import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function FlashSale() {
  return (
    <section id="flash" className="relative overflow-hidden bg-ink-950 py-16 text-white lg:py-20">
      <div className="grid-pattern absolute inset-0 opacity-60" />
      <div className="shine pointer-events-none absolute inset-0" />
      <div className="blob left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-brand-400/25" />

      <div className="container-x relative z-10">
        <Reveal>
          <span className="mx-auto flex w-fit items-center gap-2 rounded-full bg-brand-400 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink-950">
            <Zap size={13} fill="currentColor" /> Limited Time Only
          </span>
        </Reveal>

        {/* Giant text with circular product */}
        <Reveal delay={0.05}>
          <div className="relative mt-7 flex items-center justify-center">
            <h2 className="flex select-none items-center justify-center gap-[18vw] font-display text-[18vw] font-extrabold leading-none tracking-tighter sm:text-[15vw] lg:text-[10rem]">
              <span>FLASH</span>
              <span>SALE</span>
            </h2>
            {/* circular product */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 -z-10 rounded-full bg-brand-400/40 blur-2xl" />
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-brand-400 shadow-2xl sm:h-36 sm:w-36 lg:h-44 lg:w-44">
                <Image
                  src="/images/flashsale-headphones.jpg"
                  alt="Headphones on flash sale"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom row */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="font-display text-6xl font-extrabold text-brand-400 sm:text-7xl">
                50%
              </span>
              <span className="text-left text-lg font-semibold leading-tight text-ink-200">
                OFF
                <br />
                <span className="text-sm font-normal text-ink-400">
                  on selected gadgets
                </span>
              </span>
            </div>
            <a href="#featured" className="btn btn-primary">
              Buy Now <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
