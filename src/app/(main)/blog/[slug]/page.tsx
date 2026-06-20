import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";
import { getPost, POSTS } from "@/data/posts";
import CommentForm from "@/components/sections/CommentForm";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GridBackdrop from "@/components/ui/GridBackdrop";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? post.title : "Article" };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-ink-950">
        <GridBackdrop />
        <div className="container-x relative z-10 py-14 lg:py-16">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
            <Link href="/" className="transition hover:text-accent">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="transition hover:text-accent">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{post.tag}</span>
          </nav>
          <span className="eyebrow mt-4">{post.tag}</span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-ink-400">
            <span className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={28}
                height={28}
                className="h-7 w-7 rounded-full object-cover"
              />
              <span className="text-ink-200">{post.author.name}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.read}
            </span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="bg-ink-950 pt-10">
        <div className="container-x">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 92vw, 1100px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Body + comments */}
      <section className="bg-ink-950 py-14">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white">Leave a Reply</h2>
            <p className="mt-2 text-muted">
              Your email address will not be published. Required fields are
              marked.
            </p>
            <div className="mt-6">
              <CommentForm />
            </div>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x">
          <SectionHeading
            align="left"
            eyebrow="Keep reading"
            title={
              <>
                More <span className="text-accent">Articles</span>
              </>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
