import React from 'react';
import { useApp } from '../../context/AppContext';
import { GraduationCap, Zap, Layers } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';

export const TraineeSkillsPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  const radarData = [
    { subject: 'Python', current: 85, target: 90 },
    { subject: 'SQL', current: 95, target: 80 },
    { subject: 'Excel', current: 90, target: 75 },
    { subject: 'Power BI', current: 40, target: 85 },
    { subject: 'Statistics', current: 60, target: 70 },
  ];

  const skillMatrix = [
    { name: 'Python', score: 85, badge: 'Certified via Advanced', color: 'from-emerald-500 to-teal-600', icon: '🐍' },
    { name: 'SQL', score: 95, badge: 'Certified via Advanced', color: 'from-emerald-500 to-teal-600', icon: '🗄️' },
    { name: 'Excel', score: 90, badge: 'Certified via Advanced', color: 'from-emerald-500 to-teal-600', icon: '📊' },
    { name: 'Power BI', score: 40, badge: 'Certified via Advanced', color: 'from-cyan-500 to-blue-500', icon: '📈' },
    { name: 'Statistics', score: 60, badge: 'Certified via Advanced', color: 'from-purple-500 to-indigo-500', icon: '📐' },
  ];

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

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card: Skill Radar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xs font-black uppercase text-slate-800 tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs">🌐</span>
              <span>Skill Radar Chart (Current vs Industry Target)</span>
            </h2>
            <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-600">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> My Skills</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Industry Target</span>
            </div>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9 }} />
                <Radar name="My Skills" dataKey="current" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.5} />
                <Radar name="Industry Target" dataKey="target" stroke="#a855f7" fill="#c084fc" fillOpacity={0.15} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Card: Verified Technical Skills Matrix */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xs font-black uppercase text-slate-800 tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Verified Technical Skills Matrix</span>
            </h2>
          </div>

          <div className="space-y-4 pt-1">
            {skillMatrix.map((s) => (
              <div key={s.name} className="p-3.5 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg font-bold shrink-0">
                  <Layers className="w-5 h-5 text-purple-600" />
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-extrabold text-slate-900">{s.name}</span>
                    <span className="font-mono font-black text-blue-700 text-xs">{s.score} / 100</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${s.color}`} 
                      style={{ width: `${s.score}%` }} 
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    {s.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
