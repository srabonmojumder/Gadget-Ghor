import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

const ITEMS = Array.from({ length: 6 });

export default function FlashSaleMarquee() {
  return (
    <section
      id="flash"
      className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-14 lg:py-16"
    >
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10">
          {[0, 1].map((dup) =>
            ITEMS.map((_, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-10">
                <span
                  className={`font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${
                    i % 2 === 0 ? "text-accent" : "text-stroke"
                  }`}
                >
                  FLASH SALE
                </span>
                <Star size={24} className="text-accent" fill="currentColor" />
              </span>
            ))
          )}
        </div>
      </div>

      <div className="container-x mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl font-extrabold text-accent sm:text-6xl">
            50%
          </span>
          <span className="text-left text-lg font-semibold leading-tight text-white">
            OFF
            <span className="block text-sm font-normal text-ink-400">
              on selected gadgets this week
            </span>
          </span>
        </div>
        <Link href="/deals" className="btn btn-primary">
          Buy Now <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
