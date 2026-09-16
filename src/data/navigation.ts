export type NavItem = {
  href: string;
  label: string;
};

/** Primary navigation for desktop. Logo is Home. */
export const mainNav: NavItem[] = [
  { href: "/about", label: "About Fruiticana" },
  { href: "/schools", label: "For Schools" },
  { href: "/product", label: "Product & Nutrition" },
  { href: "/contact", label: "Contact" },
];

/** Desktop header uses the same primary links. Logo returns Home. */
export const desktopNav: NavItem[] = mainNav;

/** Mobile drawer includes Home because the logo is not visible inside the panel. */
export const mobileNav: NavItem[] = [
  { href: "/", label: "Home" },
  ...mainNav,
];

/** Footer Explore column includes Home plus the primary pages. */
export const footerExploreNav: NavItem[] = [
  { href: "/", label: "Home" },
  ...mainNav,
];

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
 * Product & Nutrition even though they live under `/flavors/[slug]`.
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
