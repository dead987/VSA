"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

import { fadeUp } from "@/lib/animations";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedReveal({
  children,
  className = "",
  delay = 0
}: AnimatedRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
