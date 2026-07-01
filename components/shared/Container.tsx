import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean;
};

export function Container({ children, className = "", wide = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${
        wide ? "max-w-wide" : "max-w-container"
      } ${className}`}
    >
      {children}
    </div>
  );
}
