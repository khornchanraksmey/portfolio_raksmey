import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            <span>03 // INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Work Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Professional industry internship focusing on real-world AI applications, analytics dashboards, and backend services.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="mt-10 max-w-4xl">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-teal-50 text-teal-600 dark:border-zinc-700 dark:bg-teal-950/50 dark:text-teal-400">
                      <Briefcase className="h-4 w-4" />
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-base font-semibold text-teal-600 dark:text-teal-400 mt-1 sm:ml-10">
                    {item.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    <Calendar className="h-3 w-3" />
                    <span>Duration: {item.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-5">
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                  Key Responsibilities &amp; Impact
                </h4>
                <ul className="space-y-2.5">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Stack:</span>
                {item.skills.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-mono text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
