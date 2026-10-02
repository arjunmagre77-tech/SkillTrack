import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users,
  Award,
  Briefcase,
  RefreshCw,
  Target,
  TrendingUp,
  BarChart2,
  Database,
  MapPin,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';

// Shared page header component used across Government intelligence pages
export const GovPageHeader: React.FC<{
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle: string;
  jurisdiction?: string;
}> = ({ icon, label, title, subtitle, jurisdiction = 'Maharashtra (State Level)' }) => (
  <div className="relative bg-gradient-to-r from-[#071A33] via-[#0A2246] to-[#0D3060] text-white rounded-3xl p-6 md:p-8 mb-6 overflow-hidden border border-[#1E3A8A]/40 shadow-xl">
    {/* Decorative watermark icon & ambient glow */}
    <div className="absolute -right-10 -top-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute right-6 bottom-0 opacity-10 pointer-events-none">
      <GraduationCap className="w-48 h-48 text-cyan-400" />
    </div>

    <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shadow-sm backdrop-blur-sm">
            {icon}
          </div>
          <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
            {label || 'Government & Policy Intelligence'}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">{title}</h1>
        <p className="text-xs md:text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
      <div className="shrink-0 inline-flex items-center gap-2 bg-[#071A33]/80 border border-[#1E3A8A]/60 rounded-2xl px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
        <MapPin className="w-4 h-4 text-cyan-400" />
        <span className="text-slate-400 font-medium">Jurisdiction:</span>
        <span className="font-bold text-blue-300">{jurisdiction}</span>
      </div>
    </div>
  </div>
);

export const OverviewPage: React.FC = () => {
  const { loadDemoData } = useApp();

  const kpiCards = [
    { label: 'Total Trained', value: '1,25,000', sub: 'Across 36 Districts', icon: <Users className="w-5 h-5" />, color: 'blue', borderColor: 'border-l-blue-500' },
    { label: 'Certified Rate', value: '78.4%', sub: '98,000 Candidates', icon: <Award className="w-5 h-5" />, color: 'green', borderColor: 'border-l-emerald-500' },
    { label: 'Employed Outcome', value: '62.0%', sub: '77,500 Placed Trainees', icon: <Briefcase className="w-5 h-5" />, color: 'purple', borderColor: 'border-l-purple-500' },
    { label: '6-Month Retention', value: '71.0%', sub: 'Sustained Employment', icon: <RefreshCw className="w-5 h-5" />, color: 'amber', borderColor: 'border-l-amber-500' },
    { label: 'Self-Employed', value: '18.0%', sub: 'Entrepreneurs & Freelancers', icon: <Building className="w-5 h-5" />, color: 'blue', borderColor: 'border-l-blue-400' },
    { label: 'Apprenticeships', value: '8.0%', sub: 'Under Industry Training', icon: <GraduationCap className="w-5 h-5" />, color: 'teal', borderColor: 'border-l-teal-500' },
    { label: 'Avg Starting Salary', value: '₹24,500', sub: 'Per Month Baseline', icon: <TrendingUp className="w-5 h-5" />, color: 'amber', borderColor: 'border-l-amber-400' },
    { label: 'Skill-Gap Reduction', value: '32.0%', sub: 'Demand-Supply Match', icon: <Target className="w-5 h-5" />, color: 'rose', borderColor: 'border-l-rose-500' },
  ];

  const journeySteps = [
    { title: 'Enrollment & Profiling', desc: 'Baseline skill assessments, socio-demographic tags & aspiration mapping.', icon: <Users className="w-4 h-4 text-blue-400" /> },
    { title: 'Training & Attendance', desc: 'Biometric tracking, curriculum milestones, and hands-on lab audits.', icon: <BookOpen className="w-4 h-4 text-indigo-400" /> },
    { title: 'Certification Assessment', desc: 'Third-party assessment & tamper-proof digital certification credentialing.', icon: <Award className="w-4 h-4 text-emerald-400" /> },
    { title: 'Placement & Job Offers', desc: 'Automated job matching, offer letters, and wage benchmarking.', icon: <Briefcase className="w-4 h-4 text-purple-400" /> },
    { title: 'EPFO Verification', desc: 'Automated provident fund cross-verification to validate genuine payroll onboarding.', icon: <CheckCircle2 className="w-4 h-4 text-teal-400" /> },
    { title: '6-Month Retention', desc: 'Milestone checks, employer feedback, wage escalation & stability indicators.', icon: <RefreshCw className="w-4 h-4 text-amber-400" /> },
    { title: 'Career Progression', desc: '12-month follow-up, upskilling recommendations & wage growth tracking.', icon: <TrendingUp className="w-4 h-4 text-rose-400" /> },
  ];

  const iconColorMap: Record<string, string> = {
    blue: 'text-blue-600 bg-blue-50 border border-blue-100',
    green: 'text-emerald-600 bg-emerald-50 border border-emerald-100',
    purple: 'text-purple-600 bg-purple-50 border border-purple-100',
    amber: 'text-amber-600 bg-amber-50 border border-amber-100',
    teal: 'text-teal-600 bg-teal-50 border border-teal-100',
    rose: 'text-rose-600 bg-rose-50 border border-rose-100',
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071A33] via-[#0A2246] to-[#0E3A75] text-white p-8 md:p-10 shadow-2xl border border-[#1E3A8A]/40"
      >
        {/* Decorative elements */}
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute right-20 top-8 w-40 h-40 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
        <div className="absolute right-8 bottom-0 opacity-10 pointer-events-none">
          <BarChart2 className="w-56 h-56 text-cyan-400" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Government & Policy Intelligence Hub
          </div>

          <div className="space-y-1.5">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              SkillTrack Government Dashboard
            </h1>
            <p className="text-base font-semibold text-blue-200">
              “From Training to Sustainable Longitudinal Employment”
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            Evaluate skilling outcomes across providers, districts, and sectors. Monitor employment conversion rates, 6-month retention, and wage growth with real-time AI anomaly detection.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/dashboard/government/program-impact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-all active:scale-95 cursor-pointer ring-1 ring-white/20"
            >
              <BarChart2 className="w-4 h-4" />
              <span>Program Impact Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/dashboard/government/district-intelligence"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/20 transition-all active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>District Intelligence</span>
            </Link>

            <button
              onClick={loadDemoData}
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer"
            >
              <Database className="w-4 h-4" />
              <span>Reload State Dataset</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpiCards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/80 border-l-4 ${card.borderColor} p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-2`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{card.label}</span>
              <div className={`p-2.5 rounded-xl ${iconColorMap[card.color]}`}>
                {card.icon}
              </div>
            </div>
            <div className="text-2xl font-black text-[#071A33] tracking-tight">{card.value}</div>
            <p className={`text-xs font-semibold ${
              card.color === 'blue' ? 'text-blue-600' :
              card.color === 'green' ? 'text-emerald-600' :
              card.color === 'purple' ? 'text-purple-600' :
              card.color === 'amber' ? 'text-amber-600' :
              card.color === 'teal' ? 'text-teal-600' :
              'text-rose-600'
            }`}>{card.sub}</p>
          </div>
        ))}
      </div>

      {/* LONGITUDINAL JOURNEY VISUALIZATION */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-black text-[#071A33]">The Longitudinal Trainee Journey</h2>
            <p className="text-xs text-slate-500">SkillTrack extends beyond course completion into 12-month post-placement outcomes</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full font-bold border border-blue-200 self-start">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            End-to-End Traceability
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

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            title: 'Program Impact Dashboard',
            desc: 'Macro skilling outcome evaluation — Employment conversion, retention & wage growth across all sectors.',
            to: '/dashboard/government/program-impact',
            gradient: 'from-blue-600 to-blue-700',
            icon: <BarChart2 className="w-6 h-6 text-white" />,
          },
          {
            title: 'Training Provider Analytics',
            desc: 'Comparative neural performance indicators for institutional quality audit across providers.',
            to: '/dashboard/government/training-providers',
            gradient: 'from-emerald-600 to-teal-600',
            icon: <Award className="w-6 h-6 text-white" />,
          },
          {
            title: 'Trainees Outcome Directory',
            desc: 'Longitudinal candidate repository with multi-source verified outcome records.',
            to: '/dashboard/government/trainee-outcomes',
            gradient: 'from-indigo-600 to-purple-600',
            icon: <Users className="w-6 h-6 text-white" />,
          },
        ].map((card, idx) => (
          <Link
            key={idx}
            to={card.to}
            className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
              {card.icon}
            </div>
            <h3 className="text-sm font-black text-[#071A33] mb-1.5 group-hover:text-blue-600 transition-colors">{card.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
            <div className="flex items-center gap-1.5 mt-4 text-xs font-bold text-blue-600">
              <span>View Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
