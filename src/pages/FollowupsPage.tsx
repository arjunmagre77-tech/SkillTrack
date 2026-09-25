import React from 'react';
import { useApp } from '../context/AppContext';

export const FollowupsPage: React.FC = () => {
  const { trainees, triggerFollowup, showToast } = useApp();

  const allFollowups = trainees.flatMap(t => t.followUps.map(f => ({ ...f, traineeName: t.name, district: t.district })));

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-gov-900">Automated Longitudinal Follow-up Engine</h1>
          <p className="text-xs text-slate-500">Scheduled 1M, 3M, 6M & 12M post-placement candidate touchpoints (INV-04).</p>
        </div>

        <button
          onClick={() => showToast('Dispatched automated batch SMS & WhatsApp touchpoints for all scheduled 6M check-ins!', 'success')}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow transition cursor-pointer"
        >
          Dispatch Scheduled Batch Touchpoints
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="p-3">Candidate</th>
              <th className="p-3">District</th>
              <th className="p-3">Milestone</th>
              <th className="p-3">Due Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Channel Used</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {allFollowups.slice(0, 40).map((f, i) => (
              <tr key={i} className="hover:bg-slate-50 transition">
                <td className="p-3 font-bold text-gov-900">{f.traineeName}</td>
                <td className="p-3 text-slate-600">{f.district}</td>
                <td className="p-3 font-semibold text-slate-800">{f.milestone} Check</td>
                <td className="p-3 text-slate-500">{f.dueDate}</td>
                <td className="p-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    f.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {f.status}
                  </span>
                </td>
                <td className="p-3 text-slate-600 font-medium">{f.lastContactChannel || 'Scheduled'}</td>
                <td className="p-3">
                  <button
                    onClick={() => triggerFollowup(f.traineeId, f.milestone, 'WhatsApp')}
                    className="px-2.5 py-1 bg-gov-900 text-teal-300 font-bold rounded text-[11px] hover:bg-gov-800 transition cursor-pointer"
                  >
                    Send Touchpoint
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
