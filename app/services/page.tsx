import type { Metadata } from 'next';

import ServicesPageContent from '@/components/pages/ServicesPageContent';
import { campaignKeywords } from '@/components/site-config';

const servicesCatalog = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CampaignX Our Services',
  description:
    'CampaignX provides end-to-end digital, IT, and political campaign services including MP and MLA election campaign management, software development, website design, Android app development, CRM war room software, social media marketing, online reputation management, branding, campaign songs, and documentary production.',
  areaServed: 'India',
  provider: {
    '@type': 'Organization',
    name: 'CampaignX',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CampaignX Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MP Election Campaign Management',
          description: 'End-to-end parliamentary campaign management including voter data analysis, booth strategy, digital campaigning, PR, volunteer coordination, and live tracking.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MLA Election Campaign Management',
          description: 'Assembly election campaign management covering booth operations, digital and ground campaigning, social media, PR, volunteer systems, and performance monitoring.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Design & Creative',
          description: 'Brand identity, posters, print creatives, reels, and daily social media content.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
          description: 'Meta ads, Google ads, short-video amplification, and community engagement support.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Science & Analytics',
          description: 'Voter segmentation, sentiment analysis, predictive targeting, and dashboard reporting.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Campaign Execution',
          description: 'WhatsApp campaigns, bulk SMS outreach, calling campaigns, and supporter capture workflows.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software & IT Solutions',
          description: 'Custom software, automation, and IT systems for campaigns and organizations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Design & Development',
          description: 'Responsive, SEO-ready websites and landing pages built for conversion.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Android Application Development',
          description: 'Android apps for outreach, data capture, field coordination, and growth.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CRM / War Room Software',
          description: 'CRM and war room dashboards for lead tracking, booth visibility, and reporting.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Marketing',
          description: 'Paid media, content, and community management for campaign visibility and engagement.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Online Reputation Management & Branding',
          description: 'Brand positioning, reputation monitoring, messaging control, and trust-building.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Campaign Songs & Documentary Production',
          description: 'Campaign music, documentary films, launch videos, and storytelling assets.',
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Digital, IT & Campaign Services',
  description:
    'Explore CampaignX services across MP and MLA election campaign management, design and creative, digital marketing, data science and analytics, campaign execution, software and IT solutions, website development, Android apps, CRM war room software, branding, and production.',
  keywords: campaignKeywords,
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCatalog) }} />
      <ServicesPageContent />
    </>
  );
}
