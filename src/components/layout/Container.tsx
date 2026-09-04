import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
};

export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[var(--container-page)] px-5 sm:px-8 lg:px-10 xl:px-12",
        className,
      )}
      {...props}
    />
  );
}
