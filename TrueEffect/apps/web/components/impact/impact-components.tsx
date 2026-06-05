"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  Bookmark,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Eye,
  FileText,
  Layers,
  Sparkles,
  X,
} from "lucide-react";
import type { ConfidenceLevel, ImpactCard as ImpactCardType, ImpactLevel, LifeArea, SourceItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const levelClasses: Record<ImpactLevel, string> = {
  Low: "border-impactLow/30 bg-impactLow/12 text-[#12606a]",
  Medium: "border-impactMedium/35 bg-impactMedium/14 text-[#8a3a0d]",
  High: "border-impactHigh/35 bg-impactHigh/14 text-[#8f2828]",
  Urgent: "border-impactUrgent/35 bg-impactUrgent/16 text-[#7a1e1e]",
};

export function ImpactLevelBadge({ level }: { level: ImpactLevel }) {
  return <Badge className={cn("border font-semibold", levelClasses[level])}>Impact: {level}</Badge>;
}

export function ConfidenceBadge({ confidence }: { confidence: ConfidenceLevel }) {
  return (
    <Badge className="bg-mainPrimary/10 text-mainPrimary">
      <Sparkles className="h-3.5 w-3.5" />
      Confidence: {confidence}
    </Badge>
  );
}

export function LifeAreaTag({ area }: { area: LifeArea | string }) {
  return <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-textPrimary">{area}</span>;
}

export function TimeHorizonBadge({ label }: { label: string }) {
  return (
    <Badge>
      <Clock className="h-3.5 w-3.5 text-environmentPrimary" />
      {label}
    </Badge>
  );
}

export function SourceCountBadge({ count }: { count: number }) {
  return (
    <Badge>
      <FileText className="h-3.5 w-3.5 text-mainPrimary" />
      {count} sources
    </Badge>
  );
}

export function TrueEffectBottomLine({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-mainPrimary/20 bg-mainPrimary/8 p-4">
      <p className="text-sm font-semibold text-mainPrimary">True Effect bottom line</p>
      <p className="mt-2 text-base text-textPrimary">{children}</p>
    </div>
  );
}

export function ImpactCardExpanded({ card }: { card: ImpactCardType }) {
  const rows = [
    ["What happened", card.whatHappened],
    ["Why it matters", card.whyItMatters],
    ["Does this affect you?", card.affectsYou],
    ["How it may affect your money", card.moneyImpact],
    ["How it may affect your family", card.familyImpact],
    ["How it may affect your town", card.townImpact],
    ["What is uncertain", card.uncertainty],
    ["What to watch", card.whatToWatch],
  ];

  return (
    <div className="mt-5 grid gap-3 border-t border-border pt-5">
      {rows.map(([label, value]) => (
        <div className="rounded-lg bg-secondary/60 p-4" key={label}>
          <p className="text-sm font-semibold text-textPrimary">{label}</p>
          <p className="mt-1 text-base text-textSecondary">{value}</p>
        </div>
      ))}
      <TrueEffectBottomLine>{card.bottomLine}</TrueEffectBottomLine>
    </div>
  );
}

export function SourceDrawer({
  open,
  onClose,
  sources,
}: {
  open: boolean;
  onClose: () => void;
  sources: SourceItem[];
}) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 transition",
        open ? "pointer-events-auto bg-textPrimary/25 opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <aside
        aria-label="Source drawer"
        className={cn(
          "absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-card p-5 shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-textSecondary">Sources</p>
            <h2 className="mt-1 text-2xl font-semibold">Visible evidence</h2>
          </div>
          <button
            aria-label="Close sources"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 grid gap-3">
          {sources.map((source) => (
            <div className="rounded-lg border border-border bg-backgroundSoft p-4" key={source.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-mainPrimary">{source.category}</p>
                  <h3 className="mt-1 font-semibold">{source.title}</h3>
                </div>
                <ExternalLink className="h-4 w-4 text-textSecondary" />
              </div>
              <p className="mt-2 text-sm text-textSecondary">
                {source.sourceType} - {source.date}
              </p>
              <p className="mt-3 text-base text-textPrimary">{source.summary}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export function ImpactCard({ card, sources }: { card: ImpactCardType; sources: SourceItem[] }) {
  const [expanded, setExpanded] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Card className="p-5 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <ImpactLevelBadge level={card.level} />
              <ConfidenceBadge confidence={card.confidence} />
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-textPrimary">{card.title}</h3>
            <p className="mt-3 max-w-3xl text-base text-textSecondary">{card.summary}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2 md:justify-end">
            <TimeHorizonBadge label={card.timeHorizon} />
            <SourceCountBadge count={card.sourceCount} />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {card.areas.map((area) => (
            <LifeAreaTag area={area} key={area} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button onClick={() => setExpanded((current) => !current)} variant="primary">
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {expanded ? "Hide impact" : "Understand impact"}
          </Button>
          <Button variant="outline">
            <Bookmark className="h-4 w-4" />
            Save
          </Button>
          <Button onClick={() => setDrawerOpen(true)} variant="secondary">
            <Eye className="h-4 w-4" />
            View sources
          </Button>
        </div>

        {expanded ? <ImpactCardExpanded card={card} /> : null}
      </Card>
      <SourceDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} sources={sources} />
    </>
  );
}

export function ImpactForecast({
  items,
}: {
  items: { label: string; level: ImpactLevel }[];
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2">
        <Layers className="h-5 w-5 text-mainPrimary" />
        <h2 className="text-xl font-semibold">Impact Forecast</h2>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div className="rounded-lg border border-border bg-backgroundSoft p-4" key={item.label}>
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">{item.label}</span>
              <ImpactLevelBadge level={item.level} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function WhatChangedPanel({ updates }: { updates: string[] }) {
  return (
    <Card className="p-5">
      <h2 className="text-xl font-semibold">What changed since last time</h2>
      <div className="mt-4 grid gap-3">
        {updates.map((update) => (
          <div className="flex items-center gap-3 rounded-lg bg-secondary/70 p-4" key={update}>
            <span className="h-2.5 w-2.5 rounded-full bg-environmentPrimary" />
            <p className="font-medium">{update}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function TimelineEvent({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr] gap-4 rounded-lg border border-border bg-card p-4">
      <div className="text-sm font-semibold text-mainPrimary">{date}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm text-textSecondary">{description}</p>
      </div>
    </div>
  );
}
