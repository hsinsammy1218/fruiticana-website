/**
 * Global site configuration and brand-safe copy.
 *
 * Brand voice is rooted in the historical myfruiticana.com consumer site
 * (Fruiticana Cream-Less Ice Crème / “An exciting new way to eat fruit”),
 * rewritten so school decision-makers understand why Fruiticana exists
 * for students — then what it is, and how a school conversation can start.
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
   * Primary brand line from the business PDF and original consumer phrasing.
   * The homepage hero uses this as the H1.
   */
  tagline: "An exciting new way to eat fruit.",
  /** Alternate original banner phrasing from myfruiticana.com. */
  legacyTagline: "The new way to eat fruit.",
  heroSupport:
    "Fruiticana takes fruit students already know and turns it into a cold, smooth frozen treat — so a health-conscious choice can still feel exciting.",
  /** Short brand promise used in closing sections. */
  promise:
    "A fruit-based frozen treat for students — another way to enjoy fruit, made with schools in mind.",
  shortDescription:
    "Fruiticana gives students an exciting new way to enjoy fruit by turning fruit into a smooth frozen treat. This site explains why Fruiticana exists, what it is, and how schools can request information for their students.",
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
