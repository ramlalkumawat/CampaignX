"use client";

import { useLanguage } from '@/components/LanguageProvider';

interface CaseStudyCardProps {
  title: string;
  summary: string;
  metrics: string;
}

export default function CaseStudyCard({ title, summary, metrics }: CaseStudyCardProps) {
  const { language } = useLanguage();
  const copy =
    language === 'hi'
      ? {
          snapshot: 'रिज़ल्ट स्नैपशॉट',
          metrics: 'मेट्रिक्स',
        }
      : {
          snapshot: 'Result Snapshot',
          metrics: 'Metrics',
        };

  return (
    <article className="theme-panel-strong group rounded-[1.75rem] border p-6 theme-transition hover:-translate-y-1.5 hover:border-red-500/40">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.snapshot}</p>
      <h3 className="theme-text-primary mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
      <p className="copy-balance theme-text-secondary mt-4 text-sm leading-6 sm:text-base">{summary}</p>
      <div className="mt-6 rounded-[1.25rem] border border-red-500/15 bg-red-500/[0.06] px-4 py-3">
        <p className="theme-accent-soft text-xs font-semibold uppercase tracking-[0.14em]">{copy.metrics}</p>
        <p className="theme-text-primary mt-3 text-sm font-medium leading-6">{metrics}</p>
      </div>
    </article>
  );
}
