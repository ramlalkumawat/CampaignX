"use client";

import ContactActions from '@/components/ContactActions';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import TeamSection from '@/components/TeamSection';
import { useLanguage } from '@/components/LanguageProvider';

export default function TeamPageContent() {
  const { language } = useLanguage();
  const copy =
    language === 'hi'
      ? {
          eyebrow: 'हमारी टीम',
          title: 'CampaignX की strategy, technology, data और execution को आगे बढ़ाने वाले लोग।',
          description:
            'यही leadership और campaign delivery team candidates की planning ko digital communication, booth systems और field operations में बदलती है।',
          highlights: ['रणनीति नेतृत्व', 'ग्राउंड एक्जीक्यूशन', 'डेटा एनालिटिक्स', 'डिजिटल कैंपेनिंग'],
          ctaTitle: 'क्या आप अपने election campaign के पीछे ऐसी टीम चाहते हैं?',
          ctaText:
            'हम candidates के लिए ऐसा campaign structure बनाते हैं जो message, field execution और digital visibility को पहले दिन से जोड़ता है।',
          ctaButton: 'कंसल्टेशन बुक करें',
        }
      : {
          eyebrow: 'Our Team',
          title: 'The people behind CampaignX strategy, technology, data, and execution.',
          description:
            'This is the leadership and campaign delivery team that helps candidates translate planning into action across digital communication, booth systems, and field operations.',
          highlights: ['Strategy leadership', 'Ground execution', 'Data analytics', 'Digital campaigning'],
          ctaTitle: 'Need this kind of team behind your election campaign?',
          ctaText:
            'We help candidates build a campaign structure that connects message, field execution, and digital visibility from day one.',
          ctaButton: 'Book Consultation',
        };

  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <section className="theme-shell rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.16)] sm:px-8 lg:px-12">
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

          <div className="mt-8 flex flex-wrap gap-3">
            {copy.highlights.map((item) => (
              <div key={item} className="theme-chip rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em]">
                {item}
              </div>
            ))}
          </div>
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
