import type { Trainee, TrainingProgram, TrainingProvider, DistrictMetric, AnomalyAlert, Interventions, ProgramROI } from '../types';

export const INITIAL_PROGRAMS: TrainingProgram[] = [
  {
    id: 'prog-1',
    title: 'Advanced Data Analytics & AI',
    category: 'Information Technology',
    durationWeeks: 16,
    totalTrained: 2850,
    certifiedCount: 2620,
    employedCount: 1980,
    retention6MCount: 1650,
    avgStartingSalary: 28500,
    topSkillsTaught: ['Python', 'SQL', 'Excel', 'Power BI', 'Statistics']
  },
  {
    id: 'prog-2',
    title: 'Solar PV Systems & Renewable Tech',
    category: 'Clean Energy & Electrical',
    durationWeeks: 12,
    totalTrained: 4200,
    certifiedCount: 3890,
    employedCount: 2910,
    retention6MCount: 2420,
    avgStartingSalary: 22000,
    topSkillsTaught: ['Solar Wiring', 'Inverter Installation', 'Grid Safety', 'Maintenance', 'CAD']
  },
  {
    id: 'prog-3',
    title: 'Precision Manufacturing & CNC Operations',
    category: 'Capital Goods & Mechanical',
    durationWeeks: 20,
    totalTrained: 3600,
    certifiedCount: 3150,
    employedCount: 2480,
    retention6MCount: 2010,
    avgStartingSalary: 24000,
    topSkillsTaught: ['CNC Programming', 'Quality Inspection', 'AutoCAD', 'Machine Maintenance']
  },
  {
    id: 'prog-4',
    title: 'Electric Vehicle Service & Battery Tech',
    category: 'Automotive & EV',
    durationWeeks: 14,
    totalTrained: 1950,
    certifiedCount: 1820,
    employedCount: 1450,
    retention6MCount: 1280,
    avgStartingSalary: 26500,
    topSkillsTaught: ['BMS Diagnostics', 'EV Motor Repair', 'High Voltage Safety', 'Battery Assembly']
  },
  {
    id: 'prog-5',
    title: 'General Healthcare Assistant & Patient Care',
    category: 'Healthcare & Wellness',
    durationWeeks: 24,
    totalTrained: 5100,
    certifiedCount: 4750,
    employedCount: 3820,
    retention6MCount: 3240,
    avgStartingSalary: 21500,
    topSkillsTaught: ['Vital Monitoring', 'Patient Hygiene', 'First Aid', 'Medical Records', 'Phlebotomy']
  },
  {
    id: 'prog-6',
    title: 'Full Stack Web & Mobile Development',
    category: 'Information Technology',
    durationWeeks: 24,
    totalTrained: 3200,
    certifiedCount: 2900,
    employedCount: 2150,
    retention6MCount: 1810,
    avgStartingSalary: 32000,
    topSkillsTaught: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Git']
  }
];

export const INITIAL_PROVIDERS: TrainingProvider[] = [
  {
    id: 'prov-1',
    name: 'Maharashtra Skill Development Centre (MSDC)',
    district: 'Pune',
    state: 'Maharashtra',
    trained: 10000,
    certified: 8700,
    employed: 6400,
    retained6M: 5300,
    avgSalary: 27500,
    dataCompleteness: 98,
    conversionRate: 64.0,
    retentionRate: 82.8
  },
  {
    id: 'prov-2',
    name: 'National Skill Training Institute (NSTI)',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    trained: 9500,
    certified: 8100,
    employed: 5900,
    retained6M: 4700,
    avgSalary: 29000,
    dataCompleteness: 94,
    conversionRate: 62.1,
    retentionRate: 79.6
  },
  {
    id: 'prov-3',
    name: 'Vidarbha Vocational Excellence Trust',
    district: 'Nagpur',
    state: 'Maharashtra',
    trained: 6200,
    certified: 5400,
    employed: 3720,
    retained6M: 2980,
    avgSalary: 21500,
    dataCompleteness: 91,
    conversionRate: 60.0,
    retentionRate: 80.1
  },
  {
    id: 'prov-4',
    name: 'Sahyadri Skill & Tech Foundation',
    district: 'Nashik',
    state: 'Maharashtra',
    trained: 5800,
    certified: 5120,
    employed: 3550,
    retained6M: 2840,
    avgSalary: 23000,
    dataCompleteness: 96,
    conversionRate: 61.2,
    retentionRate: 80.0
  },
  {
    id: 'prov-5',
    name: 'Marathwada Skill Initiative',
    district: 'Chhatrapati Sambhajinagar',
    state: 'Maharashtra',
    trained: 4900,
    certified: 4200,
    employed: 2740,
    retained6M: 2100,
    avgSalary: 20500,
    dataCompleteness: 88,
    conversionRate: 55.9,
    retentionRate: 76.6
  }
];

export const INITIAL_DISTRICTS: DistrictMetric[] = [
  {
    district: 'Pune',
    state: 'Maharashtra',
    trained: 22500,
    certified: 19800,
    employed: 15300,
    employmentRate: 68.0,
    retentionRate: 74.0,
    topSkillGap: 'Power BI & Advanced Analytics',
    localJobAvailabilityScore: 88
  },
  {
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    trained: 28000,
    certified: 24200,
    employed: 18150,
    employmentRate: 64.8,
    retentionRate: 72.5,
    topSkillGap: 'Cloud Computing & DevOps',
    localJobAvailabilityScore: 94
  },
  {
    district: 'Nagpur',
    state: 'Maharashtra',
    trained: 14200,
    certified: 12100,
    employed: 7980,
    employmentRate: 56.2,
    retentionRate: 68.0,
    topSkillGap: 'EV Maintenance & Wiring',
    localJobAvailabilityScore: 65
  },
  {
    district: 'Nashik',
    state: 'Maharashtra',
    trained: 12800,
    certified: 11000,
    employed: 7420,
    employmentRate: 58.0,
    retentionRate: 70.2,
    topSkillGap: 'PLC & CNC Precision Tools',
    localJobAvailabilityScore: 72
  },
  {
    district: 'Thane',
    state: 'Maharashtra',
    trained: 16400,
    certified: 14100,
    employed: 10650,
    employmentRate: 64.9,
    retentionRate: 71.8,
    topSkillGap: 'Supply Chain & ERP Systems',
    localJobAvailabilityScore: 84
  },
  {
    district: 'Chhatrapati Sambhajinagar',
    state: 'Maharashtra',
    trained: 10500,
    certified: 8900,
    employed: 5430,
    employmentRate: 51.7,
    retentionRate: 65.4,
    topSkillGap: 'Industrial Automation & Robotics',
    localJobAvailabilityScore: 61
  },
  {
    district: 'Kolhapur',
    state: 'Maharashtra',
    trained: 9200,
    certified: 8100,
    employed: 5260,
    employmentRate: 57.2,
    retentionRate: 73.0,
    topSkillGap: 'Foundry & Metallurgy Tech',
    localJobAvailabilityScore: 68
  },
  {
    district: 'Solapur',
    state: 'Maharashtra',
    trained: 7800,
    certified: 6600,
    employed: 3760,
    employmentRate: 48.2,
    retentionRate: 62.1,
    topSkillGap: 'Textile Machinery & Automation',
    localJobAvailabilityScore: 52
  }
];

// Seed key Trainee: Rahul Sharma
export const RAHUL_SHARMA: Trainee = {
  id: 'TRN-2026-001',
  name: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  phone: '+91 98230 44102',
  district: 'Pune',
  state: 'Maharashtra',
  gender: 'Male',
  age: 23,
  education: 'B.Sc Computer Science (2025)',
  programId: 'prog-1',
  programName: 'Advanced Data Analytics & AI',
  providerId: 'prov-1',
  providerName: 'Maharashtra Skill Development Centre (MSDC)',
  cohort: '2025-Q4 Cohort A',
  enrollmentDate: '15 November 2025',
  completionDate: '10 March 2026',
  certificationStatus: 'Certified',
  assessmentScore: 92,
  employmentStatus: 'Employed',
  currentRole: 'Junior Data Analyst',
  employerName: 'XYZ Technologies Pvt Ltd',
  salary: 28000,
  employmentStartDate: '12 April 2026',
  employmentDurationMonths: 5,
  retention6Month: true,
  retention12Month: false,
  targetRole: 'Data Analyst',
  skills: [
    { skill: 'Python', level: 85, required: true },
    { skill: 'SQL', level: 55, required: true },
    { skill: 'Excel', level: 90, required: true },
    { skill: 'Power BI', level: 40, required: true },
    { skill: 'Statistics', level: 60, required: true }
  ],
  timeline: [
    { id: 't1', stage: 'Enrolled', date: '15 Nov 2025', status: 'completed', details: 'Registered under MSDC Pune' },
    { id: 't2', stage: 'Training Started', date: '20 Nov 2025', status: 'completed', details: 'Attended 100% core modules' },
    { id: 't3', stage: 'Training Completed', date: '10 Mar 2026', status: 'completed', details: 'Capstone project submitted' },
    { id: 't4', stage: 'Certified', date: '18 Mar 2026', status: 'completed', details: 'NSDC Level 5 Certification Verified' },
    { id: 't5', stage: 'Interviewed', date: '02 Apr 2026', status: 'completed', details: 'Interviewed at XYZ Tech & Cybage' },
    { id: 't6', stage: 'Employed', date: '12 Apr 2026', status: 'completed', details: 'Joined XYZ Technologies as Jr. Analyst' },
    { id: 't7', stage: '3 Month Check', date: '12 Jul 2026', status: 'completed', details: 'Confirmed active employment & salary slips' },
    { id: 't8', stage: '6 Month Check', date: '12 Oct 2026', status: 'completed', details: 'Sustained role confirmed by employer' },
    { id: 't9', stage: '12 Month Check', date: '12 Apr 2027', status: 'pending', details: 'Scheduled follow-up' }
  ],
  verification: {
    traineeReported: {
      employer: 'XYZ Technologies Pvt Ltd',
      salary: 28000,
      startDate: '12/04/2026',
      designation: 'Junior Data Analyst'
    },
    employerVerified: {
      verified: true,
      employerName: 'XYZ Technologies Pvt Ltd',
      verifiedSalary: 28000,
      verifiedDate: '15/04/2026',
      notes: 'HR records matched via EPFO/UAN API verification simulation'
    },
    providerConfirmed: {
      confirmed: true,
      confirmedDate: '14/04/2026'
    },
    status: 'Verified'
  },
  skillRelevanceScore: 'High',
  relevancePercentage: 88,
  followUps: [
    {
      id: 'f1',
      traineeId: 'TRN-2026-001',
      milestone: '1 Month',
      dueDate: '12 May 2026',
      completedDate: '12 May 2026',
      status: 'Completed',
      questionnaire: {
        stillEmployed: true,
        currentSalary: 28000,
        promotionReceived: false,
        sameEmployer: true,
        skillRelevanceFeedback: 'Python and SQL are heavily used daily.'
      },
      lastContactChannel: 'WhatsApp'
    },
    {
      id: 'f2',
      traineeId: 'TRN-2026-001',
      milestone: '3 Months',
      dueDate: '12 July 2026',
      completedDate: '14 July 2026',
      status: 'Completed',
      questionnaire: {
        stillEmployed: true,
        currentSalary: 28000,
        promotionReceived: false,
        sameEmployer: true,
        skillRelevanceFeedback: 'Need to improve Power BI skills for dashboard creation.'
      },
      lastContactChannel: 'SMS'
    },
    {
      id: 'f3',
      traineeId: 'TRN-2026-001',
      milestone: '6 Months',
      dueDate: '12 October 2026',
      completedDate: '12 October 2026',
      status: 'Completed',
      questionnaire: {
        stillEmployed: true,
        currentSalary: 31000,
        promotionReceived: true,
        sameEmployer: true,
        skillRelevanceFeedback: 'Promoted to Data Analyst! Salary increased to 31k.'
      },
      lastContactChannel: 'WhatsApp'
    },
    {
      id: 'f4',
      traineeId: 'TRN-2026-001',
      milestone: '12 Months',
      dueDate: '12 April 2027',
      status: 'Scheduled',
      questionnaire: {
        stillEmployed: null
      }
    }
  ],
  earlyWarning: {
    isAtRisk: false,
    riskScore: 12,
    indicators: ['Minor gap in Power BI visualization skills'],
    recommendedIntervention: 'Optional micro-learning module: Power BI DAX & Dashboarding'
  },
  consent: {
    employmentStatus: true,
    employer: true,
    salary: true,
    phone: true,
    skillProfile: true,
    trainingHistory: true
  }
};

// Generate 100+ Realistic Demo Trainees programmatically
function generateDemoTrainees(): Trainee[] {
  const names = [
    'Amit Patil', 'Priya Kulkarni', 'Suresh Deshmukh', 'Neha Joshi', 'Vikas Jadhav',
    'Ananya Pawar', 'Rohan Shinde', 'Pooja Chavan', 'Ganesh Gaikwad', 'Sneha Bhosale',
    'Akash More', 'Divya Wagh', 'Sachin Suryavanshi', 'Tanvi Salunkhe', 'Omkar Thorat',
    'Swati Kale', 'Kiran Nikam', 'Manish Tambe', 'Deepika Mane', 'Prashant Sawant',
    'Kavita Mohite', 'Nilesh Jagtap', 'Meera Phadke', 'Siddharth Bandal', 'Aarti Khot',
    'Vikram Shelke', 'Pallavi Ghadge', 'Rajesh Sanas', 'Sayali Belhekar', 'Yash Dhage',
    'Shruti Lokhande', 'Abhijit Nalawade', 'Rutuja Borade', 'Mahesh Hande', 'Prajakta Bhise',
    'Ketan Solanki', 'Mansi Gujar', 'Aditya Dev', 'Tejaswini Bhat', 'Tushar Godse',
    'Shubham Raut', 'Sheetal Kadam', 'Ashwin Kamble', 'Bhakti Sonawane', 'Dnyaneshwar Shinde',
    'Harshada Varpe', 'Irfan Sheikh', 'Jaya Mehta', 'Kunal Naik', 'Lata Pardeshi',
    'Mayur Waghmare', 'Nisha Sonkar', 'Omkar Bhagat', 'Prachi Gore', 'Rahul Shrivastav',
    'Sanket Tawde', 'Trupti Bedekar', 'Umesh Mahajan', 'Varsha Dhumal', 'Yogesh Ghode'
  ];

  const districts = ['Pune', 'Mumbai Suburban', 'Nagpur', 'Nashik', 'Thane', 'Chhatrapati Sambhajinagar', 'Kolhapur', 'Solapur'];
  const employmentStatuses: Trainee['employmentStatus'][] = ['Employed', 'Employed', 'Employed', 'Self-Employed', 'Apprenticeship', 'Unemployed', 'Job Searching'];
  
  const trainees: Trainee[] = [RAHUL_SHARMA];

  for (let i = 2; i <= 105; i++) {
    const nameIndex = (i - 2) % names.length;
    const isMale = i % 2 === 0;
    const name = names[nameIndex] + (i > names.length ? ` ${Math.floor(i / names.length)}` : '');
    const district = districts[i % districts.length];
    const status = employmentStatuses[i % employmentStatuses.length];
    const programObj = INITIAL_PROGRAMS[i % INITIAL_PROGRAMS.length];
    const providerObj = INITIAL_PROVIDERS[i % INITIAL_PROVIDERS.length];

    const isEmployed = status === 'Employed' || status === 'Self-Employed';
    const isAtRisk = i % 7 === 0 || status === 'Unemployed';
    const score = 55 + (i * 7) % 42;

    const traineeObj: Trainee = {
      id: `TRN-2026-${String(i).padStart(3, '0')}`,
      name: name,
      email: `${name.toLowerCase().replace(/[^a-z]/g, '')}${i}@example.com`,
      phone: `+91 98${Math.floor(10000000 + (i * 1234567) % 89999999)}`,
      district: district,
      state: 'Maharashtra',
      gender: isMale ? 'Male' : 'Female',
      age: 20 + (i % 8),
      education: i % 3 === 0 ? 'Diploma in Engineering' : i % 2 === 0 ? 'B.Sc / B.Com Graduate' : '12th Pass (HSC)',
      programId: programObj.id,
      programName: programObj.title,
      providerId: providerObj.id,
      providerName: providerObj.name,
      cohort: `2025-Q${(i % 4) + 1} Cohort`,
      enrollmentDate: `10 Oct 2025`,
      completionDate: `15 Feb 2026`,
      certificationStatus: score > 60 ? 'Certified' : 'In Progress',
      assessmentScore: score,
      employmentStatus: status,
      currentRole: isEmployed ? (status === 'Self-Employed' ? 'Independent Solar Technician' : 'Assistant Specialist') : undefined,
      employerName: isEmployed ? (status === 'Self-Employed' ? 'Self-Owned Enterprise' : 'Tata Tech & Engineering') : undefined,
      salary: isEmployed ? 18000 + (i * 350) % 16000 : undefined,
      employmentStartDate: isEmployed ? '01 Mar 2026' : undefined,
      employmentDurationMonths: isEmployed ? (i % 12) + 1 : undefined,
      retention6Month: isEmployed && i % 3 !== 0,
      retention12Month: isEmployed && i % 5 === 0,
      targetRole: programObj.title.split(' ')[0] + ' Specialist',
      skills: [
        { skill: programObj.topSkillsTaught[0] || 'Technical Skill 1', level: 70 + (i % 25), required: true },
        { skill: programObj.topSkillsTaught[1] || 'Technical Skill 2', level: 45 + (i % 40), required: true },
        { skill: programObj.topSkillsTaught[2] || 'Communication', level: 60 + (i % 30), required: true },
        { skill: programObj.topSkillsTaught[3] || 'Problem Solving', level: 40 + (i % 50), required: false }
      ],
      timeline: [
        { id: `t1-${i}`, stage: 'Enrolled', date: '10 Oct 2025', status: 'completed' },
        { id: `t2-${i}`, stage: 'Training Started', date: '15 Oct 2025', status: 'completed' },
        { id: `t3-${i}`, stage: 'Training Completed', date: '15 Feb 2026', status: 'completed' },
        { id: `t4-${i}`, stage: 'Certified', date: score > 60 ? '22 Feb 2026' : '', status: score > 60 ? 'completed' : 'pending' },
        { id: `t5-${i}`, stage: 'Interviewed', date: '05 Mar 2026', status: 'completed' },
        { id: `t6-${i}`, stage: 'Employed', date: isEmployed ? '15 Mar 2026' : '', status: isEmployed ? 'completed' : 'pending' },
        { id: `t7-${i}`, stage: '3 Month Check', date: '15 Jun 2026', status: isEmployed ? 'completed' : 'pending' },
        { id: `t8-${i}`, stage: '6 Month Check', date: '15 Sep 2026', status: isEmployed && i % 3 !== 0 ? 'completed' : 'pending' },
        { id: `t9-${i}`, stage: '12 Month Check', date: '15 Mar 2027', status: 'pending' }
      ],
      verification: {
        traineeReported: {
          employer: isEmployed ? 'Tata Tech & Engineering' : 'N/A',
          salary: isEmployed ? 18000 + (i * 350) % 16000 : 0,
          startDate: isEmployed ? '15/03/2026' : 'N/A',
          designation: isEmployed ? 'Associate Specialist' : 'N/A'
        },
        employerVerified: {
          verified: isEmployed && i % 4 !== 0,
          employerName: isEmployed && i % 4 !== 0 ? 'Tata Tech & Engineering' : undefined,
          verifiedSalary: isEmployed && i % 4 !== 0 ? 18000 + (i * 350) % 16000 : undefined,
          verifiedDate: isEmployed ? '20/03/2026' : undefined,
          notes: i % 4 === 0 && isEmployed ? 'Simulated disparity: Reported salary ₹25,000 vs HR record ₹18,000' : 'Verified via portal'
        },
        providerConfirmed: {
          confirmed: true,
          confirmedDate: '18/03/2026'
        },
        status: !isEmployed ? 'Pending verification' : (i % 4 === 0 ? 'Conflicting information' : 'Verified')
      },
      skillRelevanceScore: i % 3 === 0 ? 'High' : i % 3 === 1 ? 'Medium' : 'Low',
      relevancePercentage: 55 + (i * 3) % 40,
      unemploymentReason: !isEmployed ? {
        category: i % 5 === 0 ? 'Skill Gap' : i % 5 === 1 ? 'Local Opportunities' : i % 5 === 2 ? 'Salary Mismatch' : i % 5 === 3 ? 'Incomplete Training' : 'Location/Mobility',
        percentage: 38,
        details: 'Discrepancy in required practical tool expertise vs regional employer demand.'
      } : undefined,
      followUps: [
        {
          id: `f1-${i}`,
          traineeId: `TRN-2026-${String(i).padStart(3, '0')}`,
          milestone: '1 Month',
          dueDate: '15 Apr 2026',
          completedDate: isEmployed ? '15 Apr 2026' : undefined,
          status: isEmployed ? 'Completed' : 'Overdue',
          questionnaire: {
            stillEmployed: isEmployed,
            currentSalary: isEmployed ? 18000 + (i * 350) % 16000 : 0,
            sameEmployer: true
          },
          lastContactChannel: i % 2 === 0 ? 'WhatsApp' : 'SMS'
        }
      ],
      earlyWarning: {
        isAtRisk: isAtRisk,
        riskScore: isAtRisk ? 78 : 18,
        indicators: isAtRisk ? ['High absenteeism in final module', 'Scored < 60% on practical lab assessment', 'Multiple failed interview callbacks'] : ['None'],
        recommendedIntervention: isAtRisk ? 'Remedial lab practicals + dedicated mentor counseling session' : 'Standard career path monitoring'
      },
      consent: {
        employmentStatus: true,
        employer: i % 5 !== 0,
        salary: i % 4 !== 0,
        phone: true,
        skillProfile: true,
        trainingHistory: true
      }
    };

    trainees.push(traineeObj);
  }

  return trainees;
}

export const DEMO_TRAINEES = generateDemoTrainees();

export const INITIAL_ANOMALIES: AnomalyAlert[] = [
  {
    id: 'anom-101',
    traineeId: 'TRN-2026-004',
    traineeName: 'Priya Kulkarni',
    providerName: 'Maharashtra Skill Development Centre',
    type: 'Salary Mismatch',
    severity: 'High',
    description: 'Trainee self-reported salary of ₹32,000/mo, whereas Employer HR verified payroll shows ₹21,000/mo.',
    traineeReportedValue: '₹32,000',
    verifiedValue: '₹21,000',
    dateFlagged: '18 Sept 2026',
    status: 'Requires Review'
  },
  {
    id: 'anom-102',
    providerId: 'prov-5',
    providerName: 'Marathwada Skill Initiative',
    type: 'Unusual Placement Cluster',
    severity: 'Medium',
    description: '48 trainees from Cohort 3 reported joining the exact same local firm on the exact same date.',
    dateFlagged: '21 Sept 2026',
    status: 'Requires Review'
  },
  {
    id: 'anom-103',
    traineeId: 'TRN-2026-012',
    traineeName: 'Akash More',
    type: 'Duplicate Joining Dates',
    severity: 'Low',
    description: 'Simultaneous active placement reported across 2 distinct employer entities.',
    traineeReportedValue: 'Dual Active Records',
    verifiedValue: '1 Active, 1 Resigned',
    dateFlagged: '24 Sept 2026',
    status: 'Resolved'
  }
];

export const INITIAL_INTERVENTIONS: Interventions[] = [
  {
    id: 'int-201',
    traineeId: 'TRN-2026-007',
    traineeName: 'Amit Patil',
    type: 'Remedial Training',
    reason: 'Low assessment score (48%) and priority skill gap in Power BI visualization.',
    status: 'Recommended',
    targetSkillGap: 'Power BI Fundamentals & DAX',
    assignedTo: 'Lead Instructor MSDC Pune'
  },
  {
    id: 'int-202',
    traineeId: 'TRN-2026-014',
    traineeName: 'Sneha Bhosale',
    type: 'Career Counseling',
    reason: 'Unemployed for 90+ days despite 88% assessment score. Salary mismatch expectation.',
    status: 'Active',
    targetSkillGap: 'Interview Readiness & Salary Negotiation',
    assignedTo: 'Regional Placement Counselor'
  }
];

export const PROGRAM_ROI_DATA: ProgramROI = {
  totalInvestmentINR: 100000000, // ₹10 Crore
  totalTrainees: 20000,
  certifiedTrainees: 16000,
  employedTrainees: 11500,
  retained6MTrainees: 8700,
  costPerTrainee: 5000, // ₹5,000
  costPerCertification: 6250, // ₹6,250
  costPerEmployment: 8695, // ₹8,695
  costPerSustainedEmployment: 11494 // ₹11,494
};

// Funnel Data for Dashboard 2
export const FUNNEL_DATA = [
  { stage: 'Enrolled', count: 125000, percentage: 100 },
  { stage: 'Training Completed', count: 108000, percentage: 86.4 },
  { stage: 'Certified', count: 98000, percentage: 78.4 },
  { stage: 'Interviewed', count: 84000, percentage: 67.2 },
  { stage: 'Employed', count: 77500, percentage: 62.0 },
  { stage: '6-Month Retained', count: 55025, percentage: 44.0 },
  { stage: '12-Month Retained', count: 42100, percentage: 33.68 }
];

// Wage Progression Data
export const WAGE_PROGRESSION_TREND = [
  { milestone: 'Starting', avgSalary: 20000, topQuartile: 26000, median: 19500 },
  { milestone: '6 Months', avgSalary: 23000, topQuartile: 30000, median: 22500 },
  { milestone: '12 Months', avgSalary: 27000, topQuartile: 36000, median: 26000 },
  { milestone: '18 Months', avgSalary: 31000, topQuartile: 42000, median: 30000 }
];

// Aggregated Skill Gaps
export const AGGREGATED_SKILL_GAPS = [
  { skill: 'SQL & Database Queries', percentage: 42, traineesImpacted: 18400, category: 'Technical' },
  { skill: 'Professional Communication & Soft Skills', percentage: 38, traineesImpacted: 16600, category: 'Soft Skills' },
  { skill: 'Power BI & Visual Dashboarding', percentage: 31, traineesImpacted: 13500, category: 'Technical' },
  { skill: 'Cloud Infrastructure & AWS Basics', percentage: 27, traineesImpacted: 11800, category: 'Technical' },
  { skill: 'Advanced Excel & Macros', percentage: 24, traineesImpacted: 10500, category: 'Technical' },
  { skill: 'EV High Voltage Safety Protocols', percentage: 19, traineesImpacted: 8300, category: 'Domain Specific' }
];

// Why Not Employed Aggregated
export const UNEMPLOYMENT_REASONS_AGGREGATED = [
  { reason: 'Skill Mismatch / Tool Gap', percentage: 38, color: '#ef4444' },
  { reason: 'Local Opportunity Shortage', percentage: 24, color: '#f59e0b' },
  { reason: 'Salary Expectation Mismatch', percentage: 17, color: '#3b82f6' },
  { reason: 'Incomplete Certification', percentage: 12, color: '#8b5cf6' },
  { reason: 'Mobility & Relocation Constraints', percentage: 6, color: '#06b6d4' },
  { reason: 'Other Reasons', percentage: 3, color: '#64748b' }
];
