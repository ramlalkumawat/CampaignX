import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import AutoScrollButton from '@/components/AutoScrollButton';
import { LanguageProvider } from '@/components/LanguageProvider';
import { campaignKeywords, siteUrl } from '@/components/site-config';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

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
  metadataBase: new URL(siteUrl),
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${poppins.variable} min-h-screen font-sans antialiased theme-transition`}>
        <LanguageProvider>
          {children}
          <AutoScrollButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
