"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, UserPlus, CheckCircle2 } from "lucide-react";

const iconInput =
  "w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-ink-500 focus:border-accent transition";

export default function RegisterPage() {
  const [done, setDone] = useState(false);

  return (
    <section className="bg-ink-950 py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-md">
          <div className="card p-8">
            {done ? (
              <div className="text-center">
                <CheckCircle2 size={48} className="mx-auto text-accent" />
                <h2 className="mt-4 text-2xl font-bold text-white">
                  Account created!
                </h2>
                <p className="mt-2 text-muted">
                  Welcome to Gadget-Ghor (demo).
                </p>
                <Link href="/account" className="btn btn-primary mt-5">
                  Go to my account
                </Link>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-white">
                  Create account
                </h1>
                <p className="mt-2 text-sm text-muted">
                  Join Gadget-Ghor for faster checkout and exclusive deals.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDone(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"
                    />
                    <input
                      required
                      placeholder="Full name"
                      className={iconInput}
                    />
                  </div>
                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email address"
                      className={iconInput}
                    />
                  </div>
                  <div className="relative">
                    <Lock
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"
                    />
                    <input
                      required
                      type="password"
                      placeholder="Password"
                      className={iconInput}
                    />
                  </div>
                  <label className="flex items-start gap-2 text-sm text-ink-300">
                    <input
                      required
                      type="checkbox"
                      className="mt-0.5 accent-[#fcd33d]"
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/terms" className="text-accent">
                        Terms
                      </Link>{" "}
                      &amp;{" "}
                      <Link href="/privacy" className="text-accent">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                  <button className="btn btn-primary w-full">
                    <UserPlus size={18} /> Create Account
                  </button>
                </form>
                <p className="mt-6 text-center text-sm text-muted">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-accent">
                    Sign in
                  </Link>
                </p>
              </>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-ink-500">
            Demo only — no real account is created.
          </p>
        </div>
      </div>
    </section>
  );
}
