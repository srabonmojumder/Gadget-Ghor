import { MessageCircleQuestion } from "lucide-react";
import { FAQS } from "@/data/faqs";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-ink-950 py-20 lg:py-28">
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
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-ink-950">
                <MessageCircleQuestion size={22} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Still have questions?
                </p>
                <p className="text-sm text-ink-400">
                  Our team replies in minutes.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <Button href="/contact" variant="primary" arrow>
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
  );
}
