import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { POSTS } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Blog() {
  return (
    <section id="blog" className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="From the Blog"
            title={
              <>
                Tech Insights &amp;{" "}
                <span className="text-highlight">Innovations</span>
              </>
            }
            subtitle="Guides, trends and deep-dives to help you shop smarter and stay ahead of the curve."
          />
          <a href="#blog" className="btn btn-outline shrink-0">
            All Articles <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08}>
              <article className="card card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-400 px-3 py-1 text-xs font-bold text-ink-950">
                    {post.tag}
                  </span>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 text-xs text-ink-400">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {post.read}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-ink-950 transition-colors group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-500">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Read more{" "}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
