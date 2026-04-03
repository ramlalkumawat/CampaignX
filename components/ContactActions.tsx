import CTAButton from '@/components/CTAButton';
import { campaignContact } from '@/components/site-config';

interface ContactActionsProps {
  primaryLabel?: string;
  primaryHref?: string;
  className?: string;
  compact?: boolean;
}

const secondaryButtonClassName =
  'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] theme-transition';

export default function ContactActions({
  primaryLabel = 'Book Consultation',
  primaryHref = '/contact',
  className = '',
  compact = false,
}: ContactActionsProps) {
  const wrapperClassName = compact ? 'flex flex-wrap gap-3' : 'flex flex-col gap-3 sm:flex-row sm:flex-wrap';

  return (
    <div className={`${wrapperClassName} ${className}`.trim()}>
      <CTAButton
        label={primaryLabel}
        href={primaryHref}
        className={compact ? 'px-5 py-3 text-xs tracking-[0.24em]' : ''}
      />
      <a href={campaignContact.phoneHref} className={`theme-button-secondary ${secondaryButtonClassName}`}>
        Call Now
      </a>
      <a
        href={campaignContact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={`theme-whatsapp ${secondaryButtonClassName}`}
      >
        WhatsApp
      </a>
    </div>
  );
}
