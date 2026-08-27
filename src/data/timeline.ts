/**
 * Historical timeline + founding team, from the 2003-2011 business PDF.
 * Only documented facts are used. No events are invented for years the
 * document does not cover (i.e. nothing is claimed for 2012-2026).
 */

export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
  /** Marks entries that describe historical pilot facts needing verification. */
  historical?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    period: "2003",
    title: "The idea takes shape",
    description:
      "Fruiticana begins as research and development into a frozen dessert built around real fruit - smooth like ice cream, but fruit-first. A multidisciplinary team of a chemist and physicians starts the work.",
  },
  {
    period: "2003 - 2005",
    title: "Connecticut Team Nutrition Healthy Snack Pilot",
    description:
      "Fruiticana was included in student taste tests and samplings for the Connecticut Team Nutrition Healthy Snack Pilot - a program run through a USDA-funded Team Nutrition grant to the Connecticut State Department of Education (September 30, 2003 - September 30, 2005).",
    historical: true,
  },
  {
    period: "Consumer sampling",
    title: "Around 30,000 tastes",
    description:
      "During research and trial sampling, the business document reports that roughly 30,000 consumers in the Connecticut area sampled the concept.",
    historical: true,
  },
  {
    period: "2005 - 2006",
    title: "A localized Connecticut pilot",
    description:
      "Fruiticana ran a localized pilot in Connecticut, including distribution to local schools and sales through an independently owned and operated parlor offering cups, cones, smoothies, and to-go pints.",
    historical: true,
  },
  {
    period: "Today",
    title: "A fruit-first idea, reintroduced",
    description:
      "The vision remains simple: bring Fruiticana's fruit-based frozen dessert to a new generation who want something refreshingly different.",
  },
];

export type Founder = {
  name: string;
  /** Field of expertise exactly as documented; no invented bios or titles. */
  discipline: string;
};

export const founders: Founder[] = [
  { name: "Antoine Mowad", discipline: "Chemistry" },
  { name: "Dr. Marc Raad", discipline: "Internal Medicine" },
  { name: "Dr. Joseph Brenes", discipline: "Internal Medicine / Chemistry" },
  { name: "Dr. Joseph Morely", discipline: "Cardiology" },
  { name: "Dr. Mark L. Kraus", discipline: "Internal / Addiction Medicine" },
];
