"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="te-container flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-lg font-semibold text-mainPrimary">
        TE
      </div>
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight">Something slipped out of view.</h1>
        <p className="mt-3 text-lg text-textSecondary">
          This is a frontend-only prototype, so try refreshing the current view or return home.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          className="rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground"
          onClick={reset}
          type="button"
        >
          Try again
        </button>
        <Link className="rounded-full border border-border px-5 py-3 font-medium" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
