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
      <main className="mx-auto max-w-3xl px-4 py-10 text-white sm:px-6">
        <header className="text-center">
          <h1 className="text-4xl font-black">Contact CampaignX</h1>
          <p className="mt-2 text-gray-300">Fill the form to initiate your winning strategy session.</p>
        </header>

        <section className="mt-8 rounded-3xl border border-white/10 bg-black/70 p-8">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-5"
          >
            <label className="block">
              <span className="text-sm font-semibold text-gray-300">Name</span>
              <input type="text" required className="mt-1 w-full rounded-lg border border-white/15 bg-[#0f1419] px-4 py-2 text-white outline-none focus:border-red-500" />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-300">Phone</span>
              <input type="tel" required className="mt-1 w-full rounded-lg border border-white/15 bg-[#0f1419] px-4 py-2 text-white outline-none focus:border-red-500" />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-300">Constituency</span>
              <input type="text" required className="mt-1 w-full rounded-lg border border-white/15 bg-[#0f1419] px-4 py-2 text-white outline-none focus:border-red-500" />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold uppercase tracking-widest text-white hover:bg-red-700"
            >
              Get Winning Strategy
            </button>
          </form>

          {submitted && <p className="mt-4 text-center text-green-500">Thanks! Our team will reach out within 24 hours.</p>}

          <div className="mt-6 border-t border-white/10 pt-4 text-center">
            <a
              href="https://wa.me/911234567890"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-500"
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
