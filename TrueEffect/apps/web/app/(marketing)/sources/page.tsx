import { sourceCategories } from "@/lib/mock-data/sources";
import { Card } from "@/components/ui/card";

export default function SourcesPage() {
  return (
    <main className="te-section">
      <div className="te-container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Sources</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">Source methodology for localized impact intelligence.</h1>
          <p className="mt-5 text-lg text-textSecondary">
            This frontend-only page shows the categories True Effect is designed to explain later. No scraping or live source connection exists.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sourceCategories.map((category) => (
            <Card className="p-6" key={category.name}>
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <ul className="mt-5 grid gap-2">
                {category.examples.map((example) => (
                  <li className="rounded-lg bg-secondary px-3 py-2 text-sm font-medium" key={example}>
                    {example}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
