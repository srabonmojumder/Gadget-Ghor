"use client";

import { useState } from "react";
import { Search, Check, Package, Truck, Home, ClipboardCheck } from "lucide-react";

const STEPS = [
  { label: "Order Placed", icon: ClipboardCheck },
  { label: "Confirmed", icon: Check },
  { label: "Packed", icon: Package },
  { label: "Shipped", icon: Truck },
  { label: "Out for Delivery", icon: Truck },
  { label: "Delivered", icon: Home },
];

export default function TrackView() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<{ id: string; step: number } | null>(
    null
  );

  return (
    <div className="mx-auto max-w-2xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult({ id: id.trim() || "GG-482910", step: 3 });
        }}
        className="card flex flex-col gap-3 p-5 sm:flex-row"
      >
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"
          />
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your order number (e.g. GG-482910)"
            className="w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-ink-500 focus:border-accent"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Track Order
        </button>
      </form>

      {result && (
        <div className="card mt-6 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-ink-400">Order</p>
              <p className="font-display text-lg font-bold text-white">
                {result.id}
              </p>
            </div>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              {STEPS[result.step].label}
            </span>
          </div>

          <ol className="mt-8 space-y-6">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const done = i < result.step;
              const active = i === result.step;
              return (
                <li key={s.label} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-full transition ${
                        done || active
                          ? "bg-accent text-ink-950"
                          : "border border-white/15 text-ink-500"
                      }`}
                    >
                      {done ? <Check size={18} /> : <Icon size={18} />}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span
                        className={`mt-1 h-8 w-px ${
                          done ? "bg-accent" : "bg-white/10"
                        }`}
                      />
                    )}
                  </div>
                  <div className="pt-2">
                    <p
                      className={`font-medium ${
                        done || active ? "text-white" : "text-ink-500"
                      }`}
                    >
                      {s.label}
                    </p>
                    {active && (
                      <p className="text-sm text-accent">In progress…</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-6 text-center text-xs text-ink-400">
            Demo tracking — status is illustrative.
          </p>
        </div>
      )}
    </div>
  );
}
