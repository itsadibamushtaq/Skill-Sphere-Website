import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

interface LearningPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearningPlanModal: React.FC<LearningPlanModalProps> = ({
  isOpen,
  onClose
}) => {
  const [goal, setGoal] = useState('AI & Machine Learning Engineer');
  const [currentLevel, setCurrentLevel] = useState('Beginner');
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [learningStyle, setLearningStyle] = useState('Project-focused & Hands-on');
  const [loading, setLoading] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleGeneratePlan = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/ai/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal,
          currentLevel,
          hoursPerWeek,
          style: learningStyle
        })
      });
      const data = await res.json();
      if (data.plan && data.plan.months) {
        setGeneratedPlan(data.plan);
      } else {
        // Fallback default structure
        setGeneratedPlan({
          title: `Custom 6-Month Schedule for ${goal}`,
          months: [
            { month: 1, topic: "Computer & Programming Fundamentals", hours: hoursPerWeek, milestones: ["Learn basic syntax & logic", "Build first script tool"] },
            { month: 2, topic: "Core Specialized Concepts & Math", hours: hoursPerWeek, milestones: ["Databases & Data Handling", "Small project"] },
            { month: 3, topic: "Intermediate Frameworks & APIs", hours: hoursPerWeek, milestones: ["Connect external APIs", "Mid-level app"] },
            { month: 4, topic: "Advanced Architecture & Security", hours: hoursPerWeek, milestones: ["Security auditing", "Full app build"] },
            { month: 5, topic: "Real-world Portfolio Projects", hours: hoursPerWeek, milestones: ["Publish on GitHub", "Case study writeup"] },
            { month: 6, topic: "Certifications & Interview Prep", hours: hoursPerWeek, milestones: ["Resume polishing", "Mock interview practice"] },
          ]
        });
      }
    } catch (e) {
      console.error(e);
      // Fallback on error
      setGeneratedPlan({
        title: `Custom 6-Month Schedule for ${goal}`,
        months: [
          { month: 1, topic: "Computer & Programming Fundamentals", hours: hoursPerWeek, milestones: ["Learn basic syntax & logic", "Build first script tool"] },
          { month: 2, topic: "Core Specialized Concepts & Math", hours: hoursPerWeek, milestones: ["Databases & Data Handling", "Small project"] },
          { month: 3, topic: "Intermediate Frameworks & APIs", hours: hoursPerWeek, milestones: ["Connect external APIs", "Mid-level app"] },
          { month: 4, topic: "Advanced Architecture & Security", hours: hoursPerWeek, milestones: ["Security auditing", "Full app build"] },
          { month: 5, topic: "Real-world Portfolio Projects", hours: hoursPerWeek, milestones: ["Publish on GitHub", "Case study writeup"] },
          { month: 6, topic: "Certifications & Interview Prep", hours: hoursPerWeek, milestones: ["Resume polishing", "Mock interview practice"] },
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Create My 6-Month Personalized Learning Plan
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {!generatedPlan ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Target Career Goal</label>
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Current Level</label>
                  <select
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-white"
                  >
                    <option value="Beginner">Beginner (Zero Knowledge)</option>
                    <option value="Intermediate">Intermediate (Basic Coding)</option>
                    <option value="Advanced">Advanced (Up-skilling)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Weekly Study Hours ({hoursPerWeek} hrs)</label>
                  <input
                    type="range"
                    min="3"
                    max="25"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Preferred Learning Style</label>
                <select
                  value={learningStyle}
                  onChange={(e) => setLearningStyle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-white"
                >
                  <option value="Project-focused & Hands-on">Project-focused & Hands-on</option>
                  <option value="Video & Visual Guided">Video & Visual Guided</option>
                  <option value="Academic & Theory First">Academic & Theory First</option>
                  <option value="Interactive Quizzes & Challenges">Interactive Quizzes & Challenges</option>
                </select>
              </div>

              <button
                onClick={handleGeneratePlan}
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>SkillSphere AI Building Schedule...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Custom 6-Month AI Schedule</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-indigo-950 text-white border border-indigo-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-300">Generated AI Timeline</span>
                  <h4 className="text-base font-extrabold">{generatedPlan.title || `6-Month Plan for ${goal}`}</h4>
                  <p className="text-xs text-slate-300">{hoursPerWeek} Hours / Week • {currentLevel} Level</p>
                </div>
                <button
                  onClick={() => setGeneratedPlan(null)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-900 text-xs font-bold hover:bg-indigo-800"
                >
                  Edit Inputs
                </button>
              </div>

              {/* Month by Month Cards */}
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {generatedPlan.months?.map((m: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-indigo-600 dark:text-indigo-400">
                        Month {m.month || idx + 1}: {m.topic}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        ~{m.hours || hoursPerWeek * 4} Total Hours
                      </span>
                    </div>

                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {m.milestones?.map((ms: string, i: number) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{ms}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
