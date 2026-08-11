import React, { useState } from 'react';
import { Youtube, ExternalLink, Play, Search, CheckCircle2 } from 'lucide-react';
import { mockYouTubeResources } from '../data/mockData';

export const YouTubeLearningPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockYouTubeResources.filter((y) =>
    y.channelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    y.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    y.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
          <Youtube className="w-4 h-4" />
          <span>Curated Open Education</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          YouTube Learning Hub
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          High-quality, free video tutorials and full-length playlists curated from top global educators, engineers, and tech creators.
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
            placeholder="Search freeCodeCamp, CS50, Fireship, NetworkChuck, Simplilearn..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((yt) => (
          <div
            key={yt.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center space-x-1">
                  <Youtube className="w-3.5 h-3.5" />
                  <span>{yt.category}</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                  {yt.level}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {yt.channelName}
              </h3>

              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Course Track: {yt.topic}
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {yt.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Free Access</span>

              <a
                href={yt.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-sm flex items-center space-x-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Playlist</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
