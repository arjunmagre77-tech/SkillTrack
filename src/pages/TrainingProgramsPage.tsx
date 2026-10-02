import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Monitor, Zap, Settings2, Cpu } from 'lucide-react';
import { GovPageHeader } from './OverviewPage';

const CATEGORY_STYLES: Record<string, { border: string; badge: string; icon: React.ReactNode; iconBg: string }> = {
  'Information Technology': {
    border: 'border-t-4 border-t-blue-500',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: <Monitor className="w-4 h-4 text-blue-600" />,
    iconBg: 'bg-blue-50',
  },
  'Clean Energy & Electrical': {
    border: 'border-t-4 border-t-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: <Zap className="w-4 h-4 text-emerald-600" />,
    iconBg: 'bg-emerald-50',
  },
  'Capital Goods & Mechanical': {
    border: 'border-t-4 border-t-purple-500',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: <Settings2 className="w-4 h-4 text-purple-600" />,
    iconBg: 'bg-purple-50',
  },
  'Automotive': {
    border: 'border-t-4 border-t-amber-500',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: <Cpu className="w-4 h-4 text-amber-600" />,
    iconBg: 'bg-amber-50',
  },
};

const DEFAULT_STYLE = {
  border: 'border-t-4 border-t-slate-400',
  badge: 'bg-slate-50 text-slate-700 border-slate-200',
  icon: <BookOpen className="w-4 h-4 text-slate-600" />,
  iconBg: 'bg-slate-50',
};

export const TrainingProgramsPage: React.FC = () => {
  const { programs } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <GovPageHeader
        icon={<BookOpen className="w-4 h-4" />}
        label="Government & Policy Intelligence"
        title="Training Programs & Sector Outcomes"
        subtitle="NSDC-aligned skilling curricula and their corresponding employment conversion rates."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map(p => {
          const empRate = ((p.employedCount / p.certifiedCount) * 100).toFixed(1);
          const style = CATEGORY_STYLES[p.category] || DEFAULT_STYLE;

          return (
            <div key={p.id} className={`bg-white rounded-2xl border border-slate-200 ${style.border} shadow-sm hover:shadow-md transition flex flex-col`}>
              {/* Card Header */}
              <div className="p-5 border-b border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${style.badge}`}>
                    {style.icon}
                    <span>{p.category}</span>
                  </div>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${style.iconBg}`}>
                    {style.icon}
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-[#0D1B3E] leading-snug">{p.title}</h3>
                <p className="text-xs text-slate-500 font-medium mt-1">Duration: {p.durationWeeks} Weeks Intensive</p>
              </div>

              {/* Stats Grid */}
              <div className="p-5 grid grid-cols-2 gap-x-4 gap-y-3 flex-1">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">Total Trained</span>
                  <strong className="text-[#0D1B3E] font-extrabold text-base">{p.totalTrained.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">Employment Conversion</span>
                  <strong className="text-emerald-600 font-extrabold text-base">{empRate}%</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">Avg Salary</span>
                  <strong className="text-blue-700 font-extrabold text-base">₹{p.avgStartingSalary.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">6M Retained</span>
                  <strong className="text-teal-600 font-extrabold text-base">{p.retention6MCount.toLocaleString()}</strong>
                </div>
              </div>

              {/* Core Skills */}
              <div className="px-5 pb-5 space-y-2 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-1.5 text-xs">
                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${style.iconBg}`}>
                    {style.icon}
                  </div>
                  <span className="font-bold text-slate-700">Core Skills Taught:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.topSkillsTaught.map((s, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-lg text-[11px] font-semibold border border-slate-200 hover:bg-slate-200 transition">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
