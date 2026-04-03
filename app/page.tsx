import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import HomePrimarySections from '@/components/home/HomePrimarySections';
import HomeSecondarySections from '@/components/home/HomeSecondarySections';
import { campaignContact, campaignKeywords } from '@/components/site-config';

export const metadata: Metadata = {
  title: 'Election Campaign Management India',
  description:
    'CampaignX delivers election campaign management in India for Sarpanch, Nagar Palika, Nagar Parishad, and Nagar Nigam elections through booth-level strategy, digital campaigning, and field execution.',
  keywords: campaignKeywords,
};

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CampaignX',
    slogan: 'Strategy. Influence. Impact.',
    description:
      'CampaignX is an election campaign management company in India focused on digital election strategy, booth-level campaign management, and political campaign services for local body elections.',
    areaServed: 'India',
    telephone: campaignContact.phoneDisplay,
    email: campaignContact.email,
    serviceType: [
      'Election Campaign Management India',
      'Political Campaign Services Rajasthan',
      'Digital Election Strategy',
      'Booth Level Campaign Management',
    ],
  };

  return (
    <div>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <main className="theme-text-primary mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <HomeHeroSection />
        <HomePrimarySections />
        <HomeSecondarySections />
      </main>

      <Footer />
    </div>
  );
}
