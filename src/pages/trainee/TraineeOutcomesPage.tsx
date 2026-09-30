import React from 'react';
import { useApp } from '../../context/AppContext';
import { FileText, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { WAGE_PROGRESSION_TREND } from '../../data/mockData';

export const TraineeOutcomesPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-gov-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-emerald-800 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-4 h-4 text-emerald-300" />
            <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Individual Outcome</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Employment Outcomes & Wage Growth</h1>
          <p className="text-xs text-emerald-200/80 mt-1">Longitudinal salary progression and 6-month retention metrics</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-slate-300 block">Current Salary</span>
          <span className="text-2xl font-extrabold text-emerald-400">
            {selectedTrainee.salary ? `₹${selectedTrainee.salary.toLocaleString()}` : 'N/A'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Retention & Outcome Summary */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-gov-900 border-b border-slate-100 pb-3">
            Sustained Outcome Status
          </h2>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex justify-between items-center">
              <span className="font-bold text-emerald-900">Employment Status:</span>
              <span className="font-extrabold text-emerald-700 text-sm">{selectedTrainee.employmentStatus}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
              <span className="font-semibold text-slate-700">6-Month Retention Check:</span>
              <span className={`font-bold flex items-center gap-1 ${selectedTrainee.retention6Month ? 'text-emerald-600' : 'text-amber-600'}`}>
                {selectedTrainee.retention6Month ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                {selectedTrainee.retention6Month ? 'Sustained ✓' : 'Pending Audit'}
              </span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
              <span className="font-semibold text-slate-700">Employer Name:</span>
              <span className="font-bold text-slate-900">{selectedTrainee.employerName || 'Unassigned'}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
              <span className="font-semibold text-slate-700">Employment Start Date:</span>
              <span className="font-bold text-slate-900">{selectedTrainee.employmentStartDate || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* Wage Progression Curve */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Wage Trajectory & Retention Curve</span>
            </h2>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WAGE_PROGRESSION_TREND}>
                <defs>
                  <linearGradient id="traineeWageGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="milestone" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 9 }} domain={[15000, 40000]} />
                <Tooltip formatter={(val: any) => [`₹${Number(val).toLocaleString()}`, 'Avg Benchmark']} />
                <Area type="monotone" dataKey="avgSalary" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#traineeWageGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
