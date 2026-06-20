import type { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, BadgePercent } from "lucide-react";
import { SITE, FOOTER_COLUMNS } from "@/data/site";
import NewsletterForm from "./NewsletterForm";
import GridBackdrop from "@/components/ui/GridBackdrop";

/* Brand glyphs as inline SVG (lucide v1 dropped brand icons) */
const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  ...p,
});
const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);
const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Twitter = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);
const Youtube = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  </svg>
);
const SOCIALS = [Facebook, Instagram, Twitter, Youtube];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <GridBackdrop />
      <div className="blob left-[-8%] top-[-20%] h-72 w-72 bg-accent" />

      <div className="container-x relative z-10">
        {/* Newsletter band */}
        <div className="mt-16 grid items-center gap-8 rounded-[2rem] border border-white/10 bg-ink-900 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <BadgePercent size={14} /> Exclusive Perks
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Stay Updated, Get Exclusive Deals{" "}
              <span className="text-accent">First!</span>
            </h2>
            <p className="mt-3 max-w-md text-muted">
              Join 50,000+ subscribers for tech news, early access to launches
              and a 10% off welcome coupon.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <NewsletterForm />
            <p className="mt-3 text-xs text-ink-400">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src={SITE.logo}
                alt={SITE.name}
                width={170}
                height={59}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              Your next-gen destination for premium electronics and smart
              gadgets — genuine products, unbeatable prices and delivery you can
              count on.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-300">
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-accent" /> {SITE.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-accent" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-accent" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-ink-400 transition hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials + payments */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-7 sm:flex-row">
          <div className="flex items-center gap-3">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition hover:border-accent hover:bg-accent hover:text-ink-950"
              >
                <Icon className="h-[17px] w-[17px]" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-400">We accept</span>
            {["Visa", "MC", "Amex", "bKash", "COD"].map((p) => (
              <span
                key={p}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-ink-200"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-ink-400 sm:flex-row">
          <p>
            © 2026 {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/warranty" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/warranty" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>

        {/* Watermark */}
        <div className="pointer-events-none -mb-3 select-none overflow-hidden pb-1 text-center sm:-mb-6 lg:-mb-10">
          <span className="block whitespace-nowrap font-display text-[clamp(2rem,12vw,170px)] font-extrabold leading-none tracking-tighter text-white/[0.04]">
            GADGET-GHOR
          </span>
        </div>
      </div>
    </footer>
  );
}
