type BokehBlob = {
  top: string;
  left?: string;
  right?: string;
  size: string;
  gradient: string;
  blur: number;
  anim: "mts-bokeh-a" | "mts-bokeh-b" | "mts-bokeh-c" | "mts-bokeh-d";
  duration: number;
  delay: number;
  opacity: number;
  blend: "screen" | "soft-light" | "plus-lighter";
};

/** Brand-tinted soft circles; motion via CSS keyframes (see globals.css). */
const BLOBS: BokehBlob[] = [
  {
    top: "6%",
    left: "4%",
    size: "min(26vmin, 200px)",
    gradient:
      "radial-gradient(circle at 38% 36%, color-mix(in oklab, var(--mts-subtle) 72%, transparent) 0%, color-mix(in oklab, var(--mts-subtle) 18%, transparent) 38%, transparent 58%)",
    blur: 34,
    anim: "mts-bokeh-a",
    duration: 11,
    delay: 0,
    opacity: 0.72,
    blend: "screen",
  },
  {
    top: "42%",
    left: "2%",
    size: "min(22vmin, 168px)",
    gradient:
      "radial-gradient(circle at 45% 42%, color-mix(in oklab, var(--mts-muted) 68%, transparent) 0%, color-mix(in oklab, var(--mts-muted) 12%, transparent) 45%, transparent 58%)",
    blur: 28,
    anim: "mts-bokeh-b",
    duration: 13,
    delay: -2.5,
    opacity: 0.58,
    blend: "soft-light",
  },
  {
    top: "12%",
    left: "48%",
    size: "min(18vmin, 140px)",
    gradient:
      "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--mts-accent) 62%, transparent) 0%, color-mix(in oklab, var(--mts-accent) 14%, transparent) 42%, transparent 54%)",
    blur: 24,
    anim: "mts-bokeh-c",
    duration: 9,
    delay: -1.2,
    opacity: 0.65,
    blend: "plus-lighter",
  },
  {
    top: "58%",
    left: "38%",
    size: "min(32vmin, 240px)",
    gradient:
      "radial-gradient(circle at 35% 40%, color-mix(in oklab, var(--mts-charcoal) 62%, transparent) 0%, color-mix(in oklab, var(--mts-surface) 35%, transparent) 42%, transparent 62%)",
    blur: 38,
    anim: "mts-bokeh-d",
    duration: 12,
    delay: -3.5,
    opacity: 0.52,
    blend: "soft-light",
  },
  {
    top: "8%",
    right: "8%",
    size: "min(24vmin, 190px)",
    gradient:
      "radial-gradient(circle at 42% 44%, color-mix(in oklab, var(--mts-accent-soft) 65%, transparent) 0%, color-mix(in oklab, var(--mts-accent-soft) 12%, transparent) 40%, transparent 56%)",
    blur: 30,
    anim: "mts-bokeh-b",
    duration: 12,
    delay: -4,
    opacity: 0.68,
    blend: "screen",
  },
  {
    top: "48%",
    right: "4%",
    size: "min(28vmin, 210px)",
    gradient:
      "radial-gradient(circle at 40% 38%, color-mix(in oklab, var(--mts-subtle) 58%, transparent) 0%, color-mix(in oklab, var(--mts-subtle) 14%, transparent) 44%, transparent 60%)",
    blur: 36,
    anim: "mts-bokeh-a",
    duration: 10,
    delay: -1.8,
    opacity: 0.62,
    blend: "plus-lighter",
  },
  {
    top: "72%",
    left: "14%",
    size: "min(20vmin, 150px)",
    gradient:
      "radial-gradient(circle at 48% 48%, color-mix(in oklab, var(--mts-muted) 62%, transparent) 0%, transparent 52%)",
    blur: 26,
    anim: "mts-bokeh-c",
    duration: 11,
    delay: -2.8,
    opacity: 0.55,
    blend: "soft-light",
  },
  {
    top: "68%",
    right: "18%",
    size: "min(16vmin, 128px)",
    gradient:
      "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--mts-raised) 62%, transparent) 0%, transparent 50%)",
    blur: 22,
    anim: "mts-bokeh-d",
    duration: 9.5,
    delay: -0.6,
    opacity: 0.52,
    blend: "soft-light",
  },
  {
    top: "28%",
    left: "62%",
    size: "min(14vmin, 112px)",
    gradient:
      "radial-gradient(circle at 44% 40%, color-mix(in oklab, var(--mts-ink) 32%, transparent) 0%, transparent 55%)",
    blur: 20,
    anim: "mts-bokeh-a",
    duration: 8.5,
    delay: -3.8,
    opacity: 0.45,
    blend: "plus-lighter",
  },
];

export function HeroBokeh() {
  return (
    <div className="mts-bokeh-root" aria-hidden>
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className="mts-bokeh-blob"
          style={{
            top: b.top,
            ...(b.right !== undefined
              ? { right: b.right, left: "auto" as const }
              : { left: b.left ?? "0" }),
            width: b.size,
            height: b.size,
            background: b.gradient,
            filter: `blur(${b.blur}px)`,
            opacity: b.opacity,
            mixBlendMode: b.blend,
            animation: `${b.anim} ${b.duration}s cubic-bezier(0.45, 0.05, 0.55, 0.95) ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
