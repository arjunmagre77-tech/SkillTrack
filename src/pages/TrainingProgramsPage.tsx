import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Monitor,
  Zap,
  Settings,
  Users,
  TrendingUp,
  ShieldCheck,
  MoreHorizontal,
  Lightbulb,
  ArrowRight,
  CircleDot,
  MapPin
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

export const TrainingProgramsPage: React.FC = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('Last 6 Months');

  // Sector-wise Impact Trend (Jan - Jun)
  const sectorTrendData = [
    { month: 'Jan', it: 68, cleanEnergy: 62, manufacturing: 58 },
    { month: 'Feb', it: 71, cleanEnergy: 65, manufacturing: 61 },
    { month: 'Mar', it: 73, cleanEnergy: 68, manufacturing: 64 },
    { month: 'Apr', it: 76, cleanEnergy: 71, manufacturing: 67 },
    { month: 'May', it: 80, cleanEnergy: 73, manufacturing: 72 },
    { month: 'Jun', it: 82, cleanEnergy: 75, manufacturing: 78 },
  ];

  const programCards = [
    {
      id: 'it',
      category: 'INFORMATION TECHNOLOGY',
      categoryIcon: <Monitor className="w-3.5 h-3.5 text-blue-600" />,
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      borderTop: 'border-t-4 border-t-blue-500',
      title: 'Advanced Data Analytics & AI',
      duration: '16 Weeks Intensive',
      trained: '2,850',
      conversion: '75.6%',
      salary: '₹28,500',
      retained: '1,650',
      skills: ['Python', 'SQL', 'Excel', 'Power BI', 'Statistics']
    },
    {
      id: 'clean-energy',
      category: 'CLEAN ENERGY & ELECTRICAL',
      categoryIcon: <Zap className="w-3.5 h-3.5 text-emerald-600" />,
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      borderTop: 'border-t-4 border-t-emerald-500',
      title: 'Solar PV Systems & Renewable Tech',
      duration: '12 Weeks Intensive',
      trained: '4,200',
      conversion: '74.8%',
      salary: '₹22,000',
      retained: '2,420',
      skills: ['Solar Wiring', 'Inverter Installation', 'Grid Safety', 'Maintenance', 'CAD']
    },
    {
      id: 'manufacturing',
      category: 'CAPITAL GOODS & MECHANICAL',
      categoryIcon: <Settings className="w-3.5 h-3.5 text-purple-600" />,
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      borderTop: 'border-t-4 border-t-purple-500',
      title: 'Precision Manufacturing & CNC Operations',
      duration: '20 Weeks Intensive',
      trained: '3,600',
      conversion: '78.7%',
      salary: '₹24,000',
      retained: '2,010',
      skills: ['CNC Programming', 'Quality Inspection', 'AutoCAD', 'Machine Maintenance']
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* HEADER BANNER — Matching Image 3 */}
      <div className="relative bg-[#0B1528] text-white rounded-2xl p-6 md:p-8 overflow-hidden border border-[#172642] shadow-md">
        {/* Ambient glow and graduation cap illustration watermark */}
        <div className="absolute -right-12 -top-12 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-6 bottom-0 opacity-20 hidden md:flex items-center pointer-events-none select-none">
          {/* Graduation Cap & Arrow SVG illustration */}
          <svg className="w-48 h-48 text-blue-400" viewBox="0 0 100 100" fill="none">
            <path d="M 50 20 L 85 36 L 50 52 L 15 36 Z" stroke="currentColor" strokeWidth="3" fill="none" />
            <path d="M 28 42 V 60 Q 50 72 72 60 V 42" stroke="currentColor" strokeWidth="3" fill="none" />
            <path d="M 85 36 V 65" stroke="currentColor" strokeWidth="2.5" />
            <path d="M 68 80 Q 80 65 92 40" stroke="#38BDF8" strokeWidth="3" />
            <path d="M 82 40 L 92 40 L 92 50" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                GOVERNMENT & POLICY INTELLIGENCE
              </span>
            </div>
            <h1 className="text-2xl md:text-3.5xl font-black text-white tracking-tight leading-tight">
              Training Programs & Sector Outcomes
            </h1>
            <p className="text-xs md:text-sm text-slate-300 font-normal max-w-3xl leading-relaxed">
              NSDC-aligned skilling curricula and their corresponding employment conversion rates.
            </p>
          </div>

          <div className="shrink-0 inline-flex items-center gap-2 bg-[#12223D]/90 border border-[#203960] rounded-xl px-3.5 py-2 text-xs font-semibold text-white shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-400 font-normal">Jurisdiction:</span>
            <span className="font-bold text-blue-200">Maharashtra (State Level)</span>
          </div>
        </div>
      </div>

      {/* 3 COURSE SECTOR CARDS GRID — Matching Image 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {programCards.map(card => (
          <div
            key={card.id}
            className={`bg-white rounded-2xl border border-slate-200/90 ${card.borderTop} p-5 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all`}
          >
            <div>
              {/* Header with tag and menu */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${card.tagColor}`}>
                  {card.categoryIcon}
                  <span>{card.category}</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Duration */}
              <div className="py-4">
                <h3 className="text-base font-extrabold text-[#0D1B3E] leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Duration: {card.duration}
                </p>
              </div>

              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100">
                {/* 1. TOTAL TRAINED */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <Users className="w-3 h-3 text-blue-500" />
                    <span>TOTAL TRAINED</span>
                  </div>
                  <div className="text-lg font-black text-[#0D1B3E]">{card.trained}</div>
                </div>

                {/* 2. EMPLOYMENT CONVERSION */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span>EMPLOYMENT CONVERSION</span>
                  </div>
                  <div className="text-lg font-black text-emerald-600">{card.conversion}</div>
                </div>

                {/* 3. AVG SALARY */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span className="text-blue-500 font-bold text-xs">₹</span>
                    <span>AVG SALARY</span>
                  </div>
                  <div className="text-lg font-black text-blue-700">{card.salary}</div>
                </div>

                {/* 4. 6M RETAINED */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>6M RETAINED</span>
                  </div>
                  <div className="text-lg font-black text-emerald-700">{card.retained}</div>
                </div>
              </div>
            </div>

            {/* Core Skills Taught */}
            <div className="pt-4 space-y-2">
              <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                <span>Core Skills Taught:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {card.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100/90 text-slate-700 px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-slate-200 hover:bg-slate-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM ROW: SECTOR-WISE IMPACT TREND & KEY INSIGHTS — Matching Image 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT (8 cols): Sector-wise Impact Trend */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div>
                <h3 className="text-sm font-bold text-[#0D1B3E] flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  Sector-wise Impact Trend
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Employment conversion rate across key sectors
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Legend */}
                <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></div>
                    <span className="text-slate-600">IT & ITeS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                    <span className="text-slate-600">Clean Energy</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></div>
                    <span className="text-slate-600">Manufacturing</span>
                  </div>
                </div>

                <select
                  value={timeRange}
                  onChange={e => setTimeRange(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer"
                >
                  <option value="Last 6 Months">Last 6 Months</option>
                  <option value="Last 12 Months">Last 12 Months</option>
                  <option value="All Time">All Time</option>
                </select>
              </div>
            </div>

            <div className="h-64 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sectorTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={{ fontSize: 10, fill: '#64748B' }}
                    domain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                    unit="%"
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={(val: any) => [`${val}%`, 'Conversion Rate']}
                    contentStyle={{ borderRadius: 12, border: '1px solid #E2E8F0', fontSize: 11 }}
                  />
                  <Line type="monotone" dataKey="it" stroke="#3B82F6" strokeWidth={2.5} dot={{ r: 4, fill: '#3B82F6' }} name="IT & ITeS" />
                  <Line type="monotone" dataKey="cleanEnergy" stroke="#10B981" strokeWidth={2.5} dot={{ r: 4, fill: '#10B981' }} name="Clean Energy" />
                  <Line type="monotone" dataKey="manufacturing" stroke="#8B5CF6" strokeWidth={2.5} dot={{ r: 4, fill: '#8B5CF6' }} name="Manufacturing" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* RIGHT (4 cols): Key Insights */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-gradient-to-tl from-cyan-100/50 via-blue-50/30 to-transparent rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-[#0D1B3E]">Key Insights</h3>
              </div>
              <button
                onClick={() => navigate('/dashboard/government/program-impact')}
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

export default TrainingProgramsPage;
