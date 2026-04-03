import Link from 'next/link';

import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { servicePhases } from '@/components/services-data';

export default function ServicesPreviewSection() {
  return (
    <section id="what-we-do" className="mt-24 sm:mt-28">
      <div className="theme-shell overflow-hidden rounded-[2rem] border p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-end">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="What We Do"
                title="A political operating system built to win pressure moments."
                description="CampaignX covers the full battlefield. We shape trust early, convert momentum at the booth, secure the mandate, and turn governance into the next advantage."
              />

              <div className="theme-panel mt-8 max-w-md rounded-[1.6rem] border p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">Campaign Logic</p>
                <p className="theme-text-primary mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">
                  One partner. Four phases. Zero drift.
                </p>
                <p className="theme-text-secondary mt-3 text-sm leading-6">
                  Message, field, data, and response stay aligned from first positioning sprint to post-victory perception control.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {servicePhases.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <Reveal key={phase.id} delay={index * 80}>
                  <article className="theme-panel-strong group relative isolate overflow-hidden rounded-[1.75rem] border p-6 theme-transition hover:-translate-y-1.5 hover:border-red-500/40">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600 via-red-400 to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.14),_transparent_50%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-red-500/25 bg-red-500/10 text-red-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="theme-text-muted text-[11px] font-semibold uppercase tracking-[0.12em]">
                          {phase.phase}
                        </span>
                      </div>

                      <h3 className="theme-text-primary mt-6 font-display text-2xl font-semibold tracking-[-0.04em]">
                        {phase.title}
                      </h3>
                      <p className="theme-text-secondary mt-3 text-sm leading-6">{phase.preview}</p>

                      <p className="theme-accent-soft mt-5 text-xs font-semibold uppercase tracking-[0.14em]">Impact</p>
                      <p className="theme-text-primary mt-2 text-sm leading-6">{phase.outcomes[0]}</p>

                      <Link
                        href={`/services#${phase.id}`}
                        className="theme-accent-soft mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.12em] theme-transition group-hover:text-[var(--text-primary)]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={280}>
          <div className="section-divider mt-10 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="theme-text-secondary max-w-2xl text-sm leading-6 sm:text-base">
                Candidates do not lose because they worked less. They lose because the system around them was slower, weaker, or fragmented.
              </p>
              <Link
                href="/services"
                className="theme-button-secondary inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] theme-transition"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
