import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-backgroundSoft px-4 py-10">
      <div className="w-full">
        <Link className="mx-auto mb-8 flex w-max items-center gap-3" href="/">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-textPrimary text-sm font-bold text-white">
            TE
          </span>
          <span className="font-semibold">True Effect</span>
        </Link>
        <div className="flex justify-center">{children}</div>
      </div>
    </main>
  );
}
