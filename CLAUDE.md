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

## Out of scope today

No database, auth layer, or API routes in the described architecture — adding them is a deliberate expansion.
