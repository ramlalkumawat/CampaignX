"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import ThemeToggle from '@/components/ThemeToggle';
import { campaignContact } from '@/components/site-config';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/#who-we-are' },
  { label: 'Services', href: '/services' },
  { label: 'Plans', href: '/#plans' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <header className="theme-navbar sticky top-0 z-50 border-b backdrop-blur-xl theme-transition">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="min-w-0 theme-text-primary">
          <p className="font-display text-2xl font-semibold tracking-[0.14em] text-red-500">CampaignX</p>
          <p className="theme-text-muted truncate text-[11px] font-semibold uppercase tracking-[0.28em] sm:text-xs">
            Strategy. Influence. Impact.
          </p>
        </Link>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle compact />
          <button
            onClick={() => setIsExpanded((v) => !v)}
            className="theme-toggle inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm theme-transition"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        <nav className="hidden items-center gap-2 text-sm font-medium sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 uppercase tracking-[0.2em] transition ${
                pathname === item.href
                  ? 'theme-panel theme-text-primary'
                  : 'theme-text-secondary hover:bg-[var(--surface-panel)] hover:text-[var(--text-primary)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 uppercase tracking-[0.22em] theme-accent-soft theme-transition hover:border-red-300 hover:bg-red-500/20 hover:text-white"
          >
            Book Consultation
          </Link>
        </nav>
      </div>

      {isExpanded && (
        <div className="theme-navbar space-y-2 border-t px-4 py-4 sm:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsExpanded(false)}
              className={`block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] transition ${
                pathname === item.href
                  ? 'theme-panel theme-text-primary'
                  : 'theme-text-secondary hover:bg-[var(--surface-panel)] hover:text-[var(--text-primary)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={campaignContact.phoneHref}
            className="theme-button-secondary block rounded-2xl border px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] theme-transition"
          >
            Call Now
          </a>
          <a
            href={campaignContact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="theme-whatsapp block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] theme-transition"
          >
            WhatsApp
          </a>
          <Link
            href="/contact"
            onClick={() => setIsExpanded(false)}
            className="block rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] theme-accent-soft theme-transition hover:border-red-300 hover:bg-red-500/20 hover:text-white"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
