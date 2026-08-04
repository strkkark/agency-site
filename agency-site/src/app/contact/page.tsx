import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Meridian",
  description:
    "Get in touch with Meridian to discuss your software development project. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-40 lg:pb-32 lg:pt-48">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your project"
          description="Fill out the form and a member of our team will respond within one business day."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
