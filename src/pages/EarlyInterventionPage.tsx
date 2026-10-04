import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { 
  AlertTriangle, 
  Sparkles, 
  Info, 
  ChevronRight, 
  ChevronDown, 
  GraduationCap, 
  Users, 
  LineChart, 
  UserCheck, 
  Eye, 
  ShieldAlert
} from 'lucide-react';

export const EarlyInterventionPage: React.FC = () => {
  const { trainees, addIntervention, setSelectedTraineeId, anomalies } = useApp();
  const navigate = useNavigate();
  const selectedInv = 'INV-16';

  // Custom mock data for these 4 candidates matching the screenshot exactly
  const curatedCandidates = [
    {
      id: 'trainee-neha',
      name: 'Neha Joshi',
      program: 'Full Stack Web & Mobile Development',
      district: 'Chhatrapati Sambhajinagar',
      status: 'Support Required',
      statusColor: 'orange',
      avatarBg: 'bg-[#DBEAFE] text-[#1E40AF]',
      signals: [
        'High absenteeism in final module',
        'Scored < 60% on practical lab assessment',
        'Multiple failed interview callbacks'
      ],
      intervention: 'Remedial lab practicals + dedicated mentor counseling session'
    },
    {
      id: 'trainee-ananya',
      name: 'Ananya Pawar',
      program: 'Solar PV Systems & Renewable Tech',
      district: 'Solapur',
      status: 'Support Required',
      statusColor: 'orange',
      avatarBg: 'bg-[#F3E8FF] text-[#6B21A8]',
      signals: [
        'High absenteeism in final module',
        'Scored < 60% on practical lab assessment',
        'Multiple failed interview callbacks'
      ],
      intervention: 'Remedial lab practicals + dedicated mentor counseling session'
    },
    {
      id: 'trainee-sahil',
      name: 'Sahil Khan',
      program: 'Advanced Manufacturing',
      district: 'Pune',
      status: 'Monitor',
      statusColor: 'green',
      avatarBg: 'bg-[#DCFCE7] text-[#166534]',
      signals: [
        'Low attendance in theory sessions',
        'Frequent login issues on LMS',
        'Declining performance trend'
      ],
      intervention: 'Career guidance session + parental outreach'
    },
    {
      id: 'trainee-rohit',
      name: 'Rohit Kumar',
      program: 'IT Support & Networking',
      district: 'Nagpur',
      status: 'Monitor',
      statusColor: 'green',
      avatarBg: 'bg-[#FCE7F3] text-[#9D174D]',
      signals: [
        'Low practical assessments score',
        'Inconsistent attendance',
        'Lack of progress in soft skills'
      ],
      intervention: 'Mentor support + additional hands-on training'
    }
  ];

  const pendingVerificationCount = anomalies.filter(a => a.status === 'Requires Review').length || 2;

  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER */}
      <div className="relative bg-gradient-to-r from-[#EFF6FF] via-[#F0F7FF] to-[#E8F2FE] p-7 rounded-2xl border border-[#D9E8F9] shadow-sm overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          {/* Left Text & Controls */}
          <div className="space-y-4 max-w-2xl">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
                PREDICTIVE ANALYTICS & AI INSIGHTS
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2342] tracking-tight">
                Predictive Early-Warning & Intervention System
              </h1>
              <p className="text-xs text-[#556987] leading-relaxed">
                AI-assisted early-warning indicators identifying candidates who require academic, remedial or career support.
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button 
                onClick={() => navigate('/dashboard/government/trainee-outcomes')}
                className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>View Candidate List</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <div className="relative">
                <button className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-[#0B2342] text-xs font-semibold rounded-xl border border-[#D9E2EF] shadow-sm transition-colors cursor-pointer">
                  <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{selectedInv}</span>
                  <ChevronDown className="w-3 h-3 text-[#64748B]" />
                </button>
              </div>

              <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-[#0B2342] text-xs font-semibold rounded-xl border border-[#D9E2EF] shadow-sm transition-colors cursor-pointer">
                <Info className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Guideline Notice</span>
              </button>
            </div>
          </div>

          {/* Right AI Hub Status Cards & Illustration */}
          <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto justify-end">
            {/* Tech AI Graphic Illustration */}
            <div className="relative w-28 h-28 hidden sm:flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#93C5FD]/60 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border border-[#BFDBFE]" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#DBEAFE] to-[#EFF6FF] flex items-center justify-center shadow-inner">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex flex-col items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4 mb-0.5 text-blue-200" />
                  <span className="text-[10px] font-extrabold tracking-tighter">AI</span>
                </div>
              </div>
            </div>

            {/* Status Pills Cards */}
            <div className="flex flex-col gap-2.5 max-w-xs">
              <div className="flex items-start gap-2.5 p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-[#D9E2EF] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                  <Info className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0B2342] leading-tight">Guideline Notice</div>
                  <div className="text-[10px] text-[#64748B] leading-snug mt-0.5">
                    Early-warning flags represent support indicators, not definitive predictions. Human review is mandatory.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3 py-2 bg-[#FFFBEB] rounded-xl border border-[#FDE68A] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-[#92400E]">
                  {pendingVerificationCount} Alerts Require Verification
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TITLE */}
      <div className="flex items-center gap-2 pt-1">
        <div className="w-6 h-6 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center">
          <Users className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-sm font-extrabold text-[#0B2342]">
          Candidates Recommended for Support (30)
        </h2>
      </div>

      {/* CANDIDATES 2X2 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {curatedCandidates.map(candidate => {
          const isSupportRequired = candidate.status === 'Support Required';

          return (
            <div
              key={candidate.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 border-b border-[#F1F5F9] pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm ${candidate.avatarBg}`}>
                    {candidate.name[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#0B2342]">{candidate.name}</h3>
                    <p className="text-xs text-[#64748B] flex items-center gap-1">
                      <span>{candidate.program}</span>
                      <span>•</span>
                      <span>{candidate.district}</span>
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="shrink-0">
                  {isSupportRequired ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#F59E0B] text-white text-[11px] font-bold rounded-xl shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>Support Required</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] text-[11px] font-bold rounded-xl">
                      <Eye className="w-3 h-3" />
                      <span>Monitor</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Risk Signals */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-[#334155]">
                  Early-Warning Risk Signals:
                </div>
                <div className="space-y-1">
                  {candidate.signals.map((sig, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#64748B]">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                      <span>{sig}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Recommended Intervention Card */}
              <div className="bg-[#FAF5FF] border border-[#E9D5FF] rounded-xl p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#7E22CE]">
                  <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
                  <span>AI Recommended Intervention:</span>
                </div>
                <p className="text-xs text-[#6B21A8] leading-relaxed">
                  {candidate.intervention}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => {
                    const match = trainees.find(t => t.name.toLowerCase() === candidate.name.toLowerCase());
                    if (match) setSelectedTraineeId(match.id);
                    navigate('/dashboard/trainee');
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  <LineChart className="w-3.5 h-3.5" />
                  <span>View Candidate Outcome Profile</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => {
                    addIntervention({
                      traineeId: candidate.id,
                      traineeName: candidate.name,
                      type: 'Remedial Training',
                      reason: candidate.intervention,
                      status: 'Active',
                      assignedTo: 'District Placement Counselor'
                    });
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0B2342] hover:bg-[#1E3A5F] text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer shrink-0"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Assign Counseling Task</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
