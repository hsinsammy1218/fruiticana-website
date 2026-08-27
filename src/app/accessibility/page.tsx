import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Fruiticana's commitment to an accessible website: semantic structure, keyboard support, visible focus, alt text, reduced-motion support, and readable contrast.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Legal"
        title="Accessibility"
        description="We want everyone to be able to explore Fruiticana comfortably."
      />
      <Prose className="mt-8">
        <h2>Our approach</h2>
        <p>
          This site is built with accessibility in mind, aiming to align with
          the Web Content Accessibility Guidelines (WCAG) 2.1 AA where
          practical.
        </p>
        <h2>What we&rsquo;ve done</h2>
        <ul>
          <li>Semantic landmarks and a single main heading per page.</li>
          <li>A skip link and keyboard-operable navigation, including the mobile menu.</li>
          <li>Visible focus indicators for keyboard users.</li>
          <li>Form fields with real labels and clear error messages.</li>
          <li>Descriptive text alongside imagery, with decorative art hidden from screen readers.</li>
          <li>Support for reduced-motion preferences.</li>
          <li>Color choices intended for readable contrast on our cream and green palette.</li>
        </ul>
        <h2>Ongoing work</h2>
        <p>
          Accessibility is never finished. If you encounter a barrier, please
          let us know through our <Link href="/contact">contact page</Link> so we
          can address it.
        </p>
      </Prose>
    </Section>
  );
}
