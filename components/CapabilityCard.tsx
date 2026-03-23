import type { Capability } from '@/components/services-data';

interface CapabilityCardProps {
  capability: Capability;
}

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <article className="theme-panel group rounded-[1.75rem] border p-6 theme-transition hover:-translate-y-1 hover:border-red-500/35">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/25 bg-red-500/10 text-red-300 transition duration-300 group-hover:scale-105 group-hover:border-red-400/40">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="theme-text-primary mt-5 font-display text-2xl font-semibold tracking-tight">{capability.title}</h3>
      <p className="theme-text-secondary mt-3 text-sm leading-6 sm:text-base">{capability.description}</p>
    </article>
  );
}
