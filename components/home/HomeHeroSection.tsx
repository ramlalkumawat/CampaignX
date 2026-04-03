"use client";

import Link from 'next/link';

import { useLanguage } from '@/components/LanguageProvider';
import ContactActions from '@/components/ContactActions';
import { getHomeData } from '@/components/home/home-copy';

export default function HomeHeroSection() {
  const { language } = useLanguage();
  const { electionFocus, trustSignals } = getHomeData(language);
  const copy =
    language === 'hi'
      ? {
          eyebrow: 'CampaignX | रणनीति. प्रभाव. असर.',
          title: 'डेटा-आधारित रणनीति, बूथ-स्तर नियंत्रण और डिजिटल एक्जीक्यूशन के साथ अपना चुनाव जीतें।',
          description:
            'CampaignX गंभीर उम्मीदवारों के लिए campaign strategy partner है जिन्हें सिर्फ generic promotion नहीं, बल्कि structured systems चाहिए जो visibility को momentum और momentum को votes में बदलें।',
          focusLabel: 'चुनावी फोकस',
          focusTitle: 'स्थानीय निकाय चुनावों के लिए बना सिस्टम, जहां छोटे margin भी नतीजा तय करते हैं।',
          focusBody:
            'वार्ड intelligence, candidate visibility और voter conversion के लिए तैयार, जहां local contests असली स्तर पर जीते जाते हैं।',
          mobileFirst: 'मोबाइल-फर्स्ट',
          stackLabel: 'कैंपेन स्टैक',
          stackValue: 'रिसर्च - प्लानिंग - रीच - टर्नआउट',
          viewServices: 'सेवाएं देखें',
          bookConsultation: 'कंसल्टेशन बुक करें',
        }
      : {
          eyebrow: 'CampaignX | Strategy. Influence. Impact.',
          title: 'Win Your Election with Data-Driven Strategy, Booth-Level Control, and Digital Execution.',
          description:
            'CampaignX is a campaign strategy partner for serious candidates who need more than generic promotion. We build structured systems that turn visibility into momentum and momentum into votes.',
          focusLabel: 'Election Focus',
          focusTitle: 'Built for local body elections where small margins decide the result.',
          focusBody:
            'Structured for ward intelligence, candidate visibility, and voter conversion where local contests are won.',
          mobileFirst: 'Mobile-First',
          stackLabel: 'Campaign stack',
          stackValue: 'Research - Planning - Reach - Turnout',
          viewServices: 'View Services',
          bookConsultation: 'Book Consultation',
        };

  return (
    <section className="theme-shell relative isolate overflow-hidden rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.18)] sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,9,20,0.24),_transparent_28%),radial-gradient(circle_at_right,_rgba(255,255,255,0.08),_transparent_20%)]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.eyebrow}</p>
          <h1 className="theme-text-primary mt-5 max-w-5xl font-display text-4xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl">
            {copy.title}
          </h1>
          <p className="theme-text-secondary mt-6 max-w-3xl text-lg leading-8 sm:text-xl">
            {copy.description}
          </p>

          <div className="mt-8">
            <ContactActions primaryLabel={copy.bookConsultation} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="theme-chip rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em]"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="theme-panel rounded-[1.75rem] border p-6 backdrop-blur sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.focusLabel}</p>
              <h2 className="theme-text-primary mt-3 font-display text-3xl font-semibold tracking-tight">
                {copy.focusTitle}
              </h2>
            </div>
            <div className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-red-200">
              {copy.mobileFirst}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {electionFocus.map((item) => (
              <div key={item} className="theme-panel-strong rounded-[1.35rem] border p-5">
                <p className="theme-text-primary text-base font-semibold leading-6">{item}</p>
                <p className="theme-text-secondary mt-3 text-sm leading-6">
                  {copy.focusBody}
                </p>
              </div>
            ))}
          </div>

          <div className="theme-panel-accent mt-5 rounded-[1.5rem] border p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="theme-accent-soft text-xs font-semibold uppercase tracking-[0.14em]">{copy.stackLabel}</p>
                <p className="theme-text-primary mt-3 font-display text-3xl font-semibold">{copy.stackValue}</p>
              </div>
              <Link
                href="/services"
                className="theme-button-secondary inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] theme-transition"
              >
                {copy.viewServices}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
