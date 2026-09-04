import { cn } from "@/lib/cn";
import { valueIcons } from "@/components/ui/icons";

type FeatureCardProps = {
  icon: keyof typeof valueIcons;
  title: string;
  description: string;
  /** Large scannable figure (e.g. "12" or "4 oz"). */
  figure?: string;
  className?: string;
};

/**
 * Compact benefit tile with even spacing for dense four-up grids:
 * icon + figure on one row, then title, then one supporting line.
 */
export function FeatureCard({
  icon,
  title,
  description,
  figure,
  className,
}: FeatureCardProps) {
  const Icon = valueIcons[icon];
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl2 border border-line bg-white p-5",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green/12 text-green-600">
          <Icon width={18} height={18} />
        </span>
        {figure ? (
          <p className="font-sans text-2xl font-extrabold tabular-nums leading-none tracking-tight text-green-deep">
            {figure}
          </p>
        ) : null}
      </div>
      <h3 className="mt-3 min-h-[2.75rem] text-base font-bold leading-snug text-green-deep">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-snug text-muted">{description}</p>
    </div>
  );
}
