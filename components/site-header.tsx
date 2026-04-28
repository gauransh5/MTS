import Link from "next/link";
import { logoHeaderSrc } from "@/lib/branding";
import { siteNavLinks } from "@/lib/site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-mts-line bg-mts-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mts-subtle/50"
        >
          <img
            src={logoHeaderSrc}
            alt="Murhy Tech Studio"
            width={800}
            height={800}
            className="h-12 w-12 object-contain object-center sm:h-14 sm:w-14"
            fetchPriority="high"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-mts-muted md:flex">
          {siteNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-mts-subtle"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full border border-white/15 bg-mts-ink px-4 py-2 text-sm font-medium text-mts-deep transition hover:border-mts-subtle hover:bg-mts-subtle"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}
