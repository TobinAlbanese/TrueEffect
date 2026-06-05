import Link from "next/link";
import { cn } from "@/lib/utils";

export function TrueEffectLogo({ className }: { className?: string }) {
  return (
    <Link aria-label="True Effect home" className={cn("inline-flex items-center gap-3", className)} href="/">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-textPrimary text-sm font-bold text-white shadow-sm">
        TE
      </span>
      <span className="text-lg font-semibold tracking-tight text-textPrimary">True Effect</span>
    </Link>
  );
}
