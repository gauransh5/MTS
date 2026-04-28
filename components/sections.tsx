"use client";

import { useState } from "react";
import Image from "next/image";
import { FramerAccentIcon } from "./framer-blocks";
import { CalEmbed } from "./cal-embed";

// Sign up at formspree.io → create a form → paste your form ID here
const FORMSPREE_ID = "mwvadkga";

const differentiators = [
  { label: "Scoped to your real workflow", desc: "We map how your team actually works before writing a line of code." },
  { label: "Shipped in weeks, not quarters", desc: "Tight scopes, fast iterations, working demos at every milestone." },
  { label: "Code you own — no lock-in", desc: "No subscriptions to us. No platform dependency. It's yours." },
];

export function IntroSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">

        {/* Left — statement */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-mts-muted">
            Why MTS
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight text-mts-ink md:text-4xl lg:text-5xl">
            We start from your operation.{" "}
            <span className="text-mts-subtle">Not a template.</span>
          </h2>
          <div className="mt-6 h-px w-12 bg-mts-line-strong" />
        </div>

        {/* Right — copy + differentiators */}
        <div className="flex flex-col justify-center">
          <p className="text-base leading-relaxed text-mts-muted md:text-lg">
            Most businesses end up with tools that looked great in a demo but
            don&apos;t match how the team actually works. We scope tightly around
            your real workflow, build only what you need, and hand over something
            your people can run without us.
          </p>
          <ul className="mt-8 space-y-5">
            {differentiators.map((d) => (
              <li key={d.label} className="flex gap-4">
                <span className="mt-1 shrink-0 text-mts-accent" aria-hidden>
                  <FramerAccentIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-mts-subtle">{d.label}</p>
                  <p className="mt-0.5 text-sm text-mts-muted">{d.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export { ServicesSection } from "./services-section";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-mts-ink md:text-4xl">
          What we&apos;ve built
        </h2>
        <p className="mt-3 max-w-2xl text-mts-muted">
          We&apos;re a focused studio—each engagement gets our full attention.
          Here&apos;s a recent example.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* True Grit */}
          <a
            href="https://www.truegritconcretegroup.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-mts-line bg-mts-surface transition hover:border-white/20"
          >
            <div className="relative h-44 w-full overflow-hidden bg-mts-raised">
              <Image
                src="/products/true-grit/preview.png"
                alt="True Grit Concrete Group — website preview"
                fill
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mts-surface via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-mts-line bg-mts-raised px-3 py-1 text-xs font-medium tracking-wide text-mts-subtle">
                Concrete &amp; trades · Perth, WA
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-mts-ink">
                True Grit Concrete Group — Quote &amp; Estimation Tool
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mts-muted">
                Replaced ad-hoc spreadsheets with structured line-item templates,
                version history, and client-facing PDF export — so the team sends
                professional quotes without chasing files.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-mts-subtle transition group-hover:text-mts-ink">
                Visit live site
                <span aria-hidden>↗</span>
              </span>
            </div>
          </a>

          {/* Murphy Quotes product */}
          <a
            href="/murphy-quotes"
            className="group overflow-hidden rounded-2xl border border-mts-line bg-mts-surface transition hover:border-white/20"
          >
            <div className="relative h-44 w-full overflow-hidden bg-mts-raised">
              <Image
                src="/products/murphy-quotes/dashboard.png"
                alt="Murphy Quotes — sales dashboard"
                fill
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mts-surface via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-mts-line bg-mts-raised px-3 py-1 text-xs font-medium tracking-wide text-mts-subtle">
                Quoting software · all service businesses
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-mts-ink">
                Murphy Quotes — End-to-End Quoting System
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mts-muted">
                Send branded quotes, get e-signatures, track every deal in a
                live dashboard. Built for trades, security, consulting, and any
                service business still quoting from spreadsheets.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-mts-subtle transition group-hover:text-mts-ink">
                See all features
                <span aria-hidden>→</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Discovery (free)",
    body: "We talk through your workflow, the blockers, and what success looks like. No code written, no commitment required.",
  },
  {
    number: "02",
    title: "Clear proposal",
    body: "A written scope: what we build, what we skip, timeline, and a fixed or milestone price—before anything starts.",
  },
  {
    number: "03",
    title: "Build & check in",
    body: "Working demos at every milestone. Async updates or video calls—you stay informed without slowing us down.",
  },
  {
    number: "04",
    title: "Ship & stay",
    body: "Deployment, handover docs, and 30 days of post-launch support so your team can take ownership confidently.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-y border-mts-line bg-mts-deep py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-mts-ink md:text-3xl">
          How we work
        </h2>
        <p className="mt-2 max-w-xl text-sm text-mts-muted">
          A clear process from first conversation to live product—no ambiguity,
          no surprises.
        </p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-mts-line bg-mts-surface p-6"
            >
              <span className="block font-[family-name:var(--font-display)] text-5xl font-bold leading-none text-mts-charcoal">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-semibold text-mts-subtle">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mts-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const guarantees = [
  "Working demo before final payment",
  "All code in a private repo you own from day one",
  "Milestone updates—no radio silence",
  "30 days post-launch support included",
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-mts-ink md:text-4xl">
          What clients say
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <figure className="flex flex-col justify-between rounded-2xl border border-mts-line bg-mts-surface p-8">
            <blockquote className="text-lg leading-relaxed text-mts-subtle">
              &ldquo;Our quotes used to take a day or two to put together—spreadsheets,
              back-and-forth, easy to make mistakes. Gauransh built us something
              that just fits how we work. Estimates go out the same day now, they
              look professional, and clients take them seriously. Easy to deal
              with and actually understood what we needed.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-mts-muted">
              <span className="font-medium text-mts-ink">Dawinder</span>
              <span className="block">True Grit Concrete Group, Perth WA</span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between rounded-2xl border border-mts-line bg-mts-surface p-8">
            <p className="text-base font-semibold text-mts-subtle">
              What every project includes
            </p>
            <ul className="mt-6 space-y-3">
              {guarantees.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-mts-muted">
                  <span className="mt-px shrink-0 text-mts-accent" aria-hidden>
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

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-mts-line bg-gradient-to-b from-mts-canvas via-mts-deep to-mts-deep pb-24 pt-16 md:pb-32 md:pt-20"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-mts-ink md:text-4xl">
          Get in touch
        </h2>
        <p className="mt-3 max-w-xl text-mts-muted">
          Book a free 30-minute call, or send a message and we&apos;ll reply
          within one business day.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto mt-10 max-w-6xl px-5">
        <div className="grid md:grid-cols-[1fr_auto_1fr] md:items-start">

          {/* Left — Cal embed */}
          <div className="pr-0 md:pr-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-mts-muted">
              Book a call
            </p>
            <CalEmbed />
          </div>

          {/* Middle — vertical divider (desktop) */}
          <div className="relative hidden self-stretch px-8 md:block">
            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 15%, rgba(255,255,255,0.12) 85%, transparent)",
              }}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="flex items-center justify-center rounded-full border border-mts-line bg-mts-deep px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-mts-muted">
                or
              </span>
            </div>
          </div>

          {/* Mobile divider */}
          <div className="my-10 flex items-center gap-4 md:hidden">
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)",
              }}
            />
            <span className="text-[10px] font-medium uppercase tracking-widest text-mts-muted">
              or
            </span>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.12) 20%, transparent)",
              }}
            />
          </div>

          {/* Right — Contact form */}
          <div className="pl-0 md:pl-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-mts-muted">
              Send a message
            </p>
        {status === "success" ? (
          <div className="rounded-2xl border border-mts-line bg-mts-surface px-8 py-10 text-center">
            <p className="font-[family-name:var(--font-display)] text-xl text-mts-ink">
              Message received
            </p>
            <p className="mt-3 text-sm text-mts-muted">
              We&apos;ll get back to you within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-mts-subtle">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-mts-line bg-mts-surface px-4 py-2.5 text-sm text-mts-ink placeholder:text-mts-muted focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-mts-subtle">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-mts-line bg-mts-surface px-4 py-2.5 text-sm text-mts-ink placeholder:text-mts-muted focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-mts-subtle">
                What are you building or trying to fix?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Describe your situation — what's slowing you down, what you've tried, and what good looks like."
                className="w-full resize-none rounded-xl border border-mts-line bg-mts-surface px-4 py-2.5 text-sm text-mts-ink placeholder:text-mts-muted focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
              />
            </div>
            {status === "error" && (
              <p className="text-xs text-red-400">
                Something went wrong — please try again or book a call above.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-white py-2.5 text-sm font-medium text-[#0a0a0a] transition hover:bg-white/90 disabled:opacity-50"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
          </div>
        </div>
      </div>
    </section>
  );
}
