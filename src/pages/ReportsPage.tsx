import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FileSpreadsheet, Download, Printer, CheckCircle2 } from 'lucide-react';

export const ReportsPage: React.FC = () => {
  const { showToast } = useApp();
  const [selectedReport, setSelectedReport] = useState('Employment Outcomes Report');

  const reportPresets = [
    { title: 'Employment Outcomes Report', desc: 'Detailed breakdown of candidate placements, employer records & verification statuses.' },
    { title: 'Skill Gap Report', desc: 'Aggregated regional skill gap matrix across courses and target job role demands.' },
    { title: 'Training Provider Performance Report', desc: 'Neutral outcome indicators, conversion rates, and data completeness metrics.' },
    { title: 'District Impact Report', desc: 'District-level employment conversion, 6-month retention, and local job availability.' },
    { title: 'Retention & Wage Progression Report', desc: 'Longitudinal wage trajectory from starting ₹20k to 18-month career benchmarks.' },
    { title: 'Program Impact & Value Report', desc: 'Cost per certified and cost per sustained 6-month employment calculation.' }
  ];

  const handleExportCSV = () => {
    showToast(`Exported ${selectedReport} to CSV format!`, 'success');
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
        <div>
          <h1 className="text-xl font-extrabold text-gov-900 flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
            <span>Policy & Outcome Report Generator</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Generate printable PDF reports & export raw outcome datasets for legislative audit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 bg-gov-900 hover:bg-gov-800 text-teal-300 text-xs font-bold rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleExportPDF}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print PDF Report</span>
          </button>
        </div>
      </div>

      {/* Preset Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 no-print">
        {reportPresets.map(preset => (
          <div
            key={preset.title}
            onClick={() => setSelectedReport(preset.title)}
            className={`p-4 rounded-2xl border cursor-pointer transition space-y-2 ${
              selectedReport === preset.title
                ? 'bg-gov-900 text-white border-gov-950 shadow-md'
                : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold">{preset.title}</span>
              {selectedReport === preset.title && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
            </div>
            <p className={`text-[11px] ${selectedReport === preset.title ? 'text-slate-300' : 'text-slate-500'}`}>
              {preset.desc}
            </p>
          </div>
        ))}
      </div>

      {/* PRINT-READY REPORT PREVIEW CONTAINER */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg space-y-6">
        <div className="border-b-2 border-gov-900 pb-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">STATE SKILL DEVELOPMENT MISSION</span>
            <h2 className="text-xl font-black text-gov-900">{selectedReport}</h2>
            <p className="text-xs text-slate-500">Generated on 25 September 2026 • Jurisdiction: Maharashtra State</p>
          </div>
          <span className="text-xs font-mono font-bold bg-slate-100 px-3 py-1 rounded">
            CONFIDENTIAL / OFFICIAL
          </span>
        </div>

        {/* Report Key Indicators */}
        <div className="grid grid-cols-4 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <span className="text-slate-400 text-[10px] block font-bold">TOTAL CANDIDATES</span>
            <strong className="text-gov-900 text-base">1,25,000</strong>
          </div>
          <div>
            <span className="text-slate-400 text-[10px] block font-bold">EMPLOYED CONVERSION</span>
            <strong className="text-emerald-700 text-base">62.0%</strong>
          </div>
          <div>
            <span className="text-slate-400 text-[10px] block font-bold">6M SUSTAINED RETENTION</span>
            <strong className="text-teal-700 text-base">71.0%</strong>
          </div>
          <div>
            <span className="text-slate-400 text-[10px] block font-bold">VERIFICATION DISPARITY</span>
            <strong className="text-amber-700 text-base">&lt; 1.4%</strong>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          This report compiles longitudinal candidate tracking results across 36 districts of Maharashtra under Problem Statement SIH26135. Data sources include candidate self-reporting, employer HR payroll integrations, and training provider placement audits.
        </p>
      </div>
    </div>
  );
};
