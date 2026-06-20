"use client";

import { useEffect, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function calc(target: number): TimeLeft {
  const d = Math.max(0, target - Date.now());
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export default function Countdown({
  daysAhead = 3,
  className = "",
}: {
  daysAhead?: number;
  className?: string;
}) {
  const [target, setTarget] = useState<number | null>(null);
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const t = Date.now() + daysAhead * 86400000 + 6 * 3600000;
    setTarget(t);
    setTime(calc(t));
  }, [daysAhead]);

  useEffect(() => {
    if (target == null) return;
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Mins", value: time?.minutes },
    { label: "Secs", value: time?.seconds },
  ];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-white/10 bg-ink-900 sm:h-20 sm:w-20">
            <span className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
              {time ? String(u.value).padStart(2, "0") : "--"}
            </span>
            <span className="text-[10px] uppercase tracking-wide text-ink-400">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-2xl font-bold text-accent">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
