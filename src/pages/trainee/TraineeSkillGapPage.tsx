import React from 'react';
import { useApp } from '../../context/AppContext';
import { Target, Sparkles, BookOpen, AlertCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';

export const TraineeSkillGapPage: React.FC = () => {
  const { selectedTrainee, showToast } = useApp();

  const courses = [
    {
      title: 'Power BI Masterclass & Real-World Capstone',
      provider: 'NSDC Digital Academy',
      duration: '2 Weeks',
      outcome: '+35% Skill Level',
    },
    {
      title: 'Industry Workplace Readiness & Problem Solving',
      provider: 'State Skill Mission',
      duration: '1 Week',
      outcome: '+15% Placement Chance',
    },
    {
      title: 'Advanced Technical Tooling & Hands-on Lab',
      provider: 'MSDC Pune Hub',
      duration: '3 Weeks',
      outcome: '+25% Wage Boost',
    },
  ];

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      <TraineeHeaderBanner
        tag="AI SKILL INTELLIGENCE"
        tagIcon={<Target className="w-4 h-4" />}
        title="Skill Gap Analysis & Recommendations"
        subtitle={`Target Role Alignment: ${selectedTrainee.targetRole}`}
        illustration={
          <div className="hidden md:flex items-center justify-end shrink-0 select-none">
            <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-28">
              <circle cx="110" cy="60" r="50" fill="#E0F0FE" fillOpacity="0.85" />
              <circle cx="100" cy="58" r="32" fill="none" stroke="#1A73E8" strokeWidth="3" />
              <circle cx="100" cy="58" r="22" fill="none" stroke="#60A5FA" strokeWidth="2" />
              <circle cx="100" cy="58" r="12" fill="none" stroke="#93C5FD" strokeWidth="1.5" />
              <circle cx="100" cy="58" r="5" fill="#1A73E8" />
              <path d="M 100 26 L 100 32" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" />
              <path d="M 100 84 L 100 90" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" />
              <path d="M 68 58 L 74 58" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" />
              <path d="M 126 58 L 132 58" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        }
        rightAddon={
          <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-[#DBEAFE] px-4 py-3 shadow-xs text-right">
            <span className="text-[11px] font-semibold text-[#64748B] block">Relevance Score</span>
            <span className="text-2xl font-black text-[#1A73E8] tracking-tight block">{selectedTrainee.relevancePercentage}%</span>
          </div>
        }
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Card: Priority Skill Gap Identified */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xs font-black uppercase text-blue-900 tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <span>Priority Skill Gap Identified</span>
            </h2>
          </div>

          {/* Skill Box */}
          <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-3">
            <h3 className="text-sm font-black text-slate-900">Power BI</h3>
            <div className="flex justify-between text-xs font-semibold text-slate-600">
              <span>Current Mastery: <strong className="text-blue-700">40%</strong></span>
              <span>Target Needed: <strong className="text-slate-900">85%</strong></span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div className="bg-blue-600 h-2.5 rounded-full w-[40%]" />
            </div>
          </div>

          {/* AI Alert Callout Box */}
          <div className="p-4 bg-blue-50/40 rounded-2xl border border-blue-100/80 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600 leading-relaxed">
              AI has detected a <strong className="text-slate-900">45% deficiency</strong> in Power BI compared to active industry requirements for <strong className="text-slate-900">Data Analyst</strong>.
            </p>
          </div>
        </div>

        {/* Right Card: Recommended Micro-Upskilling Courses */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xs font-black uppercase text-blue-900 tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Recommended Micro-Upskilling Courses</span>
            </h2>
            <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200/60">
              AI Personalized
            </span>
          </div>

          <div className="space-y-3">
            {courses.map((c) => (
              <div key={c.title} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition hover:border-blue-300">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <h3 className="text-xs font-extrabold text-slate-900">{c.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {c.provider} • Duration: {c.duration} • Expected Outcome: <strong className="text-emerald-600">{c.outcome}</strong>
                  </p>
                </div>

                <button
                  onClick={() => showToast(`Enrolled in ${c.title}!`, 'success')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Right Watermark */}
      <div className="absolute right-6 bottom-4 text-right pointer-events-none opacity-40 select-none">
        <span className="font-serif italic text-blue-600 text-lg font-bold block transform -rotate-2">
          Better Skills Brighter Future
        </span>
      </div>
    </div>
  );
};
