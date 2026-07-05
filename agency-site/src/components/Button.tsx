import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap";

  const variants = {
    primary:
      "bg-signal-400 text-white hover:bg-signal-500 shadow-[0_0_0_0_rgba(91,127,255,0.5)] hover:shadow-[0_0_24px_2px_rgba(91,127,255,0.35)]",
    secondary:
      "bg-ink-100 text-ink-900 hover:bg-white",
    ghost:
      "border border-white/15 text-ink-100 hover:border-white/30 hover:bg-white/5",
  };

  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
    </Link>
  );
}
