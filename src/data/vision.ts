/**
 * The Fruiticana idea: what it is, why it exists, and how the proposed
 * school program can work.
 */

export const visionIntro = {
  eyebrow: "The Fruiticana idea",
  title: "What it is. Why it exists. How it works.",
  description:
    "Fruiticana’s idea is a fruit-based frozen treat students will actually want to eat — an exciting new way to enjoy fruit, brought into schools through a hands-on partnership.",
} as const;

export type VisionPillar = {
  key: "what" | "why" | "how";
  step: string;
  label: string;
  title: string;
  body: string;
  figure: string;
  figureLabel: string;
  icon: "fruit" | "heart" | "school";
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
    body: "Children should have food choices that can be enjoyable and health-conscious. Telling students to eat more fruit does not always make them look forward to it. Fruiticana wants to introduce that experience while students are young, with the hope that appreciation for fruit continues tomorrow.",
    figure: "Kids",
    figureLabel: "Start while they are young",
    icon: "heart",
  },
  {
    key: "how",
    step: "03",
    label: "How",
    title: "We bring Fruiticana to school",
    body: "Under the proposed model, Fruiticana provides two machines per school, stays involved in maintenance and serving, and the participating school receives 1/3 of Fruiticana sales generated through its program.",
    figure: "2",
    figureLabel: "Machines provided",
    icon: "school",
  },
];
