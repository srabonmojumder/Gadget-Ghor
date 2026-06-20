"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink-950">
        <CheckCircle2 size={18} /> You&apos;re in! Check your inbox.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-ink-400 focus:border-accent"
      />
      <button type="submit" className="btn btn-primary shrink-0">
        Subscribe <Send size={16} />
      </button>
    </form>
  );
}
