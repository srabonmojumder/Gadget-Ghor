import { TESTIMONIALS } from "@/data/testimonials";
import TestimonialMarquee from "@/components/sections/TestimonialMarquee";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Reviews() {
  return (
    <section className="bg-ink-950 py-20 lg:py-28">
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
        <div className="mt-10 text-center">
          <Button href="/testimonials" variant="secondary" arrow>
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
