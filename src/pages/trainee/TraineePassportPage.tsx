import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  FileText, 
  ShieldCheck, 
  MapPin, 
  GraduationCap, 
  Landmark, 
  Briefcase, 
  Building2, 
  Calendar, 
  IndianRupee, 
  Clock, 
  CheckCircle2,
  Download
} from 'lucide-react';
import { TraineeHeaderBanner } from '../../components/trainee/TraineeHeaderBanner';
import { PassportIllustration } from '../../components/trainee/TraineeBannerIllustrations';

export const TraineePassportPage: React.FC = () => {
  const { selectedTrainee, showToast } = useApp();

  const handleDownload = () => {
    showToast(`Downloading verified Digital Outcome Passport for ${selectedTrainee.name}...`, 'success');
  };

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header Banner matching Image 2 */}
      <TraineeHeaderBanner
        tag="APPLICATION STATUS"
        tagIcon={<FileText className="w-4 h-4" />}
        title="Digital Outcome Passport"
        subtitle="Tamper-evident lifetime career passport certifying skilling completion, employment retention & wage history."
        illustration={<PassportIllustration />}
        rightAddon={
          <button
            onClick={handleDownload}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#1A73E8] border border-[#DBEAFE] font-bold text-xs rounded-xl shadow-xs transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
        }
      />

      {/* Main Outcome Card */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#DCFCE7] text-[#15803D] px-3 py-1.5 rounded-lg shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#15803D]" />
          <span>Verified Outcome</span>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 shadow-xs space-y-6">
          {/* Candidate Profile Header inside card */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#F1F5F9] pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1A73E8] text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-xs">
                RS
              </div>
              <div>
                <h2 className="text-xl font-black text-[#0F172A] tracking-tight">
                  {selectedTrainee.name || 'Rahul Sharma'}
                </h2>
                <p className="text-xs text-[#64748B] font-medium mt-0.5">
                  {selectedTrainee.education || 'B.Sc Computer Science (2025)'}
                </p>
                <p className="text-xs text-[#64748B] flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>{selectedTrainee.district || 'Pune'}, {selectedTrainee.state || 'Maharashtra'}</span>
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#15803D] text-xs font-extrabold px-3.5 py-1.5 rounded-full shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
              <span>VERIFIED OUTCOME</span>
            </div>
          </div>

          {/* Row 1: Four Detail Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                  TRAINING INITIATIVE
                </span>
                <span className="text-xs font-bold text-[#0F172A] block mt-0.5 truncate">
                  {selectedTrainee.programName || 'Advanced Data Analytics & AI'}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg shrink-0">
                <Landmark className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                  TRAINING PROVIDER
                </span>
                <span className="text-xs font-bold text-[#0F172A] block mt-0.5 truncate">
                  {selectedTrainee.providerName || 'Maharashtra Skill Development Centre (MSDC)'}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                  CURRENT EMPLOYMENT ROLE
                </span>
                <span className="text-xs font-bold text-[#0F172A] block mt-0.5 truncate">
                  {selectedTrainee.currentRole || 'Junior Data Analyst'}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                  VERIFIED EMPLOYER
                </span>
                <span className="text-xs font-bold text-[#0F172A] block mt-0.5 truncate">
                  {selectedTrainee.employerName || 'XYZ Technologies Pvt Ltd'}
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Three Detail Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                  CERTIFICATION VERIFIED
                </span>
                <span className="text-xs font-bold text-[#15803D] flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>NSDC Level 5 Certified ({selectedTrainee.assessmentScore || 92}% Score)</span>
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg shrink-0">
                <IndianRupee className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                  MONTHLY SALARY
                </span>
                <span className="text-base font-black text-[#1A73E8] block mt-0.5">
                  ₹{selectedTrainee.salary?.toLocaleString() || '28,000'}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                  6M RETENTION
                </span>
                <span className="text-xs font-bold text-[#15803D] block mt-0.5">
                  Sustained ✓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
