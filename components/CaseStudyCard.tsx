interface CaseStudyCardProps {
  title: string;
  summary: string;
  metrics: string;
}

export default function CaseStudyCard({ title, summary, metrics }: CaseStudyCardProps) {
  return (
    <article className="theme-panel-strong rounded-2xl border p-6 theme-transition hover:-translate-y-1 hover:border-red-500/70">
      <h3 className="theme-text-primary text-xl font-bold">{title}</h3>
      <p className="theme-text-secondary mt-2">{summary}</p>
      <p className="theme-accent-soft mt-4 font-semibold">{metrics}</p>
    </article>
  );
}
