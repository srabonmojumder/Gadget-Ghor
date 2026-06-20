import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import GridBackdrop from "./GridBackdrop";

type Crumb = { label: string; href?: string };

export default function PageBanner({
  title,
  subtitle,
  crumbs = [],
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink-950">
      <GridBackdrop />
      <div className="blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-accent" />
      <div className="container-x relative z-10 py-16 text-center lg:py-20">
        <Reveal>
          <nav className="mb-4 flex items-center justify-center gap-1.5 text-sm text-ink-400">
            <Link href="/" className="transition hover:text-accent">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight size={14} />
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
