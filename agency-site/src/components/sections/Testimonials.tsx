import { Quote } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client Results"
          title="Trusted by founders and product teams"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-800/50 p-8"
            >
              <div>
                <Quote className="h-6 w-6 text-signal-400" />
                <p className="mt-5 text-base leading-relaxed text-ink-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-signal-400/15 font-display text-sm font-semibold text-signal-400">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink-100">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
