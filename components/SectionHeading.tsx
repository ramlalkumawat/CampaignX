interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';
  const eyebrowAlignment = align === 'center' ? 'justify-center' : 'justify-start';

  return (
    <div className={alignmentClass}>
      <div className={`flex items-center gap-3 ${eyebrowAlignment}`}>
        <span className="h-px w-10 bg-gradient-to-r from-red-500 to-transparent" />
        <p className="text-xs font-medium uppercase tracking-[0.38em] text-red-400">{eyebrow}</p>
      </div>
      <h2 className="headline-balance theme-text-primary mt-5 font-display text-3xl font-semibold tracking-[0.01em] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="copy-balance theme-text-secondary mt-5 text-base sm:text-lg">{description}</p>
    </div>
  );
}
