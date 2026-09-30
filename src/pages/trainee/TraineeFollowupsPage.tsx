import React from 'react';
import { useApp } from '../../context/AppContext';
import { Send, MessageSquare } from 'lucide-react';

export const TraineeFollowupsPage: React.FC = () => {
  const { selectedTrainee, triggerFollowup } = useApp();

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-950 via-gov-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-rose-800 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Send className="w-4 h-4 text-rose-300" />
            <span className="text-[10px] font-bold text-rose-300 uppercase tracking-widest">Touchpoint Check-ins</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Follow-ups & Retention Audits</h1>
          <p className="text-xs text-rose-200/80 mt-1">Longitudinal touchpoints (1M, 3M, 6M, 12M) scheduled for candidate {selectedTrainee.name}</p>
        </div>
      </div>

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
