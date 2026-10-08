import React from 'react';
import { useApp } from '../../context/AppContext';
import { User, ShieldCheck, BookOpen, Building, CheckCircle2 } from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';

export const TraineeProfilePage: React.FC = () => {
  const { selectedTrainee, updateConsent } = useApp();

  const consentItems = [
    { key: 'employmentStatus' as const, label: 'Share employment status & job role details with State Skill Mission' },
    { key: 'employer' as const, label: 'Share employer verification records with portal auditors' },
    { key: 'salary' as const, label: 'Include anonymized salary data in state longitudinal retention research' },
    { key: 'phone' as const, label: 'Receive automated WhatsApp & SMS longitudinal follow-ups' },
    { key: 'skillProfile' as const, label: 'Share skill radar profile with verified employer partners' },
    { key: 'trainingHistory' as const, label: 'Persist NSDC course completion certificate in Outcome Passport' },
  ];

  const initials = selectedTrainee.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <TraineeHeaderBanner
        tag="VERIFIED CANDIDATE PROFILE"
        tagIcon={<ShieldCheck className="w-4 h-4" />}
        title={selectedTrainee.name}
        subtitle={`Candidate ID: ${selectedTrainee.id} • ${selectedTrainee.education} • ${selectedTrainee.district}, ${selectedTrainee.state}`}
        rightAddon={
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-[#1A73E8] text-white flex items-center justify-center font-black text-xl shadow-sm">
              {initials}
            </div>
            <div className="hidden sm:block text-left">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Aadhaar & Biometric Verified
              </span>
              <p className="text-[11px] text-slate-500 mt-1">Status: Active Candidate</p>
            </div>
          </div>
        }
        illustration={
          <div className="hidden md:flex items-center justify-end shrink-0 select-none">
            <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-28">
              <circle cx="90" cy="60" r="46" fill="#E0F0FE" fillOpacity="0.85" />
              <rect x="40" y="30" width="80" height="60" rx="8" fill="#FFFFFF" stroke="#1A73E8" strokeWidth="2.5" />
              <circle cx="64" cy="52" r="12" fill="#1A73E8" />
              <path d="M 52 74 C 52 66 76 66 76 74" fill="#1A73E8" />
              <rect x="84" y="46" width="28" height="4" rx="2" fill="#93C5FD" />
              <rect x="84" y="54" width="20" height="4" rx="2" fill="#93C5FD" />
              <rect x="84" y="62" width="24" height="4" rx="2" fill="#10B981" />
            </svg>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <User className="w-4 h-4 text-teal-600" />
            <span>Personal & Demographics</span>
          </h2>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Full Name:</span>
              <strong className="text-slate-900">{selectedTrainee.name}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Gender & Age:</span>
              <strong className="text-slate-900">{selectedTrainee.gender || 'Male'}, 23 Yrs</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">District / Region:</span>
              <strong className="text-slate-900">{selectedTrainee.district}, {selectedTrainee.state}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Highest Qualification:</span>
              <strong className="text-slate-900">{selectedTrainee.education}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Aadhaar Linked:</span>
              <strong className="text-emerald-600 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Verified</strong>
            </div>
          </div>
        </div>

        {/* Skilling & Course Info */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Skilling Program Details</span>
          </h2>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Training Program:</span>
              <strong className="text-teal-700">{selectedTrainee.programName}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Training Provider:</span>
              <strong className="text-slate-900">{selectedTrainee.providerName}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Cohort / Duration:</span>
              <strong className="text-slate-900">{selectedTrainee.cohort}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Assessment Score:</span>
              <strong className="text-blue-600 font-extrabold text-sm">{selectedTrainee.assessmentScore}%</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Certification Status:</span>
              <strong className="text-emerald-600 font-bold">{selectedTrainee.certificationStatus}</strong>
            </div>
          </div>
        </div>

        {/* Current Placement */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Building className="w-4 h-4 text-purple-600" />
            <span>Current Employment Status</span>
          </h2>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Employment Status:</span>
              <span className="font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                {selectedTrainee.employmentStatus}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Designation / Role:</span>
              <strong className="text-slate-900">{selectedTrainee.currentRole || 'N/A'}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Employer Name:</span>
              <strong className="text-slate-900">{selectedTrainee.employerName || 'Unassigned'}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500">Monthly Salary:</span>
              <strong className="text-emerald-700 font-extrabold text-sm">
                {selectedTrainee.salary ? `₹${selectedTrainee.salary.toLocaleString()}` : 'N/A'}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Consent Preferences */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>My Data Consent & Privacy Controls</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {consentItems.map((item) => (
            <div key={item.key} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <span className="text-slate-700 font-medium">{item.label}</span>
              <input
                type="checkbox"
                checked={selectedTrainee.consent[item.key]}
                onChange={(e) => updateConsent(selectedTrainee.id, item.key, e.target.checked)}
                className="w-4 h-4 text-teal-600 rounded cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
