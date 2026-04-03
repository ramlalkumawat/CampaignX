"use client";

import { useState } from 'react';

import ContactActions from '@/components/ContactActions';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageProvider';
import { campaignContact } from '@/components/site-config';

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();
  const copy =
    language === 'hi'
      ? {
          eyebrow: 'संपर्क करें',
          title: 'Election pressure बढ़ने से पहले बातचीत शुरू करें।',
          description:
            'हमें बताइए आप कौन सा election लड़ रहे हैं, campaign किस stage पर है और कहां support चाहिए। हम आपको सही strategy, scope और execution model की ओर guide करेंगे।',
          consultation: 'कंसल्टेशन बुक करें',
          directCall: 'सीधी कॉल',
          whatsapp: 'व्हाट्सऐप',
          whatsappMessage: 'CampaignX को WhatsApp पर मैसेज करें',
          formTitle: 'अपनी strategy call request करें',
          formDescription: 'कुछ details साझा करें और हम आपके election type, timeline और campaign priorities को समझेंगे।',
          name: 'नाम',
          phone: 'फोन',
          constituency: 'क्षेत्र',
          electionType: 'चुनाव का प्रकार',
          currentChallenge: 'मौजूदा चुनौती',
          electionOptions: ['सरपंच', 'नगर पालिका', 'नगर परिषद', 'नगर निगम', 'अन्य'],
          challengePlaceholder:
            'कम visibility, weak booth structure, digital setup, volunteer coordination, opponent pressure, आदि।',
          submit: 'विनिंग स्ट्रैटेजी लें',
          success: 'धन्यवाद! हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।',
        }
      : {
          eyebrow: 'Contact CampaignX',
          title: 'Start the conversation before the election pressure peaks.',
          description:
            "Tell us what election you are contesting, what stage the campaign is in, and where you need help. We'll guide you toward the right strategy, scope, and execution model.",
          consultation: 'Book Consultation',
          directCall: 'Direct call',
          whatsapp: 'WhatsApp',
          whatsappMessage: 'Message CampaignX on WhatsApp',
          formTitle: 'Request your strategy call',
          formDescription: "Share a few details and we'll understand your election type, timeline, and campaign priorities.",
          name: 'Name',
          phone: 'Phone',
          constituency: 'Constituency',
          electionType: 'Election Type',
          currentChallenge: 'Current Challenge',
          electionOptions: ['Sarpanch', 'Nagar Palika', 'Nagar Parishad', 'Nagar Nigam', 'Other'],
          challengePlaceholder:
            'Low visibility, weak booth structure, digital setup, volunteer coordination, opponent pressure, etc.',
          submit: 'Get Winning Strategy',
          success: 'Thanks! Our team will reach out within 24 hours.',
        };

  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="theme-shell rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.16)] sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-400">{copy.eyebrow}</p>
              <h1 className="theme-text-primary mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {copy.title}
              </h1>
              <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">{copy.description}</p>

              <div className="mt-8">
                <ContactActions primaryLabel={copy.consultation} />
              </div>

              <div className="mt-8 grid gap-4">
                <div className="theme-panel rounded-2xl border p-5">
                  <p className="theme-text-primary text-lg font-semibold">{copy.directCall}</p>
                  <a href={campaignContact.phoneHref} className="theme-text-secondary mt-2 block text-base leading-7">
                    {campaignContact.phoneDisplay}
                  </a>
                </div>
                <div className="theme-panel rounded-2xl border p-5">
                  <p className="theme-text-primary text-lg font-semibold">{copy.whatsapp}</p>
                  <a
                    href={campaignContact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-text-secondary mt-2 block text-base leading-7"
                  >
                    {copy.whatsappMessage}
                  </a>
                </div>
              </div>
            </div>

            <section className="theme-panel-strong rounded-[1.75rem] border p-6 sm:p-8">
              <h2 className="theme-text-primary font-display text-3xl font-semibold tracking-tight">
                {copy.formTitle}
              </h2>
              <p className="theme-text-secondary mt-3 text-sm leading-7">{copy.formDescription}</p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-6 space-y-5"
              >
                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">{copy.name}</span>
                  <input type="text" required className="theme-input mt-1 w-full rounded-lg border px-4 py-2 outline-none theme-transition focus:border-red-500" />
                </label>

                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">{copy.phone}</span>
                  <input type="tel" required className="theme-input mt-1 w-full rounded-lg border px-4 py-2 outline-none theme-transition focus:border-red-500" />
                </label>

                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">{copy.constituency}</span>
                  <input type="text" required className="theme-input mt-1 w-full rounded-lg border px-4 py-2 outline-none theme-transition focus:border-red-500" />
                </label>

                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">{copy.electionType}</span>
                  <select className="theme-input mt-1 w-full rounded-lg border px-4 py-2 outline-none theme-transition focus:border-red-500">
                    {copy.electionOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">{copy.currentChallenge}</span>
                  <textarea
                    rows={4}
                    className="theme-input mt-1 w-full rounded-lg border px-4 py-3 outline-none theme-transition focus:border-red-500"
                    placeholder={copy.challengePlaceholder}
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold uppercase tracking-[0.14em] text-white hover:bg-red-700"
                >
                  {copy.submit}
                </button>
              </form>

              {submitted && <p className="theme-success-text mt-4 text-center">{copy.success}</p>}
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
