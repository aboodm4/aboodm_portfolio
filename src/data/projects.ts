export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Enterprise System" | "E-Commerce" | "Real Estate" | "EdTech" | "Real-time" | "CMS";
  role: string;
  period: string;
  shortDescription: string;
  longDescription: string;
  featured: boolean;
  featuredOrder?: number;
  tags: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  status?: string;
  features: string[];
  techStack: {
    backend: string[];
    frontend: string[];
    infrastructure: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "alpha-clinic-ai",
    title: "Alpha Clinic AI",
    subtitle: "Enterprise Clinic Management System",
    category: "Enterprise System",
    role: "Full-Stack Developer",
    period: "Feb 2026 – Apr 2026",
    shortDescription: "Full clinic management platform with Laravel 12 and React 19: RBAC, interactive scheduling, WhatsApp & Telegram workflow automation, real-time analytics, and Redis caching.",
    longDescription: "Alpha Clinic AI is an intelligent healthcare management portal built to handle end-to-end clinical operations. Powered by Laravel 12 and a reactive React 19 interface, the system automates appointment reminders via WhatsApp and Telegram, provides doctors with real-time queues, and presents clinic owners with live financial and clinical performance dashboards.",
    featured: true,
    featuredOrder: 1,
    tags: ["Laravel 12", "React 19", "RBAC", "Redis", "WhatsApp API", "Telegram API", "Analytics", "Bilingual"],
    metrics: [
      { label: "Architecture", value: "Laravel 12 + React 19" },
      { label: "Localization", value: "Arabic & English" },
      { label: "Automations", value: "WhatsApp & Telegram" },
    ],
    features: [
      "Role-Based Access Control (RBAC) separating administrative staff, doctors, nurses, and patients with granular permissions.",
      "Interactive appointment scheduler with clash prevention and doctor calendar sync.",
      "Automated messaging via WhatsApp and Telegram API for confirmations, prescription reminders, and lab alerts.",
      "Real-time operational dashboard visualizing revenue, patient visit volume, and treatment statistics.",
      "High-performance caching with Redis reducing clinical lookup latencies.",
      "Native bilingual design supporting both Arabic (RTL) and English (LTR)."
    ],
    techStack: {
      backend: ["Laravel 12", "PHP 8.3", "Redis", "MySQL", "REST API"],
      frontend: ["React 19", "Tailwind CSS", "Lucide Icons", "Vite/Next tooling"],
      infrastructure: ["VPS Linux", "Nginx", "Queue Workers", "Webhook Listeners"]
    }
  },
  {
    slug: "crunchy-fruits",
    title: "Crunchy Fruits",
    subtitle: "Syria's 1st Freeze-Dried Fruit E-Commerce Store",
    category: "E-Commerce",
    role: "Freelance Full-Stack Developer",
    period: "Mar 2025 – Apr 2025",
    shortDescription: "Syria's first e-commerce platform for freeze-dried fruits, successfully serving 20,000+ registered customers and processing 1,500+ commercial orders.",
    longDescription: "Crunchy Fruits pioneered the freeze-dried fruit retail market in Syria. As the sole full-stack developer, I engineered the consumer storefront, real-time cart, checkout pipeline, inventory ledger, and order fulfillment system capable of withstanding heavy launch traffic surges.",
    featured: true,
    featuredOrder: 2,
    liveUrl: "https://crunchy-fruit.com",
    tags: ["E-Commerce", "Laravel", "React", "20K+ Users", "1,500+ Orders", "MySQL", "Inventory Sync"],
    metrics: [
      { label: "Active Users", value: "20,000+" },
      { label: "Orders Processed", value: "1,500+" },
      { label: "Platform Role", value: "Market Pioneer" }
    ],
    features: [
      "High-conversion storefront optimized for mobile devices and varied network speeds across Syria.",
      "Resilient cart and checkout flow with zero lost transactions during flash sales.",
      "Automated warehouse stock alerts and SKU replenishment forecasting.",
      "Customer notification pipeline via SMS integration for dispatch and delivery tracking.",
      "Comprehensive administration panel for processing orders, managing discounts, and printing shipping manifests."
    ],
    techStack: {
      backend: ["Laravel REST API", "PHP", "MySQL", "Queue Jobs"],
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      infrastructure: ["Linux VPS", "Nginx", "SSL/TLS", "Automated Backups"]
    }
  },
  {
    slug: "sunrise-it-apps",
    title: "Sunrise IT Production Applications",
    subtitle: "Enterprise Back-end Services & Multi-Platform Architecture",
    category: "Enterprise System",
    role: "On-site Back-end Developer",
    period: "Aug 2025 – Feb 2026",
    shortDescription: "Back-end systems for 7+ production apps: on-demand delivery with Stripe & PayPal webhooks, virtual school platforms, e-commerce, and real-time socket services.",
    longDescription: "At Sunrise IT Center, I engineered and maintained the core back-end infrastructure supporting 7+ distinct live production platforms. These spanned complex logistics and delivery systems with Google Maps routing, education management platforms with real-time virtual classrooms, and e-commerce solutions with idempotent payment processing.",
    featured: true,
    featuredOrder: 3,
    tags: ["Laravel", "Node.js", "WebSockets", "Stripe", "PayPal", "Firebase", "Google Maps API", "OTPs"],
    metrics: [
      { label: "Production Platforms", value: "7+ Live Apps" },
      { label: "Payment Integrations", value: "Stripe & PayPal" },
      { label: "Real-time Protocols", value: "WebSockets & Sockets" }
    ],
    features: [
      "Robust webhook listeners for Stripe and PayPal with signature verification and retry guarantees.",
      "Virtual school management system supporting grades, attendance records, and virtual lesson links.",
      "Real-time driver location tracking and route dispatch using Google Maps and WebSockets.",
      "Firebase Cloud Messaging push notification microservice delivering instant updates to mobile clients.",
      "High-throughput OTP SMS generation and rate-limited phone authentication flows."
    ],
    techStack: {
      backend: ["Laravel", "Node.js", "MySQL", "WebSockets", "Firebase Admin SDK"],
      frontend: ["Blade / React Admin Panels", "REST Clients"],
      infrastructure: ["Linux Servers", "Nginx Reverse Proxy", "Apache", "Cron Workers"]
    }
  },
  {
    slug: "zain-aldar",
    title: "Zain-Aldar",
    subtitle: "Damascus & Suburbs Real Estate Platform",
    category: "Real Estate",
    role: "Freelance Full-Stack Developer",
    period: "May 2025 – Jul 2025",
    shortDescription: "Comprehensive real estate marketplace for Damascus and countryside connecting sellers, buyers, and tenants with multifaceted property filters.",
    longDescription: "Zain-Aldar was designed to modernize the property search experience across Damascus and its surrounding countryside. The platform incorporates deep localized filtering (neighborhoods, ownership deed types, zoning, price ranges) and direct verified inquiry routing between buyers and property holders.",
    featured: false,
    liveUrl: "https://zain-aldar.com",
    status: "In development / Pre-launch",
    tags: ["Real Estate", "Laravel", "React", "PostgreSQL", "Property Search", "Damascus"],
    metrics: [
      { label: "Coverage", value: "Damascus & Suburbs" },
      { label: "Status", value: "Pre-launch" },
      { label: "Role", value: "Full-Stack" }
    ],
    features: [
      "Multi-criteria search engine supporting neighborhood filtering, zoning categories, and square meter rates.",
      "Agent and owner listing management with photo gallery uploads and location mapping.",
      "Lead generation and direct inquiry messaging system.",
      "Verification pipeline for authenticating land registry documents and property titles."
    ],
    techStack: {
      backend: ["Laravel REST API", "PostgreSQL", "PHP 8.2"],
      frontend: ["React", "Tailwind CSS"],
      infrastructure: ["VPS Linux", "Nginx", "Storage CDN"]
    }
  },
  {
    slug: "namir-agency",
    title: "Namir Agency",
    subtitle: "Technical Recruitment & Talent Matching Platform",
    category: "Enterprise System",
    role: "Freelance Full-Stack Developer",
    period: "Jan 2025 – Feb 2025",
    shortDescription: "Recruitment platform connecting job seekers with corporate employers, purpose-built with structured workflows for engineering and technical roles.",
    longDescription: "Namir Agency bridges the gap between top engineering talent and demanding tech employers. I built the complete web platform, which features custom resume builders, automated skill matching, and an intuitive applicant tracking dashboard for hiring teams.",
    featured: false,
    tags: ["Recruitment", "Job Board", "Laravel", "React", "ATS Workflow", "Engineering Roles"],
    metrics: [
      { label: "Focus", value: "Engineering Roles" },
      { label: "Tooling", value: "Built-in ATS" },
      { label: "Stack", value: "Laravel + React" }
    ],
    features: [
      "Applicant Tracking System (ATS) with kanban-style hiring stages (Applied, Screened, Interview, Offer).",
      "Structured resume creation module with standardized technical skills taxonomies.",
      "Employer hiring dashboard with candidate evaluation notes and rating rubrics.",
      "Automated interview scheduling triggers and candidate communication emails."
    ],
    techStack: {
      backend: ["Laravel", "MySQL", "Mailgun / SMTP"],
      frontend: ["React", "Tailwind CSS"],
      infrastructure: ["Linux VPS", "Nginx", "SSL"]
    }
  },
  {
    slug: "noqati",
    title: "Noqati",
    subtitle: "Mosque Quranic Course & Points Management System",
    category: "EdTech",
    role: "Freelance Full-Stack Developer",
    period: "Aug 2024 – Dec 2024",
    shortDescription: "Multi-tenant web application for managing Quran memorization courses across Damascus mosques with an incentivizing points-and-rewards system.",
    longDescription: "Noqati was created to bring structured digital organization and gamified motivation to Quranic memorization circles in Damascus. Each participating mosque operates an independent portal where supervisors track surah memorization, daily attendance, recitation accuracy, and point totals.",
    featured: false,
    liveUrl: "https://noqati.aboodm.com",
    tags: ["Multi-tenant", "EdTech", "Gamification", "Points System", "Laravel", "PostgreSQL"],
    metrics: [
      { label: "Architecture", value: "Multi-Tenant" },
      { label: "Community", value: "Damascus Mosques" },
      { label: "Feature", value: "Points & Rewards" }
    ],
    features: [
      "Tenant isolation ensuring each mosque maintains secure, separated student and teacher records.",
      "Points ledger awarding badges and incentives for milestone achievements and punctuality.",
      "Mobile-friendly interface for teachers to record session notes and memorization assessments on the go.",
      "Parent oversight dashboard for reviewing student progress and exam evaluations."
    ],
    techStack: {
      backend: ["Laravel", "PostgreSQL", "Multi-tenancy Package"],
      frontend: ["React", "Tailwind CSS"],
      infrastructure: ["Linux VPS", "Nginx", "Daily Backups"]
    }
  },
  {
    slug: "darak-real-estate",
    title: "Darak Real Estate",
    subtitle: "Al-Shaalan Damascus Real Estate & Investment Portal",
    category: "Real Estate",
    role: "Freelance Full-Stack Developer",
    period: "Jun 2024 – Aug 2024",
    shortDescription: "Real estate and investment services platform focused on prime commercial and residential properties in the prestigious Al-Shaalan district of Damascus.",
    longDescription: "Darak Real Estate represents prime commercial and residential properties in Al-Shaalan, Damascus. I created an elegant, high-performance web platform enabling prospective investors and buyers to explore listings, view floorplans, schedule visits, and submit advisory requests.",
    featured: false,
    liveUrl: "https://darak-sy.com",
    tags: ["Real Estate", "Al-Shaalan", "Investment Services", "Laravel", "React", "SEO"],
    metrics: [
      { label: "Market", value: "Al-Shaalan Damascus" },
      { label: "Focus", value: "Commercial & Investment" },
      { label: "Optimization", value: "SEO & Mobile" }
    ],
    features: [
      "Responsive photo showcase and listing cards detailing property specifications, zoning, and legal clearances.",
      "Dedicated investment consultation booking system for commercial acquisitions.",
      "SEO-optimized architecture for organic Google ranking in local Damascus real estate queries.",
      "Fast admin content manager for instant property status updates (Available, Under Offer, Sold)."
    ],
    techStack: {
      backend: ["Laravel", "PHP", "MySQL"],
      frontend: ["React", "Tailwind CSS"],
      infrastructure: ["VPS Linux", "Nginx", "SSL"]
    }
  },
  {
    slug: "talklink",
    title: "Talklink",
    subtitle: "Low-Latency Real-Time Messaging Application",
    category: "Real-time",
    role: "Full-Stack Developer",
    period: "Mar 2024 – Jun 2024",
    shortDescription: "High-performance real-time chat application featuring instant bidirectional messaging, online presence indicators, and message persistence.",
    longDescription: "Talklink was built to explore low-latency socket networking and scalable real-time state synchronization. Utilizing Node.js and WebSockets with an optimized React interface, the application delivers sub-100ms message delivery, typing broadcasts, and instant delivery confirmations.",
    featured: false,
    tags: ["Real-time Chat", "WebSockets", "Node.js", "Socket.io", "React", "Redis"],
    metrics: [
      { label: "Latency", value: "<100ms Delivery" },
      { label: "Protocol", value: "WebSockets" },
      { label: "Sync", value: "Real-time State" }
    ],
    features: [
      "Bidirectional WebSocket transport ensuring instant message synchronization.",
      "Active typing indicators, user online/offline presence tracking, and delivery receipts.",
      "Redis publish/subscribe channel for distributing chat events across instances.",
      "Cursor-based paginated chat history loading for rapid scrolling without memory bloat."
    ],
    techStack: {
      backend: ["Node.js", "Socket.io", "Express", "Redis", "MySQL"],
      frontend: ["React", "CSS Modules / Tailwind"],
      infrastructure: ["VPS", "Nginx WebSocket Reverse Proxy"]
    }
  },
  {
    slug: "bearshop",
    title: "Bearshop",
    subtitle: "Multi-Category E-Commerce Marketplace",
    category: "E-Commerce",
    role: "Full-Stack Developer",
    period: "Dec 2023 – Feb 2024",
    shortDescription: "E-commerce marketplace platform featuring product categorization, cart management, merchant workflows, and checkout processing.",
    longDescription: "Bearshop is a multi-vendor retail platform designed to manage product catalogs across various categories. The system handles product attribute variations (sizes, colors), customer checkout, merchant inventory updates, and order status transitions.",
    featured: false,
    tags: ["E-Commerce", "Marketplace", "Laravel", "React", "MySQL", "Inventory"],
    metrics: [
      { label: "Model", value: "Marketplace / Retail" },
      { label: "Backend", value: "Laravel REST API" },
      { label: "Catalog", value: "Multi-variant SKUs" }
    ],
    features: [
      "Dynamic catalog filtering by category, brand, price range, and in-stock availability.",
      "Persistent user shopping carts across devices and guest checkout support.",
      "Order state machine tracking payment, processing, packaging, and shipping.",
      "Merchant dashboard for tracking product views, low-stock alerts, and sales summaries."
    ],
    techStack: {
      backend: ["Laravel", "PHP", "MySQL"],
      frontend: ["React", "Tailwind CSS"],
      infrastructure: ["Linux VPS", "Nginx"]
    }
  },
  {
    slug: "food-blogger",
    title: "Food Blogger",
    subtitle: "Content Management & Culinary Publishing Platform",
    category: "CMS",
    role: "Full-Stack Developer",
    period: "Aug 2022 – Nov 2023",
    shortDescription: "Content management platform for food writers and culinary creators featuring recipe microdata, photo galleries, and reader reviews.",
    longDescription: "Food Blogger was built as a dedicated publishing hub for food writers and recipe creators. The system features custom editorial tools for structuring ingredient lists, cooking preparation steps, nutritional information, and interactive recipe ratings.",
    featured: false,
    tags: ["CMS", "PHP", "JavaScript", "MySQL", "SEO Microdata", "Bootstrap"],
    metrics: [
      { label: "Purpose", value: "Recipe Publishing & CMS" },
      { label: "SEO", value: "Schema.org Recipe Tags" },
      { label: "Engagement", value: "Comments & Ratings" }
    ],
    features: [
      "Custom markdown and rich-text recipe editor with automatic step-by-step formatting.",
      "Schema.org Recipe structured data integration for Google rich snippets and search ranking.",
      "Reader review system with verified ratings, ingredient checklist interactions, and comments.",
      "High-speed server-rendered pages with image compression for fast loading."
    ],
    techStack: {
      backend: ["PHP", "MySQL", "Custom MVC / CMS Architecture"],
      frontend: ["JavaScript", "HTML5", "Bootstrap", "CSS3"],
      infrastructure: ["Apache Server", "cPanel / VPS"]
    }
  }
];

export const featuredProjects = projects.filter(p => p.featured).sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
