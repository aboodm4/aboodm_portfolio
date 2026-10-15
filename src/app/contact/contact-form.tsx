"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/personal";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    // Prepare mailto link as fallback
    const subjectEncoded = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    try {
      // Trigger user's email client
      window.location.href = mailtoUrl;
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Could not open email client automatically. Please use the direct email link.");
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs">
      <h3 className="font-heading text-xl font-bold text-navy-950 dark:text-white mb-2">
        Send a Message
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
        Fill out the form below to connect directly. This will format your message and open your preferred email client.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Email client launched!</p>
            <p className="text-xs mt-0.5 opacity-90">
              If your client did not launch, click below to email directly:{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="underline font-mono"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Your Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-750 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-750 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project collaboration / Engineering role"
            className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-750 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timeline, or engineering opportunity..."
            className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-750 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 resize-y"
          />
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:opacity-60 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send via Email Client</span>
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 py-2 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Or open mailto link directly</span>
          </a>
        </div>
      </form>
    </div>
  );
}
