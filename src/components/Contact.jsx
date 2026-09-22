import React, { useState } from "react";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  Phone,
  Globe
} from "lucide-react";
import { profileData } from "../data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Have a project, question, or opportunity? Feel free to reach out directly through any of the channels below.
          </p>
        </div>

        {/* 6 Direct Contact Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Email Card with Copy button */}
          <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-rose-500 dark:border-zinc-700 dark:bg-zinc-800">
                <Mail className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Email</p>
                <a
                  href={profileData.socials.email}
                  className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate block"
                >
                  {profileData.email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="shrink-0 rounded p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
              title="Copy email to clipboard"
              aria-label="Copy email"
            >
              {copied ? <Check className="h-4 w-4 text-teal-500" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-emerald-500 dark:border-zinc-700 dark:bg-zinc-800">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Phone</p>
                <a
                  href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                  className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 shrink-0">Phnom Penh</span>
          </div>

          {/* LinkedIn */}
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-blue-600 dark:border-zinc-700 dark:bg-zinc-800">
                <Linkedin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">LinkedIn</p>
                <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  {profileData.fullName}
                </p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors" />
          </a>

          {/* Telegram */}
          <a
            href={profileData.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-sky-500 dark:border-zinc-700 dark:bg-zinc-800">
                <Send className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Telegram</p>
                <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  t.me/reaksmey
                </p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors" />
          </a>

          {/* Website Domain */}
          <a
            href={profileData.socials.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-teal-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-teal-400">
                <Globe className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Portfolio Domain</p>
                <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 truncate">
                  khornchanraksmey.vercel.app
                </p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors" />
          </a>

          {/* GitHub */}
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                <Github className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">GitHub</p>
                <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  github.com/reaksmey
                </p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors" />
          </a>

        </div>

      </div>
    </section>
  );
}
