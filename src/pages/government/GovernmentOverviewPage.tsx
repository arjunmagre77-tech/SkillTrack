import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  Clock,
  ArrowRight,
  MapPin,
  Database,
  BarChart3,
  TrendingUp,
  ShieldAlert,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export const GovernmentOverviewPage: React.FC = () => {
  const { loadDemoData } = useApp();
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('Last 6 Months');

  // Program Performance Bar Chart Data (Jan - Jun)
  const barChartData = [
    { month: 'Jan', completion: 70, employment: 48, retention: 54 },
    { month: 'Feb', completion: 74, employment: 58, retention: 62 },
    { month: 'Mar', completion: 78, employment: 54, retention: 58 },
    { month: 'Apr', completion: 72, employment: 57, retention: 60 },
    { month: 'May', completion: 82, employment: 63, retention: 71 },
    { month: 'Jun', completion: 86, employment: 72, retention: 76 },
  ];

  // Sector-wise Training Donut Data
  const sectorData = [
    { name: 'IT & ITeS', value: 32, color: '#3B82F6' },
    { name: 'Healthcare', value: 21, color: '#10B981' },
    { name: 'Manufacturing', value: 15, color: '#F59E0B' },
    { name: 'Retail & Services', value: 12, color: '#8B5CF6' },
    { name: 'Others', value: 20, color: '#94A3B8' },
  ];

  // Recent Activity Items
  const recentActivities = [
    {
      id: 1,
      title: 'New program data uploaded',
      subtitle: 'Odisha - Skilling Program 2025',
      time: '2h ago',
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      id: 2,
      title: 'Anomaly detected',
      subtitle: 'Abnormal drop in placement rate - Bihar',
      time: '5h ago',
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-200',
      icon: <ShieldAlert className="w-4 h-4" />
    },
    {
      id: 3,
      title: 'District performance updated',
      subtitle: 'Mysuru - Employment rate improved',
      time: '8h ago',
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-200',
      icon: <MapPin className="w-4 h-4" />
    },
    {
      id: 4,
      title: 'New trainee cohort added',
      subtitle: '1,240 trainees - Rajasthan',
      time: '12h ago',
      iconBg: 'bg-slate-100 text-slate-600 border border-slate-200',
      icon: <Users className="w-4 h-4" />
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* HERO SECTION — Matching Image 1 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#eef5ff] via-[#f4f8ff] to-[#edf4fc] border border-blue-100 p-7 md:p-9 shadow-xs"
      >
        {/* Background Graphic Illustration on the right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-6 pointer-events-none select-none opacity-90">
          <div className="relative w-44 h-44 rounded-full bg-blue-100/50 flex items-center justify-center border border-blue-200/60 shadow-inner">
            {/* 4 ascending bars inside circular graphic */}
            <div className="flex items-end gap-2.5 h-24 mb-2">
              <div className="w-4 h-10 bg-blue-300 rounded-t-md"></div>
              <div className="w-4 h-15 bg-blue-400 rounded-t-md"></div>
              <div className="w-4 h-19 bg-blue-500 rounded-t-md"></div>
              <div className="w-4 h-24 bg-emerald-400 rounded-t-md"></div>
            </div>
            {/* Upward curved arrow overlay */}
            <svg className="absolute inset-0 w-full h-full p-6 text-blue-500" viewBox="0 0 100 100" fill="none">
              <path
                d="M 20 80 Q 55 70 78 26"
                stroke="#3B82F6"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 68 24 L 80 25 L 79 37"
                stroke="#3B82F6"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Dotted matrix grid decoration */}
          <div className="grid grid-cols-4 gap-2.5 opacity-30">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-3xl space-y-3.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 tracking-wider uppercase">
            <span>GOVERNMENT & POLICY INTELLIGENCE HUB</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl md:text-3.5xl font-black text-[#0D1B3E] tracking-tight">
              SkillTrack Government Dashboard
            </h1>
            <p className="text-base md:text-lg font-bold text-blue-700">
              State-Level Program Impact & Governance Portal
            </p>
          </div>

          <p className="text-xs md:text-sm text-[#4A5568] leading-relaxed max-w-2xl font-normal">
            Evaluate skilling outcomes across providers, districts, and sectors. Monitor employment conversion rates, 6-month retention, and wage growth with real-time AI anomaly detection.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/dashboard/government/program-impact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1976D2] hover:bg-[#1565C0] text-white text-xs font-bold rounded-xl shadow-sm transition-all duration-150 active:scale-95 cursor-pointer"
            >
              <span>Program Impact Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/dashboard/government/district-intelligence"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#1E293B] text-xs font-bold rounded-xl border border-slate-200 shadow-2xs transition-all duration-150 active:scale-95 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>District Intelligence</span>
            </Link>

            <button
              onClick={loadDemoData}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#1E293B] text-xs font-bold rounded-xl border border-slate-200 shadow-2xs transition-all duration-150 active:scale-95 cursor-pointer"
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>Reload State Dataset</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* 4 KEY STATS CARDS — Matching Image 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: TOTAL TRAINED */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-blue-500 p-5 shadow-2xs hover:shadow-sm transition-all duration-150">
          <div className="flex items-center justify-between mb-3">
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
                <span>12.5%</span>
                <span className="text-slate-400 font-normal text-[11px]">vs. last 6 months</span>
              </div>
            </div>
            {/* Sparkline */}
            <div className="w-20 h-9">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path
                  d="M0 32 Q 25 28, 45 20 T 75 14 T 100 6"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2: CERTIFIED RATE */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-emerald-500 p-5 shadow-2xs hover:shadow-sm transition-all duration-150">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CERTIFIED RATE</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">78.4%</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-600">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>6.8%</span>
                <span className="text-slate-400 font-normal text-[11px]">vs. last 6 months</span>
              </div>
            </div>
            {/* Sparkline */}
            <div className="w-20 h-9">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path
                  d="M0 30 Q 30 35, 55 24 T 80 16 T 100 8"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 3: EMPLOYED OUTCOME */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-purple-500 p-5 shadow-2xs hover:shadow-sm transition-all duration-150">
          <div className="flex items-center justify-between mb-3">
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
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-600">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>9.2%</span>
                <span className="text-slate-400 font-normal text-[11px]">vs. last 6 months</span>
              </div>
            </div>
            {/* Sparkline */}
            <div className="w-20 h-9">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path
                  d="M0 35 Q 25 30, 48 26 T 75 20 T 100 10"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 4: 6-MONTH RETENTION */}
        <div className="bg-white rounded-2xl border border-slate-200/90 border-t-4 border-t-amber-500 p-5 shadow-2xs hover:shadow-sm transition-all duration-150">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">6-MONTH RETENTION</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight">71.0%</div>
              <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-600">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>7.6%</span>
                <span className="text-slate-400 font-normal text-[11px]">vs. last 6 months</span>
              </div>
            </div>
            {/* Sparkline */}
            <div className="w-20 h-9">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path
                  d="M0 34 Q 30 32, 55 25 T 80 18 T 100 8"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: CHARTS & RECENT ACTIVITY GRID — Matching Image 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT (5 cols): Program Performance Bar Chart */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-[#0D1B3E]">Program Performance</h3>
              </div>
              <select
                value={timeRange}
                onChange={e => setTimeRange(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer"
              >
                <option value="Last 6 Months">Last 6 Months</option>
                <option value="Last 12 Months">Last 12 Months</option>
                <option value="All Time">All Time</option>
              </select>
            </div>

            <div className="h-60 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData} barCategoryGap="20%" barGap={3}>
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
                    formatter={(val: any) => [`${val}%`]}
                    contentStyle={{ borderRadius: 12, border: '1px solid #E2E8F0', fontSize: 11 }}
                  />
                  <Bar dataKey="completion" fill="#2563EB" radius={[4, 4, 0, 0]} name="Training Completion" />
                  <Bar dataKey="employment" fill="#0D9488" radius={[4, 4, 0, 0]} name="Employment Rate" />
                  <Bar dataKey="retention" fill="#8B5CF6" radius={[4, 4, 0, 0]} name="Retention Rate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-5 pt-3 border-t border-slate-100 text-[11px] text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div>
              <span>Training Completion</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0D9488]"></div>
              <span>Employment Rate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></div>
              <span>Retention Rate</span>
            </div>
          </div>
        </div>

        {/* MIDDLE (4 cols): Sector-wise Training Donut Chart */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-4 h-4 rounded-full border-2 border-blue-600 border-t-transparent animate-spin-none"></div>
            <h3 className="text-sm font-bold text-[#0D1B3E]">Sector-wise Training</h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-auto py-2">
            {/* Donut with center text */}
            <div className="relative w-44 h-44 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(val: any) => [`${val}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                <span className="text-xs font-black text-[#0D1B3E]">1,25,000</span>
                <span className="text-[9px] text-slate-400 font-semibold">Total Trained</span>
              </div>
            </div>

            {/* Sector Legend */}
            <div className="space-y-2 text-xs flex-1 w-full">
              {sectorData.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                    <span className="text-slate-600 text-[11px] font-medium">{s.name}</span>
                  </div>
                  <span className="font-bold text-[#0D1B3E] text-xs">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 text-center font-medium">
            36 Districts Aggregated Data
          </div>
        </div>

        {/* RIGHT (3 cols): Recent Activity List */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-[#0D1B3E]">Recent Activity</h3>
              </div>
              <button
                onClick={() => navigate('/dashboard/government/program-impact')}
                className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="divide-y divide-slate-100 mt-1">
              {recentActivities.map(act => (
                <div key={act.id} className="py-3 flex items-start gap-3">
                  <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${act.iconBg}`}>
                    {act.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#0D1B3E] leading-tight truncate">
                      {act.title}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {act.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium shrink-0">
                    {act.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/dashboard/government/ai-anomaly"
              className="w-full py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-center text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1.5 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>AI Anomaly Center Live Feed</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
