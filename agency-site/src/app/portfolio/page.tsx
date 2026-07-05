import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/sections/PortfolioCard";
import CTA from "@/components/sections/CTA";
import { PORTFOLIO } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio — Meridian",
  description:
    "Real-world software products we've designed and built for startups and enterprises.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pb-16 pt-40 lg:pt-48">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Products we've shipped into production"
            description="A selection of platforms we've designed, built, and scaled across healthcare, finance, retail, logistics, and education."
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
