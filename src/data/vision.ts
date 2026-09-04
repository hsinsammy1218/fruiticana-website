/**
 * The Fruiticana vision for schools and their students: what it is, why it
 * exists, and how it can work in a school. For now, this site is only for
 * schools and the students they serve.
 *
 * Copy stays in concept + history language (see PLAN.md).
 */

export const visionIntro = {
  eyebrow: "The Fruiticana vision",
  title: "What it is. Why it exists. How it works for schools.",
  description:
    "For now, this website is only for schools and their students. Fruiticana’s vision is a fruit-based frozen dessert students will actually want to eat — made in-house for school programs, without the extra cost of a specialty outside dessert.",
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
    body: "Fruiticana is the new way to eat fruit. Originally introduced as Fruiticana Creamless Ice Cream, it was developed as a smooth, ice-cream-like frozen dessert built from fruit flavors — not traditional dairy ice cream with fruit mixed in. Twelve original flavors make that idea concrete for students.",
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
    title: "Make it in-house — without the extra cost",
    body: "The Fruiticana how for schools is practical: a fruit-based frozen dessert designed to be made in-house, so school kitchens can serve students without taking on specialty outside-dessert cost. Serve it simply — historically in individual 4 oz (½ cup) cups — in a cafeteria or snack program.",
    figure: "In-house",
    figureLabel: "Easy for school kitchens",
    icon: "cup",
  },
];
