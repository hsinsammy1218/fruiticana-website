import { Hero } from "@/components/home/Hero";
import { OurWhy } from "@/components/home/OurWhy";
import { FruitJourney } from "@/components/home/FruitJourney";
import { WhatIsFruiticana } from "@/components/home/WhatIsFruiticana";
import { MadeForKids } from "@/components/home/MadeForKids";
import { FeaturedFlavors } from "@/components/home/FeaturedFlavors";
import { HealthierChoice } from "@/components/home/HealthierChoice";
import { DesignedForSchools } from "@/components/home/DesignedForSchools";
import { ConnecticutSchools } from "@/components/home/ConnecticutSchools";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SchoolCredibility } from "@/components/home/SchoolCredibility";
import { FaqSection } from "@/components/home/FaqSection";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { navCta } from "@/data/navigation";
import { closingCta } from "@/data/home";
import { faqItems } from "@/data/faq";

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <Hero />
      <OurWhy />
      <FruitJourney />
      <WhatIsFruiticana />
      <MadeForKids />
      <FeaturedFlavors />
      <HealthierChoice />
      <DesignedForSchools />
      <ConnecticutSchools />
      <HowItWorks />
      <SchoolCredibility />
      <FaqSection />
      <CTASection
        title={closingCta.title}
        description={closingCta.description}
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={closingCta.secondary}
      />
    </>
  );
}
