import React from 'react';
import { useApp } from '../context/AppContext';

export const ProvidersPage: React.FC = () => {
  const { providers } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-xl font-extrabold text-gov-900">Training Provider Outcome Analytics</h1>
        <p className="text-xs text-slate-500">Comparative neutral performance indicators for institutional quality audit (INV-11).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {providers.map(p => (
          <div key={p.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-gov-900">{p.name}</h3>
                <p className="text-xs text-slate-500">{p.district} District • {p.state}</p>
              </div>

              <span className="text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-1 rounded-full">
                {p.dataCompleteness}% Audit Completeness
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Trained Candidate Volume</span>
                <strong className="text-slate-900 text-sm">{p.trained.toLocaleString()}</strong>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Certified Output</span>
                <strong className="text-indigo-700 text-sm">{p.certified.toLocaleString()}</strong>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Employed Outcome</span>
                <strong className="text-emerald-700 text-sm">{p.employed.toLocaleString()} ({p.conversionRate}%)</strong>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">6M Retention Rate</span>
                <strong className="text-teal-700 text-sm">{p.retained6M.toLocaleString()} ({p.retentionRate}%)</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
