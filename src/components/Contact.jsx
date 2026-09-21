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
  MapPin,
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
          <span>06 // INQUIRIES</span>
        </div>

        <div className="max-w-2xl">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Let's Connect
            </h2>
            <blockquote className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              "I am a Data Science student at the Institute of Technology of Cambodia with skills in Python, Machine Learning, Power BI, and Database Management. Passionate about data analysis and applying technical skills to real-world projects."
            </blockquote>
          </div>

          {/* Direct Contact Cards */}
          <div className="space-y-3 pt-6">
            
            {/* Email Card with Copy button */}
            <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3.5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-rose-500 dark:border-zinc-700 dark:bg-zinc-800">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Email</p>
                  <a
                    href={profileData.socials.email}
                    className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors break-all"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="rounded p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3.5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-emerald-500 dark:border-zinc-700 dark:bg-zinc-800">
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
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">Phnom Penh</span>
            </div>

            {/* Website Domain */}
            <a
              href={profileData.socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3.5 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-teal-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-teal-400">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Portfolio Domain</p>
                  <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    khornchanraksmey.vercel.app
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3.5 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-blue-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">LinkedIn</p>
                  <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    Khornchanraksmey
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
              className="group flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-3.5 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-sky-500 dark:border-zinc-700 dark:bg-zinc-800">
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

          </div>
        </div>

      </div>
    </section>
  );
}