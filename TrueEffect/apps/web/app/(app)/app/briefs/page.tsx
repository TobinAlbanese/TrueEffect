import { Card } from "@/components/ui/card";
import { briefs } from "@/lib/mock-data/briefs";

export default function BriefsPage() {
  const current = briefs[0];

  return (
    <div className="grid gap-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-environmentPrimary">Briefs</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">This week&apos;s personal brief</h1>
        <p className="mt-3 text-lg text-textSecondary">{current.date}</p>
      </section>
      <Card className="p-6">
        <h2 className="text-2xl font-semibold">{current.title}</h2>
        <p className="mt-3 text-textSecondary">{current.summary}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Money, family, home, job, and safety highlights</h3>
            <ul className="mt-3 grid gap-2">
              {current.highlights.map((item) => (
                <li className="rounded-lg bg-secondary p-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Issues to watch next</h3>
            <ul className="mt-3 grid gap-2">
              {current.watchNext.map((item) => (
                <li className="rounded-lg bg-secondary p-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Previous briefs</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {briefs.slice(1).map((brief) => (
            <Card className="p-5" key={brief.id}>
              <h3 className="text-xl font-semibold">{brief.title}</h3>
              <p className="mt-2 text-sm text-textSecondary">{brief.date}</p>
              <p className="mt-3 text-textSecondary">{brief.summary}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
