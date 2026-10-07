import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  BarChart3, 
  Layers, 
  Zap, 
  ChevronRight, 
  FileCheck 
} from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export const TraineeDashboardPage: React.FC = () => {
  const { trainees, selectedTrainee, setSelectedTraineeId } = useApp();
  const navigate = useNavigate();

  // Radar Data for Candidate
  const radarData = selectedTrainee.skills.map(s => ({
    subject: s.skill,
    current: s.level,
    required: s.required ? 85 : 70
  }));

  // Salary Progression Chart Data
  const salaryData = [
    { month: 'Jan', wage: 18000, benchmark: 15000 },
    { month: 'Feb', wage: 20000, benchmark: 16500 },
    { month: 'Mar', wage: 22000, benchmark: 18000 },
    { month: 'Apr', wage: 25000, benchmark: 20000 },
    { month: 'May', wage: 26500, benchmark: 21500 },
    { month: 'Jun', wage: selectedTrainee.salary || 28000, benchmark: 22000 },
  ];

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* 1. TOP HERO HEADER - TRAINEE OUTCOME DASHBOARD */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white p-6 shadow-xl border border-blue-400/30">
        <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-15 pointer-events-none">
          <BarChart3 className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">Trainee Outcome Dashboard</h1>
              <p className="text-xs text-blue-100/90 mt-0.5 font-medium">
                Longitudinal tracking • Employment retention • Wage progression beyond course completion
              </p>
            </div>
          </div>

          {/* Trainee Selector */}
          <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-1.5 pl-3 w-full md:w-auto">
            <span className="text-xs font-semibold text-white whitespace-nowrap">Select Trainee:</span>
            <select
              value={selectedTrainee.id}
              onChange={(e) => setSelectedTraineeId(e.target.value)}
              className="bg-white text-slate-900 text-xs font-bold rounded-xl px-3 py-2 border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none cursor-pointer"
            >
              {trainees.slice(0, 30).map(t => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.programName.includes('Data') ? 'Advanced' : 'Standard'}) - {t.district}
                </option>
              ))}
            </select>
            <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. CANDIDATE PROFILE HEADER CARD */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-extrabold text-2xl shadow-md">
            {selectedTrainee.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-black text-slate-900">{selectedTrainee.name}</h2>
              <span className="text-xs font-extrabold px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/50">
                {selectedTrainee.employmentStatus}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-2">
              <span>{selectedTrainee.currentRole || 'Junior Data Analyst'}</span>
              <span>•</span>
              <span className="text-slate-700 font-semibold">{selectedTrainee.employerName || 'XYZ Technologies Pvt Ltd'}</span>
              <span>•</span>
              <span className="text-slate-500">{selectedTrainee.district}, {selectedTrainee.state || 'Maharashtra'}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 w-full lg:w-auto justify-between lg:justify-end">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              💳
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Monthly Pay</span>
              <span className="text-lg font-black text-slate-900">
                ₹{selectedTrainee.salary ? selectedTrainee.salary.toLocaleString() : '28,000'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-4 border-teal-500 text-teal-700 flex items-center justify-center font-black text-xs">
              92%
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Score</span>
              <span className="text-base font-black text-teal-600">{selectedTrainee.assessmentScore}%</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/dashboard/trainee/passport')}
            className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-violet-200 transition flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Outcome Passport</span>
          </button>
        </div>
      </div>

      {/* 3. MAIN GRID LAYOUT - 3 CARDS TOP ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Digital Outcome Profile */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-black uppercase text-blue-900 tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-blue-600" />
              <span>Digital Outcome Profile</span>
            </h3>
            <span className="text-[10px] bg-blue-50 text-blue-700 font-mono px-2 py-0.5 rounded font-bold border border-blue-200/60">
              INV-01
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Trainee ID:</span>
              <span className="font-bold text-slate-900 font-mono">{selectedTrainee.id || 'TRN-2026-001'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Education:</span>
              <span className="font-semibold text-slate-900">{selectedTrainee.education || 'B.Sc Computer Science (2025)'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Training Program:</span>
              <span className="font-bold text-blue-700 text-right max-w-[170px]">{selectedTrainee.programName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Training Provider:</span>
              <span className="font-semibold text-slate-900 text-right max-w-[170px]">{selectedTrainee.providerName || 'Maharashtra Skill Development Centre (MSDC)'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Cohort / Duration:</span>
              <span className="font-semibold text-slate-900">{selectedTrainee.cohort || '2025-Q4 Cohort A'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Certification Status:</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Certified
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Verified Employer:</span>
              <span className="font-bold text-slate-900">{selectedTrainee.employerName || 'XYZ Technologies Pvt Ltd'}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Employment Start:</span>
              <span className="font-semibold text-slate-900">12 April 2026</span>
            </div>
          </div>
        </div>

        {/* Card 2: 3-Level Verification */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-black uppercase text-blue-900 tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>3-Level Verification</span>
            </h3>
          </div>

          {/* Workflow steps */}
          <div className="flex items-center justify-between gap-2 text-center py-2">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-200">
                <User className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-900 mt-1">Self</span>
              <span className="text-[10px] text-slate-400">Completed learning modules</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs border border-purple-200">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-900 mt-1">Assessed</span>
              <span className="text-[10px] text-slate-400">Skill assessment & project review</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs border border-emerald-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-900 mt-1">Industry-Verified</span>
              <span className="text-[10px] text-slate-400">Company confirmation & live project sign-off</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-emerald-700">Verification Progress</span>
              <span className="font-bold text-emerald-700">100%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full w-full" />
            </div>
          </div>

          {/* Sub Cards */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 space-y-1">
              <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                <FileCheck className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-[11px] font-bold text-slate-900 leading-tight">Company-verified live projects</h4>
              <p className="text-[10px] text-slate-500 leading-tight">Assigned and signed off by the same firm</p>
            </div>
            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1">
              <div className="w-6 h-6 rounded-md bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-[11px] font-bold text-slate-900 leading-tight">Gamified habit loop</h4>
              <p className="text-[10px] text-slate-500 leading-tight">Assessments, streaks, and badges drive daily learning</p>
            </div>
          </div>
        </div>

        {/* Card 3: Skill Performance */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-black uppercase text-blue-900 tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>Skill Performance</span>
            </h3>
            <span className="text-[10px] bg-blue-50 text-blue-700 font-mono px-2 py-0.5 rounded font-bold border border-blue-200/60">
              INV-06
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 items-center">
            {/* Radar Preview */}
            <div className="relative flex flex-col items-center justify-center h-44">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: '#64748b' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                  <Radar name="Current" dataKey="current" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[9px] font-bold text-slate-400">Overall Skill Score</span>
                <span className="text-xl font-black text-blue-600">92%</span>
              </div>
            </div>

            {/* Top Skills List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900">Top Skills</h4>
              {[
                { name: 'Python', score: 96 },
                { name: 'SQL', score: 95 },
                { name: 'Excel', score: 67 },
                { name: 'Power BI', score: 82 },
                { name: 'Statistics', score: 79 },
              ].map((s, idx) => (
                <div key={s.name} className="space-y-0.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-700 font-medium">{idx + 1}. {s.name}</span>
                    <span className="font-bold text-slate-900">{s.score}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${s.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM ROW - 2 CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Employment & Wage Progression (Span 2) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-black uppercase text-blue-900 tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>Employment & Wage Progression</span>
            </h3>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> Monthly Wage (₹)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Employment Status</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="md:col-span-3 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salaryData}>
                  <defs>
                    <linearGradient id="wageGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickFormatter={(val) => `₹${val/1000}k`} />
                  <Tooltip formatter={(val: any) => [`₹${Number(val).toLocaleString()}`, 'Monthly Wage']} />
                  <Area type="monotone" dataKey="wage" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#wageGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 text-center md:text-left">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-semibold text-emerald-800 block">Current Wage</span>
              <span className="text-xl font-black text-emerald-900 block">₹28,000</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-white px-2 py-0.5 rounded-md inline-block">
                +12% MoM
              </span>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-black uppercase text-blue-900 tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Key Insights</span>
            </h3>
            <button 
              onClick={() => navigate('/dashboard/trainee/roadmap')}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
            >
              <span>View Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4 pt-1">
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                💡
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Training numbers increased by <strong className="text-slate-900">12%</strong> compared to last year.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                🎯
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Employment conversion rate improved to <strong className="text-blue-700">62.0%</strong>.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                🏅
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Skill verification score ranks in the top <strong className="text-emerald-700">5%</strong> of Pune cohort candidates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
