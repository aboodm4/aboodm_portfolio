import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { featuredProjects } from "@/data/projects";
import { ProfilePhoto } from "@/components/profile-photo";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowRight,
  Code2,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero Section */}
      <section
        className="relative pt-12 md:pt-20 lg:pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Introduction"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Full-Stack Developer • Based in {personalInfo.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-navy-950 dark:text-white leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 dark:from-teal-400 dark:via-teal-300 dark:to-teal-200 bg-clip-text text-transparent">
                {personalInfo.preferredName}
              </span>
              .
            </h1>

            {/* One-line Pitch */}
            <p className="font-heading text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
              {personalInfo.pitch}
            </p>

            {/* Short Bio summary */}
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Software Engineering student at Damascus University (B.Sc. 2027) with deep production experience building high-volume platforms, webhook integrations, and multi-tenant applications using Laravel, NestJS, and React.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 shadow-md shadow-teal-700/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 hover:border-teal-500/60 dark:hover:border-teal-400/60 hover:text-teal-600 dark:hover:text-teal-300 shadow-xs transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <span>Contact Me</span>
              </Link>

              <Link
                href="/experience"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
              >
                <span>Full Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Core Tech Stack Mini Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="text-slate-400 dark:text-slate-500 font-sans">Core focus:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-850 border border-slate-200/80 dark:border-navy-750 text-slate-700 dark:text-slate-300">
                Laravel 12
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-850 border border-slate-200/80 dark:border-navy-750 text-slate-700 dark:text-slate-300">
                NestJS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-850 border border-slate-200/80 dark:border-navy-750 text-slate-700 dark:text-slate-300">
                React 19
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-850 border border-slate-200/80 dark:border-navy-750 text-slate-700 dark:text-slate-300">
                Redis & MySQL
              </span>
            </div>
          </div>

          {/* Right Column: Profile Photo / Initials Fallback Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle Teal Glow Aura */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-teal-600/20 to-navy-700/20 rounded-3xl blur-xl group-hover:blur-2xl opacity-75 transition-all duration-500"
                aria-hidden="true"
              />

              <div className="relative p-3 bg-white/70 dark:bg-navy-900/80 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-navy-800 shadow-xl">
                <ProfilePhoto size="xl" priority />

                {/* Overlay Badge */}
                <div className="mt-4 p-3 rounded-2xl bg-slate-50/90 dark:bg-navy-950/90 border border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs">
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-navy-900 dark:text-white">
                      Abdullrazak Mojahed
                    </span>
                    <span className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">
                      Damascus University
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    B.Sc. 2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Key Stats Section */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Verified Project Highlights"
      >
        <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-white shadow-2xl border border-navy-700/80 overflow-hidden">
          {/* Subtle decorative grid/glow */}
          <div
            className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-700/70 pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
                  Proven Production Impact
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                  Real numbers from real deployments
                </h2>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Damascus & International Projects
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-navy-850/60 border border-navy-700/60 flex flex-col justify-between">
                <div>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-teal-300 tracking-tight">
                    20,000+
                  </div>
                  <div className="font-heading text-sm font-semibold text-white mt-1">
                    Users on Crunchy Fruits
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Syria&apos;s 1st freeze-dried fruits platform, handling peak surges with zero downtime.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-850/60 border border-navy-700/60 flex flex-col justify-between">
                <div>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-teal-300 tracking-tight">
                    1,500+
                  </div>
                  <div className="font-heading text-sm font-semibold text-white mt-1">
                    Orders Processed
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Automated cart, inventory checkout, and SMS fulfillment workflows.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-850/60 border border-navy-700/60 flex flex-col justify-between">
                <div>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-teal-300 tracking-tight">
                    7+
                  </div>
                  <div className="font-heading text-sm font-semibold text-white mt-1">
                    Production Apps at Sunrise IT
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Delivery logistics, virtual schools, and Stripe/PayPal webhook architectures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
        aria-label="Featured Projects"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            badge="Selected Work"
            title="Featured Projects"
            description="A selection of high-impact platforms architected for scalability, reliability, and smooth user experiences."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors self-start sm:self-auto shrink-0"
          >
            <span>Browse all 10 projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featuredBadge />
          ))}
        </div>
      </section>

      {/* Engineering Pillars / What I Bring */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
        aria-label="Engineering Capabilities"
      >
        <SectionHeading
          badge="Architecture & Philosophy"
          title="Engineered for Scalability & Integrity"
          description="Every layer of the application is crafted with maintainability, type safety, and real-world durability in mind."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-navy-900 dark:text-white">
              Robust Back-End Core
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Laravel (v10-v12) and NestJS architectures featuring clean DTOs, repository patterns, relational schema normalization (MySQL, PostgreSQL), and Redis caching.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-navy-900 dark:text-white">
              Reactive User Experiences
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern React interfaces built with accessibility, responsive breakpoints, fast client-side state transitions, and bilingual layout preparedness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-navy-900 dark:text-white">
              Production Reliability
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Linux VPS administration, Nginx reverse proxy configuration, idempotent payment webhooks (Stripe, PayPal), and PHPUnit test suites.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Call to action"
      >
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-100 dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-heading text-2xl font-bold text-navy-900 dark:text-white">
              Interested in collaborating or discussing a project?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              I am open to full-time engineering roles, freelance software architecture, and consulting engagements worldwide.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-heading text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              Get In Touch
            </Link>
            <Link
              href="/about"
              className="px-5 py-3 rounded-xl font-heading text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-navy-800 transition-colors"
            >
              Read Full Bio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
