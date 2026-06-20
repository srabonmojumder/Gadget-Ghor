import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  return (
    <Reveal
      className={`${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
