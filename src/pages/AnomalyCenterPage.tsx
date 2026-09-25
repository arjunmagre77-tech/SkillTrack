import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldAlert } from 'lucide-react';

export const AnomalyCenterPage: React.FC = () => {
  const { anomalies, resolveAnomaly } = useApp();

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-gov-900">AI Data Quality & Anomaly Center</h1>
            <span className="text-xs font-semibold bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded border border-rose-200">
              INV-14 • Data Quality Safeguard
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            AI-assisted detection of salary mismatches, unusual placement concentrations & unverified employment records.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">Neutral Audit Status:</span>
          <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-lg border border-amber-200">
            {anomalies.filter(a => a.status === 'Requires Review').length} Alerts Require Verification
          </span>
        </div>
      </div>

      {/* ANOMALY LIST */}
      <div className="space-y-4">
        {anomalies.map(anom => (
          <div key={anom.id} className={`bg-white p-6 rounded-2xl border shadow-sm space-y-4 transition ${
            anom.status === 'Requires Review' ? 'border-rose-200 bg-rose-50/20' : 'border-slate-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${
                  anom.severity === 'High' ? 'bg-rose-100 text-rose-700' :
                  anom.severity === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold text-gov-900">{anom.type}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      anom.severity === 'High' ? 'bg-rose-500 text-white' : 'bg-amber-500 text-white'
                    }`}>
                      {anom.severity} Severity
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Flagged on {anom.dateFlagged} • {anom.providerName || 'Individual Record'}</p>
                </div>
              </div>

              <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${
                anom.status === 'Requires Review' ? 'bg-amber-50 text-amber-900 border-amber-300' : 'bg-emerald-50 text-emerald-900 border-emerald-300'
              }`}>
                {anom.status}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {anom.description}
            </p>

            {(anom.traineeReportedValue || anom.verifiedValue) && (
              <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Trainee Self-Reported:</span>
                  <strong className="text-slate-900 font-extrabold">{anom.traineeReportedValue}</strong>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Verified Payroll / HR Record:</span>
                  <strong className="text-rose-700 font-extrabold">{anom.verifiedValue}</strong>
                </div>
              </div>
            )}

            {anom.status === 'Requires Review' && (
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => resolveAnomaly(anom.id, 'Verified')}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition cursor-pointer"
                >
                  Mark as Verified ✓
                </button>
                <button
                  onClick={() => resolveAnomaly(anom.id, 'Resolved')}
                  className="px-3.5 py-1.5 bg-gov-900 hover:bg-gov-800 text-white text-xs font-bold rounded-lg transition cursor-pointer"
                >
                  Resolve & Update Record
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
