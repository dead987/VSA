import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-brass text-obsidian hover:bg-brass-hover focus-visible:ring-brass/40 border border-brass/80",
  secondary:
    "border border-steel-line bg-graphite text-warm-ivory hover:border-brass/60 hover:text-brass focus-visible:ring-brass/35",
  ghost:
    "border border-transparent bg-transparent text-smoke hover:text-brass focus-visible:ring-brass/30"
};

const baseClass =
  "inline-flex h-12 items-center justify-center rounded-md px-5 text-sm font-medium tracking-[0.08em] transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-4";

export function Button({
  children,
  href,
  variant = "primary",
  className = ""
}: ButtonProps) {
  const classes = `${baseClass} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
