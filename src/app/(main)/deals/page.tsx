import { Zap } from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import ProductCard from "@/components/ui/ProductCard";
import Countdown from "@/components/ui/Countdown";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { PRODUCTS } from "@/data/products";

export const metadata = { title: "Deals & Promotions" };

const DEALS = PRODUCTS.filter((p) => p.oldPrice);

export default function DealsPage() {
  return (
    <>
      <PageBanner
        title="Deals & Promotions"
        subtitle="Limited-time savings across audio, laptops, gaming and more — while stocks last."
        crumbs={[{ label: "Deals & Promotions" }]}
      />

      {/* Flash sale countdown banner */}
      <section className="bg-ink-950 py-12 lg:py-16">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 p-8 sm:p-12">
              <div className="blob right-0 top-0 h-60 w-60 bg-accent" />
              <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
                <div>
                  <span className="eyebrow">
                    <Zap size={14} /> Flash Sale
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Up to <span className="text-accent">50% off</span> — ends
                    soon!
                  </h2>
                  <p className="mt-3 max-w-md text-muted">
                    Grab the season&apos;s best gadget deals before the timer
                    runs out.
                  </p>
                </div>
                <Countdown daysAhead={2} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deal grid */}
      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {DEALS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Don't miss the next drop"
        subtitle="Subscribe to get early access to flash sales and exclusive promo codes."
      />
    </>
  );
}
