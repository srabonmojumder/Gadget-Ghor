"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type DotCfg = { left: string; from: string; to: string };

/* Dots sit ON the vertical grid lines. GAP must match the
   .grid-pattern-bold background-size in globals.css, so each dot's column
   (GAP × m) lands exactly on a line. They travel down at staggered speeds. */
const GAP = 280;
const DOTS: DotCfg[] = [
  { m: 1, from: "-20%", to: "120%" },
  { m: 2, from: "-45%", to: "135%" },
  { m: 3, from: "-10%", to: "100%" },
  { m: 4, from: "-55%", to: "130%" },
  { m: 6, from: "-30%", to: "145%" },
  { m: 8, from: "-18%", to: "115%" },
].map(({ m, from, to }) => ({ left: `${GAP * m}px`, from, to }));

function Dot({
  progress,
  cfg,
}: {
  progress: MotionValue<number>;
  cfg: DotCfg;
}) {
  // animate `top` (percentage = relative to the parent section, not the dot itself)
  const top = useTransform(progress, [0, 1], [cfg.from, cfg.to]);
  return (
    <motion.div
      style={{ left: cfg.left, top }}
      className="absolute flex -translate-x-1/2 flex-col items-center"
    >
      <span className="h-28 w-px bg-gradient-to-b from-transparent via-accent/40 to-accent" />
      <span className="-mt-px h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_4px_rgba(252,211,61,0.6)]" />
    </motion.div>
  );
}

export default function GridBackdrop({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 grid-pattern-bold" />
      {DOTS.map((cfg, i) => (
        <Dot key={i} progress={scrollYProgress} cfg={cfg} />
      ))}
    </div>
  );
}
