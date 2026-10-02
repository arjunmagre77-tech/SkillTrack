import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export const DistrictInsightsPage: React.FC = () => {
  const { districts, setSelectedDistrict } = useApp();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-xl font-extrabold text-gov-900">District Skill & Employment Intelligence</h1>
        <p className="text-xs text-slate-500">Regional employment conversion, skill gap heatmaps & local opportunity scores across Maharashtra (INV-12).</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {districts.map(d => (
          <div 
            key={d.district} 
            onClick={() => {
              setSelectedDistrict(d.district);
              navigate('/dashboard/government/program-impact');
            }}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-teal-400 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-gov-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>{d.district}</span>
              </h3>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                {d.employmentRate}% Rate
              </span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500">Trained:</span>
                <strong className="text-slate-900">{d.trained.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500">6M Retention:</span>
                <strong className="text-teal-700">{d.retentionRate}%</strong>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Local Job Score:</span>
                <strong className="text-blue-700">{d.localJobAvailabilityScore} / 100</strong>
              </div>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-[11px]">
              <span className="text-slate-400 block font-bold uppercase text-[9px]">Top Regional Gap:</span>
              <strong className="text-rose-700 font-bold">{d.topSkillGap}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
