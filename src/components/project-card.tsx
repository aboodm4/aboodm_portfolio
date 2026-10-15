import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featuredBadge?: boolean;
}

export function ProjectCard({ project, featuredBadge = false }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col bg-white dark:bg-navy-900/90 rounded-2xl border border-slate-200/90 dark:border-navy-800/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all duration-300">
      {/* Top Meta: Category & Live link / Featured */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-navy-700">
            {project.category}
          </span>
          {featuredBadge && project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
              <Sparkles className="w-3 h-3 text-teal-500" />
              Featured
            </span>
          )}
        </div>

        {/* Live link if available */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label={`Visit live website for ${project.title}`}
            title="Open live site"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Title & Subtitle */}
      <div className="mb-3">
        <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          <Link
            href={`/projects/${project.slug}`}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
          {project.subtitle} • {project.period}
        </p>
      </div>

      {/* Short Description */}
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-1">
        {project.shortDescription}
      </p>

      {/* Metrics pill if available */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-3 px-3 mb-5 rounded-xl bg-slate-50/80 dark:bg-navy-950/60 border border-slate-100 dark:border-navy-800/80">
          {project.metrics.slice(0, 3).map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-heading text-xs font-bold text-teal-700 dark:text-teal-400 truncate">
                {metric.value}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-850 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-navy-750"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Action: View Details */}
      <div className="pt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between text-xs font-medium">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-400 group-hover:translate-x-1 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded py-0.5"
          aria-label={`Read case study and architecture for ${project.title}`}
        >
          <span>Explore project details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {project.liveUrl && (
          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Live Platform
          </span>
        )}
      </div>
    </article>
  );
}
