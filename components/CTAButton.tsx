import Link from 'next/link';

interface CTAButtonProps {
  label: string;
  href: string;
  className?: string;
}

export default function CTAButton({ label, href, className = '' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-red-500 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_16px_45px_rgba(229,9,20,0.35)] transition duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-500 hover:shadow-[0_20px_55px_rgba(229,9,20,0.5)] active:translate-y-0 ${className}`}
      aria-label={label}
    >
      <span>{label}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </Link>
  );
}
