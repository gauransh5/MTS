# UX & design system — Murhy Tech Studio

This document describes **user experience**, **visual design**, **content tone**, and **motion intent**. For **stack, file layout, and engineering patterns**, see [`AGENTS.md`](./AGENTS.md).

## Brand & positioning

- **Audience:** Service providers and small businesses (plain language; avoid insider jargon like “UX” in the primary intro).
- **Promise:** More than a technical fix — start from **business problems**, ship tools people **actually use**, support **growth** without shelfware or bloated platforms.
- **Logo:** Mark is often **MTS-only** in the asset; spell out **full studio name** in hero typography so the acronym is decoded.

## Typography

- **Display:** Fraunces (`font-[family-name:var(--font-display)]`) — headlines, hero name line.
- **Body:** Albert Sans (`var(--font-sans)`) — UI, paragraphs, nav.
- **Scale:** Hero uses fluid `clamp()` sizes; section titles typically `text-3xl`–`text-4xl` on large screens.

## Color system (dark-first)

Defined in `app/globals.css` and exposed as Tailwind **`mts-*`** tokens:

- **Deep bases:** `--mts-deep`, `--mts-canvas`, `--mts-surface`, `--mts-raised`
- **Neutrals:** `--mts-charcoal`, `--mts-muted`
- **Foreground:** `--mts-ink`, `--mts-subtle`
- **Accent / lines:** `--mts-accent`, `--mts-line`

**Usage:** Prefer semantic tokens over raw hex in components. Hero background uses layered **bokeh** (soft blurred circles) with **brand-tinted** fills, not unrelated neon hues.

## Layout & hierarchy

1. **Merged hero** — Single visual block: **navigation + hero copy** share one atmospheric background (no heavy divider between nav and hero).
2. **Max width** — Content often constrained to **`max-w-6xl`** or **`max-w-3xl`** with **`px-5`**.
3. **Sections** — Clear **`id`** anchors for in-page nav; consistent vertical rhythm (`py-20` / `md:py-28` patterns).

## Hero UX

- **Background:** Animated **bokeh** (blurred circular blobs), subtle **noise** overlay, soft **bottom fade** into page background.
- **Primary actions:** **Start a project** → `#contact`, **View services** → `#services`.
- **Headline structure:** Studio **name line** + **value proposition** under one `<h1>` for accessible document outline.

## Services section UX

- **Six offerings** in a responsive grid (`sm: 2 cols`, `lg: 3 cols`).
- **Motion:** Cards enter with **alternating horizontal** stagger (left/right); **hover** lift, border/shadow, and title/body emphasis; **tap** micro-feedback.
- **Reduced motion:** Animations disable when the user prefers reduced motion.

## Motion principles

- Motion should **guide attention**, not distract (especially on long loops).
- **Scroll reveals:** Sections wrapped in **`RevealFromRight`** slide in from the right with a spring — keep **once:** in view so repeats don’t replay annoyingly.
- Respect **`prefers-reduced-motion`** globally for CSS-driven effects.

## Interactive affordances

- **Buttons / links:** Pill-shaped CTAs; ghost/outline secondary actions on dark backgrounds.
- **Cards:** Hover states communicate **interactivity** even when cards are not links (cursor remains honest — use **`cursor-pointer`** only if navigation is added).
- **Focus:** Preserve visible **focus rings** for keyboard users (`focus-visible` patterns).

## Content tone

- **Direct, operator-friendly** language.
- **Services copy** should map to real deliverables (quoting, sites, apps, backends, enhancements, WordPress migrations).
- **Placeholder areas** (work gallery, client names, contact form) are intentionally marked for replacement — keep tone consistent when swapping real content.

## Footer

- Minimal; copyright + stack mention. Adjust when brand voice finalizes.
