import React from 'react';
import { useApp } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  BarChart3, 
  TrendingUp, 
  Award, 
  Briefcase, 
  RefreshCw, 
  Target, 
  Users,
  Database,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const GovernmentOverviewPage: React.FC = () => {
  const { loadDemoData } = useApp();

  const journeySteps = [
    { title: 'Enrollment', icon: <Users className="w-5 h-5 text-blue-500" />, desc: 'Biometric candidate registration & profiling' },
    { title: 'Training', icon: <Target className="w-5 h-5 text-indigo-500" />, desc: 'NSDC curriculum compliance & attendance' },
    { title: 'Certification', icon: <Award className="w-5 h-5 text-purple-500" />, desc: 'Assessment & tamper-proof digital badge' },
    { title: 'Employment', icon: <Briefcase className="w-5 h-5 text-emerald-500" />, desc: 'Employer onboarding & offer validation' },
    { title: 'Retention', icon: <RefreshCw className="w-5 h-5 text-teal-500" />, desc: '6M & 12M check-in tracking via EPFO' },
    { title: 'Wage Growth', icon: <TrendingUp className="w-5 h-5 text-amber-500" />, desc: 'Longitudinal increment analysis' },
    { title: 'Program Impact', icon: <BarChart3 className="w-5 h-5 text-rose-500" />, desc: 'State-wide macro policy evaluation' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* HERO SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071A33] via-[#0A2246] to-[#0E3A75] text-white p-8 md:p-12 shadow-2xl border border-[#1E3A8A]/40"
      >
        <div className="absolute -right-12 -top-12 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Government & Policy Intelligence Hub</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              SkillTrack Government Dashboard
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-blue-300 tracking-wide">
              “State-Level Program Impact & Governance Portal”
            </p>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
            Evaluate skilling outcomes across providers, districts, and sectors. Monitor employment conversion rates, 6-month retention, and wage growth with real-time AI anomaly detection.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/dashboard/government/program-impact"
              className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-500/25 transition-all flex items-center gap-2 active:scale-95 cursor-pointer ring-1 ring-white/20"
            >
              <span>Program Impact Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/dashboard/government/district-intelligence"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>District Intelligence</span>
              <BarChart3 className="w-4 h-4 text-cyan-400" />
            </Link>

            <button
              onClick={loadDemoData}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Database className="w-4 h-4 text-emerald-200" />
              <span>Reload State Dataset</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* KPI STATS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Trained', value: '1,25,000', sub: 'Across 36 Districts', color: 'border-l-blue-500' },
          { label: 'Certified Rate', value: '78.4%', sub: '98,000 Candidates', color: 'border-l-indigo-500' },
          { label: 'Employed Outcome', value: '62.0%', sub: '77,500 Placed Trainees', color: 'border-l-emerald-500' },
          { label: '6-Month Retention', value: '71.0%', sub: 'Sustained Employment', color: 'border-l-teal-500' },
          { label: 'Self-Employed', value: '18.0%', sub: 'Micro-Entrepreneurs', color: 'border-l-purple-500' },
          { label: 'Apprenticeships', value: '8.0%', sub: 'On-Job Training', color: 'border-l-cyan-500' },
          { label: 'Avg Starting Salary', value: '₹24,500', sub: 'Per month starting', color: 'border-l-amber-500' },
          { label: 'Skill-Gap Reduction', value: '32.0%', sub: 'Target role alignment', color: 'border-l-rose-500' },
        ].map((stat, idx) => (
          <div key={idx} className={`bg-white/95 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/80 border-l-4 ${stat.color} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all space-y-1.5`}>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
            <div className="text-2xl font-black text-[#071A33] tracking-tight">{stat.value}</div>
            <p className="text-[11px] text-slate-400 font-medium">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* LONGITUDINAL JOURNEY VISUALIZATION */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-black text-[#071A33]">The State Longitudinal Skilling Architecture</h2>
            <p className="text-xs text-slate-500">SkillTrack multi-source data pipeline from enrollment to 18-month wage growth</p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full self-start">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            7-Stage Lifecycle
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
          {journeySteps.map((step, idx) => (
            <div key={idx} className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between hover:border-blue-400 hover:bg-white hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-2xs group-hover:bg-blue-50 transition">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#071A33] group-hover:text-blue-600 transition">{step.title}</h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
