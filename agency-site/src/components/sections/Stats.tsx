import Container from "../Container";
import Counter from "../Counter";
import { STATS } from "@/data/site";

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-ink-800/40 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-4xl font-semibold text-ink-100 sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-ink-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
