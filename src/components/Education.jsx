import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            <span>04 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Academic training in data science, mathematics, computing, and statistical modeling.
          </p>
        </div>

        {/* Education Card */}
        <div className="mt-10 max-w-4xl">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              {/* Institution & Degree */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-teal-50 text-teal-600 dark:border-zinc-700 dark:bg-teal-950/50 dark:text-teal-400">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 font-medium text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
                    <Award className="h-3 w-3" />
                    <span>{edu.status}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-zinc-500">
                    <MapPin className="h-3 w-3" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              {/* Brief Description */}
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {edu.description}
              </p>

              {/* Relevant Coursework */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Relevant Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
