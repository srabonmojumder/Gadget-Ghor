import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import type { Post } from "@/lib/types";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-ink-850"
      >
        <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink-950">
          {post.tag}
        </span>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-ink-400">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {post.read}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-white transition group-hover:text-accent">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        >
          Read more
          <ArrowUpRight
            size={16}
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
