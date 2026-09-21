import React, { useEffect } from 'react';
import { X, Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 transition-all z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Certificate Card Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-800/80 dark:bg-teal-950/50 dark:text-teal-400">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-teal-600 dark:text-teal-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Credential
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {cert.name}
            </h3>
          </div>
        </div>

        {/* Organization & Year */}
        <div className="rounded-lg bg-zinc-50 p-3.5 border border-zinc-200 dark:bg-zinc-800/60 dark:border-zinc-700/60 my-4 text-xs sm:text-sm">
          <div className="flex justify-between py-1">
            <span className="text-zinc-500 dark:text-zinc-400">Issuing Organization:</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">{cert.organization}</span>
          </div>
          <div className="flex justify-between py-1 border-t border-zinc-200/60 dark:border-zinc-700/60">
            <span className="text-zinc-500 dark:text-zinc-400">Issued Year:</span>
            <span className="font-mono text-zinc-800 dark:text-zinc-200">{cert.date}</span>
          </div>
          {cert.credentialId && (
            <div className="flex justify-between py-1 border-t border-zinc-200/60 dark:border-zinc-700/60">
              <span className="text-zinc-500 dark:text-zinc-400">Credential ID:</span>
              <span className="font-mono text-zinc-800 dark:text-zinc-200">{cert.credentialId}</span>
            </div>
          )}
        </div>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
          {cert.summary}
        </p>

        {/* Skills Validated */}
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
            Skills Validated:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((s) => (
              <span
                key={s}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 font-mono"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {cert.verificationUrl && cert.verificationUrl !== '#' ? (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-zinc-800 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400 transition-colors"
            >
              <span>Verify Online</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
          <button
            onClick={onClose}
            className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
