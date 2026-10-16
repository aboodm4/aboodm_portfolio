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
  ogImage: "https://aboodm.com/og.jpg",
  description: "Portfolio of Abdullrazak Mohammed Mojahed — Full-Stack Developer specializing in Laravel, NestJS, and React. Based in Damascus, Syria.",
  author: "Abdullrazak Mohammed Mojahed",
  locale: "en_US",
  keywords: [
    // Name variations (English & Arabic)
    "Abdullrazak Mohammed Mojahed",
    "Abdullrazak Mojahed",
    "Abdulrazak Mojahed",
    "Abdulrazak Mohammed Mojahed",
    "Abood Mojahed",
    "aboodm",
    "aboodm.com",
    "aboodm4",
    "moj",
    "abdullrazak moj",
    "abdulrazak moj",
    "عبد الرزاق محمد مجاهد",
    "عبدالرزاق محمد مجاهد",
    "عبد الرزاق مجاهد",
    "عبدالرزاق مجاهد",
    "عبود مجاهد",
    "مهندس عبد الرزاق مجاهد",
    "المهندس عبد الرزاق مجاهد",
    "المهندس عبدالرزاق مجاهد",

    // Roles & Titles
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "Laravel Developer",
    "NestJS Developer",
    "React Developer",
    "Back-end Developer",
    "مطور Full Stack",
    "مطور لارافيل",
    "مطور NestJS",
    "مطور ريآكت",
    "مهندس برمجيات",
    "مبرمج سوري دمشق",

    // Geographic & Education
    "Damascus Syria Software Engineer",
    "Syria Web Developer",
    "Damascus University Software Engineering",
    "هندسة برمجيات جامعة دمشق",
    "مطور مواقع دمشق سوريا",

    // Projects & Platforms
    "Crunchy Fruits",
    "كرانشي فروتس",
    "متجر فواكه مجففة سوريا",
    "Alpha Clinic AI",
    "الفا كلينك",
    "نظام إدارة عيادات",
    "Sunrise IT Center",
    "مركز صن رايز",
    "Zain-Aldar",
    "زين الدار",
    "عقارات دمشق زين الدار",
    "Noqati",
    "نقاطي",
    "noqati.aboodm.com",
    "حلقات تحفيظ القرآن دمشق",
    "Namir Agency",
    "وكالة نمير",
    "Darak Real Estate",
    "دارك للعقارات الشعلان",
    "Talklink",
    "Bearshop",
    "Food Blogger",

    // Tech Stack
    "TypeScript",
    "PHP 8",
    "Node.js",
    "Redis",
    "MySQL",
    "PostgreSQL",
    "REST API",
    "WebSockets",
    "Tailwind CSS"
  ]
};
