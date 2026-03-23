import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';
import CTAButton from '@/components/CTAButton';

export default function CaseStudiesPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 text-white sm:px-6">
        <header className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-500">Case Studies</p>
          <h1 className="text-4xl font-black">Real Campaign Impact Stories</h1>
          <p className="text-gray-300">Detailed campaign execution outcomes focusing on reach, engagement, and voter conversion.</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <CaseStudyCard
            title="Metro MP Turnaround"
            summary="Our analytics identified underperforming wards and reallocated resources to 3 undermatched booths."
            metrics="Reach 1.4M, Engagement 47%, conversion +19% (win margin 8%)"
          />
          <CaseStudyCard
            title="Rural MLA Consolidation"
            summary="We combined issue-based ground campaigns with community micro-targeting to convert swing blocs."
            metrics="Reach 650K, Engagement 33%, conversion +14% (win margin 5%)"
          />
          <CaseStudyCard
            title="Local Leader Mobilization"
            summary="In 30 days, built a volunteer-led digital fund drive for voter advocacy and turnout operations."
            metrics="Reach 12.2K, Engagement 76%, conversion +40% (vote share 62%)"
          />
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-black/70 p-6 text-center">
          <h2 className="text-2xl font-bold">Want Case Studies Aligned to Your Context?</h2>
          <p className="mt-2 text-gray-300">We produce custom battle plans and metrics roadmaps for your polity, constituency and competition landscape.</p>
          <CTAButton label="Get Winning Strategy" href="/contact" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
