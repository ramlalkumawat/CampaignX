import type { Metadata } from 'next';

import AboutPageContent from '@/components/pages/AboutPageContent';
import { campaignKeywords, campaignTeamKeywords } from '@/components/site-config';

export const metadata: Metadata = {
  title: 'About CampaignX',
  description:
    'Learn about CampaignX, our campaign strategy team, and how we combine political planning, digital election marketing, and booth-level execution for local elections in India.',
  keywords: [...campaignKeywords, ...campaignTeamKeywords],
};

export default function AboutPage() {
  return <AboutPageContent />;
}
