"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, LogIn, CheckCircle2 } from "lucide-react";

const iconInput =
  "w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-ink-500 focus:border-accent transition";

export default function LoginPage() {
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
                  Welcome back!
                </h2>
                <p className="mt-2 text-muted">You&apos;re signed in (demo).</p>
                <Link href="/account" className="btn btn-primary mt-5">
                  Go to my account
                </Link>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-white">Sign in</h1>
                <p className="mt-2 text-sm text-muted">
                  Welcome back to Gadget-Ghor.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDone(true);
                  }}
                  className="mt-6 space-y-4"
                >
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
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-ink-300">
                      <input type="checkbox" className="accent-[#fcd33d]" />{" "}
                      Remember me
                    </label>
                    <a href="#" className="text-accent">
                      Forgot password?
                    </a>
                  </div>
                  <button className="btn btn-primary w-full">
                    <LogIn size={18} /> Sign In
                  </button>
                </form>
                <p className="mt-6 text-center text-sm text-muted">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="font-medium text-accent">
                    Create one
                  </Link>
                </p>
              </>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-ink-500">
            Demo only — no real authentication.
          </p>
        </div>
      </div>
    </section>
  );
}
