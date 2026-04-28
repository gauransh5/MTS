import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-mts-canvas px-5 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-mts-muted">
        404
      </p>
      <h1 className="font-[family-name:var(--font-display)] text-2xl text-mts-ink md:text-3xl">
        Page not found
      </h1>
      <Link
        href="/"
        className="rounded-full bg-mts-ink px-5 py-2.5 text-sm font-medium text-mts-deep transition hover:bg-mts-subtle"
      >
        Back home
      </Link>
    </main>
  );
}
