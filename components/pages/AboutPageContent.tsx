"use client";

import ContactActions from '@/components/ContactActions';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import TeamSection from '@/components/TeamSection';
import { useLanguage } from '@/components/LanguageProvider';

export default function AboutPageContent() {
  const { language } = useLanguage();
  const copy =
    language === 'hi'
      ? {
          eyebrow: 'हम कौन हैं',
          title: 'CampaignX उन उम्मीदवारों के लिए बनी campaign strategy company है जिन्हें sharp planning और serious execution चाहिए।',
          description:
            'हम ambitious local campaigns को local intelligence, digital communication और disciplined booth-level execution के साथ support करते हैं।',
          partnerTitle: 'हम vendor list की तरह नहीं, campaign command partner की तरह काम करते हैं।',
          partnerTextOne:
            'बहुत से उम्मीदवार अलग-अलग designers, ad managers, data people और local workers को खुद coordinate करते हैं। इससे delay, message inconsistency और budget waste होता है। CampaignX पूरे campaign को एक working rhythm में लाता है।',
          partnerTextTwo:
            'हमारा काम है आपको तेजी से बेहतर decisions लेने में मदद करना, message discipline बनाए रखना, सही booths activate करना और digital presence को ground campaign के साथ align रखना।',
          pillars: [
            {
              title: 'ग्राउंड एक्जीक्यूशन',
              text: 'हम campaigns को booth priorities, volunteer instructions, local outreach और field review systems के साथ disciplined बनाते हैं।',
            },
            {
              title: 'डिजिटल मार्केटिंग',
              text: 'हम candidates के लिए Meta, Google, video content, WhatsApp और voter-facing communication channels पर digital presence बनाते हैं।',
            },
            {
              title: 'डेटा एनालिटिक्स',
              text: 'हम voter segmentation, campaign monitoring और booth-level insights के जरिए message, budget और daily execution पर बेहतर decisions लेते हैं।',
            },
          ],
          beliefsTitle: 'हम क्या मानते हैं',
          beliefsText:
            'चुनाव disciplined systems से जीते जाते हैं। Strategy ज़रूरी है, लेकिन daily reviews, feedback loops और तेज़ adaptation भी उतने ही ज़रूरी हैं।',
          strongestTitle: 'हमारी सबसे बड़ी ताकत',
          strongestText:
            'ऐसे local body elections जहां booth behavior, community messaging, candidate recall और last-mile execution नतीजा तय करते हैं।',
          valueTitle: 'हम value कैसे मापते हैं',
          valueText:
            'बेहतर message clarity, मजबूत local traction, ज्यादा precise spending, साफ़ field coordination और ऐसा campaign structure जो vote conversion improve करे।',
          ctaTitle: 'अगर आप ऐसा campaign system चाहते हैं जो strategy, digital और ground execution को जोड़े, तो बात करते हैं।',
          ctaText: 'CampaignX उन उम्मीदवारों के लिए बना है जिन्हें सिर्फ louder campaign नहीं, smarter campaign चाहिए।',
          ctaButton: 'कंसल्टेशन बुक करें',
        }
      : {
          eyebrow: 'Who We Are',
          title: 'CampaignX is a political campaign strategy company built for candidates who need sharp planning and serious execution.',
          description:
            'We support ambitious local campaigns with a model that combines local intelligence, digital communication, and disciplined booth-level execution.',
          partnerTitle: 'We operate like a campaign command partner, not a vendor list.',
          partnerTextOne:
            'Many candidates end up coordinating separate designers, ad managers, data people, and local workers on their own. That usually creates delays, inconsistent messaging, and wasted spend. CampaignX fixes that by bringing the campaign under one operating rhythm.',
          partnerTextTwo:
            'Our role is to help you make smarter decisions faster, maintain message discipline, activate the right booths, and build a digital presence that supports the ground campaign instead of distracting from it.',
          pillars: [
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
          ],
          beliefsTitle: 'What we believe',
          beliefsText:
            'Elections are won by disciplined systems. Strategy matters, but so do daily reviews, feedback loops, and the ability to adapt faster than the opponent.',
          strongestTitle: 'Where we are strongest',
          strongestText:
            'Local body elections where booth behavior, community messaging, candidate recall, and last-mile execution decide the result more than mass noise.',
          valueTitle: 'How we measure value',
          valueText:
            'Better message clarity, stronger local traction, more precise spending, cleaner field coordination, and a campaign structure that can actually improve vote conversion.',
          ctaTitle: "If you want a campaign system that connects strategy, digital, and ground execution, let's talk.",
          ctaText: 'CampaignX is built for candidates who want a smarter election campaign, not a louder one.',
          ctaButton: 'Book Consultation',
        };

  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="theme-shell rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.16)] sm:px-8">
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="theme-panel rounded-[1.75rem] border p-6 sm:p-8">
              <h2 className="theme-text-primary font-display text-3xl font-semibold tracking-tight">
                {copy.partnerTitle}
              </h2>
              <p className="theme-text-secondary mt-5 text-base leading-8">
                {copy.partnerTextOne}
              </p>
              <p className="theme-text-secondary mt-5 text-base leading-8">
                {copy.partnerTextTwo}
              </p>
            </article>

            <div className="grid gap-5">
              {copy.pillars.map((pillar) => (
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
            <h2 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">{copy.beliefsTitle}</h2>
            <p className="theme-text-secondary mt-4 text-base leading-7">{copy.beliefsText}</p>
          </article>
          <article className="theme-panel rounded-[1.5rem] border p-6">
            <h2 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">{copy.strongestTitle}</h2>
            <p className="theme-text-secondary mt-4 text-base leading-7">{copy.strongestText}</p>
          </article>
          <article className="theme-panel rounded-[1.5rem] border p-6">
            <h2 className="theme-text-primary font-display text-2xl font-semibold tracking-tight">{copy.valueTitle}</h2>
            <p className="theme-text-secondary mt-4 text-base leading-7">{copy.valueText}</p>
          </article>
        </section>

        <TeamSection />

        <section className="theme-panel-accent mt-16 rounded-[2rem] border px-6 py-10 sm:px-8">
          <h2 className="theme-text-primary font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.ctaTitle}
          </h2>
          <p className="theme-text-secondary mt-4 max-w-3xl text-base leading-8">
            {copy.ctaText}
          </p>
          <div className="mt-6">
            <ContactActions primaryLabel={copy.ctaButton} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
