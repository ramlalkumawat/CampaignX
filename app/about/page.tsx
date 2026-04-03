import type { Metadata } from 'next';

import ContactActions from '@/components/ContactActions';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import { campaignKeywords } from '@/components/site-config';

const pillars = [
  {
    title: 'Ground execution',
    text: 'We help campaigns organize booth priorities, volunteer instructions, local outreach, and field review systems that keep the operation disciplined.',
  },
  {
    title: 'Digital marketing',
    text: 'We build the digital presence candidates need across Meta, Google, video content, WhatsApp, and voter-facing communication channels.',
  },
  {
    title: 'Data analytics',
    text: 'We use voter segmentation, campaign monitoring, and booth-level insights to make better decisions on message, budget, and daily execution.',
  },
];

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Learn how CampaignX combines political strategy, digital election marketing, and booth-level campaign execution to help candidates win local elections in India.',
  keywords: campaignKeywords,
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="theme-shell rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.16)] sm:px-8">
          <SectionHeading
            eyebrow="Who We Are"
            title="CampaignX is a political campaign strategy company built for candidates who need sharp planning and serious execution."
            description="We support Sarpanch, Nagar Palika, Nagar Parishad, and Nagar Nigam candidates with a campaign model that combines local intelligence, digital election strategy, and booth-level execution."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
              <h2 className="theme-text-primary font-display text-3xl font-semibold tracking-tight">
                We operate like a campaign command partner, not a vendor list.
              </h2>
              <p className="theme-text-secondary mt-5 text-base leading-8">
                Many candidates end up coordinating separate designers, ad managers, data people, and local workers on their own. That usually creates delays, inconsistent messaging, and wasted spend. CampaignX fixes that by bringing the campaign under one operating rhythm.
              </p>
              <p className="theme-text-secondary mt-5 text-base leading-8">
                Our role is to help you make smarter decisions faster, maintain message discipline, activate the right booths, and build a digital presence that supports the ground campaign instead of distracting from it.
              </p>
            </article>

            <div className="grid gap-5">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="theme-panel-strong rounded-[1.5rem] border p-6">
                  <h3 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                  <p className="theme-text-secondary mt-4 text-base leading-7">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <article className="theme-panel rounded-[1.5rem] border p-6">
            <h2 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">What we believe</h2>
            <p className="theme-text-secondary mt-4 text-base leading-7">
              Elections are won by disciplined systems. Strategy matters, but so do daily reviews, feedback loops, and the ability to adapt faster than the opponent.
            </p>
          </article>
          <article className="theme-panel rounded-[1.5rem] border p-6">
            <h2 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">Where we are strongest</h2>
            <p className="theme-text-secondary mt-4 text-base leading-7">
              Local body elections where booth behavior, community messaging, candidate recall, and last-mile execution decide the result more than mass noise.
            </p>
          </article>
          <article className="theme-panel rounded-[1.5rem] border p-6">
            <h2 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">How we measure value</h2>
            <p className="theme-text-secondary mt-4 text-base leading-7">
              Better message clarity, stronger local traction, more precise spending, cleaner field coordination, and a campaign structure that can actually improve vote conversion.
            </p>
          </article>
        </section>

        <section className="theme-panel-accent mt-16 rounded-[2rem] border px-6 py-10 sm:px-8">
          <h2 className="theme-text-primary font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            If you want a campaign system that connects strategy, digital, and ground execution, let&apos;s talk.
          </h2>
          <p className="theme-text-secondary mt-4 max-w-3xl text-base leading-8">
            CampaignX is built for candidates who want a smarter election campaign, not a louder one.
          </p>
          <div className="mt-6">
            <ContactActions primaryLabel="Book Consultation" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
