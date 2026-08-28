import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { timeline } from "@/data/timeline";

export function HistoricalTimeline() {
  return (
    <ol className="relative ml-3 border-l-2 border-line pl-8">
      {timeline.map((entry) => (
        <li key={entry.period} className="reveal relative pb-10 last:pb-0">
          <span
            className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-green bg-cream"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-green" />
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-bold uppercase tracking-wide text-green-600">
              {entry.period}
            </p>
            {entry.historical ? (
              <HistoricalNotice variant="inline" />
            ) : null}
          </div>
          <h3 className="mt-1 text-xl font-bold text-green-deep">{entry.title}</h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted">
            {entry.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
