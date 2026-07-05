import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { OFFICE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Meridian",
  description:
    "Get in touch with Meridian to discuss your software development project. We respond within one business day.",
};

const INFO = [
  { icon: Mail, label: "Email", value: OFFICE.email },
  { icon: Phone, label: "Phone", value: OFFICE.phone },
  { icon: MapPin, label: "Office", value: OFFICE.address },
  { icon: Clock, label: "Business Hours", value: OFFICE.hours },
];

export default function ContactPage() {
  return (
    <section className="pb-24 pt-40 lg:pb-32 lg:pt-48">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your project"
          description="Fill out the form and a member of our team will respond within one business day."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="space-y-4 lg:col-span-5">
            {INFO.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-800/50 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal-400/10 text-signal-400">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="mono-tag text-xs uppercase tracking-widest text-ink-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-ink-100">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
