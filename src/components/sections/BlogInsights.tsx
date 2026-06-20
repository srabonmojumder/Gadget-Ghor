import { POSTS } from "@/data/posts";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function BlogInsights() {
  return (
    <section id="blog" className="bg-ink-950 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="From the Blog"
            title={
              <>
                Tech Insights, Trends &amp;{" "}
                <span className="text-accent">Innovations</span>
              </>
            }
            subtitle="Guides, trends and deep-dives to help you shop smarter and stay ahead of the curve."
          />
          <Button href="/blog" variant="secondary" arrow className="shrink-0">
            All Articles
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
