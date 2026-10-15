export interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", ariaLabel: "Navigate to Home page" },
  { label: "About", href: "/about", ariaLabel: "Navigate to About page" },
  { label: "Experience", href: "/experience", ariaLabel: "Navigate to Experience timeline" },
  { label: "Projects", href: "/projects", ariaLabel: "Navigate to Projects showcase" },
  { label: "Contact", href: "/contact", ariaLabel: "Navigate to Contact page" },
];

export const siteConfig = {
  name: "Abdullrazak Mohammed Mojahed",
  shortName: "Abdullrazak Mojahed",
  titleSuffix: "Full-Stack Developer",
  url: "https://aboodm.com",
  ogImage: "https://aboodm.com/og-image.png",
  description: "Portfolio of Abdullrazak Mohammed Mojahed — Full-Stack Developer specializing in Laravel, NestJS, and React. Based in Damascus, Syria.",
  author: "Abdullrazak Mohammed Mojahed",
  locale: "en_US",
  keywords: [
    "Abdullrazak Mohammed Mojahed",
    "Full-Stack Developer",
    "Laravel Developer",
    "NestJS Developer",
    "React Developer",
    "Damascus Syria Software Engineer",
    "Syria Web Developer",
    "Crunchy Fruits",
    "Alpha Clinic AI",
    "Sunrise IT Center",
    "TypeScript",
    "REST API"
  ]
};
