import React from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';
import { TrainingIllustration } from '../../components/trainee/TraineeBannerIllustrations';

export const TraineeTrainingPage: React.FC = () => {
  const { programs, selectedTrainee, showToast } = useApp();

  // Programs featured in Image 1: prog-1 and prog-2
  const displayPrograms = programs.slice(0, 2);

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header Banner matching Image 1 */}
      <TraineeHeaderBanner
        tag="SKILL COURSES"
        tagIcon={<BookOpen className="w-4 h-4" />}
        title="Recommended Training Programs"
        subtitle="NSDC aligned modules matching candidate background & regional employer demand."
        illustration={<TrainingIllustration />}
      />

      {/* Current Enrolled / Completed Course */}
      <div className="space-y-2">
        <span className="inline-block text-[11px] font-bold bg-[#DCFCE7] text-[#15803D] px-3 py-1 rounded-md uppercase tracking-wider">
          CURRENT ENROLLED / COMPLETED COURSE
        </span>

        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-black text-[#0F172A] tracking-tight">
              {selectedTrainee.programName || 'Advanced Data Analytics & AI'}
            </h2>
            <p className="text-xs text-[#64748B] mt-1 font-medium">
              Provider: {selectedTrainee.providerName || 'Maharashtra Skill Development Centre (MSDC)'} • Cohort: {selectedTrainee.cohort || '2025-Q4 Cohort A'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold bg-[#DCFCE7] text-[#15803D] px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
              {selectedTrainee.certificationStatus || 'Certified'}
            </span>
            <span className="text-xs font-bold bg-[#EFF6FF] text-[#1A73E8] px-3.5 py-1.5 rounded-full border border-[#DBEAFE]">
              Score: {selectedTrainee.assessmentScore || 92}%
            </span>
          </div>
        </div>
      </div>

      {/* Recommended Programs Grid (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayPrograms.map(p => {
          const isProg1 = p.id === 'prog-1';
          const placementRate = isProg1 ? 76 : 75;

          return (
            <div 
              key={p.id} 
              className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4 hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#D97706] font-mono">
                  {p.id}
                </span>
                <span className={`text-xs font-semibold px-3 py-0.5 rounded-full border ${
                  isProg1 
                    ? 'bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]' 
                    : 'bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]'
                }`}>
                  {p.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0F172A]">
                {p.title}
              </h3>

              {/* Metadata */}
              <div className="flex items-center gap-6 text-xs text-[#64748B] font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#64748B]" /> 
                  {p.durationWeeks} Weeks
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#64748B]" /> 
                  {p.totalTrained.toLocaleString()} Trained
                </span>
              </div>

              {/* Top Skills */}
              <div className="text-xs text-[#64748B] leading-relaxed pt-1">
                <span className="font-bold text-[#334155]">Top Skills Taught:</span>{' '}
                {p.topSkillsTaught.join(', ')}
              </div>

              {/* Card Footer */}
              <div className="border-t border-[#F1F5F9] pt-4 flex justify-between items-center">
                <span className="text-sm font-black text-[#16A34A]">
                  {placementRate}% Placement Rate
                </span>
                <button
                  onClick={() => showToast(`Successfully submitted application for ${p.title}!`, 'success')}
                  className="px-5 py-2.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Apply Course</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
