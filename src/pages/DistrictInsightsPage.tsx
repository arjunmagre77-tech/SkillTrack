import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  ChevronRight, 
  ChevronDown, 
  GraduationCap, 
  RotateCw, 
  TrendingUp, 
  Star
} from 'lucide-react';

interface DistrictCardData {
  district: string;
  employmentRate: number;
  trained: number;
  retentionRate: number;
  localJobAvailabilityScore: number;
  topSkillGap: string;
  theme: 'blue' | 'green' | 'purple' | 'orange';
}

const DISTRICTS_DATA: DistrictCardData[] = [
  {
    district: 'Pune',
    employmentRate: 68,
    trained: 22500,
    retentionRate: 74,
    localJobAvailabilityScore: 88,
    topSkillGap: 'Power BI & Advanced Analytics',
    theme: 'blue'
  },
  {
    district: 'Mumbai Suburban',
    employmentRate: 64.8,
    trained: 28000,
    retentionRate: 72.5,
    localJobAvailabilityScore: 94,
    topSkillGap: 'Cloud Computing & DevOps',
    theme: 'green'
  },
  {
    district: 'Nagpur',
    employmentRate: 56.2,
    trained: 14200,
    retentionRate: 68,
    localJobAvailabilityScore: 65,
    topSkillGap: 'EV Maintenance & Wiring',
    theme: 'purple'
  },
  {
    district: 'Nashik',
    employmentRate: 58,
    trained: 12800,
    retentionRate: 70.2,
    localJobAvailabilityScore: 72,
    topSkillGap: 'PLC & CNC Precision Tools',
    theme: 'orange'
  },
  {
    district: 'Thane',
    employmentRate: 64.9,
    trained: 16400,
    retentionRate: 71.8,
    localJobAvailabilityScore: 84,
    topSkillGap: 'IT & ITeS Support',
    theme: 'blue'
  },
  {
    district: 'Chhatrapati Sambhajinagar',
    employmentRate: 51.7,
    trained: 10500,
    retentionRate: 65.4,
    localJobAvailabilityScore: 68,
    topSkillGap: 'Automotive Manufacturing',
    theme: 'green'
  },
  {
    district: 'Kolhapur',
    employmentRate: 57.2,
    trained: 9200,
    retentionRate: 73,
    localJobAvailabilityScore: 68,
    topSkillGap: 'Textile & Apparel Technology',
    theme: 'purple'
  },
  {
    district: 'Solapur',
    employmentRate: 48.2,
    trained: 7800,
    retentionRate: 62.1,
    localJobAvailabilityScore: 52,
    topSkillGap: 'Renewable Energy Systems',
    theme: 'orange'
  }
];

const THEME_STYLES = {
  blue: {
    borderLeft: 'border-l-4 border-l-[#2563EB]',
    pinBg: 'bg-[#EFF6FF] text-[#2563EB]',
    arrowColor: 'text-[#2563EB]',
    gapText: 'text-[#2563EB]',
    pillBg: 'bg-[#F0FDF4] text-[#16A34A] border border-[#DCFCE7]'
  },
  green: {
    borderLeft: 'border-l-4 border-l-[#10B981]',
    pinBg: 'bg-[#ECFDF5] text-[#10B981]',
    arrowColor: 'text-[#10B981]',
    gapText: 'text-[#10B981]',
    pillBg: 'bg-[#F0FDF4] text-[#16A34A] border border-[#DCFCE7]'
  },
  purple: {
    borderLeft: 'border-l-4 border-l-[#8B5CF6]',
    pinBg: 'bg-[#F5F3FF] text-[#8B5CF6]',
    arrowColor: 'text-[#8B5CF6]',
    gapText: 'text-[#8B5CF6]',
    pillBg: 'bg-[#F0FDF4] text-[#16A34A] border border-[#DCFCE7]'
  },
  orange: {
    borderLeft: 'border-l-4 border-l-[#F97316]',
    pinBg: 'bg-[#FFF7ED] text-[#F97316]',
    arrowColor: 'text-[#F97316]',
    gapText: 'text-[#F97316]',
    pillBg: 'bg-[#F0FDF4] text-[#16A34A] border border-[#DCFCE7]'
  }
};

export const DistrictInsightsPage: React.FC = () => {
  const { setSelectedDistrict, loadDemoData } = useApp();
  const navigate = useNavigate();
  const selectedInv = 'Maharashtra (INV-12)';

  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER */}
      <div className="relative bg-gradient-to-r from-[#EFF6FF] via-[#F0F7FF] to-[#E8F2FE] p-7 rounded-2xl border border-[#D9E8F9] shadow-sm overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          {/* Left Text & Controls */}
          <div className="space-y-4 max-w-2xl">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
                GOVERNMENT & POLICY INTELLIGENCE HUB
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2342] tracking-tight">
                District Skill & Employment Intelligence
              </h1>
              <p className="text-xs text-[#556987] leading-relaxed">
                Regional employment conversion, skill gap heatmaps & local opportunity scores across Maharashtra (INV-12).
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button 
                onClick={() => navigate('/dashboard/government/program-impact')}
                className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <span>Program Impact Dashboard</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <div className="relative">
                <button className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-[#0B2342] text-xs font-semibold rounded-xl border border-[#D9E2EF] shadow-sm transition-colors cursor-pointer">
                  <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{selectedInv}</span>
                  <ChevronDown className="w-3 h-3 text-[#64748B]" />
                </button>
              </div>

              <button 
                onClick={loadDemoData}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-[#0B2342] text-xs font-semibold rounded-xl border border-[#D9E2EF] shadow-sm transition-colors cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5 text-[#64748B]" />
                <span>Reload Data</span>
              </button>
            </div>
          </div>

          {/* Right Map Silhouette & Chart Illustration */}
          <div className="hidden lg:flex items-center justify-center shrink-0 relative w-44 h-32">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#93C5FD]/60 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-[#BFDBFE]" />
              
              {/* Map Silhouette & Bar Chart Graphic */}
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

      {/* 4x2 DISTRICTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DISTRICTS_DATA.map((d) => {
          const style = THEME_STYLES[d.theme];

          return (
            <div
              key={d.district}
              onClick={() => {
                setSelectedDistrict(d.district);
                navigate('/dashboard/government/program-impact');
              }}
              className={`bg-white rounded-2xl border border-[#E2E8F0] ${style.borderLeft} p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${style.pinBg}`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0B2342] truncate">
                    {d.district}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${style.pillBg}`}>
                    {d.employmentRate}% Rate
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                </div>
              </div>

              {/* Stats Metrics List */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>Trained</span>
                  </span>
                  <span className="font-extrabold text-[#0B2342]">
                    {d.trained.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>6M Retention</span>
                  </span>
                  <span className="font-extrabold text-[#0B2342]">
                    {d.retentionRate}%
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>Local Job Score</span>
                  </span>
                  <span className="font-extrabold text-[#2563EB]">
                    {d.localJobAvailabilityScore} / 100
                  </span>
                </div>
              </div>

              {/* Top Regional Gap Banner */}
              <div className="pt-2 border-t border-[#F1F5F9]">
                <div className="text-[10px] text-[#64748B] flex items-center gap-1.5">
                  <TrendingUp className={`w-3.5 h-3.5 ${style.arrowColor}`} />
                  <span>Top Regional Gap</span>
                </div>
                <div className={`text-xs font-bold mt-0.5 truncate ${style.gapText}`}>
                  {d.topSkillGap}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
