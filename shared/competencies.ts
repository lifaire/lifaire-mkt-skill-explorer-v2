export interface Competency {
  id: string;
  competency: string;
  skillType: string;
  description: string;
  roleRelevance?: string;
  levelOfMastery: number;
  tools: string[];
  category: string;
  skills: string[];
}

const parseSkills = (skillsString: string): string[] => {
  if (!skillsString) return [];
  return skillsString
    .split(",")
    .map((skill) => skill.trim())
    .filter((skill) => skill.length > 0);
};

const parseTools = (toolsString: string): string[] => {
  if (!toolsString) return [];
  return toolsString
    .split(",")
    .map((tool) => tool.trim().replace(/"/g, ""))
    .filter((tool) => tool.length > 0);
};

export const competenciesData: Competency[] = [
  {
    id: "1",
    competency: "Market & Customer Research",
    skillType: "technical skills",
    description:
      "Gathers insights on ICP & Buyer Personas, market trends, and competitors, directly informing product-market fit and strategic direction for B2B SaaS development. Utilizes tools like CRM and survey platforms.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: [],
    category: "Strategy & Planning",
    skills: parseSkills(
      "Ideal Customer Profile (ICP) & Buyer Persona, DevelopmentMarket Sizing & Trends AnalysisCompetitive, Intelligence GatheringCustomer Interviewing & Survey, DesignQualitative & Quantitative Research Methods",
    ),
  },
  {
    id: "2",
    competency: "Product Marketing",
    skillType: "technical skills",
    description:
      "Defines Value Proposition and Product Positioning, leading Go-to-Market (GTM) Planning and Product Launches. Crucial for ensuring the SaaS offering resonates with target audiences and supports sales efforts with Sales Collateral.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: [],
    category: "Strategy & Planning",
    skills: parseSkills(
      "Value Proposition DevelopmentProduct Positioning & Messaging, Go-to-Market (GTM) Planning, Product Launch Management, Sales Collateral Creation, Competitive Battlecard Development, Pricing Strategy Analysis",
    ),
  },
  {
    id: "3",
    competency: "Overall Marketing Strategy",
    skillType: "technical skills",
    description:
      "Establishes the overarching Goals and Budgeting for marketing, mapping the Customer Journey and Marketing Funnel. Provides the strategic blueprint for all B2B SaaS growth initiatives.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: [],
    category: "Strategy & Planning",
    skills: parseSkills(
      "Goal Setting (SMART goals), Marketing Budgeting & Allocation, Customer Journey Mapping, Marketing Funnel Design, Strategic Planning, Frameworks (e.g., SWOT, Porter's Five Forces)",
    ),
  },
  {
    id: "4",
    competency: "Content Marketing",
    skillType: "technical skills",
    description:
      "Develops and distributes valuable content (e.g., blogs, whitepapers, webinars) to attract and engage the target audience, building thought leadership and fueling lead generation. Leverages platforms like WordPress and Canva.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: [],
    category: "Demand Generation & Acquisition",
    skills: parseSkills(
      "Content Strategy Development, Blog Post Writing & Editing, Whitepaper & Ebook Creation, Case Study Development, Webinar & Video Scripting, Content Distribution & Promotion, Content Calendar Management",
    ),
  },
  {
    id: "5",
    competency: "Search Engine Optimization (SEO)",
    skillType: "technical skills",
    description:
      "Optimizes online visibility through Keyword Research, Technical SEO, and On-Page/Off-Page tactics. Drives organic traffic and qualified leads to the SaaS platform, using tools like Ahrefs and Google Analytics.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("Google Search Console,SEMRush, Ahrefs"),
    category: "Demand Generation & Acquisition",
    skills: parseSkills(
      "Keyword Research & Analysis, Technical SEO Audits & Implementation, On-Page SEO Optimization, Off-Page SEO (Link Building, Digital PR), SEO Performance Monitoring",
    ),
  },
  {
    id: "6",
    competency: "Paid Media (SEM/PPC)",
    skillType: "technical skills",
    description:
      "Executes targeted advertising campaigns on platforms like Google Ads and LinkedIn Ads to generate immediate demand and acquire leads. Involves Ad Copywriting, Audience Targeting, and Budget Management.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("GA 4,CRM (hubspot),Google Ads"),
    category: "Demand Generation & Acquisition",
    skills: parseSkills(
      "Campaign Strategy & Setup (Google Ads, LinkedIn Ads), Ad Copywriting & Creative Development, Bid Management & Optimization, Audience Targeting & Segmentation, Budget Management & ROI Tracking, Retargeting Strategy",
    ),
  },
  {
    id: "7",
    competency: "Social Media Marketing",
    skillType: "technical skills",
    description:
      "Builds brand presence and engages the B2B audience on social platforms through organic content, Community Management, and Paid Social campaigns. Key for brand awareness and lead nurturing.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("LinkedIn,Instagram"),
    category: "Demand Generation & Acquisition",
    skills: parseSkills(
      "Social Media Strategy Development, Platform-Specific Content Creation, Community Management & Engagement, Social Listening, Paid Social Campaign Management, Influencer Identification & Collaboration",
    ),
  },
  {
    id: "8",
    competency: "Email Marketing",
    skillType: "technical skills",
    description:
      "Automates personalized communication via Lead Nurturing Workflows and Email Campaigns. Essential for guiding prospects through the funnel and retaining customers, often managed in CRM or Marketing Automation Platforms.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("Email Automation"),
    category: "Demand Generation & Acquisition",
    skills: parseSkills(
      "Email Campaign Design & Execution, Lead Nurturing Workflow Creation, Email List Segmentation, A/B Testing, Email Elements, Email Deliverability Management",
    ),
  },
  {
    id: "9",
    competency: "Account-Based Marketing (ABM)",
    skillType: "technical skills",
    description:
      "Focuses highly personalized marketing and sales efforts on specific, high-value Target Accounts. Drives deeper engagement and accelerates deal cycles through multi-channel orchestration.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("CRM (hubspot),SQL (Grafana)"),
    category: "Demand Generation & Acquisition",
    skills: parseSkills(
      "Target Account Selection, Personalized Content & Messaging Development, Multi-Channel ABM Campaign Orchestration, Sales & Marketing Alignment for ABM",
    ),
  },
  {
    id: "10",
    competency: "Event Marketing",
    skillType: "technical skills",
    description:
      "Organizes and promotes Webinars and Trade Shows to engage prospects, build relationships, and capture leads. Creates direct interaction opportunities crucial for B2B sales cycles.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("CRM (hubspot)"),
    category: "Demand Generation & Acquisition",
    skills: parseSkills(
      "Webinar & Virtual Event Planning, Trade Show & Conference Participation, Event Promotion & Lead Capture, Post-Event Follow-up Strategy",
    ),
  },
  {
    id: "11",
    competency: "Website & Landing Page Optimization",
    skillType: "technical skills",
    description:
      "Enhances the user experience and conversion rates on the SaaS website and dedicated Landing Pages. Involves UI/UX Principles, CRO, and A/B Testing to maximize lead capture.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools(
      "Figma,CMS (Framer, Wordpress, Webflow),Hotjar,Google Optimizer,LeadPages",
    ),
    category: "Conversion & Nurturing",
    skills: parseSkills(
      "UI/UX Principles for Conversion, Landing Page Design & Development, Call-to-Action (CTA) Optimization, Form Optimization, A/B Testing Web Elements",
    ),
  },
  {
    id: "12",
    competency: "Marketing Automation",
    skillType: "technical skills",
    description:
      "Implements and manages software platforms (e.g., HubSpot) to automate marketing workflows, Lead Scoring, and data synchronization with CRM. Improves efficiency and scalability of marketing efforts.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("CRM (hubspot),Email Automation,Airtable,Make, Zapier"),
    category: "Conversion & Nurturing",
    skills: parseSkills(
      "Marketing Automation Platform (MAP) Proficiency, Workflow & Journey Building, Lead Scoring Model Design, Data Synchronization (MAP-CRM)",
    ),
  },
  {
    id: "13",
    competency: "Sales Enablement",
    skillType: "technical skills",
    description:
      "Provides sales teams with the necessary content, tools, and training (e.g., Demo Scripts, Battlecards) to effectively engage prospects and close deals, bridging the gap between marketing and sales.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("Microsoft Suite"),
    category: "Conversion & Nurturing",
    skills: parseSkills(
      "Demo Script & Presentation Development, Sales Collateral Customization, Sales Training & Coaching Support, Competitive Intelligence for Sales",
    ),
  },
  {
    id: "14",
    competency: "Lead Management",
    skillType: "technical skills",
    description:
      "Defines Lead Qualification Criteria, manages Lead Routing, and optimizes the Sales Handoff Process. Ensures a smooth transition of qualified prospects from marketing to sales, impacting pipeline velocity.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools("CRM (hubspot),SQL (Grafana),LinkedIn,UTMs"),
    category: "Conversion & Nurturing",
    skills: parseSkills(
      "Lead Qualification Criteria Definition, Lead Routing & Assignment, Sales Handoff Process Optimization, Pipeline Reporting & Analysis",
    ),
  },
  {
    id: "15",
    competency: "Customer Marketing",
    skillType: "technical skills",
    description:
      "Engages existing customers through Onboarding Communications, Product Adoption Campaigns, and Upsell/Cross-sell Programs. Crucial for maximizing LTV and fostering customer loyalty in SaaS.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: parseTools("SQL (Grafana)"),
    category: "Retention & Expansion",
    skills: parseSkills(
      "Onboarding Communication Strategy, Product Adoption Campaigns, Upsell & Cross-sell Program Development, Customer Education Content Creation, Lifecycle Marketing Automation",
    ),
  },
  {
    id: "16",
    competency: "Community & Advocacy",
    skillType: "technical skills",
    description:
      "Builds and nurtures customer communities, facilitates Referral Programs, and collects Case Studies and Testimonials. Transforms satisfied customers into brand champions, driving organic growth.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: [],
    category: "Retention & Expansion",
    skills: parseSkills(
      "Customer Community Management, Referral Program Design & Promotion, Case Study & Testimonial Collection, Online Review Management, Brand Ambassador Programs",
    ),
  },
  {
    id: "17",
    competency: "Customer Success Collaboration",
    skillType: "technical skills",
    description:
      "Works closely with Customer Success teams on Customer Health Initiatives and Churn Prevention Strategies. Ensures marketing efforts support retention and growth by addressing customer needs post-sale.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: [],
    category: "Retention & Expansion",
    skills: parseSkills(
      "Joint Customer Health Initiatives, Feedback Loop Implementation (Marketing-CS-Product), Churn Prevention Strategies, Renewal Marketing Support",
    ),
  },
  {
    id: "18",
    competency: "Marketing Operations (MarOps)",
    skillType: "technical skills",
    description:
      "Manages the MarTech Stack, ensures Data Governance, and optimizes marketing processes. Provides the operational backbone for efficient, scalable, and compliant B2B SaaS marketing.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: parseTools("Make, Zapier,GPT Assistants"),
    category: "Operations & Analytics",
    skills: parseSkills(
      "Marketing Technology (MarTech) Stack Management, Data Governance & Hygiene, Process Documentation & Optimization, Compliance (GDPR, CCPA) & Privacy Management, Vendor Management, Team Management, Team Creation based on Growth Targets and Priorities",
    ),
  },
  {
    id: "19",
    competency: "Data Analytics & Reporting",
    skillType: "technical skills",
    description:
      "Defines KPIs, creates Marketing Dashboards, and performs Attribution Modeling. Translates complex data into actionable insights, driving continuous optimization and demonstrating marketing ROI. Uses tools like Google Analytics, SQL, and UTM Tracking.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: parseTools("GA 4,Google Ads,UTMs,SQL (Grafana)"),
    category: "Operations & Analytics",
    skills: parseSkills(
      "Key Performance Indicator (KPI) Definition, Marketing Dashboard Creation, Web Analytics, Campaign Performance Reporting, Attribution Modeling, Data Interpretation & Storytelling",
    ),
  },
  {
    id: "20",
    competency: "Experimentation & Optimization",
    skillType: "technical skills",
    description:
      "Applies Hypothesis Generation, Experiment Design, and Statistical Analysis to continuously test and improve marketing performance. Essential for data-driven growth and innovation in a B2B SaaS environment.",
    roleRelevance: "",
    levelOfMastery: 4,
    tools: parseTools(
      "GA 4,Email Automation,Google Optimizer,Hotjar,LeadPages,UTMs,SQL (Grafana),LinkedIn",
    ),
    category: "Operations & Analytics",
    skills: parseSkills(
      "Hypothesis Generation, Experiment Design & Execution, Statistical Analysis of Results, Iterative Optimization, Growth Hacking Methodologies",
    ),
  },
  {
    id: "21",
    competency: "Strategic & Analytical Perspective",
    skillType: "soft skills",
    description:
      'Someone who consistently brings a "zoom-out" capability to the table, transforming complex market signals and data into clear, actionable insights. They are adept at critical thinking and problem-solving, enabling the startup to make informed, forward-looking decisions with agility. This individual thrives on continuously refining approaches based on real-world data, ensuring the company can pivot effectively and seize opportunities, perfectly fitting a culture of short decision paths and data-driven growth.',
    roleRelevance: "",
    levelOfMastery: 5,
    tools: [],
    category: "Personality and Mindset",
    skills: parseSkills(
      "Strategic Thinking, Data-Driven Mindset, Problem-Solving & Optimization, Adaptability/Iterative Approach, Critical Thinking",
    ),
  },
  {
    id: "22",
    competency: "Leadership & Interpersonal Influence",
    skillType: "soft skills",
    description:
      "Someone who naturally unites and inspires, fostering a cohesive and vibrant team environment. They excel at building and nurturing strong relationships with mentors, corporates, and funders, ensuring seamless collaboration and engagement across the ecosystem. This candidate's ability to communicate vision and motivate collective effort is vital for attracting talent and securing the partnerships essential for a startup's success.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: [],
    category: "Personality and Mindset",
    skills: parseSkills(
      "Leadership, Collaboration, Stakeholder Management, Communication, Coaching & Mentorship",
    ),
  },
  {
    id: "23",
    competency: "Execution & Drive",
    skillType: "soft skills",
    description:
      "Someone who is the operational engine, ensuring ideas are swiftly transformed into tangible results. They possess the proactivity and meticulous organization to manage projects effectively, launch initiatives with precision, and maintain critical momentum. This individual thrives in a dynamic environment, ensuring the startup gets things done efficiently and reliably, even with short decision paths and evolving needs.",
    roleRelevance: "",
    levelOfMastery: 5,
    tools: [],
    category: "Personality and Mindset",
    skills: parseSkills(
      "Project Management & Organization, Proactivity & Initiative",
    ),
  },
];

export const categoryColors = {
  "Strategy & Planning": "text-white border-opacity-20",
  "Demand Generation & Acquisition": "text-white border-opacity-20",
  "Conversion & Nurturing": "text-white border-opacity-20",
  "Retention & Expansion": "text-white border-opacity-20",
  "Operations & Analytics": "text-white border-opacity-20",
  "Personality and Mindset": "text-white border-opacity-20",
};

export const skillTypeColors = {
  "technical skills": "bg-slate-100 text-slate-700 border-slate-200",
  "soft skills": "bg-emerald-100 text-emerald-700 border-emerald-200",
};
