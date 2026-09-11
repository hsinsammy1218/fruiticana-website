import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Preliminary privacy information for the Fruiticana website. The site is currently informational and does not transmit or store personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" />
      <Prose className="mt-8">
        <h2>What we collect</h2>
        <p>
          The Fruiticana website is currently informational. The contact form
          validates input in your browser only and does{" "}
          <strong>not</strong> transmit or store your information anywhere,
          because no message-delivery backend is connected yet.
        </p>
        <h2>Cookies & analytics</h2>
        <p>
          No analytics, advertising, or tracking cookies are configured on this
          site.
        </p>
        <h2>When this changes</h2>
        <p>
          Before enabling contact-form delivery, analytics,
          or any data collection, this policy will be updated to explain what is
          collected, why, how it is stored, and your choices.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about privacy can be recorded through our{" "}
          <Link href="/contact">contact page</Link>. Direct contact details will
          be added once available.
        </p>
      </Prose>
    </Section>
  );
}
