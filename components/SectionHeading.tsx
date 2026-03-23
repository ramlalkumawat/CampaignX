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

  return (
    <div className={alignmentClass}>
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-400">{eyebrow}</p>
      <h2 className="theme-text-primary mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="theme-text-secondary mt-4 text-base leading-7 sm:text-lg">{description}</p>
    </div>
  );
}
