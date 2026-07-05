import { TrendingUp } from "lucide-react";
import type { PortfolioProject } from "@/data/site";

export default function PortfolioCard({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50 transition-all duration-300 hover:-translate-y-1 hover:border-signal-400/30">
      <div
        className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color} bg-ink-800`}
      >
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <span className="relative font-display text-3xl font-semibold tracking-tight text-ink-100/90">
          {project.name}
        </span>
        <span className="mono-tag absolute right-4 top-4 rounded-full border border-white/15 bg-ink-900/60 px-3 py-1 text-[10px] uppercase tracking-widest text-ink-300">
          {project.industry}
        </span>
      </div>
      <div className="p-7">
        <p className="text-sm leading-relaxed text-ink-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="mono-tag rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-ink-300"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
          {project.features.map((f) => (
            <li key={f} className="text-xs text-ink-400">
              — {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 space-y-2 border-t border-white/10 pt-5">
          {project.results.map((r) => (
            <div key={r} className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-400" />
              <span className="text-xs font-medium text-ink-100">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
