"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealFromRightProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Scroll-triggered reveal: content enters from the right (see motion.dev scroll examples).
 */
export function RevealFromRight({ children, className }: RevealFromRightProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 72 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px", amount: 0.2 }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 90,
              damping: 22,
              mass: 0.85,
            }
      }
    >
      {children}
    </motion.div>
  );
}
