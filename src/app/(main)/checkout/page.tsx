import PageBanner from "@/components/ui/PageBanner";
import CheckoutView from "@/components/store/CheckoutView";

export const metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <>
      <PageBanner
        title="Checkout"
        subtitle="Almost there — enter your details to complete your order."
        crumbs={[{ label: "Cart", href: "/cart" }, { label: "Checkout" }]}
      />
      <section className="bg-ink-950 py-16 lg:py-20">
        <div className="container-x">
          <CheckoutView />
        </div>
      </section>
    </>
  );
}
