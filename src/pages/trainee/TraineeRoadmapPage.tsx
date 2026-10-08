import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Check, Calendar, Flag } from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';

export const TraineeRoadmapPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <TraineeHeaderBanner
        tag="LONGITUDINAL CAREER PATH"
        tagIcon={<Compass className="w-4 h-4" />}
        title="My Career Roadmap & Milestones"
        subtitle={`Multi-year milestone tracker from skilling to 12-month post-placement audit for ${selectedTrainee.name}.`}
        rightAddon={
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs border border-blue-200/80 px-4 py-2 rounded-xl shadow-xs">
            <Flag className="w-4 h-4 text-[#1A73E8]" />
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Cohort</p>
              <p className="text-xs font-bold text-[#1A73E8]">{selectedTrainee.cohort}</p>
            </div>
          </div>
        }
        illustration={
          <div className="hidden md:flex items-center justify-end shrink-0 select-none">
            <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-28">
              <circle cx="110" cy="60" r="50" fill="#E0F0FE" fillOpacity="0.85" />
              {/* Roadmap path */}
              <path d="M 30 90 Q 70 70 85 45 T 150 30" stroke="#1A73E8" strokeWidth="4" strokeDasharray="6 4" fill="none" />
              {/* Waypoints */}
              <circle cx="30" cy="90" r="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="85" cy="45" r="7" fill="#1A73E8" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="150" cy="30" r="9" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
              <path d="M 150 21 L 150 12 L 162 16.5 Z" fill="#F59E0B" />
            </svg>
          </div>
        }
      />

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
