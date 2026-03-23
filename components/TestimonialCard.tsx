interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

export default function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/40">
      <p className="text-sm leading-relaxed text-white">“{quote}”</p>
      <footer className="mt-4 text-sm text-gray-300">
        <span className="font-semibold text-white">{name}</span>, {title}
      </footer>
    </blockquote>
  );
}
