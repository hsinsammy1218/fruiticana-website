import { cn } from "@/lib/cn";
import { valueIcons } from "@/components/ui/icons";

type FeatureCardProps = {
  icon: keyof typeof valueIcons;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  const Icon = valueIcons[icon];
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl2 border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-soft",
        className,
      )}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green/12 text-green-600">
        <Icon width={22} height={22} />
      </span>
      <h3 className="mt-4 text-lg font-bold text-green-deep">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
