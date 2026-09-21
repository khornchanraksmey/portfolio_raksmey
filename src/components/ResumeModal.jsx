import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Languages, 
  Layers 
} from 'lucide-react';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';
import { experienceData, volunteerData } from '../data/experience';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Khorn_Chanraksmey_Resume.pdf';
    link.download = 'Khorn_Chanraksmey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto print:p-0 print:static">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-950/75 backdrop-blur-sm transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Main Resume Dialog Container */}
      <div className="relative w-full max-w-4xl rounded-xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 transition-all z-10 max-h-[92vh] flex flex-col overflow-hidden print:max-h-none print:shadow-none print:border-none print:p-0">
        
        {/* Top Actions Bar (Hidden in Print) */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 font-mono">
              Curriculum Vitae — Khorn Chanraksmey
            </span>
            <span className="rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 text-[10px] px-2 py-0.5 font-medium">
              Verified PDF
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-sm"
              title="Print Document"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-1.5 rounded-md bg-teal-600 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-teal-500 transition-colors shadow-sm"
              title="Download official PDF"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="overflow-y-auto flex-1 bg-zinc-100 dark:bg-zinc-950/80 p-2 sm:p-5 flex justify-center print:p-0">
          
          {/* Two-Column Exact Resume Sheet (Matches user's PDF) */}
          <div className="w-full max-w-[820px] bg-white shadow-lg rounded-sm overflow-hidden flex flex-col md:flex-row border border-zinc-200 dark:border-zinc-800 min-h-[1050px] print:shadow-none print:border-none">
            
            {/* LEFT SIDEBAR (Dark Navy) */}
            <aside className="w-full md:w-[36%] bg-[#151a24] text-slate-200 p-6 flex flex-col gap-5 shrink-0">
              
              {/* Avatar Photo */}
              <div className="flex justify-center">
                <div className="h-28 w-28 rounded-full border-2 border-slate-300 p-0.5 overflow-hidden bg-slate-800 flex items-center justify-center">
                  <img
                    src="public/images/avatar.jpg"
                    alt="Khorn Chanraksmey"
                    onError={(e) => { e.currentTarget.src = 'public/images/avatar.svg'; }}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center">
                <h1 className="text-lg font-extrabold tracking-wide text-white uppercase leading-tight font-sans">
                  KHORN CHANRAKSMEY
                </h1>
                <p className="text-[11px] font-semibold text-slate-400 tracking-widest mt-1 uppercase font-mono">
                  DATA SCIENCE
                </p>
              </div>

              {/* CONTACT SECTION */}
              <div className="border-t border-slate-700/60 pt-4">
                <h2 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-3 flex items-center gap-1.5">
                  <span>CONTACT</span>
                </h2>
                <div className="space-y-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span>Dangkao, Phnom Penh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span>+855 96 651 2225</span>
                  </div>
                  <div className="flex items-center gap-2 break-all">
                    <Mail className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span>chanraksmeykhorn@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span>khornchanraksmey.vercel.app</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span>Khornchanraksmey</span>
                  </div>
                </div>
              </div>

              {/* EDUCATION SECTION */}
              <div className="border-t border-slate-700/60 pt-4">
                <h2 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-3 flex items-center gap-1.5">
                  <GraduationCap className="h-3.5 w-3.5 text-teal-400" />
                  <span>EDUCATION</span>
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline text-[11px] font-bold text-white">
                      <span>Institute of Technology of Cambodia (ITC)</span>
                    </div>
                    <p className="text-[10px] text-teal-300 font-mono">2024 - Present</p>
                    <p className="text-[10.5px] text-slate-300">Bachelor's Degree in Data Science</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline text-[11px] font-bold text-white">
                      <span>TUX Global Institute</span>
                    </div>
                    <p className="text-[10px] text-teal-300 font-mono">2025 - 2026</p>
                    <p className="text-[10.5px] text-teal-400 italic">Data Analysis (75% Scholarship)</p>
                  </div>
                </div>
              </div>

              {/* SKILLS SECTION */}
              <div className="border-t border-slate-700/60 pt-4">
                <h2 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-3 flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-teal-400" />
                  <span>SKILLS</span>
                </h2>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span><strong className="text-white">Data Analytics:</strong> Python, SQL, Machine Learning Foundations</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span><strong className="text-white">Databases:</strong> PostgreSQL, MySQL</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span><strong className="text-white">Programming Languages:</strong> Python, C++</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span><strong className="text-white">Tools &amp; DevOps:</strong> GitHub, Docker</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Critical Thinking, Creative Problem Solving</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Project Coordination</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Team Collaboration</span>
                  </li>
                </ul>
              </div>

              {/* LANGUAGE SECTION */}
              <div className="border-t border-slate-700/60 pt-4">
                <h2 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-2.5 flex items-center gap-1.5">
                  <Languages className="h-3.5 w-3.5 text-teal-400" />
                  <span>LANGUAGE</span>
                </h2>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>English</span>
                    <span className="font-semibold text-white">Excellent</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>French</span>
                    <span className="font-semibold text-white">Excellent</span>
                  </div>
                </div>
              </div>

            </aside>

            {/* RIGHT CONTENT (White) */}
            <main className="w-full md:w-[64%] bg-white p-7 text-slate-800 flex flex-col gap-5">
              
              {/* ABOUT ME */}
              <section>
                <h2 className="text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2 font-sans">
                  ABOUT ME
                </h2>
                <p className="text-[12px] leading-relaxed text-slate-600 text-justify">
                  I am a Data Science student at the Institute of Technology of Cambodia with skills in Python, Machine Learning, Power BI, and Database Management. Passionate about data analysis and applying technical skills to real-world projects while continuously learning and growing.
                </p>
              </section>

              {/* WORK EXPERIENCE */}
              <section>
                <h2 className="text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-3 font-sans">
                  WORK EXPERIENCE
                </h2>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-[12px] font-bold text-slate-900">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-teal-600" />
                      <span>AI &amp; Dashboard Intern | Sala Tech Pte. Ltd.</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 font-normal">3-Month</span>
                  </div>
                  <ul className="space-y-1 text-[11.5px] text-slate-600 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Worked on dashboards for data visualization and reporting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Analyzed data and wrote database queries to support projects.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Assisted with AI-related tasks and worked with the team on project development.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* VOLUNTEER EXPERIENCE */}
              <section>
                <h2 className="text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-3 font-sans">
                  VOLUNTEER EXPERIENCE
                </h2>
                <div className="space-y-2">
                  {volunteerData.map((vol, idx) => (
                    <div key={idx} className="flex justify-between items-baseline text-[11.5px] border-l-2 border-teal-600 pl-2.5 py-0.5">
                      <span className="font-semibold text-slate-800">
                        {vol.role} | {vol.organization}
                      </span>
                      <span className="text-[10.5px] font-mono text-slate-500 shrink-0 ml-2">
                        {vol.period}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROJECTS */}
              <section>
                <h2 className="text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-3 font-sans">
                  PROJECT
                </h2>
                <div className="space-y-4">
                  
                  {/* Project 1 */}
                  <div>
                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-slate-900">
                      <Award className="h-3.5 w-3.5 text-teal-600" />
                      <span>1st Place | AI Smart Farming Competition | StatNode</span>
                    </div>
                    <ul className="space-y-1 text-[11.5px] text-slate-600 pl-2 pt-1">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Built a precision agriculture system using a 7-in-1 IoT soil sensor.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Developed PostGIS mapping and a Khmer Telegram bot for fertilizer recommendations.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <div className="text-[12px] font-bold text-slate-900">
                      <span>Hotel Reservation System</span>
                    </div>
                    <ul className="space-y-1 text-[11.5px] text-slate-600 pl-2 pt-1">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Built an interactive sales dashboard using Power BI and DAX.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Cleaned and analyzed sales data for business insights.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div>
                    <div className="text-[12px] font-bold text-slate-900">
                      <span>Adventure Works DW — Power BI Dashboard</span>
                    </div>
                    <ul className="space-y-1 text-[11.5px] text-slate-600 pl-2 pt-1">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Built a hotel booking web app with React/Vite.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>Implemented booking and reservation management.</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </section>

            </main>

          </div>

        </div>

      </div>
    </div>
  );
}
