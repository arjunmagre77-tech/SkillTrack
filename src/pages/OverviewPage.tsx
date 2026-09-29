import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Award, 
  Briefcase, 
  RefreshCw, 
  Target, 
  ShieldCheck, 
  Zap, 
  BarChart2, 
  Users,
  Database
} from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const { loadDemoData } = useApp();

  const journeySteps = [
    { title: 'Enrollment', icon: <Users className="w-5 h-5 text-blue-600" />, desc: 'Biometric & Aadhaar-linked candidate registration' },
    { title: 'Training', icon: <Target className="w-5 h-5 text-indigo-600" />, desc: 'NSDC aligned curriculum & attendance log' },
    { title: 'Certification', icon: <Award className="w-5 h-5 text-purple-600" />, desc: 'Third-party assessment & digital badge' },
    { title: 'Employment', icon: <Briefcase className="w-5 h-5 text-emerald-600" />, desc: 'Multi-source employer & payroll verification' },
    { title: 'Retention', icon: <RefreshCw className="w-5 h-5 text-teal-600" />, desc: '3M, 6M & 12M longitudinal check-ins' },
    { title: 'Wage Growth', icon: <TrendingUp className="w-5 h-5 text-amber-600" />, desc: 'Increment tracking & role advancement' },
    { title: 'Program Impact', icon: <BarChart2 className="w-5 h-5 text-rose-600" />, desc: 'Actionable policy & provider intelligence' }
  ];

  const innovations = [
    { num: '01', title: 'Digital Outcome Profile', desc: 'Persists beyond graduation to track lifetime career milestones' },
    { num: '02', title: 'Longitudinal Timeline', desc: 'Multi-year outcome milestones from 1M to 12M check-ins' },
    { num: '03', title: 'Multi-Source Verification', desc: 'Triangulates candidate, employer payroll & provider data' },
    { num: '04', title: 'Automated Follow-up Engine', desc: 'WhatsApp & SMS touchpoints to ensure continuous tracking' },
    { num: '05', title: 'AI Skill-Gap Engine', desc: 'Target role radar analysis with targeted intervention recommendations' },
    { num: '06', title: 'Skill-to-Job Relevance', desc: 'Measures alignment between training taught and job daily tasks' },
    { num: '07', title: 'Unemployment Analysis', desc: 'Diagnoses exact root causes when candidates fail to secure jobs' },
    { num: '08', title: 'Digital Outcome Passport', desc: 'Shareable QR-verified career credential card for employers' },
    { num: '09', title: 'Program Outcome Funnel', desc: 'Full conversion analytics across courses, districts & cohorts' },
    { num: '10', title: 'Retention & Wage Curve', desc: 'Tracks salary trajectory from starting ₹20k to ₹31k at 18 months' },
    { num: '11', title: 'Provider Analytics', desc: 'Neutral outcome indicators to assess training provider quality' },
    { num: '12', title: 'District Heatmap', desc: 'Regional skill gaps & local opportunity availability intelligence' },
    { num: '13', title: 'Public Value / ROI', desc: 'Calculates cost per certified and cost per sustained job outcome' },
    { num: '14', title: 'AI Anomaly Center', desc: 'Detects payroll disparities & placement clusters for data audit' },
    { num: '15', title: 'Consent & Privacy Center', desc: 'Granular consent matrix for candidates & role-based security' },
    { num: '16', title: 'Early Warning System', desc: 'Identifies at-risk candidates before dropout with support guidance' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gov-950 via-gov-900 to-slate-900 text-white p-8 md:p-12 shadow-xl border border-gov-800">
        <div className="absolute -right-12 -top-12 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Official Outcome Intelligence & Longitudinal Tracking Portal</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              SkillTrack
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-teal-300 tracking-wide">
              “From Training to Sustainable Employment”
            </p>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
            Track the complete journey from skilling to employment, identify persistent skill gaps, measure retention and turn fragmented outcome data into actionable program intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/trainee-dashboard"
              className="px-5 py-3 bg-teal-500 hover:bg-teal-600 text-gov-950 font-bold text-sm rounded-xl shadow-lg shadow-teal-500/20 transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Trainee Outcome Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/program-impact"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Program Impact Dashboard</span>
              <BarChart2 className="w-4 h-4 text-blue-400" />
            </Link>

            <button
              onClick={loadDemoData}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Database className="w-4 h-4 text-emerald-200" />
              <span>Reload Candidate Dataset</span>
            </button>
          </div>
        </div>
      </div>

      {/* LONGITUDINAL JOURNEY VISUALIZATION */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-gov-900">The Longitudinal Trainee Journey</h2>
            <p className="text-xs text-slate-500">SkillTrack extends beyond course completion into 12-month post-placement outcomes</p>
          </div>
          <span className="text-xs bg-slate-100 text-gov-800 px-3 py-1 rounded-full font-medium border border-slate-200">
            End-to-End Traceability
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
          {journeySteps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition group">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs group-hover:bg-teal-50 transition">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gov-900 group-hover:text-teal-700 transition">{step.title}</h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HIGH-LEVEL KPI STATS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Trained', value: '1,25,000', sub: 'Across 36 Districts', color: 'border-l-blue-600' },
          { label: 'Certified', value: '98,000', sub: '78.4% Certification Rate', color: 'border-l-indigo-600' },
          { label: 'Employed Outcome', value: '62.0%', sub: '77,500 Placed Trainees', color: 'border-l-emerald-600' },
          { label: '6-Month Retention', value: '71.0%', sub: 'Sustained Employment', color: 'border-l-teal-600' },
          { label: 'Self-Employed', value: '18.0%', sub: 'Micro-Entrepreneurs', color: 'border-l-purple-600' },
          { label: 'Apprenticeships', value: '8.0%', sub: 'On-Job Training', color: 'border-l-cyan-600' },
          { label: 'Avg Starting Salary', value: '₹24,500', sub: 'Per month starting', color: 'border-l-amber-600' },
          { label: 'Skill-Gap Reduction', value: '32.0%', sub: 'Target role alignment', color: 'border-l-rose-600' },
        ].map((stat, idx) => (
          <div key={idx} className={`bg-white p-5 rounded-xl border border-slate-200 border-l-4 ${stat.color} shadow-sm space-y-1`}>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
            <div className="text-2xl font-black text-gov-900">{stat.value}</div>
            <p className="text-[11px] text-slate-400 font-medium">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* HOW SKILLTRACK WORKS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gov-900">Multi-Source Outcome Verification</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Eliminates false placement reports by cross-verifying candidate self-reporting with employer payroll API simulations and training provider records.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gov-900">Automated Follow-Up Engine</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Schedules automated WhatsApp, SMS, and email check-ins at 1, 3, 6, and 12 months to monitor job retention, wage growth, and career promotions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gov-900">AI Skill-Gap & Intervention</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Compares candidate skill profiles against industry job market requirements, providing targeted micro-upskilling recommendations and early-warning alerts.
          </p>
        </div>
      </div>

      {/* CORE PLATFORM MODULES MATRIX */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-gov-900">16 Core Outcome Intelligence Modules</h2>
            <p className="text-xs text-slate-500">Integrated suite for end-to-end outcome tracking and policy intelligence</p>
          </div>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full border border-emerald-200">
            Active System Features
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {innovations.map((inv, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-teal-600 font-mono">MOD-{inv.num}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <h4 className="text-xs font-bold text-gov-900">{inv.title}</h4>
              <p className="text-[11px] text-slate-500 leading-snug">{inv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
