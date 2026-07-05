import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import { PROCESS_STEPS } from "@/data/site";

export const metadata: Metadata = {
  title: "Process — Meridian",
  description:
    "Our seven-stage development process: discovery, strategy, design, development, testing, deployment, and maintenance.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="pb-16 pt-40 lg:pt-48">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A clear, predictable path from idea to launch"
            description="Every project moves through the same seven stages, so you always know what's happening and what comes next."
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="relative">
            <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 lg:block" />
            <div className="flex flex-col gap-10">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="relative grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-start lg:gap-8"
                >
                  <div className="flex items-center gap-4 lg:col-span-3">
                    <span className="mono-tag relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink-900 text-sm text-signal-400">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-semibold text-ink-100 lg:hidden">
                      {step.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="hidden text-lg font-semibold text-ink-100 lg:block">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
