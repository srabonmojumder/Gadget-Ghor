"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Zap,
  Phone,
  ChevronDown,
} from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 text-white">
      {/* Announcement bar */}
      <div className="border-b border-white/10 bg-ink-950">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2 text-ink-300">
            <Zap size={13} className="text-brand-400" />
            <span className="hidden sm:inline">
              Free express shipping on orders over{" "}
              <strong className="text-brand-400">$99</strong> — Mega Tech Sale is
              live!
            </span>
            <span className="font-medium text-brand-400 sm:hidden">
              Mega Tech Sale — up to 50% off
            </span>
          </p>
          <div className="hidden items-center gap-4 text-ink-400 md:flex">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              <Phone size={12} /> {SITE.phone}
            </a>
            <span className="h-3 w-px bg-white/20" />
            <button className="flex items-center gap-1 transition hover:text-white">
              EN / USD <ChevronDown size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-ink-950/85 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "bg-ink-950"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          {/* Logo */}
          <a href="#home" className="flex shrink-0 items-center">
            <Image
              src="/images/gaget_ghor.png"
              alt="Gadget-Ghor"
              width={160}
              height={55}
              priority
              className="h-9 w-auto sm:h-14"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-200 transition hover:bg-white/10 hover:text-brand-400"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full text-ink-200 transition hover:bg-white/10 hover:text-white"
            >
              <Search size={20} />
            </button>
            <button
              aria-label="Account"
              className="hidden h-10 w-10 place-items-center rounded-full text-ink-200 transition hover:bg-white/10 hover:text-white sm:grid"
            >
              <User size={20} />
            </button>
            <button
              aria-label="Wishlist"
              className="relative grid h-10 w-10 place-items-center rounded-full text-ink-200 transition hover:bg-white/10 hover:text-white"
            >
              <Heart size={20} />
              <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-brand-400 text-[10px] font-bold text-ink-950">
                3
              </span>
            </button>
            <button
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-full text-ink-200 transition hover:bg-white/10 hover:text-white"
            >
              <ShoppingBag size={20} />
              <span className="absolute right-0.5 top-1 grid h-4 w-4 place-items-center rounded-full bg-brand-400 text-[10px] font-bold text-ink-950">
                2
              </span>
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-ink-950 text-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <Image
              src="/images/gaget_ghor.png"
              alt="Gadget-Ghor"
              width={140}
              height={48}
              className="h-8 w-auto"
            />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
              <Search size={16} className="text-ink-400" />
              <input
                placeholder="Search gadgets..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-ink-400"
              />
            </div>
          </div>

          <nav className="flex flex-col gap-1 px-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-200 transition hover:bg-white/10 hover:text-brand-400"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 p-5">
            <a href="#featured" className="btn btn-primary w-full">
              <ShoppingBag size={18} /> Shop Now
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-ink-400"
            >
              <Phone size={14} /> {SITE.phone}
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
