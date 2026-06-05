"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { Activity, CircleDot, MapPin, Radio, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function SoftGradientOrb({
  className,
  tone = "orange",
}: {
  className?: string;
  tone?: "orange" | "blue" | "cyan";
}) {
  const toneClass =
    tone === "blue"
      ? "from-mainPrimary/35 to-mainPrimary/0"
      : tone === "cyan"
        ? "from-lightPrimary/35 to-lightPrimary/0"
        : "from-environmentPrimary/35 to-environmentPrimary/0";

  return <div className={cn("pointer-events-none absolute rounded-full bg-radial blur-2xl", toneClass, className)} />;
}

export function SignalRing({ delay = 0, className }: { delay?: number; className?: string }) {
  return (
    <motion.div
      animate={{ opacity: [0.2, 0.72, 0.2], scale: [0.86, 1, 0.86] }}
      className={cn("absolute inset-0 rounded-full border border-mainPrimary/25", className)}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function RadarSignal({
  label,
  className,
  tone = "blue",
}: {
  label: string;
  className?: string;
  tone?: "blue" | "orange" | "cyan";
}) {
  const toneClass =
    tone === "orange"
      ? "bg-environmentPrimary text-white"
      : tone === "cyan"
        ? "bg-lightPrimary text-[#092136]"
        : "bg-mainPrimary text-white";

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      className={cn("absolute flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold shadow-lg", toneClass, className)}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <CircleDot className="h-4 w-4" />
      {label}
    </motion.div>
  );
}

export function FloatingSignalCard({
  title,
  meta,
  className,
}: {
  title: string;
  meta: string;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      className={cn("glass-panel absolute w-56 rounded-lg p-4 shadow-xl", className)}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-textPrimary">{title}</p>
        <Radio className="h-4 w-4 text-environmentPrimary" />
      </div>
      <p className="mt-2 text-sm text-textSecondary">{meta}</p>
    </motion.div>
  );
}

export function ProductGlassPanel({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("glass-panel rounded-lg p-4 shadow-xl", className)}>{children}</div>;
}

export function ImpactRadar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "signal-grid relative min-h-[420px] overflow-hidden rounded-lg border border-border bg-card/80 p-5 soft-shadow",
        className,
      )}
    >
      <SoftGradientOrb className="-left-24 -top-24 h-72 w-72" tone="blue" />
      <SoftGradientOrb className="-right-16 top-20 h-64 w-64" tone="orange" />
      <SoftGradientOrb className="bottom-0 left-1/3 h-56 w-56" tone="cyan" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <ProductGlassPanel className="w-full max-w-xs">
          <label className="text-xs font-semibold uppercase tracking-[0.08em] text-textSecondary" htmlFor="hero-zip">
            Focus ZIP
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
            <MapPin className="h-4 w-4 text-mainPrimary" />
            <input
              className="w-full bg-transparent text-base font-semibold outline-none"
              defaultValue="95814"
              id="hero-zip"
              aria-label="ZIP code"
            />
          </div>
        </ProductGlassPanel>
        <ProductGlassPanel className="hidden max-w-[15rem] sm:block">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ShieldCheck className="h-4 w-4 text-lightPrimary" />
            Sources visible
          </div>
          <p className="mt-2 text-sm text-textSecondary">4 local updates are under review.</p>
        </ProductGlassPanel>
      </div>

      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full">
        <SignalRing />
        <SignalRing delay={0.7} className="scale-75" />
        <SignalRing delay={1.2} className="scale-50" />
        <div className="absolute inset-[38%] rounded-full bg-mainPrimary shadow-[0_0_60px_rgba(47,107,255,0.45)]" />
        <div className="absolute left-1/2 top-1/2 h-1 w-[46%] origin-left bg-gradient-to-r from-mainPrimary to-transparent" />
      </div>

      <RadarSignal className="left-[10%] top-[42%]" label="Housing" tone="orange" />
      <RadarSignal className="right-[9%] top-[34%]" label="Schools" tone="blue" />
      <RadarSignal className="bottom-[25%] left-[28%]" label="Insurance" tone="cyan" />

      <FloatingSignalCard
        className="bottom-6 right-5"
        meta="Home impact is high. Money impact is medium."
        title="Today's Impact Forecast"
      />

      <div className="absolute bottom-6 left-5 z-10 hidden w-64 rounded-lg border border-border bg-card/90 p-4 shadow-lg sm:block">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Activity className="h-4 w-4 text-environmentPrimary" />
          5 things may affect Sacramento this week
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-textSecondary">
          <span className="rounded-full bg-secondary px-2 py-1">Money</span>
          <span className="rounded-full bg-secondary px-2 py-1">Home</span>
          <span className="rounded-full bg-secondary px-2 py-1">Town</span>
        </div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        className="absolute right-8 top-28 text-lightPrimary/50"
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <Zap className="h-9 w-9" />
      </motion.div>
    </div>
  );
}
