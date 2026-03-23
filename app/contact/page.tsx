"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Navbar />
      <main className="theme-text-primary mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <header className="text-center">
          <h1 className="text-4xl font-black">Contact CampaignX</h1>
          <p className="theme-text-secondary mt-2">Fill the form to initiate your winning strategy session.</p>
        </header>

        <section className="theme-panel-strong mt-8 rounded-3xl border p-8">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-5"
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

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold uppercase tracking-widest text-white hover:bg-red-700"
          >
              Get Winning Strategy
            </button>
          </form>

          {submitted && <p className="theme-success-text mt-4 text-center">Thanks! Our team will reach out within 24 hours.</p>}

          <div className="theme-border mt-6 border-t pt-4 text-center">
            <a
              href="https://wa.me/916375983593"
              className="theme-whatsapp inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold theme-transition"
              target="_blank"
              rel="noreferrer"
            >
              📲 WhatsApp Us Directly
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
