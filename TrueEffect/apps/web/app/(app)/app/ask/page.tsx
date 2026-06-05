import { AskInputPanel, AskOutputPanel } from "@/components/ask/ask-components";
import { Card } from "@/components/ui/card";

export default function AskPage() {
  return (
    <div className="grid gap-6">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Ask</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Ask True Effect.</h1>
        <p className="mt-3 text-lg text-textSecondary">A smart impact assistant for headlines, notices, policy text, and local documents.</p>
      </section>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <AskInputPanel />
        <AskOutputPanel />
      </div>
      <Card className="p-5">
        <h2 className="text-xl font-semibold">Previous asks</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["What does the utility proposal mean for my bill?", "Will the school budget change after-school services?", "Why are home insurance rules changing?"].map((ask) => (
            <div className="rounded-lg bg-secondary p-4 text-sm font-semibold" key={ask}>
              {ask}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
