import React from 'react';
import { useApp } from '../../context/AppContext';
import { GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export const TraineeSkillsPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  const radarData = selectedTrainee.skills.map(s => ({
    subject: s.skill,
    current: s.level,
    required: s.required ? 85 : 70
  }));

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-gradient-to-r from-teal-900 via-gov-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-teal-800 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-4 h-4 text-teal-300" />
            <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest">Candidate Competencies</span>
          </div>
          <h1 className="text-2xl font-bold text-white">My Skills & Certified Competencies</h1>
          <p className="text-xs text-teal-200/80 mt-1">Verified skill levels and industry benchmark comparisons for {selectedTrainee.name}</p>
        </div>
        <span className="text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30 px-3 py-1.5 rounded-xl">
          Assessment Score: {selectedTrainee.assessmentScore}%
        </span>
      </div>

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
