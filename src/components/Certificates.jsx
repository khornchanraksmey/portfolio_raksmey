import React, { useState } from "react";
import { certificatesData } from "../data/certificates";
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Hash, 
  Sparkles,
  Layers,
  Copy,
  Check
} from "lucide-react";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    "All",
    "AI & Machine Learning",
    "Data Science & Analytics",
    "Programming & Foundations",
    "Business Intelligence",
  ];

  const filteredCerts = activeCategory === "All" 
    ? certificatesData 
    : certificatesData.filter(c => c.category === activeCategory);

  const handleCopyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Brand icons / badges
  const renderOrgLogo = (icon, issuer) => {
    switch(icon) {
      case "google":
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>
        );
      case "ibm":
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 font-black tracking-widest text-xs">
            IBM
          </div>
        );
      case "umich":
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00274C] border border-[#ffcb05]/40 text-[#FFCB05] font-black text-sm shadow-sm">
            M
          </div>
        );
      case "udemy":
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/80 text-violet-600 dark:text-violet-400 font-bold text-xs">
            U
          </div>
        );
      case "asean":
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
            ASEAN
          </div>
        );
      default:
        return (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
            <Award className="h-5 w-5" />
          </div>
        );
    }
  };

  return (
    <section id="certificates" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
              <Award className="h-3.5 w-3.5" />
              <span>05 // CREDENTIALS &amp; LICENSES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Certificates &amp; Specializations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Verified certifications from Google, IBM, University of Michigan, Coursera, and ASEAN Secretariat with verified credential IDs and direct validation links.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 self-start md:self-auto px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
            <CheckCircle2 className="h-3.5 w-3.5 text-teal-500" />
            <span>9 Verified Credentials</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === cat
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {cat}
              {cat === "All" && ` (${certificatesData.length})`}
            </button>
          ))}
        </div>

        {/* LinkedIn-Style Credentials Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col justify-between rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/50 dark:hover:border-zinc-700 transition-all"
            >
              <div>
                {/* Top Row: Logo + Titles */}
                <div className="flex items-start gap-3.5">
                  {renderOrgLogo(cert.icon, cert.issuer)}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                    </div>

                    <p className="mt-0.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {cert.issuer}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Issued {cert.issueDate}</span>
                        {cert.expiresDate && (
                          <span> · Expires {cert.expiresDate}</span>
                        )}
                      </span>

                      <span className="inline-flex items-center gap-1 rounded bg-teal-50 px-1.5 py-0.5 text-[11px] font-medium text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200/50 dark:border-teal-900/40">
                        {cert.platform}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Credential ID Row (LinkedIn Style) */}
                {cert.credentialId && (
                  <div className="mt-3.5 flex items-center justify-between rounded-md bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 truncate">
                      <Hash className="h-3 w-3 text-zinc-400 shrink-0" />
                      <span className="font-mono text-[11px] truncate">
                        Credential ID: <span className="font-semibold text-zinc-800 dark:text-zinc-200">{cert.credentialId}</span>
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyId(cert.credentialId)}
                      title="Copy Credential ID"
                      className="ml-2 inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors shrink-0"
                    >
                      {copiedId === cert.credentialId ? (
                        <>
                          <Check className="h-3 w-3 text-teal-500" />
                          <span className="text-teal-600 dark:text-teal-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mt-3.5">
                    <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Skills:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action: Show Credential on Coursera/Udemy/Issuer */}
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  {cert.category}
                </span>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
                >
                  <span>Show credential</span>
                  <ExternalLink className="h-3 w-3 text-zinc-400 dark:text-zinc-400 group-hover:text-teal-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
