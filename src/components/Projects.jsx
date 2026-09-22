import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Info, 
  Bot, 
  Cpu, 
  BarChart3, 
  LineChart, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

// Project Header Graphic / Screenshot with automatic fallback
function ProjectHeaderMedia({ project }) {
  const [hasImgError, setHasImgError] = useState(false);

  // If there's an image URL and no loading error, render the actual image!
  if (project.imageUrl && !hasImgError) {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <img
          src={project.imageUrl}
          alt={project.title}
          onError={() => setHasImgError(true)}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
          <span className="rounded bg-black/60 backdrop-blur-sm px-2 py-0.5 border border-white/10">
            {project.title}
          </span>
          <span className="rounded bg-teal-950/80 text-teal-300 px-2 py-0.5 border border-teal-700/50">
            Screenshot
          </span>
        </div>
      </div>
    );
  }

  // Fallback to stylized SVG visual code mockups
  const type = project.imageType;

  if (type === 'rag-bot') {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-zinc-900 p-4 font-mono text-xs text-zinc-300 border-b border-zinc-800 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-[11px] text-zinc-400">sala-rag-pipeline.py</span>
          </div>
          <span className="text-[10px] rounded bg-emerald-950/80 text-emerald-400 px-1.5 py-0.5 border border-emerald-800">
            Online @MyChatbotV2_bot
          </span>
        </div>
        <div className="space-y-1.5 text-[11px] pt-1">
          <p className="text-zinc-400">
            <span className="text-purple-400">query</span> = <span className="text-amber-300">"What are ITC student grading criteria?"</span>
          </p>
          <p className="text-teal-400">
            &gt; vector_search(query, top_k=3) <span className="text-zinc-500">[0.94 cosine]</span>
          </p>
          <div className="rounded bg-zinc-800/80 p-2 text-zinc-200 border border-zinc-700/60 mt-1">
            <span className="text-emerald-400 font-semibold">LLM:</span> Based on Academic Handbook Section 4.2...
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-800/80">
          <span>FastAPI Dual Router</span>
          <span>PostgreSQL Vector Session</span>
        </div>
      </div>
    );
  }

  if (type === 'geospatial') {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-zinc-900 p-4 font-mono text-xs text-zinc-300 border-b border-zinc-800 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-[11px] text-zinc-400">soil-spatial-kriging.py</span>
          </div>
          <span className="text-[10px] rounded bg-teal-950/80 text-teal-300 px-1.5 py-0.5 border border-teal-800">
            ESP32 PostGIS
          </span>
        </div>
        <div className="grid grid-cols-6 gap-1.5 py-2">
          <div className="h-7 rounded bg-teal-900/60 flex items-center justify-center text-[10px] text-teal-300 border border-teal-700/40">pH 6.4</div>
          <div className="h-7 rounded bg-teal-800/70 flex items-center justify-center text-[10px] text-teal-200 border border-teal-600/40">pH 6.8</div>
          <div className="h-7 rounded bg-emerald-800/80 flex items-center justify-center text-[10px] text-emerald-200 border border-emerald-600/40">pH 7.1</div>
          <div className="h-7 rounded bg-teal-800/70 flex items-center justify-center text-[10px] text-teal-200 border border-teal-600/40">pH 6.7</div>
          <div className="h-7 rounded bg-teal-900/60 flex items-center justify-center text-[10px] text-teal-300 border border-teal-700/40">pH 6.3</div>
          <div className="h-7 rounded bg-cyan-900/60 flex items-center justify-center text-[10px] text-cyan-300 border border-cyan-700/40">pH 6.1</div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-zinc-800">
          <span className="text-teal-400">PyKrige OrdinaryKriging 2D</span>
          <span className="text-zinc-500">Streamlit Realtime Dashboard</span>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-zinc-900 p-4 font-mono text-xs text-zinc-300 border-b border-zinc-800 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-[11px] text-zinc-400">school-metabase-analytics.sql</span>
          </div>
          <span className="text-[10px] rounded bg-indigo-950/80 text-indigo-300 px-1.5 py-0.5 border border-indigo-800">
            Metabase BI
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="rounded bg-zinc-800/80 p-2 border border-zinc-700/50">
            <p className="text-[10px] text-zinc-400">Avg Attendance</p>
            <p className="text-sm font-bold text-emerald-400">94.8%</p>
          </div>
          <div className="rounded bg-zinc-800/80 p-2 border border-zinc-700/50">
            <p className="text-[10px] text-zinc-400">Passing Rate</p>
            <p className="text-sm font-bold text-teal-400">89.2%</p>
          </div>
          <div className="rounded bg-zinc-800/80 p-2 border border-zinc-700/50">
            <p className="text-[10px] text-zinc-400">Active Teachers</p>
            <p className="text-sm font-bold text-cyan-400">142</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-zinc-800">
          <span className="text-indigo-400">SELECT cohort, avg(score) FROM...</span>
          <span className="text-zinc-500">PostgreSQL Analytical Views</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-zinc-900 p-4 font-mono text-xs text-zinc-300 border-b border-zinc-800 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
          <span className="ml-2 text-[11px] text-zinc-400">linear_regression.py</span>
        </div>
        <span className="text-[10px] rounded bg-cyan-950/80 text-cyan-300 px-1.5 py-0.5 border border-cyan-800">
          NumPy &amp; Scikit-Learn
        </span>
      </div>
      <div className="space-y-1 text-[11px] py-1">
        <p className="text-zinc-400">
          <span className="text-purple-400">def</span> <span className="text-blue-300">gradient_descent</span>(X, y, lr=0.01, epochs=1000):
        </p>
        <p className="text-cyan-400 pl-4">
          w = w - lr * (1/m) * X.T @ (X @ w - y)
        </p>
        <p className="text-emerald-400 pl-4">
          MSE Loss: 0.0423 | R² Score: 0.961
        </p>
      </div>
      <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-zinc-800">
        <span className="text-cyan-400">KNN • SVM • Random Forest • PCA</span>
        <span className="text-zinc-500">Plotly &amp; Matplotlib</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Selected applications spanning AI chatbots, IoT spatial data pipelines, analytics dashboards, and machine learning models.
          </p>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-200 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 overflow-hidden"
            >
              {/* Project Image or Visual Header */}
              <div className="relative">
                <ProjectHeaderMedia project={project} />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/50">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-mono text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-800 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
