/**
 * Copy for the For Schools page. Historical school-program facts are labeled
 * in the UI; nothing here claims Fruiticana is on menus today.
 *
 * Audience is school decision-makers only — not wholesale or distributors.
 */

export const schoolsIntro = {
  eyebrow: "For schools",
  title: "Fruiticana for Schools",
  description:
    "This page is for school decision-makers — principals, food-service directors, nutrition staff, and administrators — who want to understand Fruiticana’s vision: what it is, why it exists, and how it could work in a cafeteria or snack program.",
} as const;

export const schoolAudiences = [
  "Principals and school administrators",
  "Superintendents and private-school directors",
  "Food-service directors and cafeteria managers",
  "Nutrition coordinators and wellness staff",
  "District leadership and purchasing teams",
] as const;

export type SchoolUse = {
  slug: string;
  title: string;
  figure: string;
  figureLabel: string;
  description: string;
};

export const schoolUses: SchoolUse[] = [
  {
    slug: "cafeteria",
    title: "School cafeteria",
    figure: "4 oz",
    figureLabel: "Single-serve cup",
    description:
      "A fruit-based frozen dessert option for meal service or à la carte, historically offered in individual 4 oz single-serve cups rather than a dairy ice-cream scoop.",
  },
  {
    slug: "snack",
    title: "Healthy snack program",
    figure: "2003–05",
    figureLabel: "Team Nutrition pilot",
    description:
      "Fruiticana participated in Connecticut’s two-year Team Nutrition Healthy Snack pilot. That program required vendors to meet nutrition standards and use moderate single-serving portions.",
  },
  {
    slug: "private",
    title: "Private school",
    figure: "12",
    figureLabel: "Original flavors",
    description:
      "Independent and private schools evaluating a fruit-forward dessert for dining halls, snack windows, or special events can review the same 12 flavor sheets and nutrition documentation.",
  },
  {
    slug: "district",
    title: "District-level evaluation",
    figure: "2008",
    figureLabel: "Lab panels on file",
    description:
      "Nutrition, procurement, and leadership teams can share product sheets, 2008 laboratory panels, and Connecticut program records internally before a tasting or program conversation.",
  },
  {
    slug: "events",
    title: "School events",
    figure: "4 oz",
    figureLabel: "Single-serve cup",
    description:
      "Historical serving ideas included 4 oz cups that can be discussed for fairs, family nights, or limited-time service — availability is to be confirmed.",
  },
  {
    slug: "summer",
    title: "Summer and after-school programs",
    figure: "4 oz",
    figureLabel: "Single-serve idea",
    description:
      "Possible applications include summer feeding and after-school snacks. These are program conversations — not a claim that those programs currently serve Fruiticana.",
  },
  {
    slug: "campus",
    title: "Campus dining",
    figure: "12",
    figureLabel: "Flavor options",
    description:
      "Private-school dining halls and campus programs can review the same flavor sheets, historical portions, and nutrition documentation used by K–12 evaluators.",
  },
];

export const schoolFitPoints = [
  {
    figure: "12",
    title: "Fruit-based",
    body: "Built around fruit rather than a traditional dairy ice-cream base, with 12 original flavors spanning five fruit families.",
  },
  {
    figure: "4 oz",
    title: "Individual portions",
    body: "The historical school program used single-serving cups, including a recorded 4 oz (½ cup) laboratory serving.",
  },
  {
    figure: "2003–05",
    title: "Documented school chapter",
    body: "Connecticut Team Nutrition participation (2003–2005) and later service in local Connecticut schools after consumer testing in 2005–2006.",
  },
  {
    figure: "2003",
    title: "Lactose-free concept",
    body: "Originally designed in 2003 as an option for people avoiding lactose. Current formulation still needs verification.",
  },
] as const;

export const schoolAvailabilityNote =
  "Fruiticana is not listing current school-menu placements on this site. Historical Connecticut participation is shared so school teams can evaluate fit. Product availability and current nutrition are confirmed through a school inquiry.";
