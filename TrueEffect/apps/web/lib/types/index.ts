export type ImpactLevel = "Low" | "Medium" | "High" | "Urgent";
export type ConfidenceLevel = "Low" | "Medium" | "High";

export type LifeArea =
  | "Money"
  | "Family"
  | "Home"
  | "Job"
  | "Schools"
  | "Safety"
  | "Healthcare"
  | "Taxes"
  | "Housing"
  | "Rent"
  | "Traffic"
  | "Town"
  | "Local Government"
  | "Consumer Prices"
  | "Energy"
  | "Environment"
  | "Global Events"
  | "Technology"
  | "Elections"
  | "Students"
  | "Groceries";

export type SourceCategory =
  | "Local"
  | "State"
  | "National"
  | "Global"
  | "Economic"
  | "Context";

export type SourceItem = {
  id: string;
  title: string;
  category: SourceCategory;
  sourceType: string;
  date: string;
  summary: string;
};

export type ImpactCard = {
  id: string;
  title: string;
  level: ImpactLevel;
  areas: LifeArea[];
  summary: string;
  timeHorizon: string;
  confidence: ConfidenceLevel;
  sourceCount: number;
  whatHappened: string;
  whyItMatters: string;
  affectsYou: string;
  moneyImpact: string;
  familyImpact: string;
  townImpact: string;
  uncertainty: string;
  whatToWatch: string;
  bottomLine: string;
};

export type LocalSignal = {
  id: string;
  name: string;
  status: "New" | "Upcoming Vote" | "Watching" | "Stable" | "Updated" | "Needs Attention";
  description: string;
  signalCount: number;
};

export type WatchlistIssue = {
  id: string;
  title: string;
  whyFollowed: string;
  latestChange: string;
  lastUpdated: string;
  nextMilestone: string;
  alertStatus: string;
  impactLevel: ImpactLevel;
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type IssueDetail = {
  id: string;
  title: string;
  status: string;
  impactLevel: ImpactLevel;
  affectedGroups: string[];
  quickSummary: {
    whatChanged: string;
    whyItMatters: string;
    bottomLine: string;
  };
  personalImpact: {
    homeowners: string;
    renters: string;
    housing: string;
    finances: string;
  };
  timeline: TimelineItem[];
  sources: SourceItem[];
  deepContext: {
    background: string;
    mechanics: string;
    stakeholders: string[];
    risks: string[];
    watchNext: string[];
  };
};

export type UserProfile = {
  name: string;
  city: string;
  state: string;
  zip: string;
  profile: string[];
  topConcerns: LifeArea[];
  schoolDistrict: string;
  housingStatus: string;
  familyStatus: string;
  workStatus: string;
};

export type Brief = {
  id: string;
  title: string;
  date: string;
  summary: string;
  highlights: string[];
  watchNext: string[];
};

export type ReviewItem = {
  id: string;
  title: string;
  status: "Draft" | "Needs review" | "Approved" | "Rejected" | "Correction required" | "Published";
  impactLevel: ImpactLevel;
  confidence: ConfidenceLevel;
  uncertainty: "Low" | "Medium" | "High";
  riskLabels: string[];
  reviewerNotes: string;
  sourceIds: string[];
};

export type PricingPlan = {
  name: "Free" | "Plus" | "Pro" | "Team";
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};
