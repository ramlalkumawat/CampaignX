"use client";

import { useLanguage } from '@/components/LanguageProvider';
import ContactActions from '@/components/ContactActions';
import SectionHeading from '@/components/SectionHeading';
import { getHomeData } from '@/components/home/home-copy';

export default function HomeSecondarySections() {
  const { language } = useLanguage();
  const { differentiators, digitalEraReasons, plans } = getHomeData(language);
  const copy =
    language === 'hi'
      ? {
          whyChooseEyebrow: 'हमें क्यों चुनें',
          whyChooseTitle: 'गंभीर उम्मीदवार CampaignX को generic agencies और disconnected vendors की जगह क्यों चुनते हैं।',
          whyChooseDescription:
            'आज के चुनाव वही campaign जीतते हैं जो साफ़ देख सकें, तेज़ चल सकें और हर channel को aligned रखें। यही gap हम भरते हैं।',
          plansEyebrow: 'प्लान और प्राइसिंग',
          plansTitle: 'तीन campaign packages, जिन्हें चुनाव की intensity और execution depth के हिसाब से तैयार किया गया है।',
          plansDescription:
            'Pricing चुनाव के प्रकार, booth count, campaign duration और execution scope पर निर्भर करती है। ये packages engagement structure दिखाते हैं।',
          mostChosen: 'सबसे ज़्यादा चुना गया',
          digitalEraEyebrow: 'डिजिटल चुनाव का दौर',
          digitalEraTitle: 'जब चुनाव attention, data और speed से तय होते हैं, तब CampaignX क्यों ज़रूरी है।',
          digitalEraDescription:
            'उम्मीदवार अब सिर्फ traditional तरीकों पर निर्भर नहीं रह सकते। मतदाता digital और physical spaces दोनों में campaigns को साथ-साथ judge करते हैं।',
          traditionalTitle: 'सिर्फ पारंपरिक campaign अब बहुत कुछ किस्मत पर छोड़ देते हैं।',
          campaignSystem: 'CampaignX सिस्टम',
          systemTitle: 'हम बिखरी हुई campaign activity को एक coordinated election machine में बदलते हैं।',
          visibility: 'बेहतर candidate visibility',
          visibilityText:
            'मतदाता field outreach, social media, video और local digital channels में एक ही consistent narrative बार-बार देखते हैं।',
          money: 'पैसे और समय का बेहतर उपयोग',
          moneyText:
            'Budget, candidate travel, volunteer energy और ad spend उन जगहों और audiences पर align होते हैं जहां सबसे ज़्यादा return मिलता है।',
          review: 'निरंतर performance review',
          reviewText:
            'Campaign देर से react करने के बजाय daily signals देखकर polling day से पहले strategy tighten कर सकता है।',
          ready: 'अब शुरुआत करें',
          readyTitle: 'ऐसी strategy team के साथ campaign शुरू करें जो सिर्फ शोर नहीं, वोट move कर सके।',
          readyDescription:
            'अगर आपको sharper campaign structure, stronger booth planning और local contest के लिए बनी digital strategy चाहिए, तो CampaignX तैयार है।',
          nextStep: 'अगला कदम चुनें',
          nextStepText:
            'सीधी कॉल करें, WhatsApp पर message करें, या consultation book करें। हम आपके चुनाव के लिए सही campaign structure map करेंगे।',
          bookConsultation: 'कंसल्टेशन बुक करें',
        }
      : {
          whyChooseEyebrow: 'Why Choose Us',
          whyChooseTitle: 'Why serious candidates choose CampaignX over generic agencies and disconnected vendors.',
          whyChooseDescription:
            'Modern elections are won by campaigns that can see clearly, move fast, and keep every channel aligned. That is the gap we close.',
          plansEyebrow: 'Plans & Pricing',
          plansTitle: 'Three campaign packages, scoped around election intensity and execution depth.',
          plansDescription:
            'Pricing depends on election type, booth count, campaign duration, and execution scope. These packages show how we structure engagement for local election campaigns.',
          mostChosen: 'Most Chosen',
          digitalEraEyebrow: 'Digital Election Era',
          digitalEraTitle: 'Why CampaignX is essential when elections are shaped by attention, data, and speed.',
          digitalEraDescription:
            'Candidates can no longer depend on traditional methods alone. Voters compare, discuss, and judge campaigns across digital and physical spaces at the same time.',
          traditionalTitle: 'Traditional-only campaigns now leave too much to chance.',
          campaignSystem: 'CampaignX System',
          systemTitle: 'We turn scattered campaign activity into a coordinated election machine.',
          visibility: 'Sharper candidate visibility',
          visibilityText:
            'Voters repeatedly encounter a consistent narrative across field outreach, social media, video, and local digital channels.',
          money: 'Better use of campaign money and time',
          moneyText:
            'Budget, candidate travel, volunteer energy, and ad spend are aligned to the locations and audiences with the highest payoff.',
          review: 'Continuous performance review',
          reviewText:
            'Instead of reacting late, the campaign can review signals daily and tighten its strategy before polling day pressure peaks.',
          ready: 'Ready To Start',
          readyTitle: 'Start your campaign with a strategy team that is built to move votes, not just make noise.',
          readyDescription:
            'If you want a sharper campaign structure, stronger booth planning, and a digital election strategy built for India\'s local contests, CampaignX is ready.',
          nextStep: 'Choose your next step',
          nextStepText:
            'Call for direct discussion, message us on WhatsApp, or book a consultation and we will map the right campaign structure for your election.',
          bookConsultation: 'Book Consultation',
        };

  return (
    <>
      <section id="why-choose-us" className="mt-24 scroll-mt-28 sm:mt-28">
        <SectionHeading
          eyebrow={copy.whyChooseEyebrow}
          title={copy.whyChooseTitle}
          description={copy.whyChooseDescription}
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
          eyebrow={copy.plansEyebrow}
          title={copy.plansTitle}
          description={copy.plansDescription}
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
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{plan.tag}</p>
                  <h3 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">{plan.name}</h3>
                </div>
                {plan.featured ? (
                  <span className="rounded-full border border-red-400/35 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-red-200">
                    {copy.mostChosen}
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
          eyebrow={copy.digitalEraEyebrow}
          title={copy.digitalEraTitle}
          description={copy.digitalEraDescription}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
            <h3 className="theme-text-primary font-display text-3xl font-semibold tracking-tight">
              {copy.traditionalTitle}
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
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.campaignSystem}</p>
            <h3 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">
              {copy.systemTitle}
            </h3>
            <div className="mt-6 grid gap-4">
              <div className="theme-panel rounded-2xl border p-5">
                <p className="theme-text-primary text-lg font-semibold">{copy.visibility}</p>
                <p className="theme-text-secondary mt-2 text-sm leading-6">
                  {copy.visibilityText}
                </p>
              </div>
              <div className="theme-panel rounded-2xl border p-5">
                <p className="theme-text-primary text-lg font-semibold">{copy.money}</p>
                <p className="theme-text-secondary mt-2 text-sm leading-6">
                  {copy.moneyText}
                </p>
              </div>
              <div className="theme-panel rounded-2xl border p-5">
                <p className="theme-text-primary text-lg font-semibold">{copy.review}</p>
                <p className="theme-text-secondary mt-2 text-sm leading-6">
                  {copy.reviewText}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="theme-panel-accent mt-24 rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.15)] sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="theme-accent-soft text-xs font-semibold uppercase tracking-[0.12em]">{copy.ready}</p>
            <h2 className="theme-text-primary mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {copy.readyTitle}
            </h2>
            <p className="theme-text-secondary mt-5 max-w-3xl text-lg leading-8">
              {copy.readyDescription}
            </p>
          </div>

          <div className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
            <p className="theme-text-primary text-lg font-semibold">{copy.nextStep}</p>
            <p className="theme-text-secondary mt-3 text-sm leading-6">
              {copy.nextStepText}
            </p>
            <div className="mt-6">
              <ContactActions primaryLabel={copy.bookConsultation} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
