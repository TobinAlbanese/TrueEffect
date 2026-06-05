import { LocalDecisionCard, LocalSignalGrid, UpcomingMeetingCard } from "@/components/local/local-components";
import { SourceList } from "@/components/issue/issue-components";
import { getIssueById } from "@/lib/mock-data/issues";

export default function MyTownPage() {
  const issue = getIssueById("california-home-insurance-crisis");

  return (
    <div className="grid gap-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">My Town</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">What is happening near you?</h1>
        <p className="mt-3 text-lg text-textSecondary">Sacramento, CA</p>
      </section>
      <LocalSignalGrid />
      <section className="grid gap-4 md:grid-cols-2">
        <UpcomingMeetingCard detail="Public comments open before budget adoption." time="Monday 6:00 PM" title="School budget hearing" />
        <UpcomingMeetingCard detail="Residential and small business rate proposal is reviewed." time="Wednesday 4:30 PM" title="Utility rate workshop" />
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <LocalDecisionCard area="Recent local changes" detail="School hearing time moved and utility proposal added." title="What changed locally" />
        <LocalDecisionCard area="Housing and zoning" detail="Downtown corridor housing materials may affect rent supply and traffic." title="Housing packet" />
        <LocalDecisionCard area="Public safety" detail="Staff memo reviews response priorities and neighborhood services." title="Safety policy memo" />
        <LocalDecisionCard area="Taxes, fees, and utilities" detail="Utility rates may change monthly household costs." title="Utility proposal" />
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Local source list</h2>
        <SourceList issue={issue} />
      </section>
    </div>
  );
}
