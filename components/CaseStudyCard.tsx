interface CaseStudyCardProps {
  title: string;
  summary: string;
  metrics: string;
}

export default function CaseStudyCard({ title, summary, metrics }: CaseStudyCardProps) {
  return (
    <article className="rounded-2xl border border-white/8 bg-black/70 p-6 transition hover:-translate-y-1 hover:border-red-500/70 hover:bg-black/90">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{summary}</p>
      <p className="mt-4 font-semibold text-red-300">{metrics}</p>
    </article>
  );
}
