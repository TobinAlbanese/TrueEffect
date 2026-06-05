"use client";

import { Eye, Lock, RefreshCw, Scale, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { MethodologyCard } from "@/components/marketing/marketing-components";

export default function TrustPage() {
  const sections = [
    ["Built for trust, not outrage", "The interface avoids fear-based urgency and focuses on practical personal meaning.", ShieldCheck],
    ["Sources visible", "Important explanations include the source category, source count, and evidence context.", Eye],
    ["Uncertainty labeled", "The product distinguishes what is known from what may change.", Sparkles],
    ["Fact separated from interpretation", "True Effect explains likely impact while keeping factual inputs visible.", Scale],
    ["Sensitive issues reviewed", "Admin review mocks show how higher-risk issues can be checked before publishing.", UserCheck],
    ["Corrections and updates", "Watchlists and briefs show what changed since last time.", RefreshCw],
    ["Privacy-first personalization", "This MVP uses mock profile data and no real backend.", Lock],
    ["No selling personal data", "The prototype contains no ad tracking, data sale flow, or real account logic.", ShieldCheck],
  ] as const;

  return (
    <main className="te-section">
      <div className="te-container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Trust</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">Built for trust, not outrage.</h1>
          <p className="mt-5 text-lg text-textSecondary">
            True Effect is designed to help people understand impact calmly, especially when the topic is sensitive.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {sections.map(([title, text, Icon]) => (
            <MethodologyCard icon={Icon} key={title} text={text} title={title} />
          ))}
        </div>
      </div>
    </main>
  );
}
