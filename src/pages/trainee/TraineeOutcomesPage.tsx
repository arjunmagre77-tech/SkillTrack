import React from 'react';
import { useApp } from '../../context/AppContext';
import { FileText, ShieldCheck, TrendingUp, Check } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';
import { OutcomesIllustration } from '../../components/trainee/TraineeBannerIllustrations';

export const TraineeOutcomesPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  // Trajectory points matching Image 3 curve
  const wageData = [
    { milestone: 'Starting', salary: 19000 },
    { milestone: '6 Months', salary: 21500 },
    { milestone: '12 Months', salary: 28000 },
    { milestone: '18 Months', salary: 34500 },
  ];

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header Banner matching Image 3 */}
      <TraineeHeaderBanner
        tag="INDIVIDUAL OUTCOME"
        tagIcon={<FileText className="w-4 h-4" />}
        title="Employment Outcomes & Wage Growth"
        subtitle="Longitudinal salary progression and 6-month retention metrics."
        illustration={<OutcomesIllustration />}
        rightAddon={
          <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-[#DBEAFE] px-5 py-3 shadow-xs text-right">
            <span className="text-[11px] font-semibold text-[#64748B] block">
              Current Salary
            </span>
            <span className="text-2xl font-black text-[#059669] tracking-tight block">
              ₹{selectedTrainee.salary?.toLocaleString() || '28,000'}
            </span>
          </div>
        }
      />

      {/* Main 2-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Sustained Outcome Status */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
          <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            <span>Sustained Outcome Status</span>
          </h2>

          <div className="space-y-3">
            {/* Row 1: Employment Status */}
            <div className="p-4 bg-[#ECFDF5] border border-[#D1FAE5] rounded-xl flex items-center justify-between">
              <span className="text-xs font-bold text-[#0F172A]">Employment Status:</span>
              <span className="bg-[#10B981] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Employed</span>
              </span>
            </div>

            {/* Row 2: 6-Month Retention Check */}
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between">
              <span className="text-xs font-semibold text-[#475569]">6-Month Retention Check:</span>
              <span className="bg-[#10B981] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Sustained</span>
              </span>
            </div>

            {/* Row 3: Employer Name */}
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between">
              <span className="text-xs font-semibold text-[#475569]">Employer Name:</span>
              <span className="text-xs font-bold text-[#0F172A]">
                {selectedTrainee.employerName || 'XYZ Technologies Pvt Ltd'}
              </span>
            </div>

            {/* Row 4: Employment Start Date */}
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between">
              <span className="text-xs font-semibold text-[#475569]">Employment Start Date:</span>
              <span className="text-xs font-bold text-[#0F172A]">
                {selectedTrainee.employmentStartDate || '12 April 2026'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Wage Trajectory & Retention Curve */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
          <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#1A73E8]" />
            <span>Wage Trajectory & Retention Curve</span>
          </h2>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={wageData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="wageCurveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1A73E8" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#1A73E8" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis 
                  dataKey="milestone" 
                  tick={{ fontSize: 11, fill: '#64748B' }} 
                  axisLine={{ stroke: '#E2E8F0' }}
                  tickLine={false}
                />
                <YAxis 
                  ticks={[15000, 21500, 28000, 40000]}
                  domain={[15000, 40000]}
                  tick={{ fontSize: 10, fill: '#64748B' }} 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  formatter={(val: any) => [`₹${Number(val).toLocaleString()}`, 'Salary']}
                  contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', color: '#FFFFFF', border: 'none', fontSize: '12px' }}
                  itemStyle={{ color: '#38BDF8' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="salary" 
                  stroke="#1A73E8" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#wageCurveGrad)" 
                  dot={{ r: 4, fill: '#1A73E8', strokeWidth: 2, stroke: '#FFFFFF' }}
                  activeDot={{ r: 6, fill: '#1A73E8', stroke: '#FFFFFF', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
