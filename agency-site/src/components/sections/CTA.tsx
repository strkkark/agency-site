import Container from "../Container";
import Button from "../Button";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 px-8 py-16 text-center sm:px-16">
          <div className="absolute inset-0 bg-radial-fade" />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">
              Let&apos;s build something that scales.
            </h2>
            <p className="max-w-xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg">
              Tell us about your project and we&apos;ll get back to you within
              one business day with a clear plan and timeline.
            </p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg" showArrow>
                Book a Free Consultation
              </Button>
              <Button href="/portfolio" size="lg" variant="ghost">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
