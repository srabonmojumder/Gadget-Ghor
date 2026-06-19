"use client";

import Image from "next/image";
import { useState } from "react";
import { Send, CheckCircle2, BadgePercent } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-white pb-20 pt-4 lg:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-400 text-ink-950">
            <div className="shine pointer-events-none absolute inset-0" />
            <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-14">
              {/* Left */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-950/15 bg-ink-950/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <BadgePercent size={14} /> Exclusive Perks
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                  Stay Updated, Get Exclusive Deals First!
                </h2>
                <p className="mt-4 max-w-md text-ink-800">
                  Join 50,000+ subscribers for tech news, early access to
                  launches and a{" "}
                  <strong>10% off</strong> welcome coupon.
                </p>

                {done ? (
                  <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 font-semibold text-white">
                    <CheckCircle2 size={18} /> You&apos;re in! Check your inbox.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email.trim()) setDone(true);
                    }}
                    className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-full border border-ink-950/15 bg-white px-5 py-3 text-sm text-ink-950 outline-none placeholder:text-ink-400 focus:border-ink-950"
                    />
                    <button type="submit" className="btn btn-dark shrink-0">
                      Subscribe <Send size={16} />
                    </button>
                  </form>
                )}

                <p className="mt-4 text-xs text-ink-700">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>

              {/* Right — product image */}
              <div className="relative mx-auto hidden w-full max-w-sm lg:block">
                <div className="absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-2xl" />
                <Image
                  src="/images/earbuds.jpg"
                  alt="Wireless earbuds"
                  width={500}
                  height={500}
                  className="relative animate-[float_7s_ease-in-out_infinite] mx-auto h-auto w-full max-w-xs rounded-[2rem] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
