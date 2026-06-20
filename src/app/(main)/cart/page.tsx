import PageBanner from "@/components/ui/PageBanner";
import CartView from "@/components/store/CartView";

export const metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <>
      <PageBanner
        title="Shopping Cart"
        subtitle="Review your items and head to checkout when you're ready."
        crumbs={[{ label: "Cart" }]}
      />
      <section className="bg-ink-950 py-16 lg:py-20">
        <div className="container-x">
          <CartView />
        </div>
      </section>
    </>
  );
}
