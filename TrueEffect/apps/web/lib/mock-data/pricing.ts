import type { PricingPlan } from "@/lib/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Start with a calm daily view of what may affect you.",
    features: [
      "Daily impact feed",
      "Basic local feed",
      "Limited Ask True Effect",
      "Public explainers",
      "Basic alerts",
      "Shareable summaries",
    ],
  },
  {
    name: "Plus",
    price: "$12",
    description: "Personalized tracking for your household and town.",
    featured: true,
    features: [
      "Personalized impact feed",
      "Unlimited Ask True Effect",
      "Local alerts",
      "City council and school board monitoring",
      "Saved issues",
      "Weekly personal impact brief",
      "What changed since last time",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Deeper context for people who follow local decisions closely.",
    features: [
      "Source packets",
      "Timeline builder",
      "Stakeholder maps",
      "Exportable briefs",
      "Local official tracker",
      "Meeting summaries",
      "Deeper context",
    ],
  },
  {
    name: "Team",
    price: "Custom",
    description: "Shared local intelligence for teams and organizations.",
    features: [
      "Shared dashboards",
      "Multiple locations",
      "Custom alerts",
      "Issue folders",
      "Exportable reports",
      "Team notes",
      "Local intelligence briefings",
    ],
  },
];
