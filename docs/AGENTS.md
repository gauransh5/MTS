# Agent guide — Murhy Tech Studio (technical)

This document is for **AI coding agents** (Cursor, Copilot, etc.) working in this repository. For **UX, copy, and visual design**, see [`UX-DESIGN.md`](./UX-DESIGN.md). For **Claude Code**-specific notes, see [`../CLAUDE.md`](../CLAUDE.md) in the project root.

## What this project is

- **Next.js 15** (App Router) **marketing site** for Murhy Tech Studio: single home page with anchor sections.
- **No CMS, API, or database** in the current setup. Contact is placeholder copy.
- **Framer-exported** UI pieces live under `framer-components/` and are loaded with `next/dynamic` and `ssr: false`.

## Stack

| Area        | Technology |
|------------|------------|
| Runtime    | Node, **TypeScript** |
| Framework  | **Next.js 15**, `app/` router |
| UI         | **React 19** |
| Styling    | **Tailwind CSS v4** (`app/globals.css`, `@theme inline`) |
| Motion     | **Framer Motion 12** (`framer-motion`) |
| Fonts      | **Fraunces** (display), **Albert Sans** (body) — `app/layout.tsx` |

## Scripts

- `npm run dev` — local dev
- `npm run build` — production build (run before large changes)
- `npm run lint` — ESLint
- `postinstall` runs **`patch-package`**

If the build fails with missing internal Next pages or stale chunks, try **`rm -rf .next`** and rebuild.

## Repository map (high-signal)

| Path | Role |
|------|------|
| `app/layout.tsx` | Root layout, metadata, font CSS variables |
| `app/page.tsx` | Composes home: hero, sections, footer |
| `app/globals.css` | Design tokens (`--mts-*`), bokeh/hero CSS, `prefers-reduced-motion` |
| `app/not-found.tsx` | 404 page (keep; Next expects it) |
| `components/merged-hero.tsx` | Merged nav + hero (server where possible) |
| `components/hero-bokeh.tsx` | Bokeh background layer |
| `components/services-section.tsx` | **Client** — Framer Motion on service cards |
| `components/scroll-reveal.tsx` | **Client** — `RevealFromRight` scroll animation |
| `components/sections.tsx` | Intro, work, clients, testimonials, contact; re-exports `ServicesSection` |
| `components/framer-blocks.tsx` | **Client** — dynamic Framer imports (button, projects, accent icon) |
| `components/site-header.tsx` | Optional standalone header (nav + logo) |
| `lib/branding.ts` | Public logo URLs under `/branding/` |
| `lib/site-nav.ts` | Shared anchor links: `#services`, `#work`, etc. |
| `framer-components/*.js` | Bundled Framer code; **do not** assume stable internal paths |
| `public/branding/` | SVG logos |
| `patches/` | **framer-motion** patch for React 19 / `PopChild` `ref` behavior |

## Technical patterns

1. **Server vs client**  
   Prefer **server components** in `app/` and static sections. Add **`"use client"`** when using Framer Motion, browser-only APIs, or Framer `dynamic` with `ssr: false`.

2. **Framer bundles**  
   Use `next/dynamic(() => import("@/framer-components/…"), { ssr: false })` to avoid SSR issues with generated code.

3. **Theming**  
   Use **`mts-*`** Tailwind colors; they map to **`:root`** in `globals.css`. For translucent overlays, prefer **`color-mix(in oklab, var(--mts-…), transparent)`**.

4. **Motion and a11y**  
   Use **`useReducedMotion()`** in client components that animate. CSS animations (bokeh) should respect **`prefers-reduced-motion`** in `globals.css`.

5. **Navigation**  
   Section IDs: `services`, `work`, `clients`, `testimonials`, `contact`. Use **`scroll-mt-*`** on sections for offset under sticky/fixed UI if you add it.

6. **Dependencies**  
   Upgrading **`framer-motion`** may require **reapplying or updating** the patch in `patches/`. Run `npx patch-package framer-motion` after editing `node_modules` intentionally.

## Safe extension points

- Replace contact block with forms (Tally, Embeds, Server Actions later).
- Add **`app/*/page.tsx`** routes; reuse `layout.tsx` fonts and tokens.
- Thin or remove Framer usage by swapping `framer-blocks` implementations while keeping exports stable for `page.tsx`.

## Naming / branding note

Site copy may mix **“Murhy”** (metadata, footer) and **“Murphy”** (hero). Align intentionally when touching marketing strings.
