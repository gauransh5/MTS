"use client";

import { motion, useReducedMotion } from "framer-motion";

const ChevronIcon = () => (
  <svg width="22" height="13" viewBox="0 0 22 13" fill="none" aria-hidden>
    <path
      d="M1.5 1.5L11 10.5L20.5 1.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ScrollChevron() {
  const shouldReduce = useReducedMotion();

  const base = { duration: 1.9, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div
      aria-hidden
      className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-0"
    >
      <motion.div
        className="text-white/30"
        animate={shouldReduce ? {} : { y: [0, 7, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ ...base, delay: 0 }}
      >
        <ChevronIcon />
      </motion.div>
      <motion.div
        className="-mt-1.5 text-white/55"
        animate={shouldReduce ? {} : { y: [0, 7, 0], opacity: [0.55, 0.8, 0.55] }}
        transition={{ ...base, delay: 0.18 }}
      >
        <ChevronIcon />
      </motion.div>
    </div>
  );
}
