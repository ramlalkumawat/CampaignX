import type { SVGProps } from 'react';
import type { ServiceGroup } from '@/components/home/home-copy';

type IconProps = SVGProps<SVGSVGElement>;

export type ServiceGroupIcon = (props: IconProps) => JSX.Element;

function CreativeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m14.5 4.5 5 5" />
      <path d="m6.5 18.5 2.6-.6 9.8-9.8a1.8 1.8 0 0 0 0-2.6l-.4-.4a1.8 1.8 0 0 0-2.6 0L6.1 14.9l-.6 3.6Z" />
      <path d="M13 7l4 4" />
      <path d="M4.5 19.5h15" />
    </svg>
  );
}

function MarketingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 13.5V9.8a1.8 1.8 0 0 1 1.8-1.8h2.4l5.8-3.3v14.6L8.7 16H6.3a1.8 1.8 0 0 1-1.8-1.8Z" />
      <path d="M17.3 8.2a5 5 0 0 1 0 7.6" />
      <path d="M19.6 5.8a8.4 8.4 0 0 1 0 12.4" />
    </svg>
  );
}

function AnalyticsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 19.5h15" />
      <path d="M7.5 16v-4.5" />
      <path d="M12 16V8" />
      <path d="M16.5 16v-7.5" />
      <path d="m5.8 9.5 4-3 3 2.2 5.4-4.2" />
    </svg>
  );
}

function ExecutionIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 20V4.5" />
      <path d="M6 5h10.2l-1.7 3.5 1.7 3.5H6" />
      <path d="M9 20h9.5" />
      <path d="M14.5 16.5c0-1.9 1.4-3.2 3.3-3.2s3.2 1.3 3.2 3.2" />
      <circle cx="17.8" cy="10.4" r="1.8" />
    </svg>
  );
}

function SoftwareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4.5" y="5" width="15" height="10" rx="2" />
      <path d="M8 19h8" />
      <path d="M10.5 9.3 8.8 11l1.7 1.7" />
      <path d="M13.5 9.3 15.2 11l-1.7 1.7" />
    </svg>
  );
}

function WebsiteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2.4" />
      <path d="M3.5 9h17" />
      <path d="M7 7h.1M10 7h.1" />
      <path d="M7 13.2h10" />
      <path d="M7 16.4h6.5" />
    </svg>
  );
}

function AndroidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="7" y="3.8" width="10" height="16.4" rx="2.3" />
      <path d="M10 6.5h4" />
      <path d="M12 17.2h.1" />
      <path d="M9.2 10.2h5.6" />
      <path d="M9.2 13h5.6" />
    </svg>
  );
}

function WarRoomIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2.2" />
      <path d="M8.2 9.5h3.2v6H8.2z" />
      <path d="M13.6 7.5h2.2M13.6 11h2.9M13.6 14.5h2.4" />
      <path d="M8.2 7.5h3.2" />
    </svg>
  );
}

function SocialIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 15.5V8.8a1.8 1.8 0 0 1 1.8-1.8h2.7l5.5-3.2v16.4L9 17H6.3a1.8 1.8 0 0 1-1.8-1.5Z" />
      <path d="M16.7 9.1a4.4 4.4 0 0 1 0 5.8" />
      <path d="M18.9 6.6a7.7 7.7 0 0 1 0 10.8" />
    </svg>
  );
}

function BrandingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3.8 5.5 6.4v5.8c0 4.1 2.6 7.6 6.5 8.7 3.9-1.1 6.5-4.6 6.5-8.7V6.4L12 3.8Z" />
      <path d="m9.5 12 1.7 1.7 3.7-4" />
      <path d="M12 8.1v.1" />
    </svg>
  );
}

function MediaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 5.5h8.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
      <path d="m10 9.2 4.2 2.8L10 14.8V9.2Z" />
      <path d="M18 8.2 20 7v10l-2-1.2" />
      <path d="M8 3.5v2M12.5 3.5v2" />
    </svg>
  );
}

const serviceGroupIcons: Record<ServiceGroup['slug'], ServiceGroupIcon> = {
  'design-creative': CreativeIcon,
  'digital-marketing': MarketingIcon,
  'data-science-analytics': AnalyticsIcon,
  'campaign-execution': ExecutionIcon,
  'software-it-solutions': SoftwareIcon,
  'website-design-development': WebsiteIcon,
  'android-application-development': AndroidIcon,
  'crm-war-room-software': WarRoomIcon,
  'social-media-marketing': SocialIcon,
  'online-reputation-management-branding': BrandingIcon,
  'campaign-songs-documentary-production': MediaIcon,
};

export function getServiceGroupIcon(slug: ServiceGroup['slug']) {
  return serviceGroupIcons[slug] ?? SoftwareIcon;
}
