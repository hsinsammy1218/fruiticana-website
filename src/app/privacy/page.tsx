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
          The Fruiticana website is currently informational. Contact details
          are published for direct email and phone outreach. This site does{" "}
          <strong>not</strong> collect or store personal information through
          an on-site contact form.
        </p>
        <h2>Cookies & analytics</h2>
        <p>
          This site uses{" "}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vercel Web Analytics
          </a>
          , which collects anonymized page-view and performance data. It does
          not use cookies or advertising trackers, and it does not collect
          personal information that can identify you.
        </p>
        <h2>When this changes</h2>
        <p>
          Before enabling any contact-form delivery or additional data
          collection, this policy will be updated to explain what is collected,
          why, how it is stored, and your choices.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about privacy can be sent through our{" "}
          <Link href="/contact">contact page</Link> or emailed to{" "}
          <a href="mailto:fruiticana1@hotmail.com">fruiticana1@hotmail.com</a>.
        </p>
      </Prose>
    </Section>
  );
}
