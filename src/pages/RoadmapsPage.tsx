import React, { useState } from 'react';
import { Map, CheckCircle2, Clock, BookOpen, Code2, ArrowRight, Award } from 'lucide-react';
import { mockCareerPaths } from '../data/mockData';

interface RoadmapsPageProps {
  initialCareerId?: string;
  onNavigateToCourses: () => void;
  onNavigateToProjects: () => void;
}

export const RoadmapsPage: React.FC<RoadmapsPageProps> = ({
  initialCareerId = 'c1',
  onNavigateToCourses,
  onNavigateToProjects
}) => {
  const [selectedCareerId, setSelectedCareerId] = useState(initialCareerId);

  const currentCareer = mockCareerPaths.find((c) => c.id === selectedCareerId) || mockCareerPaths[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Map className="w-4 h-4" />
          <span>Interactive Career Roadmaps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Step-by-Step Learning Roadmaps
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          Follow a structured step-by-step milestone timeline designed by education architects to help you move from zero knowledge to employability.
        </p>
      </div>

      {/* Select Career Track Selector */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        {mockCareerPaths.map((career) => (
          <button
            key={career.id}
            onClick={() => setSelectedCareerId(career.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedCareerId === career.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {career.title}
          </button>
        ))}
      </div>

      {/* Career Overview Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Active Career Track</span>
          <h2 className="text-2xl font-black">{currentCareer.title}</h2>
          <p className="text-xs text-slate-300 leading-relaxed">{currentCareer.fullDescription}</p>
        </div>

        <div className="flex items-center space-x-4 border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-6 text-xs">
          <div>
            <span className="text-slate-400 block">Total Estimated Time</span>
            <span className="text-lg font-bold text-white">{currentCareer.learningTimeMonths} Months</span>
          </div>
          <div>
            <span className="text-slate-400 block">Milestones</span>
            <span className="text-lg font-bold text-blue-400">{currentCareer.roadmap.length} Steps</span>
          </div>
        </div>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
        {currentCareer.roadmap.map((step) => (
          <div key={step.stepNumber} className="relative group">
            
            {/* Circle Node Icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-900">
              {step.stepNumber}
            </div>

            {/* Step Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400">Milestone Step {step.stepNumber}</span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{step.title}</h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 w-fit flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>~{step.estimatedWeeks} Weeks</span>
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>

              {/* Skills Learned in this Step */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-slate-400">Skills Covered:</span>
                <div className="flex flex-wrap gap-1.5">
                  {step.skills.map((sk) => (
                    <span key={sk} className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Action Items */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                {step.practiceProject ? (
                  <div className="flex items-center space-x-1.5 text-indigo-600 dark:text-indigo-400 font-bold">
                    <Code2 className="w-4 h-4" />
                    <span>Practice Project: {step.practiceProject}</span>
                  </div>
                ) : (
                  <span className="text-slate-400">Recommended Courses Available</span>
                )}

                <div className="flex items-center space-x-2">
                  <button
                    onClick={onNavigateToCourses}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center space-x-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Explore Step Courses</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
