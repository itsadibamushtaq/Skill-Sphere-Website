import React from 'react';
import { Hero } from '../components/Hero';
import {
  Brain,
  ShieldAlert,
  BarChart3,
  Cloud,
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Boxes,
  Bot,
  Zap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Youtube,
  MessageSquare,
  Award,
  PlayCircle,
  FolderGit2,
  Compass,
  Sliders
} from 'lucide-react';
import { mockGovernmentPrograms, mockCareerPaths, mockCourses, mockProjects } from '../data/mockData';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenAssessment: () => void;
  onOpenSkillGap: () => void;
  onSelectCourse: (course: any) => void;
  onSelectGov: (gov: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAssessment,
  onOpenSkillGap,
  onSelectCourse,
  onSelectGov
}) => {
  const domains = [
    { title: 'Artificial Intelligence', desc: 'LLMs, Neural Networks, Computer Vision, Gemini API', icon: Brain, level: 'High Demand', resources: 18, color: 'from-blue-500 to-indigo-600' },
    { title: 'Data Science & BI', desc: 'SQL, Python Data Cleaning, PowerBI, Machine Learning', icon: BarChart3, level: 'High Demand', resources: 14, color: 'from-cyan-500 to-blue-600' },
    { title: 'Cybersecurity', desc: 'Network Defense, SOC Log Analysis, Ethical Hacking', icon: ShieldAlert, level: 'Very High', resources: 12, color: 'from-emerald-500 to-teal-600' },
    { title: 'Cloud Computing', desc: 'AWS, GCP, Microservices, Docker, Kubernetes', icon: Cloud, level: 'High Demand', resources: 15, color: 'from-sky-500 to-blue-700' },
    { title: 'Software Development', desc: 'React, TypeScript, Node.js, Express, Full Stack', icon: Code2, level: 'Very High', resources: 22, color: 'from-purple-500 to-indigo-600' },
    { title: 'Mobile App Dev', desc: 'React Native, Flutter, iOS & Android Deployment', icon: Smartphone, level: 'Emerging', resources: 9, color: 'from-amber-500 to-orange-600' },
    { title: 'UI/UX Design', desc: 'Figma Prototyping, Wireframing, WCAG Accessibility', icon: Palette, level: 'High Demand', resources: 10, color: 'from-pink-500 to-rose-600' },
    { title: 'Digital Marketing', desc: 'SEO, Content Analytics, Social Strategy, Google Ads', icon: TrendingUp, level: 'Trending', resources: 8, color: 'from-violet-500 to-purple-600' },
    { title: 'Blockchain & Web3', desc: 'Smart Contracts, Solidity, Decentralized Finance', icon: Boxes, level: 'Emerging', resources: 6, color: 'from-emerald-600 to-blue-600' },
    { title: 'Robotics & IoT', desc: 'Embedded C++, Sensors, Edge Computing, Automation', icon: Bot, level: 'Future Tech', resources: 7, color: 'from-slate-600 to-indigo-600' },
    { title: 'Communication Skills', desc: 'Business English, Interview Prep, Public Speaking', icon: MessageSquare, level: 'Core Soft Skill', resources: 11, color: 'from-blue-600 to-cyan-600' },
    { title: 'Emerging Technologies', desc: 'Quantum Computing, AR/VR, Generative Agents', icon: Zap, level: 'Next Gen', resources: 8, color: 'from-fuchsia-500 to-purple-700' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. Hero Section */}
      <Hero
        onStartLearning={() => onNavigate('courses')}
        onExploreCareers={() => onNavigate('careers')}
        onOpenAssessment={onOpenAssessment}
      />

      {/* 2. Interactive Animated Landing Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              50+
            </span>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Learning Categories</p>
          </div>
          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              100+
            </span>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Curated Resources</p>
          </div>
          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
              25+
            </span>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Career Roadmaps</p>
          </div>
          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              10+
            </span>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Verified Public Partners</p>
          </div>
        </div>
      </section>

      {/* 3. Section 1: Explore Your Future Domain Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Compass className="w-4 h-4" />
              <span>Explore Digital Domains</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Explore Your Future Career Skills
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              Choose from high-value digital domains and access structured learning materials, certifications, and projects.
            </p>
          </div>

          <button
            onClick={() => onNavigate('courses')}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-fit flex items-center space-x-2"
          >
            <span>Browse All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {domains.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                onClick={() => onNavigate('courses')}
                className="group relative p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${d.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                      {d.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {d.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <span>{d.resources} Learning Resources</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Interactive Quiz & Skill Gap Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-blue-500/20">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Interactive Career Guidance Tools</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black">
                Not Sure Which Digital Career Fits Your Talents?
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Take our 2-minute career path assessment or analyze your skill gaps against real job requirements to receive personalized learning roadmaps and course recommendations.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onOpenAssessment}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg flex items-center justify-center space-x-2 transition-all"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Take Career Path Quiz</span>
              </button>

              <button
                onClick={onOpenSkillGap}
                className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs flex items-center justify-center space-x-2 transition-all"
              >
                <Sliders className="w-4 h-4 text-blue-400" />
                <span>Run Skill Gap Analyzer</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Section: Dedicated Government Training Directory Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Public Sector Initiatives</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Government Learning & Training Programs
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              Discover verified government-funded technical programs, free certifications, and subsidized IT bootcamps.
            </p>
          </div>

          <button
            onClick={() => onNavigate('government')}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-fit flex items-center space-x-2"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockGovernmentPrograms.map((prog) => (
            <div
              key={prog.id}
              onClick={() => onSelectGov(prog)}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{prog.organization}</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{prog.status}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                  {prog.programName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {prog.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{prog.feeType}</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">View Program Details →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. User Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Structured Youth Learning Model
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Your Step-by-Step Learning Journey
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            We don't just show you courses. We guide you step-by-step from zero knowledge to employability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
          {[
            { step: '1', title: 'Discover Skills', desc: 'Identify core trends' },
            { step: '2', title: 'Career Quiz', desc: 'Find your best path' },
            { step: '3', title: 'Roadmap', desc: 'Step-by-step guide' },
            { step: '4', title: 'Learn Courses', desc: 'Free & verified' },
            { step: '5', title: 'Build Projects', desc: 'Real-world practice' },
            { step: '6', title: 'Certifications', desc: 'Earn badges' },
            { step: '7', title: 'Job Ready', desc: 'Resume & Interviews' },
          ].map((item) => (
            <div key={item.step} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto text-xs">
                {item.step}
              </span>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</h4>
              <p className="text-[10px] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black max-w-2xl mx-auto">
            Ready to Build Your Future with High-Value Digital Skills?
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            Join thousands of students learning AI, software development, cybersecurity, and communication skills on SkillSphere today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('courses')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-blue-900 font-bold text-sm shadow-lg hover:bg-slate-100 transition-all"
            >
              Start Free Learning Journey
            </button>
            <button
              onClick={() => onNavigate('ai-assistant')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white border border-blue-400/40 font-bold text-xs transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span>Ask AI Career Assistant</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
