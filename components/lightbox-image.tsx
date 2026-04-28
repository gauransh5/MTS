"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function LightboxImage({ src, alt, width, height, className, priority }: Props) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group/lb relative block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        aria-label={`Expand screenshot: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white/80 opacity-0 backdrop-blur-sm transition-opacity group-hover/lb:opacity-100">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M1 4.5V1H4.5M7.5 1H11V4.5M11 7.5V11H7.5M4.5 11H1V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Expand
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal
          aria-label={alt}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            style={{ animation: reduced ? "none" : "mts-lb-in 180ms ease both" }}
            onClick={() => setOpen(false)}
          />

          {/* Image container */}
          <div
            className="relative z-10 max-h-full max-w-6xl w-full overflow-auto rounded-xl shadow-2xl"
            style={{ animation: reduced ? "none" : "mts-lb-scale 200ms ease both" }}
          >
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1200}
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-sm transition hover:bg-black/80 hover:text-white"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
