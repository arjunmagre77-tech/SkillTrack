import React from 'react';
import { useApp } from '../../context/AppContext';
import { Target, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';

export const TraineeSkillGapPage: React.FC = () => {
  const { selectedTrainee, showToast } = useApp();

  const prioritySkillGap = selectedTrainee.skills.reduce((prev, curr) => 
    curr.level < prev.level ? curr : prev, selectedTrainee.skills[0] || { skill: 'Power BI', level: 40 });

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

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gap Summary Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <AlertCircle className="w-4 h-4 text-purple-600" />
            <span>Priority Skill Gap Identified</span>
          </h2>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-2">
            <span className="text-xs font-bold text-purple-900 block">{prioritySkillGap.skill}</span>
            <div className="flex justify-between text-xs text-purple-800 font-medium">
              <span>Current Mastery: {prioritySkillGap.level}%</span>
              <span>Target Needed: 85%</span>
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${prioritySkillGap.level}%` }} />
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI has detected a {85 - prioritySkillGap.level}% deficiency in {prioritySkillGap.skill} compared to active industry requirements for <strong>{selectedTrainee.targetRole}</strong>.
          </p>
        </div>

        {/* AI Micro-Learning Intervention */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Recommended Micro-Upskilling Courses</span>
            </h2>
            <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
              AI Personalized
            </span>
          </div>

          <div className="space-y-3">
            {[
              { title: `${prioritySkillGap.skill} Masterclass & Real-World Capstone`, duration: '2 Weeks', impact: '+35% Skill Level', provider: 'NSDC Digital Academy' },
              { title: 'Industry Workplace Readiness & Problem Solving', duration: '1 Week', impact: '+15% Placement Chance', provider: 'State Skill Mission' },
              { title: 'Advanced Technical Tooling & Hands-on Lab', duration: '3 Weeks', impact: '+25% Wage Boost', provider: 'MSDC Pune Hub' }
            ].map((course, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <h3 className="text-xs font-bold text-gov-900">{course.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {course.provider} • Duration: {course.duration} • Expected Outcome: <strong className="text-emerald-700">{course.impact}</strong>
                  </p>
                </div>
                <button
                  onClick={() => showToast(`Enrolled in ${course.title}!`, 'success')}
                  className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-lg transition cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
