import React, { useState } from 'react';
import { 
  ArrowDown, 
  FileText, 
  Github, 
  Linkedin, 
  Send, 
  Mail, 
  Sparkles,
  Database,
  Brain,
  Code2,
  Terminal,
  User,
  Download
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero({ onOpenResume }) {
  const [imgError, setImgError] = useState(false);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Clean Ambient Soft Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[380px] w-[540px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[100px] dark:bg-teal-400/10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Flex: Text on Left, Avatar Image on Right */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          
          {/* Left Column: Intro & Info */}
          <div className="flex-1">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-3 py-1 text-xs font-medium text-teal-800 dark:border-teal-900/60 dark:bg-teal-950/40 dark:text-teal-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
              </span>
              <span>{profileData.status}</span>
            </div>

            {/* Hero Title & Greeting */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50">
                Hi, I'm <span className="text-teal-600 dark:text-teal-400">{profileData.name}</span> 👋
              </h1>
              <p className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-700 dark:text-zinc-300">
                {profileData.headline}
              </p>
            </div>

            {/* Brief Intro Description */}
            <div className="mt-5 max-w-xl">
              <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                {profileData.shortBio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400 transition-colors"
              >
                <span>View Projects</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="/Khorn_Chanraksmey_Resume.pdf"
                download="Khorn_Chanraksmey_Resume.pdf"
                onClick={(e) => {
                  // Open preview modal as well
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
                title="Download CV (PDF)"
              >
                <Download className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social / Direct Connect Links */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profileData.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
                  title="Telegram Direct Message"
                >
                  <Send className="h-3.5 w-3.5 text-sky-500" />
                  <span>Telegram</span>
                </a>

                <a
                  href={profileData.socials.email}
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
                  title="Send Direct Email"
                >
                  <Mail className="h-3.5 w-3.5 text-rose-500" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image / Avatar */}
          <div className="flex flex-col items-center sm:items-start md:items-center shrink-0">
            <div className="relative group">
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-2xl p-1 border-2 border-zinc-200 bg-white shadow-md dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden group-hover:border-teal-500 transition-colors">
                {!imgError ? (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.fullName}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-teal-600 dark:text-teal-400">
                    <User className="h-16 w-16 mb-2 opacity-80" />
                    <span className="font-mono text-xs font-semibold text-zinc-600 dark:text-zinc-300">Khorn Chanraksmey</span>
                    <span className="text-[10px] font-mono text-zinc-400">DATA SCIENCE</span>
                  </div>
                )}
              </div>

              <div className="absolute -bottom-2 -right-2 rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-mono font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Active</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Stat Cards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-lg border border-zinc-200 bg-white/70 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 mb-1">
              <Brain className="h-4 w-4" />
              <span className="text-xs font-mono font-medium uppercase text-zinc-500 dark:text-zinc-400">Focus</span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">AI &amp; Machine Learning</p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white/70 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-mono font-medium uppercase text-zinc-500 dark:text-zinc-400">Analytics</span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Power BI &amp; DAX</p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white/70 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <Database className="h-4 w-4" />
              <span className="text-xs font-mono font-medium uppercase text-zinc-500 dark:text-zinc-400">Data</span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">PostgreSQL &amp; MySQL</p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white/70 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
              <Code2 className="h-4 w-4" />
              <span className="text-xs font-mono font-medium uppercase text-zinc-500 dark:text-zinc-400">Code</span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Python &amp; C++</p>
          </div>
        </div>

      </div>
    </section>
  );
}
