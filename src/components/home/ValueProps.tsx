import { Section } from "@/components/layout/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { valueIcons } from "@/components/ui/icons";

const props: {
  icon: keyof typeof valueIcons;
  title: string;
  description: string;
}[] = [
  {
    icon: "fruit",
    title: "Fruit Forward",
    description: "Inspired by the natural taste of real fruit.",
  },
  {
    icon: "scoop",
    title: "Smooth & Frozen",
    description: "A creamy-style frozen dessert experience.",
  },
  {
    icon: "leaf",
    title: "Dairy-Free Concept",
    description: "Historically created as a lactose-free alternative.",
  },
  {
    icon: "flavors",
    title: "12 Original Flavors",
    description: "A collection of fruit-inspired flavors.",
  },
];

export function ValueProps() {
  return (
    <Section className="py-12 sm:py-14 lg:py-16">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {props.map((prop) => (
          <li key={prop.title} className="reveal">
            <FeatureCard
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
