import { OnboardingShell, ProfileTypeSelector } from "@/components/onboarding/onboarding-components";

export default function ProfileTypePage() {
  return (
    <OnboardingShell step={2}>
      <ProfileTypeSelector />
    </OnboardingShell>
  );
}
