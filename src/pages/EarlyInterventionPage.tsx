import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Sparkles } from 'lucide-react';

export const EarlyInterventionPage: React.FC = () => {
  const { trainees, addIntervention, setSelectedTraineeId } = useApp();
  const navigate = useNavigate();

  const atRiskTrainees = trainees.filter(t => t.earlyWarning.isAtRisk);

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-gov-900">Predictive Early-Warning & Intervention System</h1>
            <span className="text-xs font-semibold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded border border-amber-200">
              INV-16 • Proactive Mentorship
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            AI-assisted early-warning indicators identifying candidates who require academic, remedial or career support.
          </p>
        </div>

        <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 max-w-sm">
          <strong>Guideline Notice:</strong> Early-warning flags represent support indicators, not definitive predictions. Human review is mandatory.
        </div>
      </div>

      {/* AT-RISK TRAINEES GRID */}
      <div className="space-y-4">
        <h2 className="text-sm font-extrabold text-gov-900">Candidates Recommended for Support ({atRiskTrainees.length})</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {atRiskTrainees.map(t => (
            <div key={t.id} className="bg-white p-6 rounded-2xl border border-amber-200 bg-amber-50/10 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gov-900">{t.name}</h3>
                    <p className="text-xs text-slate-500">{t.programName} • {t.district}</p>
                  </div>
                </div>

                <span className="text-xs font-bold bg-amber-500 text-white px-2.5 py-1 rounded-full">
                  Support Required
                </span>
              </div>

              {/* Signals */}
              <div className="space-y-1.5 text-xs">
                <span className="font-bold text-slate-700 block">Early-Warning Risk Signals:</span>
                <ul className="space-y-1">
                  {t.earlyWarning.indicators.map((ind, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-amber-900">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendation */}
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-xs space-y-1">
                <span className="font-bold text-purple-900 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>AI Recommended Intervention:</span>
                </span>
                <p className="text-purple-800 font-medium">{t.earlyWarning.recommendedIntervention}</p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    setSelectedTraineeId(t.id);
                    navigate('/trainee-dashboard');
                  }}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 underline"
                >
                  View Candidate Outcome Profile →
                </button>

                <button
                  onClick={() => {
                    addIntervention({
                      traineeId: t.id,
                      traineeName: t.name,
                      type: 'Remedial Training',
                      reason: t.earlyWarning.recommendedIntervention,
                      status: 'Active',
                      assignedTo: 'District Placement Counselor'
                    });
                  }}
                  className="px-3 py-1.5 bg-gov-900 hover:bg-gov-800 text-white text-xs font-bold rounded-lg transition cursor-pointer"
                >
                  Assign Counseling Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
