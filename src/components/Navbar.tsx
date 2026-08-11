import React, { useState } from 'react';
import {
  Compass,
  BookOpen,
  Map,
  Code2,
  Building2,
  Globe2,
  Youtube,
  MessageSquare,
  Award,
  Sparkles,
  Search,
  User,
  Moon,
  Sun,
  Menu,
  X,
  ShieldCheck,
  Briefcase,
  SlidersHorizontal,
  ChevronDown,
  LayoutDashboard
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  onOpenSearch,
  onOpenAuth,
  onOpenAssessment
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'courses', label: 'Explore Courses', icon: BookOpen },
    { id: 'careers', label: 'Career Paths', icon: Briefcase },
    { id: 'roadmaps', label: 'Roadmaps', icon: Map },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'government', label: 'Government Programs', icon: ShieldCheck },
    { id: 'opportunities', label: 'Opportunities', icon: Award },
    { id: 'ai-assistant', label: 'SkillSphere AI', icon: Sparkles, badge: 'AI' }
  ];

  const secondaryNavItems = [
    { id: 'global-learning', label: 'Global Hub', icon: Globe2 },
    { id: 'youtube-learning', label: 'YouTube Hub', icon: Youtube },
    { id: 'communication', label: 'Communication Academy', icon: MessageSquare },
    { id: 'organizations', label: 'Organizations', icon: Building2 },
    { id: 'student-dashboard', label: 'Student Dashboard', icon: LayoutDashboard },
    { id: 'admin', label: 'Admin Portal', icon: SlidersHorizontal },
    { id: 'about', label: 'About Platform', icon: Compass }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-800 dark:from-white dark:via-slate-100 dark:to-blue-400 bg-clip-text text-transparent">
                  SkillSphere
                </span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                  Youth
                </span>
              </div>
              <p className="hidden sm:block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Learn. Build. Connect. Grow.
              </p>
            </div>
          </div>

          {/* Desktop Primary Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavItems.slice(0, 6).map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Dropdown for More Categories */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {secondaryNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center space-x-2.5 px-4 py-2.5 text-xs font-medium transition-colors text-left ${
                          activeTab === item.id
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 font-semibold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-slate-400" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center space-x-2 text-xs font-medium"
              title="Global Search"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-500">
                ⌘K
              </kbd>
            </button>

            {/* AI Assistant Quick Pill */}
            <button
              onClick={() => handleNavClick('ai-assistant')}
              className={`hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold shadow-xs transition-all ${
                activeTab === 'ai-assistant'
                  ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                  : 'bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 hover:shadow-md'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
              <span>Ask AI Mentor</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Student Dashboard Quick Avatar */}
            <button
              onClick={() => handleNavClick('student-dashboard')}
              className="flex items-center space-x-2 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="View Student Dashboard"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                AK
              </div>
            </button>

            {/* Login / Register Button */}
            <button
              onClick={onOpenAuth}
              className="hidden sm:flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm transition-all"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Main Navigation</div>
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400 text-slate-900">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-3 mb-2 border-t border-slate-200 dark:border-slate-800">
            More Hubs & Tools
          </div>
          {secondaryNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 text-slate-400" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 flex flex-col space-y-2">
            <button
              onClick={onOpenAssessment}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md text-center"
            >
              Career Path Quiz
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 text-center"
            >
              Sign In / Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
