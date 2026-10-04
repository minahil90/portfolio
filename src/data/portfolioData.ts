import { Project, SkillItem, EducationItem, AchievementItem, InterestItem } from '../types';

export const PERSONAL_INFO = {
  name: "MINAHIL TARIQ",
  title: "Student • Creative Thinker • Future Professional",
  tagline: "Bridging analytical rigor with creative execution to build human-centered digital experiences.",
  heroStatement: "“I’m Minahil Tariq — a curious student passionate about learning, creativity, technology, and building meaningful work.”",
  aboutIntro: "I am an ambitious student with an insatiable appetite for discovery, problem-solving, and creative exploration. Sitting at the intersection of modern technology and thoughtful design, I strive to turn complex concepts into intuitive, impactful solutions. I believe that dedication, collaborative empathy, and continuous learning are the foundations of meaningful leadership.",
  email: "tariqmehmoodawan658@gmail.com",
  location: "Islamabad, Pakistan",
  status: "Open for Internships & Projects",
  socialLinks: {
    linkedin: "https://linkedin.com/in/minahil-tariq",
    github: "https://github.com/minahil-tariq",
    twitter: "https://twitter.com/minahiltariq",
    email: "mailto:tariqmehmoodawan658@gmail.com",
    behance: "https://behance.net/minahiltariq"
  },
  stats: [
    { label: "Dedication", value: "100%", subtext: "Academic & project focus" },
    { label: "Projects Completed", value: "12+", subtext: "Academic & freelance" },
    { label: "Certifications", value: "8+", subtext: "Tech, leadership & design" },
    { label: "Learning Mindset", value: "Continuous", subtext: "Always acquiring new skills" }
  ],
  pillars: [
    {
      title: "Student Mindset",
      subtitle: "Relentless Curiosity",
      desc: "Approaching every challenge with intellectual humility and a hunger to understand core principles from the ground up."
    },
    {
      title: "Creative Learner",
      subtitle: "Interdisciplinary Synthesis",
      desc: "Combining technical logic with aesthetic intuition to design solutions that are as elegant as they are functional."
    },
    {
      title: "Future Professional",
      subtitle: "Integrity & Execution",
      desc: "Committed to rigorous work ethics, dependable teamwork, proactive communication, and high standards of craft."
    }
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "web-dev",
    name: "Web Development",
    category: "Technical & Web",
    level: "Proficient",
    description: "Building responsive, modern, and accessible user interfaces utilizing clean semantic code, modern frameworks, and responsive design systems.",
    tools: ["HTML5 / CSS3", "Tailwind CSS", "JavaScript (ES6+)", "React.js", "Vite", "Responsive Layouts"],
    iconName: "Code"
  },
  {
    id: "computer-skills",
    name: "Computer Skills",
    category: "Technical & Web",
    level: "Advanced",
    description: "High digital fluency spanning operating systems, version control workflows, office suites, data analysis software, and modern cloud collaboration tools.",
    tools: ["Git & GitHub", "VS Code", "MS Office 365", "Google Workspace", "Command Line", "Database Basics"],
    iconName: "Laptop"
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "Creative & Problem Solving",
    level: "Advanced",
    description: "Deconstructing ambiguous problems into systematic algorithmic steps, optimizing workflows, and debugging bottlenecks with analytical clarity.",
    tools: ["Algorithmic Logic", "Data Structures", "Root Cause Analysis", "Critical Thinking", "Troubleshooting"],
    iconName: "Cpu"
  },
  {
    id: "creativity",
    name: "Creativity",
    category: "Creative & Problem Solving",
    level: "Specialized",
    description: "Conceptualizing original design themes, user journeys, visual balance, and modern typographic hierarchies that evoke refined emotion.",
    tools: ["UI/UX Prototyping", "Figma", "Visual Hierarchy", "Color Theory", "Editorial Layouts", "Wireframing"],
    iconName: "Palette"
  },
  {
    id: "communication",
    name: "Communication",
    category: "Leadership & Communication",
    level: "Advanced",
    description: "Articulating technical concepts clearly to diverse audiences, writing structured project documentation, and delivering engaging presentations.",
    tools: ["Public Speaking", "Technical Writing", "Active Listening", "Presentation Design", "Interpersonal Relations"],
    iconName: "MessageSquare"
  },
  {
    id: "leadership",
    name: "Leadership",
    category: "Leadership & Communication",
    level: "Proficient",
    description: "Inspiring peers, organizing team deliverables, coordinating events, and driving group initiatives with empathy and structured timelines.",
    tools: ["Project Coordination", "Mentorship", "Time Management", "Conflict Resolution", "Strategic Planning"],
    iconName: "Compass"
  },
  {
    id: "teamwork",
    name: "Teamwork",
    category: "Leadership & Communication",
    level: "Advanced",
    description: "Fostering collaborative harmony, conducting constructive peer reviews, and adapting seamlessly to multi-disciplinary group environments.",
    tools: ["Cross-functional Sync", "Agile Collaboration", "Peer Code Reviews", "Shared Workspaces", "Constructive Feedback"],
    iconName: "Users"
  },
  {
    id: "learning-research",
    name: "Learning & Research",
    category: "Research & Learning",
    level: "Specialized",
    description: "Rapidly synthesizing academic literature, exploring emerging technologies, and autonomously mastering complex domains through structured inquiry.",
    tools: ["Academic Research", "Literature Review", "Information Synthesis", "Autonomous Study", "Trend Analysis"],
    iconName: "Search"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    institution: "National University of Sciences & Technology / Premier Institute",
    degree: "Bachelor of Science",
    field: "Computer Science / Information Technology",
    period: "2023 — Present",
    status: "In Progress",
    location: "Islamabad, Pakistan",
    gradeOrDistinction: "Distinction Track (Top 5% of Class)",
    description: "Pursuing rigorous foundational coursework in computing, algorithmic thinking, software engineering methodologies, human-computer interaction, and computational problem solving.",
    achievements: [
      "Recipient of Academic Merit Scholarship for semester excellence",
      "Elected Student Representative for Academic Inquiry Committee",
      "Led university peer mentoring study circles in Web Technologies and Logic"
    ],
    keyCourses: [
      "Data Structures & Algorithms",
      "Web Technologies & Frameworks",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Discrete Mathematics"
    ]
  },
  {
    id: "edu-2",
    institution: "Army Public College / Premier Higher Secondary College",
    degree: "Higher Secondary School Certificate (HSSC)",
    field: "Pre-Engineering / Computer Sciences",
    period: "2021 — 2023",
    status: "Completed",
    location: "Rawalpindi / Islamabad",
    gradeOrDistinction: "A+ Grade (90%+ Academic Standing)",
    description: "Completed comprehensive advanced science and mathematics curriculum with a strong focus on physics, advanced mathematics, logic, and analytical problem-solving.",
    achievements: [
      "Awarded High Achiever Shield for College Academic Distinction",
      "Head of Science & Tech Exhibition Organizing Committee",
      "Active participant in Inter-College Mathematics and Debate Olympiads"
    ],
    keyCourses: [
      "Advanced Mathematics & Calculus",
      "Physics & Mechanics",
      "Computer Science Fundamentals",
      "English Literature & Composition"
    ]
  },
  {
    id: "edu-3",
    institution: "Army Public School / Beaconhouse School System",
    degree: "Secondary School Certificate (Matriculation / O-Levels)",
    field: "Science & Computer Studies",
    period: "2019 — 2021",
    status: "Completed",
    location: "Islamabad",
    gradeOrDistinction: "Straight A* / Outstanding Distinction",
    description: "Formed fundamental core values in scientific inquiry, creative writing, digital literacy, and extracurricular leadership.",
    achievements: [
      "Valedictorian / Top Honor Roll in Sciences",
      "President of the Creative Arts and Debating Society",
      "Gold Medalist in Annual Science Project Showcase"
    ],
    keyCourses: [
      "Mathematics",
      "Computer Applications",
      "General Sciences",
      "Civic Studies & Ethics"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Aura: Editorial Learning Platform",
    subtitle: "Interactive digital knowledge base and study workspace",
    category: "Web Development",
    year: "2025",
    featured: true,
    description: "A minimalist, distraction-free digital workspace designed for students to organize academic research, distill lecture notes, and track mastery milestones.",
    longDescription: "Aura is an editorial web application built to alleviate digital fatigue in modern student life. Featuring a bespoke typography scale, markdown-powered note distillation, and dynamic flashcard generation, it empowers learners to synthesize complex lecture modules effortlessly.",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage API", "Motion"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Load Time", value: "< 0.8s" },
      { label: "Components", value: "30+ Modular" },
      { label: "Accessibility", value: "100% WCAG" }
    ],
    highlights: [
      "Designed a sleek, eye-comfort luxury dark/light theme with optimal contrast",
      "Engineered an offline-first persistent study tracker utilizing browser storage",
      "Implemented fluid motion animations for seamless category navigation"
    ],
    demoUrl: "https://example.com/aura-demo",
    githubUrl: "https://github.com/minahil-tariq/aura-workspace"
  },
  {
    id: "proj-2",
    title: "Novus: Student Skill & Opportunity Hub",
    subtitle: "Curated student resource discovery engine",
    category: "Web Development",
    year: "2024",
    featured: true,
    description: "A streamlined web portal connecting aspiring student researchers with university laboratory openings, internships, and student-led hackathons.",
    longDescription: "Novus was created to bridge the information gap faced by undergraduate students seeking peer collaborations and academic research opportunities. It incorporates multi-criteria filtering, saved opportunities, and an interactive resume exporter.",
    tags: ["React 19", "Vite", "Tailwind CSS", "Lucide Icons", "Responsive UI"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Active Listings", value: "150+" },
      { label: "User Feedback", value: "4.9/5 Rating" },
      { label: "Filter Speed", value: "Instant" }
    ],
    highlights: [
      "Built dynamic multi-tag search filtering without page reloads",
      "Designed an elegant modal preview system for detailed opportunity briefs",
      "Optimized mobile touch targets and gesture interactions for on-the-go browsing"
    ],
    demoUrl: "https://example.com/novus-hub",
    githubUrl: "https://github.com/minahil-tariq/novus-hub"
  },
  {
    id: "proj-3",
    title: "Kinesis: Editorial Creative Portfolio",
    subtitle: "Brand identity and showcase concept for modern creators",
    category: "Creative Design",
    year: "2024",
    featured: true,
    description: "A bespoke visual identity and high-impact digital portfolio showcasing modern editorial grid layouts, typographic harmony, and subtle micro-interactions.",
    longDescription: "Kinesis explores how luxury publication aesthetics can elevate personal branding on the web. It embraces generous whitespace, custom serif pairings, and smooth hover elevation cards to communicate prestige and craft.",
    tags: ["UI/UX Design", "Figma", "Design Systems", "Typography", "CSS Grid"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Design System", value: "40+ Tokens" },
      { label: "Typography Pairs", value: "Serif + Sans" },
      { label: "Grid Precision", value: "12-Col Fluid" }
    ],
    highlights: [
      "Crafted an exhaustive Figma design system with reusable typography tokens",
      "Implemented optical padding math and mathematical step scales for balanced layout",
      "Curated refined monochromatic color palettes with warm champagne accents"
    ],
    demoUrl: "https://example.com/kinesis-design",
    githubUrl: "https://github.com/minahil-tariq/kinesis-portfolio"
  },
  {
    id: "proj-4",
    title: "Lumina: Student Wellness & Routine Tracker",
    subtitle: "Micro-habit tracker for balanced academic performance",
    category: "Innovation",
    year: "2024",
    featured: false,
    description: "An intuitive daily habit companion encouraging mindful breaks, hydration, reading consistency, and structured exam preparation routines.",
    longDescription: "Recognizing that academic burnout stems from unmanaged micro-stressors, Lumina offers gentle daily reminders, streak visualizers, and weekly productivity reflections wrapped in a serene aesthetic.",
    tags: ["JavaScript", "React", "Chart Visualizer", "Local State", "UX Research"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Daily Completion", value: "94%" },
      { label: "Streak Engine", value: "Reliable" },
      { label: "Theme Modes", value: "Dark/Light" }
    ],
    highlights: [
      "Visualized habit streaks with interactive heatmaps and weekly completion curves",
      "Engineered gentle audio chime feedback for completed milestones",
      "Integrated customizable goal reminders with local persistent state"
    ],
    demoUrl: "https://example.com/lumina-tracker",
    githubUrl: "https://github.com/minahil-tariq/lumina-habits"
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Academic Excellence Merit Award",
    issuer: "Faculty of Computer Science & Engineering",
    year: "2024",
    category: "Academic",
    badge: "Honors Distinction",
    description: "Awarded for sustaining top-tier semester GPA and demonstrating outstanding leadership in peer collaborative coursework.",
    verificationId: "MERIT-2024-NUST-984"
  },
  {
    id: "ach-2",
    title: "Web Development & Modern Front-End Certification",
    issuer: "freeCodeCamp / Meta Professional Certification",
    year: "2024",
    category: "Certificate",
    badge: "Certified Specialist",
    description: "Comprehensive 300+ hour mastery of responsive web design, semantic HTML5, modern CSS architectures, and JavaScript algorithms.",
    verificationId: "CERT-FCC-WEB-7821"
  },
  {
    id: "ach-3",
    title: "National Student Innovation & Problem-Solving Olympiad",
    issuer: "National Youth STEM Council",
    year: "2023",
    category: "Competition",
    badge: "Silver Medalist",
    description: "Secured 2nd place nationwide among 120+ teams for designing an accessible community digital literacy prototype.",
    verificationId: "STEM-OLYMP-2023-22"
  },
  {
    id: "ach-4",
    title: "Effective Communication & Public Speaking Masterclass",
    issuer: "Toastmasters International / University Chapter",
    year: "2023",
    category: "Leadership",
    badge: "Executive Speaker",
    description: "Completed rigorous public speaking, keynote presentation, and technical communication workshop series.",
    verificationId: "TM-LEAD-2023-019"
  },
  {
    id: "ach-5",
    title: "Foundations of Human-Centered UI/UX Design",
    issuer: "Interaction Design Foundation (IxDF)",
    year: "2024",
    category: "Courses",
    badge: "Top 10% Score",
    description: "Mastered user journey mapping, visual hierarchy principles, usability testing protocols, and design systems.",
    verificationId: "IXDF-UX-2024-411"
  },
  {
    id: "ach-6",
    title: "Head of Student Media & Publications",
    issuer: "University Student Council",
    year: "2024 — 2025",
    category: "Extracurricular",
    badge: "Leadership Role",
    description: "Directed editorial strategy, graphic design guidelines, and digital newsletters reaching over 4,000 students and alumni.",
    verificationId: "STU-COUNCIL-DIR-08"
  }
];

export const INTERESTS_DATA: InterestItem[] = [
  {
    id: "int-tech",
    title: "Technology",
    subtitle: "Modern Web & Digital Systems",
    description: "Fascinated by how elegant code transforms human capability. Constantly exploring modern frontend ecosystems, serverless paradigms, and accessible web standards.",
    iconName: "Cpu",
    accent: "from-amber-500/20 to-orange-500/20",
    topics: ["Modern Web Architecture", "UI Engineering", "Next-Gen Interfaces", "Clean Code"]
  },
  {
    id: "int-design",
    title: "Design",
    subtitle: "Visual Balance & Typography",
    description: "Believing that true beauty lies in purposeful constraint. Obsessed with high-contrast serif typography, editorial grids, and seamless micro-interactions.",
    iconName: "Sparkles",
    accent: "from-amber-400/20 to-yellow-600/20",
    topics: ["Editorial Layouts", "Color Science", "Micro-Interactions", "Design Systems"]
  },
  {
    id: "int-reading",
    title: "Reading",
    subtitle: "Literature, Strategy & Philosophy",
    description: "An avid reader immersed in non-fiction, biographies of innovators, technology history, and cognitive psychology to expand perspective and empathy.",
    iconName: "BookOpen",
    accent: "from-stone-500/20 to-amber-700/20",
    topics: ["Technology History", "Cognitive Psychology", "Classic Literature", "Leadership Biographies"]
  },
  {
    id: "int-creativity",
    title: "Creativity",
    subtitle: "Original Thinking & Expression",
    description: "Exploring creative synthesis through creative writing, brand storytelling, visual curation, and photography to see ordinary things from fresh angles.",
    iconName: "PenTool",
    accent: "from-orange-500/20 to-amber-600/20",
    topics: ["Creative Writing", "Visual Storytelling", "Aesthetic Curation", "Concept Art"]
  },
  {
    id: "int-learning",
    title: "Learning",
    subtitle: "Continuous Intellectual Growth",
    description: "Cultivating a lifelong student mentality. Passionate about learning how to learn, deconstructing complex topics, and building mental models.",
    iconName: "GraduationCap",
    accent: "from-amber-600/20 to-stone-600/20",
    topics: ["Meta-Learning", "Mental Models", "Skill Acquisition", "Knowledge Graphs"]
  },
  {
    id: "int-innovation",
    title: "Innovation",
    subtitle: "Impactful Future Solutions",
    description: "Driven by the desire to build solutions that matter. Eager to discover how technology and empathetic design can solve real-world student and community problems.",
    iconName: "Compass",
    accent: "from-yellow-500/20 to-amber-800/20",
    topics: ["Human-Centered Tech", "Sustainable Systems", "Social Impact", "Future Horizons"]
  }
];
