"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, MapPin, Radar } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/form-controls";
import { ImpactRadar } from "@/components/radar/impact-radar";
import { cn } from "@/lib/utils";

const stepLabels = ["Location", "Concerns", "Profile", "Alerts", "Complete"];

export function OnboardingShell({
  step,
  children,
}: {
  step: number;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-backgroundSoft py-8">
      <div className="mx-auto w-full max-w-4xl px-4">
        <Link className="inline-flex items-center gap-3" href="/">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-textPrimary text-sm font-bold text-white">
            TE
          </span>
          <span className="font-semibold">True Effect</span>
        </Link>
        <div className="mt-8 rounded-lg border border-border bg-card p-4">
          <div className="grid grid-cols-5 gap-2">
            {stepLabels.map((label, index) => (
              <div key={label}>
                <div className={cn("h-2 rounded-full bg-secondary", index <= step && "bg-environmentPrimary")} />
                <p className="mt-2 hidden text-xs font-semibold text-textSecondary sm:block">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </main>
  );
}

export function ZipCodeStep() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 text-mainPrimary">
        <MapPin className="h-5 w-5" />
        <p className="font-semibold">Step 1</p>
      </div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Where should True Effect focus?</h1>
      <label className="mt-6 block text-sm font-semibold" htmlFor="zip">
        ZIP code
      </label>
      <Input className="mt-2 max-w-sm" defaultValue="95814" id="zip" />
      <div className="mt-4 rounded-lg bg-secondary p-4">
        <p className="font-semibold">Mock result: Sacramento, CA</p>
        <p className="text-sm text-textSecondary">City council, school board, county, utility, and state signals enabled.</p>
      </div>
      <ButtonLink className="mt-6" href="/onboarding/concerns">
        Continue
      </ButtonLink>
    </Card>
  );
}

function SelectableCards({
  options,
  nextHref,
}: {
  options: string[];
  nextHref: string;
}) {
  const [selected, setSelected] = useState(options.slice(0, 4));

  return (
    <>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              className={cn(
                "rounded-lg border border-border bg-card p-4 text-left font-semibold transition hover:-translate-y-0.5",
                active && "border-environmentPrimary bg-[var(--color-orange-pale)]",
              )}
              key={option}
              onClick={() =>
                setSelected((current) =>
                  current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
                )
              }
              type="button"
            >
              <span className="flex items-center justify-between gap-3">
                {option}
                {active ? <CheckCircle2 className="h-5 w-5 text-environmentPrimary" /> : null}
              </span>
            </button>
          );
        })}
      </div>
      <ButtonLink className="mt-6" href={nextHref}>
        Continue
      </ButtonLink>
    </>
  );
}

export function ConcernSelector() {
  return (
    <Card className="p-6">
      <h1 className="text-4xl font-semibold tracking-tight">What matters most to you?</h1>
      <p className="mt-3 text-textSecondary">Choose the life areas True Effect should prioritize.</p>
      <SelectableCards
        nextHref="/onboarding/profile-type"
        options={[
          "Money",
          "Family",
          "Home",
          "Job",
          "Schools",
          "Safety",
          "Healthcare",
          "Taxes",
          "Housing",
          "Local Government",
          "Consumer Prices",
          "Energy",
          "Environment",
          "Global Events",
          "Technology",
          "Elections",
        ]}
      />
    </Card>
  );
}

export function ProfileTypeSelector() {
  return (
    <Card className="p-6">
      <h1 className="text-4xl font-semibold tracking-tight">Which profile fits you?</h1>
      <p className="mt-3 text-textSecondary">This helps the prototype show the right kind of mock impacts.</p>
      <SelectableCards
        nextHref="/onboarding/notifications"
        options={["Parent", "Renter", "Homeowner", "Worker", "Student", "Small Business Owner", "Local Citizen"]}
      />
    </Card>
  );
}

export function NotificationSelector() {
  return (
    <Card className="p-6">
      <h1 className="text-4xl font-semibold tracking-tight">How should True Effect alert you?</h1>
      <p className="mt-3 text-textSecondary">You can change this anytime.</p>
      <SelectableCards
        nextHref="/onboarding/complete"
        options={["Daily summary", "Weekly brief", "Watchlist updates", "Urgent local alerts"]}
      />
    </Card>
  );
}

export function OnboardingCompleteCard() {
  return (
    <Card className="overflow-hidden p-6">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-mainPrimary">
            <Radar className="h-5 w-5" />
            <p className="font-semibold">Sacramento locked</p>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Your personal radar is ready.</h1>
          <p className="mt-3 text-textSecondary">
            This mock setup is focused on Sacramento, CA, ZIP 95814, with money, home, safety, local government, and schools prioritized.
          </p>
          <ButtonLink className="mt-6" href="/app/today">
            Go to Today
          </ButtonLink>
        </div>
        <ImpactRadar className="min-h-[360px]" />
      </div>
    </Card>
  );
}
