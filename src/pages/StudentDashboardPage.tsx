import React from 'react';
import { User, BookOpen, Award, Flame, CheckCircle2, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { mockCourses } from '../data/mockData';

interface StudentDashboardPageProps {
  onNavigateToCourses: () => void;
  onNavigateToAI: () => void;
}

export const StudentDashboardPage: React.FC<StudentDashboardPageProps> = ({
  onNavigateToCourses,
  onNavigateToAI
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Student Welcome Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">
            A
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-blue-300 uppercase">Student Profile</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Active Scholar</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">Welcome Back, Ahmed Khan</h1>
            <p className="text-xs text-slate-300">Target Goal: <span className="font-bold text-white">AI & Full Stack Engineer</span></p>
          </div>
        </div>

        <button
          onClick={onNavigateToAI}
          className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4 text-blue-200" />
          <span>Ask AI Study Assistant</span>
        </button>
      </div>

      {/* Analytics KPI Stat Widgets */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Enrolled Courses</span>
            <BookOpen className="w-4 h-4 text-blue-500" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white">3</span>
          <p className="text-[11px] text-slate-500">Active Learning Tracks</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Learning Streak</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white">14 Days</span>
          <p className="text-[11px] text-amber-600 font-bold">On Fire!</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Average Completion</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white">68%</span>
          <p className="text-[11px] text-emerald-600 font-bold">+12% this week</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase">Earned Certificates</span>
            <Award className="w-4 h-4 text-purple-500" />
          </div>
          <span className="text-2xl font-black text-slate-900 dark:text-white">2</span>
          <p className="text-[11px] text-slate-500">Verified Badges</p>
        </div>
      </div>

      {/* Main Active Courses in Progress */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Active Courses in Progress</h2>
          <button onClick={onNavigateToCourses} className="text-xs font-bold text-blue-600 hover:underline">
            Explore More Courses →
          </button>
        </div>

        <div className="space-y-4">
          {mockCourses.slice(0, 3).map((c, i) => {
            const progressVal = [75, 50, 20][i];
            return (
              <div
                key={c.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="font-bold text-blue-600 dark:text-blue-400">{c.organization}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{c.level}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{c.title}</h3>

                  {/* Progress bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-slate-500">Progress</span>
                      <span className="text-blue-600">{progressVal}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progressVal}%` }} />
                    </div>
                  </div>
                </div>

                <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm w-fit self-start sm:self-center">
                  Continue Lesson
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
