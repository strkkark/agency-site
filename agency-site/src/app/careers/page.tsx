import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { AGENCY_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers — Meridian",
  description:
    "Careers at Meridian. We are not actively hiring at the moment, but we are always open to connecting with exceptional talent.",
};

const PERKS = [
  "Fully remote, work from anywhere",
  "Flexible hours across time zones",
  "Senior-only teams, no busywork",
  "Annual learning and conference budget",
  "Top-of-market compensation",
  "Long-term client relationships, not churn-and-burn",
];

export default function CareersPage() {
  return (
    <>
      <section className="pb-16 pt-40 lg:pt-48">
        <Container>
          <SectionHeading
            eyebrow="Careers"
            title={`Build with the best engineers at ${AGENCY_NAME}`}
            description="We're a distributed team of senior engineers and designers working with startups and enterprises across 10+ countries."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((perk) => (
              <div
                key={perk}
                className="rounded-2xl border border-white/10 bg-ink-800/50 p-6 text-sm text-ink-200"
              >
                {perk}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Careers"
            title="No Open Positions"
            description="We are not actively hiring at the moment. However, we're always interested in connecting with exceptional talent for future opportunities."
          />

          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-ink-800/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-ink-100">
                No vacancies available
              </h3>
              <p className="mt-1 text-sm text-ink-300">
                We currently do not have any open positions. If you'd like to be
                considered for future opportunities, feel free to reach out and
                introduce yourself.
              </p>
            </div>

            <Button href="/contact" showArrow>
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
