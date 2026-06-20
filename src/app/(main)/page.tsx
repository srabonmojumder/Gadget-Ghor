import Hero from "@/components/sections/Hero";
import TopProducts from "@/components/sections/TopProducts";
import Commitment from "@/components/sections/Commitment";
import FlashSaleMarquee from "@/components/sections/FlashSaleMarquee";
import CategoryShowcase from "@/components/sections/CategoryShowcase";
import BlogInsights from "@/components/sections/BlogInsights";
import Reviews from "@/components/sections/Reviews";
import FaqSection from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopProducts />
      <Commitment />
      <FlashSaleMarquee />
      <CategoryShowcase />
      <BlogInsights />
      <Reviews />
      <FaqSection />
    </>
  );
}
