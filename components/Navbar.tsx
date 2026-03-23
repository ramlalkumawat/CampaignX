"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="min-w-0 text-white">
          <p className="font-display text-2xl font-semibold tracking-[0.14em] text-red-500">CampaignX</p>
          <p className="truncate text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400 sm:text-xs">
            Strategy. Influence. Impact.
          </p>
        </Link>

        <button
          onClick={() => setIsExpanded((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 text-sm text-white transition hover:border-red-400/40 hover:bg-white/5 sm:hidden"
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className="hidden items-center gap-2 text-sm font-semibold text-gray-200 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 uppercase tracking-[0.2em] transition ${
                pathname === item.href
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 uppercase tracking-[0.22em] text-red-200 transition hover:border-red-300 hover:bg-red-500/20 hover:text-white"
          >
            Book Call
          </Link>
        </nav>
      </div>

      {isExpanded && (
        <div className="space-y-2 border-t border-white/10 bg-black/95 px-4 py-4 sm:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsExpanded(false)}
              className={`block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                pathname === item.href
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsExpanded(false)}
            className="block rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-200 transition hover:border-red-300 hover:bg-red-500/20 hover:text-white"
          >
            Book Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}
