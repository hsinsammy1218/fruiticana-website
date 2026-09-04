import { Hero } from "@/components/home/Hero";
import { Vision } from "@/components/home/Vision";
import { WhatIsFruiticana } from "@/components/home/WhatIsFruiticana";
import { DesignedForSchools } from "@/components/home/DesignedForSchools";
import { ServingFormats } from "@/components/home/ServingFormats";
import { FeaturedFlavors } from "@/components/home/FeaturedFlavors";
import { ConnecticutSchools } from "@/components/home/ConnecticutSchools";
import { ProductNutritionTeaser } from "@/components/home/ProductNutritionTeaser";
import { SupportingDocs } from "@/components/home/SupportingDocs";
import { CTASection } from "@/components/ui/CTASection";
import { navCta } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <Hero />
      <Vision
        cta={{
          label: "See how it could fit your school",
          href: "/schools",
        }}
      />
      <WhatIsFruiticana />
      <DesignedForSchools />
      <ServingFormats />
      <FeaturedFlavors />
      <ConnecticutSchools />
      <ProductNutritionTeaser />
      <SupportingDocs />
      <CTASection
        title="Interested in Fruiticana for Your School?"
        description="Request school information to discuss the Fruiticana vision, product formats, nutrition documentation, and how a cafeteria or snack program conversation could start."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "Explore Flavors", href: "/product" }}
      />
    </>
  );
}
