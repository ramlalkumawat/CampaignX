import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampaignX | Strategy. Influence. Impact.',
  description: 'Premium political campaign growth agency for candidates, built to win elections.',
  metadataBase: new URL('https://campaignx.example.com'),
  openGraph: {
    title: 'CampaignX | We don\'t run campaigns. We win elections.',
    description: 'Strategy, influence, impact for MLAs, MPs and leaders.',
    type: 'website',
    siteName: 'CampaignX',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen bg-campaignx-black text-white antialiased">{children}</body>
    </html>
  );
}
