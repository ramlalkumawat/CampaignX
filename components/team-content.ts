import type { SiteLanguage } from '@/components/LanguageProvider';
import type { TeamMember } from '@/components/team-data';

const members: Record<SiteLanguage, TeamMember[]> = {
  en: [
    {
      name: 'Ramlal Kumawat',
      role: 'Founder & CEO',
      description:
        'Software Engineer and strategic leader with 6+ years of experience in large-scale operations and public engagement. Focused on building technology-driven systems for high-impact execution.',
      image: '/team/ramlal-kumawat.jpg',
    },
    {
      name: 'Avni Chaturvedi',
      role: 'Co-Founder & Strategy Lead',
      description: 'Experienced in strategic planning, communication frameworks, and structured execution.',
      image: '/team/avni-chaturvedi.jpg',
    },
    {
      name: 'Rahul Sharma',
      role: 'Campaign Strategist',
      description: 'Expert in campaign planning, voter segmentation, and execution strategy.',
      image: '/team/rahul-sharma.jpg',
    },
    {
      name: 'Dinesh Prajapat',
      role: 'Software Engineer',
      description: 'Specializes in backend systems, automation, and scalable digital solutions.',
      image: '/team/dinesh-prajapat.jpg',
    },
    {
      name: 'Abhishek Kumar',
      role: 'Research & Insights Lead',
      description: 'Handles research, analysis, and structured decision-making inputs.',
      image: '/team/abhishek-kumar.jpg',
    },
    {
      name: 'Pooja Verma',
      role: 'Data & Analytics Lead',
      description: 'Focuses on transforming data into actionable insights and dashboards.',
      image: '/team/pooja-verma.jpg',
    },
    {
      name: 'Aman Jain',
      role: 'Operations & Data Coordination Specialist',
      description: 'Manages reporting, coordination, and execution workflows.',
      image: '/team/aman-jain.jpg',
    },
    {
      name: 'Abhishek Singh',
      role: 'Digital Campaign Manager',
      description: 'Leads social media campaigns, paid ads, and digital narrative building.',
      image: '/team/abhishek-singh.jpg',
    },
    {
      name: 'Neha Gupta',
      role: 'Content & Media Lead',
      description: 'Specializes in communication, messaging, and content strategy.',
      image: '/team/neha-gupta.jpg',
    },
    {
      name: 'Ankit Agarwal',
      role: 'Technology Lead',
      description: 'Builds campaign systems, automation tools, and infrastructure.',
      image: '/team/ankit-agarwal.jpg',
    },
    {
      name: 'Rakesh Yadav',
      role: 'Operations Manager',
      description: 'Handles ground execution and coordination.',
      image: '/team/rakesh-yadav.jpg',
    },
    {
      name: 'Kavita Sharma',
      role: 'Client Relations & Growth',
      description: 'Manages partnerships, client onboarding, and growth strategies.',
      image: '/team/kavita-sharma.jpg',
    },
    {
      name: 'Anjali Sharma',
      role: 'Communication Strategist',
      description: 'Focuses on messaging, engagement, and influence-building strategies.',
      image: '/team/anjali-sharma.jpg',
    },
  ],
  hi: [
    {
      name: 'Ramlal Kumawat',
      role: 'संस्थापक और CEO',
      description:
        'Software Engineer और strategic leader, जिनके पास large-scale operations और public engagement का 6+ वर्षों का अनुभव है। High-impact execution के लिए technology-driven systems बनाने पर फोकस।',
      image: '/team/ramlal-kumawat.jpg',
    },
    {
      name: 'Avni Chaturvedi',
      role: 'सह-संस्थापक और Strategy Lead',
      description: 'Strategic planning, communication frameworks और structured execution में अनुभवी।',
      image: '/team/avni-chaturvedi.jpg',
    },
    {
      name: 'Rahul Sharma',
      role: 'Campaign Strategist',
      description: 'Campaign planning, voter segmentation और execution strategy के विशेषज्ञ।',
      image: '/team/rahul-sharma.jpg',
    },
    {
      name: 'Dinesh Prajapat',
      role: 'Software Engineer',
      description: 'Backend systems, automation और scalable digital solutions में विशेषज्ञता।',
      image: '/team/dinesh-prajapat.jpg',
    },
    {
      name: 'Abhishek Kumar',
      role: 'Research & Insights Lead',
      description: 'Research, analysis और structured decision-making inputs संभालते हैं।',
      image: '/team/abhishek-kumar.jpg',
    },
    {
      name: 'Pooja Verma',
      role: 'Data & Analytics Lead',
      description: 'Data को actionable insights और dashboards में बदलने पर फोकस।',
      image: '/team/pooja-verma.jpg',
    },
    {
      name: 'Aman Jain',
      role: 'Operations & Data Coordination Specialist',
      description: 'Reporting, coordination और execution workflows manage करते हैं।',
      image: '/team/aman-jain.jpg',
    },
    {
      name: 'Abhishek Singh',
      role: 'Digital Campaign Manager',
      description: 'Social media campaigns, paid ads और digital narrative building को lead करते हैं।',
      image: '/team/abhishek-singh.jpg',
    },
    {
      name: 'Neha Gupta',
      role: 'Content & Media Lead',
      description: 'Communication, messaging और content strategy में विशेषज्ञ।',
      image: '/team/neha-gupta.jpg',
    },
    {
      name: 'Ankit Agarwal',
      role: 'Technology Lead',
      description: 'Campaign systems, automation tools और infrastructure build करते हैं।',
      image: '/team/ankit-agarwal.jpg',
    },
    {
      name: 'Rakesh Yadav',
      role: 'Operations Manager',
      description: 'Ground execution और coordination संभालते हैं।',
      image: '/team/rakesh-yadav.jpg',
    },
    {
      name: 'Kavita Sharma',
      role: 'Client Relations & Growth',
      description: 'Partnerships, client onboarding और growth strategies manage करती हैं।',
      image: '/team/kavita-sharma.jpg',
    },
    {
      name: 'Anjali Sharma',
      role: 'Communication Strategist',
      description: 'Messaging, engagement और influence-building strategies पर फोकस।',
      image: '/team/anjali-sharma.jpg',
    },
  ],
};

export function getTeamContent(language: SiteLanguage) {
  return members[language];
}
