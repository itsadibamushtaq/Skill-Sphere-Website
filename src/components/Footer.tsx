import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter / Callout Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-slate-900 border border-blue-500/30 p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800">
                Youth Skill Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Stay Ahead in Emerging Tech & Career Opportunities
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Get weekly updates on verified government training admissions, new AI roadmaps, free certifications, and global tech scholarships.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your student/email address..."
                className="w-full sm:w-72 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md flex items-center justify-center space-x-2 whitespace-nowrap">
                <span>Subscribe Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Column Navigation Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                SkillSphere
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SkillSphere is an all-in-one digital skills academy, career guidance hub, government training portal, and AI learning assistant empowering students, fresh graduates, and youth worldwide to become employable.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Government & Global Educational Portal</span>
            </div>
          </div>

          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Learning Hubs</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('courses')} className="hover:text-white transition-colors">Explore Courses</button></li>
              <li><button onClick={() => onNavigate('roadmaps')} className="hover:text-text-white transition-colors">Career Roadmaps</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">Real-world Projects</button></li>
              <li><button onClick={() => onNavigate('government')} className="hover:text-white transition-colors">Government Programs</button></li>
              <li><button onClick={() => onNavigate('global-learning')} className="hover:text-white transition-colors">Global Learning Hub</button></li>
              <li><button onClick={() => onNavigate('youtube-learning')} className="hover:text-white transition-colors">YouTube Video Hub</button></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Career & Skills</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors">Emerging Career Paths</button></li>
              <li><button onClick={() => onNavigate('communication')} className="hover:text-white transition-colors">Communication Academy</button></li>
              <li><button onClick={() => onNavigate('opportunities')} className="hover:text-white transition-colors">Scholarships & Jobs</button></li>
              <li><button onClick={() => onNavigate('ai-assistant')} className="hover:text-white transition-colors">Ask SkillSphere AI</button></li>
              <li><button onClick={() => onNavigate('student-dashboard')} className="hover:text-white transition-colors">Student Progress Dashboard</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Verified Sources</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="https://navttc.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1"><span>NAVTTC Pakistan</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="https://digiskills.pk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1"><span>DigiSkills.pk</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="https://grow.google" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1"><span>Google Grow</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="https://aws.amazon.com/training" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1"><span>AWS Education</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
              <li><a href="https://netacad.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1"><span>Cisco Academy</span><ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Data Integrity Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <p>© 2026 SkillSphere Youth Platform. Built for youth empowerment.</p>
            <span className="hidden sm:inline">•</span>
            <p className="text-slate-400">
              Data Integrity Note: Always verify program dates, fees, and requirements on official government & provider portals.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => onNavigate('about')} className="hover:text-slate-300">About SkillSphere</button>
            <span>•</span>
            <button onClick={() => onNavigate('admin')} className="hover:text-slate-300">Admin Portal</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
