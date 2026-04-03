import type { Metadata } from 'next';
import './globals.css';
import { campaignKeywords } from '@/components/site-config';

const themeScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem('campaignx-theme');
      var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
      var root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      root.dataset.theme = theme;
    } catch (error) {
      document.documentElement.classList.add('dark');
      document.documentElement.dataset.theme = 'dark';
    }
  })();
`;

export const metadata: Metadata = {
  title: {
    default: 'CampaignX | Election Campaign Management India',
    template: '%s | CampaignX',
  },
  description:
    'CampaignX helps Sarpanch, Nagar Palika, Nagar Parishad, and Nagar Nigam candidates win with booth-level strategy, digital campaigning, and political campaign execution.',
  keywords: campaignKeywords,
  applicationName: 'CampaignX',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'CampaignX | Election Campaign Management India',
    description:
      'Result-driven political campaign strategy, digital election management, and booth-level execution for local elections in India.',
    type: 'website',
    siteName: 'CampaignX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CampaignX | Election Campaign Management India',
    description:
      'CampaignX combines ground execution, digital marketing, and data analytics to help candidates win local elections.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans antialiased theme-transition">{children}</body>
    </html>
  );
}
