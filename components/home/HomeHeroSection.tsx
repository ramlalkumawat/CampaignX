import Link from 'next/link';

import ContactActions from '@/components/ContactActions';
import { electionFocus, trustSignals } from '@/components/home/election-home-data';

export default function HomeHeroSection() {
  return (
    <section className="theme-shell relative isolate overflow-hidden rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.18)] sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.24),_transparent_28%),radial-gradient(circle_at_right,_rgba(255,255,255,0.08),_transparent_20%)]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-400">CampaignX | Strategy. Influence. Impact.</p>
          <h1 className="theme-text-primary mt-5 max-w-5xl font-display text-4xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
            Win Your Election with Data-Driven Strategy, Booth-Level Control, and Digital Execution.
          </h1>
          <p className="theme-text-secondary mt-6 max-w-3xl text-lg leading-8 sm:text-xl">
            CampaignX is a result-driven election campaign partner for Sarpanch, Nagar Palika, Nagar Parishad, and Nagar Nigam candidates who need more than generic promotion. We build structured campaigns that turn visibility into votes.
          </p>

          <div className="mt-8">
            <ContactActions primaryLabel="Book Consultation" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="theme-chip rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="theme-panel rounded-[1.75rem] border p-6 backdrop-blur sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Election Focus</p>
              <h2 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">
                Built for local body elections where small margins decide the result.
              </h2>
            </div>
            <div className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-red-200">
              Mobile-First
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {electionFocus.map((item) => (
              <div key={item} className="theme-panel-strong rounded-[1.35rem] border p-5">
                <p className="theme-text-primary text-base font-semibold leading-6">{item}</p>
                <p className="theme-text-secondary mt-3 text-sm leading-6">
                  Structured for ward intelligence, candidate visibility, and voter conversion where local contests are won.
                </p>
              </div>
            ))}
          </div>

          <div className="theme-panel-accent mt-5 rounded-[1.5rem] border p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="theme-accent-soft text-xs font-semibold uppercase tracking-[0.28em]">Campaign stack</p>
                <p className="theme-text-primary mt-3 font-display text-3xl font-semibold">Research - Planning - Reach - Turnout</p>
              </div>
              <Link
                href="/services"
                className="theme-button-secondary inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] theme-transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
