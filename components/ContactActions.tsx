"use client";

import { useLanguage } from '@/components/LanguageProvider';
import CTAButton from '@/components/CTAButton';
import { campaignContact } from '@/components/site-config';

interface ContactActionsProps {
  primaryLabel?: string;
  primaryHref?: string;
  className?: string;
  compact?: boolean;
}

const secondaryButtonClassName =
  'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium uppercase tracking-[0.1em] theme-transition';

export default function ContactActions({
  primaryLabel = 'Book Consultation',
  primaryHref = '/contact',
  className = '',
  compact = false,
}: ContactActionsProps) {
  const { language } = useLanguage();
  const wrapperClassName = compact ? 'flex flex-wrap gap-3' : 'flex flex-col gap-3 sm:flex-row sm:flex-wrap';
  const copy =
    language === 'hi'
      ? {
          primary: 'कंसल्टेशन बुक करें',
          callNow: 'अभी कॉल करें',
          whatsapp: 'व्हाट्सऐप',
        }
      : {
          primary: 'Book Consultation',
          callNow: 'Call Now',
          whatsapp: 'WhatsApp',
        };
  const resolvedPrimaryLabel = primaryLabel === 'Book Consultation' ? copy.primary : primaryLabel;

  return (
    <div className={`${wrapperClassName} ${className}`.trim()}>
      <CTAButton
        label={resolvedPrimaryLabel}
        href={primaryHref}
        className={compact ? 'px-5 py-3 text-xs tracking-[0.12em]' : ''}
      />
      <a href={campaignContact.phoneHref} className={`theme-button-secondary ${secondaryButtonClassName}`}>
        {copy.callNow}
      </a>
      <a
        href={campaignContact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={`theme-whatsapp ${secondaryButtonClassName}`}
      >
        {copy.whatsapp}
      </a>
    </div>
  );
}
