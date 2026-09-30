import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Fruiticana by email, phone, or mail: fruiticana1@hotmail.com, 203-709-0992, 16 Pleasant St, Waterbury, CT 06706.",
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

export default function ContactPage() {
  return (
    <Section>
      <div className="mx-auto max-w-md">
        <div className="rounded-xl2 border border-line bg-white p-6 sm:p-8">
          <h1 className="text-lg font-bold text-green-deep sm:text-xl">
            Ways to reach us
          </h1>
          <dl className="mt-4 space-y-3">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4"
              >
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
      </div>
    </Section>
  );
}
