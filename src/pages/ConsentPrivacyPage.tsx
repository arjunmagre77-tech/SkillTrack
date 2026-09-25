import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Check } from 'lucide-react';

export const ConsentPrivacyPage: React.FC = () => {
  const { selectedTrainee, updateConsent, selectedRole, setSelectedRole } = useApp();

  const consentItems: { key: keyof typeof selectedTrainee.consent; label: string; desc: string }[] = [
    { key: 'employmentStatus', label: 'Employment Status Sharing', desc: 'Allow sharing whether you are currently employed, self-employed or job seeking.' },
    { key: 'employer', label: 'Employer Identity Sharing', desc: 'Share your hiring company name for state outcome verification.' },
    { key: 'salary', label: 'Salary & Compensation Privacy', desc: 'Allow aggregate payroll audit verification for wage progression analytics.' },
    { key: 'phone', label: 'Contact Phone Number Privacy', desc: 'Allow verified employers & placement counselors to reach you via SMS/WhatsApp.' },
    { key: 'skillProfile', label: 'Skill Profile Sharing', desc: 'Make your technical skill ratings accessible to regional hiring managers.' },
    { key: 'trainingHistory', label: 'Training & Assessment Records', desc: 'Share course completion scores and NSDC digital certificates.' }
  ];

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-gov-900">Privacy & Consent Management Center</h1>
            <span className="text-xs font-semibold bg-indigo-100 text-indigo-900 px-2.5 py-0.5 rounded border border-indigo-200">
              INV-15 • Privacy by Design
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Granular candidate consent matrix & role-based access control (RBAC).
          </p>
        </div>

        <div className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>DPDP Act 2023 Compliant Architecture</span>
        </div>
      </div>

      {/* CONSENT MATRIX FOR SELECTED TRAINEE */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-gov-900">Candidate Data Sharing Permissions</h2>
            <p className="text-xs text-slate-500">
              Active profile: <strong>{selectedTrainee.name}</strong> ({selectedTrainee.id})
            </p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
            “Your data is shared only with authorized parties according to your explicit consent.”
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {consentItems.map(item => {
            const isGranted = selectedTrainee.consent[item.key];

            return (
              <div key={item.key} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gov-900">{item.label}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isGranted ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {isGranted ? 'Granted ✓' : 'Private ✕'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">{item.desc}</p>
                </div>

                {/* Toggle Switch */}
                <button
                  onClick={() => updateConsent(selectedTrainee.id, item.key, !isGranted)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
                    isGranted ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                    isGranted ? 'translate-x-6' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ROLE-BASED ACCESS CONTROL (RBAC) PREVIEW */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-base font-extrabold text-gov-900">Role-Based Security Matrix</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            { role: 'TRAINEE', title: 'Trainee Role', scope: 'Access restricted strictly to own digital profile, outcome passport & skill assessments.' },
            { role: 'TRAINING_PROVIDER', title: 'Training Provider', scope: 'Access restricted to enrolled candidates and provider aggregate outcome indicators.' },
            { role: 'EMPLOYER', title: 'Employer Partner', scope: 'Access restricted to verified candidate verification requests & salary confirmation portal.' },
            { role: 'ADMIN', title: 'Program Administrator', scope: 'Full state-level aggregate analytics, public ROI & AI data quality audit tools.' },
          ].map(r => (
            <div key={r.role} className={`p-4 rounded-xl border space-y-2 cursor-pointer transition ${
              selectedRole === r.role ? 'bg-gov-900 text-white border-gov-950 shadow-md' : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
            }`} onClick={() => setSelectedRole(r.role as any)}>
              <div className="flex items-center justify-between">
                <strong className="text-xs font-bold">{r.title}</strong>
                {selectedRole === r.role && <Check className="w-4 h-4 text-teal-400" />}
              </div>
              <p className={`text-[11px] leading-relaxed ${selectedRole === r.role ? 'text-slate-300' : 'text-slate-500'}`}>
                {r.scope}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
