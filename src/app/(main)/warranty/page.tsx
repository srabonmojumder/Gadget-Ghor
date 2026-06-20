import {
  ShieldCheck,
  RefreshCcw,
  Truck,
  Wrench,
  BadgeCheck,
  Headset,
} from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/sections/CtaBand";
import { WARRANTY_FAQS } from "@/data/faqs";

export const metadata = { title: "Warranty & Support" };

const POLICIES = [
  {
    icon: ShieldCheck,
    title: "2-Year Warranty",
    desc: "Every gadget is covered against manufacturing defects for a minimum of two years.",
  },
  {
    icon: RefreshCcw,
    title: "30-Day Returns",
    desc: "Changed your mind? Return any unused item within 30 days for a full refund.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Enjoy free, fully tracked express shipping on every order over $99.",
  },
  {
    icon: Wrench,
    title: "Free Repairs",
    desc: "In-warranty repairs are always free, handled by certified technicians.",
  },
  {
    icon: BadgeCheck,
    title: "100% Genuine",
    desc: "We source directly from brands — what you order is always authentic.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "Our specialists are a message away, any time of day or night.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <PageBanner
        title="Warranty & Support"
        subtitle="Shop with total peace of mind — genuine products, generous coverage and support that always has your back."
        crumbs={[{ label: "Warranty & Support" }]}
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Promise"
            title={
              <>
                Coverage you can <span className="text-accent">count on</span>
              </>
            }
            subtitle="Six guarantees that come standard with every Gadget-Ghor purchase."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POLICIES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={(i % 3) * 0.06}>
                  <div className="card h-full p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-ink-950">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Warranty FAQ"
              title={
                <>
                  Questions about <span className="text-accent">coverage?</span>
                </>
              }
              subtitle="Everything you need to know about claims, repairs and extended protection."
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
            <Accordion items={WARRANTY_FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
