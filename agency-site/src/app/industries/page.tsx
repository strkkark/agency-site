import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import { Icon } from "@/components/IconMap";
import { INDUSTRIES } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries — Meridian",
  description:
    "We build software across healthcare, finance, real estate, retail, logistics, and more.",
};

const INDUSTRY_DETAILS: Record<string, string> = {
  Healthcare:
    "HIPAA-aware platforms for telehealth, patient engagement, and remote monitoring.",
  Finance:
    "Secure, compliant systems for fintech, accounting, and expense management.",
  "Real Estate":
    "Property management, leasing, and marketplace platforms built for scale.",
  Retail: "Headless commerce and inventory systems for modern retail brands.",
  Logistics:
    "Fleet tracking, route optimization, and warehouse management software.",
  Hospitality:
    "Booking engines, guest experience apps, and operations dashboards.",
  Education:
    "Learning platforms, tutoring marketplaces, and student management tools.",
  Automotive:
    "Dealer platforms, fleet software, and connected vehicle applications.",
  Manufacturing:
    "Production tracking, supply chain visibility, and IoT integrations.",
  Technology:
    "Developer tools, SaaS platforms, and infrastructure for tech companies.",
  Government:
    "Secure, accessible citizen-facing portals and internal case management.",
  Startups:
    "Fast, lean MVPs designed to validate ideas and raise your next round.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pb-16 pt-40 lg:pt-48">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Domain expertise across regulated and high-growth sectors"
            description="Every industry has its own compliance requirements, workflows, and user expectations. We bring that context into every build."
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink-800/50 p-8 transition-colors hover:bg-ink-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-400/10 text-signal-400">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-ink-100">
                  {ind.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink-300">
                  {INDUSTRY_DETAILS[ind.name]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
