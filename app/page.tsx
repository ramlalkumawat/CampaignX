import type { Metadata } from 'next';
import Link from 'next/link';

import CTAButton from '@/components/CTAButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import ServicesPreviewSection from '@/components/ServicesPreviewSection';
import VictoryStoryCard from '@/components/VictoryStoryCard';
import { serviceCaseStudies, serviceProofPoints } from '@/components/services-data';

const strategicEdges = [
  {
    title: 'Narrative control before the race peaks',
    text: 'We make sure voters hear your story first, understand it fast, and remember it when the opponent starts spending.',
  },
  {
    title: 'Booth-level pressure where margins are decided',
    text: 'Crowd size does not win seats. Precision booth operations, turnout management, and local persuasion do.',
  },
  {
    title: 'A campaign system that keeps its nerve',
    text: 'Our war-room model keeps messaging, field teams, and response strategy aligned when pressure is highest.',
  },
];

export const metadata: Metadata = {
  title: 'CampaignX | Political Campaign Strategy That Wins Elections',
  description:
    'CampaignX helps serious political candidates win elections with sharper positioning, booth-level execution, and long-term leadership branding.',
};

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <section className="theme-shell relative isolate overflow-hidden rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.18)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_25%)]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-400">CampaignX</p>
              <h1 className="theme-text-primary mt-5 max-w-4xl font-display text-4xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
                We don&apos;t run campaigns. We win elections.
              </h1>
              <p className="theme-text-secondary mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
                Strategy. Influence. Impact. CampaignX helps candidates convert visibility into votes, build booth dominance, and hold narrative control from launch to victory.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton label="Book Strategy Call" href="/contact" />
                <Link
                  href="/services"
                  className="theme-button-secondary inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] theme-transition"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {serviceProofPoints.map((point) => (
                  <div
                    key={point}
                    className="theme-chip rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-panel rounded-[1.75rem] border p-6 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Command View</p>
                  <h2 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">Where the margin gets built</h2>
                </div>
                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  Live
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="theme-panel-strong rounded-[1.5rem] border p-5">
                  <p className="theme-text-muted text-xs font-semibold uppercase tracking-[0.28em]">Priority booths</p>
                  <p className="theme-text-primary mt-3 font-display text-4xl font-semibold">128</p>
                  <p className="theme-text-secondary mt-2 text-sm leading-6">Ranked by turnout risk, persuasion potential, and worker strength.</p>
                </div>
                <div className="theme-panel-strong rounded-[1.5rem] border p-5">
                  <p className="theme-text-muted text-xs font-semibold uppercase tracking-[0.28em]">Candidate recall</p>
                  <p className="theme-text-primary mt-3 font-display text-4xl font-semibold">+18 pts</p>
                  <p className="theme-text-secondary mt-2 text-sm leading-6">Lift after message discipline, local media sequencing, and WhatsApp follow-ups.</p>
                </div>
                <div className="theme-panel-strong rounded-[1.5rem] border p-5 sm:col-span-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="theme-text-muted text-xs font-semibold uppercase tracking-[0.28em]">Rapid response clock</p>
                      <p className="theme-text-primary mt-3 font-display text-4xl font-semibold">19 min</p>
                    </div>
                    <div className="theme-text-secondary grid gap-2 text-right text-sm">
                      <span>Opposition clip flagged</span>
                      <span>Counter-message drafted</span>
                      <span>Ward leads briefed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesPreviewSection />

        <section className="mt-24 sm:mt-28">
          <SectionHeading
            eyebrow="Why CampaignX"
            title="Serious candidates hire us when the race cannot be left to instinct."
            description="Campaigns become dangerous when message, field, and data move in different directions. We close that gap and turn pressure into control."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {strategicEdges.map((edge) => (
              <article
                key={edge.title}
                className="theme-panel rounded-[1.75rem] border p-6 theme-transition hover:-translate-y-1 hover:border-red-500/35"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Strategic Edge</p>
                <h3 className="theme-text-primary mt-4 font-display text-2xl font-semibold tracking-tight">{edge.title}</h3>
                <p className="theme-text-secondary mt-4 text-base leading-7">{edge.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 sm:mt-28">
          <SectionHeading
            eyebrow="Campaign Proof"
            title="When the system tightens, the numbers move."
            description="CampaignX is built to influence what matters most: voter engagement, booth conversion, and mandate stability under pressure."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {serviceCaseStudies.slice(0, 2).map((study, index) => (
              <VictoryStoryCard key={study.title} study={study} index={index} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services#case-studies"
              className="theme-button-secondary inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] theme-transition"
            >
              See More Case Studies
            </Link>
          </div>
        </section>

        <section className="theme-panel-accent mt-24 rounded-[2rem] border px-6 py-12 text-center shadow-[0_30px_120px_rgba(0,0,0,0.15)] sm:px-8">
          <p className="theme-accent-soft text-xs font-semibold uppercase tracking-[0.4em]">Ready To Move</p>
          <h2 className="theme-text-primary mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Every delayed decision gives the other side more space.
          </h2>
          <p className="theme-text-secondary mx-auto mt-5 max-w-3xl text-lg leading-8">
            If you want a sharper image, tighter booth control, and a campaign structure built to win, CampaignX is ready.
          </p>
          <div className="mt-8">
            <CTAButton label="Book Strategy Call" href="/contact" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
