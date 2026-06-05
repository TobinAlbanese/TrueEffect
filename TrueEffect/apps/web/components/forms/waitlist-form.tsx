"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FieldLabel, Input, Select, Textarea } from "@/components/ui/form-controls";

const concerns = [
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
];

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Card className="p-6">
        <CheckCircle2 className="h-10 w-10 text-impactLow" />
        <h2 className="mt-4 text-3xl font-semibold">You are on the Sacramento beta list.</h2>
        <p className="mt-3 text-textSecondary">
          This is a mock success state. No information was sent anywhere.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <form
        className="grid gap-5"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input className="mt-2" id="email" placeholder="alex@example.com" type="email" />
          </div>
          <div>
            <FieldLabel htmlFor="zip">ZIP code</FieldLabel>
            <Input className="mt-2" defaultValue="95814" id="zip" />
          </div>
          <div>
            <FieldLabel htmlFor="city">City/state</FieldLabel>
            <Input className="mt-2" defaultValue="Sacramento, CA" id="city" />
          </div>
          <div>
            <FieldLabel htmlFor="user-type">User type</FieldLabel>
            <Select className="mt-2" id="user-type">
              {["Parent", "Renter", "Homeowner", "Worker", "Student", "Small Business Owner", "Local Citizen"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <FieldLabel>Top concerns</FieldLabel>
          <div className="mt-2 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {concerns.map((concern) => (
              <label className="flex items-center gap-2 rounded-lg border border-border bg-secondary/60 p-3 text-sm font-medium" key={concern}>
                <input defaultChecked={["Money", "Home", "Safety", "Schools"].includes(concern)} type="checkbox" />
                {concern}
              </label>
            ))}
          </div>
        </div>
        <div>
          <FieldLabel htmlFor="issues">Issues you want monitored</FieldLabel>
          <Textarea className="mt-2" id="issues" placeholder="Home insurance, school budgets, utility rates..." />
        </div>
        <Button className="w-full md:w-auto" type="submit">
          Join waitlist
        </Button>
      </form>
    </Card>
  );
}
