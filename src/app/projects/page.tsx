import React from "react";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/navigation";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsView } from "./projects-view";

export const metadata: Metadata = {
  title: "Production Projects & Platforms | Abdullrazak Mohammed Mojahed",
  description:
    "10 production software systems, web platforms, and REST APIs built with Laravel, NestJS, and React by Abdullrazak Mohammed Mojahed.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  keywords: [
    "Abdullrazak Mohammed Mojahed Projects",
    "مشاريع عبد الرزاق مجاهد",
    "Crunchy Fruits",
    "كرانشي فروتس",
    "Alpha Clinic AI",
    "الفا كلينك",
    "Sunrise IT Center",
    "مركز صن رايز",
    "Zain-Aldar",
    "زين الدار",
    "Noqati",
    "نقاطي",
    "Namir Agency",
    "وكالة نمير",
    "Darak Real Estate",
    "دارك للعقارات",
    "Talklink",
    "Bearshop",
    "Food Blogger",
    "Laravel Projects Syria",
    "React Web Applications"
  ],
  openGraph: {
    title: "Projects Showcase | Abdullrazak Mohammed Mojahed",
    description:
      "Explore 10 production projects including Alpha Clinic AI, Crunchy Fruits (20K+ users), Sunrise IT apps, Zain-Aldar, and Noqati.",
    url: `${siteConfig.url}/projects`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Abdullrazak Mohammed Mojahed - Projects Showcase",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 pb-24">
      {/* Header */}
      <SectionHeading
        badge="Portfolio Showcase"
        title="Production Platforms & Systems"
        description="A comprehensive gallery of real-world web applications, back-end APIs, and real-time platforms engineered for commercial and institutional clients."
      />

      {/* Interactive Grid & Filters */}
      <ProjectsView initialProjects={projects} />
    </div>
  );
}
