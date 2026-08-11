import React, { useState } from 'react';
import { Search, X, BookOpen, Briefcase, Code2, ShieldCheck, Award, Youtube } from 'lucide-react';
import { mockCourses, mockCareerPaths, mockProjects, mockGovernmentPrograms, mockOpportunities, mockYouTubeResources } from '../data/mockData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: string, item: any) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  // Filtered lists
  const filteredCourses = query ? mockCourses.filter((c) => c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)) : [];
  const filteredCareers = query ? mockCareerPaths.filter((c) => c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)) : [];
  const filteredProjects = query ? mockProjects.filter((p) => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)) : [];
  const filteredGov = query ? mockGovernmentPrograms.filter((g) => g.programName.toLowerCase().includes(query) || g.skillsTaught.some(s => s.toLowerCase().includes(query))) : [];
  const filteredOpp = query ? mockOpportunities.filter((o) => o.title.toLowerCase().includes(query) || o.type.toLowerCase().includes(query)) : [];

  const hasResults = query && (filteredCourses.length > 0 || filteredCareers.length > 0 || filteredProjects.length > 0 || filteredGov.length > 0 || filteredOpp.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search AI, Python, Cybersecurity, Government programs, Scholarships..."
            className="w-full bg-transparent text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {!query && (
            <div className="text-center py-8 text-xs text-slate-400 space-y-2">
              <p className="font-semibold text-slate-600 dark:text-slate-300">Type to search across all SkillSphere resources</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['AI', 'Python', 'Cybersecurity', 'NAVTTC', 'React', 'Data Analyst', 'Scholarships'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 font-medium text-[11px]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-8 text-xs text-slate-400">
              No exact matches found for "<span className="font-bold text-slate-600 dark:text-slate-200">{searchTerm}</span>". Try searching for "AI", "Python", or "Government".
            </div>
          )}

          {/* Group: Courses */}
          {filteredCourses.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1">
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                <span>Courses ({filteredCourses.length})</span>
              </span>
              {filteredCourses.map((item) => (
                <div
                  key={item.id}
                  onClick={() => { onSelectResult('course', item); onClose(); }}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 cursor-pointer flex items-center justify-between text-xs transition-colors"
                >
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">{item.title}</h5>
                    <p className="text-slate-500 text-[11px]">{item.organization} • {item.level}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {item.isFree ? 'Free' : 'Paid'}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Group: Careers */}
          {filteredCareers.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1">
                <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                <span>Career Paths ({filteredCareers.length})</span>
              </span>
              {filteredCareers.map((item) => (
                <div
                  key={item.id}
                  onClick={() => { onSelectResult('career', item); onClose(); }}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 cursor-pointer flex items-center justify-between text-xs transition-colors"
                >
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">{item.title}</h5>
                    <p className="text-slate-500 text-[11px]">{item.learningTimeMonths} Months Roadmap</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{item.demandLevel}</span>
                </div>
              ))}
            </div>
          )}

          {/* Group: Government Programs */}
          {filteredGov.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Government Programs ({filteredGov.length})</span>
              </span>
              {filteredGov.map((item) => (
                <div
                  key={item.id}
                  onClick={() => { onSelectResult('government', item); onClose(); }}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 cursor-pointer flex items-center justify-between text-xs transition-colors"
                >
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">{item.programName}</h5>
                    <p className="text-slate-500 text-[11px]">{item.organization}</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600">{item.status}</span>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
