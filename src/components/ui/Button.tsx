import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  light: "btn btn-light",
};

export default function Button({
  children,
  href,
  variant = "primary",
  arrow = false,
  className = "",
  onClick,
  type = "button",
}: Props) {
  const cls = `${variants[variant]} ${className}`.trim();
  const inner = (
    <>
      {children}
      {arrow && <ArrowUpRight size={18} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
