import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import { AGENCY_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — Meridian",
  description:
    "Meridian is a software development agency helping startups and enterprises build world-class digital products.",
};

const VALUES = [
  {
    title: "Craft over speed",
    description:
      "We'd rather build something well than ship something fast and fragile. Speed comes from doing it right the first time.",
  },
  {
    title: "Radical transparency",
    description:
      "You see the same project board, the same demos, and the same timelines we do. No black boxes.",
  },
  {
    title: "Senior only",
    description:
      "Every engineer on our team has shipped production software before joining us. No juniors learning on your budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-40 lg:pt-48">
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title={`${AGENCY_NAME} is a software agency built for the long term`}
            description="We started Meridian because too many software projects were shipped late, over budget, and full of technical debt. We build differently: senior engineers, fixed-scope pricing, and complete transparency from day one."
          />
        </Container>
      </section>

      <Stats />

      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What we optimize for" />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-ink-800/50 p-8"
              >
                <h3 className="text-lg font-semibold text-ink-100">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <CTA />
    </>
  );
}
