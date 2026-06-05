import {
  Banknote,
  Briefcase,
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Leaf,
  Lightbulb,
  PiggyBank,
  Shield,
  ShoppingCart,
  Users,
  Vote,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { ImpactCard } from "@/components/impact/impact-components";
import { impactCards } from "@/lib/mock-data/impact-cards";
import { sources } from "@/lib/mock-data/sources";

export default function ExplorerPage() {
  const categories = [
    ["Money", "Costs, premiums, wages, and household budgets.", PiggyBank, 6],
    ["Family", "Schools, caregiving, safety, and everyday planning.", Users, 4],
    ["Home", "Insurance, utilities, housing rules, and property costs.", Home, 5],
    ["Job", "Labor shifts, AI, local employers, and training.", Briefcase, 3],
    ["Schools", "District budgets, staffing, services, and calendars.", GraduationCap, 4],
    ["Safety", "Public safety, emergency alerts, and services.", Shield, 3],
    ["Healthcare", "Coverage, access, and local public health updates.", HeartPulse, 2],
    ["Taxes", "Fees, budgets, and ballot measures.", Banknote, 2],
    ["Housing", "Rent, zoning, supply, and neighborhood development.", Building2, 5],
    ["War & Global Events", "Global disruptions that reach local prices.", Landmark, 3],
    ["Technology", "AI, privacy, jobs, and consumer tools.", Lightbulb, 4],
    ["Elections", "Ballot measures and civic deadlines.", Vote, 2],
    ["Local Government", "Council, county, boards, and agencies.", Landmark, 7],
    ["Consumer Prices", "Groceries, shipping, fuel, and services.", ShoppingCart, 3],
    ["Energy", "Gas, utilities, and grid decisions.", Zap, 4],
    ["Environment", "Climate, wildfire, water, and local planning.", Leaf, 3],
  ] as const;

  return (
    <div className="grid gap-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Explorer</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Explore what affects your life.</h1>
      </section>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map(([title, text, Icon, count]) => (
          <Card className="p-5" key={title}>
            <Icon className="h-6 w-6 text-mainPrimary" />
            <h2 className="mt-4 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-textSecondary">{text}</p>
            <p className="mt-4 text-sm font-semibold text-environmentPrimary">{count} current signals</p>
            <ButtonLink className="mt-4" href="/app/explorer" variant="outline">
              Explore
            </ButtonLink>
          </Card>
        ))}
      </div>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Money signals</h2>
        <div className="grid gap-5">
          {impactCards.filter((card) => card.areas.includes("Money")).map((card) => (
            <ImpactCard card={card} key={card.id} sources={sources.slice(0, card.sourceCount)} />
          ))}
        </div>
      </section>
    </div>
  );
}
