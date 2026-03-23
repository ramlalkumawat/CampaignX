import type { CaseStudy } from '@/components/services-data';

interface VictoryStoryCardProps {
  study: CaseStudy;
  index: number;
}

export default function VictoryStoryCard({ study, index }: VictoryStoryCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-red-500/40 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Case Study 0{index + 1}</p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">{study.title}</h3>
        </div>

        <div className="rounded-[1.5rem] border border-red-500/20 bg-red-500/10 px-5 py-4 text-left sm:min-w-[10rem] sm:text-right">
          <p className="font-display text-4xl font-semibold leading-none text-white">{study.metricValue}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-200">{study.metricLabel}</p>
        </div>
      </div>

      <p className="mt-6 text-base leading-7 text-zinc-300">{study.story}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {study.stats.map((stat) => (
          <div key={stat} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white">
            {stat}
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-red-200">Outcome</p>
      <p className="mt-2 text-sm leading-6 text-white sm:text-base">{study.outcome}</p>
    </article>
  );
}
