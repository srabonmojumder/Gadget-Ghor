"use client";

import { useEffect, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/**
 * Counts down to `daysAhead` days from first client render.
 * Renders nothing until mounted to avoid hydration mismatch.
 */
export default function Countdown({
  daysAhead = 2,
  variant = "light",
}: {
  daysAhead?: number;
  variant?: "light" | "dark";
}) {
  const [target, setTarget] = useState<number | null>(null);
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const t = Date.now() + daysAhead * 86400000 + 1000 * 60 * 60 * 6;
    setTarget(t);
    setTime(getTimeLeft(t));
  }, [daysAhead]);

  useEffect(() => {
    if (target == null) return;
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Mins", value: time?.minutes },
    { label: "Secs", value: time?.seconds },
  ];

  const box =
    variant === "dark"
      ? "bg-white/10 text-white border-white/15"
      : "bg-white text-ink-950 border-ink-100 shadow-sm";
  const labelColor = variant === "dark" ? "text-ink-300" : "text-ink-400";

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2 sm:gap-3">
          <div
            className={`flex h-14 w-14 flex-col items-center justify-center rounded-2xl border sm:h-16 sm:w-16 ${box}`}
          >
            <span className="font-display text-xl font-bold tabular-nums sm:text-2xl">
              {time ? String(u.value).padStart(2, "0") : "--"}
            </span>
            <span className={`text-[10px] uppercase tracking-wide ${labelColor}`}>
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-xl font-bold text-brand-400">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
