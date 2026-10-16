export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  employmentType: "Remote" | "On-site" | "Freelance" | "Contract";
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
  projectSlug?: string;
  liveUrl?: string;
  highlight?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "alpha-clinic-ai",
    role: "Remote Full-Stack Developer",
    company: "Alpha Clinic AI",
    location: "Remote",
    employmentType: "Remote",
    period: "Feb 2026 – Apr 2026",
    startDate: "2026-02",
    endDate: "2026-04",
    description: "Built a full clinic management system with Laravel 12 and React 19: RBAC, interactive scheduling, WhatsApp and Telegram workflow automation, real-time analytics dashboards, Redis performance optimization, bilingual Arabic/English.",
    bulletPoints: [
      "Engineered comprehensive clinic operations platform using modern Laravel 12 API backend and React 19 interactive frontend.",
      "Implemented strict Role-Based Access Control (RBAC) separating administrative staff, doctors, specialists, and patients.",
      "Integrated real-time WhatsApp and Telegram automated notifications for appointments, follow-up alerts, and clinical updates.",
      "Designed real-time patient flow and revenue analytics dashboards backed by optimized Redis caching layers.",
      "Built native bilingual support (Arabic RTL & English LTR) across all portals."
    ],
    technologies: ["Laravel 12", "React 19", "RBAC", "Redis", "WhatsApp API", "Telegram API", "Analytics", "Bilingual (AR/EN)"],
    projectSlug: "alpha-clinic-ai",
    highlight: "Laravel 12 & React 19 Enterprise System"
  },
  {
    id: "sunrise-it-center",
    role: "On-site Back-end Developer",
    company: "Sunrise IT Center",
    location: "Rif Dimashq, Syria",
    employmentType: "On-site",
    period: "Aug 2025 – Feb 2026",
    startDate: "2025-08",
    endDate: "2026-02",
    description: "Back-end for 7+ production apps: delivery apps with Stripe and PayPal webhooks, virtual school platforms, e-commerce, admin dashboards, real-time features via sockets. Firebase, Google Maps, OTPs, notifications.",
    bulletPoints: [
      "Architected back-end micro-services and monolith REST APIs for 7+ active production platforms simultaneously.",
      "Developed secure, idempotent payment webhooks for Stripe and PayPal handling real-time order state synchronization.",
      "Engineered virtual school platforms with role-based class portals, gradebooks, and real-time attendance tracking.",
      "Implemented live delivery routing and driver coordination using Google Maps API, Firebase push notifications, and WebSockets.",
      "Integrated automated SMS OTP verifications and multi-tier authentication for high-security applications."
    ],
    technologies: ["Laravel", "Node.js", "WebSockets", "Stripe Webhooks", "PayPal", "Firebase", "Google Maps API", "OTPs", "MySQL"],
    projectSlug: "sunrise-it-apps",
    highlight: "7+ Production Enterprise Back-ends"
  },
  {
    id: "zain-aldar",
    role: "Freelance Full-Stack Developer",
    company: "Zain-Aldar",
    location: "Damascus & Countryside, Syria",
    employmentType: "Freelance",
    period: "May 2025 – Jul 2025",
    startDate: "2025-05",
    endDate: "2025-07",
    description: "Real estate platform for Damascus and countryside connecting sellers, buyers, tenants. Not launched yet.",
    bulletPoints: [
      "Engineered property discovery engine catering to residential and commercial real estate across Damascus and rural suburbs.",
      "Created dynamic multi-faceted search filters (price, area, property type, legal status, zoning).",
      "Designed direct inquiries and tenant-landlord communication pipelines.",
      "Constructed admin verification dashboard for vetting agent listings and property title authenticity."
    ],
    technologies: ["Laravel REST API", "React", "PostgreSQL", "Tailwind CSS", "Search Indexing"],
    projectSlug: "zain-aldar",
    liveUrl: "https://zain-aldar.com",
    highlight: "Damascus Metro Real Estate Marketplace"
  },
  {
    id: "crunchy-fruits",
    role: "Freelance Full-Stack Developer",
    company: "Crunchy Fruits",
    location: "Damascus, Syria",
    employmentType: "Freelance",
    period: "Mar 2025 – Apr 2025",
    startDate: "2025-03",
    endDate: "2025-04",
    description: "Syria's first e-commerce platform for freeze-dried fruits. 20,000+ users, 1,500+ orders.",
    bulletPoints: [
      "Architected the flagship digital storefront and back-office management for Syria's pioneer in freeze-dried fruit manufacturing.",
      "Handled scaling and traffic spikes seamlessly, supporting over 20,000 active registered users.",
      "Processed and dispatched 1,500+ confirmed commercial orders with zero transactional loss.",
      "Engineered inventory reconciliation, automated checkout flows, and SMS dispatch status updates."
    ],
    technologies: ["Laravel", "React", "MySQL", "Inventory Sync", "SMS Gateway", "E-Commerce"],
    projectSlug: "crunchy-fruits",
    liveUrl: "https://crunchy-fruit.com",
    highlight: "20,000+ Users & 1,500+ Orders"
  },
  {
    id: "namir-agency",
    role: "Freelance Full-Stack Developer",
    company: "Namir Agency",
    location: "Syria",
    employmentType: "Freelance",
    period: "Jan 2025 – Feb 2025",
    startDate: "2025-01",
    endDate: "2025-02",
    description: "Recruitment platform connecting job seekers with employers, focused on engineering roles.",
    bulletPoints: [
      "Built specialized technical job board matching engineering candidates with domestic and regional firms.",
      "Developed candidate profile management with structured CV parsing, skill tagging, and portfolio showcasing.",
      "Implemented applicant tracking system (ATS) enabling hiring managers to stage candidate interviews and leave internal notes.",
      "Integrated automated email triggers for application stage transitions."
    ],
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "ATS Workflow"],
    projectSlug: "namir-agency",
    highlight: "Engineering Recruitment Platform"
  },
  {
    id: "noqati",
    role: "Freelance Full-Stack Developer",
    company: "Noqati",
    location: "Damascus, Syria",
    employmentType: "Freelance",
    period: "Aug 2024 – Dec 2024",
    startDate: "2024-08",
    endDate: "2024-12",
    description: "Web app for managing Quran memorization courses in Damascus mosques; each mosque manages its own courses; points-based.",
    bulletPoints: [
      "Engineered multi-tenant educational platform adopted by mosques across Damascus for Quranic memorization circles.",
      "Designed isolated tenant workspaces allowing each mosque administration to manage teachers, student cohorts, and syllabi.",
      "Implemented motivating points-and-rewards system to track memorization milestones, attendance, and exam scores.",
      "Created parent-facing portal for real-time progress monitoring and student achievements."
    ],
    technologies: ["Laravel", "Multi-tenancy", "React", "Gamification", "PostgreSQL"],
    projectSlug: "noqati",
    liveUrl: "https://noqati.aboodm.com",
    highlight: "Multi-Mosque Course & Points System"
  },
  {
    id: "darak-real-estate",
    role: "Freelance Full-Stack Developer",
    company: "Darak Real Estate",
    location: "Al-Shaalan, Damascus, Syria",
    employmentType: "Freelance",
    period: "Jun 2024 – Aug 2024",
    startDate: "2024-06",
    endDate: "2024-08",
    description: "Real estate and investment services platform for Al-Shaalan, Damascus.",
    bulletPoints: [
      "Developed premium property brokerage website focused on prime commercial and luxury residential properties in Al-Shaalan.",
      "Integrated high-resolution media galleries, virtual tour links, and structured valuation inquiry forms.",
      "Created investment advisory section facilitating institutional real estate consultation bookings.",
      "Optimized pages for local search discovery (SEO) and fast mobile browsing."
    ],
    technologies: ["PHP / Laravel", "React", "Tailwind CSS", "SEO Optimization", "Media Management"],
    projectSlug: "darak-real-estate",
    liveUrl: "https://darak-sy.com",
    highlight: "Prime Commercial & Residential Platform"
  },
  {
    id: "talklink",
    role: "Full-Stack Developer",
    company: "Talklink",
    location: "Remote / Project",
    employmentType: "Contract",
    period: "Mar 2024 – Jun 2024",
    startDate: "2024-03",
    endDate: "2024-06",
    description: "Real-time chat application.",
    bulletPoints: [
      "Engineered low-latency bidirectional messaging system utilizing WebSockets.",
      "Implemented real-time typing indicators, read receipts, online presence tracking, and message history caching.",
      "Designed database schema optimized for fast cursor-based message pagination and media attachments.",
      "Enforced client-side input sanitization and secure token-based socket authentication."
    ],
    technologies: ["Node.js", "WebSockets", "Socket.io", "React", "Redis", "MongoDB / MySQL"],
    projectSlug: "talklink",
    highlight: "Sub-second Bidirectional Chat"
  },
  {
    id: "bearshop",
    role: "Full-Stack Developer",
    company: "Bearshop",
    location: "Remote / Project",
    employmentType: "Contract",
    period: "Dec 2023 – Feb 2024",
    startDate: "2023-12",
    endDate: "2024-02",
    description: "E-commerce marketplace platform.",
    bulletPoints: [
      "Built multi-vendor digital marketplace supporting merchant onboarding, product cataloging, and cart operations.",
      "Structured product attributes, SKU management, discount codes, and multi-tier category taxonomy.",
      "Created responsive checkout flow with address validation and order state machine.",
      "Developed merchant analytics view tracking sales volumes, top-selling items, and return rates."
    ],
    technologies: ["Laravel", "React", "MySQL", "REST API", "E-commerce Architecture"],
    projectSlug: "bearshop",
    highlight: "Multi-vendor Retail Marketplace"
  },
  {
    id: "food-blogger",
    role: "Full-Stack Developer",
    company: "Food Blogger",
    location: "Project",
    employmentType: "Contract",
    period: "Aug 2022 – Nov 2023",
    startDate: "2022-08",
    endDate: "2023-11",
    description: "Content management website.",
    bulletPoints: [
      "Constructed content publishing platform tailored for culinary creators, recipe indexing, and food photography.",
      "Implemented custom CMS interface with rich markdown editing, image uploads, ingredient checklists, and nutritional breakdowns.",
      "Optimized server response times and implemented Open Graph / schema.org recipe microdata for search discovery.",
      "Built interactive reader features including comments, star ratings, and recipe bookmarking."
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "CMS", "SEO Microdata", "Bootstrap / CSS"],
    projectSlug: "food-blogger",
    highlight: "Rich Recipe CMS & Publishing"
  }
];
