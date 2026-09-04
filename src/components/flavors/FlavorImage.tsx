import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Flavor } from "@/data/flavors";

type FlavorImageProps = {
  flavor: Flavor;
  className?: string;
  priority?: boolean;
};

/**
 * Fruit photography for each flavor. Alt is empty because the flavor name
 * is always rendered as adjacent text (card title or detail hero).
 */
export function FlavorImage({ flavor, className, priority }: FlavorImageProps) {
  return (
    <Image
      src={flavor.image}
      alt=""
      width={1200}
      height={800}
      priority={priority}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
