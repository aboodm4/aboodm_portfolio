import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { navLinks } from "@/data/navigation";
import { Mail, Phone, MapPin, ArrowUpRight, Code2 } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-navy-800 bg-slate-50 dark:bg-navy-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Pitch */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-heading font-bold text-lg text-navy-800 dark:text-white group"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white text-xs font-bold">
                AM
              </div>
              <span>Abdullrazak Mohammed Mojahed</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer specializing in resilient back-ends (Laravel, NestJS) and reactive modern front-ends (React). Based in Damascus, Syria.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                Damascus University (B.Sc. 2027)
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <LinkedInIcon className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>LinkedIn ({personalInfo.socials.linkedinDisplay})</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          {/* <div className="flex items-center gap-2">
            <span>Built with Next.js App Router, TypeScript & Tailwind CSS</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
