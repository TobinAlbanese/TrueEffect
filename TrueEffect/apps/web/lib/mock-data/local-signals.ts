import type { LocalSignal } from "@/lib/types";

export const localSignals: LocalSignal[] = [
  {
    id: "city-council",
    name: "City Council",
    status: "Upcoming Vote",
    description: "Housing, utility, and public safety agenda items are active.",
    signalCount: 5,
  },
  {
    id: "school-board",
    name: "School Board",
    status: "Needs Attention",
    description: "Budget hearing and staffing proposals are moving this week.",
    signalCount: 4,
  },
  {
    id: "county-board",
    name: "County Board",
    status: "Watching",
    description: "County services and emergency planning updates are under review.",
    signalCount: 2,
  },
  {
    id: "planning",
    name: "Planning Commission",
    status: "New",
    description: "New zoning notices may affect corridors near downtown.",
    signalCount: 3,
  },
  {
    id: "utilities",
    name: "Utilities",
    status: "Updated",
    description: "A rate proposal has entered public review.",
    signalCount: 3,
  },
  {
    id: "public-safety",
    name: "Public Safety",
    status: "Watching",
    description: "Service priorities and budget language are being reviewed.",
    signalCount: 2,
  },
  {
    id: "local-elections",
    name: "Local Elections",
    status: "Stable",
    description: "No major ballot guide changes detected this week.",
    signalCount: 1,
  },
  {
    id: "emergency-alerts",
    name: "Emergency Alerts",
    status: "Stable",
    description: "No urgent local emergency updates in the mock feed.",
    signalCount: 0,
  },
];

export const upcomingLocalDecisions = [
  "School District Budget Hearing",
  "Utility Rate Workshop",
  "Housing Corridor Vote",
  "Public Safety Budget Memo",
];
