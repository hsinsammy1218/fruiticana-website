export type NavItem = {
  href: string;
  label: string;
};

/** Primary navigation for desktop and mobile menus. */
export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Fruiticana" },
  { href: "/schools", label: "For Schools" },
  { href: "/product", label: "Flavors & Nutrition" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

/** Desktop header uses the same primary links, including an explicit Home button. */
export const desktopNav: NavItem[] = mainNav;

/** Secondary resources kept out of the primary conversion path. */
export const resourceNav: NavItem[] = [
  { href: "/learn", label: "Classroom resource" },
  { href: "/product#nutrition", label: "Nutrition panels" },
  { href: "/resources", label: "Documentation" },
];

export const legalNav: NavItem[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];

export const navCta = {
  href: "/contact",
  label: "Request School Information",
} as const;

/**
 * Current-page matching for primary nav.
 * Home must be exact (`/` prefixes every path). Flavor sheets belong with
 * Flavors & Nutrition even though they live under `/flavors/[slug]`.
 */
export function isNavItemActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  if (href === "/product") {
    return pathname === "/product" || pathname.startsWith("/flavors/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
