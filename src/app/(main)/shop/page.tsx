import PageBanner from "@/components/ui/PageBanner";
import ShopGrid from "@/components/sections/ShopGrid";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <>
      <PageBanner
        title="Shop All Products"
        subtitle="Browse our full range of premium gadgets — filter, sort and find your next favourite."
        crumbs={[{ label: "Shop" }]}
      />
      <section className="bg-ink-950 py-16 lg:py-20">
        <div className="container-x">
          <ShopGrid />
        </div>
      </section>
    </>
  );
}
