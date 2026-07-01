import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-steel-line bg-graphite px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-smoke ${className}`}
    >
      {children}
    </span>
  );
}
