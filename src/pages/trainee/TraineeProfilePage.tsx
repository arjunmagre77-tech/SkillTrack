import React from 'react';
import { useApp } from '../../context/AppContext';
import { User, ShieldCheck, MapPin, BookOpen, Building } from 'lucide-react';

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

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-teal-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border-2 border-teal-400/40 text-teal-300 flex items-center justify-center font-extrabold text-2xl">
            {selectedTrainee.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{selectedTrainee.name}</h1>
            <p className="text-xs text-teal-200 mt-1 flex items-center gap-2">
              <span className="font-mono text-teal-300">ID: {selectedTrainee.id}</span>
              <span>•</span>
              <span>{selectedTrainee.education}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-teal-400" /> {selectedTrainee.district}, {selectedTrainee.state}</span>
            </p>
          </div>
        </div>
        <span className="text-xs font-bold bg-teal-500/30 text-teal-300 border border-teal-400/40 px-3 py-1.5 rounded-xl">
          Aadhaar & Biometric Verified Candidate
        </span>
      </div>

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
