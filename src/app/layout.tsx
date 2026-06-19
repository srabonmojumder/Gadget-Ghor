import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Gadget-Ghor — Next-Gen Electronics & Smart Gadgets Store",
  description:
    "Gadget-Ghor is your modern destination for premium electronics, smart gadgets, audio gear and accessories. Unbeatable prices, lightning-fast delivery and a seamless shopping experience.",
  keywords: [
    "Gadget-Ghor",
    "electronics store",
    "gadgets",
    "smartphones",
    "laptops",
    "audio",
    "smart home",
    "gaming",
  ],
  authors: [{ name: "Gadget-Ghor" }],
  openGraph: {
    title: "Gadget-Ghor — Next-Gen Electronics & Smart Gadgets Store",
    description:
      "Premium electronics & smart gadgets. Unbeatable prices, fast delivery, seamless shopping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
