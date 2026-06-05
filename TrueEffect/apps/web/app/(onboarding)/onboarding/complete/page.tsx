import { OnboardingCompleteCard, OnboardingShell } from "@/components/onboarding/onboarding-components";

export default function CompletePage() {
  return (
    <OnboardingShell step={4}>
      <OnboardingCompleteCard />
    </OnboardingShell>
  );
}
