import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStatement from "@/components/BrandStatement";
import FlashSale from "@/components/FlashSale";
import Categories from "@/components/Categories";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <BrandStatement />
        <FlashSale />
        <Categories />
        <Blog />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
