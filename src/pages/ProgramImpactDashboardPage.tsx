import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
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
  RefreshCw,
  Target
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
import { GovPageHeader } from './OverviewPage';

export const ProgramImpactDashboardPage: React.FC = () => {
  const { districts, providers, programs, selectedDistrict, setSelectedDistrict, setActiveTab } = useApp();

  const [filterState, setFilterState] = useState('Maharashtra');
  const [filterProvider, setFilterProvider] = useState('ALL');
  const [filterCourse, setFilterCourse] = useState('ALL');
  const [filterGender, setFilterGender] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');

  const currentDistrictObj = districts.find(d => d.district === selectedDistrict) || districts[0];

  const kpis = [
    { title: 'Total Trained', value: '1,25,000', change: '+12% vs LY', color: 'border-l-blue-500', iconColor: 'text-blue-600 bg-blue-50', icon: <Users className="w-5 h-5" />, textColor: 'text-blue-600' },
    { title: 'Certified', value: '98,000', change: '78.4% Certification', color: 'border-l-emerald-500', iconColor: 'text-emerald-600 bg-emerald-50', icon: <Award className="w-5 h-5" />, textColor: 'text-emerald-600' },
    { title: 'Employed Outcome', value: '62.0%', change: '77,500 Placed Trainees', color: 'border-l-purple-500', iconColor: 'text-purple-600 bg-purple-50', icon: <Briefcase className="w-5 h-5" />, textColor: 'text-purple-600' },
    { title: '6-Month Retention', value: '71.0%', change: 'Sustained Employment', color: 'border-l-teal-500', iconColor: 'text-teal-600 bg-teal-50', icon: <RefreshCw className="w-5 h-5" />, textColor: 'text-teal-600' },
    { title: 'Avg Starting Salary', value: '₹24,500', change: 'INR per month', color: 'border-l-amber-500', iconColor: 'text-amber-600 bg-amber-50', icon: <TrendingUp className="w-5 h-5" />, textColor: 'text-amber-600' },
    { title: 'Self-Employed', value: '18.0%', change: 'Entrepreneurs & Freelancers', color: 'border-l-indigo-500', iconColor: 'text-indigo-600 bg-indigo-50', icon: <Building className="w-5 h-5" />, textColor: 'text-indigo-600' },
    { title: 'Apprenticeships', value: '8.0%', change: 'Under Industry Training', color: 'border-l-cyan-500', iconColor: 'text-cyan-600 bg-cyan-50', icon: <Clock className="w-5 h-5" />, textColor: 'text-cyan-600' },
    { title: 'Avg Skill-Gap Reduction', value: '32.0%', change: 'Industry alignment', color: 'border-l-rose-500', iconColor: 'text-rose-600 bg-rose-50', icon: <Target className="w-5 h-5" />, textColor: 'text-rose-600' },
  ];

  const selectClass = "w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#0D1B3E] focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm";

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <GovPageHeader
        icon={<BarChart3 className="w-4 h-4" />}
        label="Government & Policy Intelligence"
        title="Program Impact Dashboard"
        subtitle="Macro skilling outcome evaluation • Employment conversion • Retention & wage growth • Provider performance"
      />

      {/* Filters Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3 h-3" /> State / Region
            </label>
            <select value={filterState} onChange={e => setFilterState(e.target.value)} className={selectClass}>
              <option value="Maharashtra">Maharashtra</option>
              <option value="National">National Aggregate</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3 h-3" /> District
            </label>
            <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} className={selectClass}>
              <option value="ALL">Pune</option>
              {districts.map(d => <option key={d.district} value={d.district}>{d.district}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider flex items-center gap-1">
              <Building className="w-3 h-3" /> Training Provider
            </label>
            <select value={filterProvider} onChange={e => setFilterProvider(e.target.value)} className={selectClass}>
              <option value="ALL">All Providers</option>
              {providers.map(p => <option key={p.id} value={p.id}>{p.name.split(' ')[0]}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider flex items-center gap-1">
              <Award className="w-3 h-3" /> Course Sector
            </label>
            <select value={filterCourse} onChange={e => setFilterCourse(e.target.value)} className={selectClass}>
              <option value="ALL">All Sectors</option>
              {programs.map(pr => <option key={pr.id} value={pr.id}>{pr.title.split(' ')[0]}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider flex items-center gap-1">
              <Users className="w-3 h-3" /> Gender Group
            </label>
            <select value={filterGender} onChange={e => setFilterGender(e.target.value)} className={selectClass}>
              <option value="ALL">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider flex items-center gap-1">
              <RefreshCw className="w-3 h-3" /> Outcome Status
            </label>
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className={selectClass}>
              <option value="ALL">All Statuses</option>
              <option value="Employed">Employed</option>
              <option value="Retained">6M Retained</option>
              <option value="Self-Employed">Self-Employed</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className={`bg-white rounded-2xl border border-slate-200 border-l-4 ${kpi.color} p-5 shadow-sm hover:shadow-md transition space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{kpi.title}</span>
              <div className={`p-2 rounded-xl ${kpi.iconColor}`}>{kpi.icon}</div>
            </div>
            <div className="text-2xl font-black text-[#0D1B3E] tracking-tight">{kpi.value}</div>
            <div className={`text-[11px] font-bold ${kpi.textColor} flex items-center gap-1`}>
              <TrendingUp className="w-3 h-3" />{kpi.change}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Employment Outcome Funnel */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-[#0D1B3E] flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                Employment Outcome Conversion Funnel
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Longitudinal attrition from enrollment to 12-month retention</p>
            </div>
            <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2.5 py-1 rounded-full border border-blue-100">INV-09</span>
          </div>
          <div className="space-y-3 pt-1">
            {FUNNEL_DATA.map((step, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-700 font-bold">{step.stage}</span>
                  <span className="text-[#0D1B3E] font-extrabold">{step.count.toLocaleString()} ({step.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-[#1565C0] to-[#42a5f5] transition-all duration-700" 
                    style={{ width: `${step.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wage Progression */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-[#0D1B3E] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                Wage Progression & Retention Curve
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Starting ₹20,000 → 6M ₹23,000 → 12M ₹27,000 → 18M ₹31,000</p>
            </div>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-full border border-emerald-100">INV-10</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WAGE_PROGRESSION_TREND}>
                <defs>
                  <linearGradient id="wageGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
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

      {/* Provider Analytics & District Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Provider Analytics Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-[#0D1B3E] flex items-center gap-2">
                <Building className="w-4 h-4 text-purple-600" />
                Training Provider Outcome Indicators
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Comparative neutral performance indicators (INV-11)</p>
            </div>
            <span className="text-[10px] bg-purple-50 text-purple-700 font-bold px-2.5 py-1 rounded-full border border-purple-100">INV-11</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 text-[10px] uppercase tracking-wider">
                <tr>
                  <th className="p-2.5">Provider</th>
                  <th className="p-2.5">Trained</th>
                  <th className="p-2.5">Certified</th>
                  <th className="p-2.5">Employed</th>
                  <th className="p-2.5">Conv%</th>
                  <th className="p-2.5">Ret%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {providers.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50 transition">
                    <td className="p-2.5 font-bold text-[#0D1B3E] max-w-[100px] truncate">{p.name.split(' ').slice(0,2).join(' ')}</td>
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

        {/* District Intelligence */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-[#0D1B3E] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-600" />
                District Skill & Employment Intelligence
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Interactive Maharashtra district outcome selector (INV-12)</p>
            </div>
            <span className="text-[10px] bg-rose-50 text-rose-700 font-bold px-2.5 py-1 rounded-full border border-rose-100">INV-12</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {districts.map(d => (
              <button
                key={d.district}
                onClick={() => setSelectedDistrict(d.district)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedDistrict === d.district
                    ? 'bg-[#1565C0] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {d.district} ({d.employmentRate}%)
              </button>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-extrabold text-[#0D1B3E]">{currentDistrictObj.district} District Detail</h4>
              <span className="text-xs font-bold text-emerald-600">{currentDistrictObj.employmentRate}% Employment Rate</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[10px] block font-medium">Top Regional Skill Gap:</span>
                <strong className="text-rose-700 font-bold">{currentDistrictObj.topSkillGap}</strong>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[10px] block font-medium">6-Month Retention:</span>
                <strong className="text-teal-700 font-bold">{currentDistrictObj.retentionRate}%</strong>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[10px] block font-medium">Local Job Availability Score:</span>
                <strong className="text-blue-700 font-bold">{currentDistrictObj.localJobAvailabilityScore} / 100</strong>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[10px] block font-medium">Total Candidates Trained:</span>
                <strong className="text-[#0D1B3E] font-bold">{currentDistrictObj.trained.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unemployment Root Cause Analysis */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-extrabold text-[#0D1B3E] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              "Why Programs Are Not Producing Employment" — Aggregated Diagnostic
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Root-cause breakdown across non-employed candidates for targeted policy intervention</p>
          </div>
          <button 
            onClick={() => setActiveTab('early-warning')}
            className="text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-xl hover:bg-amber-100 transition shrink-0"
          >
            Launch Early Interventions →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={UNEMPLOYMENT_REASONS_AGGREGATED} cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={4} dataKey="percentage" nameKey="reason">
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
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: reason.color }} />
                  <span className="font-semibold text-slate-800">{reason.reason}</span>
                </div>
                <span className="font-bold text-[#0D1B3E]">{reason.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
