import Link from "next/link";
import { HeroBokeh } from "@/components/hero-bokeh";
import { logoHeaderSrc } from "@/lib/branding";
import { siteNavLinks } from "@/lib/site-nav";

export function MergedHero() {
  return (
    <section className="relative isolate flex min-h-[min(92dvh,880px)] flex-col overflow-hidden bg-mts-deep pb-16 pt-5 md:min-h-[min(88dvh,820px)] md:pb-24 md:pt-7">
      <HeroBokeh />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,color-mix(in_oklab,var(--mts-ink)_6%,transparent),transparent_50%)]"
        aria-hidden
      />

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-mts-canvas to-transparent" />

      <header className="relative z-10 w-full px-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 md:gap-8">
          <Link
            href="/"
            className="flex shrink-0 items-center outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/30"
          >
            <img
              src={logoHeaderSrc}
              alt="Murphy Tech Studio"
              width={800}
              height={800}
              className="h-[6.375rem] w-[6.375rem] object-contain sm:h-[7.5rem] sm:w-[7.5rem] md:h-[7.875rem] md:w-[7.875rem]"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white/55 md:flex lg:gap-9">
            {siteNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white/90"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="shrink-0 rounded-full border border-white/25 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/[0.06] md:px-5"
          >
            Let&apos;s talk
          </Link>
        </div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-10 text-center md:pt-6">
        <h1 className="max-w-3xl font-[family-name:var(--font-display)] tracking-tight text-white">
          <span className="block text-[clamp(1.65rem,3.6vw,2.35rem)] leading-tight text-white/95">
            Murphy Tech Studio
          </span>
          <span className="mt-4 block text-[clamp(1.85rem,4.8vw,3.15rem)] leading-[1.1] text-white">
            Software that fits how your business actually runs
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          Landing pages, web apps, and custom tools—quotation builders, e-invoicing,
          and integrations built around your workflow.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#0a0a0a] shadow-[0_0_40px_-8px_rgba(255,255,255,0.35)] transition hover:bg-white/90"
          >
            Start a project
          </Link>
          <Link
            href="#services"
            className="rounded-full border border-white/20 bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-white/85 backdrop-blur-sm transition hover:border-white/35 hover:bg-white/[0.08]"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
