interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

export default function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <blockquote className="theme-panel rounded-2xl border p-6 shadow-lg shadow-black/20 theme-transition">
      <p className="theme-text-primary text-sm leading-relaxed">“{quote}”</p>
      <footer className="theme-text-secondary mt-4 text-sm">
        <span className="theme-text-primary font-semibold">{name}</span>, {title}
      </footer>
    </blockquote>
  );
}
