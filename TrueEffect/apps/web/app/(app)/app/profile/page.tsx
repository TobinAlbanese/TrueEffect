import { Card } from "@/components/ui/card";
import { userProfile } from "@/lib/mock-data/user-profile";

export default function ProfilePage() {
  const rows = [
    ["Location profile", `${userProfile.city}, ${userProfile.state} ${userProfile.zip}`],
    ["Life categories", userProfile.topConcerns.join(", ")],
    ["User type", userProfile.profile.join(", ")],
    ["School district", userProfile.schoolDistrict],
    ["Renter/homeowner", userProfile.housingStatus],
    ["Parent/not parent", userProfile.familyStatus],
    ["Worker/student/business owner", userProfile.workStatus],
    ["Top concerns", userProfile.topConcerns.join(", ")],
  ];

  return (
    <div className="grid gap-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Profile</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Alex&apos;s impact profile</h1>
        <p className="mt-3 text-lg text-textSecondary">Mock values only. No real profile is stored.</p>
      </section>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {rows.map(([label, value]) => (
            <div className="rounded-lg bg-secondary p-4" key={label}>
              <p className="text-sm font-semibold text-textSecondary">{label}</p>
              <p className="mt-1 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-5">
        <h2 className="text-xl font-semibold">Privacy explanation</h2>
        <p className="mt-2 text-textSecondary">
          This frontend MVP uses mock profile data so the product can be evaluated before any backend, database, or authentication exists.
        </p>
      </Card>
    </div>
  );
}
