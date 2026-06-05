import { Bookmark, FileText, Newspaper, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { impactCards } from "@/lib/mock-data/impact-cards";
import { watchlistIssues } from "@/lib/mock-data/watchlist";

export default function SavedPage() {
  const sections = [
    { title: "Saved True Effects", icon: Star, items: impactCards.slice(0, 3).map((card) => card.title) },
    { title: "Saved issues", icon: Bookmark, items: watchlistIssues.slice(0, 3).map((issue) => issue.title) },
    { title: "Saved explainers", icon: Newspaper, items: ["Utility rate explainer", "School budget basics", "Insurance rule background"] },
    { title: "Saved sources", icon: FileText, items: ["City council agenda", "State insurance bulletin", "Utility proposal"] },
  ];

  return (
    <div className="grid gap-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Saved</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Saved items</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {["All", "Money", "Home", "Schools", "Sources"].map((filter) => (
            <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold" key={filter}>
              {filter}
            </span>
          ))}
        </div>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Card className="p-5" key={section.title}>
            <section.icon className="h-6 w-6 text-mainPrimary" />
            <h2 className="mt-4 text-2xl font-semibold">{section.title}</h2>
            <div className="mt-4 grid gap-2">
              {section.items.map((item) => (
                <div className="rounded-lg bg-secondary p-3 font-medium" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
