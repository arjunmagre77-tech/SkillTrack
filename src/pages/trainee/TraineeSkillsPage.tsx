import React from 'react';
import { useApp } from '../../context/AppContext';
import { GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';

export const TraineeSkillsPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  const radarData = selectedTrainee.skills.map(s => ({
    subject: s.skill,
    current: s.level,
    required: s.required ? 85 : 70
  }));

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      <TraineeHeaderBanner
        tag="CANDIDATE COMPETENCIES"
        tagIcon={<GraduationCap className="w-4 h-4" />}
        title="My Skills & Certified Competencies"
        subtitle={`Verified skill levels and industry benchmark comparisons for ${selectedTrainee.name}.`}
        illustration={
          <div className="hidden md:flex items-center justify-end shrink-0 select-none">
            <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-28">
              <circle cx="110" cy="60" r="50" fill="#E0F0FE" fillOpacity="0.85" />
              <polygon points="90,20 160,48 90,76 20,48" fill="#1A73E8" />
              <polygon points="90,20 160,48 90,48 20,48" fill="#2A7EF0" fillOpacity="0.35" />
              <circle cx="90" cy="48" r="4" fill="#0C4A9E" />
              <path d="M 90 50 Q 68 56 64 72" stroke="#0C4A9E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <rect x="60" y="72" width="8" height="12" rx="3" fill="#0C4A9E" />
              <path d="M 62 50 L 62 68 C 62 78 118 78 118 68 L 118 50" stroke="#0F52BA" strokeWidth="2" fill="none" />
              <rect x="78" y="78" width="24" height="5" rx="2.5" fill="#93C5FD" />
              <rect x="82" y="86" width="16" height="5" rx="2.5" fill="#BFDBFE" />
            </svg>
          </div>
        }
        rightAddon={
          <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-[#DBEAFE] px-4 py-3 shadow-xs text-right">
            <span className="text-[11px] font-semibold text-[#64748B] block">Assessment Score</span>
            <span className="text-2xl font-black text-[#1A73E8] tracking-tight block">{selectedTrainee.assessmentScore}%</span>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Radar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Skill Radar Chart (Current vs Industry Target)</span>
            </h2>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#334155' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9 }} />
                <Radar name="Current" dataKey="current" stroke="#0d9488" fill="#0d9488" fillOpacity={0.4} />
                <Radar name="Required" dataKey="required" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill Progress Bars List */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-extrabold text-gov-900 border-b border-slate-100 pb-3">
            Verified Technical Skills Matrix
          </h2>
          <div className="space-y-4 pt-2">
            {selectedTrainee.skills.map((s, idx) => (
              <div key={idx} className="space-y-1.5 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    {s.skill}
                  </span>
                  <span className="font-mono font-bold text-teal-700">{s.level} / 100</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="h-2.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500" 
                    style={{ width: `${s.level}%` }} 
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>Certified via {selectedTrainee.programName.split(' ')[0]}</span>
                  <span>Target: 80%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
