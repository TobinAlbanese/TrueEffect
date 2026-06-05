import Link from "next/link";

export default function NotFound() {
  return (
    <main className="te-container flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-lg font-semibold text-mainPrimary">
        TE
      </div>
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight">This page is not on the radar yet.</h1>
        <p className="mt-3 text-lg text-textSecondary">
          The page may have moved, or this prototype route has not been connected.
        </p>
      </div>
      <Link
        className="rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground"
        href="/"
      >
        Return home
      </Link>
    </main>
  );
}
