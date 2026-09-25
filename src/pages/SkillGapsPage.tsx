import React from 'react';
import { AGGREGATED_SKILL_GAPS } from '../data/mockData';

export const SkillGapsPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-gov-900">Regional Skill Gap Intelligence</h1>
          <p className="text-xs text-slate-500">Aggregated competency shortages impacting candidate placement across Maharashtra districts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-gov-900">Top Regional Skill Shortages</h2>

          <div className="space-y-4">
            {AGGREGATED_SKILL_GAPS.map((sg, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-800">{sg.skill}</span>
                  <span className="font-black text-rose-600">{sg.percentage}% Deficit</span>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-rose-500 h-3 rounded-full" style={{ width: `${sg.percentage}%` }} />
                </div>

                <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                  <span>Impacted Candidates: {sg.traineesImpacted.toLocaleString()}</span>
                  <span className="font-bold text-slate-600">Category: {sg.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-gov-900">Recommended Micro-Upskilling Interventions</h2>
          
          <div className="space-y-3 text-xs">
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl space-y-1">
              <span className="font-bold text-purple-900 block">1. SQL & Querying Capstone Bridge Course</span>
              <p className="text-purple-700">2-week mandatory lab module for all Data Analytics & IT candidates prior to placement drives.</p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
              <span className="font-bold text-blue-900 block">2. Corporate Soft Skills & Mock Interview Lab</span>
              <p className="text-blue-700">Communication module targeting candidate interview drop-off reduction.</p>
            </div>

            <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-1">
              <span className="font-bold text-teal-900 block">3. Power BI & Interactive Dashboarding Bootcamp</span>
              <p className="text-teal-700">Hands-on dashboard building targeting 31% industry gap requirement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
