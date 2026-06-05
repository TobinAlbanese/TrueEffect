import { OnboardingShell, ZipCodeStep } from "@/components/onboarding/onboarding-components";

export default function LocationPage() {
  return (
    <OnboardingShell step={0}>
      <ZipCodeStep />
    </OnboardingShell>
  );
}
