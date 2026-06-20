import PageBanner from "@/components/ui/PageBanner";
import BlogCard from "@/components/ui/BlogCard";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { POSTS } from "@/data/posts";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Tech Insights, Trends & Innovations"
        subtitle="Guides, reviews and deep-dives to help you shop smarter and stay ahead of the curve."
        crumbs={[{ label: "Blog" }]}
      />
      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.06}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Never miss a story"
        subtitle="Subscribe to get the latest tech insights and product drops in your inbox."
      />
    </>
  );
}
