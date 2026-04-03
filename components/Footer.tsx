"use client";

import type { SVGProps } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import Link from 'next/link';
import { campaignContact, campaignSocials } from '@/components/site-config';

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.6 21v-7.2h2.5l.4-2.9h-2.9V9.1c0-.8.2-1.5 1.4-1.5h1.6V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v1.8H7.8v2.9h2.4V21h3.4Z" />
    </svg>
  );
}

export default function Footer() {
  const { language } = useLanguage();
  const copy =
    language === 'hi'
      ? {
          summary:
            'CampaignX उम्मीदवारों को बेहतर रणनीति, साफ़ communication और disciplined execution के साथ ज़्यादा मजबूत अभियान चलाने में मदद करता है।',
          chips: ['रणनीति', 'कम्युनिकेशन', 'एक्जीक्यूशन'],
          rights: 'सर्वाधिकार सुरक्षित।',
          explore: 'एक्सप्लोर',
          about: 'हमारे बारे में',
          team: 'टीम',
          services: 'सेवाएं',
          plans: 'प्लान',
          contact: 'संपर्क',
          whatWeDo: 'हम क्या करते हैं',
          workItems: ['कैंपेन रणनीति', 'डिजिटल कम्युनिकेशन', 'ग्राउंड कोऑर्डिनेशन', 'परफॉर्मेंस रिव्यू'],
          connect: 'जुड़ें',
          whatsappChat: 'व्हाट्सऐप चैट',
          followUs: 'सोशल मीडिया',
          instagram: 'इंस्टाग्राम',
          facebook: 'फेसबुक',
        }
      : {
          summary:
            'CampaignX helps candidates run sharper, more disciplined campaigns with strategy, communication, and execution working together.',
          chips: ['Strategy', 'Communication', 'Execution'],
          rights: 'All rights reserved.',
          explore: 'Explore',
          about: 'About',
          team: 'Team',
          services: 'Services',
          plans: 'Plans',
          contact: 'Contact',
          whatWeDo: 'What We Do',
          workItems: ['Campaign strategy', 'Digital communication', 'Ground coordination', 'Performance reviews'],
          connect: 'Connect',
          whatsappChat: 'WhatsApp Chat',
          followUs: 'Social Media',
          instagram: 'Instagram',
          facebook: 'Facebook',
        };

  return (
    <footer className="theme-footer theme-text-secondary border-t theme-transition">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between">
        <div>
          <h3 className="theme-text-primary font-display text-2xl font-semibold tracking-[0.05em]">CampaignX</h3>
          <p className="theme-text-muted mt-3 max-w-md text-sm leading-6">
            {copy.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.08em]">
            {copy.chips.map((chip) => (
              <span key={chip} className="theme-chip rounded-full border px-3 py-2">
                {chip}
              </span>
            ))}
          </div>
          <p className="theme-text-muted mt-2 text-xs">© {new Date().getFullYear()} CampaignX. {copy.rights}</p>
        </div>
        <div className="grid gap-6 text-sm sm:grid-cols-3">
          <div>
            <h4 className="theme-text-primary font-medium">{copy.explore}</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about" className="theme-transition hover:text-[var(--text-primary)]">{copy.about}</Link></li>
              <li><Link href="/team" className="theme-transition hover:text-[var(--text-primary)]">{copy.team}</Link></li>
              <li><Link href="/services" className="theme-transition hover:text-[var(--text-primary)]">{copy.services}</Link></li>
              <li><Link href="/#plans" className="theme-transition hover:text-[var(--text-primary)]">{copy.plans}</Link></li>
              <li><Link href="/contact" className="theme-transition hover:text-[var(--text-primary)]">{copy.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="theme-text-primary font-medium">{copy.whatWeDo}</h4>
            <ul className="mt-2 space-y-1">
              {copy.workItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="theme-text-primary font-medium">{copy.connect}</h4>
            <ul className="mt-2 space-y-1">
              <li><a href={`mailto:${campaignContact.email}`} className="theme-transition hover:text-[var(--text-primary)]">{campaignContact.email}</a></li>
              <li><a href={campaignContact.phoneHref} className="theme-transition hover:text-[var(--text-primary)]">{campaignContact.phoneDisplay}</a></li>
              <li><a href={campaignContact.whatsappHref} className="theme-transition hover:text-[var(--text-primary)]">{copy.whatsappChat}</a></li>
            </ul>
            <div className="mt-5">
              <p className="theme-text-primary text-xs font-semibold uppercase tracking-[0.12em]">{copy.followUs}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={campaignSocials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={copy.instagram}
                  title={copy.instagram}
                  className="theme-button-secondary inline-flex h-10 w-10 items-center justify-center rounded-full border theme-transition hover:-translate-y-0.5 hover:scale-105 hover:border-red-500/35 hover:text-red-400"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={campaignSocials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={copy.facebook}
                  title={copy.facebook}
                  className="theme-button-secondary inline-flex h-10 w-10 items-center justify-center rounded-full border theme-transition hover:-translate-y-0.5 hover:scale-105 hover:border-red-500/35 hover:text-red-400"
                >
                  <FacebookIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
