import React from 'react';
import { Briefcase, ArrowRight, Brain, ShieldAlert, BarChart3, Code2, Cloud, Palette, Sparkles, AlertCircle } from 'lucide-react';
import { mockCareerPaths } from '../data/mockData';
import { CareerPath } from '../types';

interface CareerPathsPageProps {
  onSelectCareer: (career: CareerPath) => void;
  onViewRoadmap: (careerId: string) => void;
  onOpenAssessment: () => void;
}

export const CareerPathsPage: React.FC<CareerPathsPageProps> = ({
  onSelectCareer,
  onViewRoadmap,
  onOpenAssessment
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Briefcase className="w-4 h-4" />
            <span>Emerging Digital Careers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            High-Impact Career Paths
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Understand required skills, career expectations, roadmap milestones, and industry demand for the most in-demand digital roles.
          </p>
        </div>

        <button
          onClick={onOpenAssessment}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-md flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Discover Best Path for You</span>
        </button>
      </div>

      {/* Career Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCareerPaths.map((career) => (
          <div
            key={career.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  {career.category}
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{career.demandLevel} Demand</span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {career.title}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {career.shortDescription}
              </p>

              {/* Skills Tags */}
              <div className="pt-2 space-y-1.5">
                <span className="text-[11px] font-bold uppercase text-slate-400 block">Required Skills:</span>
                <div className="flex flex-wrap gap-1.5">
                  {career.requiredSkills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Salary Placeholder & Roadmap CTA */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-3">
              <div className="text-xs">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Estimated Entry Salary Range:</span>
                <span className="font-bold text-slate-900 dark:text-white">{career.salaryRangePlaceholder}</span>
                <p className="text-[10px] text-slate-400 italic mt-0.5">{career.salaryDisclaimer}</p>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <button
                  onClick={() => onViewRoadmap(career.id)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md flex items-center justify-center space-x-2"
                >
                  <span>View Step-by-Step Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
