import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";
import { resolveInterestType } from "@/data/inquiry";

export const metadata: Metadata = {
  title: "Let's Bring Fruiticana to Your Students",
  description:
    "Request Fruiticana school information: the proposed school program, nutrition documentation, and how Fruiticana could reach the students you serve.",
  alternates: { canonical: "/contact" },
};

type ContactRow = {
  label: string;
  value: string | null;
  href?: string;
};

const contactRows: ContactRow[] = [
  {
    label: "Email",
    value: site.contact.email,
    href: site.contact.email ? `mailto:${site.contact.email}` : undefined,
  },
  {
    label: "Phone",
    value: site.contact.phone,
    href: site.contact.phone
      ? `tel:+1${site.contact.phone.replace(/\D/g, "")}`
      : undefined,
  },
  {
    label: "Address",
    value: site.contact.address,
  },
];

type Search = { interest?: string };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const { interest } = await searchParams;
  const defaultInterest = resolveInterestType(interest);

  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="School inquiry"
          title="Let's Bring Fruiticana to Your Students."
          description="Tell us about your school and the students you serve. Principals, food-service directors, nutrition staff, teachers, and other teams can share program details."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <ContactForm
              key={defaultInterest}
              defaultInterest={defaultInterest}
            />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl2 border border-line bg-white p-6">
              <h2 className="text-lg font-bold text-green-deep">What happens next</h2>
              <ol className="info-copy mt-4 list-decimal space-y-2 pl-5">
                <li>Share your name, school, district, role, and a note about your students.</li>
                <li>
                  Include enrollment and any nutrition or program questions your team
                  needs answered.
                </li>
                <li>
                  You can also email or call Fruiticana directly using the contact
                  details on this page. The form on this site does not send messages
                  yet; use email or phone for follow-up until form delivery is
                  connected.
                </li>
              </ol>
            </div>

            <div className="rounded-xl2 border border-line bg-white p-6">
              <h2 className="text-lg font-bold text-green-deep">Ways to reach us</h2>
              <dl className="mt-4 space-y-3">
                {contactRows.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm font-semibold text-green-deep">
                      {row.label}
                    </dt>
                    <dd className="text-right text-sm text-muted">
                      {row.value && row.href ? (
                        <a
                          href={row.href}
                          className="font-medium text-green-deep underline-offset-2 hover:underline"
                        >
                          {row.value}
                        </a>
                      ) : (
                        (row.value ?? "Coming soon")
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl2 border border-line bg-cream-100 p-6">
              <h2 className="text-lg font-bold text-green-deep">Response times</h2>
              <p className="info-copy mt-2">
                Prefer email or phone for the fastest reply. The school inquiry
                form on this page does not deliver messages yet, so submissions
                here are not routed automatically.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
