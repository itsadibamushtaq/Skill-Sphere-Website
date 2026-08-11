import React, { useState } from 'react';
import { Search, Filter, BookOpen, ShieldCheck, ExternalLink, Star, Bookmark, CheckCircle2 } from 'lucide-react';
import { mockCourses } from '../data/mockData';
import { Course } from '../types';

interface ExploreCoursesPageProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (courseId: string) => void;
}

export const ExploreCoursesPage: React.FC<ExploreCoursesPageProps> = ({
  onSelectCourse,
  onEnrollCourse
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [freeOnly, setFreeOnly] = useState(false);
  const [certifiedOnly, setCertifiedOnly] = useState(false);

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSource = sourceFilter === 'All' || course.sourceType === sourceFilter;
    const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
    const matchesFree = !freeOnly || course.isFree;
    const matchesCert = !certifiedOnly || course.hasCertificate;

    return matchesSearch && matchesSource && matchesLevel && matchesFree && matchesCert;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <BookOpen className="w-4 h-4" />
          <span>Course Discovery Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Explore Curated Digital Courses
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          Discover high-quality learning materials aggregated from verified government programs, top universities, tech companies, and open platforms.
        </p>
      </div>

      {/* Search & Filters Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by course name, skill, or organization..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Source Type Filter */}
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
          >
            <option value="All">All Providers</option>
            <option value="Government">Government Programs</option>
            <option value="Tech Company">Tech Companies (Google/AWS/Cisco)</option>
            <option value="University">Universities</option>
            <option value="International">International Platforms</option>
          </select>

          {/* Level Filter */}
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
          >
            <option value="All">All Skill Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Checkbox Toggles */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 pt-1 border-t border-slate-100 dark:border-slate-700/60">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={freeOnly}
              onChange={(e) => setFreeOnly(e.target.checked)}
              className="rounded text-blue-600 accent-blue-600"
            />
            <span>Show Free Courses Only</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={certifiedOnly}
              onChange={(e) => setCertifiedOnly(e.target.checked)}
              className="rounded text-blue-600 accent-blue-600"
            />
            <span>With Official Certificate</span>
          </label>
        </div>

      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
        <span>Showing {filteredCourses.length} Courses</span>
        <span>Filtered View</span>
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{course.organization}</span>
                {course.isVerified && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                )}
              </div>

              <h3
                onClick={() => onSelectCourse(course)}
                className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors line-clamp-2"
              >
                {course.title}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {course.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {course.skillsGained.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block">{course.priceTag || 'Free'}</span>
                <span className="text-[10px] text-slate-400">{course.duration}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onEnrollCourse(course.id)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-[11px]"
                >
                  Save
                </button>
                <button
                  onClick={() => onSelectCourse(course)}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] shadow-sm"
                >
                  View Details
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
