# Gadget-Ghor 🛒⚡

A modern, fully responsive **electronics & smart-gadgets store landing page** built with Next.js 16, Tailwind CSS v4 and custom CSS. Inspired by the layout of the Electrixo template, but rebuilt from scratch with a fresh **Electric Violet + Lime + Fuchsia** color system, original content and modern motion.

## ✨ Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 16** (App Router) | React framework |
| **React 19** | UI library |
| **Tailwind CSS v4** | Utility-first styling (CSS-based `@theme`) |
| **Custom CSS** | Design tokens, buttons, animations, glassmorphism |
| **Framer Motion** | Scroll reveals & micro-interactions |
| **Swiper** | Best-sellers & testimonials carousels |
| **Lucide React** | Icon set |
| **next/font** | Space Grotesk (display) + Inter (body) |

## 🎨 Design System

The whole palette + custom CSS lives in [`src/app/globals.css`](src/app/globals.css):

- **Brand** — Electric Violet (`--color-brand-*`)
- **Accent** — Electric Lime (`--color-accent-*`)
- **Flash** — Fuchsia for sale/urgency (`--color-flash-*`)
- **Ink** — Violet-tinted neutral scale (`--color-ink-*`)
- Custom utilities: `.btn`, `.card`, `.glass`, `.eyebrow`, `.text-gradient`, `.blob`, `.shine`, marquee/float animations.

Change the brand color in one place — edit the `--color-brand-*` and `--color-accent-*` tokens in `globals.css` and the entire site updates.

## 🧱 Sections

Navbar (announcement bar + sticky header + mobile drawer) → Hero (animated, floating cards, stats) → Brand marquee → Categories grid → Featured Products (filter tabs) → Flash Sale (countdown) → Why-Choose-Us → Best Sellers carousel → Deal of the Day (countdown) → Blog → Testimonials carousel → FAQ accordion → Newsletter → Footer → Back-to-top.

All content/data is centralized in [`src/data/site.ts`](src/data/site.ts) — edit products, categories, testimonials, FAQ, etc. in one file.

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server  (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build
```

## 🖼️ Images

Product/hero imagery is loaded from Unsplash (configured in [`next.config.ts`](next.config.ts) under `images.remotePatterns`). Swap the URLs in `src/data/site.ts` or drop your own files into `/public` and reference them locally.

---

Built for **Gadget-Ghor** — Next-Gen Gadgets, Delivered.
