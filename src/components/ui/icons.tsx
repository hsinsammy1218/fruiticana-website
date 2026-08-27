import type { SVGProps } from "react";

/** Lightweight inline line icons (stroke = currentColor). */

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export type IconProps = SVGProps<SVGSVGElement>;

export function FruitIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 8c-2-3-6-3-7 0-1 4 2 9 7 11 5-2 8-7 7-11-1-3-5-3-7 0Z" />
      <path d="M12 8c0-2 1-4 3-5" />
    </svg>
  );
}

export function ScoopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 11a6 6 0 0 1 12 0Z" />
      <path d="M8 11l4 9 4-9" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c0-7 5-13 14-13 0 9-6 14-14 13Z" />
      <path d="M9 15c2-2 4-3 6-4" />
    </svg>
  );
}

export function FlavorsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <circle cx="8" cy="16" r="3" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  );
}

export function CupIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 9h10l-1 10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1L7 9Z" />
      <path d="M6 9h12" />
      <path d="M9 6c1-1 2-1 3 0s2 1 3 0" />
    </svg>
  );
}

export function ConeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 10a4 4 0 0 1 8 0Z" />
      <path d="M8 10l4 10 4-10" />
    </svg>
  );
}

export function SmoothieIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 8h8l-1 12H9L8 8Z" />
      <path d="M9 8V6h6v2" />
      <path d="M14 3l1 3" />
    </svg>
  );
}

export function PopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="3" width="8" height="13" rx="4" />
      <path d="M12 16v5" />
    </svg>
  );
}

export function TakeHomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l-1 11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 8Z" />
      <path d="M6 8l1-3h10l1 3" />
      <path d="M10 12h4" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export const formatIcons = {
  cup: CupIcon,
  cone: ConeIcon,
  smoothie: SmoothieIcon,
  pop: PopIcon,
  takehome: TakeHomeIcon,
} as const;

export const valueIcons = {
  fruit: FruitIcon,
  scoop: ScoopIcon,
  leaf: LeafIcon,
  flavors: FlavorsIcon,
} as const;
