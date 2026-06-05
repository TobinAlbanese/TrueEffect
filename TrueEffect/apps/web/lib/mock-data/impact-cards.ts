import type { ImpactCard } from "@/lib/types";

export const impactCards: ImpactCard[] = [
  {
    id: "city-council-housing-vote",
    title: "City Council Housing Vote",
    level: "Medium",
    areas: ["Housing", "Rent", "Traffic", "Town"],
    summary:
      "A local housing vote may affect rent supply, construction, traffic, and neighborhood development.",
    timeHorizon: "3-12 months",
    confidence: "Medium",
    sourceCount: 4,
    whatHappened:
      "Sacramento council members are reviewing a housing proposal that would change where new units can move forward.",
    whyItMatters:
      "Housing decisions can shape future rent pressure, neighborhood construction, traffic patterns, and local services.",
    affectsYou:
      "This is most relevant if you rent, own near proposed corridors, commute through construction areas, or care about neighborhood growth.",
    moneyImpact:
      "More housing can ease rent pressure over time, but construction and infrastructure costs may affect local fees.",
    familyImpact:
      "Families may see changes in school enrollment patterns, commute timing, and nearby services.",
    townImpact:
      "The town impact depends on project location, infrastructure planning, and how quickly the vote turns into permits.",
    uncertainty:
      "The final vote, project scope, and timing may change after public comment and staff review.",
    whatToWatch: "Council amendments, traffic studies, and whether school or utility capacity is mentioned.",
    bottomLine:
      "This is not an immediate household change, but it could shape Sacramento housing and neighborhood costs over the next year.",
  },
  {
    id: "school-district-budget-hearing",
    title: "School District Budget Hearing",
    level: "High",
    areas: ["Family", "Schools", "Taxes", "Town"],
    summary:
      "A school budget hearing may affect staffing, programs, class sizes, and after-school services.",
    timeHorizon: "1-6 months",
    confidence: "High",
    sourceCount: 5,
    whatHappened:
      "The district posted a budget hearing with proposed adjustments to staffing, programs, and support services.",
    whyItMatters:
      "School budgets can affect classroom support, extracurricular programs, transportation, and local tax conversations.",
    affectsYou:
      "This matters most for parents, students, school employees, homeowners, and anyone following local services.",
    moneyImpact:
      "Budget gaps can lead to service reductions, future tax proposals, or changes in household costs for enrichment programs.",
    familyImpact:
      "Families may need to plan around class sizes, after-school availability, and program changes.",
    townImpact:
      "School decisions often ripple into neighborhood stability, youth services, and local civic trust.",
    uncertainty:
      "The hearing may change priorities before adoption, and state funding updates could alter the final numbers.",
    whatToWatch: "Staffing line items, special education services, transportation, and public comments.",
    bottomLine:
      "If schools are part of your life, this deserves attention now rather than after the budget is finalized.",
  },
  {
    id: "state-insurance-rule-update",
    title: "State Insurance Rule Update",
    level: "High",
    areas: ["Home", "Money", "Housing"],
    summary:
      "A state insurance update may affect homeowner premiums, wildfire-area coverage, and rental housing costs.",
    timeHorizon: "1-9 months",
    confidence: "Medium",
    sourceCount: 6,
    whatHappened:
      "State regulators are updating insurance rules that could change how carriers price and offer coverage.",
    whyItMatters:
      "Insurance availability affects homeowners, landlords, renters, mortgage approvals, and housing costs.",
    affectsYou:
      "This is most relevant if you own a home, rent from a small landlord, plan to buy, or live near higher-risk zones.",
    moneyImpact:
      "Premiums could rise for some households, while rule changes may improve availability in places with limited options.",
    familyImpact:
      "Families may need to revisit emergency budgets, mortgage escrow changes, or rental cost expectations.",
    townImpact:
      "Insurance pressure can affect housing turnover, rental supply, and local construction decisions.",
    uncertainty:
      "Carrier behavior, final rule language, and local risk models can change the actual household effect.",
    whatToWatch: "Final rule language, insurer filings, and whether consumer protections are added.",
    bottomLine:
      "This is a high-impact money and housing issue, but the exact effect depends on your property and coverage situation.",
  },
  {
    id: "global-oil-market-disruption",
    title: "Global Oil Market Disruption",
    level: "Medium",
    areas: ["Money", "Groceries", "Energy", "Global Events"],
    summary:
      "International oil market disruption may affect gas prices, shipping costs, and groceries over the next several weeks.",
    timeHorizon: "2-8 weeks",
    confidence: "Medium",
    sourceCount: 5,
    whatHappened:
      "Global supply concerns and shipping uncertainty are putting pressure on energy markets.",
    whyItMatters:
      "Fuel costs can move quickly into commuting, delivery, grocery, and small business expenses.",
    affectsYou:
      "This matters if you drive often, run a small business, manage a tight grocery budget, or rely on deliveries.",
    moneyImpact:
      "Gas prices may rise first, followed by slower changes in delivery and grocery costs.",
    familyImpact:
      "Families may need to plan around commute costs, weekend travel, and household staples.",
    townImpact:
      "Local businesses with delivery or transport costs may adjust prices if pressure lasts.",
    uncertainty:
      "Energy prices can reverse quickly if supply concerns ease or demand falls.",
    whatToWatch: "Regional gas prices, shipping updates, and grocery categories tied to transport costs.",
    bottomLine:
      "This is a short-term cost signal, not a reason to panic, but it may touch daily spending soon.",
  },
  {
    id: "ai-labor-shift-report",
    title: "AI Labor Shift Report",
    level: "Medium",
    areas: ["Job", "Students", "Technology", "Money"],
    summary:
      "A new AI labor report may affect entry-level office roles, students, and administrative workers.",
    timeHorizon: "6-24 months",
    confidence: "Medium",
    sourceCount: 3,
    whatHappened:
      "A labor report highlights where AI tools are changing entry-level and administrative work.",
    whyItMatters:
      "Workforce shifts can change hiring, training needs, wages, and student career planning.",
    affectsYou:
      "This matters if you work in office support, manage a team, are studying, or are helping a young adult plan a career.",
    moneyImpact:
      "Some roles may require new skills, while workers who adapt early may improve earning resilience.",
    familyImpact:
      "Families may want to discuss training, internships, certificates, or career flexibility.",
    townImpact:
      "Regional employers and schools may adjust workforce programs if demand changes.",
    uncertainty:
      "AI adoption varies by employer, industry, regulation, and public trust.",
    whatToWatch: "Local job postings, community college programs, and employer automation announcements.",
    bottomLine:
      "This is a medium-term job signal: useful for planning, not a prediction that every role disappears.",
  },
  {
    id: "utility-rate-proposal",
    title: "Utility Rate Proposal",
    level: "Medium",
    areas: ["Money", "Home", "Local Government"],
    summary:
      "A local utility proposal may raise monthly costs for households and small businesses.",
    timeHorizon: "2-6 months",
    confidence: "High",
    sourceCount: 4,
    whatHappened:
      "A utility proposal would adjust household and small business rates after public review.",
    whyItMatters:
      "Utility changes are usually felt directly in monthly budgets and can affect fixed-income households first.",
    affectsYou:
      "This is relevant for homeowners, renters who pay utilities, small businesses, and people on tight budgets.",
    moneyImpact:
      "Monthly bills may rise if the proposal is approved, though assistance programs may offset some costs.",
    familyImpact:
      "Families may need to budget around seasonal use and household energy habits.",
    townImpact:
      "Rate discussions often connect to infrastructure reliability, climate goals, and public accountability.",
    uncertainty:
      "The final rate may be reduced, phased in, or changed after public comments.",
    whatToWatch: "Public hearing dates, low-income assistance provisions, and implementation timing.",
    bottomLine:
      "This is one of the clearest household-budget items to watch because it may show up directly on monthly bills.",
  },
  {
    id: "public-safety-policy-update",
    title: "Public Safety Policy Update",
    level: "Medium",
    areas: ["Safety", "Town", "Local Government"],
    summary:
      "A public safety policy update may affect response priorities, city budgeting, and neighborhood services.",
    timeHorizon: "1-6 months",
    confidence: "Medium",
    sourceCount: 4,
    whatHappened:
      "City staff are reviewing public safety priorities and how services are coordinated across departments.",
    whyItMatters:
      "Public safety choices can affect response times, prevention programs, budget tradeoffs, and neighborhood trust.",
    affectsYou:
      "This matters if you follow city services, neighborhood safety, budget priorities, or local emergency response.",
    moneyImpact:
      "Budget shifts could affect city spending, grants, overtime costs, or service tradeoffs.",
    familyImpact:
      "Families may care about school-area safety, emergency response, and public spaces.",
    townImpact:
      "Policy details can shape how the city balances safety, prevention, and community services.",
    uncertainty:
      "Public safety outcomes depend on staffing, implementation, funding, and community feedback.",
    whatToWatch: "Budget allocations, response metrics, and whether services are expanded or shifted.",
    bottomLine:
      "This is a civic signal to follow calmly: the details matter more than the headline.",
  },
];

export const todaysUpdates = [
  "Insurance issue updated",
  "School board meeting moved",
  "New utility proposal added",
];

export const weeklyTimeline = [
  { date: "Mon", title: "School budget hearing", description: "Public comments open at 6:00 PM." },
  { date: "Wed", title: "Utility workshop", description: "Rate proposal details reviewed." },
  { date: "Fri", title: "Housing vote packet", description: "Council staff report expected." },
];
