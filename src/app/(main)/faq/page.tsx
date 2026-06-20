import PageBanner from "@/components/ui/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/sections/CtaBand";
import { FAQS, WARRANTY_FAQS } from "@/data/faqs";

export const metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Answers to the questions we hear most — shopping, shipping, payments, warranties and more."
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="General"
              title={
                <>
                  Ordering &amp; <span className="text-accent">Shipping</span>
                </>
              }
              subtitle="Everything about placing orders, delivery and payments."
            />
            <Reveal delay={0.1}>
              <div className="mt-6">
                <Button href="/contact" arrow>
                  Still need help?
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Warranty"
              title={
                <>
                  Returns &amp; <span className="text-accent">Coverage</span>
                </>
              }
              subtitle="How warranties, repairs and refunds work at Gadget-Ghor."
            />
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
