import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  MapPin,
  Building,
  Users,
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Target,
  CircleDot,
  Factory,
  Coins
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

export const ProgramImpactDashboardPage: React.FC = () => {
  const { districts, providers, programs, selectedDistrict, setSelectedDistrict } = useApp();
  const navigate = useNavigate();

  const [filterState, setFilterState] = useState('Maharashtra');
  const [filterProvider, setFilterProvider] = useState('ALL');
  const [filterCourse, setFilterCourse] = useState('ALL');
  const [filterGender, setFilterGender] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');

  // Overall Impact Trend Line Chart Data (Jan - Jun)
  const impactTrendData = [
    { month: 'Jan', trained: 25000, certified: 18000, employed: 11000 },
    { month: 'Feb', trained: 45000, certified: 34000, employed: 22000 },
    { month: 'Mar', trained: 68000, certified: 52000, employed: 36000 },
    { month: 'Apr', trained: 92000, certified: 71000, employed: 49000 },
    { month: 'May', trained: 110000, certified: 85000, employed: 64000 },
    { month: 'Jun', trained: 125000, certified: 98000, employed: 77500 },
  ];

  const selectContainerClass = "bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs space-y-1";
  const selectClass = "w-full bg-transparent text-xs font-bold text-[#0D1B3E] focus:outline-none cursor-pointer";

  return (
    <div className="space-y-5 pb-12">
      {/* HEADER BANNER — Matching Image 2 */}
      <div className="relative bg-[#0B1528] text-white rounded-2xl p-6 md:p-8 overflow-hidden border border-[#172642] shadow-md">
        {/* Decorative ambient gradients & India/bar chart graphic watermark */}
        <div className="absolute -right-12 -top-12 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-4 bottom-2 opacity-25 hidden md:flex items-end gap-2.5 pointer-events-none select-none">
          <div className="w-5 h-12 bg-blue-400 rounded-t-md"></div>
          <div className="w-5 h-20 bg-blue-400 rounded-t-md"></div>
          <div className="w-5 h-28 bg-blue-400 rounded-t-md"></div>
          <div className="w-5 h-38 bg-blue-400 rounded-t-md"></div>
          {/* Subtle curved upward arrow */}
          <svg className="absolute -top-6 -left-10 w-48 h-48 text-blue-400" viewBox="0 0 100 100" fill="none">
            <path d="M 15 85 Q 50 65 78 18" stroke="currentColor" strokeWidth="3.5" fill="none" />
            <path d="M 66 18 L 80 18 L 78 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                GOVERNMENT & POLICY INTELLIGENCE
              </span>
            </div>
            <h1 className="text-2xl md:text-3.5xl font-black text-white tracking-tight leading-tight">
              Program Impact Dashboard
            </h1>
            <p className="text-xs md:text-sm text-slate-300 font-normal max-w-3xl leading-relaxed">
              Macro skilling outcome evaluation • Employment conversion • Retention & wage growth • Provider performance
            </p>
          </div>

          <div className="shrink-0 inline-flex items-center gap-2 bg-[#12223D]/90 border border-[#203960] rounded-xl px-3.5 py-2 text-xs font-semibold text-white shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-400 font-normal">Jurisdiction:</span>
            <span className="font-bold text-blue-200">{filterState} (State Level)</span>
          </div>
        </div>
      </div>

      {/* 6 FILTERS BAR — Matching Image 2 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Filter 1: State / Region */}
        <div className={selectContainerClass}>
          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3 text-slate-400" /> STATE / REGION
          </label>
          <select value={filterState} onChange={e => setFilterState(e.target.value)} className={selectClass}>
            <option value="Maharashtra">Maharashtra</option>
            <option value="National">National Aggregate</option>
          </select>
        </div>

        {/* Filter 2: District */}
        <div className={selectContainerClass}>
          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3 text-slate-400" /> DISTRICT
          </label>
          <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} className={selectClass}>
            <option value="Pune">Pune</option>
            <option value="ALL">All Districts</option>
            {districts.map(d => (
              <option key={d.district} value={d.district}>{d.district}</option>
            ))}
          </select>
        </div>

        {/* Filter 3: Training Provider */}
        <div className={selectContainerClass}>
          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Building className="w-3 h-3 text-slate-400" /> TRAINING PROVIDER
          </label>
          <select value={filterProvider} onChange={e => setFilterProvider(e.target.value)} className={selectClass}>
            <option value="ALL">All Providers</option>
            {providers.map(p => (
              <option key={p.id} value={p.id}>{p.name.split(' ')[0]}</option>
            ))}
          </select>
        </div>

        {/* Filter 4: Course Sector */}
        <div className={selectContainerClass}>
          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Award className="w-3 h-3 text-slate-400" /> COURSE SECTOR
          </label>
          <select value={filterCourse} onChange={e => setFilterCourse(e.target.value)} className={selectClass}>
            <option value="ALL">All Sectors</option>
            {programs.map(pr => (
              <option key={pr.id} value={pr.id}>{pr.category}</option>
            ))}
          </select>
        </div>

        {/* Filter 5: Gender Group */}
        <div className={selectContainerClass}>
          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Users className="w-3 h-3 text-slate-400" /> GENDER GROUP
          </label>
          <select value={filterGender} onChange={e => setFilterGender(e.target.value)} className={selectClass}>
            <option value="ALL">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Filter 6: Outcome Status */}
        <div className={selectContainerClass}>
          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-slate-400" /> OUTCOME STATUS
          </label>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className={selectClass}>
            <option value="ALL">All Statuses</option>
            <option value="Employed">Employed</option>
            <option value="Certified">Certified</option>
            <option value="Retained">6M Retained</option>
          </select>
        </div>
      </div>

      {/* 8 KPI CARDS (2 rows of 4) — Matching Image 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. TOTAL TRAINED */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-blue-500 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TOTAL TRAINED</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">1,25,000</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-600">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+12% vs LY</span>
              </div>
            </div>
            {/* Wave sparkline */}
            <div className="w-20 h-8">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 35">
                <path
                  d="M0 28 Q 25 32, 45 20 T 75 14 T 100 4"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. CERTIFIED */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-emerald-500 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CERTIFIED</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">98,000</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-600">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+78.4% Certification</span>
              </div>
            </div>
            {/* Circular Gauge 78% */}
            <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3.5"
                  strokeDasharray="78, 100"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-[#0D1B3E]">78%</span>
            </div>
          </div>
        </div>

        {/* 3. EMPLOYED OUTCOME */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-purple-500 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">EMPLOYED OUTCOME</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">62.0%</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-purple-700">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>77,500 Placed Trainees</span>
              </div>
            </div>
            {/* Mini vertical bars */}
            <div className="flex items-end gap-1.5 h-7">
              <div className="w-1.5 h-3 bg-purple-200 rounded-t-sm"></div>
              <div className="w-1.5 h-4.5 bg-purple-300 rounded-t-sm"></div>
              <div className="w-1.5 h-6 bg-purple-400 rounded-t-sm"></div>
              <div className="w-1.5 h-7 bg-purple-600 rounded-t-sm"></div>
            </div>
          </div>
        </div>

        {/* 4. 6-MONTH RETENTION */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-teal-500 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">6-MONTH RETENTION</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">71.0%</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-teal-700">
                <span>Sustained Employment</span>
              </div>
            </div>
            {/* Mini upward line */}
            <div className="w-14 h-7">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 60 30">
                <path d="M5 25 L 30 18 L 55 5" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 45 5 L 55 5 L 55 15" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* 5. AVG STARTING SALARY */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-amber-500 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                ₹
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AVG STARTING SALARY</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">₹24,500</div>
              <div className="text-xs font-semibold text-slate-400 mt-1">
                <span>INR per month</span>
              </div>
            </div>
            {/* Coins illustration */}
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
              <Coins className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 6. SELF-EMPLOYED */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-indigo-500 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SELF-EMPLOYED</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">18.0%</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-indigo-700">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Entrepreneurs & Freelancers</span>
              </div>
            </div>
            <div className="w-8 h-8 text-indigo-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 7. APPRENTICESHIPS */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-cyan-500 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">APPRENTICESHIPS</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">8.0%</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-cyan-700">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Under Industry Training</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Factory className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* 8. AVG SKILL-GAP REDUCTION */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-rose-500 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AVG SKILL-GAP REDUCTION</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">32.0%</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-rose-700">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Industry alignment</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: OVERALL IMPACT TREND & KEY INSIGHTS — Matching Image 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT (8 cols): Overall Impact Trend */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-[#0D1B3E]">Overall Impact Trend</h3>
              </div>
              {/* Legend */}
              <div className="flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></div>
                  <span className="text-slate-600">Trained</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                  <span className="text-slate-600">Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></div>
                  <span className="text-slate-600">Employed</span>
                </div>
              </div>
            </div>

            <div className="h-64 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={impactTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={{ fontSize: 10, fill: '#64748B' }}
                    domain={[0, 150000]}
                    ticks={[0, 50000, 100000, 150000]}
                    tickFormatter={(val) => `${val / 1000}K`}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={(val: any) => [Number(val).toLocaleString(), 'Candidates']}
                    contentStyle={{ borderRadius: 12, border: '1px solid #E2E8F0', fontSize: 11 }}
                  />
                  <Line type="monotone" dataKey="trained" stroke="#3B82F6" strokeWidth={2.5} dot={{ r: 4, fill: '#3B82F6' }} />
                  <Line type="monotone" dataKey="certified" stroke="#10B981" strokeWidth={2.5} dot={{ r: 4, fill: '#10B981' }} />
                  <Line type="monotone" dataKey="employed" stroke="#8B5CF6" strokeWidth={2.5} dot={{ r: 4, fill: '#8B5CF6' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* RIGHT (4 cols): Key Insights */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs relative overflow-hidden flex flex-col justify-between">
          {/* Subtle curved background graphic in corner */}
          <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-gradient-to-tl from-cyan-100/50 via-blue-50/30 to-transparent rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-[#0D1B3E]">Key Insights</h3>
              </div>
              <button
                onClick={() => navigate('/dashboard/government/district-intelligence')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* Insight 1 */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-700 font-medium leading-snug">
                  Training numbers increased by <span className="font-bold text-[#0D1B3E]">12%</span> compared to last year.
                </p>
              </div>

              {/* Insight 2 */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-700 font-medium leading-snug">
                  Employment conversion rate improved to <span className="font-bold text-[#0D1B3E]">62.0%</span>.
                </p>
              </div>

              {/* Insight 3 */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CircleDot className="w-3.5 h-3.5" />
                </div>
                <p className="text-slate-700 font-medium leading-snug">
                  Top performing sector: <span className="font-bold text-[#0D1B3E]">IT & ITeS</span> (82% placement rate).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramImpactDashboardPage;
