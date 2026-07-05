import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Icon } from "../IconMap";
import { SERVICES } from "@/data/site";

export default function ServicesGrid({ full = false }: { full?: boolean }) {
  const list = full ? SERVICES : SERVICES.slice(0, 6);

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-cycle software development"
            description="From MVP to enterprise platform, we cover every layer of the stack with senior engineering talent."
          />
          {!full && (
            <Link
              href="/services"
              className="mono-tag flex shrink-0 items-center gap-1 text-sm text-signal-400 hover:text-signal-300"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              id={service.slug}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-800/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-signal-400/30 hover:bg-ink-800"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-400/10 text-signal-400">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink-100">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {service.tagline}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="mono-tag text-xs text-ink-400">
                  From{" "}
                  <span className="text-ink-100">{service.startingPrice}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal-400" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
