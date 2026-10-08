import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Briefcase, 
  MapPin, 
  Building, 
  Building2, 
  Sun, 
  Settings, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';
import { JobsIllustration } from '../../components/trainee/TraineeBannerIllustrations';

export const TraineeJobsPage: React.FC = () => {
  const { selectedTrainee, showToast } = useApp();

  const jobsList = [
    {
      id: 'JOB-101',
      role: 'Junior Data Analyst',
      company: 'TechSolutions India',
      location: 'Pune, Maharashtra',
      salary: '₹28,000 / mo',
      match: '94% Match',
      icon: <Building2 className="w-6 h-6 text-[#1A73E8]" />,
      iconBg: 'bg-[#EFF6FF]',
    },
    {
      id: 'JOB-102',
      role: 'Solar Operations Associate',
      company: 'CleanEnergy Corp',
      location: 'Pune, Maharashtra',
      salary: '₹25,500 / mo',
      match: '88% Match',
      icon: <Sun className="w-6 h-6 text-[#9333EA]" />,
      iconBg: 'bg-[#F3E8FF]',
    },
    {
      id: 'JOB-103',
      role: 'CNC Machine Technician',
      company: 'Precision Engineering Ltd',
      location: 'Thane, Maharashtra',
      salary: '₹26,000 / mo',
      match: '82% Match',
      icon: <Settings className="w-6 h-6 text-[#1A73E8]" />,
      iconBg: 'bg-[#EFF6FF]',
    },
    {
      id: 'JOB-104',
      role: 'Quality Control Executive',
      company: 'Apex Motors Pvt Ltd',
      location: 'Nashik, Maharashtra',
      salary: '₹24,000 / mo',
      match: '79% Match',
      icon: <ShieldCheck className="w-6 h-6 text-[#7C3AED]" />,
      iconBg: 'bg-[#EDE9FE]',
    },
  ];

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header Banner matching Image 4 */}
      <TraineeHeaderBanner
        tag="INDUSTRY PLACEMENT"
        tagIcon={<Briefcase className="w-4 h-4" />}
        title="Job Opportunities"
        subtitle={`Curated placements matched against candidate skill radar for ${selectedTrainee.name || 'Rahul Sharma'}.`}
        illustration={<JobsIllustration />}
      />

      {/* 2x2 Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobsList.map(j => (
          <div
            key={j.id}
            className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4 hover:shadow-md transition-shadow"
          >
            {/* Card Top: ID and Match Tag */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#1A73E8] tracking-wide">
                {j.id}
              </span>
              <span className="text-xs font-extrabold bg-[#DCFCE7] text-[#15803D] px-3 py-1 rounded-full border border-[#BBF7D0]">
                {j.match}
              </span>
            </div>

            {/* Role & Company Details */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${j.iconBg} flex items-center justify-center shrink-0`}>
                {j.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-extrabold text-[#0F172A] truncate">
                  {j.role}
                </h3>
                <p className="text-xs text-[#64748B] flex items-center gap-1.5 mt-0.5 truncate">
                  <Building className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                  <span className="truncate">{j.company}</span>
                  <span className="text-slate-300">•</span>
                  <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                  <span className="truncate">{j.location}</span>
                </p>
              </div>
            </div>

            {/* Footer Row: Salary and Apply Button */}
            <div className="border-t border-[#F1F5F9] pt-4 flex justify-between items-center">
              <span className="text-base font-black text-[#16A34A]">
                {j.salary}
              </span>
              <button
                onClick={() => showToast(`Application submitted successfully for ${j.role} at ${j.company}!`, 'success')}
                className="px-5 py-2.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
