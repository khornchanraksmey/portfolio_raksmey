import React, { useState } from "react";
import { certificatesData } from "../data/certificates";
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Copy, 
  Check,
  ShieldCheck
} from "lucide-react";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "ai-ml", label: "AI & ML", match: "AI & Machine Learning" },
    { id: "data-science", label: "Data Science", match: "Data Science & Analytics" },
    { id: "programming", label: "Programming", match: "Programming & Foundations" },
    { id: "bi", label: "BI & Analytics", match: "Business Intelligence" },
  ];

  const filteredCerts = activeCategory === "all" 
    ? certificatesData 
    : certificatesData.filter(c => {
        const cat = categories.find(k => k.id === activeCategory);
        return cat && c.category === cat.match;
      });

  const handleCopyId = (id) => {
    if (!id) return;
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Brand icons / badges
  const renderOrgLogo = (icon) => {
    switch(icon) {
      case "google":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-xs">
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
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 font-black tracking-wider text-xs">
            IBM
          </div>
        );
      case "umich":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00274C] border border-[#ffcb05]/40 text-[#FFCB05] font-black text-sm shadow-xs">
            M
          </div>
        );
      case "udemy":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/80 text-violet-600 dark:text-violet-400 font-bold text-xs">
            U
          </div>
        );
      case "asean":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
            ASEAN
          </div>
        );
      default:
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
            <Award className="h-5 w-5" />
          </div>
        );
    }
  };

  return (
    <section id="certificates" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Certificates &amp; Specializations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Verified credentials in AI, Data Science, and Software Development.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 self-start md:self-auto px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
            <ShieldCheck className="h-3.5 w-3.5 text-teal-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">9 Verified Credentials</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === cat.id
                  ? "bg-zinc-900 text-white dark:bg-teal-500 dark:text-zinc-950 shadow-xs"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {cat.label} {cat.id === "all" ? `(${certificatesData.length})` : ""}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-xs hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all"
            >
              <div>
                {/* Top Row: Logo + Titles */}
                <div className="flex items-start gap-3">
                  {renderOrgLogo(cert.icon)}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug truncate">
                        {cert.title}
                      </h3>
                      {cert.platform && (
                        <span className="inline-flex items-center rounded bg-teal-50 px-1.5 py-0.5 text-[10px] font-medium text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200/50 dark:border-teal-900/40 shrink-0">
                          {cert.platform}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {cert.issuer} · <span className="font-mono">{cert.issueDate}</span>
                    </p>
                  </div>
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Row: Credential ID + Direct Link */}
              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
                {cert.credentialId ? (
                  <button
                    type="button"
                    onClick={() => handleCopyId(cert.credentialId)}
                    className="inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] font-mono text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-colors truncate max-w-[200px]"
                    title="Copy Credential ID"
                  >
                    {copiedId === cert.credentialId ? (
                      <>
                        <Check className="h-3 w-3 text-teal-500 shrink-0" />
                        <span className="text-teal-600 dark:text-teal-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 shrink-0" />
                        <span className="truncate">ID: {cert.credentialId}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                    Course Completion
                  </span>
                )}

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors shrink-0"
                >
                  <span>Verify</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
