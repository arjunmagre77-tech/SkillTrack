import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Check, Calendar } from 'lucide-react';

export const TraineeRoadmapPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-950 via-gov-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-cyan-800 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Compass className="w-4 h-4 text-cyan-300" />
            <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest">Longitudinal Career Path</span>
          </div>
          <h1 className="text-2xl font-bold text-white">My Career Roadmap & Milestones</h1>
          <p className="text-xs text-cyan-200/80 mt-1">Multi-year milestone tracker from skilling to 12-month post-placement audit</p>
        </div>
        <span className="text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1.5 rounded-xl">
          Cohort: {selectedTrainee.cohort}
        </span>
      </div>

      {/* Timeline Steps */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Calendar className="w-4 h-4 text-cyan-600" />
          <span>Longitudinal Outcome Progression</span>
        </h2>

        <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 pl-8">
          {selectedTrainee.timeline.map((step, idx) => (
            <div key={step.id} className="relative group">
              <div className={`absolute -left-10 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow ${
                step.status === 'completed' ? 'bg-emerald-500 text-white' :
                step.status === 'in-progress' ? 'bg-cyan-600 text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {step.status === 'completed' ? <Check className="w-4 h-4" /> : idx + 1}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gov-900">{step.stage}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    step.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                    step.status === 'in-progress' ? 'bg-cyan-100 text-cyan-800' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {step.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono">Target Date: {step.date || 'TBD'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
