"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({
  value,
  onChange,
  initial = 1,
}: {
  value?: number;
  onChange?: (v: number) => void;
  initial?: number;
}) {
  const [internal, setInternal] = useState(initial);
  const q = value ?? internal;
  const set = (v: number) => {
    const nv = Math.max(1, v);
    if (onChange) onChange(nv);
    else setInternal(nv);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-ink-900">
      <button
        aria-label="Decrease quantity"
        onClick={() => set(q - 1)}
        className="grid h-11 w-11 place-items-center text-white transition hover:text-accent"
      >
        <Minus size={16} />
      </button>
      <span className="w-10 text-center font-semibold tabular-nums">{q}</span>
      <button
        aria-label="Increase quantity"
        onClick={() => set(q + 1)}
        className="grid h-11 w-11 place-items-center text-white transition hover:text-accent"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
