import React, { useState } from 'react';
import { Code2, FolderGit2, Clock, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { mockProjects } from '../data/mockData';
import { Project } from '../types';

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Code2 className="w-4 h-4" />
          <span>Project-Based Learning</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Build Real Portfolio Projects
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          Apply what you learn by building real-world software applications, AI bots, dashboards, and cybersecurity monitors. Showcase these projects on your GitHub and resume.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((proj) => (
          <div
            key={proj.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{proj.category}</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                  {proj.difficulty}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {proj.title}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
                {proj.description}
              </p>

              {/* Technologies */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Tech Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>~{proj.estimatedHours} Hours</span>
              </span>

              <button
                onClick={() => setSelectedProject(proj)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm flex items-center space-x-1"
              >
                <span>View Project Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Project Guide Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">{selectedProject.category}</span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Project Overview</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Step-by-Step Implementation Steps:</h4>
                <div className="space-y-2">
                  {selectedProject.steps.map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center space-x-3">
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-slate-700 dark:text-slate-200">{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.githubTemplateUrl && (
                <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <span className="font-bold block">GitHub Reference Code:</span>
                    <span className="text-slate-400 text-[11px]">Explore starter repository templates and community examples.</span>
                  </div>
                  <a
                    href={selectedProject.githubTemplateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center space-x-1"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    <span>View GitHub</span>
                  </a>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
              <button onClick={() => setSelectedProject(null)} className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold">
                Close Guide
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
