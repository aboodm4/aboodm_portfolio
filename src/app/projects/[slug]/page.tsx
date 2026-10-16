import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  Server,
  Layout,
  Cpu,
  CheckCircle2,
  Share2,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const projectUrl = `${siteConfig.url}/projects/${project.slug}`;

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: `${project.shortDescription} Developed by Abdullrazak Mohammed Mojahed.`,
    keywords: [
      project.title,
      project.subtitle,
      project.category,
      ...project.tags,
      ...project.techStack.backend,
      ...project.techStack.frontend,
      "Abdullrazak Mohammed Mojahed",
      "Abdullrazak Mojahed",
      "Abdulrazak Mojahed",
      "عبد الرزاق محمد مجاهد",
      "عبد الرزاق مجاهد",
      "Full-Stack Developer",
      "Case Study"
    ],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} - ${project.subtitle} | Abdullrazak Mohammed Mojahed`,
      description: project.shortDescription,
      url: projectUrl,
      type: "article",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Case Study by Abdullrazak Mohammed Mojahed`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${project.subtitle} | Abdullrazak Mohammed Mojahed`,
      description: project.shortDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and prev projects for easy navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    headline: project.subtitle,
    description: project.longDescription,
    applicationCategory: project.category,
    operatingSystem: "Web Browser",
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Abdullrazak Mohammed Mojahed",
      url: siteConfig.url,
      sameAs: ["https://www.linkedin.com/in/abdullrazak-moj"]
    },
    creator: {
      "@type": "Person",
      name: "Abdullrazak Mohammed Mojahed"
    },
    keywords: project.tags.join(", "),
    ...(project.liveUrl ? { installUrl: project.liveUrl } : {})
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded py-1 px-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-colors"
          >
            <span>Visit Live Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Project Header */}
      <header className="space-y-4 border-b border-slate-200 dark:border-navy-800 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-700">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
              <Sparkles className="w-3 h-3 text-teal-500" />
              Featured Deployment
            </span>
          )}
          {project.status && (
            <span className="px-3 py-1 rounded-full text-xs font-mono text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
              {project.status}
            </span>
          )}
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-950 dark:text-white">
          {project.title}
        </h1>

        <p className="font-heading text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
          {project.subtitle}
        </p>

        {/* Role & Period Info */}
        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            <span className="text-slate-400 dark:text-slate-500">My Role:</span>{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {project.role}
            </span>
          </div>
          <div>
            <span className="text-slate-400 dark:text-slate-500">Timeline:</span>{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {project.period}
            </span>
          </div>
        </div>
      </header>

      {/* Metrics Banner */}
      {project.metrics && project.metrics.length > 0 && (
        <section aria-label="Key Project Metrics">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3">
                <div className="font-heading text-2xl font-bold text-teal-700 dark:text-teal-400">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Overview & Architecture Narrative */}
      <section className="space-y-4" aria-label="Project Overview">
        <h2 className="font-heading text-2xl font-bold text-navy-950 dark:text-white">
          Architecture Overview
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
          <p>{project.longDescription}</p>
        </div>
      </section>

      {/* Key Deliverables & Features */}
      <section className="space-y-4" aria-label="Implementation Features">
        <h2 className="font-heading text-2xl font-bold text-navy-950 dark:text-white">
          Key Features & Technical Implementations
        </h2>
        <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs">
          <ul className="space-y-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Detailed Tech Stack Breakdown */}
      <section className="space-y-4" aria-label="Technology Stack Breakdown">
        <h2 className="font-heading text-2xl font-bold text-navy-950 dark:text-white">
          Technologies & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Backend */}
          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-3">
            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-heading font-semibold text-sm">
              <Server className="w-4 h-4" />
              <span>Back-End</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.backend.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-navy-850 text-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-3">
            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-heading font-semibold text-sm">
              <Layout className="w-4 h-4" />
              <span>Front-End</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.frontend.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-navy-850 text-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-3">
            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-heading font-semibold text-sm">
              <Cpu className="w-4 h-4" />
              <span>Infrastructure</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.infrastructure.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-navy-850 text-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Prev / Next Navigation */}
      <footer className="pt-8 border-t border-slate-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col items-start p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-navy-900 transition-colors"
          >
            <span className="text-[11px] font-mono text-slate-400">← Previous Project</span>
            <span className="font-heading font-bold text-sm text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col items-end p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-navy-900 transition-colors text-right"
          >
            <span className="text-[11px] font-mono text-slate-400">Next Project →</span>
            <span className="font-heading font-bold text-sm text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
              {nextProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </div>
  );
}
