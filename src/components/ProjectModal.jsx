import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Layers, Cpu, Database } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 transition-all z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Badge & Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-950/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
            {project.badge}
          </span>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {project.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mt-0.5">
          {project.tagline}
        </p>

        {/* Extended Description */}
        <div className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 space-y-2">
          <p>{project.longDescription}</p>
        </div>

        {/* Key Engineering Highlights */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            <span>Key Architecture & Highlights</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-100 mb-2.5">
            Technologies & Libraries
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-mono text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Source Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-zinc-800 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400 transition-colors"
            >
              <span>Live Demo / Bot</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <button
            onClick={onClose}
            className="rounded-md px-3 py-2 text-xs sm:text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
