export type Badge = "New" | "Hot" | "-25%" | "Best Seller" | "Limited" | "Sale";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery?: string[];
  badge?: Badge;
  description: string;
  highlights: string[];
  inStock: boolean;
  sku: string;
};

export type Category = {
  name: string;
  slug: string;
  desc: string;
  image: string;
  count: number;
};

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  tag: string;
  date: string;
  read: string;
  image: string;
  author: { name: string; role: string; avatar: string };
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
};

export type Faq = { q: string; a: string };
