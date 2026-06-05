import { ConcernSelector, OnboardingShell } from "@/components/onboarding/onboarding-components";

export default function ConcernsPage() {
  return (
    <OnboardingShell step={1}>
      <ConcernSelector />
    </OnboardingShell>
  );
}
