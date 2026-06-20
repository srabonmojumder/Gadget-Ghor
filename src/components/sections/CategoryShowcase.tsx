import { CATEGORIES } from "@/data/categories";
import CategoryCard from "@/components/ui/CategoryCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function CategoryShowcase() {
  return (
    <section id="categories" className="bg-ink-950 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Categories"
          title={
            <>
              Discover Innovation,{" "}
              <span className="text-accent">Experience</span> the Future
            </>
          }
          subtitle="Explore our curated range of cutting-edge electronics — from smartphones to smart-home devices, designed to elevate your lifestyle."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.06}>
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
