import { Hero } from "@/components/home/Hero";
import { OurWhy } from "@/components/home/OurWhy";
import { WhatIsFruiticana } from "@/components/home/WhatIsFruiticana";
import { WhyStartYoung } from "@/components/home/WhyStartYoung";
import { ProgramHowItWorks } from "@/components/home/ProgramHowItWorks";
import { ConnecticutSchools } from "@/components/home/ConnecticutSchools";
import { TrustHub } from "@/components/home/TrustHub";
import { CTASection } from "@/components/ui/CTASection";
import { navCta } from "@/data/navigation";
import { closingCta } from "@/data/home";

export default function Home() {
  return (
    <>
      <Hero />
      <OurWhy />
      <WhatIsFruiticana />
      <WhyStartYoung />
      <ProgramHowItWorks />
      <ConnecticutSchools />
      <TrustHub />
      <CTASection
        title={closingCta.title}
        description={closingCta.description}
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={closingCta.secondary}
      />
    </>
  );
}
