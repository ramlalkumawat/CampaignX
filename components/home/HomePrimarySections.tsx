import Link from 'next/link';

import ContactActions from '@/components/ContactActions';
import SectionHeading from '@/components/SectionHeading';
import { serviceGroups, whoWeArePoints, workProcess } from '@/components/home/election-home-data';

export default function HomePrimarySections() {
  return (
    <>
      <section id="who-we-are" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow="Who We Are"
          title="CampaignX is a political campaign management company built to help candidates win, not just look active."
          description="We combine field execution, digital marketing, and campaign analytics into one coordinated operating system for local elections across India, with sharp relevance for Rajasthan and high-competition civic races."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
            <p className="theme-text-secondary text-base leading-8 sm:text-lg">
              Most local campaigns still run on fragmented vendors, late-stage guesswork, and broad messaging. CampaignX fixes that. We build election systems that connect research, booth planning, creative production, WhatsApp communication, paid media, and ground coordination into one decision loop.
            </p>
            <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">
              Whether you are contesting a Sarpanch seat or a Nagar Nigam race, our job is to make your campaign more disciplined, more visible, and more persuasive in the places that decide the election.
            </p>

            <div className="theme-panel-soft mt-6 rounded-[1.5rem] border p-5">
              <p className="theme-text-primary text-lg font-semibold">Where we create leverage</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="theme-chip rounded-2xl border px-4 py-3 text-sm font-semibold">Candidate positioning</div>
                <div className="theme-chip rounded-2xl border px-4 py-3 text-sm font-semibold">Booth strategy</div>
                <div className="theme-chip rounded-2xl border px-4 py-3 text-sm font-semibold">Digital election strategy</div>
                <div className="theme-chip rounded-2xl border px-4 py-3 text-sm font-semibold">Volunteer execution</div>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {whoWeArePoints.map((point) => (
              <article key={point.title} className="theme-panel-strong rounded-[1.5rem] border p-6">
                <h3 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">{point.title}</h3>
                <p className="theme-text-secondary mt-4 text-base leading-7">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow="How We Work"
          title="A disciplined five-step campaign system built for modern Indian elections."
          description="This is the operating model behind our election campaign management approach: data first, booth focus, sharper communication, field discipline, and continuous optimization."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {workProcess.map((phase) => (
            <article
              key={phase.step}
              className="theme-panel rounded-[1.5rem] border p-6 theme-transition hover:-translate-y-1 hover:border-red-500/35"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Step {phase.step}</p>
              <h3 className="theme-text-primary mt-4 font-display text-2xl font-semibold tracking-tight">{phase.title}</h3>
              <p className="theme-text-secondary mt-4 text-sm leading-7">{phase.description}</p>
            </article>
          ))}
        </div>

        <div className="theme-panel-accent mt-8 rounded-[1.75rem] border p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="theme-accent-soft text-xs font-semibold uppercase tracking-[0.35em]">Start Before You Spend</p>
              <h3 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">
                If the campaign structure is weak, more ad spend only magnifies the problem.
              </h3>
            </div>
            <ContactActions primaryLabel="Get Strategy Call" compact />
          </div>
        </div>
      </section>

      <section id="services" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow="Services"
          title="Structured election campaign services for candidates who need execution, not random deliverables."
          description="Our services are organized around the systems that move elections: creative control, digital reach, analytics, and campaign execution."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((service) => (
            <article key={service.title} className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Campaign Function</p>
              <h3 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">{service.title}</h3>
              <p className="theme-text-secondary mt-4 text-base leading-7">{service.summary}</p>
              <ul className="theme-text-secondary mt-5 grid gap-3 text-sm leading-6 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="theme-panel-soft rounded-2xl border px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <ContactActions primaryLabel="Start Your Campaign" compact />
          <Link
            href="/services"
            className="theme-button-secondary inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] theme-transition"
          >
            Explore Full Services Page
          </Link>
        </div>
      </section>
    </>
  );
}
