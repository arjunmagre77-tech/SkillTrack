import React from 'react';
import { useApp } from '../../context/AppContext';
import { Send, MessageSquare, Bell } from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';

export const TraineeFollowupsPage: React.FC = () => {
  const { selectedTrainee, triggerFollowup } = useApp();

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <TraineeHeaderBanner
        tag="TOUCHPOINT CHECK-INS"
        tagIcon={<Bell className="w-4 h-4" />}
        title="Follow-ups & Retention Audits"
        subtitle={`Longitudinal touchpoints (1M, 3M, 6M, 12M) scheduled for candidate ${selectedTrainee.name}.`}
        illustration={
          <div className="hidden md:flex items-center justify-end shrink-0 select-none">
            <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-28">
              <circle cx="90" cy="60" r="46" fill="#E0F0FE" fillOpacity="0.85" />
              {/* Message bubbles */}
              <rect x="36" y="32" width="70" height="42" rx="10" fill="#1A73E8" />
              <path d="M 50 74 L 44 82 L 60 74 Z" fill="#1A73E8" />
              <rect x="48" y="44" width="36" height="4" rx="2" fill="#FFFFFF" />
              <rect x="48" y="52" width="46" height="4" rx="2" fill="#93C5FD" />
              {/* Checkmark bubble */}
              <circle cx="118" cy="68" r="18" fill="#10B981" stroke="#FFFFFF" strokeWidth="2.5" />
              <path d="M 111 68 L 116 73 L 125 64" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        }
      />

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-extrabold text-gov-900 border-b border-slate-100 pb-3">
          Scheduled Touchpoints Log
        </h2>

        <div className="space-y-3">
          {selectedTrainee.followUps.map(f => (
            <div key={f.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gov-900">{f.milestone} Check-in</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    f.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {f.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Due: {f.dueDate} {f.completedDate ? `• Completed on ${f.completedDate}` : ''}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => triggerFollowup(selectedTrainee.id, f.milestone, 'WhatsApp')}
                  className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send WhatsApp</span>
                </button>
                <button
                  onClick={() => triggerFollowup(selectedTrainee.id, f.milestone, 'SMS')}
                  className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send SMS</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
