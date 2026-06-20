import Link from "next/link";
import { Home } from "lucide-react";
import GridBackdrop from "@/components/ui/GridBackdrop";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-ink-950 px-5 text-center">
      <GridBackdrop />
      <div className="blob left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-accent" />

      <div className="relative z-10">
        <p className="font-display text-[28vw] font-extrabold leading-none text-accent sm:text-[12rem]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Oops! Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <Link href="/shop" className="btn btn-secondary">
            Browse Shop
          </Link>
        </div>
      </div>
    </main>
  );
}
