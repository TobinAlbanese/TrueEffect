import { Bell, Compass } from "lucide-react";
import { ImpactCard, ImpactForecast, TimelineEvent, WhatChangedPanel } from "@/components/impact/impact-components";
import { SuggestedIssueCard } from "@/components/watchlist/watchlist-components";
import { Card } from "@/components/ui/card";
import { impactCards, todaysUpdates, weeklyTimeline } from "@/lib/mock-data/impact-cards";
import { sources } from "@/lib/mock-data/sources";

export default function TodayPage() {
  const forecast = [
    { label: "Money", level: "Medium" as const },
    { label: "Family", level: "Low" as const },
    { label: "Home", level: "High" as const },
    { label: "Job", level: "Medium" as const },
    { label: "Safety", level: "Medium" as const },
    { label: "Town", level: "Medium" as const },
  ];

  return (
    <div className="grid gap-6">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Today</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Here&apos;s what may affect you today.</h1>
        <p className="mt-3 text-lg text-textSecondary">Sacramento, CA - Updated 18 minutes ago</p>
      </section>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <ImpactForecast items={forecast} />
        <WhatChangedPanel updates={todaysUpdates} />
      </div>
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Compass className="h-5 w-5 text-mainPrimary" />
          <h2 className="text-2xl font-semibold">Today&apos;s True Effects</h2>
        </div>
        <div className="grid gap-5">
          {impactCards.map((card) => (
            <ImpactCard card={card} key={card.id} sources={sources.slice(0, card.sourceCount)} />
          ))}
        </div>
      </section>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-5">
          <h2 className="text-xl font-semibold">This Week timeline</h2>
          <div className="mt-4 grid gap-3">
            {weeklyTimeline.map((item) => (
              <TimelineEvent key={item.title} {...item} />
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-environmentPrimary" />
            <h2 className="text-xl font-semibold">Recommended issues to follow</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {["Utility Rate Proposal", "School Board Budget"].map((title) => (
              <SuggestedIssueCard key={title} title={title} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
