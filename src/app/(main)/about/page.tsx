import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  Check,
  Leaf,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialMarquee from "@/components/sections/TestimonialMarquee";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/sections/CtaBand";
import GridBackdrop from "@/components/ui/GridBackdrop";
import { STATS } from "@/data/site";
import { TESTIMONIALS } from "@/data/testimonials";
import { FAQS } from "@/data/faqs";

export const metadata = { title: "About Us" };

const COMMITMENT = [
  "100% genuine, brand-authorised products",
  "Rigorous quality checks before dispatch",
  "Transparent pricing with no hidden fees",
];

const SUSTAIN = [
  {
    icon: Leaf,
    title: "Eco-Friendly Manufacturing",
    desc: "We partner with brands that cut waste, use recycled materials and run on cleaner energy across their supply chains.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Sourcing",
    desc: "Every product is traced to responsible suppliers who meet fair-labour and environmental standards we're proud to stand behind.",
  },
];

const VALUES = [
  {
    no: "01",
    title: "Empowering Technology Access",
    desc: "Premium tech shouldn't be a luxury. We keep prices fair so innovation reaches everyone.",
  },
  {
    no: "02",
    title: "Customer-Centric Excellence",
    desc: "Every decision starts with you — from curated products to support that actually helps.",
  },
  {
    no: "03",
    title: "Innovating the Future",
    desc: "We hunt down the gadgets that matter so you're always ahead of what's next.",
  },
  {
    no: "04",
    title: "Sustainable Growth",
    desc: "We grow responsibly — better for our customers, our partners and the planet.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-ink-950">
        <GridBackdrop />
        <div className="blob right-0 top-0 h-80 w-80 bg-accent" />
        <div className="container-x relative z-10 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-sm text-ink-400">
            <Link href="/" className="transition hover:text-accent">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">About Us</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="eyebrow">
                  <Sparkles size={14} /> About Gadget-Ghor
                </span>
                <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                  Powering the future of{" "}
                  <span className="text-accent">everyday tech</span>
                </h1>
                <p className="mt-5 max-w-md text-muted">
                  We&apos;re on a mission to make premium technology accessible,
                  trustworthy and effortless to shop — bringing the latest
                  gadgets right to your doorstep.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/shop" arrow>
                    Explore Products
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-accent/20 blur-3xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src="/images/hero-vr.jpg"
                    alt="Gadget-Ghor — premium technology"
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="float-pill absolute -bottom-4 -left-4 px-4 py-3 text-sm sm:-left-6">
                  <span className="font-display text-xl font-bold text-accent">
                    50K+
                  </span>
                  <span className="ml-2 text-ink-300">happy customers</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quality commitment */}
      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/images/appliances.jpg"
                alt="Curated premium electronics"
                fill
                sizes="(max-width: 1024px) 92vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">Our Commitment</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Built on a <span className="text-accent">commitment</span> to
                quality
              </h2>
              <p className="mt-4 text-muted">
                Gadget-Ghor started with a simple frustration — buying
                electronics online felt risky and impersonal. We fixed that with
                a store built on trust, genuine products and a shopping
                experience that respects your time.
              </p>
              <ul className="mt-6 space-y-3">
                {COMMITMENT.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 text-sm text-ink-200"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <Check size={13} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/shop" arrow>
                  Shop the Collection
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Sustainability"
            title={
              <>
                Smarter Tech, a <span className="text-accent">Greener</span>{" "}
                Future
              </>
            }
            subtitle="Innovation shouldn't cost the earth. Here's how we keep technology moving forward responsibly."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {SUSTAIN.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="card h-full p-8">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-ink-950">
                      <Icon size={26} />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-muted">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core values (numbered) */}
      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title={
              <>
                Built to Innovate, Empower &amp;{" "}
                <span className="text-accent">Elevate</span>
              </>
            }
            subtitle="The principles that guide every product we stock and every customer we serve."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.no} delay={(i % 4) * 0.06}>
                <div className="card group h-full p-6 transition hover:border-accent/40">
                  <span className="font-display text-5xl font-extrabold text-stroke-accent">
                    {v.no}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{v.desc}</p>
                  <ArrowUpRight
                    size={18}
                    className="mt-4 text-ink-500 transition group-hover:text-accent"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-ink-900 p-8 sm:grid-cols-4 sm:p-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-bold text-accent">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-ink-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Wall of Love"
            title={
              <>
                Real Reviews, Trusted by Customers{" "}
                <span className="text-accent">Worldwide</span>
              </>
            }
            subtitle="Tap any review to read the full story from customers who upgraded their tech with Gadget-Ghor."
          />
          <TestimonialMarquee items={TESTIMONIALS} className="mt-14" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Got Questions?"
              title={
                <>
                  Answers You Need, <span className="text-accent">Anytime</span>{" "}
                  You Ask
                </>
              }
              subtitle="Everything you need to know about shopping, shipping and support at Gadget-Ghor."
            />
            <Reveal delay={0.1}>
              <div className="mt-6">
                <Button href="/contact" arrow>
                  Contact Support
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
