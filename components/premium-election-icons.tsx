import type { SVGProps } from 'react';
import type { PremiumElectionService } from '@/components/home/home-copy';

type IconProps = SVGProps<SVGSVGElement>;

export type PremiumElectionIcon = (props: IconProps) => JSX.Element;

function ParliamentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 20h16" />
      <path d="M6 20v-5.5M10 20v-5.5M14 20v-5.5M18 20v-5.5" />
      <path d="M3.5 12h17" />
      <path d="M12 4.2 4.5 10.5h15L12 4.2Z" />
      <path d="M12 3v1.2" />
    </svg>
  );
}

function AssemblyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 20h16" />
      <path d="M6.5 20v-4.8M17.5 20v-4.8" />
      <path d="M6.5 10.5h11v4.7h-11z" />
      <path d="M9.2 10.5V7.4h5.6v3.1" />
      <path d="M12 7.4V4" />
      <path d="m12 4 1.8 1.4" />
    </svg>
  );
}

const premiumElectionIcons: Record<PremiumElectionService['slug'], PremiumElectionIcon> = {
  'mp-campaign-management': ParliamentIcon,
  'mla-campaign-management': AssemblyIcon,
};

export function getPremiumElectionIcon(slug: PremiumElectionService['slug']) {
  return premiumElectionIcons[slug] ?? ParliamentIcon;
}
