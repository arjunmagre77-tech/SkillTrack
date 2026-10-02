import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckSquare, ShieldCheck } from 'lucide-react';

export const TraineeApplicationsPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-950 via-gov-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-teal-800 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CheckSquare className="w-4 h-4 text-teal-300" />
            <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest">Application Status</span>
          </div>
          <h1 className="text-2xl font-bold text-white">My Job Applications</h1>
          <p className="text-xs text-teal-200/80 mt-1">Multi-source verification and employer payroll status tracking</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-extrabold text-gov-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Active Placement Verification Record</span>
        </h2>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h3 className="text-sm font-bold text-gov-900">{selectedTrainee.currentRole || 'Junior Associate'}</h3>
              <p className="text-xs text-slate-500">{selectedTrainee.employerName || 'Trainee Placement Cell'}</p>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              selectedTrainee.verification.status === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}>
              {selectedTrainee.verification.status}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <span className="text-slate-400 block text-[10px]">Trainee Self-Reported</span>
              <strong className="text-slate-800">{selectedTrainee.verification.traineeReported.employer}</strong>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <span className="text-slate-400 block text-[10px]">HR Payroll Verification</span>
              <strong className="text-emerald-700">{selectedTrainee.verification.employerVerified.notes}</strong>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <span className="text-slate-400 block text-[10px]">Provider Confirmation</span>
              <strong className="text-blue-700">Confirmed on {selectedTrainee.verification.providerConfirmed.confirmedDate}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
