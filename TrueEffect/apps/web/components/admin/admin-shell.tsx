import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { TrueEffectLogo } from "@/components/navigation/true-effect-logo";

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-backgroundSoft">
      <header className="border-b border-border bg-card/90 backdrop-blur">
        <div className="te-container flex min-h-20 items-center justify-between gap-4">
          <TrueEffectLogo />
          <nav className="flex items-center gap-3">
            <Link className="rounded-full bg-secondary px-4 py-2 font-medium" href="/app/today">
              App
            </Link>
            <Link className="rounded-full bg-textPrimary px-4 py-2 font-medium text-white" href="/admin/review">
              Admin Review
            </Link>
          </nav>
        </div>
      </header>
      <main className="te-container py-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-mainPrimary/10 px-4 py-2 text-sm font-semibold text-mainPrimary">
          <ShieldCheck className="h-4 w-4" />
          Frontend-only admin review mock
        </div>
        {children}
      </main>
    </div>
  );
}
