export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Web Development' | 'Creative Design' | 'Research & Strategy' | 'Innovation';
  tags: string[];
  image: string;
  featured: boolean;
  year: string;
  stats?: { label: string; value: string }[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Technical & Web' | 'Creative & Problem Solving' | 'Leadership & Communication' | 'Research & Learning';
  level: string; // e.g. "Proficient", "Advanced", "Specialized"
  description: string;
  tools: string[];
  iconName: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: 'In Progress' | 'Completed' | 'Upcoming';
  location: string;
  gradeOrDistinction: string;
  description: string;
  achievements: string[];
  keyCourses: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Academic' | 'Certificate' | 'Competition' | 'Leadership' | 'Extracurricular' | 'Courses';
  description: string;
  badge: string;
  verificationId?: string;
}

export interface InterestItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accent: string;
  topics: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
