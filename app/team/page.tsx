import type { Metadata } from 'next';

import TeamPageContent from '@/components/pages/TeamPageContent';
import { campaignKeywords, campaignTeamKeywords } from '@/components/site-config';

export const metadata: Metadata = {
  title: 'CampaignX Team',
  description:
    'Meet the CampaignX team behind election strategy, digital campaigning, research, analytics, and booth-level execution for local elections in India.',
  keywords: [...campaignKeywords, ...campaignTeamKeywords],
};

export default function TeamPage() {
  return <TeamPageContent />;
}
