import Reveal from '@/components/Reveal';
import type { Capability } from '@/components/services-data';

interface CapabilityCardProps {
  capability: Capability;
  index?: number;
}

export default function CapabilityCard({ capability, index = 0 }: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <Reveal delay={index * 70}>
      <article className="theme-panel group relative overflow-hidden rounded-[1.75rem] border p-6 theme-transition hover:-translate-y-1.5 hover:border-red-500/35">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-500 via-red-300/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.14),_transparent_50%)] opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-red-500/25 bg-red-500/10 text-red-300 transition duration-300 group-hover:scale-105 group-hover:border-red-400/40">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="theme-text-primary mt-6 font-display text-2xl font-semibold tracking-[-0.04em]">
            {capability.title}
          </h3>
          <p className="copy-balance theme-text-secondary mt-4 text-sm leading-6 sm:text-base">
            {capability.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
