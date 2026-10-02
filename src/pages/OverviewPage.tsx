import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';

// Shared page header component used across Government intelligence pages
export const GovPageHeader: React.FC<{
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle: string;
  jurisdiction?: string;
}> = ({ icon, label, title, subtitle, jurisdiction = 'Maharashtra (State Level)' }) => (
  <div className="relative bg-gradient-to-r from-[#e8f0fe] via-[#dce8fc] to-[#c8dbfa] rounded-2xl p-6 mb-6 overflow-hidden border border-blue-100 shadow-sm">
    {/* Decorative watermark icon */}
    <div className="absolute right-6 bottom-0 opacity-10 pointer-events-none">
      <GraduationCap className="w-40 h-40 text-blue-800" />
    </div>
    <div className="relative z-10 flex items-start justify-between gap-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/70 flex items-center justify-center text-[#1565C0] shadow-sm">
            {icon}
          </div>
          <span className="text-[11px] font-bold text-[#1565C0] uppercase tracking-widest">
            {label || 'Government & Policy Intelligence'}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#0D1B3E] leading-tight">{title}</h1>
        <p className="text-sm text-[#3a5a8a] font-medium max-w-2xl">{subtitle}</p>
      </div>
      <div className="shrink-0 hidden md:flex items-center gap-2 bg-white/70 border border-blue-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#0D1B3E] shadow-sm">
        <MapPin className="w-3.5 h-3.5 text-[#1565C0]" />
        <span className="text-slate-500 font-medium">Active Jurisdiction:</span>
        <span className="font-bold">{jurisdiction}</span>
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
    { label: 'Self-Employed', value: '18.0%', sub: 'Entrepreneurs & Freelancers', icon: <Users className="w-5 h-5" />, color: 'blue', borderColor: 'border-l-blue-400' },
    { label: 'Apprenticeships', value: '8.0%', sub: 'Under Industry Training', icon: <GraduationCap className="w-5 h-5" />, color: 'teal', borderColor: 'border-l-teal-500' },
    { label: 'Avg Starting Salary', value: '₹24,500', sub: 'Per Month', icon: <TrendingUp className="w-5 h-5" />, color: 'amber', borderColor: 'border-l-amber-400' },
    { label: 'Skill-Gap Reduction', value: '32.0%', sub: 'Demand-Supply Match', icon: <Target className="w-5 h-5" />, color: 'rose', borderColor: 'border-l-rose-500' },
  ];

  const journeySteps = [
    { title: 'Enrollment & Profiling', desc: 'Baseline skill assessments, socio-demographic tags & aspiration mapping.', icon: <Users className="w-4 h-4 text-blue-600" /> },
    { title: 'Training & Attendance', desc: 'Biometric tracking, curriculum milestones, and hands-on lab audits.', icon: <BookOpen className="w-4 h-4 text-indigo-600" /> },
    { title: 'Certification Assessment', desc: 'Third-party assessment & tamper-proof digital certification credentialing.', icon: <Award className="w-4 h-4 text-emerald-600" /> },
    { title: 'Placement & Job Offers', desc: 'Automated job matching, offer letters, and wage benchmarking.', icon: <Briefcase className="w-4 h-4 text-purple-600" /> },
    { title: 'EPFO Verification', desc: 'Automated provident fund cross-verification to validate genuine payroll onboarding.', icon: <CheckCircle2 className="w-4 h-4 text-teal-600" /> },
    { title: '6-Month Retention', desc: 'Milestone checks, employer feedback, wage escalation & stability indicators.', icon: <RefreshCw className="w-4 h-4 text-amber-600" /> },
    { title: 'Career Progression', desc: '12-month follow-up, upskilling recommendations & wage growth tracking.', icon: <TrendingUp className="w-4 h-4 text-rose-600" /> },
  ];

  const iconColorMap: Record<string, string> = {
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-emerald-600 bg-emerald-50',
    purple: 'text-purple-600 bg-purple-50',
    amber: 'text-amber-600 bg-amber-50',
    teal: 'text-teal-600 bg-teal-50',
    rose: 'text-rose-600 bg-rose-50',
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1565C0] via-[#1976D2] to-[#0D47A1] text-white p-8 md:p-10 shadow-xl">
        {/* Decorative blobs */}
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute right-20 top-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute right-8 bottom-0 opacity-10 pointer-events-none">
          <BarChart2 className="w-48 h-48 text-white" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            <BarChart2 className="w-3.5 h-3.5" />
            Government & Policy Intelligence Hub
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              SkillTrack Government Dashboard
            </h1>
            <p className="text-base font-semibold text-blue-100">
              “From Training to Sustainable Employment”
            </p>
          </div>

          <p className="text-sm text-blue-100 leading-relaxed max-w-2xl">
            Evaluate skilling outcomes across providers, districts, and sectors. Monitor employment conversion rates, 6-month retention, and wage growth with real-time AI anomaly detection.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/dashboard/government/program-impact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1565C0] font-bold text-sm rounded-xl shadow-lg hover:bg-blue-50 transition active:scale-95 cursor-pointer"
            >
              <BarChart2 className="w-4 h-4" />
              Program Impact Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/dashboard/government/district-intelligence"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 border border-white/30 text-white font-semibold text-sm rounded-xl hover:bg-white/25 transition active:scale-95 cursor-pointer backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4" />
              District Intelligence
            </Link>

            <button
              onClick={loadDemoData}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md transition active:scale-95 cursor-pointer"
            >
              <Database className="w-4 h-4" />
              Reload State Dataset
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpiCards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl border border-slate-200 border-l-4 ${card.borderColor} p-5 shadow-sm hover:shadow-md transition space-y-2`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{card.label}</span>
              <div className={`p-2 rounded-xl ${iconColorMap[card.color]}`}>
                {card.icon}
              </div>
            </div>
            <div className="text-2xl font-black text-[#0D1B3E] tracking-tight">{card.value}</div>
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
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-[#0D1B3E]">The Longitudinal Trainee Journey</h2>
            <p className="text-xs text-slate-500">SkillTrack extends beyond course completion into 12-month post-placement outcomes</p>
          </div>
          <span className="text-xs bg-blue-50 text-blue-800 px-3 py-1 rounded-full font-bold border border-blue-200">
            End-to-End Traceability
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
          {journeySteps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition group">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-xs group-hover:bg-blue-50 transition">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0D1B3E] group-hover:text-blue-700 transition">{step.title}</h3>
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
            color: 'from-blue-600 to-blue-700',
            icon: <BarChart2 className="w-6 h-6 text-white" />,
          },
          {
            title: 'Training Provider Analytics',
            desc: 'Comparative neural performance indicators for institutional quality audit across providers.',
            to: '/dashboard/government/training-providers',
            color: 'from-emerald-600 to-teal-600',
            icon: <Award className="w-6 h-6 text-white" />,
          },
          {
            title: 'Trainees Outcome Directory',
            desc: 'Longitudinal candidate repository with multi-source verified outcome records.',
            to: '/dashboard/government/trainee-outcomes',
            color: 'from-purple-600 to-indigo-600',
            icon: <Users className="w-6 h-6 text-white" />,
          },
        ].map((card, idx) => (
          <Link
            key={idx}
            to={card.to}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition group cursor-pointer"
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
              {card.icon}
            </div>
            <h3 className="text-sm font-extrabold text-[#0D1B3E] mb-1 group-hover:text-[#1565C0] transition">{card.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
            <div className="flex items-center gap-1 mt-3 text-xs font-bold text-[#1565C0]">
              <span>View Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
