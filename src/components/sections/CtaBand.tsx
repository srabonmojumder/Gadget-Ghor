import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CtaBand({
  title = "Ready to upgrade your tech?",
  subtitle = "Browse the latest gadgets and grab today's best deals before they're gone.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ink-950 pb-20 lg:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 p-10 text-center sm:p-16">
            <div className="blob left-1/2 top-0 h-60 w-60 -translate-x-1/2 bg-accent" />
            <div className="relative z-10">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">{subtitle}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/shop" arrow>
                  Shop Now
                </Button>
                <Button href="/deals" variant="secondary">
                  View Deals
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
