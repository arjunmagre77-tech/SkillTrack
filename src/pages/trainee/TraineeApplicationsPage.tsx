import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CheckSquare, 
  ShieldCheck, 
  Building2, 
  FileText, 
  Calendar, 
  CheckCircle2 
} from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';
import { ApplicationsIllustration } from '../../components/trainee/TraineeBannerIllustrations';

export const TraineeApplicationsPage: React.FC = () => {
  const { selectedTrainee } = useApp();

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header Banner matching Image 5 */}
      <TraineeHeaderBanner
        tag="APPLICATION STATUS"
        tagIcon={<CheckSquare className="w-4 h-4" />}
        title="My Job Applications"
        subtitle="Multi-source verification and employer payroll status tracking."
        illustration={<ApplicationsIllustration />}
      />

      {/* Main Verification Section */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#10B981]" />
          <span>Active Placement Verification Record</span>
        </h2>

        {/* Verification Card */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 shadow-xs space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#F1F5F9] pb-6">
            <div>
              <h3 className="text-xl font-black text-[#0F172A] tracking-tight">
                {selectedTrainee.currentRole || 'Junior Data Analyst'}
              </h3>
              <p className="text-xs text-[#64748B] font-medium mt-0.5">
                {selectedTrainee.employerName || 'XYZ Technologies Pvt Ltd'}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#15803D] text-xs font-extrabold px-3.5 py-1.5 rounded-full shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
              <span>Verified</span>
            </div>
          </div>

          {/* 3 Step Verification Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1: Trainee Self-Reported */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#1A73E8] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-medium text-[#64748B] block">
                  Trainee Self-Reported
                </span>
                <span className="text-xs font-bold text-[#0F172A] block mt-0.5 truncate">
                  {selectedTrainee.verification.traineeReported.employer || 'XYZ Technologies Pvt Ltd'}
                </span>
              </div>
            </div>

            {/* Step 2: HR Payroll Verification */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-medium text-[#64748B] block">
                  HR Payroll Verification
                </span>
                <span className="text-xs font-semibold text-[#15803D] block mt-0.5 leading-snug">
                  {selectedTrainee.verification.employerVerified.notes || 'HR records matched via EPFO/UAN API verification simulation'}
                </span>
              </div>
            </div>

            {/* Step 3: Provider Confirmation */}
            <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#DBEAFE] text-[#1A73E8] flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-medium text-[#64748B] block">
                  Provider Confirmation
                </span>
                <span className="text-xs font-bold text-[#1A73E8] block mt-0.5">
                  Confirmed on {selectedTrainee.verification.providerConfirmed.confirmedDate || '14/04/2026'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
