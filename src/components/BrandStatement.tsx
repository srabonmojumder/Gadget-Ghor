import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function BrandStatement() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-display text-2xl font-bold leading-snug text-ink-950 sm:text-3xl lg:text-4xl">
            Built on a <span className="text-highlight">commitment</span> to
            quality, we hand-pick top-brand gadgets, smart devices and home
            electronics to <span className="text-highlight">elevate</span> your
            everyday life.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2.5rem] border border-ink-100 bg-ink-50">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/appliances.jpg"
                alt="Premium home appliances and electronics"
                fill
                sizes="(max-width: 1024px) 92vw, 900px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <a href="#categories" className="btn btn-outline">
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
