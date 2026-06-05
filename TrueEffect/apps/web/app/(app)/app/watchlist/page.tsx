import { AlertPreferenceCard, SuggestedIssueCard, WatchlistCard, WatchlistTimeline } from "@/components/watchlist/watchlist-components";
import { Card } from "@/components/ui/card";
import { suggestedIssues, watchlistIssues } from "@/lib/mock-data/watchlist";

export default function WatchlistPage() {
  return (
    <div className="grid gap-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Watchlist</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Your watchlist</h1>
      </section>
      <Card className="p-5">
        <h2 className="text-xl font-semibold">What changed since last time</h2>
        <div className="mt-4">
          <WatchlistTimeline />
        </div>
      </Card>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Followed issues</h2>
        <div className="grid gap-5">
          {watchlistIssues.map((issue) => (
            <WatchlistCard issue={issue} key={issue.id} />
          ))}
        </div>
      </section>
      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Suggested issues</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {suggestedIssues.map((title) => (
              <SuggestedIssueCard key={title} title={title} />
            ))}
          </div>
        </section>
        <AlertPreferenceCard />
      </div>
    </div>
  );
}
