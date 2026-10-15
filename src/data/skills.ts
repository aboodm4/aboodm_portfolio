export interface SkillItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Back-end Engineering",
    subtitle: "Core architectural strength in enterprise REST APIs and database modeling",
    skills: [
      { name: "Laravel (REST API)", highlight: true, description: "v10 - v12, RBAC, Queues, Events, API Resources" },
      { name: "NestJS (REST API)", highlight: true, description: "TypeScript, Modules, Guards, Interceptors, Microservices" },
      { name: "PHP", highlight: true, description: "Modern PHP 8.x, Strict Typing, Metaprogramming" },
      { name: "Node.js", highlight: true, description: "Asynchronous runtime, Event Loop, REST & Socket architectures" },
      { name: "OOP", highlight: false, description: "SOLID principles, Domain-Driven Design, Design Patterns" },
      { name: "MySQL", highlight: true, description: "Schema indexing, Query optimization, Transactions" },
      { name: "PostgreSQL", highlight: true, description: "Advanced relational models, JSONB, Performance tuning" },
    ]
  },
  {
    id: "frontend",
    title: "Front-end Development",
    subtitle: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "React", highlight: true, description: "v18 & v19, Hooks, State Management, Server Components" },
      { name: "Tailwind CSS", highlight: true, description: "Design systems, responsive utilities, dark mode" },
      { name: "JavaScript (ES6+)", highlight: true, description: "Modern JS features, Async/Await, Web APIs" },
      { name: "HTML5 & Semantic Web", highlight: false, description: "Accessible markup, SEO, ARIA specifications" },
      { name: "CSS3 / Sass", highlight: false, description: "Modern layouts (Flexbox, Grid), Animations, Preprocessing" },
      { name: "Bootstrap", highlight: false, description: "Rapid UI layout, grid systems, admin dashboards" },
      { name: "jQuery", highlight: false, description: "DOM manipulation and legacy system maintenance" },
    ]
  },
  {
    id: "practices",
    title: "Engineering Practices & DevOps",
    subtitle: "Production deployment, automated testing, security, and payment integrations",
    skills: [
      { name: "Linux Server Admin", highlight: true, description: "Nginx / Apache configuration, VPS management, SSL/TLS" },
      { name: "Stripe & PayPal Webhooks", highlight: true, description: "Idempotent payment flows, webhook signature verification" },
      { name: "Clean Architecture", highlight: true, description: "Separation of concerns, repository patterns, DTOs" },
      { name: "System Design Fundamentals", highlight: true, description: "Caching layers (Redis), rate-limiting, database sharding" },
      { name: "PHPUnit & Feature Tests", highlight: true, description: "End-to-end API test suites, regression prevention" },
      { name: "REST API Testing", highlight: false, description: "Postman, Newman, automated integration tests" },
      { name: "Docker & CI/CD Basics", highlight: false, description: "Containerization, GitHub Actions, automated pipelines" },
    ]
  },
  {
    id: "other",
    title: "Languages & Mobile Tech",
    subtitle: "Cross-platform development and multi-language toolsets",
    skills: [
      { name: "Dart & Flutter", highlight: true, description: "Cross-platform mobile applications, state management" },
      { name: "Git, GitHub & GitLab", highlight: true, description: "Trunk-based development, PR reviews, merge strategies" },
      { name: "Python", highlight: false, description: "Scripting, automation, data handling" },
      { name: "Java", highlight: false, description: "Academic and enterprise OOP foundations" },
      { name: "C++", highlight: false, description: "Low-level memory management, data structures" },
      { name: "C#", highlight: false, description: ".NET fundamentals, object-oriented paradigms" },
    ]
  }
];
