import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function PilotTeaser() {
  return (
    <Section tone="deep">
      <div className="reveal grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
            Historical Fruiticana pilot program
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-cream sm:text-4xl">
            Proven in Connecticut
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-cream/80">
            In a localized pilot, Fruiticana was sampled by around 30,000 people
            across the Connecticut area and served through an independently owned
            parlor. It&rsquo;s a real chapter in the brand&rsquo;s history.
          </p>
          <div className="mt-7">
            <Button
              href="/story"
              size="lg"
              variant="secondary"
              className="border-cream/30 bg-transparent text-cream hover:border-cream/60 hover:bg-cream/10"
            >
              Read the full story
            </Button>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-4">
          <div className="rounded-xl2 bg-green-deep-80 p-5">
            <dt className="text-sm text-cream/70">Consumers sampled</dt>
            <dd className="mt-1 font-display text-3xl font-extrabold text-cream">
              ~30,000
            </dd>
          </div>
          <div className="rounded-xl2 bg-green-deep-80 p-5">
            <dt className="text-sm text-cream/70">Pilot period</dt>
            <dd className="mt-1 font-display text-3xl font-extrabold text-cream">
              2005-06
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
