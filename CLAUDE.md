# Claude / Claude Code — project context

Short pointer for **Claude** (including **Claude Code**) working in this repo. Detailed technical reference: **[`docs/AGENTS.md`](docs/AGENTS.md)**. UX, copy, and visual design: **[`docs/UX-DESIGN.md`](docs/UX-DESIGN.md)**.

## Quick facts

- **Next.js 15** App Router + **React 19** + **Tailwind v4** + **TypeScript**.
- **Framer Motion** is patched via **`patch-package`** (`postinstall`). See **`patches/framer-motion+12.38.0.patch`** before upgrading `framer-motion`.
- **Framer-exported JS** under **`framer-components/`** — load with **`next/dynamic`** and **`ssr: false`** from **`components/framer-blocks.tsx`**.
- Home page is **`app/page.tsx`**: **`MergedHero`** → sections in **`RevealFromRight`** → footer.

## What to read before large edits

1. **`docs/AGENTS.md`** — File map, server/client boundaries, tokens, extension points.
2. **`docs/UX-DESIGN.md`** — Tone, hero/services behavior, motion/a11y expectations.

## Operational habits

- Run **`npm run build`** after substantive changes.
- If Next errors about missing pages or weird chunks: **`rm -rf .next`** then rebuild.
- Prefer **`mts-*`** Tailwind tokens from **`app/globals.css`** over ad-hoc hex.
- New animation: use **`useReducedMotion()`** in client components; mirror critical CSS with **`prefers-reduced-motion`** where applicable.

## Navbar consistency rule

Every page on this site must have a nav with the **same links and CTA**. When editing the nav on any page, apply the same change to all other pages.

| Page | Nav file |
|------|----------|
| `/` (homepage) | `components/merged-hero.tsx` — nav inside `MergedHero` |
| `/murphy-quotes` | `app/murphy-quotes/page.tsx` — nav inside `MergedHero` |

**Current nav shape (must stay in sync):**
- **Logo:** `h-[6.375rem] w-[6.375rem] sm:h-[7.5rem] sm:w-[7.5rem] md:h-[7.875rem] md:w-[7.875rem]` — same on every page.
- **Links:** `gap-7 text-[0.9375rem] font-medium text-white/55 lg:gap-9` — `/#services` · `/#work` · `/#process` · `/#contact` · `·` · *See what we ship →* (`/murphy-quotes`, italic, muted — homepage only)
- **CTA button:** `border-white/25 bg-transparent px-4 py-2 text-sm font-medium md:px-5` — `Let's talk` → `/#contact`
- On `/murphy-quotes`: breadcrumb `/ Murphy Quotes` replaces the italic product link; all other links and sizes identical.

## Out of scope today

No database, auth layer, or API routes in the described architecture — adding them is a deliberate expansion.
