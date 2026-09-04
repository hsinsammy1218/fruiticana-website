import { cn } from "@/lib/cn";
import { formatIcons } from "@/components/ui/icons";
import type { ProductFormat } from "@/data/formats";

type ProductFormatCardProps = {
  format: ProductFormat;
  className?: string;
};

export function ProductFormatCard({ format, className }: ProductFormatCardProps) {
  const Icon = formatIcons[format.icon];
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center rounded-xl2 border border-line bg-white p-5 text-center transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      {format.amount ? (
        <p className="font-sans text-3xl font-extrabold tabular-nums tracking-tight text-green-deep">
          {format.amount}
        </p>
      ) : (
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green/12 text-green-600">
          <Icon width={24} height={24} />
        </span>
      )}
      <h3 className="mt-3 text-base font-bold text-green-deep">{format.name}</h3>
      <p className="info-copy mt-1.5">{format.description}</p>
    </div>
  );
}
