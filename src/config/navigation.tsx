import React from 'react';
import { 
  Home, 
  User, 
  Award, 
  Briefcase, 
  Target, 
  BookOpen, 
  Send, 
  FileText, 
  Compass, 
  CheckSquare, 
  GraduationCap
} from 'lucide-react';

export interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  category: string;
  badge?: string;
}

export const traineeNavigation: NavItem[] = [
  { 
    path: '/dashboard/trainee', 
    label: 'Overview', 
    icon: <Home className="w-4 h-4 text-teal-400" />, 
    category: 'CORE' 
  },
  
  { 
    path: '/dashboard/trainee/profile', 
    label: 'My Profile', 
    icon: <User className="w-4 h-4 text-emerald-400" />, 
    category: 'MY CAREER' 
  },
  { 
    path: '/dashboard/trainee/skills', 
    label: 'My Skills', 
    icon: <GraduationCap className="w-4 h-4 text-blue-400" />, 
    category: 'MY CAREER' 
  },
  { 
    path: '/dashboard/trainee/skill-gap', 
    label: 'Skill Gap Analysis', 
    icon: <Target className="w-4 h-4 text-purple-400" />, 
    category: 'MY CAREER' 
  },
  { 
    path: '/dashboard/trainee/roadmap', 
    label: 'Career Roadmap', 
    icon: <Compass className="w-4 h-4 text-cyan-400" />, 
    category: 'MY CAREER' 
  },
  { 
    path: '/dashboard/trainee/training', 
    label: 'Recommended Training', 
    icon: <BookOpen className="w-4 h-4 text-amber-400" />, 
    category: 'MY CAREER' 
  },
  { 
    path: '/dashboard/trainee/jobs', 
    label: 'Job Opportunities', 
    icon: <Briefcase className="w-4 h-4 text-indigo-400" />, 
    category: 'MY CAREER' 
  },
  { 
    path: '/dashboard/trainee/applications', 
    label: 'Applications', 
    icon: <CheckSquare className="w-4 h-4 text-teal-400" />, 
    category: 'MY CAREER' 
  },

  { 
    path: '/dashboard/trainee/outcomes', 
    label: 'Employment Outcomes', 
    icon: <FileText className="w-4 h-4 text-emerald-400" />, 
    category: 'OUTCOMES' 
  },
  { 
    path: '/dashboard/trainee/passport', 
    label: 'My Outcome Passport', 
    icon: <Award className="w-4 h-4 text-amber-400" />, 
    category: 'OUTCOMES' 
  },
  { 
    path: '/dashboard/trainee/follow-ups', 
    label: 'Follow-ups', 
    icon: <Send className="w-4 h-4 text-rose-400" />, 
    category: 'OUTCOMES' 
  },
];

export const governmentNavigation: NavItem[] = [
  { 
    path: '/dashboard/government', 
    label: 'Overview', 
    icon: <Home className="w-4 h-4 text-blue-400" />, 
    category: 'CORE' 
  },

  { 
    path: '/dashboard/government/program-impact', 
    label: 'Program Impact Dashboard', 
    icon: <FileText className="w-4 h-4 text-blue-400" />, 
    category: 'PROGRAM ANALYTICS',
    badge: 'Govt'
  },
  { 
    path: '/dashboard/government/training-programs', 
    label: 'Training Programs', 
    icon: <BookOpen className="w-4 h-4 text-indigo-400" />, 
    category: 'PROGRAM ANALYTICS' 
  },
  { 
    path: '/dashboard/government/training-providers', 
    label: 'Training Providers', 
    icon: <Award className="w-4 h-4 text-purple-400" />, 
    category: 'PROGRAM ANALYTICS' 
  },
  { 
    path: '/dashboard/government/trainee-outcomes', 
    label: 'Trainee Outcomes', 
    icon: <GraduationCap className="w-4 h-4 text-teal-400" />, 
    category: 'PROGRAM ANALYTICS' 
  },
  { 
    path: '/dashboard/government/employment-outcomes', 
    label: 'Employment Outcomes', 
    icon: <Briefcase className="w-4 h-4 text-emerald-400" />, 
    category: 'PROGRAM ANALYTICS' 
  },

  { 
    path: '/dashboard/government/skill-gap-engine', 
    label: 'Skill Gap Engine', 
    icon: <Target className="w-4 h-4 text-purple-400" />, 
    category: 'INTELLIGENCE' 
  },
  { 
    path: '/dashboard/government/district-intelligence', 
    label: 'District Intelligence', 
    icon: <Compass className="w-4 h-4 text-cyan-400" />, 
    category: 'INTELLIGENCE' 
  },
  { 
    path: '/dashboard/government/ai-anomaly', 
    label: 'AI Anomaly Center', 
    icon: <Send className="w-4 h-4 text-rose-400" />, 
    category: 'INTELLIGENCE' 
  },
  { 
    path: '/dashboard/government/early-intervention', 
    label: 'Early Intervention', 
    icon: <CheckSquare className="w-4 h-4 text-amber-400" />, 
    category: 'INTELLIGENCE' 
  },

  { 
    path: '/dashboard/government/outcome-passport', 
    label: 'Outcome Passport', 
    icon: <Award className="w-4 h-4 text-amber-400" />, 
    category: 'GOVERNANCE' 
  },
  { 
    path: '/dashboard/government/follow-ups', 
    label: 'Follow-ups Engine', 
    icon: <Send className="w-4 h-4 text-teal-400" />, 
    category: 'GOVERNANCE' 
  },
  { 
    path: '/dashboard/government/program-roi', 
    label: 'Program ROI & Impact', 
    icon: <FileText className="w-4 h-4 text-emerald-400" />, 
    category: 'GOVERNANCE' 
  },
  { 
    path: '/dashboard/government/reports', 
    label: 'Reports Generator', 
    icon: <FileText className="w-4 h-4 text-indigo-400" />, 
    category: 'GOVERNANCE' 
  },
  { 
    path: '/dashboard/government/consent-privacy', 
    label: 'Privacy & Consent', 
    icon: <User className="w-4 h-4 text-slate-400" />, 
    category: 'GOVERNANCE' 
  },
  { 
    path: '/dashboard/government/settings', 
    label: 'Settings', 
    icon: <Compass className="w-4 h-4 text-slate-400" />, 
    category: 'GOVERNANCE' 
  },
];
