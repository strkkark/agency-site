import type { Metadata } from "next";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { AGENCY_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers — Meridian",
  description:
    "Join Meridian's distributed team of senior engineers and designers building software for startups and enterprises.",
};

const OPEN_ROLES = [
  { title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time" },
  { title: "Senior React Native Developer", location: "Remote", type: "Full-time" },
  { title: "AI/ML Engineer", location: "Remote", type: "Full-time" },
  { title: "Product Designer (UI/UX)", location: "Remote", type: "Full-time" },
  { title: "DevOps / Cloud Engineer", location: "Remote", type: "Contract" },
  { title: "Technical Project Manager", location: "Remote", type: "Full-time" },
];

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
          <SectionHeading eyebrow="Open Roles" title="Current openings" />
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {OPEN_ROLES.map((role) => (
              <a
                key={role.title}
                href="#"
                className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-ink-100">
                    {role.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-4 text-xs text-ink-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {role.type}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal-400" />
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-ink-800/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-ink-100">
                Don&apos;t see the right role?
              </h3>
              <p className="mt-1 text-sm text-ink-300">
                We're always open to hearing from exceptional engineers and designers.
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
