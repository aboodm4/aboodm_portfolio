import React from "react";
import type { Metadata } from "next";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "./contact-form";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Abdullrazak Mohammed Mojahed",
  description:
    "Get in touch with Abdullrazak Mohammed Mojahed for full-stack development, back-end API architecture, or consulting inquiries.",
  openGraph: {
    title: "Contact Abdullrazak Mohammed Mojahed",
    description:
      "Direct contact details: email, phone, location in Damascus, Syria, and LinkedIn profile.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 pb-24">
      {/* Header */}
      <SectionHeading
        badge="Direct Inquiry"
        title="Get in Touch"
        description="Whether you have an upcoming project, are seeking full-time engineering talent, or want to discuss scalable API architecture, I'd love to connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Details & Badges */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs hover:border-teal-500/60 dark:hover:border-teal-400/60 transition-all flex items-start gap-4 block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Email
                </span>
                <span className="font-heading font-semibold text-sm sm:text-base text-navy-950 dark:text-white truncate block group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {personalInfo.email}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                  Average response: &lt; 24 hours
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors shrink-0 mt-1" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="group p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs hover:border-teal-500/60 dark:hover:border-teal-400/60 transition-all flex items-start gap-4 block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Phone & WhatsApp
                </span>
                <span className="font-heading font-semibold text-sm sm:text-base text-navy-950 dark:text-white truncate block group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {personalInfo.phone}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                  Direct mobile call & WhatsApp
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors shrink-0 mt-1" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs hover:border-teal-500/60 dark:hover:border-teal-400/60 transition-all flex items-start gap-4 block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Professional Network
                </span>
                <span className="font-heading font-semibold text-sm sm:text-base text-navy-950 dark:text-white truncate block group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {personalInfo.socials.linkedinDisplay}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                  View recommendations & profile
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors shrink-0 mt-1" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="font-heading font-semibold text-sm sm:text-base text-navy-950 dark:text-white block">
                  {personalInfo.location}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-teal-500" />
                  Time Zone: GMT+3 (Arabia Standard Time)
                </span>
              </div>
            </div>
          </div>

          {/* Availability Box */}
          <div className="p-5 rounded-2xl bg-slate-100 dark:bg-navy-850 border border-slate-200 dark:border-navy-750 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Current Availability: Open
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Accepting contract roles, freelance full-stack architecture projects, and full-time software engineering opportunities.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
