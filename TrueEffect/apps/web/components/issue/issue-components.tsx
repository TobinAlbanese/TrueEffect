"use client";

import { useState } from "react";
import { AlertTriangle, Clock, FileText, Users } from "lucide-react";
import type { IssueDetail } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImpactLevelBadge, TimelineEvent, TrueEffectBottomLine } from "@/components/impact/impact-components";
import { cn } from "@/lib/utils";

export function IssueHeader({ issue }: { issue: IssueDetail }) {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <Badge>{issue.status}</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{issue.title}</h1>
          <p className="mt-3 max-w-3xl text-textSecondary">
            A mock issue detail page showing current status, personal impact, timeline, sources, and deeper context.
          </p>
        </div>
        <ImpactLevelBadge level={issue.impactLevel} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {issue.affectedGroups.map((group) => (
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium" key={group}>
            {group}
          </span>
        ))}
      </div>
    </Card>
  );
}

export function IssueSummary({ issue }: { issue: IssueDetail }) {
  return (
    <div className="grid gap-4">
      <Card className="p-5">
        <h2 className="text-xl font-semibold">What changed</h2>
        <p className="mt-2 text-textSecondary">{issue.quickSummary.whatChanged}</p>
      </Card>
      <Card className="p-5">
        <h2 className="text-xl font-semibold">Why it matters</h2>
        <p className="mt-2 text-textSecondary">{issue.quickSummary.whyItMatters}</p>
      </Card>
      <TrueEffectBottomLine>{issue.quickSummary.bottomLine}</TrueEffectBottomLine>
    </div>
  );
}

export function IssueTimeline({ issue }: { issue: IssueDetail }) {
  return (
    <div className="grid gap-3">
      {issue.timeline.map((item) => (
        <TimelineEvent key={`${item.date}-${item.title}`} {...item} />
      ))}
    </div>
  );
}

export function StakeholderList({ issue }: { issue: IssueDetail }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-mainPrimary" />
        <h2 className="text-xl font-semibold">Stakeholders</h2>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {issue.deepContext.stakeholders.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </Card>
  );
}

export function WhatToWatch({ issue }: { issue: IssueDetail }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-environmentPrimary" />
        <h2 className="text-xl font-semibold">What to watch next</h2>
      </div>
      <ul className="mt-4 grid gap-2">
        {issue.deepContext.watchNext.map((item) => (
          <li className="rounded-lg bg-secondary p-3" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function SourceList({ issue }: { issue: IssueDetail }) {
  return (
    <div className="grid gap-3">
      {issue.sources.map((source) => (
        <Card className="p-5" key={source.id}>
          <div className="flex items-start gap-3">
            <FileText className="mt-1 h-5 w-5 text-mainPrimary" />
            <div>
              <h3 className="font-semibold">{source.title}</h3>
              <p className="mt-1 text-sm text-textSecondary">
                {source.sourceType} - {source.category} - {source.date}
              </p>
              <p className="mt-3 text-textSecondary">{source.summary}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function IssueTabs({ issue }: { issue: IssueDetail }) {
  const tabs = ["Quick Summary", "Personal Impact", "Timeline", "Sources", "Deep Context"];
  const [active, setActive] = useState(tabs[0]);

  return (
    <div>
      <div className="mb-5 flex gap-2 overflow-x-auto rounded-lg border border-border bg-card p-2">
        {tabs.map((tab) => (
          <button
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-semibold text-textSecondary",
              active === tab && "bg-textPrimary text-white",
            )}
            key={tab}
            onClick={() => setActive(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      {active === "Quick Summary" ? <IssueSummary issue={issue} /> : null}
      {active === "Personal Impact" ? (
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(issue.personalImpact).map(([label, text]) => (
            <Card className="p-5" key={label}>
              <h2 className="text-xl font-semibold capitalize">{label}</h2>
              <p className="mt-2 text-textSecondary">{text}</p>
            </Card>
          ))}
        </div>
      ) : null}
      {active === "Timeline" ? <IssueTimeline issue={issue} /> : null}
      {active === "Sources" ? <SourceList issue={issue} /> : null}
      {active === "Deep Context" ? (
        <div className="grid gap-4">
          <Card className="p-5">
            <h2 className="text-xl font-semibold">Background</h2>
            <p className="mt-2 text-textSecondary">{issue.deepContext.background}</p>
          </Card>
          <Card className="p-5">
            <h2 className="text-xl font-semibold">Policy mechanics</h2>
            <p className="mt-2 text-textSecondary">{issue.deepContext.mechanics}</p>
          </Card>
          <StakeholderList issue={issue} />
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-environmentPrimary" />
              <h2 className="text-xl font-semibold">Risks</h2>
            </div>
            <ul className="mt-4 grid gap-2">
              {issue.deepContext.risks.map((risk) => (
                <li className="rounded-lg bg-secondary p-3" key={risk}>
                  {risk}
                </li>
              ))}
            </ul>
          </Card>
          <WhatToWatch issue={issue} />
        </div>
      ) : null}
    </div>
  );
}
