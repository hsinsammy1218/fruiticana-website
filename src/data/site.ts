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
    "Fruiticana brings a fruit-based frozen experience directly to schools — giving students something they can enjoy while giving schools a hands-on program designed around their students.",
  /** Short brand promise used in closing sections. */
  promise:
    "An exciting new way to eat fruit — brought to schools with machines Fruiticana provides, maintains, and stays involved with.",
  shortDescription:
    "Fruiticana gives students an exciting new way to eat fruit. This site explains why Fruiticana exists for students, how the proposed school program works, and how a school can request information.",
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
