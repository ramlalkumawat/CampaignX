"use client";

import { useEffect, useState } from 'react';

import { useLanguage } from '@/components/LanguageProvider';

export default function AutoScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const copy =
    language === 'hi'
      ? {
          label: 'ऊपर जाएं',
        }
      : {
          label: 'Scroll to top',
        };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={copy.label}
      title={copy.label}
      className={`theme-panel-strong fixed bottom-4 left-4 z-[55] inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur theme-transition sm:bottom-6 sm:left-6 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100 hover:-translate-y-0.5 hover:border-red-500/35 hover:text-red-400'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
        <path d="m6 13 6-6 6 6" />
        <path d="M12 7v10" />
      </svg>
    </button>
  );
}
