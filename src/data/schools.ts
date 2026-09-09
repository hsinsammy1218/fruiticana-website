/**
 * Copy for the For Schools page.
 * For now, the audience is only schools and their students.
 */

export const schoolsIntro = {
  eyebrow: "For schools",
  title: "Fruiticana for Schools",
  description:
    "For now, this page is only for schools and their students. Principals, food-service directors, nutrition staff, and administrators can review the vision — what Fruiticana is, why it exists, and how it can work in a cafeteria or snack program for students.",
} as const;

export const schoolAudiences = [
  "Schools and the students they serve",
  "Principals and school administrators",
  "Food-service directors and cafeteria managers",
  "Nutrition coordinators and wellness staff",
  "Teachers and classroom programs",
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
      "A fruit-based frozen dessert option for meal service or à la carte, offered in individual 4 oz single-serve cups rather than a dairy ice-cream scoop.",
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
      "Serve 4 oz cups at fairs, family nights, or limited-time service — confirm availability for your school calendar.",
  },
  {
    slug: "summer",
    title: "Summer and after-school programs",
    figure: "4 oz",
    figureLabel: "Single-serve idea",
    description:
      "Possible applications include summer feeding and after-school snacks. Reach out to discuss how Fruiticana can fit your program.",
  },
  {
    slug: "campus",
    title: "School dining hall",
    figure: "12",
    figureLabel: "Flavor options",
    description:
      "Private-school dining halls and student meal programs can review the same flavor sheets, portions, and nutrition documentation used by K–12 evaluators.",
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
    body: "Schools use single-serving cups, including a recorded 4 oz (½ cup) laboratory serving — a simple format for in-house school service.",
  },
  {
    figure: "2003–05",
    title: "Documented school chapter",
    body: "Connecticut Team Nutrition participation (2003–2005) and later service in local Connecticut schools after consumer testing in 2005–2006.",
  },
  {
    figure: "In-house",
    title: "Built for school kitchens",
    body: "The vision is an easy in-house preparation path, so schools can offer a fruit-based frozen dessert without carrying specialty outside-dessert cost.",
  },
] as const;

export const schoolAvailabilityNote =
  "Fruiticana is for schools and their students. Connecticut program experience is shared so school teams can evaluate fit. Confirm product availability and nutrition details through a school inquiry.";

/**
 * The student side of the school decision. Language stays defensible — how the
 * product is designed and what it is — never "students love it / approved /
 * prefer it."
 */
export const studentAppealIntro = {
  eyebrow: "For students",
  title: "Why students want it",
  description:
    "The other half of the decision is the student. Fruiticana is made to look and taste like a treat students actually want — so a fruit-based option is one they are glad to eat.",
} as const;

export const studentAppeal: {
  icon: "scoop" | "fruit" | "cup" | "heart";
  figure?: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "scoop",
    title: "Smooth and creamy",
    description:
      "A creamless frozen dessert with the smooth, scoopable feel students know from ice cream.",
  },
  {
    icon: "fruit",
    figure: "12",
    title: "Real fruit flavors",
    description:
      "Twelve fruit flavors across tropical, berry, citrus, orchard, and melon — built from fruit, not a dairy base.",
  },
  {
    icon: "cup",
    figure: "4 oz",
    title: "Fun single-serve cups",
    description:
      "Individual 4 oz cups that drop straight onto a cafeteria tray or snack line.",
  },
  {
    icon: "heart",
    title: "A treat to look forward to",
    description:
      "Designed with students in mind — a frozen treat they can get excited about at lunch or snack time.",
  },
];
