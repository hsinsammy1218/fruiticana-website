export type NavItem = {
  href: string;
  label: string;
};

/** Primary navigation (5 items). Home is represented by the logo on desktop. */
export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/flavors", label: "Flavors" },
  { href: "/story", label: "Our Story" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/contact", label: "Contact" },
];

/** Desktop nav omits Home because the wordmark links home. */
export const desktopNav: NavItem[] = mainNav.filter((i) => i.href !== "/");

export const legalNav: NavItem[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];
