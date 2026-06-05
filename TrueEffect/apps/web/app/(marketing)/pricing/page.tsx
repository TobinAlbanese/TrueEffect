import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlans } from "@/lib/mock-data/pricing";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return (
    <main className="te-section">
      <div className="te-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Pricing</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">Pick the level of signal you need.</h1>
          <p className="mt-5 text-lg text-textSecondary">No Stripe, billing, payment logic, or entitlement logic is implemented.</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card className={cn("flex flex-col p-6", plan.featured && "border-environmentPrimary ring-2 ring-environmentPrimary/15")} key={plan.name}>
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-4 text-4xl font-semibold">{plan.price}</p>
              <p className="mt-3 text-textSecondary">{plan.description}</p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li className="flex gap-2 text-sm" key={feature}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mainPrimary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink className="mt-6" href="/waitlist" variant={plan.featured ? "primary" : "outline"}>
                Join waitlist
              </ButtonLink>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
