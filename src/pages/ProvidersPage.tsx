import React from 'react';
import { useApp } from '../context/AppContext';
import { Building2, Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import { GovPageHeader } from './OverviewPage';

const PROVIDER_COLORS = [
  { border: 'border-l-4 border-l-blue-500', badge: 'text-blue-700 bg-blue-50 border-blue-200', icon: 'bg-blue-100 text-blue-700' },
  { border: 'border-l-4 border-l-emerald-500', badge: 'text-emerald-700 bg-emerald-50 border-emerald-200', icon: 'bg-emerald-100 text-emerald-700' },
  { border: 'border-l-4 border-l-amber-500', badge: 'text-amber-700 bg-amber-50 border-amber-200', icon: 'bg-amber-100 text-amber-700' },
  { border: 'border-l-4 border-l-purple-500', badge: 'text-purple-700 bg-purple-50 border-purple-200', icon: 'bg-purple-100 text-purple-700' },
  { border: 'border-l-4 border-l-teal-500', badge: 'text-teal-700 bg-teal-50 border-teal-200', icon: 'bg-teal-100 text-teal-700' },
  { border: 'border-l-4 border-l-rose-500', badge: 'text-rose-700 bg-rose-50 border-rose-200', icon: 'bg-rose-100 text-rose-700' },
];

export const ProvidersPage: React.FC = () => {
  const { providers } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <GovPageHeader
        icon={<Building2 className="w-4 h-4" />}
        label="Government & Policy Intelligence"
        title="Training Provider Outcome Analytics"
        subtitle="Comparative neural performance indicators for institutional quality audit (INV-11)."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {providers.map((p, idx) => {
          const colorStyle = PROVIDER_COLORS[idx % PROVIDER_COLORS.length];
          const auditPct = p.dataCompleteness;
          const auditColor = auditPct >= 95 ? 'text-emerald-700 bg-emerald-50 border-emerald-200' :
                             auditPct >= 90 ? 'text-blue-700 bg-blue-50 border-blue-200' :
                             'text-amber-700 bg-amber-50 border-amber-200';

          return (
            <div key={p.id} className={`bg-white rounded-2xl border border-slate-200 ${colorStyle.border} shadow-sm hover:shadow-md transition`}>
              {/* Provider Header */}
              <div className="p-5 border-b border-slate-100">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm ${colorStyle.icon}`}>
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#0D1B3E] leading-tight">{p.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{p.district} District • {p.state}</p>
                    </div>
                  </div>
                  <span className={`shrink-0 text-xs font-bold border px-2.5 py-1 rounded-full ${auditColor}`}>
                    {auditPct}% Audit Completeness
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="p-5 grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5 text-blue-500" />
                    Trained Candidate Volume
                  </div>
                  <div className="text-lg font-extrabold text-[#0D1B3E]">{p.trained.toLocaleString()}</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-indigo-500" />
                    Certified Output
                  </div>
                  <div className="text-lg font-extrabold text-indigo-700">{p.certified.toLocaleString()}</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
                    Employed Outcome
                  </div>
                  <div className="text-lg font-extrabold text-emerald-700">
                    {p.employed.toLocaleString()} <span className="text-sm">({p.conversionRate}%)</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5 text-teal-500" />
                    6M Retention Rate
                  </div>
                  <div className="text-lg font-extrabold text-teal-700">
                    {p.retained6M.toLocaleString()} <span className="text-sm">({p.retentionRate}%)</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
