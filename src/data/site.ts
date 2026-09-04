/**
 * Global site configuration and brand-safe copy.
 *
 * Brand voice is rooted in the historical myfruiticana.com consumer site
 * (Fruiticana Cream-Less Ice Crème / “The New Way to Eat Fruit”), rewritten
 * so school decision-makers can evaluate Fruiticana as a healthier frozen
 * treat option for school programs.
 *
 * Primary audience: administrators, principals, food-service directors, and
 * other school decision-makers. Primary conversion: school inquiry.
 *
 * IMPORTANT (see PLAN.md content audit): current business contact details are
 * NOT known. Do not invent an email, phone number, address, or social account.
 * These fields intentionally stay `null` until the business provides verified,
 * current information. UI renders honest "coming soon"/placeholder states when
 * a value is `null`.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://fruiticana.example.com"; // TODO: replace with the real production domain

export const site = {
  name: "Fruiticana",
  /** Historical product name from myfruiticana.com / the 2003-2011 business document. */
  legacyProductName: "Fruiticana Creamless Ice Cream",
  /** Product-line styling as shown on the original site (“Cream-Less Ice Crème”). */
  productLine: "Cream-Less Ice Crème",
  /**
   * Primary brand tagline from the original myfruiticana.com banner
   * (“THE NEW WAY TO EAT FRUIT”), kept in sentence case for the modern site.
   */
  tagline: "The new way to eat fruit.",
  /** Alternate consumer phrasing from the business PDF — used on About. */
  legacyTagline: "An exciting new way to eat fruit.",
  heroSupport:
    "A healthier frozen treat option for schools. Fruit-based and creamless — written for administrators, principals, and food-service directors.",
  /** Short brand promise used in closing sections. */
  promise:
    "A healthier frozen treat option for schools — fruit-based, creamless, and made for cafeteria and snack programs.",
  shortDescription:
    "Fruiticana is a healthier frozen treat option for schools: a fruit-based creamless frozen dessert. This informational site is for administrators, principals, and food-service directors evaluating cafeteria and snack programs. The next step is a school inquiry.",
  url: siteUrl,

  /**
   * Contact + presence: all null until verified. Never fabricate.
   * Historical documents list past Connecticut addresses (Waterbury / Wolcott),
   * but those are ~2004-2008 and must not be presented as current.
   */
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    tiktok: null as string | null,
    x: null as string | null,
  },
} as const;

export type Site = typeof site;
