export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  demandLevel: 'High' | 'Very High' | 'Trending';
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  organization: string;
  orgLogo?: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  isFree: boolean;
  priceTag?: string;
  hasCertificate: boolean;
  sourceType: 'Government' | 'National' | 'International' | 'University' | 'Tech Company' | 'YouTube';
  mode: 'Self-paced' | 'Instructor-led' | 'Hybrid';
  description: string;
  skillsGained: string[];
  externalUrl: string;
  rating: number;
  studentsCount: number;
  isVerified: boolean;
  demoNote?: string;
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  description: string;
  skills: string[];
  estimatedWeeks: number;
  recommendedCourses: string[];
  practiceProject?: string;
}

export interface CareerPath {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  demandLevel: 'High' | 'Very High' | 'Emerging';
  salaryRangePlaceholder: string; // e.g. "$45k - $90k / Entry - Mid level"
  salaryDisclaimer: string;
  requiredSkills: string[];
  learningTimeMonths: number;
  roadmap: RoadmapStep[];
}

export interface GovernmentProgram {
  id: string;
  programName: string;
  organization: string;
  region: string; // e.g., "National (Pakistan)", "Provincial (Punjab)", etc.
  skillsTaught: string[];
  eligibility: string;
  locationType: 'Online' | 'Onsite' | 'Hybrid';
  duration: string;
  hasCertificate: boolean;
  feeType: '100% Free' | 'Stipend Provided' | 'Subsidized';
  applicationDeadline: string;
  status: 'Open' | 'Enrolling' | 'Upcoming' | 'Closed';
  officialWebsite: string;
  isVerified: boolean;
  demoNote?: string;
  description: string;
}

export interface Organization {
  id: string;
  name: string;
  type: 'Government' | 'University' | 'Tech Company' | 'Platform';
  logo: string;
  description: string;
  country: string;
  availableProgramsCount: number;
  officialWebsite: string;
  categories: string[];
  isVerified: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  description: string;
  skillsRequired: string[];
  learningOutcomes: string[];
  technologies: string[];
  githubTemplateUrl?: string;
  steps: string[];
}

export interface Opportunity {
  id: string;
  title: string;
  type: 'Scholarship' | 'Internship' | 'Entry-Level Job' | 'Bootcamp' | 'Competition' | 'Hackathon';
  organization: string;
  location: string;
  deadline: string;
  stipendOrReward?: string;
  eligibility: string;
  applyUrl: string;
  skillsRequired: string[];
  isVerified: boolean;
  demoNote?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
  costType: '100% Free' | 'Government Subsidized' | 'Paid Exam';
  examCode?: string;
  officialLink: string;
}

export interface YouTubeResource {
  id: string;
  title: string;
  channelName: string;
  category: string;
  topic: string;
  videoCount: number;
  duration: string;
  youtubeUrl: string;
  playlistUrl?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  thumbnail: string;
}

export interface CommunicationLesson {
  id: string;
  title: string;
  duration: string;
  keyTakeaways: string[];
  interactivePrompt?: string;
}

export interface CommunicationModule {
  id: string;
  title: string;
  category: 'English Communication' | 'Public Speaking' | 'Career Communication' | 'Interview Skills' | 'Workplace Skills';
  description: string;
  estimatedTime?: string;
  topics?: string[];
  practiceScenario?: string;
  lessons: CommunicationLesson[];
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  dateEarned?: string;
  unlocked: boolean;
}

export interface UserProgress {
  name: string;
  email: string;
  currentTrack: string;
  completedCoursesCount: number;
  learningHoursThisWeek: number;
  learningStreakDays: number;
  careerReadinessScore: number; // e.g. 78%
  skillsGained: string[];
  achievements: Achievement[];
  bookmarkedCourseIds: string[];
  enrolledCourseIds: string[];
  completedProjectIds: string[];
}
