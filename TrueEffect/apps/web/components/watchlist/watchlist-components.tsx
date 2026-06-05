import Link from "next/link";
import { Bell, CalendarDays, GitBranch, SlidersHorizontal } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImpactLevelBadge, TimelineEvent } from "@/components/impact/impact-components";
import type { WatchlistIssue } from "@/lib/types";

export function WatchlistCard({ issue }: { issue: WatchlistIssue }) {
  return (
    <Card className="p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <ImpactLevelBadge level={issue.impactLevel} />
          <h3 className="mt-4 text-2xl font-semibold">{issue.title}</h3>
          <p className="mt-2 text-textSecondary">{issue.whyFollowed}</p>
        </div>
        <div className="rounded-lg bg-secondary p-3 text-sm font-semibold text-textSecondary">
          {issue.alertStatus}
        </div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-textSecondary">Latest change</p>
          <p className="mt-1">{issue.latestChange}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-textSecondary">Last updated</p>
          <p className="mt-1">{issue.lastUpdated}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-textSecondary">Next milestone</p>
          <p className="mt-1">{issue.nextMilestone}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <ButtonLink href={`/app/issues/${issue.id}`} variant="primary">
          <GitBranch className="h-4 w-4" />
          View timeline
        </ButtonLink>
        <ButtonLink href="/app/settings" variant="outline">
          <SlidersHorizontal className="h-4 w-4" />
          Manage alerts
        </ButtonLink>
      </div>
    </Card>
  );
}

export function SuggestedIssueCard({ title }: { title: string }) {
  return (
    <Card className="p-5">
      <Bell className="h-6 w-6 text-environmentPrimary" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-textSecondary">Suggested based on your Sacramento profile and top concerns.</p>
      <Link className="mt-4 inline-flex font-semibold text-mainPrimary" href="/app/watchlist">
        Follow issue
      </Link>
    </Card>
  );
}

export function WatchlistTimeline() {
  return (
    <div className="grid gap-3">
      <TimelineEvent date="Today" title="Insurance issue updated" description="State rule language changed." />
      <TimelineEvent date="Wed" title="School budget milestone" description="Public hearing opens." />
      <TimelineEvent date="Fri" title="Housing packet expected" description="Council report may clarify traffic impact." />
    </div>
  );
}

export function AlertPreferenceCard() {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-mainPrimary" />
        <h3 className="text-xl font-semibold">Alert settings</h3>
      </div>
      <div className="mt-4 grid gap-3">
        {["Weekly brief", "Major watchlist updates", "Urgent local alerts"].map((label) => (
          <label className="flex items-center justify-between gap-4 rounded-lg bg-secondary p-4" key={label}>
            <span className="font-medium">{label}</span>
            <input aria-label={label} defaultChecked className="h-5 w-5 accent-[var(--environmentPrimary)]" type="checkbox" />
          </label>
        ))}
      </div>
    </Card>
  );
}
