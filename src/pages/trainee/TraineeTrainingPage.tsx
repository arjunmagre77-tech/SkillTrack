import React from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, CheckCircle2, Award, Clock } from 'lucide-react';

export const TraineeTrainingPage: React.FC = () => {
  const { programs, selectedTrainee, showToast } = useApp();

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-950 via-gov-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-amber-800 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">Skill Courses</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Recommended Training Programs</h1>
          <p className="text-xs text-amber-200/80 mt-1">NSDC aligned modules matching candidate background & regional employer demand</p>
        </div>
      </div>

      {/* Enrolled Course */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
          Current Enrolled / Completed Course
        </span>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-slate-100 pt-3">
          <div>
            <h2 className="text-base font-extrabold text-gov-900">{selectedTrainee.programName}</h2>
            <p className="text-xs text-slate-500 mt-0.5">Provider: {selectedTrainee.providerName} • Cohort: {selectedTrainee.cohort}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> {selectedTrainee.certificationStatus}
            </span>
            <span className="text-xs font-extrabold bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200">
              Score: {selectedTrainee.assessmentScore}%
            </span>
          </div>
        </div>
      </div>

      {/* Available Programs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map(p => {
          const placementRate = Math.round((p.employedCount / (p.certifiedCount || 1)) * 100);
          return (
            <div key={p.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-600 font-mono">{p.id}</span>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">{p.category}</span>
              </div>
              <h3 className="text-sm font-bold text-gov-900">{p.title}</h3>
              <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {p.durationWeeks} Weeks</span>
                <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-amber-500" /> {p.totalTrained.toLocaleString()} Trained</span>
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-700">Top Skills Taught:</span> {p.topSkillsTaught.join(', ')}
              </div>
              <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                <span className="text-xs font-extrabold text-emerald-700">{placementRate}% Placement Rate</span>
                <button
                  onClick={() => showToast(`Requested interest for ${p.title}!`, 'info')}
                  className="px-3 py-1.5 bg-gov-900 hover:bg-gov-800 text-teal-300 font-bold text-xs rounded-lg transition cursor-pointer"
                >
                  Apply Course
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
