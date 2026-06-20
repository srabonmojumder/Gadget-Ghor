import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Countdown from "@/components/ui/Countdown";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { SITE } from "@/data/site";
import GridBackdrop from "@/components/ui/GridBackdrop";

export const metadata = { title: "Coming Soon" };

export default function ComingSoonPage() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-ink-950 px-5 py-12">
      <GridBackdrop />
      <div className="blob left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 bg-accent" />

      <div className="relative z-10 w-full max-w-2xl text-center">
        <Image
          src={SITE.logo}
          alt={SITE.name}
          width={200}
          height={69}
          priority
          className="mx-auto h-12 w-auto"
        />
        <span className="eyebrow mt-8">Launching Soon</span>
        <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Something <span className="text-accent">epic</span> is coming
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          We&apos;re putting the finishing touches on the next generation of
          Gadget-Ghor. Be the first to know when we go live.
        </p>

        <div className="mt-10 flex justify-center">
          <Countdown daysAhead={20} />
        </div>

        <div className="mt-10 flex flex-col items-center">
          <NewsletterForm />
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm text-ink-400 transition hover:text-accent"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </main>
  );
}
