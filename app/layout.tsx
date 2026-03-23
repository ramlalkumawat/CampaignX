import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en" className="h-full scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased theme-transition">{children}</body>
    </html>
  );
}
