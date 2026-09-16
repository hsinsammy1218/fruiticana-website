import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valueExchange } from "@/data/program";

export function ValueExchange() {
  return (
    <Section>
      <SectionHeading
        eyebrow={valueExchange.eyebrow}
        title={valueExchange.title}
        description={valueExchange.description}
      />
      <ol className="mt-10 grid gap-4 lg:grid-cols-3">
        {valueExchange.columns.map((column, index) => (
          <li
            key={column.key}
            className="reveal relative flex h-full flex-col rounded-xl2 border border-line bg-white p-6"
          >
            {index < valueExchange.columns.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-lg font-bold text-green/50 lg:block"
              >
                →
              </span>
            ) : null}
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600">
              {column.label}
            </p>
            <h3 className="mt-2 text-xl font-bold text-green-deep">{column.title}</h3>
            <ul className="mt-4 space-y-2">
              {column.items.map((item) => (
                <li key={item} className="flex gap-2 text-base leading-snug text-green-deep">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="info-copy mt-8 max-w-3xl">{valueExchange.schoolObligations}</p>
    </Section>
  );
}
