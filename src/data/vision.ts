/**
 * The Fruiticana vision for school readers: what it is, why it exists,
 * and how it can work in a school. This site is for schools, not wholesale.
 *
 * Copy stays in concept + history language (see PLAN.md).
 */

export const visionIntro = {
  eyebrow: "The Fruiticana vision",
  title: "What it is. Why it exists. How it works for schools.",
  description:
    "This website is for schools — principals, food-service directors, nutrition staff, and administrators — not wholesale buyers. Fruiticana’s vision is a fruit-based frozen dessert students will actually want to eat, served in a cafeteria or snack program.",
} as const;

export type VisionPillar = {
  key: "what" | "why" | "how";
  step: string;
  label: string;
  title: string;
  body: string;
  figure: string;
  figureLabel: string;
  icon: "fruit" | "heart" | "cup";
};

export const visionPillars: VisionPillar[] = [
  {
    key: "what",
    step: "01",
    label: "What",
    title: "A fruit-based creamless frozen dessert",
    body: "Fruiticana is the new way to eat fruit. Originally introduced as Fruiticana Creamless Ice Cream, it was developed as a smooth, ice-cream-like frozen dessert built from fruit flavors — not traditional dairy ice cream with fruit mixed in. Twelve original flavors make that idea concrete.",
    figure: "12",
    figureLabel: "Original fruit flavors",
    icon: "fruit",
  },
  {
    key: "why",
    step: "02",
    label: "Why",
    title: "So students have a new way to eat fruit",
    body: "The founding team — a chemist and physicians — came together around fruit, nutrition, and flavor. Their idea was that a frozen dessert could help students eat fruit, including those avoiding lactose. Schools were the first proving ground: Connecticut’s Team Nutrition Healthy Snack pilot (2003–2005) put Fruiticana in front of students as a snack-program option.",
    figure: "2003",
    figureLabel: "The idea takes shape",
    icon: "heart",
  },
  {
    key: "how",
    step: "03",
    label: "How",
    title: "Serve it in school — one cup at a time",
    body: "The historical school program used individual single-serve cups: a 4 oz (½ cup) portion matching the 2008 laboratory Nutrition Facts panels. Schools can review the 12 flavor sheets, dated nutrition records, and Connecticut chapter, then request information to discuss cafeteria, snack-program, or event use.",
    figure: "4 oz",
    figureLabel: "Single-serve cup",
    icon: "cup",
  },
];
