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
 * Compact benefit tile. Reading order is intentional for dense grids:
 * icon → figure → title → one short supporting line.
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
        "flex h-full flex-col rounded-xl2 border border-line bg-white px-5 py-5 sm:px-6 sm:py-6",
        className,
      )}
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green/12 text-green-600">
        <Icon width={20} height={20} />
      </span>
      {figure ? (
        <p className="mt-5 font-sans text-3xl font-extrabold tabular-nums leading-none tracking-tight text-green-deep">
          {figure}
        </p>
      ) : (
        <span className="mt-5 block h-8" aria-hidden="true" />
      )}
      <h3 className="mt-3 text-base font-bold leading-snug text-green-deep sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
