import React from 'react';
import { PROGRAM_ROI_DATA } from '../data/mockData';
import { AlertCircle } from 'lucide-react';

export const ProgramROIInvestmentPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-gov-900">Program Impact & Investment Measurement</h1>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded border border-emerald-200">
              INV-13 • Outcome-Based Value
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Public funds outcome efficiency: Cost per certified trainee vs cost per 6-month sustained employment outcome.
          </p>
        </div>

        <div className="text-xs bg-blue-50 border border-blue-200 text-blue-900 p-2.5 rounded-xl font-medium max-w-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <span>Metrics represent program performance indicators based on administrative data and do not constitute a definitive economic ROI.</span>
        </div>
      </div>

      {/* INVESTMENT TOP KPI SUMMARY */}
      <div className="bg-gradient-to-r from-gov-950 via-gov-900 to-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gov-800 pb-6">
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Total Initiative Expenditure</span>
            <div className="text-4xl font-black text-white mt-1">₹10,00,00,000 <span className="text-lg font-normal text-slate-400">(₹10 Crore)</span></div>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <div>
              <span className="text-slate-400 block">Total Candidates</span>
              <strong className="text-white text-base">20,000 Trained</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Sustained Jobs</span>
              <strong className="text-emerald-400 text-base">8,700 Retained</strong>
            </div>
          </div>
        </div>

        {/* 4 COST EFFICIENCY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gov-800/60 p-4 rounded-xl border border-gov-700 space-y-1">
            <span className="text-[11px] text-slate-400 font-semibold block">Cost Per Trainee</span>
            <div className="text-2xl font-black text-white">₹{PROGRAM_ROI_DATA.costPerTrainee.toLocaleString()}</div>
            <span className="text-[10px] text-slate-400">Total trained division</span>
          </div>

          <div className="bg-gov-800/60 p-4 rounded-xl border border-gov-700 space-y-1">
            <span className="text-[11px] text-slate-400 font-semibold block">Cost Per Certification</span>
            <div className="text-2xl font-black text-indigo-300">₹{PROGRAM_ROI_DATA.costPerCertification.toLocaleString()}</div>
            <span className="text-[10px] text-slate-400">16,000 certified candidates</span>
          </div>

          <div className="bg-gov-800/60 p-4 rounded-xl border border-gov-700 space-y-1">
            <span className="text-[11px] text-slate-400 font-semibold block">Cost Per Employment</span>
            <div className="text-2xl font-black text-emerald-300">₹{PROGRAM_ROI_DATA.costPerEmployment.toLocaleString()}</div>
            <span className="text-[10px] text-slate-400">11,500 placed candidates</span>
          </div>

          <div className="bg-gov-800/60 p-4 rounded-xl border border-teal-500/50 space-y-1 relative">
            <span className="text-[11px] text-teal-300 font-bold block">Cost Per Sustained Job (6M)</span>
            <div className="text-2xl font-black text-teal-300">₹{PROGRAM_ROI_DATA.costPerSustainedEmployment.toLocaleString()}</div>
            <span className="text-[10px] text-teal-400 font-bold">8,700 retained candidates ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
};
