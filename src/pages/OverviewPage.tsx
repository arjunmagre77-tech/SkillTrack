import React from 'react';
import { GovernmentOverviewPage } from './government/GovernmentOverviewPage';
import { MapPin } from 'lucide-react';

// Shared page header component used across Government intelligence pages
export const GovPageHeader: React.FC<{
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle: string;
  jurisdiction?: string;
  isDark?: boolean;
}> = ({
  icon,
  label,
  title,
  subtitle,
  jurisdiction = 'Maharashtra (State Level)',
  isDark = true,
}) => {
  if (isDark) {
    return (
      <div className="relative bg-[#0B1528] text-white rounded-2xl p-6 md:p-8 mb-6 overflow-hidden border border-[#172642] shadow-md">
        {/* Subtle decorative background curves and bar chart watermark */}
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-4 bottom-2 opacity-15 hidden md:flex items-end gap-2 pointer-events-none select-none">
          <div className="w-5 h-12 bg-blue-400 rounded-t-md"></div>
          <div className="w-5 h-20 bg-blue-400 rounded-t-md"></div>
          <div className="w-5 h-28 bg-blue-400 rounded-t-md"></div>
          <div className="w-5 h-36 bg-blue-400 rounded-t-md"></div>
          {/* Subtle curved upward arrow */}
          <svg className="absolute -top-4 -left-8 w-44 h-44 text-blue-400/80" viewBox="0 0 100 100" fill="none">
            <path d="M 15 85 Q 50 65 75 20" stroke="currentColor" strokeWidth="3" fill="none" />
            <path d="M 64 20 L 76 19 L 75 31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                {icon}
              </div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                {label || 'GOVERNMENT & POLICY INTELLIGENCE'}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-xs md:text-sm text-slate-300 font-normal max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="shrink-0 inline-flex items-center gap-2 bg-[#12223D]/90 border border-[#203960] rounded-xl px-3.5 py-2 text-xs font-semibold text-white shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-400 font-normal">Jurisdiction:</span>
            <span className="font-bold text-blue-200">{jurisdiction}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-r from-[#eef5ff] via-[#f4f8ff] to-[#edf4fc] rounded-2xl p-6 md:p-8 mb-6 overflow-hidden border border-blue-100 shadow-2xs">
      <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
              {icon}
            </div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              {label || 'GOVERNMENT & POLICY INTELLIGENCE HUB'}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 font-normal max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="shrink-0 inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-[#0D1B3E] shadow-2xs">
          <MapPin className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-slate-500 font-normal">Jurisdiction:</span>
          <span className="font-bold text-blue-700">{jurisdiction}</span>
        </div>
      </div>
    </div>
  );
};

export const OverviewPage: React.FC = () => {
  return <GovernmentOverviewPage />;
};

export default OverviewPage;
