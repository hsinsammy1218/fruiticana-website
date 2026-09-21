import { Hero } from "@/components/home/Hero";
import { FruitJourney } from "@/components/home/FruitJourney";
import { FlavorShowcase } from "@/components/home/FlavorShowcase";
import { OurWhy } from "@/components/home/OurWhy";
import { WhyStartYoung } from "@/components/home/WhyStartYoung";
import { MadeForSchools } from "@/components/home/MadeForSchools";
import { ProgramHowItWorks } from "@/components/home/ProgramHowItWorks";
import { CupPathways } from "@/components/home/CupPathways";
import { ConnecticutSchools } from "@/components/home/ConnecticutSchools";
import { CTASection } from "@/components/ui/CTASection";
import { navCta } from "@/data/navigation";
import { closingCta } from "@/data/home";

export default function Home() {
  return (
    <>
      <Hero />
      <FruitJourney />
      <FlavorShowcase />
      <OurWhy />
      <WhyStartYoung />
      <MadeForSchools />
      <ProgramHowItWorks showNumbers={false} />
      <CupPathways />
      <ConnecticutSchools />
      <CTASection
        title={closingCta.title}
        description={closingCta.description}
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={closingCta.secondary}
      />
    </>
  );
}
