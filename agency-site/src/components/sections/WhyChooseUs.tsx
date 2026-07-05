import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Icon } from "../IconMap";
import { WHY_CHOOSE_US } from "@/data/site";

export default function WhyChooseUs() {
  return (
    <section className="border-t border-white/10 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Meridian"
          title="Engineering rigor, agency speed"
          description="We combine the discipline of an in-house engineering team with the speed and focus of a dedicated agency."
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 bg-ink-900 p-6 transition-colors hover:bg-ink-800"
            >
              <Icon name={item.icon} className="h-5 w-5 text-signal-400" />
              <div>
                <h3 className="text-sm font-semibold text-ink-100">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
