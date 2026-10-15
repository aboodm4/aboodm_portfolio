import React from "react";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsView } from "./projects-view";

export const metadata: Metadata = {
  title: "Projects | Abdullrazak Mohammed Mojahed",
  description:
    "Production software systems, web platforms, and REST APIs built with Laravel, NestJS, and React by Abdullrazak Mohammed Mojahed.",
  openGraph: {
    title: "Projects Showcase | Abdullrazak Mohammed Mojahed",
    description:
      "Explore 10 production projects including Alpha Clinic AI, Crunchy Fruits (20K+ users), Sunrise IT apps, Zain-Aldar, and Noqati.",
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
