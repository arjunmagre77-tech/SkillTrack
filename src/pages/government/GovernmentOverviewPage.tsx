import React from 'react';
import { useApp } from '../../context/AppContext';
import { Link } from 'react-router-dom';
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
  ArrowRight
} from 'lucide-react';

export const GovernmentOverviewPage: React.FC = () => {
  const { loadDemoData } = useApp();

  const journeySteps = [
    { title: 'Enrollment', icon: <Users className="w-5 h-5 text-blue-600" />, desc: 'Biometric candidate registration' },
    { title: 'Training', icon: <Target className="w-5 h-5 text-indigo-600" />, desc: 'NSDC curriculum compliance' },
    { title: 'Certification', icon: <Award className="w-5 h-5 text-purple-600" />, desc: 'Assessment & digital badge' },
    { title: 'Employment', icon: <Briefcase className="w-5 h-5 text-emerald-600" />, desc: 'Employer payroll verification' },
    { title: 'Retention', icon: <RefreshCw className="w-5 h-5 text-teal-600" />, desc: '6M & 12M check-in tracking' },
    { title: 'Wage Growth', icon: <TrendingUp className="w-5 h-5 text-amber-600" />, desc: 'Increment tracking' },
    { title: 'Program Impact', icon: <BarChart3 className="w-5 h-5 text-rose-600" />, desc: 'Macro policy evaluation' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-gov-900 to-slate-900 text-white p-8 md:p-12 shadow-xl border border-blue-900">
        <div className="absolute -right-12 -top-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-sm">
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Government & Policy Intelligence Hub</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
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
              className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Program Impact Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/dashboard/government/district-intelligence"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>District Intelligence</span>
              <BarChart3 className="w-4 h-4 text-teal-400" />
            </Link>

            <button
              onClick={loadDemoData}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Database className="w-4 h-4 text-emerald-200" />
              <span>Reload State Dataset</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI STATS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Trained', value: '1,25,000', sub: 'Across 36 Districts', color: 'border-l-blue-600' },
          { label: 'Certified Rate', value: '78.4%', sub: '98,000 Candidates', color: 'border-l-indigo-600' },
          { label: 'Employed Outcome', value: '62.0%', sub: '77,500 Placed Trainees', color: 'border-l-emerald-600' },
          { label: '6-Month Retention', value: '71.0%', sub: 'Sustained Employment', color: 'border-l-teal-600' },
          { label: 'Self-Employed', value: '18.0%', sub: 'Micro-Entrepreneurs', color: 'border-l-purple-600' },
          { label: 'Apprenticeships', value: '8.0%', sub: 'On-Job Training', color: 'border-l-cyan-600' },
          { label: 'Avg Starting Salary', value: '₹24,500', sub: 'Per month starting', color: 'border-l-amber-600' },
          { label: 'Skill-Gap Reduction', value: '32.0%', sub: 'Target role alignment', color: 'border-l-rose-600' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 border-l-4 border-l-blue-600 shadow-sm space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
            <div className="text-2xl font-black text-gov-900">{stat.value}</div>
            <p className="text-[11px] text-slate-400 font-medium">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* LONGITUDINAL JOURNEY VISUALIZATION */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-gov-900">The State Longitudinal Skilling Architecture</h2>
            <p className="text-xs text-slate-500">SkillTrack multi-source data pipeline from enrollment to 18-month wage growth</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
          {journeySteps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition group">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs group-hover:bg-blue-50 transition">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gov-900 group-hover:text-blue-700 transition">{step.title}</h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
