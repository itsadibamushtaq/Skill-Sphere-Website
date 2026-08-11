import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Brain,
  ShieldAlert,
  Code2,
  Cloud,
  Award,
  CheckCircle2,
  Compass,
  PlayCircle
} from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onExploreCareers: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onExploreCareers,
  onOpenAssessment
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 transition-colors duration-200">
      
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -mt-20 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Controls */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-spin-slow" />
              <span>Central Youth Skills & Opportunity Learning Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Build the Skills That{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Build Your Future.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Discover digital skills, AI, emerging technologies, communication training, government programs, international courses, certifications, and structured career pathways — all in one place.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onStartLearning}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCareers}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 shadow-xs transition-all flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4 text-indigo-500" />
                <span>Explore Career Paths</span>
              </button>

              <button
                onClick={onOpenAssessment}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/60 dark:to-blue-950/60 border border-indigo-200/80 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-bold text-xs hover:border-indigo-400 transition-all flex items-center justify-center space-x-2 shadow-xs"
              >
                <PlayCircle className="w-4 h-4 text-indigo-600" />
                <span>Discover Your Best Career Path</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center lg:justify-start space-x-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>
                Learn from trusted organizations, universities, governments, and global technology platforms.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Tech Skill Sphere Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700 p-6 sm:p-8 shadow-2xl overflow-hidden">
              
              {/* Top Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">AI & Tech Skill Matrix</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Structured Roadmap Progression</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Active Growth
                </span>
              </div>

              {/* Floating Interactive Skill Nodes */}
              <div className="py-6 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 shadow-xs hover:scale-[1.02] transition-transform cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Generative AI & Gemini API</h4>
                      <p className="text-[10px] text-slate-500">8 Modules • Intermediate</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">92% Match</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 shadow-xs hover:scale-[1.02] transition-transform cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Cybersecurity & Threat Hunting</h4>
                      <p className="text-[10px] text-slate-500">6 Modules • High Demand</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">SOC Ready</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 shadow-xs hover:scale-[1.02] transition-transform cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Full Stack React & Node.js</h4>
                      <p className="text-[10px] text-slate-500">12 Modules • Practical Project</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400">3 Projects</span>
                </div>
              </div>

              {/* Bottom Trust Tag */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Government & Global Verified</span>
                </div>
                <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-bold">100% Free Access</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
