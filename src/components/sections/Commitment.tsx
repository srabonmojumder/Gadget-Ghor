import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Commitment() {
  return (
    <section className="bg-ink-950 py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-display text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
            Built on a <span className="text-accent">commitment</span> to
            quality, we hand-pick top-brand gadgets, smart devices and home
            electronics to <span className="text-accent">elevate</span> your
            everyday life.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/appliances.jpg"
                alt="Premium home appliances and electronics"
                fill
                sizes="(max-width: 1024px) 92vw, 900px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <Button href="/about" variant="secondary" arrow>
              Learn More
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
