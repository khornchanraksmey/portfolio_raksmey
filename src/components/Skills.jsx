import React, { useState } from 'react';
import { 
  Code2, 
  Binary, 
  Brain, 
  Sparkles, 
  Server, 
  Database, 
  LayoutDashboard, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/skills';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Binary,
  Brain,
  Sparkles,
  Server,
  Database,
  LayoutDashboard,
  Wrench,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'AI & ML', 'Data & Analytics', 'Development'];

  const getFilterMatch = (categoryName) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & ML') {
      return categoryName === 'AI' || categoryName === 'Machine Learning';
    }
    if (activeFilter === 'Data & Analytics') {
      return categoryName === 'Data Science' || categoryName === 'Database' || categoryName === 'Dashboard';
    }
    if (activeFilter === 'Development') {
      return categoryName === 'Programming' || categoryName === 'Backend' || categoryName === 'Tools';
    }
    return true;
  };

  const filteredSkills = skillsData.filter((group) => getFilterMatch(group.category));

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            <span>01 // CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Skills & Technical Stack
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Core technologies, mathematical models, and developer tools applied across data science and AI projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === filter
                  ? 'bg-zinc-900 text-white dark:bg-teal-500 dark:text-zinc-950 shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((group) => {
            const IconComponent = iconMap[group.iconName] || Code2;
            return (
              <div
                key={group.category}
                className="group relative rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-zinc-300 hover:shadow dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-teal-600 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-teal-400">
                    <IconComponent className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-2">
                  {group.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 rounded bg-zinc-100 px-2 py-1 text-xs font-mono text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500/70 dark:bg-teal-400/80"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
