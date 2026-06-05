"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw, ShieldAlert, XCircle } from "lucide-react";
import { adminReviewItems } from "@/lib/mock-data/admin-review";
import { sources } from "@/lib/mock-data/sources";
import type { ReviewItem } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfidenceBadge, ImpactLevelBadge } from "@/components/impact/impact-components";
import { cn } from "@/lib/utils";

export function RiskBadge({ label }: { label: string }) {
  return (
    <Badge className="bg-environmentPrimary/10 text-environmentPrimary">
      <ShieldAlert className="h-3.5 w-3.5" />
      {label}
    </Badge>
  );
}

export function AdminMetricCard({ label, value }: { label: string; value: string }) {
  return (
    <Card className="p-5">
      <p className="text-sm font-semibold text-textSecondary">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </Card>
  );
}

export function ReviewQueueTable({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border p-5">
        <h2 className="text-xl font-semibold">Review queue</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-secondary text-textSecondary">
            <tr>
              <th className="px-4 py-3">Draft</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Impact</th>
              <th className="px-4 py-3">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {adminReviewItems.map((item) => (
              <tr
                className={cn("cursor-pointer border-t border-border hover:bg-secondary/60", selectedId === item.id && "bg-[var(--color-blue-pale)]")}
                key={item.id}
                onClick={() => onSelect(item.id)}
              >
                <td className="px-4 py-4 font-semibold">{item.title}</td>
                <td className="px-4 py-4">{item.status}</td>
                <td className="px-4 py-4">{item.impactLevel}</td>
                <td className="px-4 py-4">{item.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export function ReviewCardPanel({ item }: { item: ReviewItem }) {
  return (
    <Card className="p-5">
      <p className="text-sm font-semibold text-mainPrimary">Selected draft</p>
      <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        <ImpactLevelBadge level={item.impactLevel} />
        <ConfidenceBadge confidence={item.confidence} />
        <Badge>Uncertainty: {item.uncertainty}</Badge>
      </div>
      <div className="mt-5 rounded-lg bg-secondary p-4">
        <p className="text-sm font-semibold">Reviewer notes</p>
        <p className="mt-2 text-textSecondary">{item.reviewerNotes}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.riskLabels.map((label) => (
          <RiskBadge key={label} label={label} />
        ))}
      </div>
    </Card>
  );
}

export function SourceEvidencePanel({ item }: { item: ReviewItem }) {
  const matchedSources = sources.filter((source) => item.sourceIds.includes(source.id));

  return (
    <Card className="p-5">
      <h2 className="text-xl font-semibold">Source evidence</h2>
      <div className="mt-4 grid gap-3">
        {matchedSources.map((source) => (
          <div className="rounded-lg border border-border bg-backgroundSoft p-4" key={source.id}>
            <p className="text-sm font-semibold text-mainPrimary">{source.category}</p>
            <h3 className="mt-1 font-semibold">{source.title}</h3>
            <p className="mt-2 text-sm text-textSecondary">{source.summary}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ReviewActionBar() {
  return (
    <Card className="p-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">
          <CheckCircle2 className="h-4 w-4" />
          Approve
        </Button>
        <Button variant="outline">
          <RotateCcw className="h-4 w-4" />
          Request changes
        </Button>
        <Button variant="outline">
          <XCircle className="h-4 w-4" />
          Reject
        </Button>
        <Button variant="secondary">Mark correction required</Button>
      </div>
    </Card>
  );
}

export function AdminReviewWorkspace() {
  const [selectedId, setSelectedId] = useState(adminReviewItems[0].id);
  const item = adminReviewItems.find((reviewItem) => reviewItem.id === selectedId) ?? adminReviewItems[0];

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        <AdminMetricCard label="Needs review" value="2" />
        <AdminMetricCard label="Approved" value="1" />
        <AdminMetricCard label="Corrections" value="1" />
        <AdminMetricCard label="Published" value="0" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <ReviewQueueTable onSelect={setSelectedId} selectedId={selectedId} />
        <div className="grid gap-6">
          <ReviewCardPanel item={item} />
          <SourceEvidencePanel item={item} />
          <ReviewActionBar />
        </div>
      </div>
    </div>
  );
}
