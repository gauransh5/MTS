"use client";

import dynamic from "next/dynamic";

const FramerButton = dynamic(
  () => import("@/framer-components/button-1776447726804-h1l45h.js"),
  { ssr: false },
);

const FramerProject = dynamic(
  () => import("@/framer-components/project-1776447734382-7ru5bb.js"),
  { ssr: false },
);

const FramerPlusIcon = dynamic(
  () => import("@/framer-components/ybaghjexl-1776447732065-4zapc7.js"),
  { ssr: false },
);

export function FramerProjectRow() {
  return (
    <div className="flex w-full justify-center">
      <div
        className="cursor-pointer"
        onClick={() =>
          window.open(
            "https://www.truegritconcretegroup.com.au",
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        <FramerProject
          title="Quote & Estimation Tool"
          image="/work/quote-tool.png"
          link="https://www.truegritconcretegroup.com.au"
        />
      </div>
    </div>
  );
}

export function FramerCtaButton() {
  return (
    <a
      href="#contact"
      className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
    >
      Book a discovery call
      <span
        aria-hidden
        className="transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}

export function FramerAccentIcon() {
  return (
    <span className="inline-flex text-mts-accent" aria-hidden>
      <FramerPlusIcon stroke="rgb(228, 225, 225)" width1={1.5} />
    </span>
  );
}
