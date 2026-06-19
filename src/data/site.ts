import {
  Headphones,
  Laptop,
  Smartphone,
  Gamepad2,
  Home,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "New" | "Hot" | "-25%" | "Best Seller" | "Limited";
};

export type Category = {
  name: string;
  desc: string;
  count: string;
  icon: LucideIcon;
  image: string;
};

/* Local images live in /public/images — swap these files to rebrand. */
const img = (file: string) => `/images/${file}`;

/* ---------------------------------------------------------------- */
/*  Brand / store config                                            */
/* ---------------------------------------------------------------- */
export const SITE = {
  name: "Gadget-Ghor",
  tagline: "Next-Gen Gadgets, Delivered.",
  phone: "+880 1700-000000",
  email: "hello@gadget-ghor.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "Shop", href: "#featured" },
  { label: "Deals", href: "#flash" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

/* ---------------------------------------------------------------- */
/*  Categories                                                      */
/* ---------------------------------------------------------------- */
export const CATEGORIES: Category[] = [
  {
    name: "Audio & Wearables",
    desc: "Wireless earbuds, headphones, smartwatches and fitness trackers tuned for studio-grade sound.",
    count: "120+ items",
    icon: Headphones,
    image: img("headphones.jpg"),
  },
  {
    name: "Laptops & Tablets",
    desc: "Featherweight powerhouses for work, study and everyday creation, built to keep up.",
    count: "85+ items",
    icon: Laptop,
    image: img("laptop.jpg"),
  },
  {
    name: "Smartphones & Accessories",
    desc: "Flagship phones, cases, chargers and accessories powered by the latest silicon.",
    count: "60+ items",
    icon: Smartphone,
    image: img("smartphone.jpg"),
  },
  {
    name: "Gaming & Accessories",
    desc: "Consoles, controllers, headsets and RGB peripherals engineered to help you win.",
    count: "95+ items",
    icon: Gamepad2,
    image: img("gaming-controller.jpg"),
  },
  {
    name: "Home Appliances",
    desc: "Smart home gear and kitchen appliances to automate and elevate everyday living.",
    count: "70+ items",
    icon: Home,
    image: img("smart-home.jpg"),
  },
];

/* ---------------------------------------------------------------- */
/*  Products                                                        */
/* ---------------------------------------------------------------- */
export const FEATURED: Product[] = [
  {
    id: 1,
    name: "PulseBuds Pro 2",
    category: "Audio & Wearables",
    price: 129,
    oldPrice: 169,
    rating: 4.9,
    reviews: 1284,
    image: img("earbuds.jpg"),
    badge: "Hot",
  },
  {
    id: 2,
    name: "NovaBook Air 14",
    category: "Laptops & Tablets",
    price: 1099,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 642,
    image: img("laptop.jpg"),
    badge: "-25%",
  },
  {
    id: 3,
    name: "Zenith Watch Ultra",
    category: "Smart Watches",
    price: 249,
    oldPrice: 299,
    rating: 4.7,
    reviews: 921,
    image: img("smartwatch.jpg"),
    badge: "New",
  },
  {
    id: 4,
    name: "Aurora Phone X5",
    category: "Smartphones",
    price: 799,
    oldPrice: 899,
    rating: 4.9,
    reviews: 2103,
    image: img("smartphone.jpg"),
    badge: "Best Seller",
  },
  {
    id: 5,
    name: "Vortex Pad Controller",
    category: "Gaming Gear",
    price: 69,
    oldPrice: 89,
    rating: 4.6,
    reviews: 540,
    image: img("gaming-controller.jpg"),
    badge: "Hot",
  },
  {
    id: 6,
    name: "EchoDome Speaker",
    category: "Smart Home",
    price: 119,
    rating: 4.5,
    reviews: 388,
    image: img("speaker.jpg"),
    badge: "New",
  },
  {
    id: 7,
    name: "SkyView Drone 4K",
    category: "Cameras & Drones",
    price: 449,
    oldPrice: 549,
    rating: 4.8,
    reviews: 274,
    image: img("drone.jpg"),
    badge: "Limited",
  },
  {
    id: 8,
    name: "HyperKey Mech 75",
    category: "Gaming Gear",
    price: 159,
    oldPrice: 199,
    rating: 4.9,
    reviews: 712,
    image: img("keyboard.jpg"),
    badge: "-25%",
  },
];

/* ---------------------------------------------------------------- */
/*  Blog                                                            */
/* ---------------------------------------------------------------- */
export const POSTS = [
  {
    id: 1,
    title: "How AI Earbuds Are Redefining Everyday Listening",
    excerpt:
      "Adaptive noise cancellation and on-device AI are turning earbuds into personal sound engineers.",
    tag: "Audio",
    date: "Jun 12, 2026",
    read: "5 min read",
    image: img("blog-ai-earbuds.jpg"),
  },
  {
    id: 2,
    title: "Building the Ultimate Smart Home in 2026",
    excerpt:
      "From ambient lighting to AI assistants — the components you actually need to automate your space.",
    tag: "Smart Home",
    date: "Jun 08, 2026",
    read: "7 min read",
    image: img("smart-home.jpg"),
  },
  {
    id: 3,
    title: "Laptops vs Tablets: Which Should You Buy?",
    excerpt:
      "Performance, portability and price — a no-nonsense guide to picking your next daily driver.",
    tag: "Buying Guide",
    date: "Jun 02, 2026",
    read: "6 min read",
    image: img("blog-laptops.jpg"),
  },
];

/* ---------------------------------------------------------------- */
/*  Testimonials                                                    */
/* ---------------------------------------------------------------- */
export const TESTIMONIALS = [
  {
    name: "Arif Hossain",
    role: "Product Designer",
    location: "Dhaka, Bangladesh",
    quote:
      "The PulseBuds Pro arrived next morning and the sound is unreal. Gadget-Ghor's checkout was the smoothest I've used.",
    avatar: img("avatar-1.jpg"),
    rating: 5,
  },
  {
    name: "Sofia Mendes",
    role: "Content Creator",
    location: "Lisbon, Portugal",
    quote:
      "I kit out my entire studio here. Genuine products, real warranty, and support that actually responds. Highly recommend.",
    avatar: img("avatar-2.jpg"),
    rating: 5,
  },
  {
    name: "Daniel Cho",
    role: "Software Engineer",
    location: "Seoul, South Korea",
    quote:
      "Snagged the NovaBook Air during a flash sale. Best price I found anywhere and it shipped internationally in days.",
    avatar: img("avatar-3.jpg"),
    rating: 5,
  },
  {
    name: "Layla Ahmed",
    role: "Streamer",
    location: "Dubai, UAE",
    quote:
      "My whole gaming setup is from Gadget-Ghor. The HyperKey keyboard feels premium and the RGB is gorgeous.",
    avatar: img("avatar-4.jpg"),
    rating: 5,
  },
];

/* ---------------------------------------------------------------- */
/*  FAQ                                                             */
/* ---------------------------------------------------------------- */
export const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Orders placed before 4 PM are dispatched the same day. Domestic delivery takes 1–3 business days, while international shipping typically arrives within 5–9 business days.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, mobile wallets, bank transfers and cash on delivery in selected regions. All online payments are encrypted and secure.",
  },
  {
    q: "Can I return a product if I change my mind?",
    a: "Absolutely. You have 30 days from delivery to return any unused item in its original packaging for a full refund or exchange — no questions asked.",
  },
  {
    q: "Are the products covered by warranty?",
    a: "Yes. Every gadget sold at Gadget-Ghor is 100% genuine and backed by a minimum 2-year warranty, plus our own quality protection guarantee.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive a tracking link via email and SMS. You can also track it anytime from your account dashboard in real time.",
  },
  {
    q: "Do you offer support after purchase?",
    a: "Of course. Our support team is available 24/7 via live chat, email and phone to help with setup, troubleshooting or any questions you may have.",
  },
];

/* ---------------------------------------------------------------- */
/*  Stats                                                           */
/* ---------------------------------------------------------------- */
export const STATS = [
  { value: "50K+", label: "Happy Customers" },
  { value: "1.2K+", label: "Products" },
  { value: "4.9★", label: "Avg. Rating" },
  { value: "24/7", label: "Support" },
];
