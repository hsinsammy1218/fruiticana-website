export type NavItem = {
  href: string;
  label: string;
};

/** Primary navigation. Home is represented by the logo on desktop. */
export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Fruiticana" },
  { href: "/schools", label: "For Schools" },
  { href: "/product", label: "Flavors & Nutrition" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

/** Desktop nav omits Home because the wordmark links home. */
export const desktopNav: NavItem[] = mainNav.filter((i) => i.href !== "/");

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
