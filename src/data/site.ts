/**
 * Global site configuration and brand-safe copy.
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
  /** Historical product name from the 2003-2011 business document. */
  legacyProductName: "Fruiticana Creamless Ice Cream",
  /** Original consumer tagline — Story only, not the site-wide promise. */
  legacyTagline: "An exciting new way to eat fruit.",
  tagline: "A healthier frozen dessert option for schools.",
  /** Short brand promise used in closing sections. */
  promise: "Fruit-based frozen dessert information for school food programs.",
  shortDescription:
    "Fruiticana is a fruit-based frozen dessert originally developed to provide students and families with a refreshing alternative to traditional dairy ice cream. This site helps school decision-makers review the product, nutrition documentation, and historical Connecticut school program.",
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
