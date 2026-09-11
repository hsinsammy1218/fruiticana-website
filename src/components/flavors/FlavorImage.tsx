import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Flavor } from "@/data/flavors";

type FlavorImageProps = {
  flavor: Flavor;
  className?: string;
  priority?: boolean;
  /** Fill a `relative` parent instead of using the intrinsic 3:2 box. */
  fill?: boolean;
  sizes?: string;
};

/**
 * Fruit photography for each flavor. Alt is empty because the flavor name
 * is always rendered as adjacent text (card title or detail hero).
 */
export function FlavorImage({
  flavor,
  className,
  priority,
  fill = false,
  sizes,
}: FlavorImageProps) {
  const imageSizes =
    sizes ??
    (fill
      ? "(max-width: 1024px) 100vw, 50vw"
      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw");

  if (fill) {
    return (
      <Image
        src={flavor.image}
        alt=""
        fill
        priority={priority}
        sizes={imageSizes}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={flavor.image}
      alt=""
      width={1200}
      height={800}
      priority={priority}
      sizes={imageSizes}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
