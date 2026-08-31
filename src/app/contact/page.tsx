import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";
import { resolveInterestType } from "@/data/inquiry";

export const metadata: Metadata = {
  title: "School Inquiry",
  description:
    "Request Fruiticana school information: product availability, institutional servings, nutrition documentation, and food-service partnerships for cafeterias, snack programs, private schools, and distributors.",
  alternates: { canonical: "/contact" },
};

const contactRows: { label: string; value: string | null }[] = [
  { label: "Email", value: site.contact.email },
  { label: "Phone", value: site.contact.phone },
  { label: "Address", value: site.contact.address },
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
          title="Request School Information"
          description="Tell us about your school or organization. This form is for administrators, food-service staff, nutrition coordinators, purchasing teams, and distribution partners."
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
                <li>Share your school, role, and program interest.</li>
                <li>
                  Include enrollment and any nutrition or serving-size questions
                  your team needs answered.
                </li>
                <li>
                  Once a verified inbox is connected, inquiries will be routed to
                  Fruiticana for follow-up on availability and documentation.
                </li>
              </ol>
              <HistoricalNotice label="Note" className="mt-5">
                Direct email, phone, and mailing details are not published yet.
                Until then, this form is the place to record a school inquiry.
              </HistoricalNotice>
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
                      {row.value ?? "Coming soon"}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl2 border border-line bg-cream-100 p-6">
              <h2 className="text-lg font-bold text-green-deep">Response times</h2>
              <p className="info-copy mt-2">
                Message delivery isn&rsquo;t active yet, so we can&rsquo;t promise
                a reply at the moment. Once a verified business inbox is
                connected, school inquiries submitted here will be routed to the
                right team.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
