import type { Category } from "@/lib/types";

export const CATEGORIES: Category[] = [
  {
    name: "Audio & Wearables",
    slug: "audio-wearables",
    desc: "Wireless earbuds, headphones, smartwatches and fitness trackers tuned for studio-grade sound.",
    image: "/images/headphones.jpg",
    count: 120,
  },
  {
    name: "Laptops & Tablets",
    slug: "laptops-tablets",
    desc: "Featherweight powerhouses for work, study and everyday creation, built to keep up.",
    image: "/images/laptop.jpg",
    count: 85,
  },
  {
    name: "Smartphones & Accessories",
    slug: "smartphones-accessories",
    desc: "Flagship phones, cases, chargers and accessories powered by the latest silicon.",
    image: "/images/smartphone.jpg",
    count: 60,
  },
  {
    name: "Gaming & Accessories",
    slug: "gaming-accessories",
    desc: "Consoles, controllers, headsets and RGB peripherals engineered to help you win.",
    image: "/images/gaming-controller.jpg",
    count: 95,
  },
  {
    name: "Home Appliances",
    slug: "home-appliances",
    desc: "Smart home gear and kitchen appliances to automate and elevate everyday living.",
    image: "/images/smart-home.jpg",
    count: 70,
  },
];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);
