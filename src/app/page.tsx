import { Hero } from "@/components/home/Hero";
import { HealthierChoice } from "@/components/home/HealthierChoice";
import { WhatIsFruiticana } from "@/components/home/WhatIsFruiticana";
import { FeaturedFlavors } from "@/components/home/FeaturedFlavors";
import { DesignedForSchools } from "@/components/home/DesignedForSchools";
import { ServingFormats } from "@/components/home/ServingFormats";
import { ConnecticutSchools } from "@/components/home/ConnecticutSchools";
import { SchoolCredibility } from "@/components/home/SchoolCredibility";
import { CTASection } from "@/components/ui/CTASection";
import { navCta } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <Hero />
      <HealthierChoice />
      <WhatIsFruiticana />
      <FeaturedFlavors />
      <DesignedForSchools />
      <ServingFormats />
      <ConnecticutSchools />
      <SchoolCredibility />
      <CTASection
        title="Interested in Fruiticana for Your School?"
        description="Request school information to talk through the flavors, the 4 oz single-serve format, nutrition documentation, and how a cafeteria or snack-program conversation could start."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "Explore the Flavors", href: "/product" }}
      />
    </>
  );
}
