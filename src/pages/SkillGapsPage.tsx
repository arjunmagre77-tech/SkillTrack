import React from 'react';
import { 
  BarChart3, 
  Lightbulb, 
  ArrowRight, 
  Database, 
  Briefcase, 
  TrendingUp, 
  Cloud, 
  FileSpreadsheet,
  MapPin
} from 'lucide-react';

const SKILL_SHORTAGES = [
  {
    skill: 'SQL & Database Queries',
    percentage: 42,
    candidates: '18,400',
    category: 'Technical',
    barColor: 'bg-[#2563EB]',
    icon: Database,
    iconBg: 'bg-[#EFF6FF] text-[#2563EB]'
  },
  {
    skill: 'Professional Communication & Soft Skills',
    percentage: 38,
    candidates: '16,600',
    category: 'Soft Skills',
    barColor: 'bg-[#7C3AED]',
    icon: Briefcase,
    iconBg: 'bg-[#F5F3FF] text-[#7C3AED]'
  },
  {
    skill: 'Power BI & Visual Dashboarding',
    percentage: 31,
    candidates: '13,500',
    category: 'Technical',
    barColor: 'bg-[#10B981]',
    icon: TrendingUp,
    iconBg: 'bg-[#ECFDF5] text-[#10B981]'
  },
  {
    skill: 'Cloud Infrastructure & AWS Basics',
    percentage: 27,
    candidates: '11,800',
    category: 'Technical',
    barColor: 'bg-[#0284C7]',
    icon: Cloud,
    iconBg: 'bg-[#F0F9FF] text-[#0284C7]'
  },
  {
    skill: 'Advanced Excel & Macros',
    percentage: 24,
    candidates: '10,500',
    category: 'Technical',
    barColor: 'bg-[#8B5CF6]',
    icon: FileSpreadsheet,
    iconBg: 'bg-[#F5F3FF] text-[#8B5CF6]'
  }
];

const INTERVENTIONS = [
  {
    num: 1,
    title: 'SQL & Querying Capstone Bridge Course',
    desc: '2-week mandatory lab module for all Data Analytics & IT candidates prior to placement drives.',
    badgeBg: 'bg-[#7C3AED] text-white',
    cardBg: 'bg-[#FAF5FF] border-[#E9D5FF] hover:border-[#D8B4FE]',
    titleColor: 'text-[#4C1D95]',
    arrowColor: 'text-[#7C3AED]'
  },
  {
    num: 2,
    title: 'Corporate Soft Skills & Mock Interview Lab',
    desc: 'Communication module targeting candidate interview drop-off reduction.',
    badgeBg: 'bg-[#2563EB] text-white',
    cardBg: 'bg-[#EFF6FF] border-[#BFDBFE] hover:border-[#93C5FD]',
    titleColor: 'text-[#1E3A8A]',
    arrowColor: 'text-[#2563EB]'
  },
  {
    num: 3,
    title: 'Power BI & Interactive Dashboarding Bootcamp',
    desc: 'Hands-on dashboard building targeting 31% industry gap requirement.',
    badgeBg: 'bg-[#059669] text-white',
    cardBg: 'bg-[#ECFDF5] border-[#A7F3D0] hover:border-[#6EE7B7]',
    titleColor: 'text-[#064E3B]',
    arrowColor: 'text-[#059669]'
  }
];

export const SkillGapsPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER */}
      <div className="relative bg-gradient-to-r from-[#EFF6FF] via-[#F0F7FF] to-[#E8F2FE] p-7 rounded-2xl border border-[#D9E8F9] shadow-sm overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
              REGIONAL INTELLIGENCE HUB
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2342] tracking-tight">
              Regional Skill Gap Intelligence
            </h1>
            <p className="text-xs text-[#556987] leading-relaxed">
              Aggregated competency shortages impacting candidate placement across Maharashtra districts.
            </p>
          </div>

          {/* Right Map Silhouette & Chart Graphic */}
          <div className="hidden lg:flex items-center justify-center shrink-0 relative w-44 h-28">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#93C5FD]/60 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border border-[#BFDBFE]" />

              <div className="relative z-10 flex items-center gap-2">
                <div className="w-20 h-16 bg-[#DBEAFE]/80 backdrop-blur-sm rounded-2xl border border-[#BFDBFE] p-2 flex flex-col items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6 text-[#2563EB]" />
                  <span className="text-[9px] font-bold text-[#1E40AF] mt-0.5">Maharashtra</span>
                </div>

                <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl border border-[#D9E2EF] shadow-md flex items-end gap-1 h-16 w-16 justify-center">
                  <div className="w-2 bg-[#93C5FD] rounded-t-sm h-6" />
                  <div className="w-2 bg-[#60A5FA] rounded-t-sm h-9" />
                  <div className="w-2 bg-[#2563EB] rounded-t-sm h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TWO COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Top Regional Skill Shortages */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-5 h-5 text-[#2563EB]" />
            <h2 className="text-sm sm:text-base font-extrabold text-[#0B2342]">
              Top Regional Skill Shortages
            </h2>
          </div>

          <div className="space-y-5">
            {SKILL_SHORTAGES.map((item, idx) => {
              const IconComponent = item.icon;

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-extrabold text-[#0B2342]">
                        {item.skill}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold px-2 py-0.5 bg-[#FEE2E2] text-[#DC2626] rounded-md shrink-0">
                      {item.percentage}% Deficit
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-[#F1F5F9] rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-700 ${item.barColor}`}
                      style={{ width: `${item.percentage * 1.5}%` }}
                    />
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-0.5">
                    <span>Impacted Candidates: {item.candidates}</span>
                    <span className="font-semibold text-[#475569]">Category: {item.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Recommended Micro-Upskilling Interventions */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <Lightbulb className="w-5 h-5 text-[#2563EB]" />
            <h2 className="text-sm sm:text-base font-extrabold text-[#0B2342]">
              Recommended Micro-Upskilling Interventions
            </h2>
          </div>

          <div className="space-y-3.5 pt-1">
            {INTERVENTIONS.map((iv) => (
              <div
                key={iv.num}
                className={`p-4 rounded-2xl border transition-all duration-150 cursor-pointer shadow-sm group ${iv.cardBg}`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${iv.badgeBg}`}>
                    {iv.num}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className={`text-xs sm:text-[13px] font-bold ${iv.titleColor}`}>
                        {iv.title}
                      </h3>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${iv.arrowColor}`} />
                    </div>
                    <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed font-normal">
                      {iv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
