import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { FeaturedFlavors } from "@/components/home/FeaturedFlavors";
import { Reimagined } from "@/components/home/Reimagined";
import { Formats } from "@/components/home/Formats";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { PilotTeaser } from "@/components/home/PilotTeaser";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { CTASection } from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedFlavors />
      <Reimagined />
      <Formats />
      <StoryTeaser />
      <PilotTeaser />
      <HomeTestimonials />
      <CTASection
        title="Ready for something refreshingly different?"
        description="Explore the flavors or get in touch to bring Fruiticana to your shelves, menu, or program."
        primary={{ label: "Explore the Flavors", href: "/flavors" }}
        secondary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
