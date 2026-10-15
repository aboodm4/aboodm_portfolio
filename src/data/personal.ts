export interface Education {
  degree: string;
  institution: string;
  period: string;
  expectedYear: string;
  location: string;
  details: string[];
}

export interface Language {
  name: string;
  level: string;
  description: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  context: string;
}

export interface SocialLinks {
  email: string;
  phone: string;
  linkedin: string;
  linkedinDisplay: string;
  location: string;
  github?: string;
}

export interface PersonalInfo {
  name: string;
  preferredName: string;
  initials: string;
  title: string;
  headline: string;
  pitch: string;
  bio: string[];
  location: string;
  email: string;
  phone: string;
  socials: SocialLinks;
  education: Education;
  languages: Language[];
  highlights: MetricHighlight[];
}

export const personalInfo: PersonalInfo = {
  name: "Abdullrazak Mohammed Mojahed",
  preferredName: "Abdullrazak Mojahed",
  initials: "AM",
  title: "Full-Stack Developer (Laravel, NestJS, React)",
  headline: "Full-Stack Software Engineer specializing in resilient back-ends, scalable REST APIs, and modern React interfaces.",
  pitch: "Architecting high-concurrency back-ends with Laravel and NestJS, paired with snappy, accessible front-ends in React.",
  location: "Damascus, Syria",
  email: "abdullrazak.moj@gmail.com",
  phone: "+963 967 778 931",
  socials: {
    email: "mailto:abdullrazak.moj@gmail.com",
    phone: "tel:+963967778931",
    linkedin: "https://www.linkedin.com/in/abdullrazak-moj",
    linkedinDisplay: "linkedin.com/in/abdullrazak-moj",
    location: "Damascus, Syria",
    github: "https://github.com",
  },
  bio: [
    "I am a passionate Full-Stack Developer and Software Engineering student at Damascus University with deep production experience building mission-critical web applications, high-throughput REST APIs, and real-time platforms.",
    "My core expertise centers around Laravel, NestJS, and React. Over the past several years, I have architected and deployed solutions ranging from Syria's first freeze-dried fruit e-commerce platform serving 20,000+ users, to AI-assisted clinic management systems, multi-tenant real estate portals, and 7+ production enterprise back-ends at Sunrise IT Center.",
    "I believe in clean architecture, defensive programming, automated testing, and thoughtful system design. When building software, I focus on scalable data schemas, Redis optimization, webhook reliability (Stripe, PayPal), and intuitive user experiences.",
    "Currently pursuing my B.Sc. in Software Engineering at Damascus University (graduating in 2027), I continuously balance theoretical foundations with real-world software engineering rigor."
  ],
  education: {
    degree: "B.Sc. in Software Engineering",
    institution: "Damascus University",
    period: "2022 – Present",
    expectedYear: "Expected 2027",
    location: "Damascus, Syria",
    details: [
      "Rigorous core curriculum in Algorithms, Advanced Data Structures, System Design, Database Systems, Object-Oriented Analysis & Design, and Distributed Systems.",
      "Hands-on academic projects combining software engineering methodologies, teamwork, design patterns, and formal verification."
    ]
  },
  languages: [
    {
      name: "Arabic",
      level: "Native",
      description: "Mother tongue, fluent in professional and technical contexts."
    },
    {
      name: "English",
      level: "Professional Working Proficiency",
      description: "Technical documentation, code reviews, international collaboration, and client communication."
    }
  ],
  highlights: [
    {
      value: "20,000+",
      label: "Users Served",
      context: "On Crunchy Fruits platform"
    },
    {
      value: "1,500+",
      label: "Orders Processed",
      context: "Syria's 1st freeze-dried fruits store"
    },
    {
      value: "7+",
      label: "Production Apps",
      context: "Engineered at Sunrise IT Center"
    },
    {
      value: "10+",
      label: "Production Systems",
      context: "Delivered across healthcare, e-commerce & real estate"
    }
  ]
};
