import React from 'react';

interface TraineeHeaderBannerProps {
  tag: string;
  tagIcon: React.ReactNode;
  title: string;
  subtitle: string;
  illustration: React.ReactNode;
  rightAddon?: React.ReactNode;
}

export const TraineeHeaderBanner: React.FC<TraineeHeaderBannerProps> = ({
  tag,
  tagIcon,
  title,
  subtitle,
  illustration,
  rightAddon,
}) => {
  return (
    <div className="bg-gradient-to-r from-[#EEF7FF] via-[#F4F9FF] to-[#E8F4FD] rounded-2xl md:rounded-3xl border border-[#DBEAFE] p-6 md:px-8 md:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-xs">
      {/* Left Text Block */}
      <div className="space-y-1.5 z-10 max-w-xl">
        <div className="flex items-center gap-2">
          <span className="text-[#1A73E8]">{tagIcon}</span>
          <span className="text-xs font-bold text-[#1A73E8] uppercase tracking-wider">{tag}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-[#0F172A] tracking-tight">{title}</h1>
        <p className="text-xs md:text-sm text-[#64748B] font-normal leading-relaxed">{subtitle}</p>
      </div>

      {/* Right Block: Addon + Illustration */}
      <div className="flex items-center gap-6 self-end md:self-center z-10">
        {rightAddon}
        {illustration}
      </div>
    </div>
  );
};
