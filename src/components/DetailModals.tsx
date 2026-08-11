import React from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, BookOpen, Clock, Award, Star, Building2, Code2, AlertTriangle } from 'lucide-react';
import { Course, GovernmentProgram, Project, Organization } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {course.sourceType}
            </span>
            {course.isVerified && (
              <span className="flex items-center space-x-1 text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Source</span>
              </span>
            )}
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-semibold text-slate-400">{course.organization}</span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{course.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{course.description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 block">Level</span>
              <span className="font-bold text-slate-900 dark:text-white">{course.level}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 block">Duration</span>
              <span className="font-bold text-slate-900 dark:text-white">{course.duration}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 block">Pricing</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{course.priceTag || 'Free'}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 block">Certificate</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{course.hasCertificate ? 'Available' : 'None'}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Skills You Will Learn</h4>
            <div className="flex flex-wrap gap-2">
              {course.skillsGained.map((s) => (
                <span key={s} className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {course.demoNote && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>{course.demoNote}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onEnroll(course.id)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md"
          >
            Save to Dashboard Progress
          </button>
          
          <a
            href={course.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md flex items-center justify-center space-x-2"
          >
            <span>Go to Official Course</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

interface GovernmentDetailModalProps {
  program: GovernmentProgram | null;
  onClose: () => void;
}

export const GovernmentDetailModal: React.FC<GovernmentDetailModalProps> = ({
  program,
  onClose
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
              Official Government Initiative
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-semibold text-slate-400">{program.organization} • {program.region}</span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{program.programName}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{program.description}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-white">Eligibility Criteria:</h4>
            <p className="text-slate-600 dark:text-slate-300">{program.eligibility}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 block">Fee Structure</span>
              <span className="font-bold text-emerald-600">{program.feeType}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 block">Duration</span>
              <span className="font-bold text-slate-900 dark:text-white">{program.duration}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 block">Location Mode</span>
              <span className="font-bold text-slate-900 dark:text-white">{program.locationType}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 block">Status</span>
              <span className="font-bold text-indigo-600">{program.status}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Trades & Skills Covered</h4>
            <div className="flex flex-wrap gap-2">
              {program.skillsTaught.map((s) => (
                <span key={s} className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {program.demoNote && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>{program.demoNote}</span>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
          <span className="text-xs text-slate-500">Official Portal Link</span>
          <a
            href={program.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md flex items-center space-x-2"
          >
            <span>Visit Official Government Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
