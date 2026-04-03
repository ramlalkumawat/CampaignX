"use client";

import { useState } from 'react';

import ContactActions from '@/components/ContactActions';
import { campaignContact } from '@/components/site-config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Navbar />

      <main className="theme-text-primary mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="theme-shell rounded-[2rem] border px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.16)] sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-400">Contact CampaignX</p>
              <h1 className="theme-text-primary mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Start the conversation before the election pressure peaks.
              </h1>
              <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">
                Tell us what election you are contesting, what stage the campaign is in, and where you need help. We&apos;ll guide you toward the right strategy, scope, and execution model.
              </p>

              <div className="mt-8">
                <ContactActions primaryLabel="Book Consultation" />
              </div>

              <div className="mt-8 grid gap-4">
                <div className="theme-panel rounded-2xl border p-5">
                  <p className="theme-text-primary text-lg font-semibold">Direct call</p>
                  <a href={campaignContact.phoneHref} className="theme-text-secondary mt-2 block text-base leading-7">
                    {campaignContact.phoneDisplay}
                  </a>
                </div>
                <div className="theme-panel rounded-2xl border p-5">
                  <p className="theme-text-primary text-lg font-semibold">WhatsApp</p>
                  <a
                    href={campaignContact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-text-secondary mt-2 block text-base leading-7"
                  >
                    Message CampaignX on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <section className="theme-panel-strong rounded-[1.75rem] border p-6 sm:p-8">
              <h2 className="theme-text-primary font-display text-3xl font-semibold tracking-tight">
                Request your strategy call
              </h2>
              <p className="theme-text-secondary mt-3 text-sm leading-7">
                Share a few details and we&apos;ll understand your election type, timeline, and campaign priorities.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-6 space-y-5"
              >
                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">Name</span>
                  <input type="text" required className="theme-input mt-1 w-full rounded-lg border px-4 py-2 outline-none theme-transition focus:border-red-500" />
                </label>

                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">Phone</span>
                  <input type="tel" required className="theme-input mt-1 w-full rounded-lg border px-4 py-2 outline-none theme-transition focus:border-red-500" />
                </label>

                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">Constituency</span>
                  <input type="text" required className="theme-input mt-1 w-full rounded-lg border px-4 py-2 outline-none theme-transition focus:border-red-500" />
                </label>

                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">Election Type</span>
                  <select className="theme-input mt-1 w-full rounded-lg border px-4 py-2 outline-none theme-transition focus:border-red-500">
                    <option>Sarpanch</option>
                    <option>Nagar Palika</option>
                    <option>Nagar Parishad</option>
                    <option>Nagar Nigam</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="theme-text-secondary text-sm font-semibold">Current Challenge</span>
                  <textarea
                    rows={4}
                    className="theme-input mt-1 w-full rounded-lg border px-4 py-3 outline-none theme-transition focus:border-red-500"
                    placeholder="Low visibility, weak booth structure, digital setup, volunteer coordination, opponent pressure, etc."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold uppercase tracking-widest text-white hover:bg-red-700"
                >
                  Get Winning Strategy
                </button>
              </form>

              {submitted && <p className="theme-success-text mt-4 text-center">Thanks! Our team will reach out within 24 hours.</p>}
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
