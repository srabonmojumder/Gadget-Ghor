"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500 focus:border-accent transition";

export default function CommentForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card flex items-center gap-3 p-6">
        <CheckCircle2 className="text-accent" size={24} />
        <p className="text-white">
          Thanks! Your comment has been submitted and is awaiting moderation.
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
      className="space-y-4"
    >
      <textarea
        required
        rows={5}
        placeholder="Write your comment..."
        className={`${inputCls} resize-none`}
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <input required placeholder="Name" className={inputCls} />
        <input required type="email" placeholder="Email" className={inputCls} />
        <input placeholder="Website (optional)" className={inputCls} />
      </div>
      <button type="submit" className="btn btn-primary">
        Post Comment <Send size={16} />
      </button>
    </form>
  );
}
