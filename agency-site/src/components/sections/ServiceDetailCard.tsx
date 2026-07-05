import { Check } from "lucide-react";
import { Icon } from "../IconMap";
import Button from "../Button";
import type { Service } from "@/data/site";

export default function ServiceDetailCard({
  service,
  reversed = false,
}: {
  service: Service;
  reversed?: boolean;
}) {
  return (
    <div
      id={service.slug}
      className="scroll-mt-24 grid grid-cols-1 gap-10 border-t border-white/10 py-16 lg:grid-cols-12 lg:gap-8"
    >
      <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal-400/10 text-signal-400">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-ink-100 sm:text-3xl">
          {service.name}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-300">
          {service.description}
        </p>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="mono-tag text-xs uppercase tracking-widest text-ink-400">
            Starting at
          </span>
          <span className="font-display text-2xl font-semibold text-ink-100">
            {service.startingPrice}
          </span>
        </div>
        <div className="mt-8">
          <Button href="/contact" showArrow>
            Learn More
          </Button>
        </div>
      </div>

      <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-6">
            <span className="mono-tag text-xs uppercase tracking-widest text-ink-400">
              What&apos;s included
            </span>
            <ul className="mt-4 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-200">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-6">
            <span className="mono-tag text-xs uppercase tracking-widest text-ink-400">
              Pricing tiers
            </span>
            <ul className="mt-4 space-y-4">
              {service.tiers.map((tier) => (
                <li
                  key={tier.name}
                  className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-ink-200">{tier.name}</span>
                  <span className="mono-tag text-sm text-signal-400">
                    {tier.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
