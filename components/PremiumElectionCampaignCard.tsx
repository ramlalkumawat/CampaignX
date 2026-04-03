import CTAButton from '@/components/CTAButton';
import type { PremiumElectionService } from '@/components/home/home-copy';
import { getPremiumElectionIcon } from '@/components/premium-election-icons';

interface PremiumElectionCampaignCardProps {
  service: PremiumElectionService;
  badgeLabel: string;
  focusLabel: string;
  coverageLabel: string;
}

export default function PremiumElectionCampaignCard({
  service,
  badgeLabel,
  focusLabel,
  coverageLabel,
}: PremiumElectionCampaignCardProps) {
  const Icon = getPremiumElectionIcon(service.slug);

  return (
    <article
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className="theme-panel-strong group relative isolate overflow-hidden rounded-[1.9rem] border p-6 shadow-[0_28px_90px_rgba(0,0,0,0.18)] theme-transition hover:-translate-y-1.5 hover:border-red-500/40 hover:shadow-[0_34px_110px_rgba(229,9,20,0.16)] sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600 via-red-300 to-transparent opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.16),_transparent_54%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-red-500/25 bg-red-500/10 text-red-300 shadow-[0_18px_42px_rgba(229,9,20,0.14)] theme-transition group-hover:scale-105 group-hover:border-red-400/40">
            <Icon className="h-7 w-7" />
          </div>
          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-red-200">
            {badgeLabel}
          </span>
        </div>

        <h3 id={`${service.slug}-title`} className="theme-text-primary mt-6 font-display text-3xl font-semibold tracking-tight">
          {service.title}
        </h3>
        <p className="theme-accent-soft mt-3 text-sm font-semibold leading-6">
          {service.summary}
        </p>
        <p className="theme-text-secondary mt-4 text-base leading-8">
          {service.description}
        </p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{focusLabel}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {service.focusPoints.map((point) => (
              <span key={point} className="theme-chip rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em]">
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{coverageLabel}</p>
          <ul className="theme-text-secondary mt-3 grid gap-3 text-sm leading-6">
            {service.capabilities.map((item) => (
              <li key={item} className="theme-panel rounded-2xl border px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <CTAButton label={service.cta} href="/contact" className="mt-8 w-full sm:w-auto" />
      </div>
    </article>
  );
}
