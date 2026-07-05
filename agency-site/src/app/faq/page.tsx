import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "FAQ — Meridian",
  description:
    "Frequently asked questions about our software development process, pricing, and engagement model.",
};

export default function FAQPage() {
  return (
    <>
      <section className="pb-16 pt-40 lg:pt-48">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know before starting a project with us. Can't find your answer? Reach out directly."
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="max-w-3xl">
            <FAQAccordion />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
