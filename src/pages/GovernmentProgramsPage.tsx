import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, Search, CheckCircle2, Building2 } from 'lucide-react';
import { mockGovernmentPrograms } from '../data/mockData';
import { GovernmentProgram } from '../types';

interface GovernmentProgramsPageProps {
  onSelectGov: (program: GovernmentProgram) => void;
}

export const GovernmentProgramsPage: React.FC<GovernmentProgramsPageProps> = ({ onSelectGov }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockGovernmentPrograms.filter((p) =>
    p.programName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>Public Sector Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Government Training & Subsidized Programs
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          Access verified government-backed digital skills initiatives, free vocational IT training, scholarships, and national tech bootcamps.
        </p>
      </div>

      {/* Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search NAVTTC, DigiSkills, Technical Education, Scholarships..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((prog) => (
          <div
            key={prog.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{prog.organization}</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{prog.status}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {prog.programName}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {prog.description}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                <span className="font-bold block text-slate-900 dark:text-white">Eligibility:</span>
                <span>{prog.eligibility}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{prog.feeType}</span>

              <button
                onClick={() => onSelectGov(prog)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm flex items-center space-x-1"
              >
                <span>Program Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
