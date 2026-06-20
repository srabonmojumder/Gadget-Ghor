import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Gadget-Ghor — Next-Gen Electronics & Smart Gadgets Store",
    template: "%s · Gadget-Ghor",
  },
  description:
    "Gadget-Ghor is your premium destination for electronics, smart gadgets, audio gear, laptops and gaming accessories — unbeatable prices, fast delivery, seamless shopping.",
  keywords: [
    "Gadget-Ghor",
    "electronics store",
    "gadgets",
    "smartphones",
    "laptops",
    "audio",
    "gaming",
  ],
  metadataBase: new URL("https://gadget-ghor.com"),
  openGraph: {
    title: "Gadget-Ghor — Next-Gen Electronics & Smart Gadgets Store",
    description:
      "Premium electronics & smart gadgets. Unbeatable prices, fast delivery, seamless shopping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}
