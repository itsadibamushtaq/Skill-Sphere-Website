import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Brain, Briefcase, Clock, Award, Target } from 'lucide-react';
import { mockCareerPaths } from '../data/mockData';
import { CareerPath } from '../types';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCareer: (career: CareerPath) => void;
}

export const CareerAssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onSelectCareer
}) => {
  const [step, setStep] = useState(1);
  const [education, setEducation] = useState('University Student (CS/IT)');
  const [existingSkills, setExistingSkills] = useState('Basic Computer & Logic');
  const [workPreference, setWorkPreference] = useState('Technical & Building');
  const [timeWeekly, setTimeWeekly] = useState('5 - 10 Hours / Week');
  const [goal, setGoal] = useState('Land a High-Demand Tech Job');
  const [recommendation, setRecommendation] = useState<CareerPath | null>(null);

  if (!isOpen) return null;

  const handleGenerateRecommendation = () => {
    // Recommendation logic based on work preference & background
    let matchedId = 'c1'; // Default AI Engineer
    if (workPreference === 'Technical & Building') {
      matchedId = education.includes('CS') ? 'c1' : 'c4'; // AI or Full Stack
    } else if (workPreference === 'Security & Protection') {
      matchedId = 'c2'; // Cybersecurity
    } else if (workPreference === 'Data & Numbers') {
      matchedId = 'c3'; // Data Analyst
    } else if (workPreference === 'Visual & Creative') {
      matchedId = 'c6'; // UI/UX Designer
    } else {
      matchedId = 'c5'; // Cloud / DevOps
    }

    const matched = mockCareerPaths.find((c) => c.id === matchedId) || mockCareerPaths[0];
    setRecommendation(matched);
    setStep(6); // Step 6 is the result view
  };

  const handleReset = () => {
    setStep(1);
    setRecommendation(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Discover Your Best Career Path
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
          
          {step < 6 && (
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span>Question {step} of 5</span>
              <span>Step {step}</span>
            </div>
          )}

          {/* Question 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                1. What is your current education or background?
              </h4>
              <div className="space-y-2.5">
                {[
                  'University Student (Computer Science / IT)',
                  'University Student (Non-Technical / Business / Arts)',
                  'School / College Graduate',
                  'Fresh Graduate Looking for First Job',
                  'Career Switcher / Working Professional'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => setEducation(option)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                      education === option
                        ? 'border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{option}</span>
                    {education === option && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                2. What digital or technical skills do you already have?
              </h4>
              <div className="space-y-2.5">
                {[
                  'Complete Beginner (No coding or tech background)',
                  'Basic Computer & Logic (Excel, Browsing, Office)',
                  'Some Coding Knowledge (Python, HTML, JS basics)',
                  'Design / Content Creation (Figma, Canva, Writing)',
                  'Data & Math (Statistics, Analytical Thinking)'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => setExistingSkills(option)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                      existingSkills === option
                        ? 'border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{option}</span>
                    {existingSkills === option && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                3. What type of work excites you most?
              </h4>
              <div className="space-y-2.5">
                {[
                  'Technical & Building (Software, AI, Web Development)',
                  'Security & Protection (Cybersecurity, Ethical Hacking)',
                  'Data & Numbers (Analyzing data, Business Dashboards)',
                  'Visual & Creative (UI/UX Design, Graphics, User Research)',
                  'Marketing & Growth (Digital Marketing, Content, Strategy)'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => setWorkPreference(option.split(' ')[0])}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                      workPreference === option.split(' ')[0]
                        ? 'border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{option}</span>
                    {workPreference === option.split(' ')[0] && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4 */}
          {step === 4 && (
            <div className="space-y-4">
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                4. How much time can you dedicate to learning per week?
              </h4>
              <div className="space-y-2.5">
                {[
                  '3 - 5 Hours / Week (Casual / Part-time)',
                  '5 - 10 Hours / Week (Consistent Study)',
                  '10 - 20 Hours / Week (Intensive Acceleration)',
                  'Full-time (20+ Hours / Week Dedicated Bootcamp)'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => setTimeWeekly(option)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                      timeWeekly === option
                        ? 'border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{option}</span>
                    {timeWeekly === option && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 5 */}
          {step === 5 && (
            <div className="space-y-4">
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                5. What is your primary career goal?
              </h4>
              <div className="space-y-2.5">
                {[
                  'Land a High-Demand Tech Job or Internship',
                  'Earn Income via Global Freelancing & Remote Work',
                  'Build My Own Tech Startup or Project',
                  'Upgrade Current Skills for Career Promotion',
                  'Explore Emerging Technologies & AI'
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => setGoal(option)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                      goal === option
                        ? 'border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{option}</span>
                    {goal === option && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Generated Recommendation Result */}
          {step === 6 && recommendation && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl">
                <div className="flex items-center space-x-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Recommended Career Pathway</span>
                </div>
                <h3 className="text-2xl font-black">{recommendation.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {recommendation.shortDescription}
                </p>
                <div className="mt-4 pt-4 border-t border-blue-500/30 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400">Estimated Duration:</span>
                    <p className="font-bold text-white">{recommendation.learningTimeMonths} Months ({timeWeekly})</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Industry Demand:</span>
                    <p className="font-bold text-emerald-400">{recommendation.demandLevel}</p>
                  </div>
                </div>
              </div>

              {/* Skills Roadmap Checklist */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Target className="w-4 h-4 text-indigo-500" />
                  <span>Your Roadmap Steps ({recommendation.roadmap.length} Milestones)</span>
                </h4>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {recommendation.roadmap.map((s) => (
                    <div key={s.stepNumber} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center space-x-3 text-xs">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                        {s.stepNumber}
                      </span>
                      <div className="flex-1">
                        <h5 className="font-bold text-slate-900 dark:text-white">{s.title}</h5>
                        <p className="text-slate-500 text-[11px] truncate">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onSelectCareer(recommendation);
                    onClose();
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Explore Full Career & Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Retake Assessment
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer Navigation Buttons */}
        {step < 6 && (
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40"
            >
              Back
            </button>
            {step < 5 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-sm flex items-center space-x-1"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleGenerateRecommendation}
                className="px-6 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-md flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generate Recommendations</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
