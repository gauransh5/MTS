import type { Metadata } from "next";
import Link from "next/link";
import { RevealFromRight } from "@/components/scroll-reveal";
import { LightboxImage } from "@/components/lightbox-image";
import { HeroBokeh } from "@/components/hero-bokeh";
import { logoHeaderSrc } from "@/lib/branding";

export const metadata: Metadata = {
  title: "Murphy Quotes — Professional Quoting Software for Service Businesses",
  description:
    "Send branded quotes in minutes. Your client opens a clean page, signs with their name, and you're notified instantly. Built for trades, security, consulting, and service businesses.",
  openGraph: {
    type: "website",
    siteName: "Murphy Tech Studio",
    title: "Murphy Quotes — Professional Quoting Software for Service Businesses",
    description:
      "Send branded quotes in minutes. Your client opens a clean page, signs with their name, and you're notified instantly. Built for trades, security, consulting, and service businesses.",
    url: "https://murphytechstudio.com/murphy-quotes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murphy Quotes — Professional Quoting Software for Service Businesses",
    description:
      "Send branded quotes in minutes. Your client opens a clean page, signs with their name, and you're notified instantly. Built for trades, security, consulting, and service businesses.",
  },
};

// ─── Merged Nav + Hero ────────────────────────────────────────────────────────

function MergedHero() {
  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-mts-deep pb-0 pt-5 md:pt-7">
      <HeroBokeh />

      {/* Radial top glow */}
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

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-mts-canvas to-transparent" />

      {/* Nav */}
      <header className="relative z-10 w-full px-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 md:gap-8">
          <div className="flex items-center gap-3">
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
            <span className="text-white/30">/</span>
            <span className="text-sm font-semibold text-white/70">
              Murphy Quotes
            </span>
          </div>

          <nav className="hidden items-center gap-7 text-[0.9375rem] font-medium text-white/55 md:flex lg:gap-9">
            <Link href="/#services" className="transition-colors hover:text-white/90">Services</Link>
            <Link href="/#work" className="transition-colors hover:text-white/90">Work</Link>
            <Link href="/#process" className="transition-colors hover:text-white/90">Process</Link>
            <Link href="/#contact" className="transition-colors hover:text-white/90">Contact</Link>
          </nav>

          <Link
            href="/#contact"
            className="shrink-0 rounded-full border border-white/25 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/[0.06] md:px-5"
          >
            Let&apos;s talk
          </Link>
        </div>
      </header>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14 pt-12 md:pt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Murphy Quotes
        </p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
          Professional quotes your clients{" "}
          <span className="text-white/70">sign the same day.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
          Built for service businesses. Send a branded quote in minutes —
          your client opens a clean page, signs with their name, and
          you&apos;re notified the moment they do.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/#contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0a] shadow-[0_0_40px_-8px_rgba(255,255,255,0.35)] transition hover:bg-white/90"
          >
            Get this for your business
          </Link>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-sm transition hover:border-white/35 hover:bg-white/[0.08]"
          >
            See how it works ↓
          </a>
        </div>

        {/* Screenshot */}
        <div className="relative mt-14">
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <div className="ml-4 flex-1 rounded-full bg-white/8 px-3 py-1">
                <span className="text-[11px] text-white/40">
                  yourdomain.com/q/a8f3e…
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden border border-t-0 border-white/10">
            <LightboxImage
              src="/products/murphy-quotes/quote-link-preview.png"
              alt="Client-facing quote page — branded, professional, sign from any device"
              width={1280}
              height={800}
              className="w-full"
              priority
            />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mts-canvas to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pain Strip ───────────────────────────────────────────────────────────────

const pains = [
  {
    icon: "⏱",
    title: "Quotes that take hours",
    body: "Rebuilding the same line items in spreadsheets every time a new job comes in.",
  },
  {
    icon: "📭",
    title: "PDFs that go unread",
    body: "You send it, then silence. No idea if they opened it, liked it, or showed it to a competitor.",
  },
  {
    icon: "📉",
    title: "Deals that go cold",
    body: "No status on each quote means follow-ups get missed and jobs go to whoever quoted faster.",
  },
];

function PainStrip() {
  return (
    <section className="border-y border-mts-line bg-mts-deep py-14">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-mts-muted">
          Sound familiar?
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-mts-line bg-mts-surface p-6"
            >
              <span className="text-2xl" aria-hidden>
                {p.icon}
              </span>
              <h3 className="mt-3 text-base font-semibold text-mts-subtle">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mts-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    n: "01",
    label: "Lead arrives",
    desc: "From your website form or entered manually by your team.",
  },
  {
    n: "02",
    label: "Build the quote",
    desc: "Add line items, taxes, and notes. Load a template or pick from your product catalog.",
  },
  {
    n: "03",
    label: "Finalise & get a link",
    desc: "One click locks the quote and generates a unique, unguessable link.",
  },
  {
    n: "04",
    label: "Send it to your client",
    desc: "Copy the link and a pre-written message, paste into your email.",
  },
  {
    n: "05",
    label: "Client views the page",
    desc: "A branded page with your logo and full quote details. No login needed.",
  },
  {
    n: "06",
    label: "Client signs",
    desc: "They type their name as an electronic signature and click Accept.",
  },
  {
    n: "07",
    label: "You're notified",
    desc: "You and your sales rep get an email instantly. The dashboard updates.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-mts-muted">
          End to end
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-mts-ink md:text-4xl">
          How a deal moves through Murphy Quotes
        </h2>
        <p className="mt-3 max-w-xl text-mts-muted">
          From the moment a lead lands to the moment they sign — every step is
          tracked and handled in one place.
        </p>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-mts-line bg-mts-surface p-5"
            >
              {i < steps.length - 1 && (
                <span className="absolute -right-2 top-6 hidden text-mts-charcoal lg:block">
                  →
                </span>
              )}
              <span className="block font-[family-name:var(--font-display)] text-4xl font-bold leading-none text-mts-charcoal">
                {s.n}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-mts-subtle">
                {s.label}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-mts-muted">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── Feature Spotlight ────────────────────────────────────────────────────────

type SpotlightProps = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  img: string;
  imgAlt: string;
  flip?: boolean;
};

function FeatureSpotlight({
  eyebrow,
  title,
  body,
  bullets,
  img,
  imgAlt,
  flip,
}: SpotlightProps) {
  return (
    <div
      className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 ${
        flip ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-[55%]">
        <div className="overflow-hidden rounded-xl border border-mts-line shadow-2xl shadow-black/40">
          <LightboxImage
            src={img}
            alt={imgAlt}
            width={900}
            height={600}
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full md:w-[45%]">
        <p className="text-xs font-semibold uppercase tracking-widest text-mts-muted">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-mts-ink md:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-mts-muted md:text-base">
          {body}
        </p>
        <ul className="mt-6 space-y-2.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-sm text-mts-muted"
            >
              <span className="mt-0.5 shrink-0 text-mts-accent-soft">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const spotlights: SpotlightProps[] = [
  {
    eyebrow: "Client experience",
    title: "The page your client actually sees",
    body: "When your client opens the link, they land on a clean, branded page — your logo, your colors, your quote. No login, no app download. They read it, sign it, and you hear back the same day.",
    bullets: [
      "Branded with your logo and colors",
      "Electronic signature — they type their name",
      "Works on any device, any browser",
      "Download or print to PDF in one click",
    ],
    img: "/products/murphy-quotes/quote-link-preview.png",
    imgAlt: "Client-facing branded quote page with accept form",
  },
  {
    eyebrow: "Quote builder",
    title: "Build a detailed quote in minutes",
    body: "Add line items, set quantities and prices, apply taxes, and write custom notes. Switch any item to hourly billing with a date/time schedule and the system calculates the total for you.",
    bullets: [
      "Standard and hourly billing types",
      "GST, PST, VAT — any tax label, any rate",
      "Rich-text sections for T&Cs and inclusions",
      "All totals calculated server-side",
    ],
    img: "/products/murphy-quotes/create-quote.png",
    imgAlt: "Quote builder with line items, tax totals, and notes",
    flip: true,
  },
  {
    eyebrow: "Pipeline visibility",
    title: "Know where every deal stands",
    body: "The dashboard shows your month's estimate total, accepted total, and conversion rate at a glance. Every quote has a clear status so nothing falls through the cracks.",
    bullets: [
      "Monthly estimate and accepted totals",
      "Conversion rate (accepted ÷ finalised)",
      "Recent activity feed with one-click access",
      "Full-text search and status filters",
    ],
    img: "/products/murphy-quotes/dashboard.png",
    imgAlt: "Sales dashboard showing KPIs and recent quote activity",
  },
  {
    eyebrow: "White-label branding",
    title: "Looks like you — not like software",
    body: "Configure your company name, logo, colors, tax labels, currency, and locale from the Settings page. No developer needed. Premium accounts can extract brand colors directly from their logo.",
    bullets: [
      "Logo, primary color, company name",
      "Tax labels: GST/PST, HST, VAT, or custom",
      "Currency and locale for any region",
      "Extract your palette from your logo in one click",
    ],
    img: "/products/murphy-quotes/customisation-settings.png",
    imgAlt: "Settings page showing branding, color, and locale controls",
    flip: true,
  },
  {
    eyebrow: "Templates & catalog",
    title: "Stop starting from scratch",
    body: "Build a library of named quote templates and a product catalog with default pricing. Sales reps load a template and pick from the catalog — line items pre-fill in seconds.",
    bullets: [
      "Named templates with saved line items",
      "Product catalog with SKU, price, and unit",
      "One-click load into any draft quote",
      "Any quote can be saved as a template",
    ],
    img: "/products/murphy-quotes/quote-templates.png",
    imgAlt: "Quote templates library listing saved templates",
  },
  {
    eyebrow: "Team management",
    title: "Your whole sales team in one portal",
    body: "Sales rep and admin accounts with separate access levels. Each rep's name and profile photo appear on every quote they send. Admins control settings, users, and the product catalog.",
    bullets: [
      "Sales and Admin roles with separate access",
      "Rep photo shown on client quote pages",
      "Full audit trail on every quote action",
      "Deactivate users without losing their data",
    ],
    img: "/products/murphy-quotes/create-user-page.png",
    imgAlt: "User management page with create user form and role selector",
    flip: true,
  },
];

function FeatureSpotlights() {
  return (
    <section id="features" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-24 px-5">
        {spotlights.map((s) => (
          <RevealFromRight key={s.eyebrow}>
            <FeatureSpotlight {...s} />
          </RevealFromRight>
        ))}
      </div>
    </section>
  );
}

// ─── Feature Grid ─────────────────────────────────────────────────────────────

const allFeatures = [
  { icon: "🔗", title: "Inbound Lead Capture", desc: "Webhook from your website or manual entry — every enquiry in one place." },
  { icon: "📋", title: "Quote Builder", desc: "Line items, quantities, prices, taxes, and notes in a single view." },
  { icon: "🕐", title: "Hourly & Schedule Billing", desc: "Add date/time shifts — hours and totals calculated automatically." },
  { icon: "📦", title: "Product Catalog", desc: "Reusable catalog of services; pick items to pre-fill quotes in one click." },
  { icon: "📄", title: "Quote Templates", desc: "Save your best quotes as templates and load them with one click." },
  { icon: "✍️", title: "Rich-Text Sections", desc: "Add T&Cs, inclusions, or any custom block with bold, lists, and more." },
  { icon: "🔒", title: "Unique Shareable Link", desc: "Cryptographically random token — unguessable, no customer data in the URL." },
  { icon: "🎨", title: "Branded Client Page", desc: "Your logo, your colors — a professional page with no login required." },
  { icon: "✅", title: "Electronic Signature", desc: "Client types their name as an e-signature and clicks Accept." },
  { icon: "🔁", title: "Request Changes Flow", desc: "Client flags revisions from the quote link — no email ping-pong." },
  { icon: "📧", title: "Email Notifications", desc: "Admin and sales rep notified the moment a client accepts or requests changes." },
  { icon: "🖨️", title: "Print-Ready PDF", desc: "Clean print layout — client saves a PDF from the browser, no extra software." },
  { icon: "📊", title: "Sales Dashboard", desc: "Estimate total, accepted total, and conversion rate for the current month." },
  { icon: "🔍", title: "Search, Filter & Sort", desc: "Find any quote by name, email, number, status, or date range instantly." },
  { icon: "📜", title: "Full Audit Trail", desc: "Every action on every quote is logged — who did what and when." },
  { icon: "🖼️", title: "White-Label Branding", desc: "Your name, logo, and colors everywhere — no code changes needed." },
  { icon: "🎨", title: "Full Theme Control", desc: "Premium: set navbar, body, buttons, and font colors independently." },
  { icon: "🌈", title: "Logo Color Extraction", desc: "Extract your brand palette from your logo image in one click." },
  { icon: "👥", title: "Team & User Management", desc: "Add sales reps and admins; set roles; deactivate without losing data." },
  { icon: "🔐", title: "Role-Based Permissions", desc: "Admins control everything; reps stay focused on their own quotes." },
  { icon: "🌍", title: "Multi-Region Ready", desc: "Any currency, any locale, any tax label — no hardcoded lists." },
  { icon: "👤", title: "User Profiles & Photo", desc: "Profile photo shown on every quote the rep sends — personal, professional." },
];

function FeatureGrid() {
  return (
    <section className="border-t border-mts-line bg-mts-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-mts-muted">
          Everything included
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-mts-ink md:text-4xl">
          22 features. One system.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-mts-line bg-mts-surface p-5"
            >
              <span className="text-xl" aria-hidden>
                {f.icon}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-mts-subtle">
                {f.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-mts-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial ──────────────────────────────────────────────────────────────

function Testimonial() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 md:grid-cols-2">
          <figure className="flex flex-col justify-between rounded-2xl border border-mts-line bg-mts-surface p-8">
            <blockquote className="text-lg leading-relaxed text-mts-subtle">
              &ldquo;Our quotes used to take a day or two to put together —
              spreadsheets, back-and-forth, easy to make mistakes. Gauransh
              built us something that just fits how we work. Estimates go out
              the same day now, they look professional, and clients take them
              seriously. Easy to deal with and actually understood what we
              needed.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-mts-muted">
              <span className="font-medium text-mts-ink">Dawinder</span>
              <span className="block">
                True Grit Concrete Group · Perth, WA
              </span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-mts-line bg-mts-surface p-8">
            <p className="text-base font-semibold text-mts-subtle">
              What&apos;s included with every deployment
            </p>
            <ul className="space-y-3">
              {[
                "Configured with your branding, team, and tax settings",
                "Your domain, your data — no shared infrastructure",
                "Full handover so your team can run it independently",
                "30 days post-launch support included",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-mts-muted"
                >
                  <span className="mt-0.5 shrink-0 text-mts-accent-soft">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Close ────────────────────────────────────────────────────────────────

function CtaClose() {
  return (
    <section className="border-t border-mts-line bg-gradient-to-b from-mts-canvas via-mts-deep to-mts-deep py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-mts-ink md:text-4xl lg:text-5xl">
          Built for your workflow.{" "}
          <span className="text-mts-subtle">Not a SaaS template.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mts-muted md:text-lg">
          We configure and deploy Murphy Quotes for your business — your
          branding, your team, your data. No monthly subscription to us. You
          own it.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="rounded-full bg-mts-ink px-8 py-3.5 text-sm font-semibold text-mts-deep transition hover:bg-mts-subtle"
          >
            Talk to us about your business
          </Link>
          <Link
            href="/"
            className="rounded-full border border-mts-line px-8 py-3.5 text-sm font-medium text-mts-subtle transition hover:border-white/20 hover:text-mts-ink"
          >
            About Murphy Tech Studio
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function ProductFooter() {
  return (
    <footer className="border-t border-mts-line bg-mts-deep py-10 text-center text-sm text-mts-muted">
      <p>
        © {new Date().getFullYear()} Murphy Tech Studio.{" "}
        <Link href="/" className="transition-colors hover:text-mts-subtle">
          murphytechstudio.com
        </Link>
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MurphyQuotesPage() {
  return (
    <>
      <main>
        <MergedHero />
        <RevealFromRight>
          <PainStrip />
        </RevealFromRight>
        <RevealFromRight>
          <HowItWorks />
        </RevealFromRight>
        <FeatureSpotlights />
        <RevealFromRight>
          <FeatureGrid />
        </RevealFromRight>
        <RevealFromRight>
          <Testimonial />
        </RevealFromRight>
        <RevealFromRight>
          <CtaClose />
        </RevealFromRight>
      </main>
      <ProductFooter />
    </>
  );
}
