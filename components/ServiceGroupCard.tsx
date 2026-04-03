import type { ServiceGroup } from '@/components/home/home-copy';
import { getServiceGroupIcon } from '@/components/service-group-icons';

interface ServiceGroupCardProps {
  service: ServiceGroup;
  label: string;
  titleTag?: 'h2' | 'h3';
}

export default function ServiceGroupCard({
  service,
  label,
  titleTag = 'h3',
}: ServiceGroupCardProps) {
  const Icon = getServiceGroupIcon(service.slug);
  const TitleTag = titleTag;

  return (
    <article
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className="theme-panel group relative isolate overflow-hidden rounded-[1.75rem] border p-6 shadow-[0_22px_80px_rgba(0,0,0,0.14)] theme-transition hover:-translate-y-1.5 hover:border-red-500/35 hover:shadow-[0_28px_90px_rgba(229,9,20,0.14)] sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600 via-red-400 to-transparent opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.14),_transparent_54%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-red-500/20 bg-red-500/10 text-red-400 shadow-[0_14px_38px_rgba(229,9,20,0.12)] theme-transition group-hover:scale-105 group-hover:border-red-400/40 group-hover:text-red-300">
          <Icon className="h-6 w-6" />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{label}</p>
        <TitleTag id={`${service.slug}-title`} className="theme-text-primary mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {service.title}
        </TitleTag>
        <p className="theme-text-secondary mt-4 text-base leading-7">{service.summary}</p>

        <ul className="theme-text-secondary mt-6 grid gap-3 text-sm leading-6">
          {service.items.map((item) => (
            <li key={item} className="theme-panel-soft rounded-2xl border px-4 py-3 theme-transition group-hover:border-red-500/20">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
