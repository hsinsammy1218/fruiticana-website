import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { ContactForm } from "@/components/contact/ContactForm";
import { StoreLocatorPlaceholder } from "@/components/contact/StoreLocatorPlaceholder";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Fruiticana - for shoppers, retailers, distributors, food service, schools, wholesale, media, and partnership inquiries.",
  alternates: { canonical: "/contact" },
};

const contactRows: { label: string; value: string | null }[] = [
  { label: "Email", value: site.contact.email },
  { label: "Phone", value: site.contact.phone },
  { label: "Address", value: site.contact.address },
];

type Search = { inquiry?: string };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const { inquiry } = await searchParams;
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Get in touch"
          description="Whether you're a shopper with a question or a retailer, distributor, school, or partner exploring Fruiticana - we'd love to hear from you."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <ContactForm key={inquiry ?? "general"} defaultInquiry={inquiry} />
          </div>

          <aside className="space-y-6">
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
              <HistoricalNotice label="Note" className="mt-5">
                We haven&rsquo;t published direct contact details yet. Until then,
                the form is the best way to record an inquiry.
              </HistoricalNotice>
            </div>

            <div className="rounded-xl2 border border-line bg-cream-100 p-6">
              <h2 className="text-lg font-bold text-green-deep">Response times</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Message delivery isn&rsquo;t active yet, so we can&rsquo;t promise
                a reply at the moment. Once a verified business inbox is
                connected, inquiries submitted here will be routed to the right
                team.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="cream-100">
        <SectionHeading
          eyebrow="Find Fruiticana"
          title="Where to find us"
          description="Fruiticana isn't listing retail or food-service locations yet. This is where availability will appear."
        />
        <div className="mt-8">
          <StoreLocatorPlaceholder />
        </div>
      </Section>
    </>
  );
}
