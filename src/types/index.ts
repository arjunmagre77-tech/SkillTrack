export type NavigationTab = 
  | 'overview'
  | 'trainee-dashboard'
  | 'program-impact'
  | 'trainees'
  | 'programs'
  | 'employment-outcomes'
  | 'skill-gaps'
  | 'providers'
  | 'district-insights'
  | 'outcome-passport'
  | 'followups'
  | 'anomalies'
  | 'early-warning'
  | 'program-roi'
  | 'reports'
  | 'consent-privacy'
  | 'settings';

export type UserRole = 'GOVERNMENT' | 'TRAINEE';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
  avatarUrl?: string;
}

export type VerificationStatus = 'Verified' | 'Pending verification' | 'Conflicting information' | 'Requires review';

export type EmploymentType = 'Employed' | 'Self-Employed' | 'Apprenticeship' | 'Unemployed' | 'Job Searching' | 'Left Employment';

export type SkillRelevance = 'High' | 'Medium' | 'Low';

export interface SkillRating {
  skill: string;
  level: number; // 0 - 100
  required: boolean;
}

export interface OutcomeTimelineMilestone {
  id: string;
  stage: 'Enrolled' | 'Training Started' | 'Training Completed' | 'Certified' | 'Interviewed' | 'Employed' | '3 Month Check' | '6 Month Check' | '12 Month Check';
  date: string;
  status: 'completed' | 'in-progress' | 'pending' | 'flagged';
  details?: string;
}

export interface VerificationSource {
  traineeReported: {
    employer: string;
    salary: number;
    startDate: string;
    designation: string;
  };
  employerVerified: {
    verified: boolean;
    employerName?: string;
    verifiedSalary?: number;
    verifiedDate?: string;
    notes?: string;
  };
  providerConfirmed: {
    confirmed: boolean;
    confirmedDate?: string;
  };
  status: VerificationStatus;
}

export interface FollowUpRecord {
  id: string;
  traineeId: string;
  milestone: '1 Month' | '3 Months' | '6 Months' | '12 Months';
  dueDate: string;
  completedDate?: string;
  status: 'Completed' | 'Pending' | 'Overdue' | 'Scheduled';
  questionnaire: {
    stillEmployed: boolean | null;
    currentSalary?: number;
    promotionReceived?: boolean;
    sameEmployer?: boolean;
    skillRelevanceFeedback?: string;
  };
  lastContactChannel?: 'SMS' | 'WhatsApp' | 'Email' | 'Phone Call';
}

export interface Trainee {
  id: string;
  name: string;
  email: string;
  phone: string;
  district: string;
  state: string;
  gender: 'Male' | 'Female' | 'Other';
  age: number;
  education: string;
  programId: string;
  programName: string;
  providerId: string;
  providerName: string;
  cohort: string;
  enrollmentDate: string;
  completionDate: string;
  certificationStatus: 'Certified' | 'In Progress' | 'Not Certified';
  assessmentScore: number;
  employmentStatus: EmploymentType;
  currentRole?: string;
  employerName?: string;
  salary?: number;
  employmentStartDate?: string;
  employmentDurationMonths?: number;
  retention6Month: boolean;
  retention12Month: boolean;
  targetRole: string;
  skills: SkillRating[];
  timeline: OutcomeTimelineMilestone[];
  verification: VerificationSource;
  skillRelevanceScore: SkillRelevance;
  relevancePercentage: number;
  unemploymentReason?: {
    category: 'Skill Gap' | 'Local Opportunities' | 'Salary Mismatch' | 'Incomplete Training' | 'Location/Mobility' | 'Other';
    percentage: number;
    details: string;
  };
  followUps: FollowUpRecord[];
  earlyWarning: {
    isAtRisk: boolean;
    riskScore: number; // 0-100
    indicators: string[];
    recommendedIntervention: string;
  };
  consent: {
    employmentStatus: boolean;
    employer: boolean;
    salary: boolean;
    phone: boolean;
    skillProfile: boolean;
    trainingHistory: boolean;
  };
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: string;
  durationWeeks: number;
  totalTrained: number;
  certifiedCount: number;
  employedCount: number;
  retention6MCount: number;
  avgStartingSalary: number;
  topSkillsTaught: string[];
}

export interface TrainingProvider {
  id: string;
  name: string;
  district: string;
  state: string;
  trained: number;
  certified: number;
  employed: number;
  retained6M: number;
  avgSalary: number;
  dataCompleteness: number; // percentage
  conversionRate: number; // percentage
  retentionRate: number; // percentage
}

export interface DistrictMetric {
  district: string;
  state: string;
  trained: number;
  certified: number;
  employed: number;
  employmentRate: number;
  retentionRate: number;
  topSkillGap: string;
  localJobAvailabilityScore: number; // 0-100
}

export interface AnomalyAlert {
  id: string;
  traineeId?: string;
  traineeName?: string;
  providerId?: string;
  providerName?: string;
  type: 'Salary Mismatch' | 'Unusual Placement Cluster' | 'Duplicate Joining Dates' | 'Unverified Status';
  severity: 'High' | 'Medium' | 'Low';
  description: string;
  traineeReportedValue?: string;
  verifiedValue?: string;
  dateFlagged: string;
  status: 'Requires Review' | 'Verified' | 'Resolved' | 'False Positive';
}

export interface Interventions {
  id: string;
  traineeId: string;
  traineeName: string;
  type: 'Mentor Intervention' | 'Remedial Training' | 'Career Counseling' | 'Reassessment' | 'Placement Assistance';
  reason: string;
  status: 'Recommended' | 'Active' | 'Completed';
  targetSkillGap?: string;
  assignedTo?: string;
}

export interface ProgramROI {
  totalInvestmentINR: number;
  totalTrainees: number;
  certifiedTrainees: number;
  employedTrainees: number;
  retained6MTrainees: number;
  costPerTrainee: number;
  costPerCertification: number;
  costPerEmployment: number;
  costPerSustainedEmployment: number;
}
