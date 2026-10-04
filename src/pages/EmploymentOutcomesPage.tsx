import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Briefcase } from 'lucide-react';

const FILTERS = [
  { key: 'ALL', label: 'All' },
  { key: 'Employed', label: 'Employed' },
  { key: 'Self-Employed', label: 'Self-Employed' },
  { key: 'Apprenticeship', label: 'Apprenticeship' },
  { key: 'Unemployed', label: 'Unemployed' },
];

export const EmploymentOutcomesPage: React.FC = () => {
  const { trainees } = useApp();
  const [filterType, setFilterType] = useState('ALL');

  const filtered = trainees.filter(t => filterType === 'ALL' || t.employmentStatus === filterType);

  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER */}
      <div className="relative bg-gradient-to-r from-[#EFF6FF] via-[#F0F7FF] to-[#E8F2FE] p-7 rounded-2xl border border-[#D9E8F9] shadow-sm overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          {/* Left Text */}
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
              GOVERNMENT & POLICY INTELLIGENCE HUB
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2342] tracking-tight">
              Employment Outcome Audit
            </h1>
            <p className="text-xs text-[#556987] leading-relaxed">
              Detailed breakdown of candidates placed, self-employed, in apprenticeships, or seeking placement.
            </p>
          </div>

          {/* Right Controls & Illustration */}
          <div className="flex items-center gap-6 self-stretch lg:self-auto justify-between lg:justify-end flex-wrap">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm p-1.5 rounded-2xl border border-[#D9E2EF]">
              {FILTERS.map((f) => {
                const isActive = filterType === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setFilterType(f.key)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#2563EB] text-white shadow-sm'
                        : 'text-[#475569] hover:text-[#0B2342] hover:bg-white'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            {/* Illustration Graphic */}
            <div className="hidden xl:flex items-center justify-center shrink-0">
              <div className="w-24 h-20 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#BFDBFE] p-3 shadow-sm flex flex-col items-center justify-center relative">
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="w-12 h-1.5 bg-[#E2E8F0] rounded-full mt-2" />
                <div className="w-8 h-1 bg-[#F1F5F9] rounded-full mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DATA TABLE */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#64748B] font-bold text-[11px] tracking-wider uppercase">
              <tr>
                <th className="py-3.5 px-4 font-bold">CANDIDATE</th>
                <th className="py-3.5 px-4 font-bold">ROLE / DESIGNATION</th>
                <th className="py-3.5 px-4 font-bold">EMPLOYER</th>
                <th className="py-3.5 px-4 font-bold">SALARY</th>
                <th className="py-3.5 px-4 font-bold">START DATE</th>
                <th className="py-3.5 px-4 font-bold">6M RETENTION</th>
                <th className="py-3.5 px-4 font-bold">RELEVANCE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9] font-medium text-[#334155]">
              {filtered.slice(0, 40).map((t) => {
                const isSustained = t.retention6Month;

                return (
                  <tr key={t.id} className="hover:bg-[#F8FAFC] transition-colors duration-100">
                    <td className="py-3 px-4 font-extrabold text-[#0B2342] whitespace-nowrap">
                      {t.name}
                    </td>

                    <td className="py-3 px-4 text-[#334155] whitespace-nowrap">
                      {t.currentRole || 'N/A'}
                    </td>

                    <td className="py-3 px-4 text-[#475569] whitespace-nowrap">
                      {t.employerName || 'Unassigned'}
                    </td>

                    <td className="py-3 px-4 font-extrabold text-[#059669] whitespace-nowrap">
                      {t.salary ? `₹${t.salary.toLocaleString()}` : 'N/A'}
                    </td>

                    <td className="py-3 px-4 text-[#64748B] whitespace-nowrap">
                      {t.employmentStartDate || 'N/A'}
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        isSustained
                          ? 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]'
                          : 'bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A]'
                      }`}>
                        {isSustained ? 'Sustained ✓' : 'Pending'}
                      </span>
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                        {t.skillRelevanceScore} ({t.relevancePercentage}%)
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
