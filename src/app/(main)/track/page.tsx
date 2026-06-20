import PageBanner from "@/components/ui/PageBanner";
import TrackView from "@/components/store/TrackView";

export const metadata = { title: "Track Order" };

export default function TrackPage() {
  return (
    <>
      <PageBanner
        title="Track Your Order"
        subtitle="Enter your order number to see exactly where your gadgets are."
        crumbs={[{ label: "Track Order" }]}
      />
      <section className="bg-ink-950 py-16 lg:py-20">
        <div className="container-x">
          <TrackView />
        </div>
      </section>
    </>
  );
}
