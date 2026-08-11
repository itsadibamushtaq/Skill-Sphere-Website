import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExploreCoursesPage } from './pages/ExploreCoursesPage';
import { CareerPathsPage } from './pages/CareerPathsPage';
import { RoadmapsPage } from './pages/RoadmapsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GovernmentProgramsPage } from './pages/GovernmentProgramsPage';
import { CommunicationPage } from './pages/CommunicationPage';
import { YouTubeLearningPage } from './pages/YouTubeLearningPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';

// Modals
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AuthModal } from './components/AuthModal';
import { CareerAssessmentModal } from './components/CareerAssessmentModal';
import { SkillGapModal } from './components/SkillGapModal';
import { LearningPlanModal } from './components/LearningPlanModal';
import { CourseDetailModal, GovernmentDetailModal } from './components/DetailModals';

// Mock Data & Types
import { mockCourses, mockGovernmentPrograms, initialUserProgress, mockOpportunities } from './data/mockData';
import { Course, GovernmentProgram } from './types';
import { Sparkles, Send, Globe, Bot, ShieldCheck, Award, BookOpen, BarChart3, Users, Building2, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [skillGapOpen, setSkillGapOpen] = useState(false);
  const [learningPlanOpen, setLearningPlanOpen] = useState(false);
  const [generatedPlanData, setGeneratedPlanData] = useState<any | null>(null);

  // Selected Detail Modal state
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedGov, setSelectedGov] = useState<GovernmentProgram | null>(null);

  // User Progress State
  const [userProgress, setUserProgress] = useState(initialUserProgress);

  // AI Assistant Chat state
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiChatHistory, setAiChatHistory] = useState([
    { sender: 'ai', text: 'Hello! I am your SkillSphere AI Career Mentor. Ask me anything about digital skills, choosing an AI or Web Development career, government scholarships, or preparing for job interviews!' }
  ]);
  const [aiLoading, setAiLoading] = useState(false);

  // Apply dark mode CSS class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle enrolling/saving courses
  const handleEnrollCourse = (courseId: string) => {
    setUserProgress((prev) => {
      if (prev.enrolledCourseIds.includes(courseId)) {
        return prev;
      }
      return {
        ...prev,
        enrolledCourseIds: [...prev.enrolledCourseIds, courseId],
        learningHoursThisWeek: prev.learningHoursThisWeek + 2
      };
    });
    alert('Course saved to your Student Dashboard progress tracker!');
  };

  // AI Assistant Submission
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim() || aiLoading) return;

    const userText = aiPrompt.trim();
    setAiChatHistory((prev) => [...prev, { sender: 'user', text: userText }]);
    setAiPrompt('');
    setAiLoading(true);

    setTimeout(() => {
      let aiReply = "Great question! Focusing on high-demand skills like Python, Generative AI, SQL, and Business English will significantly increase your employability. I recommend taking the 2-minute Career Assessment or exploring NAVTTC & DigiSkills government initiatives listed on our platform.";
      
      const lower = userText.toLowerCase();
      if (lower.includes('ai') || lower.includes('machine learning')) {
        aiReply = "To start with AI: 1) Master Python basics (Course: Python 101 on DigiSkills). 2) Learn SQL & Pandas for data wrangling. 3) Explore Gemini API & Prompt Engineering. Check out our AI Engineer roadmap in the Roadmaps section!";
      } else if (lower.includes('cyber') || lower.includes('security')) {
        aiReply = "Cybersecurity is in extremely high demand! Start with Linux & Network Fundamentals, then take Cisco Networking Academy's free Intro to Cybersecurity course on our platform.";
      } else if (lower.includes('government') || lower.includes('free') || lower.includes('navttc')) {
        aiReply = "You can enroll in 100% free government funded programs like NAVTTC Prime Minister Youth Skills Program or DigiSkills.pk! Check out the 'Government Programs' tab for active admission deadlines.";
      }

      setAiChatHistory((prev) => [...prev, { sender: 'ai', text: aiReply }]);
      setAiLoading(false);
    }, 1000);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Top Main Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        onOpenAssessment={() => setAssessmentOpen(true)}
      />

      {/* Primary Page Content Render */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={setActiveTab}
            onOpenAssessment={() => setAssessmentOpen(true)}
            onOpenSkillGap={() => setSkillGapOpen(true)}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onSelectGov={(gov) => setSelectedGov(gov)}
          />
        )}

        {activeTab === 'courses' && (
          <ExploreCoursesPage
            onSelectCourse={(course) => setSelectedCourse(course)}
            onEnrollCourse={handleEnrollCourse}
          />
        )}

        {activeTab === 'careers' && (
          <CareerPathsPage
            onSelectPath={(path) => {
              setActiveTab('roadmaps');
            }}
          />
        )}

        {activeTab === 'roadmaps' && (
          <RoadmapsPage
            onOpenAssessment={() => setAssessmentOpen(true)}
            onSelectCourse={(course) => setSelectedCourse(course)}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage />
        )}

        {(activeTab === 'government' || activeTab === 'organizations') && (
          <GovernmentProgramsPage
            onSelectGov={(gov) => setSelectedGov(gov)}
          />
        )}

        {(activeTab === 'opportunities' || activeTab === 'certifications') && (
          <CertificationsPage />
        )}

        {activeTab === 'youtube-learning' && (
          <YouTubeLearningPage />
        )}

        {activeTab === 'communication' && (
          <CommunicationPage />
        )}

        {activeTab === 'student-dashboard' && (
          <StudentDashboardPage
            userProgress={userProgress}
            onOpenSkillGap={() => setSkillGapOpen(true)}
            onOpenAssessment={() => setAssessmentOpen(true)}
          />
        )}

        {/* Dedicated View: AI Mentor Assistant */}
        {activeTab === 'ai-assistant' && (
          <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl space-y-2 border border-indigo-500/30">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-indigo-300 uppercase tracking-wider bg-indigo-950/80 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Powered by Gemini AI</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black">SkillSphere AI Career Assistant</h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Ask personalized career guidance questions, analyze skill gaps, request custom learning roadmaps, or draft interview practice answers.
              </p>
            </div>

            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col h-[550px]">
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">AI Career Mentor</h3>
                    <p className="text-[10px] text-emerald-500 font-semibold">Online • Instant Guidance</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {aiChatHistory.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-lg p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {aiLoading && (
                  <div className="flex justify-start">
                    <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs animate-pulse flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-indigo-500 animate-spin" />
                      <span>SkillSphere AI is analyzing career roadmaps...</span>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-3">
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Ask e.g.: 'How can I become an AI Engineer without a CS degree?'"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={aiLoading}
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md flex items-center space-x-2"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Dedicated View: Global Hub */}
        {activeTab === 'global-learning' && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                <Globe className="w-4 h-4" />
                <span>International University & Tech Platforms</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Global Opportunity & Learning Hub
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                Access verified free courses and international tech scholarships from Google, Coursera, edX, Harvard, MIT, and UN Youth initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockOpportunities.map((opp) => (
                <div key={opp.id} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{opp.organization}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {opp.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{opp.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{opp.eligibility}</p>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Reward/Stipend: {opp.stipendOrReward}
                    </div>
                  </div>
                  <a
                    href={opp.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Apply via Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dedicated View: Admin Portal */}
        {activeTab === 'admin' && (
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-2 border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Platform Management</span>
              <h1 className="text-3xl font-black">SkillSphere Admin & Analytics Portal</h1>
              <p className="text-xs text-slate-400">Monitor youth enrollment, course verification feeds, and government program synchronizations.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-2xl font-black text-slate-900 dark:text-white">12,450</span>
                <p className="text-xs text-slate-500 font-bold uppercase">Active Students Enrolled</p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-2xl font-black text-emerald-600">100%</span>
                <p className="text-xs text-slate-500 font-bold uppercase">Verified Public Programs</p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-2xl font-black text-blue-600">84%</span>
                <p className="text-xs text-slate-500 font-bold uppercase">Career Completion Rate</p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-2xl font-black text-indigo-600">28</span>
                <p className="text-xs text-slate-500 font-bold uppercase">Partner Organizations</p>
              </div>
            </div>
          </div>
        )}

        {/* Dedicated View: About Platform */}
        {activeTab === 'about' && (
          <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Platform Mission</span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">Empowering Youth with Employable Digital Skills</h1>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                SkillSphere was created to bridge the digital gap facing students and young professionals. By unifying government training initiatives, international tech certifications, soft skill academies, and AI guidance, we help every young person build a high-value career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                <Award className="w-8 h-8 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Quality Content</h3>
                <p className="text-xs text-slate-500">Every listed course is vetted for practical skill building and official verification.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Government Backed</h3>
                <p className="text-xs text-slate-500">Direct integration with NAVTTC, DigiSkills, and PITB youth empowerment programs.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                <Sparkles className="w-8 h-8 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">AI Powered</h3>
                <p className="text-xs text-slate-500">Instant AI career roadmap generation and automated skill gap analysis.</p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Global Application Footer */}
      <Footer onNavigate={setActiveTab} />

      {/* MODALS */}

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectCourse={(course) => {
          setSearchOpen(false);
          setSelectedCourse(course);
        }}
        onSelectGov={(gov) => {
          setSearchOpen(false);
          setSelectedGov(gov);
        }}
        onNavigate={(tab) => {
          setSearchOpen(false);
          setActiveTab(tab);
        }}
      />

      {/* Sign In / Register Auth Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
      />

      {/* Career Path Quiz Modal */}
      <CareerAssessmentModal
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
        onCompleteAssessment={(result) => {
          setAssessmentOpen(false);
          setActiveTab('roadmaps');
        }}
      />

      {/* Skill Gap Analyzer Modal */}
      <SkillGapModal
        isOpen={skillGapOpen}
        onClose={() => setSkillGapOpen(false)}
        onGeneratePlan={(plan) => {
          setSkillGapOpen(false);
          setGeneratedPlanData(plan);
          setLearningPlanOpen(true);
        }}
      />

      {/* Custom Learning Plan Modal */}
      <LearningPlanModal
        isOpen={learningPlanOpen}
        onClose={() => setLearningPlanOpen(false)}
        planData={generatedPlanData}
      />

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(courseId) => {
          handleEnrollCourse(courseId);
          setSelectedCourse(null);
        }}
      />

      {/* Government Program Detail Modal */}
      <GovernmentDetailModal
        program={selectedGov}
        onClose={() => setSelectedGov(null)}
      />

    </div>
  );
}
