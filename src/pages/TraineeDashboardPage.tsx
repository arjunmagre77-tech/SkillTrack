import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  ShieldCheck, 
  Send, 
  MessageSquare, 
  Award, 
  TrendingUp, 
  Sparkles, 
  Check,
  MapPin
} from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export const TraineeDashboardPage: React.FC = () => {
  const { trainees, selectedTrainee, setSelectedTraineeId, triggerFollowup, showToast } = useApp();
  const navigate = useNavigate();

  const radarData = selectedTrainee.skills.map(s => ({
    subject: s.skill,
    current: s.level,
    required: s.required ? 85 : 70
  }));

  const prioritySkillGap = selectedTrainee.skills.reduce((prev, curr) => 
    curr.level < prev.level ? curr : prev, selectedTrainee.skills[0] || { skill: 'Power BI', level: 40 });

  return (
    <div className="space-y-6 pb-12">
      {/* HERO HEADER — TRAINEE DASHBOARD */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-950 via-gov-900 to-slate-900 text-white p-6 shadow-xl border border-teal-900/60">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-teal-500/30 border border-teal-400/40 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-teal-300" />
              </div>
              <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest">Individual Journey Tracker</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Trainee Outcome Dashboard</h1>
            <p className="text-xs text-teal-200/70 mt-0.5">
              Longitudinal tracking • Employment retention • Wage progression beyond course completion
            </p>
          </div>

          {/* Trainee Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
            <label className="text-xs font-bold text-teal-300 whitespace-nowrap">Select Trainee:</label>
            <div className="relative flex-1 md:w-72">
              <select
                value={selectedTrainee.id}
                onChange={(e) => setSelectedTraineeId(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold rounded-xl p-2.5 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                {trainees.slice(0, 30).map(t => (
                  <option key={t.id} value={t.id} className="bg-slate-900 text-white">
                    {t.name} ({t.programName.split(' ')[0]}) • {t.district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* TRAINEE IDENTITY CARD */}
      <div className="bg-gradient-to-r from-gov-900 via-gov-800 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-gov-800">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border-2 border-teal-400/40 text-teal-300 flex items-center justify-center font-extrabold text-2xl shadow-inner">
              {selectedTrainee.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">{selectedTrainee.name}</h2>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                  selectedTrainee.employmentStatus === 'Employed' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' :
                  selectedTrainee.employmentStatus === 'Self-Employed' ? 'bg-purple-500/20 text-purple-300 border-purple-400/30' :
                  selectedTrainee.employmentStatus === 'Apprenticeship' ? 'bg-blue-500/20 text-blue-300 border-blue-400/30' :
                  'bg-amber-500/20 text-amber-300 border-amber-400/30'
                }`}>
                  {selectedTrainee.employmentStatus}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                <span>{selectedTrainee.currentRole || 'Job Seeking'}</span>
                <span>•</span>
                <span className="text-teal-300">{selectedTrainee.employerName || 'Open to Placement'}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" /> {selectedTrainee.district}, {selectedTrainee.state}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t lg:border-t-0 lg:border-l border-slate-700/80 pt-4 lg:pt-0 lg:pl-6 w-full lg:w-auto justify-between lg:justify-end">
            <div className="text-center">
              <span className="text-[11px] text-slate-400 block font-medium">Monthly Pay</span>
              <span className="text-xl font-extrabold text-emerald-400">
                {selectedTrainee.salary ? `₹${selectedTrainee.salary.toLocaleString()}` : 'N/A'}
              </span>
            </div>

            <div className="text-center">
              <span className="text-[11px] text-slate-400 block font-medium">Score</span>
              <span className="text-xl font-extrabold text-blue-400">{selectedTrainee.assessmentScore}%</span>
            </div>

            <button
              onClick={() => navigate('/dashboard/trainee/passport')}
              className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-gov-950 font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Outcome Passport</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6.1 TRAINEE DIGITAL OUTCOME PROFILE (INNOVATION #1) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Digital Outcome Profile Details */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
              <User className="w-4 h-4 text-gov-700" />
              <span>Digital Outcome Profile</span>
            </h3>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-01
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Trainee ID:</span>
              <span className="font-bold text-slate-900">{selectedTrainee.id}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Education:</span>
              <span className="font-semibold text-slate-900">{selectedTrainee.education}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Training Program:</span>
              <span className="font-semibold text-teal-700 text-right max-w-[180px]">{selectedTrainee.programName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Training Provider:</span>
              <span className="font-semibold text-slate-900 text-right max-w-[180px]">{selectedTrainee.providerName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Cohort / Duration:</span>
              <span className="font-semibold text-slate-900">{selectedTrainee.cohort}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Certification Status:</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {selectedTrainee.certificationStatus}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Verified Employer:</span>
              <span className="font-bold text-slate-900">{selectedTrainee.employerName || 'Unassigned'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Employment Start:</span>
              <span className="font-semibold text-slate-900">{selectedTrainee.employmentStartDate || 'N/A'}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">6-Month Retention:</span>
              <span className={`font-bold ${selectedTrainee.retention6Month ? 'text-emerald-600' : 'text-amber-600'}`}>
                {selectedTrainee.retention6Month ? 'Sustained ✓' : 'Pending Check'}
              </span>
            </div>
          </div>
        </div>

        {/* Middle Column: 6.3 EMPLOYMENT VERIFICATION (INNOVATION #3) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Multi-Source Employment Verification</span>
            </h3>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-03
            </span>
          </div>

          {/* Verification Status Badge */}
          <div className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
            selectedTrainee.verification.status === 'Verified' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' :
            selectedTrainee.verification.status === 'Conflicting information' ? 'bg-rose-50 border-rose-200 text-rose-900' :
            'bg-amber-50 border-amber-200 text-amber-900'
          }`}>
            <div className="flex items-center gap-2 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Status: {selectedTrainee.verification.status}</span>
            </div>
            <span className="text-[10px] bg-white/80 px-2 py-0.5 rounded font-mono font-bold">
              Simulated Audit
            </span>
          </div>

          <div className="space-y-3 text-xs">
            {/* Trainee Self-Reported */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">1. Trainee Self-Reported</span>
                <span className="text-[10px] text-slate-400">Portal Submission</span>
              </div>
              <p className="text-slate-600">Employer: <strong className="text-slate-900">{selectedTrainee.verification.traineeReported.employer}</strong></p>
              <p className="text-slate-600">Reported Salary: <strong className="text-emerald-700">₹{selectedTrainee.verification.traineeReported.salary?.toLocaleString()}/mo</strong></p>
            </div>

            {/* Employer HR Verification */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">2. Employer HR Verification</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  selectedTrainee.verification.employerVerified.verified ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  {selectedTrainee.verification.employerVerified.verified ? 'Verified ✓' : 'Disparate'}
                </span>
              </div>
              <p className="text-slate-600">Payroll Records: <strong className="text-slate-900">{selectedTrainee.verification.employerVerified.notes}</strong></p>
            </div>

            {/* Training Provider Confirmation */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">3. Provider Confirmation</span>
                <span className="text-[10px] text-emerald-700 font-bold">Confirmed ✓</span>
              </div>
              <p className="text-slate-600">Placement cell confirmation on {selectedTrainee.verification.providerConfirmed.confirmedDate}</p>
            </div>
          </div>
        </div>

        {/* Right Column: 6.6 SKILL-TO-JOB RELEVANCE & 6.7 WHY NOT EMPLOYED */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>Skill-to-Job Relevance Score</span>
            </h3>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-06
            </span>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">Training-to-Job Alignment:</span>
              <span className="text-base font-extrabold text-blue-700">{selectedTrainee.skillRelevanceScore} ({selectedTrainee.relevancePercentage}%)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${selectedTrainee.relevancePercentage}%` }} />
            </div>
            <p className="text-[11px] text-slate-500">
              Based on curriculum skill matrix matching active job role task log.
            </p>
          </div>

          {/* Diagnostic Panel for Unemployed Trainees (6.7 WHY NOT EMPLOYED?) */}
          {selectedTrainee.employmentStatus === 'Unemployed' || selectedTrainee.employmentStatus === 'Job Searching' ? (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  <span>“Why Not Employed?” Diagnostic (INV-07)</span>
                </h4>
              </div>
              <p className="text-xs text-rose-800 font-medium">
                Primary Reason: {selectedTrainee.unemploymentReason?.category || 'Skill Gap'} ({selectedTrainee.unemploymentReason?.percentage || 38}%)
              </p>
              <p className="text-[11px] text-slate-600">
                {selectedTrainee.unemploymentReason?.details || 'Skill disparity between regional candidate and local employer expectation.'}
              </p>
              <button 
                onClick={() => navigate('/dashboard/trainee/skill-gap')}
                className="mt-2 text-xs font-bold text-rose-700 underline hover:text-rose-900 transition"
              >
                Trigger AI Recommended Intervention →
              </button>
            </div>
          ) : (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
              <span className="font-bold text-slate-700">Job Role Skills Applied:</span>
              <ul className="grid grid-cols-2 gap-1 text-[11px] text-slate-600 pt-1">
                {selectedTrainee.skills.map((s, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-500" /> {s.skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 6.2 LONGITUDINAL OUTCOME TIMELINE (INNOVATION #2) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-600" />
              <span>Longitudinal Outcome Timeline</span>
            </h3>
            <p className="text-xs text-slate-500">Tracks candidate milestones over a 12-month post-training window</p>
          </div>
          <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
            INV-02
          </span>
        </div>

        {/* Horizontal Timeline Steps */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] flex items-center justify-between relative px-4">
            {/* Horizontal Line behind */}
            <div className="absolute left-8 right-8 top-5 h-1 bg-slate-200 -z-0" />

            {selectedTrainee.timeline.map((step, idx) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center space-y-2 max-w-[90px]">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 ${
                  step.status === 'completed' ? 'bg-emerald-500 text-white border-emerald-600' :
                  step.status === 'in-progress' ? 'bg-teal-500 text-white border-teal-600' :
                  'bg-white text-slate-400 border-slate-300'
                }`}>
                  {step.status === 'completed' ? <Check className="w-5 h-5" /> : idx + 1}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gov-900 block leading-tight">{step.stage}</span>
                  <span className="text-[10px] text-slate-400 block font-mono">{step.date || 'Pending'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6.5 AI SKILL-GAP ENGINE & 6.4 AUTOMATED FOLLOW-UP ENGINE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 6.5 AI SKILL-GAP ENGINE (INNOVATION #5) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>AI Skill-Gap & Intervention Engine</span>
              </h3>
              <p className="text-xs text-slate-500">Target Role: <strong className="text-gov-900">{selectedTrainee.targetRole}</strong></p>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-05
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Radar Chart */}
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#475569' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 8 }} />
                  <Radar name="Current" dataKey="current" stroke="#0d9488" fill="#0d9488" fillOpacity={0.4} />
                  <Radar name="Required" dataKey="required" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Skill Level Bars */}
            <div className="space-y-3">
              {selectedTrainee.skills.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-slate-700">{s.skill}</span>
                    <span className="font-bold text-slate-900">{s.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${s.level < 50 ? 'bg-amber-500' : 'bg-teal-600'}`} 
                      style={{ width: `${s.level}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendation Box */}
          <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-bold text-purple-900">Priority Skill Gap Highlighted: {prioritySkillGap.skill}</span>
            </div>
            <p className="text-xs text-purple-800">
              AI Recommended Micro-Learning: <strong>Complete {prioritySkillGap.skill} Fundamentals & Hands-on Dashboard Capstone Project</strong>
            </p>
            <div className="flex items-center justify-between text-[11px] text-purple-700 pt-1 font-medium">
              <span>Duration: 2 Weeks</span>
              <span>Target: +35% Skill Boost</span>
              <button 
                onClick={() => showToast(`Enrolled ${selectedTrainee.name} into ${prioritySkillGap.skill} micro-upskilling module!`, 'success')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-3 py-1 rounded text-[10px] transition cursor-pointer"
              >
                Assign Intervention
              </button>
            </div>
          </div>
        </div>

        {/* 6.4 AUTOMATED LONGITUDINAL FOLLOW-UP ENGINE (INNOVATION #4) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-gov-900 flex items-center gap-2">
                <Send className="w-4 h-4 text-teal-600" />
                <span>Automated Follow-Up Engine</span>
              </h3>
              <p className="text-xs text-slate-500">Longitudinal touchpoints (1M, 3M, 6M, 12M)</p>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded font-bold">
              INV-04
            </span>
          </div>

          <div className="space-y-3">
            {selectedTrainee.followUps.map(f => (
              <div key={f.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gov-900">{f.milestone} Check-in</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      f.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                      f.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {f.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Due: {f.dueDate} {f.completedDate ? `• Completed on ${f.completedDate}` : ''}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => triggerFollowup(selectedTrainee.id, f.milestone, 'WhatsApp')}
                    className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer"
                    title="Send WhatsApp Follow-up"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => triggerFollowup(selectedTrainee.id, f.milestone, 'SMS')}
                    className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer"
                    title="Send SMS Follow-up"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
            <span className="text-slate-500">Scheduled Next Check-in: <strong>12 Month Outcome Audit</strong></span>
            <button 
              onClick={() => showToast('Follow-up schedule synced with automated SMS gateway!', 'info')}
              className="text-teal-700 hover:text-teal-900 font-bold underline"
            >
              Configure Schedule →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
