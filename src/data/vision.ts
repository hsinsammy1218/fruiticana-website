/**
 * The Fruiticana idea: what it is, why it exists, and how it can work
 * in a cafeteria or snack program.
 */

export const visionIntro = {
  eyebrow: "The Fruiticana idea",
  title: "What it is. Why it exists. How it works.",
  description:
    "Fruiticana’s idea is a fruit-based frozen treat students will actually want to eat — another way to enjoy fruit, made in-house, without the extra cost of a specialty outside dessert.",
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
    body: "Fruiticana is an exciting new way to eat fruit. Originally introduced as Fruiticana Creamless Ice Cream, it was developed as a smooth, ice-cream-like frozen dessert built from fruit flavors — not traditional dairy ice cream with fruit mixed in. Twelve original flavors make that idea concrete.",
    figure: "12",
    figureLabel: "Original fruit flavors",
    icon: "fruit",
  },
  {
    key: "why",
    step: "02",
    label: "Why",
    title: "So students have a new way to eat fruit",
    body: "Children should have food choices that can be enjoyable and health-conscious. Telling students to eat more fruit does not always make them look forward to it. Schools were an early proving ground: Connecticut’s Team Nutrition Healthy Snack pilot (2003–2005) put Fruiticana in front of students as a snack-program option.",
    figure: "2003",
    figureLabel: "The idea takes shape",
    icon: "heart",
  },
  {
    key: "how",
    step: "03",
    label: "How",
    title: "Make it in-house — without the extra cost",
    body: "The Fruiticana how is practical: a fruit-based frozen dessert designed to be made in-house, so kitchens can serve it without taking on specialty outside-dessert cost. Serve it simply — in individual 4 oz (½ cup) cups — in a cafeteria or snack program.",
    figure: "In-house",
    figureLabel: "Easy for school kitchens",
    icon: "cup",
  },
];
