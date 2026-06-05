import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  const sections = ["Account", "Notifications", "Privacy", "Appearance", "Accessibility", "Data controls", "Delete account placeholder"];

  return (
    <div className="grid gap-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Settings</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-3 text-lg text-textSecondary">No settings persistence is implemented.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Card className="p-5" key={section}>
            <h2 className="text-2xl font-semibold">{section}</h2>
            <p className="mt-2 text-textSecondary">Mock controls and copy for the future product surface.</p>
            <div className="mt-4 grid gap-2">
              <label className="flex items-center justify-between rounded-lg bg-secondary p-3">
                <span className="font-medium">Enabled</span>
                <input defaultChecked className="h-5 w-5 accent-[var(--environmentPrimary)]" type="checkbox" />
              </label>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
