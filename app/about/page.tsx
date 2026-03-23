import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-10 text-white sm:px-6">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-black">About CampaignX</h1>
          <p className="text-gray-300">
            We don’t run campaigns. We win elections. Our team is built from campaign veterans, data scientists, ex-political strategists and operations experts.
          </p>
        </header>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/65 p-6">
            <h2 className="text-2xl font-bold">Mission</h2>
            <p className="mt-2 text-gray-300">
              Deliver an unfair advantage to aspirants through precision voter mobilization and message discipline with accountability.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/65 p-6">
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-2 text-gray-300">
              A political landscape where talent is validated by clear vote results, not noise, and leadership is built on modern influence systems.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-black/70 p-6">
          <h2 className="text-2xl font-bold">Why CampaignX is Different</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-300">
            <li>Single operational command center with full campaign life-cycle ownership.</li>
            <li>Data model built on 220+ metrics of voter behaviour and digital resonance.</li>
            <li>High-confidence risk forecasting with legal, media, and stakeholder scenario mapping.</li>
            <li>Campaign P&L tracking with conversion-driven attribution in real time.</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-black/60 p-6">
          <h2 className="text-2xl font-bold">Founder & Team</h2>
          <p className="mt-2 text-gray-300">
            Founders:
            <br />
            - Arjun Mehta, Former Chief Strategy Officer for 2 state governments.
            <br />
            - Leena Das, Tech lead with precision targeting teams for 10 national campaigns.
          </p>
          <p className="mt-4 text-gray-300">Our team includes campaign architects, ex-advisors, data leads and digital field commanders.</p>
          <p className="mt-2 text-sm text-red-300">Authority, track record, and accountability are the core of our operating model.</p>
        </section>

        <div className="mt-10 text-center">
          <CTAButton label="Book Strategy Call" href="/contact" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
