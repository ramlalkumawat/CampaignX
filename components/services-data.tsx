import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export type IconComponent = (props: IconProps) => JSX.Element;

export interface ServicePhase {
  id: string;
  phase: string;
  title: string;
  preview: string;
  description: string;
  outcomes: string[];
  execution: string[];
  ctaLabel: string;
  icon: IconComponent;
}

export interface Capability {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface CaseStudy {
  title: string;
  metricValue: string;
  metricLabel: string;
  story: string;
  outcome: string;
  stats: string[];
}

function TargetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2" />
    </svg>
  );
}

function SignalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4 18h16" />
      <path d="M6.5 15.5 10 12l3 2 4.5-6" />
      <path d="M17.5 8h0" />
    </svg>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3.5 5.5 6v5.8c0 4 2.4 7.6 6.5 8.7 4.1-1.1 6.5-4.7 6.5-8.7V6L12 3.5Z" />
      <path d="m9.5 11.8 1.7 1.7 3.5-3.7" />
    </svg>
  );
}

function GovernanceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M3.5 20.5h17" />
      <path d="M5 20.5v-6.8M9 20.5v-6.8M15 20.5v-6.8M19 20.5v-6.8" />
      <path d="M4 10.7h16L12 4 4 10.7Z" />
    </svg>
  );
}

function MindshareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 4.5a6.3 6.3 0 0 0-6.3 6.3c0 2 .9 3.9 2.4 5.1v2.6h7.8v-2.6a6.4 6.4 0 0 0 2.4-5.1A6.3 6.3 0 0 0 12 4.5Z" />
      <path d="M10 9.2c.2-1.1 1.1-1.9 2.2-1.9 1.2 0 2.2 1 2.2 2.2 0 1.6-1.7 2-2.2 3.1" />
      <path d="M12 16.4h.1" />
    </svg>
  );
}

function BoothIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M5 5.5h14v13H5z" />
      <path d="M5 10.2h14M9.7 5.5v13M14.3 5.5v13" />
      <path d="M14.3 14.8h4.7" />
    </svg>
  );
}

function AutomationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3.5v4M12 16.5v4M4.8 7.7l2.8 2.2M16.4 14.1l2.8 2.2M3.5 12h4M16.5 12h4M4.8 16.3l2.8-2.2M16.4 9.9l2.8-2.2" />
      <circle cx="12" cy="12" r="3.7" />
    </svg>
  );
}

function IntelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4.5 12s2.8-5 7.5-5 7.5 5 7.5 5-2.8 5-7.5 5-7.5-5-7.5-5Z" />
      <circle cx="12" cy="12" r="2.3" />
    </svg>
  );
}

function DashboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4.5 19.5h15V4.5h-15z" />
      <path d="M8 15v-3M12 15V9M16 15V7" />
    </svg>
  );
}

export const servicePhases: ServicePhase[] = [
  {
    id: 'pre-election-strategy',
    phase: 'Phase 01',
    title: 'Pre-Election Strategy',
    preview: 'Shape the candidate before the race hardens.',
    description:
      'We lock your positioning early, build a voter-ready story, and create the trust edge that serious candidates need before the campaign turns noisy.',
    outcomes: [
      'A sharper public image voters can repeat in one sentence',
      'Early trust among swing blocs, local influencers, and booth workers',
      'A narrative opponents struggle to distort or dilute',
    ],
    execution: [
      'Constituency mood mapping, issue ranking, and voter research by segment',
      'Perception audits, opponent benchmarking, and leadership positioning',
      'Narrative building for speeches, digital media, local press, and field talking points',
    ],
    ctaLabel: 'Build My Winning Narrative',
    icon: TargetIcon,
  },
  {
    id: 'election-campaign-execution',
    phase: 'Phase 02',
    title: 'Election Campaign Execution',
    preview: 'Turn visibility into booth-level conversion.',
    description:
      'From rallies to war-room decisions, we coordinate the machines that move undecided voters, protect momentum, and maximize every final-week hour.',
    outcomes: [
      'Higher vote conversion inside priority booths and swing pockets',
      'Faster message correction when momentum shifts',
      'A disciplined, polling-day-ready campaign machine',
    ],
    execution: [
      'Booth strategy, turnout scoring, and command-center decision loops',
      'Paid media, WhatsApp outreach, candidate content, and field synchronization',
      'Rally planning, volunteer scripting, and live war-room reporting',
    ],
    ctaLabel: 'Launch My Election War Room',
    icon: SignalIcon,
  },
  {
    id: 'post-election-management',
    phase: 'Phase 03',
    title: 'Post-Election Management',
    preview: 'Secure the mandate after results day.',
    description:
      'Winning is only half the battle. We protect the perception of the win, hold supporter energy, and stop the opposition from framing the first headlines.',
    outcomes: [
      'A victory narrative that stays under your control',
      'Higher supporter retention after the celebration fades',
      'Reputation stability during the most vulnerable transition period',
    ],
    execution: [
      'Media briefing plans, thank-you campaigns, and perception control',
      'Supporter engagement systems to maintain momentum and loyalty',
      'Rapid-response communication for attacks, rumors, and transition risks',
    ],
    ctaLabel: 'Protect My Victory',
    icon: ShieldIcon,
  },
  {
    id: 'governance-long-term-branding',
    phase: 'Phase 04',
    title: 'Governance & Long-Term Branding',
    preview: 'Convert governance into next-election advantage.',
    description:
      'We turn public work into political capital with structured citizen engagement, visible performance storytelling, and a leadership brand that compounds over time.',
    outcomes: [
      'A stronger leadership image that grows between elections',
      'More public recall for schemes, delivery, and constituency presence',
      'A measurable head start for the next campaign cycle',
    ],
    execution: [
      'Public engagement calendars, townhall plans, and constituent communication',
      'Scheme promotion systems and service-delivery storytelling',
      'Dashboards for grievance tracking, public sentiment, and governance visibility',
    ],
    ctaLabel: 'Strengthen My Leadership Brand',
    icon: GovernanceIcon,
  },
];

export const specialCapabilities: Capability[] = [
  {
    title: 'Psychological Targeting',
    description: 'We segment voters by fear, aspiration, loyalty, and trigger issue so persuasion moves faster.',
    icon: MindshareIcon,
  },
  {
    title: 'Booth-Level Data Tracking',
    description: 'Every booth is scored, flagged, and monitored so resources land where the election will actually be decided.',
    icon: BoothIcon,
  },
  {
    title: 'AI Calling & WhatsApp Automation',
    description: 'Personalized follow-ups keep candidate recall high without burning campaign bandwidth.',
    icon: AutomationIcon,
  },
  {
    title: 'Opposition Intelligence',
    description: 'We monitor attack lines, narrative shifts, and local weak spots before they become real damage.',
    icon: IntelIcon,
  },
  {
    title: 'Real-Time Dashboards',
    description: 'One command view for sentiment, turnout risk, ground execution, and media response.',
    icon: DashboardIcon,
  },
];

export const serviceCaseStudies: CaseStudy[] = [
  {
    title: 'District Challenger Breakthrough',
    metricValue: '5X',
    metricLabel: 'voter engagement in 6 weeks',
    story:
      'A first-time assembly challenger was getting drowned out by a better-known incumbent. We rebuilt the race around jobs, local access, and candidate visibility, then synchronized WhatsApp funnels, ward influencers, and booth captain scripts. Engagement multiplied 5X before the final rally push.',
    outcome: 'The campaign moved from low-visibility outsider to the strongest challenger in target wards.',
    stats: ['5X voter engagement', '3.2X volunteer sign-ups', '18-point candidate recall lift'],
  },
  {
    title: 'Booth Conversion Rescue',
    metricValue: '+27%',
    metricLabel: 'conversion across priority booths',
    story:
      'Rally crowds looked strong, but internal numbers showed weak booth conversion. We reorganized booth leadership, built turnout heatmaps, and redirected budget into persuasion-heavy clusters. Within 12 days, the campaign went from noisy visibility to controlled vote movement.',
    outcome: 'Win probability improved sharply once booth-level execution replaced broad, unfocused spend.',
    stats: ['+27% priority-booth conversion', '2.1X polling-day mobilization', '41% to 68% projected win edge'],
  },
  {
    title: 'Post-Victory Reputation Shield',
    metricValue: '72 hrs',
    metricLabel: 'to stabilize the mandate',
    story:
      'After a close municipal victory, the opposition tried to frame the result as unstable. We launched a 72-hour perception shield using local press, supporter-generated proof, and governance-first messaging. Approval stabilized before the first news cycle could turn hostile.',
    outcome: 'The new office began with message control, stronger legitimacy, and a cleaner runway into governance.',
    stats: ['72-hour rapid-response plan', '31% approval lift', 'Zero major narrative drift in month one'],
  },
];

export const serviceProofPoints = [
  'Win more persuadable booths, not just more headlines.',
  'Control the narrative before opponents control your image.',
  'Build a leadership brand that compounds into the next election.',
];
