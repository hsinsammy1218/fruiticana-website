import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    title: "Fruit is the star",
    body: "Built around the taste of real fruit - bright, natural, and refreshing.",
  },
  {
    title: "A smooth, frozen scoop",
    body: "Designed for the creamy texture people love in a frozen dessert.",
  },
  {
    title: "A different kind of dessert",
    body: "Historically developed as a lactose-free alternative to traditional dairy ice cream.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l4.5 4.5L19 7" />
    </svg>
  );
}

export function Reimagined() {
  return (
    <Section tone="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal">
          <SectionHeading
            eyebrow="Why Fruiticana"
            title="Ice cream, reimagined through fruit"
            description="Fruiticana began with a simple question: what if the frozen dessert you love could be built around fruit? The result is a smooth, refreshing scoop with fruit at the center - a different way to enjoy something cold and sweet."
          />
        </div>
        <ul className="reveal grid gap-4">
          {points.map((point) => (
            <li
              key={point.title}
              className="flex gap-4 rounded-xl2 border border-line bg-cream-100 p-5"
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-600">
                <CheckIcon />
              </span>
              <div>
                <h3 className="text-base font-bold text-green-deep">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
