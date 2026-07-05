import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceDetailCard from "@/components/sections/ServiceDetailCard";
import CTA from "@/components/sections/CTA";
import { SERVICES } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — Meridian",
  description:
    "Full-cycle software development services: mobile apps, web platforms, backend systems, AI integration, AR/VR, custom software, and e-commerce.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-16 pt-40 lg:pt-48">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Every layer of the stack, one senior team"
            description="We design, build, and ship production software across mobile, web, backend, and AI — with pricing that's transparent from the first conversation."
          />
        </Container>
      </section>

      <section>
        <Container>
          {SERVICES.map((service, i) => (
            <ServiceDetailCard
              key={service.slug}
              service={service}
              reversed={i % 2 === 1}
            />
          ))}
        </Container>
      </section>

      <CTA />
    </>
  );
}
