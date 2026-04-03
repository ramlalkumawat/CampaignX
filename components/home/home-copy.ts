import type { SiteLanguage } from '@/components/LanguageProvider';

export interface HomePoint {
  title: string;
  text: string;
}

export interface WorkPhase {
  step: string;
  title: string;
  description: string;
}

export interface ServiceGroup {
  slug: string;
  title: string;
  summary: string;
  items: string[];
}

export interface PremiumElectionService {
  slug: string;
  title: string;
  summary: string;
  description: string;
  focusPoints: string[];
  capabilities: string[];
  cta: string;
}

export interface Differentiator {
  title: string;
  text: string;
}

export interface Plan {
  name: string;
  tag: string;
  description: string;
  bestFor: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const homeContent: Record<
  SiteLanguage,
  {
    electionFocus: string[];
    trustSignals: string[];
    whoWeArePoints: HomePoint[];
    workProcess: WorkPhase[];
    serviceGroups: ServiceGroup[];
    additionalServiceGroups: ServiceGroup[];
    premiumElectionServices: PremiumElectionService[];
    differentiators: Differentiator[];
    plans: Plan[];
    digitalEraReasons: string[];
  }
> = {
  en: {
    electionFocus: [
      'Village and panchayat races',
      'Town and municipal campaigns',
      'Ward-level outreach planning',
      'Rapid-response digital support',
    ],
    trustSignals: [
      'Strategy-led campaigns',
      'Ground + digital alignment',
      'Booth-level discipline',
      'Fast campaign response',
    ],
    whoWeArePoints: [
      {
        title: 'Political strategy with local intelligence',
        text: 'We shape candidate positioning around constituency realities, community equations, issue priority, and opponent weakness.',
      },
      {
        title: 'Digital execution built for fast-moving elections',
        text: 'From reels and Meta ads to WhatsApp funnels and rapid response, we build the channels that influence voters every day.',
      },
      {
        title: 'Ground operations that turn attention into turnout',
        text: 'Booth committees, volunteer systems, ward-level scripts, and daily reviews keep field action tied to actual vote movement.',
      },
    ],
    workProcess: [
      {
        step: '01',
        title: 'Research & Voter Data Collection',
        description:
          'We map constituency sentiment, local issues, community clusters, swing pockets, and competitor presence before spending a rupee on execution.',
      },
      {
        step: '02',
        title: 'Strategy & Booth-Level Planning',
        description:
          'We convert raw inputs into a practical election roadmap with booth prioritization, ward-wise messaging, candidate schedule planning, and resource allocation.',
      },
      {
        step: '03',
        title: 'Content & Digital Campaign Execution',
        description:
          'We produce the creative system, ad flow, social content, and WhatsApp communication needed to build visibility and repeated voter recall.',
      },
      {
        step: '04',
        title: 'Ground Activation & Volunteer Management',
        description:
          'We script teams, coordinate field tasks, activate local supporters, and maintain execution discipline across every important booth and ward.',
      },
      {
        step: '05',
        title: 'Monitoring, Analytics & Optimization',
        description:
          'We review live campaign signals, correct message drift, optimize budget, and tighten operations as the election environment changes.',
      },
    ],
    serviceGroups: [
      {
        slug: 'design-creative',
        title: 'Design & Creative',
        summary: 'Build a candidate identity voters remember and repeat.',
        items: ['Brand identity', 'Posters and print creatives', 'Reels and short-form videos', 'Daily social media content'],
      },
      {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        summary: 'Control digital visibility where voters spend attention.',
        items: ['Meta Ads campaign management', 'Google Ads for local search demand', 'YouTube and short-video amplification', 'Community engagement and comment moderation'],
      },
      {
        slug: 'data-science-analytics',
        title: 'Data Science & Analytics',
        summary: 'Replace guesswork with targeted campaign decisions.',
        items: ['Voter segmentation', 'Sentiment analysis', 'Predictive targeting', 'Dashboard reporting and optimization reviews'],
      },
      {
        slug: 'campaign-execution',
        title: 'Campaign Execution',
        summary: 'Move the campaign machine from message to measurable action.',
        items: ['WhatsApp campaigns', 'Bulk SMS outreach', 'Calling campaigns', 'Lead generation and supporter capture'],
      },
    ],
    additionalServiceGroups: [
      {
        slug: 'software-it-solutions',
        title: 'Software & IT Solutions',
        summary: 'Custom software, automation, and IT systems that help campaigns and organizations operate faster with fewer gaps.',
        items: ['Workflow automation', 'Internal operations software', 'Cloud deployment support', 'Ongoing maintenance and security'],
      },
      {
        slug: 'website-design-development',
        title: 'Website Design & Development',
        summary: 'Conversion-focused websites built to present your message clearly, rank better, and turn visitors into enquiries.',
        items: ['Campaign and company websites', 'Landing pages and funnel builds', 'Responsive UI/UX design', 'SEO-ready deployment'],
      },
      {
        slug: 'android-application-development',
        title: 'Android Application Development',
        summary: 'Android apps built for outreach, field coordination, lead capture, and data collection on the move.',
        items: ['Volunteer and survey apps', 'Field data collection tools', 'Location-based workflows', 'Play Store release support'],
      },
      {
        slug: 'crm-war-room-software',
        title: 'CRM / War Room Software',
        summary: 'Centralized CRM and war-room systems that keep leads, booth data, communication, and reporting under one dashboard.',
        items: ['Supporter and lead tracking', 'Booth-level dashboards', 'Task management and reporting', 'Real-time war-room visibility'],
      },
      {
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        summary: 'Daily content, paid media, and community engagement that build visibility, recall, and campaign momentum.',
        items: ['Meta and YouTube campaigns', 'Creative calendars and ad creatives', 'Short-form video strategy', 'Performance reporting'],
      },
      {
        slug: 'online-reputation-management-branding',
        title: 'Online Reputation Management & Branding',
        summary: 'Brand protection and positioning that strengthen trust across search, public conversation, and media visibility.',
        items: ['Brand identity systems', 'Narrative and messaging control', 'Search and reputation monitoring', 'Crisis and review response'],
      },
      {
        slug: 'campaign-songs-documentary-production',
        title: 'Campaign Songs & Documentary Production',
        summary: 'Original campaign songs, documentaries, and storytelling assets that make the candidate memorable and persuasive.',
        items: ['Campaign anthem production', 'Short documentary films', 'Speech and script support', 'Launch and event videos'],
      },
    ],
    premiumElectionServices: [
      {
        slug: 'mp-campaign-management',
        title: 'MP Election Campaign Management',
        summary: 'End-to-end parliamentary campaign management built for high-stakes, large-scale contests.',
        description:
          'CampaignX supports MP candidates with voter intelligence, booth cluster planning, digital and ground operations, media handling, volunteer networks, and live performance tracking across the constituency.',
        focusPoints: ['Parliamentary constituency mapping', 'Scale-ready field and digital operations', 'Real-time war-room oversight'],
        capabilities: [
          'Voter data analysis and segmentation by region, turnout potential, issue clusters, and community priorities',
          'Booth-level strategy with cluster prioritization, resource allocation, and daily field reporting',
          'Digital campaigning, social media management, and rapid response communication across multiple channels',
          'PR and media handling for narrative control, local press alignment, and public perception management',
          'Volunteer recruitment, training, and constituency-wide coordination systems for structured ground execution',
          'Real-time dashboards for campaign performance, sentiment shifts, and execution tracking at scale',
        ],
        cta: 'Book MP Campaign Consultation',
      },
      {
        slug: 'mla-campaign-management',
        title: 'MLA Election Campaign Management',
        summary: 'Result-driven constituency campaign management focused on local insight, booth control, and disciplined execution.',
        description:
          'We help MLA candidates run tightly managed assembly campaigns by combining booth strategy, local issue messaging, digital visibility, field teams, PR support, volunteer coordination, and rapid optimization from nomination to polling day.',
        focusPoints: ['Assembly constituency targeting', 'Booth-led local execution', 'Fast review and optimization cycles'],
        capabilities: [
          'Constituency-level voter analysis to identify swing pockets, local issues, persuasion clusters, and turnout opportunities',
          'Booth-level planning with micro-targeting, ward scripts, and daily review systems for execution discipline',
          'Digital and ground campaigning aligned through creative production, WhatsApp outreach, paid media, and on-ground activation',
          'Social media management and PR support to strengthen candidate recall, issue positioning, and local media visibility',
          'Volunteer coordination systems for training, reporting, outreach assignment, and polling-day readiness',
          'Live performance monitoring through dashboards, field feedback, and campaign optimization reviews',
        ],
        cta: 'Book MLA Campaign Consultation',
      },
    ],
    differentiators: [
      {
        title: 'Data-driven election strategy',
        text: 'Every major move is shaped by voter inputs, issue trends, and performance signals instead of instinct alone.',
      },
      {
        title: 'Booth-level targeting',
        text: 'We focus on the booths, wards, and persuasion clusters that actually decide the final margin.',
      },
      {
        title: 'Ground + digital integration',
        text: 'Your field team, candidate communication, and digital media work from one coordinated campaign rhythm.',
      },
      {
        title: 'Real-time campaign optimization',
        text: 'We monitor traction, correct weak messaging, and reallocate effort before small problems become expensive mistakes.',
      },
      {
        title: 'Result-oriented approach',
        text: 'We are built to improve voter recall, supporter mobilization, and vote conversion, not vanity impressions.',
      },
    ],
    plans: [
      {
        name: 'Starter Plan',
        tag: 'Basic presence',
        description: 'For candidates who need a clean launch, sharper positioning, and a visible digital presence without a large campaign stack.',
        bestFor: 'Ideal for early-stage local campaigns and smaller contests.',
        features: ['Candidate positioning and message framework', 'Core creative kit for posters and social media', 'Basic WhatsApp and contact funnel setup', 'Weekly review and next-step guidance'],
        cta: 'Get Strategy Call',
      },
      {
        name: 'Growth Plan',
        tag: 'Active campaign',
        description: 'For candidates already in the field who need an active digital engine, stronger ward coordination, and structured campaign reviews.',
        bestFor: 'Designed for campaigns that need consistent momentum and sharper execution.',
        features: ['Creative production for active campaigning', 'Meta and Google ad management', 'Booth-cluster planning and weekly analytics', 'Calling, WhatsApp, and volunteer coordination support'],
        cta: 'Start Your Campaign',
        featured: true,
      },
      {
        name: 'Dominator Plan',
        tag: 'Full election management',
        description: 'For high-stakes races that need end-to-end management across strategy, digital, field activation, review cadence, and war-room decision-making.',
        bestFor: 'Best for highly competitive races that need full command and daily coordination.',
        features: ['Full campaign command structure', 'Survey-backed strategy and predictive targeting', 'Daily monitoring, rapid response, and optimization', 'Booth, volunteer, and outreach management at scale'],
        cta: 'Contact Now',
      },
    ],
    digitalEraReasons: [
      'Voters now judge candidates through search results, WhatsApp forwards, short videos, and local news clips long before polling day.',
      'Traditional rallies still matter, but without digital reinforcement they do not create repeated recall or measurable persuasion.',
      'Modern elections need booth-level targeting so candidate time, volunteers, and budget go where conversion is possible.',
      'A structured digital strategy lets campaigns respond quickly when misinformation, attacks, or local narratives start moving.',
    ],
  },
  hi: {
    electionFocus: ['गांव और पंचायत चुनाव', 'नगर और नगरपालिका अभियान', 'वार्ड स्तर की पहुंच योजना', 'तेज़ डिजिटल प्रतिक्रिया'],
    trustSignals: ['रणनीति आधारित अभियान', 'ग्राउंड + डिजिटल तालमेल', 'बूथ स्तर का अनुशासन', 'तेज़ कैंपेन प्रतिक्रिया'],
    whoWeArePoints: [
      {
        title: 'स्थानीय समझ के साथ राजनीतिक रणनीति',
        text: 'हम उम्मीदवार की पोजिशनिंग को क्षेत्र की वास्तविकताओं, सामाजिक समीकरणों, प्रमुख मुद्दों और विरोधी की कमजोरी के आधार पर तैयार करते हैं।',
      },
      {
        title: 'तेज़ चुनावों के लिए तैयार डिजिटल एक्जीक्यूशन',
        text: 'रील्स, Meta ads, WhatsApp flows और rapid response के जरिए हम वे चैनल बनाते हैं जो रोज़ मतदाताओं को प्रभावित करते हैं।',
      },
      {
        title: 'ग्राउंड ऑपरेशन जो ध्यान को वोट में बदलते हैं',
        text: 'बूथ कमेटियां, वॉलंटियर सिस्टम, वार्ड स्तर की स्क्रिप्ट और daily reviews ग्राउंड काम को असली वोट मूवमेंट से जोड़कर रखते हैं।',
      },
    ],
    workProcess: [
      {
        step: '01',
        title: 'रिसर्च और वोटर डेटा कलेक्शन',
        description:
          'हम execution शुरू करने से पहले क्षेत्र की भावना, स्थानीय मुद्दे, समुदाय समूह, swing pockets और विरोधी की मौजूदगी को map करते हैं।',
      },
      {
        step: '02',
        title: 'रणनीति और बूथ स्तर की योजना',
        description:
          'हम raw inputs को एक practical election roadmap में बदलते हैं जिसमें booth prioritization, ward-wise messaging, candidate schedule planning और resource allocation शामिल होता है।',
      },
      {
        step: '03',
        title: 'कंटेंट और डिजिटल कैंपेन एक्जीक्यूशन',
        description:
          'हम creative system, ad flow, social content और WhatsApp communication तैयार करते हैं ताकि visibility और repeated voter recall बन सके।',
      },
      {
        step: '04',
        title: 'ग्राउंड एक्टिवेशन और वॉलंटियर मैनेजमेंट',
        description:
          'हम teams को script करते हैं, field tasks coordinate करते हैं, local supporters activate करते हैं और हर ज़रूरी booth और ward में execution discipline बनाए रखते हैं।',
      },
      {
        step: '05',
        title: 'मॉनिटरिंग, एनालिटिक्स और ऑप्टिमाइजेशन',
        description:
          'हम live campaign signals को review करते हैं, message drift सुधारते हैं, budget optimize करते हैं और बदलते चुनावी माहौल के अनुसार operations tighten करते हैं।',
      },
    ],
    serviceGroups: [
      {
        slug: 'design-creative',
        title: 'डिज़ाइन और क्रिएटिव',
        summary: 'उम्मीदवार की ऐसी पहचान बनाइए जिसे मतदाता याद रखें और आगे दोहराएं।',
        items: ['ब्रांड पहचान', 'पोस्टर और प्रिंट क्रिएटिव', 'रील्स और शॉर्ट वीडियो', 'दैनिक सोशल मीडिया कंटेंट'],
      },
      {
        slug: 'digital-marketing',
        title: 'डिजिटल मार्केटिंग',
        summary: 'जहां मतदाता ध्यान देते हैं वहां आपकी डिजिटल visibility को मजबूत कीजिए।',
        items: ['Meta Ads कैंपेन मैनेजमेंट', 'लोकल search demand के लिए Google Ads', 'YouTube और short-video amplification', 'कम्युनिटी एंगेजमेंट और कमेंट मॉडरेशन'],
      },
      {
        slug: 'data-science-analytics',
        title: 'डेटा साइंस और एनालिटिक्स',
        summary: 'अंदाज़ों की जगह targeted campaign decisions लीजिए।',
        items: ['वोटर segmentation', 'Sentiment analysis', 'Predictive targeting', 'Dashboard reporting और optimization reviews'],
      },
      {
        slug: 'campaign-execution',
        title: 'कैंपेन एक्जीक्यूशन',
        summary: 'संदेश से measurable action तक campaign machine को आगे बढ़ाइए।',
        items: ['WhatsApp campaigns', 'Bulk SMS outreach', 'Calling campaigns', 'Lead generation और supporter capture'],
      },
    ],
    additionalServiceGroups: [
      {
        slug: 'software-it-solutions',
        title: 'सॉफ्टवेयर और IT सॉल्यूशंस',
        summary: 'Custom software, automation और IT systems जो campaigns और organizations को तेज़, structured और reliable तरीके से चलाते हैं।',
        items: ['Workflow automation', 'Internal operations software', 'Cloud deployment support', 'Maintenance और security'],
      },
      {
        slug: 'website-design-development',
        title: 'वेबसाइट डिजाइन और डेवलपमेंट',
        summary: 'ऐसी conversion-focused websites जो आपका message साफ़ दिखाएं, better rank करें और visitors को enquiries में बदलें।',
        items: ['Campaign और company websites', 'Landing pages और funnel builds', 'Responsive UI/UX design', 'SEO-ready deployment'],
      },
      {
        slug: 'android-application-development',
        title: 'Android ऐप डेवलपमेंट',
        summary: 'ऐसे Android apps जो outreach, field coordination, lead capture और mobile data collection को आसान बनाएं।',
        items: ['Volunteer और survey apps', 'Field data collection tools', 'Location-based workflows', 'Play Store release support'],
      },
      {
        slug: 'crm-war-room-software',
        title: 'CRM / War Room Software',
        summary: 'Centralized CRM और war-room systems जो leads, booth data, communication और reporting को एक dashboard में लाते हैं।',
        items: ['Supporter और lead tracking', 'Booth-level dashboards', 'Task management और reporting', 'Real-time war-room visibility'],
      },
      {
        slug: 'social-media-marketing',
        title: 'सोशल मीडिया मार्केटिंग',
        summary: 'Daily content, paid media और community engagement से visibility, recall और campaign momentum बढ़ाइए।',
        items: ['Meta और YouTube campaigns', 'Creative calendars और ad creatives', 'Short-form video strategy', 'Performance reporting'],
      },
      {
        slug: 'online-reputation-management-branding',
        title: 'Online Reputation Management और Branding',
        summary: 'Brand protection और positioning जो search, public conversation और media visibility में trust मजबूत करे।',
        items: ['Brand identity systems', 'Narrative और messaging control', 'Search और reputation monitoring', 'Crisis और review response'],
      },
      {
        slug: 'campaign-songs-documentary-production',
        title: 'Campaign Songs और Documentary Production',
        summary: 'Original campaign songs, documentaries और storytelling assets जो candidate ko memorable और persuasive बनाते हैं।',
        items: ['Campaign anthem production', 'Short documentary films', 'Speech और script support', 'Launch और event videos'],
      },
    ],
    premiumElectionServices: [
      {
        slug: 'mp-campaign-management',
        title: 'MP Election Campaign Management',
        summary: 'High-stakes parliamentary elections ke liye end-to-end campaign management.',
        description:
          'CampaignX MP candidates ko voter intelligence, booth cluster planning, digital aur ground operations, media handling, volunteer networks aur live performance tracking ke saath support karta hai.',
        focusPoints: ['Parliamentary constituency mapping', 'Scale-ready field aur digital operations', 'Real-time war-room oversight'],
        capabilities: [
          'Region, turnout potential, issue clusters aur community priorities ke hisaab se voter data analysis aur segmentation',
          'Booth-level strategy jisme cluster prioritization, resource allocation aur daily field reporting shamil ho',
          'Digital campaigning, social media management aur rapid response communication across multiple channels',
          'PR aur media handling for narrative control, local press alignment aur public perception management',
          'Volunteer recruitment, training aur constituency-wide coordination systems for disciplined ground execution',
          'Campaign performance, sentiment shifts aur execution tracking ke liye real-time dashboards',
        ],
        cta: 'MP Campaign Consultation Book करें',
      },
      {
        slug: 'mla-campaign-management',
        title: 'MLA Election Campaign Management',
        summary: 'Constituency-level election management jo local insight, booth control aur disciplined execution par focused ho.',
        description:
          'हम MLA candidates ko booth strategy, local issue messaging, digital visibility, field teams, PR support, volunteer coordination aur rapid optimization ke saath tightly managed assembly campaign chalane mein support करते हैं।',
        focusPoints: ['Assembly constituency targeting', 'Booth-led local execution', 'Fast review aur optimization cycles'],
        capabilities: [
          'Swing pockets, local issues, persuasion clusters aur turnout opportunities identify karne ke liye constituency-level voter analysis',
          'Micro-targeting, ward scripts aur daily review systems ke saath booth-level planning',
          'Creative production, WhatsApp outreach, paid media aur on-ground activation ke saath aligned digital aur ground campaigning',
          'Candidate recall, issue positioning aur local media visibility ke liye social media management aur PR support',
          'Training, reporting, outreach assignment aur polling-day readiness ke liye volunteer coordination systems',
          'Dashboards, field feedback aur campaign optimization reviews ke through live performance monitoring',
        ],
        cta: 'MLA Campaign Consultation Book करें',
      },
    ],
    differentiators: [
      {
        title: 'डेटा आधारित चुनावी रणनीति',
        text: 'हर बड़ा निर्णय instinct से नहीं बल्कि voter inputs, issue trends और performance signals से तय होता है।',
      },
      {
        title: 'बूथ स्तर की targeting',
        text: 'हम उन्हीं booths, wards और persuasion clusters पर फोकस करते हैं जो अंतिम margin तय करते हैं।',
      },
      {
        title: 'ग्राउंड + डिजिटल integration',
        text: 'आपकी field team, candidate communication और digital media एक coordinated rhythm में काम करते हैं।',
      },
      {
        title: 'रियल-टाइम campaign optimization',
        text: 'हम traction monitor करते हैं, कमजोर messaging सुधारते हैं और effort को समय रहते reallocate करते हैं।',
      },
      {
        title: 'नतीजा-केंद्रित approach',
        text: 'हम voter recall, supporter mobilization और vote conversion सुधारने के लिए बने हैं, सिर्फ vanity impressions के लिए नहीं।',
      },
    ],
    plans: [
      {
        name: 'स्टार्टर प्लान',
        tag: 'Basic presence',
        description: 'उन उम्मीदवारों के लिए जिन्हें clean launch, sharper positioning और visible digital presence चाहिए, बिना बड़े campaign stack के।',
        bestFor: 'शुरुआती local campaigns और छोटे मुकाबलों के लिए उपयुक्त।',
        features: ['Candidate positioning और message framework', 'पोस्टर और social media के लिए core creative kit', 'Basic WhatsApp और contact funnel setup', 'साप्ताहिक review और next-step guidance'],
        cta: 'रणनीति कॉल लें',
      },
      {
        name: 'ग्रोथ प्लान',
        tag: 'Active campaign',
        description: 'उन उम्मीदवारों के लिए जो पहले से मैदान में हैं और जिन्हें active digital engine, बेहतर ward coordination और structured campaign reviews चाहिए।',
        bestFor: 'उन campaigns के लिए जो consistent momentum और stronger execution चाहते हैं।',
        features: ['Active campaigning के लिए creative production', 'Meta और Google ad management', 'Booth-cluster planning और weekly analytics', 'Calling, WhatsApp और volunteer coordination support'],
        cta: 'अपना कैंपेन शुरू करें',
        featured: true,
      },
      {
        name: 'डॉमिनेटर प्लान',
        tag: 'Full election management',
        description: 'उन high-stakes races के लिए जिन्हें strategy, digital, field activation, review cadence और war-room decision-making सहित end-to-end management चाहिए।',
        bestFor: 'बहुत competitive races के लिए जहां full command और daily coordination ज़रूरी हो।',
        features: ['Full campaign command structure', 'Survey-backed strategy और predictive targeting', 'Daily monitoring, rapid response और optimization', 'Booth, volunteer और outreach management at scale'],
        cta: 'अभी संपर्क करें',
      },
    ],
    digitalEraReasons: [
      'मतदाता अब polling day से बहुत पहले search results, WhatsApp forwards, short videos और local news clips के आधार पर राय बनाते हैं।',
      'पारंपरिक रैलियां अब भी महत्वपूर्ण हैं, लेकिन digital reinforcement के बिना वे repeated recall या measurable persuasion नहीं बनातीं।',
      'आज के चुनावों में booth-level targeting ज़रूरी है ताकि candidate time, volunteers और budget वहीं जाएं जहां conversion संभव हो।',
      'एक structured digital strategy campaign को misinformation, attacks और local narratives पर तेज़ी से प्रतिक्रिया देने में मदद करती है।',
    ],
  },
};

export function getHomeData(language: SiteLanguage) {
  return homeContent[language];
}
