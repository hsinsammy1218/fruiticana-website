import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <div className="mx-auto max-w-xl py-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">
          404
        </p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          This page melted away
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          We couldn&rsquo;t find that page. Let&rsquo;s get you back to something
          refreshing.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back home
          </Button>
          <Button href="/flavors" size="lg" variant="secondary">
            Explore the Flavors
          </Button>
        </div>
      </div>
    </Section>
  );
}
