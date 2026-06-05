import { WaitlistForm } from "@/components/forms/waitlist-form";

export default function WaitlistPage() {
  return (
    <main className="te-section">
      <div className="te-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">California beta</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">Join the True Effect waitlist.</h1>
          <p className="mt-5 text-lg text-textSecondary">
            Tell us where to focus and what changes matter most. This prototype form shows the intended experience only.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </main>
  );
}
