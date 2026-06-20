"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  Phone,
  Zap,
} from "lucide-react";
import { SITE, MAIN_NAV, PAGES_NAV } from "@/data/site";
import { useStore } from "@/context/StoreContext";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const { openPanel, cartCount, wishCount } = useStore();

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const pagesActive = PAGES_NAV.some((p) => p.href === pathname);

  return (
    <header className="sticky top-0 z-50 text-white">
      {/* Announcement bar */}
      <div className="border-b border-white/10 bg-ink-950">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2 text-ink-300">
            <Zap size={13} className="text-accent" />
            <span className="hidden sm:inline">
              Free express shipping on orders over{" "}
              <strong className="text-accent">$99</strong> — Mega Tech Sale is
              live!
            </span>
            <span className="font-medium text-accent sm:hidden">
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
            ? "bg-ink-950/85 shadow-lg shadow-black/40 backdrop-blur-xl"
            : "bg-ink-950"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={160}
              height={55}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {MAIN_NAV.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-accent ${
                  isActive(l.href) ? "text-accent" : "text-ink-200"
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* Pages dropdown */}
            <div className="group relative">
              <button
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-accent ${
                  pagesActive ? "text-accent" : "text-ink-200"
                }`}
              >
                Pages
                <ChevronDown
                  size={14}
                  className="transition group-hover:rotate-180"
                />
              </button>
              <div className="invisible absolute right-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-56 overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-2 shadow-2xl shadow-black/50">
                  {PAGES_NAV.map((p) => (
                    <Link
                      key={p.label}
                      href={p.href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-ink-200 transition hover:bg-white/10 hover:text-accent"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              aria-label="Search"
              onClick={() => openPanel("search")}
              className="grid h-10 w-10 place-items-center rounded-full text-ink-200 transition hover:bg-white/10 hover:text-white"
            >
              <Search size={20} />
            </button>
            <Link
              href="/contact"
              aria-label="Account"
              className="hidden h-10 w-10 place-items-center rounded-full text-ink-200 transition hover:bg-white/10 hover:text-white sm:grid"
            >
              <User size={20} />
            </Link>
            <button
              aria-label="Wishlist"
              onClick={() => openPanel("wishlist")}
              className="relative grid h-10 w-10 place-items-center rounded-full text-ink-200 transition hover:bg-white/10 hover:text-white"
            >
              <Heart size={20} />
              {wishCount > 0 && (
                <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-ink-950">
                  {wishCount}
                </span>
              )}
            </button>
            <button
              aria-label="Cart"
              onClick={() => openPanel("cart")}
              className="relative grid h-10 w-10 place-items-center rounded-full text-ink-200 transition hover:bg-white/10 hover:text-white"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute right-0.5 top-1 grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-ink-950">
                  {cartCount}
                </span>
              )}
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
          className={`absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-ink-950 text-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <Image
              src={SITE.logo}
              alt={SITE.name}
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
            <button
              onClick={() => {
                setOpen(false);
                openPanel("search");
              }}
              className="flex w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-left text-sm text-ink-400"
            >
              <Search size={16} /> Search gadgets...
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3">
            {MAIN_NAV.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition hover:bg-white/10 hover:text-accent ${
                  isActive(l.href) ? "text-accent" : "text-ink-200"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <button
              onClick={() => setPagesOpen((v) => !v)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink-200 transition hover:bg-white/10"
            >
              Pages
              <ChevronDown
                size={16}
                className={`transition ${pagesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {pagesOpen && (
              <div className="ml-3 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                {PAGES_NAV.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-ink-300 transition hover:text-accent"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </nav>

          <div className="border-t border-white/10 p-5">
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              <ShoppingBag size={18} /> Shop Now
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
