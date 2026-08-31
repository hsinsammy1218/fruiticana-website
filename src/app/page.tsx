import { Hero } from "@/components/home/Hero";
import { WhatIsFruiticana } from "@/components/home/WhatIsFruiticana";
import { DesignedForSchools } from "@/components/home/DesignedForSchools";
import { FeaturedFlavors } from "@/components/home/FeaturedFlavors";
import { ServingFormats } from "@/components/home/ServingFormats";
import { ConnecticutSchools } from "@/components/home/ConnecticutSchools";
import { ProductNutritionTeaser } from "@/components/home/ProductNutritionTeaser";
import { SupportingDocs } from "@/components/home/SupportingDocs";
import { CTASection } from "@/components/ui/CTASection";
import { navCta } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsFruiticana />
      <DesignedForSchools />
      <FeaturedFlavors />
      <ServingFormats />
      <ConnecticutSchools />
      <ProductNutritionTeaser />
      <SupportingDocs />
      <CTASection
        title="Interested in Fruiticana for Your School?"
        description="Learn more about Fruiticana, product formats, nutrition information, and potential school food-service opportunities."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "Contact Fruiticana", href: "/contact" }}
      />
    </>
  );
}
