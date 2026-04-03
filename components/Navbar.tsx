"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useLanguage } from '@/components/LanguageProvider';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { campaignContact } from '@/components/site-config';

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();
  const isActive = (href: string) => (href.startsWith('/#') ? pathname === '/' : pathname === href);
  const copy =
    language === 'hi'
      ? {
          brandLine: 'रणनीति. प्रभाव. असर.',
          navItems: [
            { label: 'होम', href: '/' },
            { label: 'हमारे बारे में', href: '/about' },
            { label: 'टीम', href: '/team' },
            { label: 'सेवाएं', href: '/services' },
            { label: 'प्लान', href: '/#plans' },
            { label: 'संपर्क', href: '/contact' },
          ],
          consultation: 'कंसल्टेशन बुक करें',
          callNow: 'अभी कॉल करें',
          whatsapp: 'व्हाट्सऐप',
          toggleNavigation: 'नेविगेशन खोलें',
        }
      : {
          brandLine: 'Strategy. Influence. Impact.',
          navItems: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Team', href: '/team' },
            { label: 'Services', href: '/services' },
            { label: 'Plans', href: '/#plans' },
            { label: 'Contact', href: '/contact' },
          ],
          consultation: 'Book Consultation',
          callNow: 'Call Now',
          whatsapp: 'WhatsApp',
          toggleNavigation: 'Toggle navigation',
        };

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  const navItemClassName = (href: string) =>
    `rounded-full px-4 py-2 uppercase tracking-[0.1em] transition ${
      isActive(href)
        ? 'theme-panel theme-text-primary'
        : 'theme-text-secondary hover:bg-[var(--surface-panel)] hover:text-[var(--text-primary)]'
    }`;

  return (
    <header className="site-header theme-navbar sticky top-0 z-50 border-b backdrop-blur-xl theme-transition">
      <div className="site-header-bar mx-auto max-w-7xl">
        <div className="site-header-brand">
          <Link href="/" className="block min-w-0 theme-text-primary">
            <p className="site-header-brand-title font-display font-semibold tracking-[0.06em] text-red-500">CampaignX</p>
            <p className="site-header-brand-tagline theme-text-muted truncate font-semibold uppercase tracking-[0.14em]">
              {copy.brandLine}
            </p>
          </Link>
        </div>

        <div className="site-header-controls">
          <nav className="site-header-desktop-nav hidden items-center text-sm font-medium xl:flex">
            {copy.navItems.map((item) => (
              <Link key={item.href} href={item.href} className={navItemClassName(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <LanguageSwitcher compact className="site-header-language" />
            <ThemeToggle compact className="site-header-icon-button h-10 w-10" />
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 uppercase tracking-[0.12em] theme-accent-soft theme-transition hover:border-red-300 hover:bg-red-500/20 hover:text-white"
            >
              {copy.consultation}
            </Link>
          </div>

          <div className="site-header-mobile-controls flex items-center gap-2 xl:hidden">
            <ThemeToggle compact className="site-header-icon-button h-10 w-10" />
            <button
              type="button"
              onClick={() => setIsExpanded((v) => !v)}
              className="site-header-icon-button theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm theme-transition"
              aria-label={copy.toggleNavigation}
              aria-expanded={isExpanded}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="site-header-menu-panel theme-navbar space-y-2 border-t xl:hidden">
          <LanguageSwitcher compact className="site-header-language mb-3" />
          {copy.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsExpanded(false)}
              className={`block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.1em] transition ${
                isActive(item.href)
                  ? 'theme-panel theme-text-primary'
                  : 'theme-text-secondary hover:bg-[var(--surface-panel)] hover:text-[var(--text-primary)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={campaignContact.phoneHref}
            className="theme-button-secondary block rounded-2xl border px-4 py-3 text-sm font-medium uppercase tracking-[0.1em] theme-transition"
          >
            {copy.callNow}
          </a>
          <a
            href={campaignContact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="theme-whatsapp block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.1em] theme-transition"
          >
            {copy.whatsapp}
          </a>
          <Link
            href="/contact"
            onClick={() => setIsExpanded(false)}
            className="block rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.1em] theme-accent-soft theme-transition hover:border-red-300 hover:bg-red-500/20 hover:text-white"
          >
            {copy.consultation}
          </Link>
        </div>
      )}
    </header>
  );
}
