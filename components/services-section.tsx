"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Quotation management",
    body: "Structured quoting, versioning, and handoff into sales or finance—so estimates stay consistent and traceable across your team.",
  },
  {
    title: "Websites",
    body: "Marketing sites and landing pages with fast loads, accessible layouts, and content you can update without fighting the template.",
  },
  {
    title: "Web applications",
    body: "Authenticated apps, customer portals, and internal tools—clear UX, solid engineering, and deployments you can evolve.",
  },
  {
    title: "Custom backend solutions & dashboards",
    body: "APIs, integrations, job processing, and admin dashboards tailored to your data—visibility and control without spreadsheet chaos.",
  },
  {
    title: "Enhance existing websites",
    body: "Iterative improvements on what you already run: new flows, refactors, performance work, and UX polish on your current stack.",
  },
  {
    title: "Migration from WordPress to custom solutions",
    body: "Content modeling, URL and SEO preservation, redirects, and a modern front end—move off plugins and theme limits when you're ready.",
  },
];

export function ServicesSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-mts-line bg-mts-deep py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-mts-ink md:text-4xl">
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-mts-muted">
          From quotes and public sites to apps, backends, and migrations—discovery
          through delivery, with handoff you can maintain.
        </p>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduce ? 0 : 0.1,
                delayChildren: reduce ? 0 : 0.06,
              },
            },
          }}
        >
          {services.map((s, index) => (
            <motion.article
              key={s.title}
              variants={{
                hidden: reduce
                  ? { opacity: 1, x: 0 }
                  : {
                      opacity: 0,
                      x: index % 2 === 0 ? -56 : 56,
                    },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 22,
                    mass: 0.9,
                  },
                },
              }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -6,
                      transition: { type: "spring", stiffness: 400, damping: 28 },
                    }
              }
              whileTap={reduce ? undefined : { scale: 0.985 }}
              className="group relative cursor-default overflow-hidden rounded-2xl border border-mts-line bg-mts-surface p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-white/18 hover:bg-mts-raised/90 hover:shadow-[0_22px_50px_-18px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mts-accent/40"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl transition-all duration-500 group-hover:bg-white/[0.08]"
                aria-hidden
              />
              <h3 className="relative text-lg font-semibold text-mts-subtle transition-colors duration-300 group-hover:text-mts-ink">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-mts-muted transition-colors duration-300 group-hover:text-mts-subtle/95">
                {s.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
