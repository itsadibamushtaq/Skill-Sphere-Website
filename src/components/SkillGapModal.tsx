import React, { useState } from 'react';
import { X, Sparkles, Sliders, ArrowRight, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';
import { mockCareerPaths } from '../data/mockData';

interface SkillGapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreCourses: () => void;
}

export const SkillGapModal: React.FC<SkillGapModalProps> = ({
  isOpen,
  onClose,
  onExploreCourses
}) => {
  const [selectedCareerId, setSelectedCareerId] = useState('c1');
  
  // Skill proficiency state (0 to 100%)
  const [skillProficiencies, setSkillProficiencies] = useState<{ [key: string]: number }>({
    'Python Programming': 70,
    'Linear Algebra & Statistics': 40,
    'Machine Learning Basics': 30,
    'Deep Learning': 15,
    'Generative AI & LLMs': 10,
    'MLOps': 0,
    'Networking Fundamentals': 60,
    'Linux Administration': 50,
    'Security Operations (SOC)': 20,
    'Ethical Hacking': 10,
    'Advanced Excel': 80,
    'SQL Database Queries': 65,
    'PowerBI / Tableau': 35,
    'HTML5/CSS3/Tailwind': 85,
    'JavaScript/TypeScript': 60,
    'React.js': 50,
    'Node.js & Express': 40
  });

  if (!isOpen) return null;

  const currentCareer = mockCareerPaths.find((c) => c.id === selectedCareerId) || mockCareerPaths[0];

  const handleSliderChange = (skillName: string, val: number) => {
    setSkillProficiencies((prev) => ({
      ...prev,
      [skillName]: val
    }));
  };

  // Calculate overall readiness score
  const requiredSkills = currentCareer.requiredSkills;
  const totalScore = requiredSkills.reduce((acc, skill) => acc + (skillProficiencies[skill] || 0), 0);
  const averageReadiness = Math.round(totalScore / requiredSkills.length);

  // Find weakest skill
  let weakestSkill = requiredSkills[0];
  let minVal = 100;
  requiredSkills.forEach((skill) => {
    const val = skillProficiencies[skill] || 0;
    if (val < minVal) {
      minVal = val;
      weakestSkill = skill;
    }
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center space-x-2">
            <Sliders className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Skill Gap Analyzer
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Target Career Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select Your Target Career Goal
            </label>
            <select
              value={selectedCareerId}
              onChange={(e) => setSelectedCareerId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            >
              {mockCareerPaths.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} ({c.category})
                </option>
              ))}
            </select>
          </div>

          {/* Overall Readiness Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex items-center justify-between shadow-lg">
            <div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                Career Readiness Index
              </span>
              <h4 className="text-xl font-extrabold">{currentCareer.title}</h4>
              <p className="text-xs text-slate-400 mt-1">
                Target Score for Job Preparedness: <span className="text-emerald-400 font-bold">80%+</span>
              </p>
            </div>
            <div className="text-center bg-white/10 p-3 rounded-2xl border border-white/20 min-w-24">
              <span className="text-3xl font-black text-blue-400">{averageReadiness}%</span>
              <p className="text-[10px] uppercase font-bold text-slate-300 mt-0.5">Readiness</p>
            </div>
          </div>

          {/* Sliders for Required Skills */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Rate Your Current Proficiency in Required Skills:
            </h4>

            <div className="space-y-3">
              {requiredSkills.map((skill) => {
                const currentVal = skillProficiencies[skill] || 0;
                return (
                  <div key={skill} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 dark:text-white">{skill}</span>
                      <span className={`font-mono font-bold ${currentVal >= 70 ? 'text-emerald-600 dark:text-emerald-400' : currentVal >= 40 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'}`}>
                        {currentVal}%
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={currentVal}
                      onChange={(e) => handleSliderChange(skill, Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                    />

                    {/* Visual Bar */}
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          currentVal >= 70
                            ? 'bg-emerald-500'
                            : currentVal >= 40
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${currentVal}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Targeted Recommendation Box */}
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start space-x-3 text-xs text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Skill Gap Priority: </span>
              Your biggest gap is in <span className="underline font-bold">{weakestSkill}</span> ({minVal}% proficiency). We recommend starting with our curated beginner tracks in the course discovery explorer.
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onExploreCourses();
            }}
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md flex items-center space-x-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Find Courses for {weakestSkill}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
