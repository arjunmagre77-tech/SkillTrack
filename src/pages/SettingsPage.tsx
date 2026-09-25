import React from 'react';
import { useApp } from '../context/AppContext';
import { Database } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { loadDemoData, selectedRole, setSelectedRole, showToast } = useApp();

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-xl font-extrabold text-gov-900">Platform Settings & SIH Demo Controls</h1>
        <p className="text-xs text-slate-500">Configure role simulations, API endpoints & populate evaluation datasets.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-extrabold text-gov-900 flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-600" />
            <span>SIH Evaluation Demo Dataset</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Instantly loads 105+ candidate longitudinal profiles, district metrics, multi-source payroll verifications & anomaly alerts.
          </p>
        </div>

        <button
          onClick={loadDemoData}
          className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
        >
          <Database className="w-4 h-4" />
          <span>Reload Full Demo Dataset</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-base font-extrabold text-gov-900">Active Access Role Selector</h2>
        
        <div className="grid grid-cols-2 gap-3 text-xs">
          {['ADMIN', 'TRAINING_PROVIDER', 'EMPLOYER', 'TRAINEE'].map(role => (
            <button
              key={role}
              onClick={() => {
                setSelectedRole(role as any);
                showToast(`Switched active portal role to ${role}`, 'info');
              }}
              className={`p-4 rounded-xl border text-left font-bold transition cursor-pointer ${
                selectedRole === role ? 'bg-gov-900 text-white border-gov-950' : 'bg-slate-50 text-slate-800 border-slate-200'
              }`}
            >
              Role: {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
