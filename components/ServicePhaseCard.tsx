import CTAButton from '@/components/CTAButton';
import type { ServicePhase } from '@/components/services-data';

interface ServicePhaseCardProps {
  phase: ServicePhase;
}

export default function ServicePhaseCard({ phase }: ServicePhaseCardProps) {
  const Icon = phase.icon;

  return (
    <article
      id={phase.id}
      className="theme-panel group relative isolate overflow-hidden rounded-[2rem] border p-6 shadow-[0_25px_80px_rgba(0,0,0,0.2)] theme-transition hover:-translate-y-1 hover:border-red-500/40 sm:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(229,9,20,0.18),_transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-red-500/25 bg-red-500/10 p-3 text-red-300">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">{phase.phase}</p>
              <p className="theme-text-muted mt-1 text-sm font-medium">{phase.preview}</p>
            </div>
          </div>

          <h3 className="theme-text-primary mt-6 font-display text-3xl font-semibold tracking-tight">{phase.title}</h3>
          <p className="theme-text-secondary mt-4 max-w-2xl text-base leading-7">{phase.description}</p>

          <div className="mt-8">
            <p className="theme-text-muted text-xs font-semibold uppercase tracking-[0.35em]">Execution</p>
            <ul className="theme-text-secondary mt-4 space-y-3 text-sm leading-6 sm:text-base">
              {phase.execution.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <CTAButton label={phase.ctaLabel} href="/contact" />
          </div>
        </div>

        <div className="theme-panel-strong rounded-[1.75rem] border p-5 sm:p-6">
          <p className="theme-text-muted text-xs font-semibold uppercase tracking-[0.35em]">Key Outcomes</p>
          <div className="mt-5 space-y-4">
            {phase.outcomes.map((item) => (
              <div key={item} className="theme-panel-soft rounded-2xl border p-4">
                <p className="theme-text-primary text-sm font-medium leading-6 sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
