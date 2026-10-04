import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  ShieldAlert, 
  RotateCw, 
  Check, 
  ChevronRight, 
  MapPin, 
  ChevronDown, 
  UserCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const AnomalyCenterPage: React.FC = () => {
  const { anomalies, resolveAnomaly, loadDemoData } = useApp();
  const selectedRegion = 'Maharashtra (INV-14)';

  const requiresReviewCount = anomalies.filter(a => a.status === 'Requires Review').length;

  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER */}
      <div className="relative bg-gradient-to-r from-[#EFF6FF] via-[#F0F7FF] to-[#E8F2FE] p-7 rounded-2xl border border-[#D9E8F9] shadow-sm overflow-hidden">
        {/* Decorative Grid Lines / Tech Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          {/* Left Text & Controls */}
          <div className="space-y-4 max-w-2xl">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
                AI & DATA QUALITY CENTER
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2342] tracking-tight">
                AI Data Quality & Anomaly Center
              </h1>
              <p className="text-xs text-[#556987] leading-relaxed">
                AI-assisted detection of salary mismatches, unusual placement concentrations & unverified employment records.
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button 
                onClick={() => {
                  anomalies.forEach(a => {
                    if (a.status === 'Requires Review') resolveAnomaly(a.id, 'Verified');
                  });
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Mark as Verified</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <div className="relative">
                <button className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-[#0B2342] text-xs font-semibold rounded-xl border border-[#D9E2EF] shadow-sm transition-colors cursor-pointer">
                  <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{selectedRegion}</span>
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

          {/* Right AI Hub Status Cards & Illustration */}
          <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto justify-end">
            {/* Tech AI Graphic Illustration */}
            <div className="relative w-28 h-28 hidden sm:flex items-center justify-center">
              {/* Outer orbit rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#93C5FD]/60 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border border-[#BFDBFE]" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#DBEAFE] to-[#EFF6FF] flex items-center justify-center shadow-inner">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex flex-col items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4 mb-0.5 text-blue-200" />
                  <span className="text-[10px] font-extrabold tracking-tighter">AI</span>
                </div>
              </div>
              <div className="absolute bottom-1 left-1 bg-white p-1 rounded-full shadow-sm border border-blue-200">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
              </div>
            </div>

            {/* Status Pills Cards */}
            <div className="flex flex-col gap-2.5 min-w-[200px]">
              <div className="flex items-center gap-2.5 px-3.5 py-2 bg-white/90 backdrop-blur-sm rounded-xl border border-[#D9E2EF] shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0B2342] leading-tight">Neutral Audit Status</div>
                  <div className="text-[9px] text-[#64748B]">System Verified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2 bg-[#FFFBEB] rounded-xl border border-[#FDE68A] shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#92400E] leading-tight">
                    {requiresReviewCount} Alerts Require Verification
                  </div>
                  <div className="text-[9px] text-[#B45309]">Pending Review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANOMALY ALERTS CARDS */}
      <div className="space-y-4">
        {anomalies.map(anom => {
          const isHigh = anom.severity === 'High';
          const isPending = anom.status === 'Requires Review';

          return (
            <div
              key={anom.id}
              className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-sm transition-all duration-200 ${
                isPending ? 'border-[#F1F5F9]' : 'border-[#E2E8F0] opacity-90'
              }`}
            >
              {/* Card Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4">
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isHigh ? 'bg-[#FEE2E2] text-[#EF4444]' : 'bg-[#FEF3C7] text-[#F59E0B]'
                  }`}>
                    <ShieldAlert className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-extrabold text-[#0B2342] tracking-tight">
                        {anom.type}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isHigh ? 'bg-[#EF4444] text-white' : 'bg-[#F59E0B] text-white'
                      }`}>
                        {anom.severity} Severity
                      </span>
                    </div>

                    <div className="text-xs text-[#64748B] mt-0.5 flex items-center gap-1.5 flex-wrap">
                      <span>Flagged on {anom.dateFlagged}</span>
                      <span>•</span>
                      <span className="font-medium text-[#475569]">
                        {anom.providerName || 'Maharashtra Skill Development Centre'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Badge / Status */}
                <div className="flex items-center self-start sm:self-center">
                  <span className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full border ${
                    isPending
                      ? isHigh 
                        ? 'bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]' 
                        : 'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]'
                      : 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]'
                  }`}>
                    <span>{anom.status}</span>
                    <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Description Body */}
              <div className="pt-4 pb-2">
                <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed">
                  {anom.type === 'Salary Mismatch' ? (
                    <>
                      Trainee self-reported salary of <span className="font-bold text-[#0B2342]">₹32,000/mo</span>, whereas Employer HR verified payroll shows <span className="font-bold text-[#DC2626]">₹21,000/mo</span>.
                    </>
                  ) : (
                    <>
                      <span className="font-bold text-[#0B2342]">48 trainees</span> from Cohort 3 reported joining the exact same local firm on the exact same <span className="font-bold text-[#0B2342]">date</span>.
                    </>
                  )}
                </p>
              </div>

              {/* Data Comparison & Action Footer */}
              <div className="mt-3 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                {/* Specific side-by-side data comparison boxes if available */}
                {(anom.traineeReportedValue || anom.verifiedValue) ? (
                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Box 1 */}
                    <div className="flex items-center gap-3 px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl min-w-[190px]">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-[#64748B] tracking-wider uppercase">
                          TRAINEE SELF-REPORTED:
                        </div>
                        <div className="text-sm font-extrabold text-[#0B2342]">
                          {anom.traineeReportedValue || '₹32,000'}
                        </div>
                      </div>
                    </div>

                    {/* Box 2 */}
                    <div className="flex items-center gap-3 px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl min-w-[190px]">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-[#64748B] tracking-wider uppercase">
                          VERIFIED PAYROLL / HR RECORD:
                        </div>
                        <div className="text-sm font-extrabold text-[#DC2626]">
                          {anom.verifiedValue || '₹21,000'}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div />
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 self-end md:self-auto shrink-0">
                  <button
                    onClick={() => resolveAnomaly(anom.id, 'Verified')}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold rounded-xl shadow-sm transition-all duration-150 cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Mark as Verified</span>
                    <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={() => resolveAnomaly(anom.id, 'Resolved')}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#0B2342] hover:bg-[#1E3A5F] text-white text-xs font-bold rounded-xl shadow-sm transition-all duration-150 cursor-pointer"
                  >
                    <RotateCw className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Resolve & Update Record</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
