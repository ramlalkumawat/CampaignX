"use client";

import ContactActions from '@/components/ContactActions';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PremiumElectionCampaignCard from '@/components/PremiumElectionCampaignCard';
import SectionHeading from '@/components/SectionHeading';
import ServiceGroupCard from '@/components/ServiceGroupCard';
import { useLanguage } from '@/components/LanguageProvider';
import { getHomeData } from '@/components/home/home-copy';

export default function ServicesPageContent() {
  const { language } = useLanguage();
  const { serviceGroups, additionalServiceGroups, premiumElectionServices } = getHomeData(language);
  const allServices = [...serviceGroups, ...additionalServiceGroups];
  const copy =
    language === 'hi'
      ? {
          heroEyebrow: 'हमारी सेवाएं',
          heroTitle: 'CampaignX की campaign, software, IT और media services अब एक integrated professional service portfolio के रूप में उपलब्ध हैं।',
          heroDescription:
            'हम campaign strategy, digital marketing, analytics, websites, apps, CRM / war room platforms, branding और production को एक disciplined delivery model के तहत execute करते हैं।',
          highlights: ['Integrated delivery model', 'Campaign + technology support', 'Branding + media production'],
          consultation: 'कंसल्टेशन बुक करें',
          electionEyebrow: 'Premium Election Campaign Services',
          electionTitle: 'MP और MLA elections के लिए data-driven end-to-end campaign management.',
          electionDescription:
            'High-stakes parliamentary aur assembly campaigns ke liye CampaignX voter intelligence, booth strategy, digital aur ground execution, PR handling, volunteer coordination aur real-time performance tracking ko ek single operating system mein align karta hai.',
          premiumBadge: 'Premium Campaign Service',
          focusLabel: 'Campaign Focus',
          coverageLabel: 'What We Cover',
          electionCtaTitle: 'क्या आपको MP या MLA election ke liye structured campaign command support चाहिए?',
          electionCtaText:
            'Hum local insight, data-backed targeting aur execution discipline ke saath high-scale election campaigns ko plan aur manage karte hain.',
          electionCtaButton: 'Election Strategy Call Book करें',
          categoriesEyebrow: 'All Services',
          categoriesTitle: 'CampaignX की पूरी service offering को एक structured catalog में organize किया गया है।',
          categoriesDescription:
            'Design & Creative, Digital Marketing, Data Science & Analytics, Campaign Execution, Software & IT Solutions, Website Design & Development, Android Application Development, CRM / War Room Software, Social Media Marketing, Online Reputation Management & Branding, और Campaign Songs & Documentary Production सभी सेवाएं यहां एक साथ उपलब्ध हैं।',
          campaignFunction: 'सेवा क्षेत्र',
          flowEyebrow: 'Delivery Model',
          flowTitle: 'हम strategy, technology, branding और execution को एक disciplined delivery process में align करते हैं।',
          flowDescription:
            'हर engagement discovery, planning, build, launch और optimization ke phases से गुजरती है ताकि delivery fast, aligned और measurable रहे।',
          stepPrefix: 'स्टेप',
          deliverySteps: [
            {
              step: '01',
              title: 'Discovery & Requirement Mapping',
              description: 'हम आपके campaign, organization, audience, tools, goals और delivery timeline ko clearly map करते हैं।',
            },
            {
              step: '02',
              title: 'Strategy, UX & System Planning',
              description: 'इसके बाद messaging, structure, user flows, tech stack, media direction और execution plan lock किया जाता है।',
            },
            {
              step: '03',
              title: 'Design, Build & Production',
              description: 'Websites, apps, CRM tools, creatives, branding assets, videos और campaign media को parallel production workflow में build किया जाता है।',
            },
            {
              step: '04',
              title: 'Launch, Promotion & Activation',
              description: 'Assets deploy होते हैं, campaigns go live होती हैं, teams onboard होती हैं और audience-facing communication चालू होती है।',
            },
            {
              step: '05',
              title: 'Monitoring, Reporting & Optimization',
              description: 'Performance data, user response, lead flow, public sentiment और execution gaps ke basis par continuous improvements किए जाते हैं।',
            },
          ],
          mixTitle: 'क्या आपको campaign execution और digital infrastructure के लिए एक integrated partner चाहिए?',
          mixText:
            'CampaignX strategy, creative, marketing, software, branding और production को एक ही delivery team के तहत लाता है, जिससे coordination मजबूत होता है और execution अधिक efficient बनता है।',
          startCampaign: 'अपनी requirements discuss करें',
        }
      : {
          heroEyebrow: 'Our Services',
          heroTitle: 'CampaignX presents its campaign, software, IT, and media capabilities through one integrated service portfolio.',
          heroDescription:
            'We deliver campaign strategy, digital marketing, analytics, websites, apps, CRM / war room platforms, branding, and production through a disciplined operating model built for clarity and execution.',
          highlights: ['Integrated service delivery', 'Campaign + technology support', 'Branding + media production'],
          consultation: 'Book Consultation',
          electionEyebrow: 'Premium Election Campaign Services',
          electionTitle: 'Data-driven end-to-end campaign management for MP and MLA elections.',
          electionDescription:
            'For high-stakes parliamentary and assembly contests, CampaignX aligns voter intelligence, booth strategy, digital and ground campaigning, PR handling, volunteer coordination, and real-time performance tracking inside one operating model.',
          premiumBadge: 'Premium Campaign Service',
          focusLabel: 'Campaign Focus',
          coverageLabel: 'What We Cover',
          electionCtaTitle: 'Need structured campaign command support for an MP or MLA election?',
          electionCtaText:
            'We help serious candidates run large-scale, result-driven campaigns using local insight, data-backed targeting, and disciplined execution at scale.',
          electionCtaButton: 'Book Election Strategy Call',
          categoriesEyebrow: 'All Services',
          categoriesTitle: 'A structured service catalog designed to present the full offering with clarity and cohesion.',
          categoriesDescription:
            'Design & Creative, Digital Marketing, Data Science & Analytics, Campaign Execution, Software & IT Solutions, Website Design & Development, Android Application Development, CRM / War Room Software, Social Media Marketing, Online Reputation Management & Branding, and Campaign Songs & Documentary Production are all available together here.',
          campaignFunction: 'Service Area',
          flowEyebrow: 'Delivery Model',
          flowTitle: 'How we align strategy, technology, branding, and execution through one disciplined delivery process.',
          flowDescription:
            'Every engagement moves through discovery, planning, build, launch, and optimization so delivery stays fast, accountable, and measurable.',
          stepPrefix: 'Step',
          deliverySteps: [
            {
              step: '01',
              title: 'Discovery & Requirement Mapping',
              description: 'We map your campaign, organization, audience, workflows, goals, and delivery timeline before execution starts.',
            },
            {
              step: '02',
              title: 'Strategy, UX & System Planning',
              description: 'We lock the messaging, structure, user flows, tech stack, media direction, and execution roadmap before production begins.',
            },
            {
              step: '03',
              title: 'Design, Build & Production',
              description: 'Websites, apps, CRM tools, creatives, branding assets, videos, and campaign media are built inside one coordinated production workflow.',
            },
            {
              step: '04',
              title: 'Launch, Promotion & Activation',
              description: 'Assets are deployed, campaigns go live, teams get onboarded, and audience-facing promotion starts across channels.',
            },
            {
              step: '05',
              title: 'Monitoring, Reporting & Optimization',
              description: 'We improve performance using live response, lead flow, user behavior, public sentiment, and execution feedback.',
            },
          ],
          mixTitle: 'Need an integrated partner for campaign execution and digital infrastructure?',
          mixText:
            'CampaignX brings strategy, creative, marketing, software, branding, and production together under one delivery team, helping every engagement move with stronger coordination and better accountability.',
          startCampaign: 'Discuss Your Requirements',
        };

  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <section className="theme-shell rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.16)] sm:px-8 lg:px-12">
          <SectionHeading eyebrow={copy.heroEyebrow} title={copy.heroTitle} description={copy.heroDescription} />

          <div className="mt-8 flex flex-wrap gap-3">
            {copy.highlights.map((item) => (
              <div key={item} className="theme-chip rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em]">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ContactActions primaryLabel={copy.consultation} />
          </div>
        </section>

        <section id="premium-election-campaigns" className="mt-24 scroll-mt-28 sm:mt-28">
          <SectionHeading
            eyebrow={copy.electionEyebrow}
            title={copy.electionTitle}
            description={copy.electionDescription}
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {premiumElectionServices.map((service) => (
              <PremiumElectionCampaignCard
                key={service.slug}
                service={service}
                badgeLabel={copy.premiumBadge}
                focusLabel={copy.focusLabel}
                coverageLabel={copy.coverageLabel}
              />
            ))}
          </div>

          <div className="theme-panel-accent mt-8 rounded-[1.75rem] border p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h3 className="theme-text-primary font-display text-3xl font-semibold tracking-tight">
                  {copy.electionCtaTitle}
                </h3>
                <p className="theme-text-secondary mt-4 text-base leading-7">
                  {copy.electionCtaText}
                </p>
              </div>
              <ContactActions primaryLabel={copy.electionCtaButton} compact />
            </div>
          </div>
        </section>

        <section className="mt-24 sm:mt-28">
          <SectionHeading
            eyebrow={copy.categoriesEyebrow}
            title={copy.categoriesTitle}
            description={copy.categoriesDescription}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {allServices.map((service) => (
              <ServiceGroupCard
                key={service.title}
                service={service}
                label={copy.campaignFunction}
                titleTag="h2"
              />
            ))}
          </div>
        </section>

        <section className="mt-24 sm:mt-28">
          <SectionHeading eyebrow={copy.flowEyebrow} title={copy.flowTitle} description={copy.flowDescription} />

          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {copy.deliverySteps.map((phase) => (
              <article key={phase.step} className="theme-panel rounded-[1.5rem] border p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.stepPrefix} {phase.step}</p>
                <h3 className="theme-text-primary mt-4 font-display text-2xl font-semibold tracking-tight">{phase.title}</h3>
                <p className="theme-text-secondary mt-4 text-sm leading-7">{phase.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="theme-panel-accent mt-24 rounded-[2rem] border px-6 py-12 sm:px-8">
          <h2 className="theme-text-primary font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.mixTitle}
          </h2>
          <p className="theme-text-secondary mt-5 max-w-3xl text-lg leading-8">
            {copy.mixText}
          </p>
          <div className="mt-8">
            <ContactActions primaryLabel={copy.startCampaign} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
