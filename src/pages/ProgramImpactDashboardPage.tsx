import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { FUNNEL_DATA, WAGE_PROGRESSION_TREND, UNEMPLOYMENT_REASONS_AGGREGATED } from '../data/mockData';
import { 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  Building, 
  Users, 
  Award, 
  Briefcase, 
  Clock, 
  HelpCircle,
  RefreshCw
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

export const ProgramImpactDashboardPage: React.FC = () => {
  const { districts, providers, programs, selectedDistrict, setSelectedDistrict } = useApp();
  const navigate = useNavigate();

  // Filters State
  const [filterState, setFilterState] = useState('Maharashtra');
  const [filterProvider, setFilterProvider] = useState('ALL');
  const [filterCourse, setFilterCourse] = useState('ALL');
  const [filterGender, setFilterGender] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');

  const currentDistrictObj = districts.find(d => d.district === selectedDistrict) || districts[0];

  return (
    <div className="space-y-6 pb-12">

      {/* HERO HEADER — PROGRAM IMPACT DASHBOARD (distinct from Trainee Dashboard) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white p-6 shadow-xl border border-blue-900/50">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/2 -bottom-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-blue-500/30 border border-blue-400/40 flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 text-blue-300" />
              </div>
              <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Government & Policy Intelligence</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Program Impact Dashboard</h1>
            <p className="text-xs text-blue-200/70 mt-0.5">
              Macro skilling outcome evaluation • Employment conversion • Retention & wage growth • Provider performance
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-xs font-bold text-blue-200">Active Jurisdiction: </span>
            <span className="text-xs font-extrabold bg-white/15 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg">
              {filterState} (State Level)
            </span>
          </div>
        </div>

        {/* Filters built into header */}
        <div className="relative z-10 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs border-t border-white/10 pt-5">
          {[
            { label: 'State / Region', value: filterState, onChange: setFilterState, opts: [{ v: 'Maharashtra', l: 'Maharashtra' }, { v: 'National', l: 'National Aggregate' }] },
            { label: 'District', value: selectedDistrict, onChange: setSelectedDistrict, opts: [{ v: 'ALL', l: 'All Districts' }, ...districts.map(d => ({ v: d.district, l: d.district }))] },
            { label: 'Training Provider', value: filterProvider, onChange: setFilterProvider, opts: [{ v: 'ALL', l: 'All Providers' }, ...providers.map(p => ({ v: p.id, l: p.name.split(' ')[0] }))] },
            { label: 'Course Sector', value: filterCourse, onChange: setFilterCourse, opts: [{ v: 'ALL', l: 'All Sectors' }, ...programs.map(pr => ({ v: pr.id, l: pr.title.split(' ')[0] }))] },
            { label: 'Gender Group', value: filterGender, onChange: setFilterGender, opts: [{ v: 'ALL', l: 'All Genders' }, { v: 'Male', l: 'Male' }, { v: 'Female', l: 'Female' }] },
            { label: 'Outcome Status', value: filterStatus, onChange: setFilterStatus, opts: [{ v: 'ALL', l: 'All Statuses' }, { v: 'Employed', l: 'Employed' }, { v: 'Retained', l: '6M Retained' }, { v: 'Self-Employed', l: 'Self-Employed' }] },
          ].map((f, i) => (
            <div key={i}>
              <label className="block text-[10px] font-bold text-blue-300 mb-1 uppercase tracking-wider">{f.label}</label>
              <select
                value={f.value}
                onChange={e => f.onChange(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                {f.opts.map(o => (
                  <option key={o.v} value={o.v} className="bg-slate-900 text-white">{o.l}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* 8.1 KPI CARDS WITH SUBTLE COUNTERS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'Total Trained', value: '1,25,000', change: '+12% vs LY', color: 'border-l-blue-600', icon: <Users className="w-5 h-5 text-blue-600" /> },
          { title: 'Certified', value: '98,000', change: '78.4% Certification', color: 'border-l-indigo-600', icon: <Award className="w-5 h-5 text-indigo-600" /> },
          { title: 'Employed Outcome', value: '62.0%', change: '77,500 candidates', color: 'border-l-emerald-600', icon: <Briefcase className="w-5 h-5 text-emerald-600" /> },
          { title: '6-Month Retention', value: '71.0%', change: 'Sustained outcome', color: 'border-l-teal-600', icon: <RefreshCw className="w-5 h-5 text-teal-600" /> },
          { title: 'Avg Starting Salary', value: '₹24,500', change: 'INR per month', color: 'border-l-amber-600', icon: <TrendingUp className="w-5 h-5 text-amber-600" /> },
          { title: 'Self-Employment', value: '18.0%', change: 'Micro-enterprises', color: 'border-l-purple-600', icon: <Building className="w-5 h-5 text-purple-600" /> },
          { title: 'Apprenticeships', value: '8.0%', change: 'OJT conversion', color: 'border-l-cyan-600', icon: <Clock className="w-5 h-5 text-cyan-600" /> },
          { title: 'Avg Skill-Gap Reduction', value: '32.0%', change: 'Industry alignment', color: 'border-l-rose-600', icon: <BarChart3 className="w-5 h-5 text-rose-600" /> },
        ].map((kpi, idx) => (
          <div key={idx} className={`bg-white p-5 rounded-2xl border border-slate-200 border-l-4 ${kpi.color} shadow-sm space-y-2 hover:shadow-md transition`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{kpi.title}</span>
              <div className="p-2 bg-slate-50 rounded-lg">{kpi.icon}</div>
            </div>
            <div className="text-2xl font-black text-gov-900 tracking-tight">{kpi.value}</div>
            <div className="text-[11px] font-semibold text-emerald-600">{kpi.change}</div>
          </div>
        ))}
      </div>

      {/* 8.2 EMPLOYMENT OUTCOME FUNNEL & 8.4 RETENTION & WAGE PROGRESSION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 8.2 EMPLOYMENT OUTCOME FUNNEL */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span>Employment Outcome Conversion Funnel</span>
              </h3>
              <p className="text-xs text-slate-500">Longitudinal attrition from enrollment to 12-month retention</p>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-09
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {FUNNEL_DATA.map((step, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-700 font-bold">{step.stage}</span>
                  <span className="text-gov-900 font-extrabold">{step.count.toLocaleString()} ({step.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden p-0.5">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-gov-800 to-teal-500 transition-all duration-700" 
                    style={{ width: `${step.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8.4 RETENTION & WAGE PROGRESSION TRACKING (INNOVATION #10) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Wage Progression & Retention Curve</span>
              </h3>
              <p className="text-xs text-slate-500">Starting ₹20,000 → 6M ₹23,000 → 12M ₹27,000 → 18M ₹31,000</p>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-10
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WAGE_PROGRESSION_TREND}>
                <defs>
                  <linearGradient id="wageGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="milestone" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 10 }} domain={[15000, 45000]} />
                <Tooltip formatter={(value: any) => [`₹${Number(value).toLocaleString()}`, 'Avg Salary']} />
                <Area type="monotone" dataKey="avgSalary" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#wageGradient)" />
                <Area type="monotone" dataKey="topQuartile" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 8.5 TRAINING PROVIDER ANALYTICS & 8.6 DISTRICT HEATMAP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 8.5 TRAINING PROVIDER ANALYTICS (INNOVATION #11) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-purple-600" />
                <span>Training Provider Outcome Indicators</span>
              </h3>
              <p className="text-xs text-slate-500">Comparative neutral performance indicators (conversion, retention & audit completeness)</p>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-11
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">Provider Name</th>
                  <th className="p-2.5">Trained</th>
                  <th className="p-2.5">Certified</th>
                  <th className="p-2.5">Employed</th>
                  <th className="p-2.5">Conversion</th>
                  <th className="p-2.5">6M Retention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {providers.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50 transition">
                    <td className="p-2.5 font-bold text-gov-900">{p.name}</td>
                    <td className="p-2.5">{p.trained.toLocaleString()}</td>
                    <td className="p-2.5">{p.certified.toLocaleString()}</td>
                    <td className="p-2.5 font-semibold text-emerald-700">{p.employed.toLocaleString()}</td>
                    <td className="p-2.5 font-bold text-blue-700">{p.conversionRate}%</td>
                    <td className="p-2.5 font-bold text-teal-700">{p.retentionRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 8.6 DISTRICT SKILL & EMPLOYMENT HEATMAP (INNOVATION #12) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>District Skill & Employment Intelligence</span>
              </h3>
              <p className="text-xs text-slate-500">Interactive Maharashtra district outcome selector</p>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-12
            </span>
          </div>

          {/* District Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {districts.map(d => (
              <button
                key={d.district}
                onClick={() => setSelectedDistrict(d.district)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedDistrict === d.district
                    ? 'bg-gov-900 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {d.district} ({d.employmentRate}%)
              </button>
            ))}
          </div>

          {/* Selected District Detail Panel */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-extrabold text-gov-900">{currentDistrictObj.district} District Detail</h4>
              <span className="text-xs font-bold text-emerald-600">{currentDistrictObj.employmentRate}% Employment Rate</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[10px] block">Top Regional Skill Gap:</span>
                <strong className="text-rose-700 font-bold">{currentDistrictObj.topSkillGap}</strong>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[10px] block">6-Month Retention:</span>
                <strong className="text-teal-700 font-bold">{currentDistrictObj.retentionRate}%</strong>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[10px] block">Local Job Availability Score:</span>
                <strong className="text-blue-700 font-bold">{currentDistrictObj.localJobAvailabilityScore} / 100</strong>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[10px] block">Total Candidates Trained:</span>
                <strong className="text-gov-900 font-bold">{currentDistrictObj.trained.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8.7 WHY PROGRAMS ARE NOT PRODUCING EMPLOYMENT */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>“Why Programs Are Not Producing Employment” Aggregated Diagnostic</span>
            </h3>
            <p className="text-xs text-slate-500">Root-cause breakdown across non-employed candidates for targeted policy intervention</p>
          </div>
          <button 
            onClick={() => navigate('/early-warning')}
            className="text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-lg hover:bg-amber-100 transition"
          >
            Launch Early Interventions →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={UNEMPLOYMENT_REASONS_AGGREGATED}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="percentage"
                  nameKey="reason"
                >
                  {UNEMPLOYMENT_REASONS_AGGREGATED.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => [`${value}%`, 'Candidate Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 text-xs">
            {UNEMPLOYMENT_REASONS_AGGREGATED.map((reason, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: reason.color }} />
                  <span className="font-semibold text-slate-800">{reason.reason}</span>
                </div>
                <span className="font-bold text-gov-900">{reason.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
