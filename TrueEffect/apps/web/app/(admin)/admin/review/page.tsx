import { AdminReviewWorkspace } from "@/components/admin/admin-components";

export default function AdminReviewPage() {
  return (
    <div className="grid gap-6">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Admin</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Review queue</h1>
        <p className="mt-3 text-lg text-textSecondary">
          Frontend-only mock for reviewing impact drafts, source evidence, confidence, uncertainty, and risk labels.
        </p>
      </section>
      <AdminReviewWorkspace />
    </div>
  );
}
