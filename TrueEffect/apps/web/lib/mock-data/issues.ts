import type { IssueDetail } from "@/lib/types";
import { sources } from "./sources";

export const issueDetails: IssueDetail[] = [
  {
    id: "california-home-insurance-crisis",
    title: "California Home Insurance Crisis",
    status: "Rule update under review",
    impactLevel: "High",
    affectedGroups: ["Homeowners", "Renters", "Landlords", "Home buyers", "Local housing markets"],
    quickSummary: {
      whatChanged:
        "State insurance regulators updated rule language that could change how coverage is priced and offered.",
      whyItMatters:
        "Insurance availability affects monthly payments, rental costs, housing transactions, and family budgets.",
      bottomLine:
        "The issue is high impact, but your personal effect depends on your property, location, coverage, and renewal timing.",
    },
    personalImpact: {
      homeowners:
        "Premiums, deductibles, renewal options, and coverage availability may change over the next several months.",
      renters:
        "Renters may feel indirect effects if landlord insurance costs rise and are folded into future rent decisions.",
      housing:
        "Insurance availability can affect whether homes sell, whether projects pencil out, and how lenders view risk.",
      finances:
        "Families may need a larger buffer for housing costs or escrow adjustments if premiums move sharply.",
    },
    timeline: [
      {
        date: "March 2026",
        title: "Market pressure increased",
        description: "Consumer complaints and carrier availability concerns rose in multiple regions.",
      },
      {
        date: "May 2026",
        title: "Draft rule released",
        description: "Regulators published rule language and requested public input.",
      },
      {
        date: "June 2026",
        title: "Updated language posted",
        description: "New reporting details and consumer review language were added.",
      },
      {
        date: "Next",
        title: "Comment window closes",
        description: "Final language may shift after consumer, insurer, and lawmaker feedback.",
      },
    ],
    sources: sources.filter((source) =>
      ["state-insurance-bulletin", "sac-council-agenda", "energy-market-note"].includes(source.id),
    ),
    deepContext: {
      background:
        "California insurance costs have become a housing stability issue because homeowners, renters, lenders, and local markets are connected.",
      mechanics:
        "Rule changes may affect how risk is modeled, how premiums are reviewed, and when carriers can adjust prices.",
      stakeholders: ["Households", "Insurance carriers", "Regulators", "Home builders", "Local governments"],
      risks: [
        "Premium increases may strain household budgets.",
        "Limited coverage may slow housing transactions.",
        "Fast rule changes may be hard for consumers to understand.",
      ],
      watchNext: [
        "Final rule language",
        "Carrier filings",
        "Consumer protections",
        "Regional premium changes",
      ],
    },
  },
];

export function getIssueById(issueId: string) {
  return issueDetails.find((issue) => issue.id === issueId) ?? issueDetails[0];
}
