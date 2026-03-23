import type { Capability } from '@/components/services-data';

interface CapabilityCardProps {
  capability: Capability;
}

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/35 hover:bg-white/[0.05]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/25 bg-red-500/10 text-red-300 transition duration-300 group-hover:scale-105 group-hover:border-red-400/40">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-white">{capability.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-300 sm:text-base">{capability.description}</p>
    </article>
  );
}
