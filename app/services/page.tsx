import type { Metadata } from 'next';

import ContactActions from '@/components/ContactActions';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import { serviceGroups, workProcess } from '@/components/home/election-home-data';
import { campaignKeywords } from '@/components/site-config';

const serviceHighlights = [
  'Campaign strategy for local elections in India',
  'Political campaign services in Rajasthan and beyond',
  'Digital election strategy with booth-level execution',
];

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore CampaignX services for election campaign management in India, including creative, digital marketing, voter analytics, and booth-level campaign execution.',
  keywords: campaignKeywords,
};

export default function ServicesPage() {
  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <section className="theme-shell rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.16)] sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Services"
            title="Election campaign services built for candidates who want structure, speed, and better vote conversion."
            description="CampaignX offers a full-stack election support model for Sarpanch, Nagar Palika, Nagar Parishad, and Nagar Nigam campaigns, combining strategy, creative, ads, data, and execution."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {serviceHighlights.map((item) => (
              <div key={item} className="theme-chip rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ContactActions primaryLabel="Book Consultation" />
          </div>
        </section>

        <section className="mt-24 sm:mt-28">
          <SectionHeading
            eyebrow="Service Categories"
            title="Organized around the campaign systems that decide the election."
            description="Instead of disconnected services, we structure our work into the four functions every strong campaign needs."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceGroups.map((service) => (
              <article key={service.title} className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Campaign Function</p>
                <h2 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">{service.title}</h2>
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
        </section>

        <section className="mt-24 sm:mt-28">
          <SectionHeading
            eyebrow="Execution Flow"
            title="How those services come together inside a live campaign."
            description="Our service delivery follows the same campaign logic we use on the homepage: research, planning, communication, field action, and optimization."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {workProcess.map((phase) => (
              <article key={phase.step} className="theme-panel rounded-[1.5rem] border p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Step {phase.step}</p>
                <h3 className="theme-text-primary mt-4 font-display text-2xl font-semibold tracking-tight">{phase.title}</h3>
                <p className="theme-text-secondary mt-4 text-sm leading-7">{phase.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="theme-panel-accent mt-24 rounded-[2rem] border px-6 py-12 sm:px-8">
          <h2 className="theme-text-primary font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Need a service mix that fits your election, booth count, and timeline?
          </h2>
          <p className="theme-text-secondary mt-5 max-w-3xl text-lg leading-8">
            We scope every campaign differently based on seat type, geography, voter complexity, and the intensity of competition.
          </p>
          <div className="mt-8">
            <ContactActions primaryLabel="Start Your Campaign" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
