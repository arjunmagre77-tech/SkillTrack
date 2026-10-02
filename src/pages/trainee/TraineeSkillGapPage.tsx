import React from 'react';
import { useApp } from '../../context/AppContext';
import { Target, Sparkles, BookOpen, AlertCircle } from 'lucide-react';

export const TraineeSkillGapPage: React.FC = () => {
  const { selectedTrainee, showToast } = useApp();

  const prioritySkillGap = selectedTrainee.skills.reduce((prev, curr) => 
    curr.level < prev.level ? curr : prev, selectedTrainee.skills[0] || { skill: 'Power BI', level: 40 });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 via-gov-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-purple-800 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4 text-purple-300" />
            <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">AI Skill Intelligence</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Skill Gap Analysis & Recommendations</h1>
          <p className="text-xs text-purple-200/80 mt-1">Target Role Alignment: <strong className="text-white">{selectedTrainee.targetRole}</strong></p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-right">
          <span className="text-[10px] text-purple-200 block">Relevance Score</span>
          <span className="text-xl font-extrabold text-teal-300">{selectedTrainee.relevancePercentage}%</span>
        </div>
      </div>

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
