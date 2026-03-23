import Link from 'next/link';

import SectionHeading from '@/components/SectionHeading';
import { servicePhases } from '@/components/services-data';

export default function ServicesPreviewSection() {
  return (
    <section id="what-we-do" className="mt-24 sm:mt-28">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="What We Do"
            description="CampaignX manages the full political journey, from early positioning to booth conversion to post-victory control and long-term leadership branding."
          />

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-red-400/50 hover:bg-white/5"
          >
            View All Services
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {servicePhases.map((phase) => {
            const Icon = phase.icon;

            return (
              <article
                key={phase.id}
                className="group relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.14),_transparent_50%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl border border-red-500/25 bg-red-500/10 p-3 text-red-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">{phase.phase}</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{phase.preview}</p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-red-200">Outcome</p>
                  <p className="mt-2 text-sm leading-6 text-white">{phase.outcomes[0]}</p>

                  <Link
                    href={`/services#${phase.id}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.25em] text-red-300 transition group-hover:text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
