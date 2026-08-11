import {
  CareerPath,
  Course,
  GovernmentProgram,
  Organization,
  Project,
  Opportunity,
  Skill,
  YouTubeResource,
  CommunicationModule,
  UserProgress,
  Certification,
} from '../types';

export const mockSkills: Skill[] = [
  { id: 's1', name: 'Python Programming', category: 'Artificial Intelligence', description: 'Essential language for AI, data analytics, scripting, and web backends.', demandLevel: 'Very High', icon: 'Code' },
  { id: 's2', name: 'Machine Learning Basics', category: 'Artificial Intelligence', description: 'Supervised & unsupervised learning algorithms using scikit-learn.', demandLevel: 'Very High', icon: 'Cpu' },
  { id: 's3', name: 'Generative AI & LLMs', category: 'Artificial Intelligence', description: 'Prompt engineering, RAG, Gemini API, and building AI agents.', demandLevel: 'Trending', icon: 'Sparkles' },
  { id: 's4', name: 'SQL & Database Design', category: 'Data Science', description: 'Querying relational databases, indexing, and data modeling.', demandLevel: 'Very High', icon: 'Database' },
  { id: 's5', name: 'Data Visualization & PowerBI', category: 'Data Science', description: 'Transforming raw data into interactive dashboards for business insights.', demandLevel: 'High', icon: 'BarChart' },
  { id: 's6', name: 'Network Fundamentals & Security', category: 'Cybersecurity', description: 'TCP/IP, OSI model, subnets, routers, and traffic inspection.', demandLevel: 'Very High', icon: 'Shield' },
  { id: 's7', name: 'Ethical Hacking & SOC', category: 'Cybersecurity', description: 'Vulnerability analysis, threat hunting, and security monitoring.', demandLevel: 'Very High', icon: 'Lock' },
  { id: 's8', name: 'AWS & Cloud Infrastructure', category: 'Cloud Computing', description: 'EC2, S3, IAM, serverless deployment, and cloud security.', demandLevel: 'Very High', icon: 'Cloud' },
  { id: 's9', name: 'React & Frontend Modern UI', category: 'Web Development', description: 'Building interactive SPAs with React, TypeScript, and Tailwind CSS.', demandLevel: 'Very High', icon: 'Layout' },
  { id: 's10', name: 'Node.js & Backend APIs', category: 'Web Development', description: 'Designing RESTful APIs, authentication, Express, and microservices.', demandLevel: 'High', icon: 'Server' },
  { id: 's11', name: 'UI/UX & Figma Design', category: 'Design', description: 'User research, wireframing, interactive prototyping, and design systems.', demandLevel: 'High', icon: 'Figma' },
  { id: 's12', name: 'English Business Communication', category: 'Soft Skills', description: 'Professional email writing, vocabulary, presentation, and workplace dialogue.', demandLevel: 'Very High', icon: 'MessageSquare' },
  { id: 's13', name: 'Public Speaking & Pitching', category: 'Soft Skills', description: 'Conveying technical ideas with confidence, storytelling, and body language.', demandLevel: 'High', icon: 'Mic' },
  { id: 's14', name: 'Docker & Kubernetes', category: 'DevOps', description: 'Containerization, orchestration, and CI/CD pipelines.', demandLevel: 'Very High', icon: 'Box' },
  { id: 's15', name: 'Digital Marketing & SEO', category: 'Marketing', description: 'Search optimization, content strategy, social growth, and analytics.', demandLevel: 'High', icon: 'TrendingUp' },
];

export const mockCareerPaths: CareerPath[] = [
  {
    id: 'c1',
    title: 'AI & Machine Learning Engineer',
    category: 'Artificial Intelligence',
    shortDescription: 'Build intelligent systems, neural networks, LLM agents, and automated decision engines.',
    fullDescription: 'AI Engineers design algorithms that allow machines to learn from data, reason, and automate complex tasks. This role bridges computer science, mathematics, and software engineering.',
    icon: 'Brain',
    demandLevel: 'Very High',
    salaryRangePlaceholder: '$60,000 - $110,000 / Entry - Mid Level',
    salaryDisclaimer: 'Salary benchmarks vary by region, portfolio quality, and employer type.',
    requiredSkills: ['Python Programming', 'Linear Algebra & Statistics', 'Machine Learning Basics', 'Deep Learning', 'Generative AI & LLMs', 'MLOps'],
    learningTimeMonths: 8,
    roadmap: [
      { stepNumber: 1, title: 'Computer & Python Fundamentals', description: 'Master logic, data structures, and Python programming.', skills: ['Python', 'Data Structures', 'Git'], estimatedWeeks: 4, recommendedCourses: ['course-python-101'], practiceProject: 'AI Resume Analyzer' },
      { stepNumber: 2, title: 'Mathematics & Statistics for AI', description: 'Understand vectors, matrix calculus, probability, and hypothesis testing.', skills: ['Linear Algebra', 'Calculus', 'Probability'], estimatedWeeks: 4, recommendedCourses: ['course-math-ai'] },
      { stepNumber: 3, title: 'Data Wrangling & Analysis', description: 'Clean, manipulate, and explore datasets using Pandas and NumPy.', skills: ['Pandas', 'NumPy', 'Data Cleaning'], estimatedWeeks: 3, recommendedCourses: ['course-data-analysis'] },
      { stepNumber: 4, title: 'Core Machine Learning', description: 'Train supervised and unsupervised models using scikit-learn.', skills: ['Regression', 'Classification', 'Clustering'], estimatedWeeks: 5, recommendedCourses: ['course-ml-foundations'], practiceProject: 'Student Grade Predictor' },
      { stepNumber: 5, title: 'Deep Learning & Neural Networks', description: 'Build CNNs and RNNs using PyTorch or TensorFlow.', skills: ['PyTorch', 'Neural Networks', 'Computer Vision'], estimatedWeeks: 6, recommendedCourses: ['course-deep-learning'] },
      { stepNumber: 6, title: 'Generative AI & LLM Agents', description: 'Master Prompt Engineering, RAG, and Gemini API integration.', skills: ['Gemini API', 'LangChain', 'RAG'], estimatedWeeks: 4, recommendedCourses: ['course-genai-mastery'], practiceProject: 'AI Smart Support Assistant' },
      { stepNumber: 7, title: 'Portfolio & Interview Prep', description: 'Publish 3 end-to-end GitHub projects and practice mock interviews.', skills: ['GitHub', 'Technical Writing', 'Interview Skills'], estimatedWeeks: 4, recommendedCourses: ['course-career-prep'] }
    ]
  },
  {
    id: 'c2',
    title: 'Cybersecurity Analyst & Threat Hunter',
    category: 'Cybersecurity',
    shortDescription: 'Protect enterprise networks, analyze vulnerability logs, and defend against cyber attacks.',
    fullDescription: 'Cybersecurity Analysts guard digital assets, monitor security incident response centers (SOC), conduct ethical penetration tests, and maintain data compliance.',
    icon: 'ShieldAlert',
    demandLevel: 'Very High',
    salaryRangePlaceholder: '$50,000 - $95,000 / Entry - Mid Level',
    salaryDisclaimer: 'Salary estimations based on industry averages; security certifications boost value.',
    requiredSkills: ['Networking Fundamentals', 'Linux Administration', 'Security Operations (SOC)', 'Ethical Hacking', 'Cloud Security'],
    learningTimeMonths: 6,
    roadmap: [
      { stepNumber: 1, title: 'Networking & Operating Systems', description: 'Understand TCP/IP, DNS, Firewalls, and Linux CLI.', skills: ['Networking', 'Linux', 'Bash'], estimatedWeeks: 4, recommendedCourses: ['course-net-sec'] },
      { stepNumber: 2, title: 'Security Fundamentals & Compliance', description: 'Learn CIA triad, threat vectors, and risk governance.', skills: ['Cyber Security Basics', 'ISO 27001'], estimatedWeeks: 3, recommendedCourses: ['course-sec-fund'] },
      { stepNumber: 3, title: 'SOC Monitoring & Incident Response', description: 'Analyze SIEM logs, Wireshark traffic, and intrusion alerts.', skills: ['Wireshark', 'Splunk', 'SIEM'], estimatedWeeks: 5, recommendedCourses: ['course-soc-analyst'], practiceProject: 'Cyber Security Monitoring Dashboard' },
      { stepNumber: 4, title: 'Ethical Hacking & Web Security', description: 'Identify OWASP Top 10 vulnerabilities and conduct audit tests.', skills: ['Burp Suite', 'Nmap', 'Penetration Testing'], estimatedWeeks: 6, recommendedCourses: ['course-eth-hack'] },
      { stepNumber: 5, title: 'Certification & Job Ready', description: 'Prepare for CompTIA Security+ or Certified Ethical Hacker (CEH).', skills: ['Certification Exam', 'Mock Interview'], estimatedWeeks: 4, recommendedCourses: ['course-sec-cert'] }
    ]
  },
  {
    id: 'c3',
    title: 'Data Analyst & BI Specialist',
    category: 'Data Science',
    shortDescription: 'Transform complex business numbers into clear dashboards, charts, and actionable strategies.',
    fullDescription: 'Data Analysts bridge raw data and business decisions using SQL, Excel, Python, PowerBI, and storytelling techniques to drive growth.',
    icon: 'BarChart3',
    demandLevel: 'Very High',
    salaryRangePlaceholder: '$40,000 - $75,000 / Entry - Mid Level',
    salaryDisclaimer: 'Entry-level compensation varies significantly based on analytical skill set.',
    requiredSkills: ['Advanced Excel', 'SQL Database Queries', 'PowerBI / Tableau', 'Python Data Cleaning', 'Business Storytelling'],
    learningTimeMonths: 5,
    roadmap: [
      { stepNumber: 1, title: 'Advanced Spreadsheets & Analysis', description: 'Master VLOOKUP, INDEX-MATCH, Pivot Tables, and macros.', skills: ['Excel', 'Data Cleaning'], estimatedWeeks: 3, recommendedCourses: ['course-excel-adv'] },
      { stepNumber: 2, title: 'SQL & Relational Databases', description: 'Write complex JOINs, aggregations, and subqueries.', skills: ['PostgreSQL', 'SQL Queries'], estimatedWeeks: 4, recommendedCourses: ['course-sql-bootcamp'], practiceProject: 'E-Commerce Sales Data Analysis' },
      { stepNumber: 3, title: 'Interactive BI Dashboards', description: 'Build dynamic dashboards in PowerBI or Tableau.', skills: ['PowerBI', 'Tableau', 'DAX'], estimatedWeeks: 4, recommendedCourses: ['course-powerbi'] },
      { stepNumber: 4, title: 'Python for Data Analytics', description: 'Perform exploratory data analysis with Pandas and Seaborn.', skills: ['Pandas', 'Matplotlib', 'Seaborn'], estimatedWeeks: 5, recommendedCourses: ['course-python-data'] },
      { stepNumber: 5, title: 'Business Case Studies & Resume', description: 'Construct a portfolio showcasing 3 industry business reports.', skills: ['Data Storytelling', 'Portfolio'], estimatedWeeks: 3, recommendedCourses: ['course-data-prep'] }
    ]
  },
  {
    id: 'c4',
    title: 'Full Stack Web Developer',
    category: 'Software Development',
    shortDescription: 'Create scalable end-to-end web applications with modern frontend frameworks and backend microservices.',
    fullDescription: 'Full Stack Web Developers build everything from responsive UI interfaces to database architectures and REST/GraphQL APIs.',
    icon: 'Code2',
    demandLevel: 'Very High',
    salaryRangePlaceholder: '$45,000 - $90,000 / Entry - Mid Level',
    salaryDisclaimer: 'High demand globally across startups, remote platforms, and software houses.',
    requiredSkills: ['HTML5/CSS3/Tailwind', 'JavaScript/TypeScript', 'React.js', 'Node.js & Express', 'MongoDB / PostgreSQL'],
    learningTimeMonths: 6,
    roadmap: [
      { stepNumber: 1, title: 'Frontend Core (HTML, CSS, JS)', description: 'Master DOM manipulation, responsive layouts, and ES6+ JS.', skills: ['HTML5', 'CSS3', 'JavaScript'], estimatedWeeks: 4, recommendedCourses: ['course-web-core'] },
      { stepNumber: 2, title: 'Modern React & UI Systems', description: 'Build SPAs with hooks, state management, and Tailwind CSS.', skills: ['React', 'TypeScript', 'Tailwind'], estimatedWeeks: 5, recommendedCourses: ['course-react-pro'], practiceProject: 'Personal Finance Dashboard' },
      { stepNumber: 3, title: 'Backend APIs with Node.js & Express', description: 'Design RESTful routes, JWT authentication, and middleware.', skills: ['Node.js', 'Express', 'JWT'], estimatedWeeks: 4, recommendedCourses: ['course-node-api'] },
      { stepNumber: 4, title: 'Databases & ORM Integration', description: 'Connect SQL and NoSQL databases with Drizzle or Prisma.', skills: ['PostgreSQL', 'MongoDB', 'Drizzle'], estimatedWeeks: 3, recommendedCourses: ['course-db-dev'] },
      { stepNumber: 5, title: 'Full Stack Project Deployment', description: 'Deploy apps to Cloud Run, Vercel, or AWS with CI/CD.', skills: ['Docker', 'Vercel', 'CI/CD'], estimatedWeeks: 4, recommendedCourses: ['course-devops-basics'], practiceProject: 'Full Stack Student Learning Portal' }
    ]
  },
  {
    id: 'c5',
    title: 'Cloud Architect & DevOps Engineer',
    category: 'Cloud Computing',
    shortDescription: 'Design resilient cloud infrastructures, automate deployment pipelines, and optimize cloud systems.',
    fullDescription: 'DevOps & Cloud Engineers streamline software delivery through infrastructure as code (IaC), automated testing, cloud server management, and monitoring.',
    icon: 'CloudLightning',
    demandLevel: 'Very High',
    salaryRangePlaceholder: '$55,000 - $105,000 / Entry - Mid Level',
    salaryDisclaimer: 'Strong demand due to global corporate cloud migration.',
    requiredSkills: ['Linux System Admin', 'AWS/GCP/Azure', 'Docker & Kubernetes', 'Terraform IaC', 'CI/CD Pipelines'],
    learningTimeMonths: 7,
    roadmap: [
      { stepNumber: 1, title: 'Linux System & Networking', description: 'Master bash shell scripting, permissions, and network sockets.', skills: ['Linux', 'Shell Scripting', 'Networking'], estimatedWeeks: 4, recommendedCourses: ['course-linux-pro'] },
      { stepNumber: 2, title: 'Cloud Platform Basics (AWS/GCP)', description: 'Configure virtual servers, IAM roles, VPCs, and storage buckets.', skills: ['AWS EC2', 'S3', 'IAM'], estimatedWeeks: 5, recommendedCourses: ['course-aws-cloud'] },
      { stepNumber: 3, title: 'Containers with Docker & K8s', description: 'Containerize microservices and orchestrate with Kubernetes.', skills: ['Docker', 'Kubernetes'], estimatedWeeks: 5, recommendedCourses: ['course-docker-k8s'] },
      { stepNumber: 4, title: 'CI/CD Pipelines & Terraform', description: 'Automate build pipelines with GitHub Actions and Terraform.', skills: ['GitHub Actions', 'Terraform'], estimatedWeeks: 4, recommendedCourses: ['course-cicd-devops'] }
    ]
  },
  {
    id: 'c6',
    title: 'UI/UX Product Designer',
    category: 'UI/UX Design',
    shortDescription: 'Craft user-centric wireframes, beautiful user interfaces, design systems, and interactive prototypes.',
    fullDescription: 'UI/UX Designers ensure digital products are intuitive, visually attractive, accessible, and aligned with user needs.',
    icon: 'Palette',
    demandLevel: 'High',
    salaryRangePlaceholder: '$38,000 - $78,000 / Entry - Mid Level',
    salaryDisclaimer: 'Portfolio showcase is the primary hiring benchmark in UI/UX design.',
    requiredSkills: ['Figma Prototyping', 'User Research & Personas', 'Design Systems', 'Wireframing & Layout', 'Usability Testing'],
    learningTimeMonths: 5,
    roadmap: [
      { stepNumber: 1, title: 'UX Research & Information Architecture', description: 'Understand user personas, journey mapping, and wireframing.', skills: ['UX Research', 'Wireframing'], estimatedWeeks: 4, recommendedCourses: ['course-ux-foundations'] },
      { stepNumber: 2, title: 'Figma Design Mastery', description: 'Master auto-layout, components, variants, and interactive prototypes.', skills: ['Figma', 'UI Design', 'Typography'], estimatedWeeks: 5, recommendedCourses: ['course-figma-pro'], practiceProject: 'EduTech Mobile App Redesign' },
      { stepNumber: 3, title: 'Design Systems & Accessibility', description: 'Build scalable design tokens and meet WCAG guidelines.', skills: ['Design Systems', 'WCAG Accessibility'], estimatedWeeks: 3, recommendedCourses: ['course-design-systems'] }
    ]
  }
];

export const mockCourses: Course[] = [
  {
    id: 'course-python-101',
    title: 'Python for Beginners: From Zero to Programmer',
    organization: 'DigiSkills.pk',
    orgLogo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=120&q=80',
    category: 'Artificial Intelligence',
    level: 'Beginner',
    duration: '6 Weeks (Self-paced)',
    isFree: true,
    priceTag: '100% Free',
    hasCertificate: true,
    sourceType: 'Government',
    mode: 'Self-paced',
    description: 'Learn fundamental Python programming syntax, data structures, loops, functions, and file handling.',
    skillsGained: ['Python', 'Problem Solving', 'Algorithm Basics'],
    externalUrl: 'https://digiskills.pk',
    rating: 4.8,
    studentsCount: 125000,
    isVerified: true,
    demoNote: 'Sample training program entry from DigiSkills.pk initiative.'
  },
  {
    id: 'course-genai-mastery',
    title: 'Generative AI & LLM Application Development',
    organization: 'Google Cloud',
    orgLogo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=120&q=80',
    category: 'Artificial Intelligence',
    level: 'Intermediate',
    duration: '4 Weeks',
    isFree: true,
    priceTag: 'Free Audit',
    hasCertificate: true,
    sourceType: 'Tech Company',
    mode: 'Self-paced',
    description: 'Build real-world generative AI applications using Gemini API, prompt engineering, RAG, and vector embeddings.',
    skillsGained: ['Gemini API', 'Prompt Engineering', 'RAG', 'Vector Search'],
    externalUrl: 'https://cloud.google.com/training',
    rating: 4.9,
    studentsCount: 84000,
    isVerified: true
  },
  {
    id: 'course-navttc-ai',
    title: 'NAVTTC High-Tech Certification in Artificial Intelligence',
    organization: 'NAVTTC Pakistan',
    orgLogo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=120&q=80',
    category: 'Artificial Intelligence',
    level: 'Intermediate',
    duration: '3 Months (Onsite / Hybrid)',
    isFree: true,
    priceTag: 'Fully Funded Government Program',
    hasCertificate: true,
    sourceType: 'Government',
    mode: 'Instructor-led',
    description: 'Government-funded intensive tech training program covering Machine Learning, Computer Vision, and AI deployments.',
    skillsGained: ['Python', 'Machine Learning', 'Computer Vision', 'PyTorch'],
    externalUrl: 'https://navttc.gov.pk',
    rating: 4.7,
    studentsCount: 45000,
    isVerified: true,
    demoNote: 'Official NAVTTC Prime Minister Youth Skills Development Program placeholder.'
  },
  {
    id: 'course-sec-fund',
    title: 'Introduction to Cybersecurity & Threat Defense',
    organization: 'Cisco Networking Academy',
    orgLogo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=120&q=80',
    category: 'Cybersecurity',
    level: 'Beginner',
    duration: '5 Weeks',
    isFree: true,
    priceTag: 'Free Course & Digital Badge',
    hasCertificate: true,
    sourceType: 'Tech Company',
    mode: 'Self-paced',
    description: 'Explore fundamental security concepts, malware detection, network protection, and personal privacy.',
    skillsGained: ['Network Security', 'Firewalls', 'Malware Analysis'],
    externalUrl: 'https://www.netacad.com',
    rating: 4.8,
    studentsCount: 210000,
    isVerified: true
  },
  {
    id: 'course-sql-bootcamp',
    title: 'SQL & Database Design Masterclass',
    organization: 'Coursera & University of Michigan',
    orgLogo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=120&q=80',
    category: 'Data Science',
    level: 'Beginner',
    duration: '4 Weeks',
    isFree: true,
    priceTag: 'Free Audit / Financial Aid Available',
    hasCertificate: true,
    sourceType: 'University',
    mode: 'Self-paced',
    description: 'Master relational databases, SQL queries, table normalizations, and data aggregation for business metrics.',
    skillsGained: ['SQL', 'PostgreSQL', 'Database Normalization'],
    externalUrl: 'https://www.coursera.org',
    rating: 4.8,
    studentsCount: 98000,
    isVerified: true
  },
  {
    id: 'course-react-pro',
    title: 'Modern Frontend Development with React 19 & TypeScript',
    organization: 'freeCodeCamp',
    orgLogo: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=120&q=80',
    category: 'Software Development',
    level: 'Intermediate',
    duration: '8 Weeks',
    isFree: true,
    priceTag: '100% Free Open Source',
    hasCertificate: true,
    sourceType: 'International',
    mode: 'Self-paced',
    description: 'Comprehensive hands-on training building real interactive web platforms with React, Hooks, Tailwind, and TypeScript.',
    skillsGained: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
    externalUrl: 'https://www.freecodecamp.org',
    rating: 4.9,
    studentsCount: 350000,
    isVerified: true
  },
  {
    id: 'course-aws-cloud',
    title: 'AWS Cloud Practitioner Essentials',
    organization: 'Amazon Web Services',
    orgLogo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=120&q=80',
    category: 'Cloud Computing',
    level: 'Beginner',
    duration: '3 Weeks',
    isFree: true,
    priceTag: '100% Free Official Course',
    hasCertificate: true,
    sourceType: 'Tech Company',
    mode: 'Self-paced',
    description: 'Official AWS cloud fundamentals course covering compute, networking, databases, storage, and security concepts.',
    skillsGained: ['AWS Cloud', 'EC2', 'S3', 'Cloud Security'],
    externalUrl: 'https://aws.amazon.com/training',
    rating: 4.8,
    studentsCount: 180000,
    isVerified: true
  },
  {
    id: 'course-english-comm',
    title: 'English Business Communication & Workplace Fluency',
    organization: 'British Council',
    orgLogo: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=120&q=80',
    category: 'Communication Skills',
    level: 'Beginner',
    duration: '4 Weeks',
    isFree: true,
    priceTag: 'Free Learning Resources',
    hasCertificate: true,
    sourceType: 'International',
    mode: 'Self-paced',
    description: 'Enhance your professional English vocabulary, email etiquette, confidence in team meetings, and interview responses.',
    skillsGained: ['Business English', 'Email Writing', 'Interview Speaking'],
    externalUrl: 'https://learnenglish.britishcouncil.org',
    rating: 4.9,
    studentsCount: 140000,
    isVerified: true
  }
];

export const mockGovernmentPrograms: GovernmentProgram[] = [
  {
    id: 'gov-navttc-pmydp',
    programName: 'Prime Minister Youth Skills Development Program (PMYSDP)',
    organization: 'NAVTTC (National Vocational and Technical Training Commission)',
    region: 'National (Pakistan)',
    skillsTaught: ['Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Full Stack Web Development', 'Mechatronics'],
    eligibility: 'Youth aged 18 - 40 years, Minimum Matriculation / Intermediate / Graduation based on trade.',
    locationType: 'Hybrid',
    duration: '3 to 6 Months',
    hasCertificate: true,
    feeType: '100% Free',
    applicationDeadline: '2026-09-30',
    status: 'Enrolling',
    officialWebsite: 'https://navttc.gov.pk',
    isVerified: true,
    demoNote: 'Verified public sector youth training initiative. Please check official site for enrollment updates.',
    description: 'Fully funded government initiative offering high-tech skill certifications in universities and institutes across the country.'
  },
  {
    id: 'gov-digiskills',
    programName: 'DigiSkills.pk Free Freelancing & Digital Training Batch 12',
    organization: 'Ignite National Technology Fund & Ministry of IT',
    region: 'National (Pakistan)',
    skillsTaught: ['Freelancing', 'Graphic Design', 'SEO', 'Digital Marketing', 'WordPress', 'Virtual Assistant'],
    eligibility: 'Open to all students, graduates, housemakers, and freelancers across Pakistan.',
    locationType: 'Online',
    duration: '12 Weeks',
    hasCertificate: true,
    feeType: '100% Free',
    applicationDeadline: '2026-10-15',
    status: 'Open',
    officialWebsite: 'https://digiskills.pk',
    isVerified: true,
    demoNote: 'Official online digital training program sponsored by Ministry of IT & Telecom.',
    description: 'Empowering 2 Million+ youth with digital skills to earn online through global freelancing marketplaces.'
  },
  {
    id: 'gov-ncai-bootcamp',
    programName: 'NCAI Applied AI & Deep Learning Fellowship',
    organization: 'National Centre for Artificial Intelligence (NCAI)',
    region: 'National (Pakistan)',
    skillsTaught: ['Computer Vision', 'NLP', 'TensorFlow', 'Edge AI', 'Generative Models'],
    eligibility: 'Undergraduate engineering/CS students or recent graduates with coding background.',
    locationType: 'Hybrid',
    duration: '10 Weeks',
    hasCertificate: true,
    feeType: 'Subsidized',
    applicationDeadline: '2026-09-10',
    status: 'Upcoming',
    officialWebsite: 'https://ncai.pk',
    isVerified: true,
    demoNote: 'Sample government research centre fellowship program for advanced AI candidates.',
    description: 'Specialized research-driven bootcamp led by university professors and AI industry leads.'
  },
  {
    id: 'gov-pitb-eearn',
    programName: 'e-Earn Co-working & Digital Skill Hubs',
    organization: 'Punjab Information Technology Board (PITB)',
    region: 'Provincial (Punjab)',
    skillsTaught: ['Freelancing Workspace', 'Digital Marketing', 'Content Creation', 'Remote Career Guidance'],
    eligibility: 'Young freelancers, remote workers, and university students in Punjab.',
    locationType: 'Onsite',
    duration: 'Ongoing Access',
    hasCertificate: false,
    feeType: 'Subsidized',
    applicationDeadline: 'Rolling Admissions',
    status: 'Open',
    officialWebsite: 'https://eearn.pitb.gov.pk',
    isVerified: true,
    demoNote: 'Government co-working and mentorship space initiative for young digital workers.',
    description: 'Providing subsidized high-speed internet, power backup, and mentorship spaces across Punjab districts.'
  }
];

export const mockOrganizations: Organization[] = [
  {
    id: 'org-google',
    name: 'Google Career Certificates & Cloud',
    type: 'Tech Company',
    logo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=120&q=80',
    description: 'Global technology giant offering industry-recognized certifications in Data Analytics, UX Design, Cloud, and IT Support.',
    country: 'United States / Global',
    availableProgramsCount: 18,
    officialWebsite: 'https://grow.google',
    categories: ['AI', 'Data Analytics', 'UX Design', 'Cloud'],
    isVerified: true
  },
  {
    id: 'org-navttc',
    name: 'NAVTTC Pakistan',
    type: 'Government',
    logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=120&q=80',
    description: 'Apex national body for technical education and vocational training in Pakistan.',
    country: 'Pakistan',
    availableProgramsCount: 45,
    officialWebsite: 'https://navttc.gov.pk',
    categories: ['Artificial Intelligence', 'Cybersecurity', 'Web Dev', 'HVAC'],
    isVerified: true
  },
  {
    id: 'org-cisco',
    name: 'Cisco Networking Academy',
    type: 'Tech Company',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=120&q=80',
    description: 'Global IT skills and cybersecurity education program partnering with learning institutions worldwide.',
    country: 'Global',
    availableProgramsCount: 12,
    officialWebsite: 'https://netacad.com',
    categories: ['Networking', 'Cybersecurity', 'IoT', 'Linux'],
    isVerified: true
  },
  {
    id: 'org-coursera',
    name: 'Coursera for Campus',
    type: 'Platform',
    logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=120&q=80',
    description: 'Leading global online learning platform partnering with 200+ top universities and tech pioneers.',
    country: 'Global',
    availableProgramsCount: 250,
    officialWebsite: 'https://coursera.org',
    categories: ['Computer Science', 'Business', 'AI', 'Languages'],
    isVerified: true
  }
];

export const mockProjects: Project[] = [
  {
    id: 'proj-ai-resume',
    title: 'AI Resume Analyzer & Feedback Engine',
    category: 'AI / Machine Learning',
    difficulty: 'Intermediate',
    estimatedHours: 12,
    description: 'Build a full web application that parses candidate resume PDFs, compares skills against job descriptions using Gemini API, and outputs a score and improvement roadmap.',
    skillsRequired: ['Python / TypeScript', 'Gemini API', 'PDF Parser', 'React UI'],
    learningOutcomes: ['Learn Prompt Engineering', 'Integrate LLM API in server routes', 'Process unstructured document text'],
    technologies: ['Gemini 3.6 Flash API', 'React', 'Tailwind', 'Express'],
    githubTemplateUrl: 'https://github.com/topics/resume-analyzer-ai',
    steps: [
      'Set up Express backend route /api/analyze-resume',
      'Parse PDF text payload into clean string format',
      'Pass prompt and job specs to Gemini 3.6 Flash model',
      'Render formatted score and suggestions in modern React dashboard'
    ]
  },
  {
    id: 'proj-student-dashboard',
    title: 'Personal Finance & Student Budget Dashboard',
    category: 'Web Development',
    difficulty: 'Beginner',
    estimatedHours: 8,
    description: 'Create a clean single-page interactive application tracking student income, expenses, monthly savings goals, and visual spending charts.',
    skillsRequired: ['React', 'Chart.js / Recharts', 'Tailwind CSS', 'Local State'],
    learningOutcomes: ['Master React hooks and state', 'Implement interactive charts', 'Design responsive cards'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    githubTemplateUrl: 'https://github.com/topics/budget-dashboard-react',
    steps: [
      'Build expense input forms with category tags',
      'Calculate totals and remaining student budget',
      'Render Recharts pie/bar charts for visual breakdowns',
      'Persist transactions in client local storage'
    ]
  },
  {
    id: 'proj-cyber-monitor',
    title: 'Network Traffic & Security Monitoring Dashboard',
    category: 'Cybersecurity',
    difficulty: 'Advanced',
    estimatedHours: 16,
    description: 'Develop a security operations dashboard simulating real-time IP log inspection, threat risk scoring, and malicious traffic alerts.',
    skillsRequired: ['Cyber Security Basics', 'Log Parsing', 'React Dashboard', 'Tailwind'],
    learningOutcomes: ['Understand SIEM log formats', 'Filter malicious IP ranges', 'Build alert systems'],
    technologies: ['React', 'Express', 'Tailwind CSS', 'Lucide Security Icons'],
    githubTemplateUrl: 'https://github.com/topics/cybersecurity-dashboard',
    steps: [
      'Create mock socket stream or JSON generator for server log events',
      'Filter suspicious ports (e.g. 22 SSH brute-force, 80 DDoS)',
      'Display active alert badges and severity levels',
      'Add search & filter controls for security analysts'
    ]
  }
];

export const mockOpportunities: Opportunity[] = [
  {
    id: 'opp-google-scholars',
    title: 'Google Generation Tech Scholarship 2026',
    type: 'Scholarship',
    organization: 'Google.org',
    location: 'Global / Regional',
    deadline: '2026-09-30',
    stipendOrReward: '$2,500 USD + Mentorship',
    eligibility: 'Undergraduate computer science or tech students from underrepresented backgrounds.',
    applyUrl: 'https://buildyourfuture.withgoogle.com/scholarships',
    skillsRequired: ['Computer Science', 'Leadership', 'Academic Achievement'],
    isVerified: true
  },
  {
    id: 'opp-ignite-hackathon',
    title: 'National Student AI & Innovation Hackathon',
    type: 'Hackathon',
    organization: 'Ignite National Technology Fund',
    location: 'Islamabad / Virtual Hybrid',
    deadline: '2026-10-10',
    stipendOrReward: 'PKR 1.5 Million Prize Pool + Incubation',
    eligibility: 'Student teams of 2-4 members currently enrolled in university.',
    applyUrl: 'https://ignite.org.pk',
    skillsRequired: ['AI/ML', 'Problem Solving', 'Pitching', 'Prototyping'],
    isVerified: true,
    demoNote: 'Sample national innovation challenge for young developers.'
  },
  {
    id: 'opp-meta-internship',
    title: 'Meta Production Engineering Fellowship',
    type: 'Internship',
    organization: 'Meta',
    location: 'Remote / EMEA',
    deadline: '2026-08-31',
    stipendOrReward: 'Paid Fellowship ($3,200/mo equivalent)',
    eligibility: 'Final year university students or recent graduates in CS/IT.',
    applyUrl: 'https://www.metacareers.com/students',
    skillsRequired: ['Linux', 'Python', 'Networking', 'Systems Engineering'],
    isVerified: true
  }
];

export const mockCertifications: Certification[] = [
  {
    id: 'cert-google-data',
    title: 'Google Professional Data Analytics Certificate',
    issuer: 'Google & Coursera',
    category: 'Data Science',
    description: 'Learn in-demand data analytics skills using R, SQL, Tableau, and spreadsheets with job-ready portfolio projects.',
    costType: '100% Free',
    examCode: 'GOOG-DA-2026',
    officialLink: 'https://grow.google/certificates/data-analytics'
  },
  {
    id: 'cert-aws-practitioner',
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    category: 'Cloud Computing',
    description: 'Industry standard entry-level cloud certification validating foundational knowledge of AWS cloud platform services.',
    costType: 'Government Subsidized',
    examCode: 'CLF-C02',
    officialLink: 'https://aws.amazon.com/certification/certified-cloud-practitioner'
  },
  {
    id: 'cert-navttc-ai-badge',
    title: 'NAVTTC Verified National AI Skill Badge',
    issuer: 'Ministry of Federal Education & NAVTTC',
    category: 'Artificial Intelligence',
    description: 'National government skill badge validating completion of intensive AI, Machine Learning, and Python training.',
    costType: '100% Free',
    examCode: 'PMYSDP-AI-2026',
    officialLink: 'https://navttc.gov.pk'
  },
  {
    id: 'cert-cisco-cyber',
    title: 'Cisco Certified Cybersecurity Junior Analyst',
    issuer: 'Cisco Networking Academy',
    category: 'Cybersecurity',
    description: 'Validates practical capabilities in network security monitoring, threat hunting, and SOC log analysis.',
    costType: '100% Free',
    examCode: 'CISCO-SEC-01',
    officialLink: 'https://www.netacad.com'
  }
];

export const mockYouTubeResources: YouTubeResource[] = [
  {
    id: 'yt-ai-full',
    title: 'Artificial Intelligence & Python Full Masterclass',
    channelName: 'freeCodeCamp.org',
    category: 'AI',
    topic: 'Python & AI Fundamentals',
    videoCount: 1,
    duration: '12 Hours',
    youtubeUrl: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
    playlistUrl: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
    level: 'Beginner',
    description: 'Comprehensive beginner video tutorial covering Python, algorithms, machine learning models, and neural network basics.',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'yt-cyber-intro',
    title: 'CompTIA Security+ Full Course for Beginners',
    channelName: 'NetworkChuck',
    category: 'Cybersecurity',
    topic: 'Security Fundamentals',
    videoCount: 1,
    duration: '8 Hours',
    youtubeUrl: 'https://www.youtube.com/results?search_query=networkchuck+security%2B',
    playlistUrl: 'https://www.youtube.com/results?search_query=networkchuck+security%2B',
    level: 'Beginner',
    description: 'Engaging, fast-paced overview of cybersecurity networks, hacking tools, firewalls, and security analyst skills.',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'yt-english-speak',
    title: 'English Conversation & Workplace Confidence',
    channelName: 'BBC Learning English',
    category: 'English Communication',
    topic: 'Professional English',
    videoCount: 10,
    duration: '3 Hours Playlist',
    youtubeUrl: 'https://www.youtube.com/user/bbclearningenglish',
    playlistUrl: 'https://www.youtube.com/user/bbclearningenglish',
    level: 'Beginner',
    description: 'Practical dialogue lessons on office interactions, asking questions confidently, and presenting ideas.',
    thumbnail: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80'
  }
];

export const mockCommunicationModules: CommunicationModule[] = [
  {
    id: 'comm-english-workplace',
    title: 'Workplace & Business English Fluency',
    category: 'English Communication',
    description: 'Master practical phrases, vocabulary, and confident phrasing for professional settings.',
    estimatedTime: '45 mins total',
    topics: [
      'Email Etiquette & Professional Structure',
      'Asking Questions in Technical Meetings',
      'Handling Client Feedback Gracefully'
    ],
    practiceScenario: 'Practice scenario: Draft an email to your project manager requesting a 2-day extension on your web development milestone due to API rate limit testing.',
    icon: 'MessageSquare',
    lessons: [
      {
        id: 'l1',
        title: 'Professional Email Etiquette',
        duration: '15 mins',
        keyTakeaways: ['Use subject lines that summarize action items', 'Avoid informal slang with clients', 'Structure with greeting, body, clear call-to-action, and sign-off'],
        interactivePrompt: 'Practice rewriting: "hey, send me the file asap" -> "Dear Team, could you please share the project summary at your earliest convenience?"'
      },
      {
        id: 'l2',
        title: 'Participating in Team Meetings',
        duration: '20 mins',
        keyTakeaways: ['How to interrupt politely: "May I add a quick point here?"', 'Summarizing progress clearly', 'Asking for clarification without fear']
      }
    ]
  },
  {
    id: 'comm-interview-prep',
    title: 'Job Interview & STAR Method Mastery',
    category: 'Interview Skills',
    description: 'Learn how to answer tough behavioral and technical questions using structured frameworks.',
    estimatedTime: '60 mins total',
    topics: [
      'STAR Method Framework (Situation, Task, Action, Result)',
      'Answering "Tell Me About Yourself" in 90 Seconds',
      'Explaining Technical Gaps or Failures Positively'
    ],
    practiceScenario: 'Practice scenario: Describe a challenge you faced when integrating a third-party API and how you systematically solved it.',
    icon: 'UserCheck',
    lessons: [
      {
        id: 'l3',
        title: 'The STAR Method (Situation, Task, Action, Result)',
        duration: '25 mins',
        keyTakeaways: [
          'Situation: Set the context briefly in 1-2 sentences.',
          'Task: State your exact responsibility or challenge.',
          'Action: Describe the step-by-step initiative YOU took.',
          'Result: Quantify the positive outcome (e.g. "improved efficiency by 30%").'
        ],
        interactivePrompt: 'Try crafting an answer for: "Tell me about a time you solved a difficult technical bug."'
      },
      {
        id: 'l4',
        title: 'Answering "Tell Me About Yourself"',
        duration: '15 mins',
        keyTakeaways: ['Present + Past + Future framework', 'Highlight key skills relevant to the job', 'Keep response under 90 seconds']
      }
    ]
  }
];

export const initialUserProgress: UserProgress = {
  name: 'Ahmed Khan',
  email: 'ahmed.student@example.com',
  currentTrack: 'AI & Machine Learning Engineer',
  completedCoursesCount: 3,
  learningHoursThisWeek: 6.5,
  learningStreakDays: 7,
  careerReadinessScore: 72,
  skillsGained: ['Python Programming', 'Machine Learning Basics', 'SQL', 'English Business Communication'],
  bookmarkedCourseIds: ['course-genai-mastery', 'course-sec-fund'],
  enrolledCourseIds: ['course-python-101', 'course-genai-mastery'],
  completedProjectIds: ['proj-student-dashboard'],
  achievements: [
    { id: 'a1', title: 'First Course Completed', icon: 'Trophy', description: 'Finished your first skill course on SkillSphere', dateEarned: '2026-08-01', unlocked: true },
    { id: 'a2', title: '7-Day Streak', icon: 'Flame', description: 'Maintained an active 7-day learning momentum', dateEarned: '2026-08-11', unlocked: true },
    { id: 'a3', title: 'AI Explorer', icon: 'Sparkles', description: 'Explored AI roadmaps & completed AI fundamentals', dateEarned: '2026-08-05', unlocked: true },
    { id: 'a4', title: 'Project Builder', icon: 'Code', description: 'Built and submitted a real-world portfolio project', dateEarned: '2026-08-09', unlocked: true },
    { id: 'a5', title: 'Career Ready', icon: 'Target', description: 'Achieved a career readiness score above 70%', dateEarned: '2026-08-11', unlocked: true },
    { id: 'a6', title: 'Government Program Graduate', icon: 'Award', description: 'Enrolled in a verified government technical program', unlocked: false }
  ]
};
