import { StoreProvider } from "@/context/StoreContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CartDrawer from "@/components/store/CartDrawer";
import WishlistDrawer from "@/components/store/WishlistDrawer";
import SearchOverlay from "@/components/store/SearchOverlay";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <CartDrawer />
      <WishlistDrawer />
      <SearchOverlay />
    </StoreProvider>
  );
}
