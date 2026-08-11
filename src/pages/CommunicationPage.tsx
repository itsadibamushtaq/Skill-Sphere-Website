import React, { useState } from 'react';
import { MessageSquare, Video, FileText, CheckCircle2, PlayCircle, Sparkles } from 'lucide-react';
import { mockCommunicationModules } from '../data/mockData';

export const CommunicationPage: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState(mockCommunicationModules[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <MessageSquare className="w-4 h-4" />
          <span>Soft Skills & Employability</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Communication & Professional Skills Academy
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          Technical skills get you the interview; communication skills get you the job. Master professional English, remote collaboration, interview pitching, and email etiquette.
        </p>
      </div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Module Selection List */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Communication Track</h3>
          {mockCommunicationModules.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedModule(mod)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                selectedModule.id === mod.id
                  ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/60 dark:border-blue-500 shadow-md'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {mod.category}
                </span>
                <span className="text-[10px] text-slate-400">{mod.estimatedTime}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">{mod.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{mod.description}</p>
            </div>
          ))}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xl space-y-6">
          
          <div className="space-y-2 pb-4 border-b border-slate-200 dark:border-slate-700">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 dark:text-blue-400">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Training Module</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">{selectedModule.title}</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{selectedModule.description}</p>
          </div>

          {/* Key Topics Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Lessons & Modules</h4>
            <div className="space-y-2">
              {selectedModule.topics.map((tp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex items-center space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{tp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Exercise Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white space-y-3 shadow-lg">
            <div className="flex items-center justify-between text-xs font-bold text-blue-300">
              <span>Interactive Practice Exercise</span>
              <Video className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-xs leading-relaxed text-slate-200">
              {selectedModule.practiceScenario}
            </p>
            <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md">
              Start Practice Roleplay
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
