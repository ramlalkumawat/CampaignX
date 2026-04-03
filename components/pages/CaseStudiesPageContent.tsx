"use client";

import CTAButton from '@/components/CTAButton';
import CaseStudyCard from '@/components/CaseStudyCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageProvider';

export default function CaseStudiesPageContent() {
  const { language } = useLanguage();
  const copy =
    language === 'hi'
      ? {
          eyebrow: 'केस स्टडीज',
          title: 'असली campaign impact की कहानियां',
          description: 'Reach, engagement और voter conversion पर focused campaign execution outcomes.',
          studies: [
            {
              title: 'मेट्रो एमपी टर्नअराउंड',
              summary: 'हमारी analytics ने underperforming wards की पहचान की और 3 weak booths पर resources को दुबारा allocate किया।',
              metrics: 'Reach 1.4M, Engagement 47%, conversion +19% (win margin 8%)',
            },
            {
              title: 'रूरल एमएलए कंसॉलिडेशन',
              summary: 'हमने issue-based ground campaigns और community micro-targeting को मिलाकर swing blocs को convert किया।',
              metrics: 'Reach 650K, Engagement 33%, conversion +14% (win margin 5%)',
            },
            {
              title: 'लोकल लीडर मोबिलाइजेशन',
              summary: '30 दिनों में volunteer-led digital fund drive और turnout operations तैयार किए गए।',
              metrics: 'Reach 12.2K, Engagement 76%, conversion +40% (vote share 62%)',
            },
          ],
          ctaTitle: 'क्या आपको अपने context के हिसाब से case studies चाहिए?',
          ctaText:
            'हम आपके polity, constituency और competition landscape के लिए custom battle plans और metrics roadmaps बनाते हैं।',
          ctaButton: 'विनिंग स्ट्रैटेजी लें',
        }
      : {
          eyebrow: 'Case Studies',
          title: 'Real Campaign Impact Stories',
          description: 'Detailed campaign execution outcomes focusing on reach, engagement, and voter conversion.',
          studies: [
            {
              title: 'Metro MP Turnaround',
              summary: 'Our analytics identified underperforming wards and reallocated resources to 3 undermatched booths.',
              metrics: 'Reach 1.4M, Engagement 47%, conversion +19% (win margin 8%)',
            },
            {
              title: 'Rural MLA Consolidation',
              summary: 'We combined issue-based ground campaigns with community micro-targeting to convert swing blocs.',
              metrics: 'Reach 650K, Engagement 33%, conversion +14% (win margin 5%)',
            },
            {
              title: 'Local Leader Mobilization',
              summary: 'In 30 days, built a volunteer-led digital fund drive for voter advocacy and turnout operations.',
              metrics: 'Reach 12.2K, Engagement 76%, conversion +40% (vote share 62%)',
            },
          ],
          ctaTitle: 'Want case studies aligned to your context?',
          ctaText:
            'We produce custom battle plans and metrics roadmaps for your polity, constituency, and competition landscape.',
          ctaButton: 'Get Winning Strategy',
        };

  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <header className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-red-500">{copy.eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold tracking-[0.004em]">{copy.title}</h1>
          <p className="theme-text-secondary">{copy.description}</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {copy.studies.map((study) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              summary={study.summary}
              metrics={study.metrics}
            />
          ))}
        </section>

        <section className="theme-panel-strong mt-10 rounded-2xl border p-6 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-[0.004em]">{copy.ctaTitle}</h2>
          <p className="theme-text-secondary mt-2">{copy.ctaText}</p>
          <CTAButton label={copy.ctaButton} href="/contact" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
