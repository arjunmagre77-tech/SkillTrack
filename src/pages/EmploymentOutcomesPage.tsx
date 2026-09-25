import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const EmploymentOutcomesPage: React.FC = () => {
  const { trainees } = useApp();
  const [filterType, setFilterType] = useState('ALL');

  const filtered = trainees.filter(t => filterType === 'ALL' || t.employmentStatus === filterType);

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-gov-900">Employment Outcome Audit</h1>
          <p className="text-xs text-slate-500">Detailed breakdown of candidates placed, self-employed, in apprenticeships, or seeking placement.</p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setFilterType('ALL')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${filterType === 'ALL' ? 'bg-gov-900 text-white' : 'bg-slate-100 text-slate-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('Employed')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${filterType === 'Employed' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}
          >
            Employed
          </button>
          <button
            onClick={() => setFilterType('Self-Employed')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${filterType === 'Self-Employed' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700'}`}
          >
            Self-Employed
          </button>
          <button
            onClick={() => setFilterType('Apprenticeship')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${filterType === 'Apprenticeship' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}
          >
            Apprenticeship
          </button>
          <button
            onClick={() => setFilterType('Unemployed')}
            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${filterType === 'Unemployed' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'}`}
          >
            Unemployed
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="p-3">Candidate</th>
              <th className="p-3">Role / Designation</th>
              <th className="p-3">Employer</th>
              <th className="p-3">Salary</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">6M Retention</th>
              <th className="p-3">Relevance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.slice(0, 40).map(t => (
              <tr key={t.id} className="hover:bg-slate-50 transition">
                <td className="p-3 font-bold text-gov-900">{t.name}</td>
                <td className="p-3 font-semibold text-slate-800">{t.currentRole || 'N/A'}</td>
                <td className="p-3 text-slate-700">{t.employerName || 'Unassigned'}</td>
                <td className="p-3 font-extrabold text-emerald-700">{t.salary ? `₹${t.salary.toLocaleString()}` : 'N/A'}</td>
                <td className="p-3 text-slate-500">{t.employmentStartDate || 'N/A'}</td>
                <td className="p-3 font-bold text-teal-700">{t.retention6Month ? 'Sustained ✓' : 'Pending'}</td>
                <td className="p-3 font-bold text-blue-700">{t.skillRelevanceScore} ({t.relevancePercentage}%)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
