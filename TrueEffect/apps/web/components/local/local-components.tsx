import { CalendarClock, Landmark, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { localSignals } from "@/lib/mock-data/local-signals";
import type { LocalSignal } from "@/lib/types";

export function JurisdictionTile({ signal }: { signal: LocalSignal }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <Landmark className="h-6 w-6 text-mainPrimary" />
        <Badge>{signal.status}</Badge>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{signal.name}</h3>
      <p className="mt-2 text-sm text-textSecondary">{signal.description}</p>
      <p className="mt-4 text-sm font-semibold text-environmentPrimary">{signal.signalCount} signals</p>
    </Card>
  );
}

export function LocalSignalGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {localSignals.map((signal) => (
        <JurisdictionTile key={signal.id} signal={signal} />
      ))}
    </div>
  );
}

export function LocalDecisionCard({ title, area, detail }: { title: string; area: string; detail: string }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-mainPrimary">
        <MapPin className="h-4 w-4" />
        {area}
      </div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-textSecondary">{detail}</p>
    </Card>
  );
}

export function UpcomingMeetingCard({ title, time, detail }: { title: string; time: string; detail: string }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-environmentPrimary">
        <CalendarClock className="h-4 w-4" />
        {time}
      </div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-textSecondary">{detail}</p>
    </Card>
  );
}
