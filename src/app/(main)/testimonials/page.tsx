import PageBanner from "@/components/ui/PageBanner";
import TestimonialMarquee from "@/components/sections/TestimonialMarquee";
import CtaBand from "@/components/sections/CtaBand";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        title="Real Reviews, Trusted Worldwide"
        subtitle="Tap any review to read the full story from customers who upgraded their tech with Gadget-Ghor."
        crumbs={[{ label: "Testimonials" }]}
      />
      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="container-x">
          <TestimonialMarquee items={TESTIMONIALS} />
        </div>
      </section>
      <CtaBand
        title="Join 50,000+ happy customers"
        subtitle="Experience the smoothest way to shop premium gadgets online."
      />
    </>
  );
}
