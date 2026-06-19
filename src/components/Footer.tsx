import type { SVGProps } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

/* Brand/social glyphs as inline SVG (lucide v1 dropped brand icons) */
const iconBase = (props: SVGProps<SVGSVGElement>) => ({
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  ...props,
});

const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase(p)}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);
const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase(p)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Twitter = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase(p)}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);
const Youtube = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase(p)}>
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  </svg>
);

const COLUMNS = [
  {
    title: "Shop",
    links: ["Audio & Wearables", "Laptops & Tablets", "Smartphones", "Gaming Gear", "Smart Home"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Brand Stories", "Press", "Affiliates"],
  },
  {
    title: "Support",
    links: ["Help Center", "Order Tracking", "Returns & Refunds", "Warranty", "Contact Us"],
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="blob left-[-8%] top-[-30%] h-72 w-72 bg-brand-500/30" />

      <div className="container-x relative z-10">
        {/* top */}
        <div className="grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" className="inline-flex items-center">
              <Image
                src="/images/gaget_ghor.png"
                alt="Gadget-Ghor"
                width={180}
                height={62}
                className="h-11 w-auto"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              Your next-gen destination for premium electronics and smart
              gadgets — genuine products, unbeatable prices and delivery you can
              count on.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-brand-400" /> Gulshan, Dhaka,
                Bangladesh
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-brand-400" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-brand-400" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-ink-400 transition hover:text-white"
                    >
                      {link}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* divider row: socials + payments */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-7 sm:flex-row">
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition hover:border-brand-400 hover:bg-brand-400 hover:text-ink-950"
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

        {/* bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-ink-400 sm:flex-row">
          <p>
            © {2026} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>

        {/* giant watermark wordmark */}
        <div className="pointer-events-none -mb-3 select-none overflow-hidden pb-1 text-center sm:-mb-6 lg:-mb-10">
          <span className="font-display text-[19vw] font-extrabold leading-none tracking-tighter text-white/[0.05]">
            GADGET-GHOR
          </span>
        </div>
      </div>
    </footer>
  );
}
