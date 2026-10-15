import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { ProfilePhoto } from "@/components/profile-photo";
import { SectionHeading } from "@/components/section-heading";
import {
  GraduationCap,
  Languages,
  ArrowRight,
  CheckCircle2,
  Server,
  Layout,
  Terminal,
  Cpu,
  MapPin,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Abdullrazak Mohammed Mojahed",
  description:
    "Bio, technical skillsets, education at Damascus University, and engineering practices of Abdullrazak Mohammed Mojahed.",
  openGraph: {
    title: "About Abdullrazak Mohammed Mojahed | Full-Stack Developer",
    description:
      "Software Engineering student at Damascus University, full-stack engineer with expertise in Laravel, NestJS, and React.",
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  backend: <Server className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  frontend: <Layout className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  practices: <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  other: <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 sm:space-y-24 pb-24">
      {/* Bio Header Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Avatar & Quick Info */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
          <div className="p-2.5 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-md">
            <ProfilePhoto size="lg" />
          </div>

          <div className="w-full space-y-3 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs text-xs font-mono">
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-navy-800">
              <span className="text-slate-500 dark:text-slate-400">Location</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-500" />
                {personalInfo.location}
              </span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-navy-800">
              <span className="text-slate-500 dark:text-slate-400">University</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Damascus University
              </span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-navy-800">
              <span className="text-slate-500 dark:text-slate-400">Degree</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                B.Sc. Software Eng.
              </span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-slate-500 dark:text-slate-400">Graduation</span>
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                Expected 2027
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="w-full text-center py-3 px-4 rounded-xl font-heading text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-colors"
          >
            Start a Conversation
          </Link>
        </div>

        {/* Right Column: Bio Narrative */}
        <div className="lg:col-span-8 space-y-6">
          <SectionHeading
            badge="Biography"
            title="Full-Stack Engineer with a Strong Foundation in Systems"
            description="Engineering software that combines clean architectural discipline with measurable user impact."
          />

          <div className="space-y-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Key Specializations Quick List */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white">
                  Back-End Scalability
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Extensive REST API design with Laravel and NestJS, database schema indexing, Redis caching.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white">
                  Financial Integrations
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Idempotent payment webhooks for Stripe & PayPal with signature validation and error retries.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white">
                  Interactive Front-Ends
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Modern React 18/19 components, responsive layouts, accessible navigation, fast rendering.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white">
                  DevOps & Server Admin
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Linux server deployment (Nginx/Apache, VPS), CI/CD pipelines, SSL configuration, queue workers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grouped Section */}
      <section className="space-y-10" aria-label="Skills & Competencies">
        <SectionHeading
          badge="Capabilities"
          title="Grouped Technical Skills"
          description="A complete inventory of tools, languages, frameworks, and engineering standards I employ in production."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800/90 shadow-xs hover:border-teal-500/40 dark:hover:border-teal-400/40 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-800">
                  {categoryIcons[category.id] || <Terminal className="w-5 h-5 text-teal-500" />}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills Pill Grid */}
              <div className="mt-5 space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-xl border transition-all ${
                      skill.highlight
                        ? "bg-slate-50/80 dark:bg-navy-850/80 border-slate-200 dark:border-navy-750"
                        : "bg-transparent border-slate-100 dark:border-navy-800/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-heading font-semibold text-sm text-navy-900 dark:text-slate-200">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-teal-500/10 text-teal-700 dark:text-teal-300">
                          Primary
                        </span>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Languages Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-label="Education & Languages">
        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Academic Background
              </span>
              <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white">
                Education
              </h3>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <h4 className="font-heading text-lg font-bold text-navy-950 dark:text-white">
                {personalInfo.education.degree}
              </h4>
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400 mt-0.5">
                {personalInfo.education.institution} • {personalInfo.education.location}
              </p>
              <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-teal-500" />
                <span>{personalInfo.education.period} ({personalInfo.education.expectedYear})</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside leading-relaxed pt-2">
              {personalInfo.education.details.map((detail, idx) => (
                <li key={idx} className="marker:text-teal-500">
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Languages Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Communication
              </span>
              <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white">
                Languages
              </h3>
            </div>
          </div>

          <div className="space-y-5 pt-2">
            {personalInfo.languages.map((lang) => (
              <div
                key={lang.name}
                className="p-4 rounded-xl bg-slate-50 dark:bg-navy-850/80 border border-slate-100 dark:border-navy-800"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-base text-navy-900 dark:text-white">
                    {lang.name}
                  </span>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                    {lang.level}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {lang.description}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-navy-800/40 border border-teal-100 dark:border-navy-750 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-navy-900 dark:text-slate-200">Bilingual Readiness:</strong> Experienced in engineering applications with multi-locale architectures, bidirectional text layouts (RTL Arabic & LTR English), and localized date/currency formatting.
            </div>
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-8 rounded-3xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
        <div>
          <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white">
            Explore My Career Journey
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            See the chronological vertical timeline of all 10 roles and production systems.
          </p>
        </div>
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-colors shrink-0"
        >
          <span>View Experience Timeline</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
