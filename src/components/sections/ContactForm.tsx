"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500 focus:border-accent transition";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-300">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  if (sent) {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 size={40} className="text-accent" />
        <h3 className="text-xl font-semibold text-white">Message sent!</h3>
        <p className="text-muted">
          Thanks for reaching out — we&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="card space-y-4 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name">
          <input
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="John Doe"
            className={inputCls}
          />
        </Field>
        <Field label="Email Address">
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="you@email.com"
            className={inputCls}
          />
        </Field>
      </div>
      <Field label="Message">
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="How can we help you?"
          className={`${inputCls} resize-none`}
        />
      </Field>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send Message <Send size={16} />
      </button>
    </form>
  );
}
