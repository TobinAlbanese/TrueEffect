import type { SourceItem } from "@/lib/types";

export const sources: SourceItem[] = [
  {
    id: "sac-council-agenda",
    title: "Sacramento City Council Agenda Packet",
    category: "Local",
    sourceType: "City council agenda",
    date: "June 3, 2026",
    summary: "Meeting agenda and staff materials for the housing vote.",
  },
  {
    id: "school-budget-hearing",
    title: "Sacramento City Unified Budget Hearing Notice",
    category: "Local",
    sourceType: "School board agenda",
    date: "June 2, 2026",
    summary: "Public hearing notice and budget adoption timeline.",
  },
  {
    id: "state-insurance-bulletin",
    title: "California Insurance Department Rule Update",
    category: "State",
    sourceType: "Regulatory update",
    date: "May 30, 2026",
    summary: "State-level summary of proposed insurance market rule changes.",
  },
  {
    id: "energy-market-note",
    title: "Energy Market Weekly Note",
    category: "Economic",
    sourceType: "Commodity market update",
    date: "June 1, 2026",
    summary: "Fuel and shipping pressure indicators for the western U.S.",
  },
  {
    id: "labor-ai-report",
    title: "AI Labor Shift Research Brief",
    category: "National",
    sourceType: "Labor report",
    date: "May 28, 2026",
    summary: "Research summary on occupations most exposed to AI workflow changes.",
  },
  {
    id: "utility-proposal",
    title: "Municipal Utility Rate Proposal",
    category: "Local",
    sourceType: "Utility notice",
    date: "June 4, 2026",
    summary: "Proposal packet for residential and small business rate review.",
  },
  {
    id: "public-safety-memo",
    title: "Public Safety Policy Staff Memo",
    category: "Local",
    sourceType: "Staff memo",
    date: "June 4, 2026",
    summary: "Summary of proposed response priority and budget updates.",
  },
];

export const sourceCategories = [
  {
    name: "Local sources",
    examples: [
      "city council agendas",
      "city council minutes",
      "county board documents",
      "school board agendas",
      "zoning notices",
      "planning commission meetings",
      "local budgets",
      "utility notices",
      "emergency alerts",
    ],
  },
  {
    name: "State sources",
    examples: [
      "state legislature bills",
      "state agency updates",
      "governor announcements",
      "state budgets",
      "state court rulings",
      "regulatory agencies",
      "ballot measure guides",
    ],
  },
  {
    name: "National sources",
    examples: [
      "federal agencies",
      "congressional bills",
      "Supreme Court rulings",
      "executive actions",
      "federal economic data",
      "national emergency updates",
    ],
  },
  {
    name: "Global sources",
    examples: [
      "international news",
      "commodity markets",
      "trade/shipping updates",
      "war and conflict reports",
      "global economic institutions",
      "diplomatic developments",
    ],
  },
  {
    name: "Economic sources",
    examples: [
      "inflation data",
      "labor reports",
      "energy price indexes",
      "housing indicators",
      "consumer price releases",
      "regional cost data",
    ],
  },
  {
    name: "Context sources",
    examples: [
      "historical policy records",
      "agency explainers",
      "academic summaries",
      "budget glossaries",
      "local service maps",
      "plain-language civic guides",
    ],
  },
];
