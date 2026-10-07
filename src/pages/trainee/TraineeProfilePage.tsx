import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { User, ShieldCheck, BookOpen, Briefcase, ChevronUp, ChevronDown, Check, Users, Database, MessageSquare, FileText, Award } from 'lucide-react';

export const TraineeProfilePage: React.FC = () => {
  const { selectedTrainee, updateConsent } = useApp();
  const [consentExpanded, setConsentExpanded] = useState(true);

  const consentItems = [
    { key: 'employmentStatus' as const, label: 'Share employment status & job role details with State Skill Mission', icon: <Users className="w-4 h-4 text-blue-600" /> },
    { key: 'employer' as const, label: 'Share employer verification records with portal auditors', icon: <ShieldCheck className="w-4 h-4 text-blue-600" /> },
    { key: 'salary' as const, label: 'Include anonymized salary data in state longitudinal retention research', icon: <Database className="w-4 h-4 text-blue-600" /> },
    { key: 'phone' as const, label: 'Receive automated WhatsApp & SMS longitudinal follow-ups', icon: <MessageSquare className="w-4 h-4 text-blue-600" /> },
    { key: 'skillProfile' as const, label: 'Share skill radar profile with verified employer partners', icon: <FileText className="w-4 h-4 text-blue-600" /> },
    { key: 'trainingHistory' as const, label: 'Persist NSDC course completion certificate in Outcome Passport', icon: <Award className="w-4 h-4 text-blue-600" /> },
  ];

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white p-6 shadow-xl border border-blue-400/30">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center font-black text-2xl shadow-inner shrink-0">
              {selectedTrainee.name ? selectedTrainee.name.split(' ').map(n => n[0]).join('') : 'RS'}
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">{selectedTrainee.name || 'Rahul Sharma'}</h1>
              <p className="text-xs text-blue-100/90 mt-1 flex flex-wrap items-center gap-2 font-medium">
                <span>ID: {selectedTrainee.id || 'TRN-2026-001'}</span>
                <span>•</span>
                <span>{selectedTrainee.education || 'B.Sc Computer Science (2025)'}</span>
                <span>•</span>
                <span>{selectedTrainee.district || 'Pune'}, {selectedTrainee.state || 'Maharashtra'}</span>
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-inner">
            <ShieldCheck className="w-4 h-4 text-blue-200" />
            <span className="text-xs font-bold text-white">
              Aadhaar & Biometric Verified Candidate
            </span>
          </div>
        </div>
      </div>

      {/* 2. Three Column Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Personal & Demographics */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider">
              Personal & Demographics
            </h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Full Name:</span>
              <strong className="text-slate-900 font-bold">{selectedTrainee.name || 'Rahul Sharma'}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Gender & Age:</span>
              <strong className="text-slate-900 font-semibold">{selectedTrainee.gender || 'Male'}, 23 Yrs</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">District / Region:</span>
              <strong className="text-slate-900 font-semibold">{selectedTrainee.district || 'Pune'}, {selectedTrainee.state || 'Maharashtra'}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Highest Qualification:</span>
              <strong className="text-slate-900 font-semibold">{selectedTrainee.education || 'B.Sc Computer Science (2025)'}</strong>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Aadhaar Linked:</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <Check className="w-3.5 h-3.5" /> Verified
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Skilling Program Details */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider">
              Skilling Program Details
            </h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Training Program:</span>
              <strong className="text-blue-700 font-bold text-right max-w-[160px]">{selectedTrainee.programName}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Training Provider:</span>
              <strong className="text-slate-900 font-semibold text-right max-w-[160px]">{selectedTrainee.providerName || 'Maharashtra Skill Development Centre (MSDC)'}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Cohort / Duration:</span>
              <strong className="text-slate-900 font-semibold">{selectedTrainee.cohort || '2025-Q4 Cohort A'}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Assessment Score:</span>
              <strong className="text-blue-600 font-black text-sm">{selectedTrainee.assessmentScore || 92}%</strong>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Certification Status:</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <Check className="w-3.5 h-3.5" /> Certified
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Current Employment Status */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider">
              Current Employment Status
            </h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Employment Status:</span>
              <span className="font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                {selectedTrainee.employmentStatus || 'Employed'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Designation / Role:</span>
              <strong className="text-slate-900 font-bold">{selectedTrainee.currentRole || 'Junior Data Analyst'}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Employer Name:</span>
              <strong className="text-slate-900 font-semibold">{selectedTrainee.employerName || 'XYZ Technologies Pvt Ltd'}</strong>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Monthly Salary:</span>
              <strong className="text-emerald-600 font-black text-sm">
                ₹{selectedTrainee.salary ? selectedTrainee.salary.toLocaleString() : '28,000'}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* 3. My Data Consent & Privacy Controls Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          onClick={() => setConsentExpanded(!consentExpanded)}
          className="w-full p-6 flex items-center justify-between border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-black uppercase text-slate-900 tracking-wider">
              My Data Consent & Privacy Controls
            </h2>
          </div>

          <div className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
            {consentExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {consentExpanded && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {consentItems.map((item) => (
              <div
                key={item.key}
                className="p-4 bg-slate-50/70 border border-slate-200/80 rounded-2xl flex items-center justify-between gap-3 hover:border-blue-300 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-100/60 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-700 leading-snug">
                    {item.label}
                  </span>
                </div>

                <input
                  type="checkbox"
                  checked={selectedTrainee.consent ? selectedTrainee.consent[item.key] : true}
                  onChange={(e) => updateConsent(selectedTrainee.id, item.key, e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer accent-blue-600 shrink-0"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
