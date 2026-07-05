import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { PRICING_PLANS } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing — Meridian",
  description:
    "Transparent, fixed-scope pricing for startups and enterprises. Starter, Business, and Enterprise plans.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pb-16 pt-40 lg:pt-48">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent pricing, no surprise invoices"
            description="Every engagement starts with a fixed-scope quote broken down by milestone, so you always know what you're paying for."
            align="center"
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-3xl border p-8 ${
                  plan.highlighted
                    ? "relative border-signal-400/40 bg-ink-800 shadow-[0_0_60px_-15px_rgba(91,127,255,0.35)]"
                    : "border-white/10 bg-ink-800/40"
                }`}
              >
                {plan.highlighted && (
                  <span className="mono-tag absolute -top-3 left-8 rounded-full bg-signal-400 px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-ink-100">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  {plan.period && (
                    <span className="mono-tag text-xs uppercase tracking-widest text-ink-400">
                      {plan.period}
                    </span>
                  )}
                  <span className="font-display text-3xl font-semibold text-ink-100">
                    {plan.price}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink-200"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.highlighted ? "primary" : "ghost"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Pricing FAQ"
            align="center"
          />
          <div className="mx-auto mt-14 max-w-3xl">
            <FAQAccordion />
          </div>
        </Container>
      </section>
    </>
  );
}
