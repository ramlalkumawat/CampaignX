"use client";

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'campaignx-theme';

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.remove('dark', 'light');
  root.classList.add(theme);
  root.dataset.theme = theme;
}

function getTheme(): Theme {
  const root = document.documentElement;
  const dataTheme = root.dataset.theme;

  if (dataTheme === 'light' || dataTheme === 'dark') {
    return dataTheme;
  }

  return root.classList.contains('light') ? 'light' : 'dark';
}

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export default function ThemeToggle({ className = '', compact = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(getTheme());
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const handleToggle = () => {
    const updatedTheme = nextTheme;

    setTheme(updatedTheme);
    applyTheme(updatedTheme);

    try {
      localStorage.setItem(STORAGE_KEY, updatedTheme);
    } catch {
      // Ignore storage failures and keep the in-memory theme change.
    }
  };

  const label = `Switch to ${nextTheme} mode`;

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      title={label}
      className={`theme-toggle inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] theme-transition ${compact ? 'justify-center' : ''} ${className}`}
    >
      <span className="flex h-5 w-5 items-center justify-center">
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M12 3.5v2.2M12 18.3v2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M3.5 12h2.2M18.3 12h2.2M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6" />
            <circle cx="12" cy="12" r="4.1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M20 14.2A7.8 7.8 0 1 1 9.8 4 6.4 6.4 0 0 0 20 14.2Z" />
          </svg>
        )}
      </span>
      {!compact && <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>}
    </button>
  );
}
