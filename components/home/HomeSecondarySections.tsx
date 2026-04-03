import ContactActions from '@/components/ContactActions';
import SectionHeading from '@/components/SectionHeading';
import { differentiators, digitalEraReasons, plans } from '@/components/home/election-home-data';

export default function HomeSecondarySections() {
  return (
    <>
      <section id="why-choose-us" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why serious candidates choose CampaignX over generic agencies and disconnected vendors."
          description="Modern elections are won by campaigns that can see clearly, move fast, and keep every channel aligned. That is the gap we close."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {differentiators.map((item) => (
            <article key={item.title} className="theme-panel rounded-[1.5rem] border p-6">
              <h3 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="theme-text-secondary mt-4 text-sm leading-7">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="plans" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow="Plans & Pricing"
          title="Three campaign packages, scoped around election intensity and execution depth."
          description="Pricing depends on election type, booth count, campaign duration, and execution scope. These packages show how we structure engagement for local election campaigns."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[1.9rem] border p-6 sm:p-8 ${
                plan.featured
                  ? 'theme-panel-accent shadow-[0_24px_90px_rgba(229,9,20,0.18)]'
                  : 'theme-panel'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">{plan.tag}</p>
                  <h3 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">{plan.name}</h3>
                </div>
                {plan.featured ? (
                  <span className="rounded-full border border-red-400/35 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-200">
                    Most Chosen
                  </span>
                ) : null}
              </div>

              <p className="theme-text-secondary mt-4 text-base leading-7">{plan.description}</p>
              <p className="theme-accent-soft mt-5 text-sm leading-6">{plan.bestFor}</p>

              <ul className="theme-text-secondary mt-6 space-y-3 text-sm leading-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="theme-panel-soft rounded-2xl border px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ContactActions primaryLabel={plan.cta} compact />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="digital-era" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow="Digital Election Era"
          title="Why CampaignX is essential when elections are shaped by attention, data, and speed."
          description="Candidates can no longer depend on traditional methods alone. Voters compare, discuss, and judge campaigns across digital and physical spaces at the same time."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
            <h3 className="theme-text-primary font-display text-3xl font-semibold tracking-tight">
              Traditional-only campaigns now leave too much to chance.
            </h3>
            <ul className="theme-text-secondary mt-6 space-y-4 text-base leading-7">
              {digitalEraReasons.map((reason) => (
                <li key={reason} className="theme-panel-soft rounded-2xl border px-4 py-4">
                  {reason}
                </li>
              ))}
            </ul>
          </article>

          <article className="theme-panel-strong rounded-[1.75rem] border p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">CampaignX System</p>
            <h3 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">
              We turn scattered campaign activity into a coordinated election machine.
            </h3>
            <div className="mt-6 grid gap-4">
              <div className="theme-panel rounded-2xl border p-5">
                <p className="theme-text-primary text-lg font-semibold">Sharper candidate visibility</p>
                <p className="theme-text-secondary mt-2 text-sm leading-6">
                  Voters repeatedly encounter a consistent narrative across field outreach, social media, video, and local digital channels.
                </p>
              </div>
              <div className="theme-panel rounded-2xl border p-5">
                <p className="theme-text-primary text-lg font-semibold">Better use of campaign money and time</p>
                <p className="theme-text-secondary mt-2 text-sm leading-6">
                  Budget, candidate travel, volunteer energy, and ad spend are aligned to the locations and audiences with the highest payoff.
                </p>
              </div>
              <div className="theme-panel rounded-2xl border p-5">
                <p className="theme-text-primary text-lg font-semibold">Continuous performance review</p>
                <p className="theme-text-secondary mt-2 text-sm leading-6">
                  Instead of reacting late, the campaign can review signals daily and tighten its strategy before polling day pressure peaks.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="theme-panel-accent mt-24 rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.15)] sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="theme-accent-soft text-xs font-semibold uppercase tracking-[0.4em]">Ready To Start</p>
            <h2 className="theme-text-primary mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Start your campaign with a strategy team that is built to move votes, not just make noise.
            </h2>
            <p className="theme-text-secondary mt-5 max-w-3xl text-lg leading-8">
              If you want a sharper campaign structure, stronger booth planning, and a digital election strategy built for India&apos;s local contests, CampaignX is ready.
            </p>
          </div>

          <div className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
            <p className="theme-text-primary text-lg font-semibold">Choose your next step</p>
            <p className="theme-text-secondary mt-3 text-sm leading-6">
              Call for direct discussion, message us on WhatsApp, or book a consultation and we will map the right campaign structure for your election.
            </p>
            <div className="mt-6">
              <ContactActions primaryLabel="Book Consultation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
