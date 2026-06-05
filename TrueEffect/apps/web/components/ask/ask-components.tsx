"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { FileUp, Lightbulb, MessageSquareText, Newspaper, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/form-controls";

export function UploadPlaceholder() {
  return (
    <button className="flex min-h-24 items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-secondary/60 p-4 text-sm font-semibold text-textSecondary" type="button">
      <FileUp className="h-5 w-5 text-mainPrimary" />
      Upload screenshot placeholder
    </button>
  );
}

export function AskInputPanel() {
  const [value, setValue] = useState("");

  return (
    <Card className="p-5">
      <div className="flex items-center gap-2">
        <MessageSquareText className="h-6 w-6 text-mainPrimary" />
        <h2 className="text-2xl font-semibold">Ask True Effect</h2>
      </div>
      <label className="mt-5 block text-sm font-semibold" htmlFor="ask-input">
        Paste something you want explained
      </label>
      <Textarea
        className="mt-2"
        id="ask-input"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Paste a headline, article, city agenda item, school notice, rent notice, policy text, ballot measure, court ruling, or world event."
        value={value}
      />
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <UploadPlaceholder />
        <button className="flex min-h-24 items-center justify-center gap-2 rounded-lg border border-border bg-secondary/60 p-4 text-sm font-semibold" type="button">
          <Newspaper className="h-5 w-5 text-environmentPrimary" />
          Paste article
        </button>
        <button className="flex min-h-24 items-center justify-center gap-2 rounded-lg border border-border bg-secondary/60 p-4 text-sm font-semibold" type="button">
          <ScanLine className="h-5 w-5 text-mainPrimary" />
          Analyze local notice
        </button>
      </div>
      <Button className="mt-5 w-full sm:w-auto" variant="primary">
        <Lightbulb className="h-4 w-4" />
        Explain the impact
      </Button>
    </Card>
  );
}

export function ImpactExplanationSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg bg-secondary/60 p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-textSecondary">{children}</p>
    </div>
  );
}

export function AskOutputPanel() {
  const sections = [
    ["What this is", "A mock explanation of a local notice, policy update, or world event."],
    ["Why people are talking about it", "It may change costs, services, timing, or public priorities."],
    ["How it may affect you", "Your location, household profile, and top concerns shape what matters most."],
    ["How it may affect your family", "School, safety, time, and household planning may be involved."],
    ["How it may affect your money", "Watch for direct bills, indirect prices, premiums, or fees."],
    ["How it may affect your town", "Local budgets, services, infrastructure, and trust may shift."],
    ["What is uncertain", "The final decision, timeline, and implementation details may still change."],
    ["What happens next", "True Effect would track source updates and show what changed since last time."],
    ["What to watch", "Public comments, final votes, agency updates, and budget line items."],
  ];

  return (
    <Card className="p-5">
      <p className="text-sm font-semibold text-environmentPrimary">Mock output</p>
      <h2 className="mt-2 text-2xl font-semibold">True Effect Impact Explanation</h2>
      <div className="mt-5 grid gap-3">
        {sections.map(([title, text]) => (
          <ImpactExplanationSection key={title} title={title}>
            {text}
          </ImpactExplanationSection>
        ))}
      </div>
      <p className="mt-5 rounded-lg border border-border bg-card p-4 text-sm font-semibold text-textSecondary">
        This is not a truth rating. It is an impact explanation.
      </p>
    </Card>
  );
}
