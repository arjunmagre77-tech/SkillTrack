import React from 'react';
import { useApp } from '../context/AppContext';

export const TrainingProgramsPage: React.FC = () => {
  const { programs } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-xl font-extrabold text-gov-900">Training Programs & Sector Outcomes</h1>
        <p className="text-xs text-slate-500">NSDC-aligned skilling curricula and their corresponding employment conversion rates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map(p => {
          const empRate = ((p.employedCount / p.certifiedCount) * 100).toFixed(1);

          return (
            <div key={p.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full uppercase">
                  {p.category}
                </span>
                <h3 className="text-base font-extrabold text-gov-900 leading-snug">{p.title}</h3>
                <p className="text-xs text-slate-500 font-medium">Duration: {p.durationWeeks} Weeks Intensive</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">TOTAL TRAINED</span>
                  <strong className="text-slate-900 font-bold">{p.totalTrained.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">EMPLOYMENT CONVERSION</span>
                  <strong className="text-emerald-700 font-bold">{empRate}%</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">AVG SALARY</span>
                  <strong className="text-blue-700 font-bold">₹{p.avgStartingSalary.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">6M RETAINED</span>
                  <strong className="text-teal-700 font-bold">{p.retention6MCount.toLocaleString()}</strong>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <span className="font-bold text-slate-700">Core Skills Taught:</span>
                <div className="flex flex-wrap gap-1">
                  {p.topSkillsTaught.map((s, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium border border-slate-200">
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
