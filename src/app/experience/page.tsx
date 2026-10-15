import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience | Abdullrazak Mohammed Mojahed",
  description:
    "Vertical career timeline of 10 production roles and engineering engagements by Abdullrazak Mohammed Mojahed (Laravel, NestJS, React).",
  openGraph: {
    title: "Experience Timeline | Abdullrazak Mohammed Mojahed",
    description:
      "Full-stack and back-end roles across Alpha Clinic AI, Sunrise IT Center, Crunchy Fruits, Zain-Aldar, and more.",
  },
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 pb-24">
      {/* Page Header */}
      <SectionHeading
        badge="Career Progression"
        title="Engineering Experience Timeline"
        description="A chronological record of full-stack engineering roles, freelance platforms, and production systems built from 2022 to the present."
      />

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-slate-200 dark:border-navy-800 ml-4 sm:ml-8 md:ml-32 space-y-12 sm:space-y-16">
        {experiences.map((item, index) => {
          const isLatest = index === 0;

          return (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  isLatest
                    ? "bg-teal-500 border-white dark:border-navy-950 ring-4 ring-teal-500/20"
                    : "bg-white dark:bg-navy-900 border-teal-600 dark:border-teal-400"
                }`}
                aria-hidden="true"
              />

              {/* Date Callout for Desktop (Floated Left on larger screens) */}
              <div className="hidden md:block absolute -left-36 top-1 w-28 text-right font-mono text-xs font-semibold text-teal-700 dark:text-teal-400">
                {item.period}
              </div>

              {/* Timeline Card */}
              <article className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200/90 dark:border-navy-800/90 shadow-xs hover:shadow-lg hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all duration-300">
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-heading text-lg sm:text-xl font-bold text-navy-950 dark:text-white">
                      {item.role}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 font-normal">at</span>
                    <span className="font-heading text-lg sm:text-xl font-bold text-teal-700 dark:text-teal-400">
                      {item.company}
                    </span>
                  </div>

                  {/* Employment Type Badge */}
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-navy-700">
                      {item.employmentType}
                    </span>
                    {isLatest && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Most Recent
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile Period & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 pb-4 border-b border-slate-100 dark:border-navy-800/80">
                  <span className="flex items-center gap-1.5 md:hidden text-teal-700 dark:text-teal-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-500" />
                    {item.location}
                  </span>
                  {item.highlight && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                      {item.highlight}
                    </span>
                  )}
                </div>

                {/* Primary Description */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Bullet Points of Achievements */}
                {item.bulletPoints && item.bulletPoints.length > 0 && (
                  <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      Key Responsibilities & Outcomes:
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span className="leading-normal">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-850 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-navy-750"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Links (Live URL & Project Case Study) */}
                <div className="pt-4 border-t border-slate-100 dark:border-navy-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
                  <div className="flex items-center gap-4">
                    {item.projectSlug && (
                      <Link
                        href={`/projects/${item.projectSlug}`}
                        className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                      >
                        <span>View project details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>

                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <span>Visit Live Site ({item.liveUrl.replace("https://", "")})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA to Projects */}
      <section className="pt-8 text-center bg-slate-100 dark:bg-navy-900 rounded-2xl p-8 border border-slate-200 dark:border-navy-800 space-y-4">
        <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white">
          Looking for structured technical summaries?
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Explore the projects directory for architectural breakdowns, database stacks, and key implementation features.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-colors"
        >
          <span>Explore Projects Directory</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
