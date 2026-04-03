"use client";

import Link from 'next/link';

import { useLanguage } from '@/components/LanguageProvider';
import ContactActions from '@/components/ContactActions';
import SectionHeading from '@/components/SectionHeading';
import ServiceGroupCard from '@/components/ServiceGroupCard';
import { getHomeData } from '@/components/home/home-copy';

export default function HomePrimarySections() {
  const { language } = useLanguage();
  const { serviceGroups, additionalServiceGroups, premiumElectionServices, whoWeArePoints, workProcess } = getHomeData(language);
  const allServices = [...serviceGroups, ...additionalServiceGroups];
  const copy =
    language === 'hi'
      ? {
          whoWeAreEyebrow: 'हम कौन हैं',
          whoWeAreTitle: 'CampaignX एक campaign strategy company है जो उम्मीदवारों को सिर्फ active नहीं, जीतने के लिए तैयार करती है।',
          whoWeAreDescription:
            'हम field execution, digital communication और campaign analytics को एक coordinated operating system में जोड़ते हैं, ताकि serious local campaigns बेहतर चल सकें।',
          introOne:
            'कई local campaigns आज भी fragmented vendors, late-stage guesswork और broad messaging पर चलते हैं। CampaignX इस बिखराव को एक clear election system में बदलता है जिसमें research, booth planning, creative production, WhatsApp communication, paid media और ground coordination सब एक decision loop में आते हैं।',
          introTwo:
            'हमारा काम आपके campaign को ज्यादा disciplined, ज्यादा visible और ज्यादा persuasive बनाना है, खासकर उन जगहों पर जहां असली नतीजा तय होता है।',
          leverage: 'जहां हम बढ़त बनाते हैं',
          leverageItems: ['Candidate positioning', 'Booth strategy', 'Digital strategy', 'Volunteer execution'],
          howWeWorkEyebrow: 'हम कैसे काम करते हैं',
          howWeWorkTitle: 'आधुनिक चुनावों के लिए बना एक disciplined five-step campaign system.',
          howWeWorkDescription:
            'यही operating model हमारे campaign management approach की रीढ़ है: data first, booth focus, sharp communication, field discipline और continuous optimization.',
          stepPrefix: 'स्टेप',
          startBeforeSpend: 'खर्च से पहले रणनीति',
          spendTitle: 'अगर campaign structure कमजोर है, तो ज्यादा ad spend सिर्फ समस्या को बड़ा करता है।',
          servicesEyebrow: 'हमारी सेवाएं',
          servicesTitle: 'Campaign, software, IT और media capabilities अब एक ही structured service portfolio में प्रस्तुत की गई हैं।',
          servicesDescription:
            'Creative strategy, digital marketing, analytics, campaign execution, websites, apps, CRM tools, branding और media production को CampaignX एक coordinated delivery model के तहत execute करता है।',
          campaignFunction: 'सेवा क्षेत्र',
          premiumElectionEyebrow: 'MP & MLA Campaigns',
          premiumElectionTitle: 'MP और MLA elections के लिए dedicated result-driven campaign management.',
          premiumElectionDescription:
            'Parliamentary aur assembly campaigns ke liye voter data analysis, booth strategy, digital aur ground campaigning, PR, volunteer coordination aur live performance tracking ko CampaignX ek structured election system ke saath manage karta hai.',
          premiumElectionBadge: 'Premium Election Service',
          viewElectionServices: 'MP & MLA Services देखें',
          platformTitle: 'Integrated delivery jahan strategy, technology aur execution ek saath kaam karte hain.',
          platformText:
            'Jab planning, creative, software, media aur execution ek hi team handle karti hai, tab communication clearer hota hai, delivery faster hoti hai aur quality zyada consistent रहती है।',
          startCampaign: 'अपना कैंपेन शुरू करें',
          exploreServices: 'पूरी सेवाएं देखें',
          getStrategy: 'ज़रूरत पर बात करें',
        }
      : {
          whoWeAreEyebrow: 'Who We Are',
          whoWeAreTitle: 'CampaignX is a campaign strategy company built to help candidates win, not just look active.',
          whoWeAreDescription:
            'We combine field execution, digital communication, and campaign analytics into one coordinated operating system for serious local campaigns.',
          introOne:
            'Most local campaigns still run on fragmented vendors, late-stage guesswork, and broad messaging. CampaignX fixes that. We build election systems that connect research, booth planning, creative production, WhatsApp communication, paid media, and ground coordination into one decision loop.',
          introTwo:
            'Our job is to make your campaign more disciplined, more visible, and more persuasive in the places that actually decide the result.',
          leverage: 'Where we create leverage',
          leverageItems: ['Candidate positioning', 'Booth strategy', 'Digital election strategy', 'Volunteer execution'],
          howWeWorkEyebrow: 'How We Work',
          howWeWorkTitle: 'A disciplined five-step campaign system built for modern Indian elections.',
          howWeWorkDescription:
            'This is the operating model behind our election campaign management approach: data first, booth focus, sharper communication, field discipline, and continuous optimization.',
          stepPrefix: 'Step',
          startBeforeSpend: 'Start Before You Spend',
          spendTitle: 'If the campaign structure is weak, more ad spend only magnifies the problem.',
          servicesEyebrow: 'Our Services',
          servicesTitle: 'A unified service portfolio covering campaign, software, IT, and media capabilities.',
          servicesDescription:
            'From creative strategy and digital marketing to analytics, software systems, branding, and media production, CampaignX delivers every service through one coordinated operating model.',
          campaignFunction: 'Service Area',
          premiumElectionEyebrow: 'MP & MLA Campaigns',
          premiumElectionTitle: 'Dedicated result-driven campaign management for MP and MLA elections.',
          premiumElectionDescription:
            'CampaignX helps parliamentary and assembly candidates with voter data analysis, booth-level strategy, digital and ground campaigning, PR handling, volunteer coordination, and live performance tracking.',
          premiumElectionBadge: 'Premium Election Service',
          viewElectionServices: 'View MP & MLA Services',
          platformTitle: 'Integrated delivery across strategy, technology, media, and execution.',
          platformText:
            'When planning, creative, software, media, and execution are managed by one team, communication is clearer, turnaround is faster, and delivery quality remains consistent.',
          startCampaign: 'Start Your Campaign',
          exploreServices: 'Explore Full Services Page',
          getStrategy: 'Discuss Your Requirements',
        };

  return (
    <>
      <section id="who-we-are" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow={copy.whoWeAreEyebrow}
          title={copy.whoWeAreTitle}
          description={copy.whoWeAreDescription}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
            <p className="theme-text-secondary text-base leading-8 sm:text-lg">
              {copy.introOne}
            </p>
            <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">
              {copy.introTwo}
            </p>

            <div className="theme-panel-soft mt-6 rounded-[1.5rem] border p-5">
              <p className="theme-text-primary text-lg font-semibold">{copy.leverage}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {copy.leverageItems.map((item) => (
                  <div key={item} className="theme-chip rounded-2xl border px-4 py-3 text-sm font-semibold">{item}</div>
                ))}
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
          eyebrow={copy.howWeWorkEyebrow}
          title={copy.howWeWorkTitle}
          description={copy.howWeWorkDescription}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {workProcess.map((phase) => (
            <article
              key={phase.step}
              className="theme-panel rounded-[1.5rem] border p-6 theme-transition hover:-translate-y-1 hover:border-red-500/35"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.stepPrefix} {phase.step}</p>
              <h3 className="theme-text-primary mt-4 font-display text-2xl font-semibold tracking-tight">{phase.title}</h3>
              <p className="theme-text-secondary mt-4 text-sm leading-7">{phase.description}</p>
            </article>
          ))}
        </div>

        <div className="theme-panel-accent mt-8 rounded-[1.75rem] border p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="theme-accent-soft text-xs font-semibold uppercase tracking-[0.12em]">{copy.startBeforeSpend}</p>
              <h3 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">
                {copy.spendTitle}
              </h3>
            </div>
            <ContactActions primaryLabel={copy.getStrategy} compact />
          </div>
        </div>
      </section>

      <section id="services" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow={copy.servicesEyebrow}
          title={copy.servicesTitle}
          description={copy.servicesDescription}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allServices.map((service) => (
            <ServiceGroupCard
              key={service.title}
              service={service}
              label={copy.campaignFunction}
            />
          ))}
        </div>

        <div className="theme-shell mt-8 rounded-[1.75rem] border p-6 shadow-[0_24px_90px_rgba(0,0,0,0.16)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.premiumElectionEyebrow}</p>
          <h3 className="theme-text-primary mt-4 font-display text-3xl font-semibold tracking-tight">
            {copy.premiumElectionTitle}
          </h3>
          <p className="theme-text-secondary mt-4 max-w-3xl text-base leading-7">
            {copy.premiumElectionDescription}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {premiumElectionServices.map((service) => (
              <article key={service.slug} className="theme-panel rounded-[1.5rem] border p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.premiumElectionBadge}</p>
                <h4 className="theme-text-primary mt-3 font-display text-2xl font-semibold tracking-tight">{service.title}</h4>
                <p className="theme-text-secondary mt-3 text-sm leading-6">{service.summary}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/services#premium-election-campaigns"
              className="theme-button-secondary inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] theme-transition"
            >
              {copy.viewElectionServices}
            </Link>
            <ContactActions primaryLabel={copy.getStrategy} compact />
          </div>
        </div>

        <div className="theme-panel-accent mt-8 rounded-[1.75rem] border p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="theme-text-primary font-display text-3xl font-semibold tracking-tight">
                {copy.platformTitle}
              </h3>
              <p className="theme-text-secondary mt-4 text-base leading-7">
                {copy.platformText}
              </p>
            </div>
            <ContactActions primaryLabel={copy.getStrategy} compact />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <ContactActions primaryLabel={copy.startCampaign} compact />
          <Link
            href="/services"
            className="theme-button-secondary inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] theme-transition"
          >
            {copy.exploreServices}
          </Link>
        </div>
      </section>
    </>
  );
}
