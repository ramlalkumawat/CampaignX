import type { CaseStudy } from '@/components/services-data';

interface VictoryStoryCardProps {
  study: CaseStudy;
  index: number;
}

export default function VictoryStoryCard({ study, index }: VictoryStoryCardProps) {
  return (
    <article className="theme-shell group rounded-[2rem] border p-6 shadow-[0_22px_80px_rgba(0,0,0,0.18)] theme-transition hover:-translate-y-1 hover:border-red-500/40 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Case Study 0{index + 1}</p>
          <h3 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">{study.title}</h3>
        </div>

        <div className="rounded-[1.5rem] border border-red-500/20 bg-red-500/10 px-5 py-4 text-left sm:min-w-[10rem] sm:text-right">
          <p className="theme-text-primary font-display text-4xl font-semibold leading-none">{study.metricValue}</p>
          <p className="theme-accent-soft mt-2 text-xs font-semibold uppercase tracking-[0.3em]">{study.metricLabel}</p>
        </div>
      </div>

      <p className="theme-text-secondary mt-6 text-base leading-7">{study.story}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {study.stats.map((stat) => (
          <div key={stat} className="theme-panel-soft theme-text-primary rounded-2xl border px-4 py-3 text-sm font-medium">
            {stat}
          </div>
        ))}
      </div>

      <p className="theme-accent-soft mt-6 text-sm font-semibold uppercase tracking-[0.25em]">Outcome</p>
      <p className="theme-text-primary mt-2 text-sm leading-6 sm:text-base">{study.outcome}</p>
    </article>
  );
}
