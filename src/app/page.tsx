import { Hero } from "@/components/home/Hero";
import { DesignedForSchools } from "@/components/home/DesignedForSchools";
import { WhatIsFruiticana } from "@/components/home/WhatIsFruiticana";
import { ProductNutritionTeaser } from "@/components/home/ProductNutritionTeaser";
import { ConnecticutSchools } from "@/components/home/ConnecticutSchools";
import { SupportingDocs } from "@/components/home/SupportingDocs";
import { CTASection } from "@/components/ui/CTASection";
import { navCta } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <Hero />
      <DesignedForSchools />
      <WhatIsFruiticana />
      <ProductNutritionTeaser />
      <ConnecticutSchools />
      <SupportingDocs />
      <CTASection
        title="Interested in Fruiticana for Your School?"
        description="Learn more about product availability, institutional servings, nutrition information, and potential food-service partnerships."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "For Schools", href: "/schools" }}
      />
    </>
  );
}
