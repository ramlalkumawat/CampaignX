"use client";

import { useLanguage } from '@/components/LanguageProvider';

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

export default function LanguageSwitcher({ compact = false, className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const copy =
    language === 'hi'
      ? {
          label: 'भाषा',
          english: 'English',
          hindi: 'हिन्दी',
        }
      : {
          label: 'Language',
          english: 'English',
          hindi: 'Hindi',
        };

  return (
    <div className={className}>
      <div
        className={`theme-panel-strong flex items-center rounded-full border backdrop-blur ${
          compact
            ? 'gap-1 px-1.5 py-1 shadow-[0_12px_30px_rgba(0,0,0,0.12)]'
            : 'gap-2 px-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.18)]'
        }`}
      >
        {!compact && (
          <span className="theme-text-muted px-2 text-[11px] font-semibold uppercase tracking-[0.08em]">
            {copy.label}
          </span>
        )}
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`rounded-full font-semibold uppercase theme-transition ${
            compact ? 'px-2.5 py-1.5 text-[11px] tracking-[0.06em]' : 'px-3 py-2 text-xs tracking-[0.08em]'
          } ${
            language === 'en'
              ? 'bg-red-600 text-white shadow-[0_10px_30px_rgba(229,9,20,0.28)]'
              : 'theme-button-secondary'
          }`}
        >
          {copy.english}
        </button>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          className={`rounded-full font-semibold uppercase theme-transition ${
            compact ? 'px-2.5 py-1.5 text-[11px] tracking-[0.06em]' : 'px-3 py-2 text-xs tracking-[0.08em]'
          } ${
            language === 'hi'
              ? 'bg-red-600 text-white shadow-[0_10px_30px_rgba(229,9,20,0.28)]'
              : 'theme-button-secondary'
          }`}
        >
          {copy.hindi}
        </button>
      </div>
    </div>
  );
}
