import { NotificationSelector, OnboardingShell } from "@/components/onboarding/onboarding-components";

export default function NotificationsPage() {
  return (
    <OnboardingShell step={3}>
      <NotificationSelector />
    </OnboardingShell>
  );
}
