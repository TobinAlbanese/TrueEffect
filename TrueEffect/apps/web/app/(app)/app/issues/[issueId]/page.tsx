import { IssueHeader, IssueTabs } from "@/components/issue/issue-components";
import { getIssueById } from "@/lib/mock-data/issues";

export default async function IssueDetailPage({ params }: { params: Promise<{ issueId: string }> }) {
  const { issueId } = await params;
  const issue = getIssueById(issueId);

  return (
    <div className="grid gap-6">
      <IssueHeader issue={issue} />
      <IssueTabs issue={issue} />
    </div>
  );
}
