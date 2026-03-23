import type { Metadata } from 'next';
import Link from 'next/link';

import CTAButton from '@/components/CTAButton';
import CapabilityCard from '@/components/CapabilityCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import ServicePhaseCard from '@/components/ServicePhaseCard';
import VictoryStoryCard from '@/components/VictoryStoryCard';
import { serviceCaseStudies, servicePhases, serviceProofPoints, specialCapabilities } from '@/components/services-data';

const heroSignals = [
  {
    title: 'Winning starts before the campaign noise peaks.',
    text: 'We shape image, trust, and narrative early so undecided voters lean your way sooner.',
  },
  {
    title: 'The real election is fought booth by booth.',
    text: 'Ground intelligence, turnout pressure, and local conversion are where margins move.',
  },
  {
    title: 'Victory needs protection after results day.',
    text: 'Narrative control and governance branding keep the mandate strong long after the count.',
  },
];

export const metadata: Metadata = {
  title: 'Services | End-to-End Political Campaign Management | CampaignX',
  description:
    'Explore CampaignX political campaign services for pre-election strategy, campaign execution, post-election management, and governance branding.',
};

export default function ServicesPage() {
  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-black/50 px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(229,9,20,0.18),_transparent_28%),radial-gradient(circle_at_right,_rgba(255,255,255,0.06),_transparent_20%)]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-400">Services</p>
            <h1 className="mt-5 max-w-5xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              End-to-End Political Campaign Management
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              From strategy to victory &mdash; we manage your entire political journey
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton label="Book Strategy Call" href="/contact" />
              <Link
                href="#service-phases"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-red-400/40 hover:bg-white/5"
              >
                Explore The 4 Phases
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {serviceProofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {heroSignals.map((signal) => (
                <article
                  key={signal.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:border-red-500/35"
                >
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-white">{signal.title}</h2>
                  <p className="mt-3 text-base leading-7 text-zinc-300">{signal.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="service-phases" className="mt-24 sm:mt-28">
          <SectionHeading
            eyebrow="4-Phase Model"
            title="One campaign partner from positioning to power."
            description="Each phase is built around outcomes that matter to candidates: stronger trust, better vote conversion, tighter perception control, and long-term political advantage."
          />

          <div className="mt-10 grid gap-6">
            {servicePhases.map((phase) => (
              <ServicePhaseCard key={phase.id} phase={phase} />
            ))}
          </div>
        </section>

        <section className="mt-24 sm:mt-28">
          <SectionHeading
            eyebrow="Special Capabilities"
            title="Campaign weapons built for modern political pressure."
            description="CampaignX combines strategic instinct with high-speed systems so you can see risk early, move faster, and control more of the battlefield."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {specialCapabilities.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>
        </section>

        <section id="case-studies" className="mt-24 sm:mt-28">
          <SectionHeading
            eyebrow="Case Studies"
            title="Proof that pressure can be turned into advantage."
            description="These realistic campaign scenarios show what happens when research, message discipline, booth intelligence, and rapid response move together."
          />

          <div className="mt-10 grid gap-6">
            {serviceCaseStudies.map((study, index) => (
              <VictoryStoryCard key={study.title} study={study} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[2rem] border border-red-500/25 bg-[linear-gradient(135deg,rgba(229,9,20,0.2),rgba(229,9,20,0.05),rgba(255,255,255,0.04))] px-6 py-12 text-center shadow-[0_30px_120px_rgba(0,0,0,0.25)] sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-200">Final CTA</p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to Win Your Election?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-100">
            Let&apos;s build your winning strategy.
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
