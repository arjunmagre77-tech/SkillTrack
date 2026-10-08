import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, ArrowRight, Compass, Calendar, Flag, Award, MapPin } from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';

export const TraineeRoadmapPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  const completedMilestones = [
    { title: 'Enrolled', date: '15 Nov 2025', icon: '📝' },
    { title: 'Training Started', date: '20 Nov 2025', icon: '🚀' },
    { title: 'Training Completed', date: '10 Mar 2026', icon: '🎓' },
    { title: 'Certified', date: '18 Mar 2026', icon: '🏅' },
    { title: 'Interviewed', date: '02 Apr 2026', icon: '💼' },
  ];

  const upcomingMilestones = [
    { title: 'Employment Start', date: '12 Apr 2026' },
    { title: '6-Month Retention Check', date: '12 Oct 2026' },
    { title: '12-Month Post-Placement Audit', date: '12 Apr 2027' },
  ];

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

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card: Longitudinal Outcome Progression */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xs font-black uppercase text-slate-800 tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Longitudinal Outcome Progression</span>
            </h2>
          </div>

          <div className="space-y-3 pt-1">
            {completedMilestones.map((m) => (
              <div key={m.title} className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{m.title}</h3>
                    <p className="text-[10px] text-slate-400 font-medium">Target Date: {m.date}</p>
                  </div>
                </div>

                <span className="text-[10px] font-black tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/60 uppercase">
                  COMPLETED
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Upcoming Milestones & Path Illustration */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xs font-black uppercase text-slate-800 tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Upcoming Milestones</span>
              </h2>
            </div>

            <div className="space-y-3">
              {upcomingMilestones.map((u) => (
                <div key={u.title} className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-blue-300" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-900">{u.title}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 font-mono">
                    <span>{u.date}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Winding Road Canvas Graphic Box */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 p-6 flex flex-col justify-between min-h-[170px]">
            <div className="relative z-10 max-w-[200px]">
              <h3 className="text-base font-black text-slate-900 tracking-tight leading-tight">
                Your journey builds a stronger tomorrow
              </h3>
            </div>

            {/* SVG Winding Road Path Graphic */}
            <svg className="absolute right-0 bottom-0 w-64 h-36 opacity-90 pointer-events-none" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 140 Q 90 140 120 90 T 220 50 T 290 20" stroke="#93C5FD" strokeWidth="24" strokeLinecap="round" opacity="0.6"/>
              <path d="M 10 140 Q 90 140 120 90 T 220 50 T 290 20" stroke="#3B82F6" strokeWidth="12" strokeLinecap="round"/>
              <path d="M 10 140 Q 90 140 120 90 T 220 50 T 290 20" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round"/>
            </svg>

            {/* Floating Location Marker Pins */}
            <div className="absolute right-28 top-8 bg-amber-500 text-white p-1.5 rounded-full shadow-lg shadow-amber-500/30 animate-bounce">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="absolute right-12 bottom-6 bg-purple-600 text-white p-1.5 rounded-full shadow-lg shadow-purple-500/30">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="absolute right-4 top-2 bg-indigo-600 text-white p-1.5 rounded-full shadow-lg shadow-indigo-500/30">
              <Flag className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
