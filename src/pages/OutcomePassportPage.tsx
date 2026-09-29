import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, ShieldCheck, Download, Printer, CheckCircle2, QrCode, MapPin } from 'lucide-react';

export const OutcomePassportPage: React.FC = () => {
  const { selectedTrainee, showToast } = useApp();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    showToast(`Downloading verified Digital Outcome Passport for ${selectedTrainee.name}...`, 'success');
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-gov-900">Digital Outcome Passport</h1>
            <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
              INV-08 • Verified Credential
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Tamper-evident lifetime career passport certifying skilling completion, employment retention & wage history.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-gov-900 hover:bg-gov-800 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-teal-400" />
            <span>Download PDF</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-300 shadow-xs transition flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Passport</span>
          </button>
        </div>
      </div>

      {/* OUTCOME PASSPORT CARD (PRINTABLE / SHAREABLE) */}
      <div className="passport-card bg-white rounded-3xl border-2 border-gov-900 p-8 shadow-xl space-y-6 relative overflow-hidden">
        {/* Background Emblem Watermark */}
        <div className="absolute -right-16 -bottom-16 opacity-5 pointer-events-none text-gov-900">
          <Award className="w-80 h-80" />
        </div>

        {/* Passport Header */}
        <div className="border-b-2 border-gov-900 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gov-950 text-teal-400 flex items-center justify-center font-extrabold text-2xl border border-gov-800">
              ST
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                State Skill Development Mission • Govt. of Maharashtra
              </div>
              <h2 className="text-2xl font-black text-gov-950 tracking-tight">DIGITAL OUTCOME PASSPORT</h2>
              <span className="text-[10px] text-teal-700 font-mono font-bold">
                Credential ID: ST-PASSPORT-2026-MSDE-9942
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 px-3 py-1.5 rounded-full text-emerald-800 text-xs font-extrabold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>VERIFIED OUTCOME ✓</span>
          </div>
        </div>

        {/* Candidate & Employment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Candidate Info */}
          <div className="space-y-4">
            <div className="w-24 h-24 rounded-2xl bg-gov-900 text-teal-300 font-black text-3xl flex items-center justify-center shadow-md border-2 border-teal-400/40">
              {selectedTrainee.name.split(' ').map(n => n[0]).join('')}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gov-950">{selectedTrainee.name}</h3>
              <p className="text-xs font-semibold text-slate-500">{selectedTrainee.education}</p>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-slate-400" /> {selectedTrainee.district}, {selectedTrainee.state}
              </p>
            </div>
          </div>

          {/* Program & Certification Details */}
          <div className="space-y-3 text-xs border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Training Initiative</span>
              <p className="font-extrabold text-gov-900 text-sm">{selectedTrainee.programName}</p>
            </div>

            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Training Provider</span>
              <p className="font-bold text-slate-800">{selectedTrainee.providerName}</p>
            </div>

            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Certification Verified</span>
              <p className="font-extrabold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> NSDC Level 5 Certified ({selectedTrainee.assessmentScore}% Score)
              </p>
            </div>
          </div>

          {/* Verified Employment Outcomes */}
          <div className="space-y-3 text-xs border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Current Employment Role</span>
              <p className="font-extrabold text-gov-900 text-sm">{selectedTrainee.currentRole || 'N/A'}</p>
            </div>

            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Verified Employer</span>
              <p className="font-bold text-slate-800">{selectedTrainee.employerName || 'Self-Employed'}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[9px] uppercase font-bold text-slate-400 block">Monthly Salary</span>
                <strong className="text-emerald-700 text-sm">₹{selectedTrainee.salary?.toLocaleString() || 'N/A'}</strong>
              </div>

              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[9px] uppercase font-bold text-slate-400 block">6M Retention</span>
                <strong className="text-teal-700 text-sm">{selectedTrainee.retention6Month ? 'Sustained ✓' : 'Pending'}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Summary & QR Code */}
        <div className="border-t-2 border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/80 p-4 rounded-2xl">
          <div className="flex items-center gap-4">
            {/* Visual QR Code Placeholder */}
            <div className="w-20 h-20 bg-white p-2 border-2 border-gov-900 rounded-xl shadow-xs flex flex-col items-center justify-center text-center">
              <QrCode className="w-12 h-12 text-gov-900" />
              <span className="text-[8px] font-bold text-slate-500 mt-0.5 font-mono">SCAN TO VERIFY</span>
            </div>

            <div className="space-y-1 text-xs">
              <span className="font-extrabold text-gov-900 block">Skill Growth Index: <strong className="text-teal-700">+37%</strong></span>
              <span className="font-extrabold text-gov-900 block">Training-to-Job Relevance: <strong className="text-blue-700">High (88%)</strong></span>
              <p className="text-[11px] text-slate-500 max-w-md">
                Verified via SkillTrack multi-source API integration (Employer Payroll, EPFO/UAN & Assessment Center).
              </p>
            </div>
          </div>

          <div className="text-right text-[10px] text-slate-400 font-mono space-y-0.5">
            <div>Issued by State Skill Mission</div>
            <div>Valid Through: Lifetime Career Record</div>
            <div>Hash: sha256-e99a4c...</div>
          </div>
        </div>
      </div>
    </div>
  );
};
