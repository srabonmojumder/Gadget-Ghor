import type { Badge as BadgeType } from "@/lib/types";

const styles: Record<BadgeType, string> = {
  New: "bg-accent text-ink-950",
  Hot: "bg-white text-ink-950",
  "-25%": "bg-accent text-ink-950",
  "Best Seller": "bg-white text-ink-950",
  Limited: "bg-accent/15 text-accent border border-accent/40",
  Sale: "bg-accent text-ink-950",
};

export default function Badge({ label }: { label: BadgeType }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${styles[label]}`}
    >
      {label}
    </span>
  );
}
