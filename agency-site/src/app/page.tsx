import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@/components/IconMap";
import { INDUSTRIES, PROCESS_STEPS } from "@/data/site";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />

      <section className="border-t border-white/10 py-24 lg:py-32">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Industries"
              title="Domain expertise that shortens the learning curve"
              description="We've shipped production software across regulated and high-growth industries alike."
            />
            <Link
              href="/industries"
              className="mono-tag flex shrink-0 items-center gap-1 text-sm text-signal-400 hover:text-signal-300"
            >
              All industries
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/40 px-4 py-8 text-center transition-colors hover:bg-ink-800"
              >
                <Icon name={ind.icon} className="h-6 w-6 text-signal-400" />
                <span className="text-sm text-ink-200">{ind.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A clear, predictable path from idea to launch"
            description="Seven stages. Full visibility at every step. No surprises."
          />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-3 bg-ink-900 p-6"
              >
                <span className="mono-tag text-xs text-signal-400">
                  {step.step}
                </span>
                <h3 className="text-sm font-semibold text-ink-100">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
