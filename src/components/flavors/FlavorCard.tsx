import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Flavor } from "@/data/flavors";
import { FlavorImage } from "@/components/flavors/FlavorImage";
import { ArrowRightIcon } from "@/components/ui/icons";

type FlavorCardProps = {
  flavor: Flavor;
  priority?: boolean;
  className?: string;
};

export function FlavorCard({ flavor, priority, className }: FlavorCardProps) {
  return (
    <Link
      href={`/flavors/${flavor.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-hover focus-visible:-translate-y-1 focus-visible:shadow-hover",
        className,
      )}
      style={{ ["--accent" as string]: flavor.accent }}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <FlavorImage
          flavor={flavor}
          priority={priority}
          className="transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
        />
        <span
          className="absolute left-3 top-3 rounded-pill bg-white/85 px-2.5 py-1 text-xs font-semibold text-green-deep backdrop-blur"
        >
          {flavor.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />
          <h3 className="text-lg font-bold text-green-deep">{flavor.name}</h3>
        </div>
        <p className="info-copy mt-1.5 flex-1">
          {flavor.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600">
          View product sheet
          <ArrowRightIcon
            width={16}
            height={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
