import type { Brief } from "@/lib/types";

export const briefs: Brief[] = [
  {
    id: "weekly-sacramento-brief",
    title: "This week's personal brief",
    date: "June 5, 2026",
    summary:
      "The strongest Sacramento signals this week are insurance costs, school budget decisions, utility rates, and housing votes.",
    highlights: [
      "Home: State insurance rule update remains high impact.",
      "Family: School budget hearing may affect staffing and after-school services.",
      "Money: Utility proposal may raise monthly household costs.",
      "Town: Housing vote may shape construction and traffic over the next year.",
    ],
    watchNext: [
      "School board public comments",
      "Utility workshop outcome",
      "Council housing amendments",
    ],
  },
  {
    id: "previous-brief",
    title: "Previous brief",
    date: "May 29, 2026",
    summary:
      "Last week centered on housing supply, AI job signals, and early energy market pressure.",
    highlights: ["Housing packet posted", "AI labor report released", "Energy pressure began rising"],
    watchNext: ["Insurance rule updates", "Budget hearing schedule"],
  },
];
