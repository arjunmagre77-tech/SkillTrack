import React from 'react';

/**
 * High-fidelity vector illustrations matching the 5 trainee dashboard screenshots:
 * 1. Training (Graduation cap + diploma document + decorative dots)
 * 2. Passport (Blue verified credential certificate + ID card + shield checkmark)
 * 3. Outcomes (Ascending wage growth bars + trend arrow + briefcase)
 * 4. Jobs (Application sheet + magnifying glass + briefcase)
 * 5. Applications (Verification status ID card + shield check + briefcase)
 */

export const TrainingIllustration: React.FC<{ className?: string }> = ({ className = 'w-48 h-28' }) => {
  return (
    <div className={`relative flex items-center justify-end select-none shrink-0 ${className}`}>
      <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft background blue circular gradient / blob */}
        <circle cx="150" cy="70" r="65" fill="#E0F0FE" fillOpacity="0.85" />
        <ellipse cx="140" cy="80" rx="85" ry="50" fill="#EBF5FE" fillOpacity="0.6" />

        {/* Certificate / Document Card behind */}
        <g transform="translate(135, 30) rotate(6)">
          {/* Card shadow */}
          <rect x="2" y="2" width="76" height="88" rx="8" fill="#CBD5E1" fillOpacity="0.3" />
          {/* Card body */}
          <rect x="0" y="0" width="76" height="88" rx="8" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
          {/* Document Header bar */}
          <rect x="10" y="10" width="38" height="6" rx="3" fill="#1A73E8" />
          {/* Content lines */}
          <rect x="10" y="24" width="56" height="4" rx="2" fill="#93C5FD" />
          <rect x="10" y="34" width="48" height="4" rx="2" fill="#E2E8F0" />
          <rect x="10" y="44" width="52" height="4" rx="2" fill="#E2E8F0" />
          <rect x="10" y="54" width="42" height="4" rx="2" fill="#E2E8F0" />
          {/* Small seal */}
          <circle cx="56" cy="70" r="6" fill="#EFF6FF" stroke="#1A73E8" strokeWidth="1.5" />
          <circle cx="56" cy="70" r="3" fill="#1A73E8" />
        </g>

        {/* Graduation Cap in front */}
        <g transform="translate(25, 20)">
          {/* Cap bottom skullcap */}
          <path
            d="M 68 62 C 68 76 100 84 122 80 C 130 78 132 70 132 62 Z"
            fill="#0F52BA"
          />
          {/* Cap diamond top */}
          <polygon
            points="100,28 165,52 100,76 35,52"
            fill="#1A73E8"
          />
          {/* Cap top highlight gradient overlay */}
          <polygon
            points="100,28 165,52 100,56 35,52"
            fill="#2A7EF0"
            fillOpacity="0.4"
          />
          {/* Button on top */}
          <circle cx="100" cy="52" r="4.5" fill="#0C4A9E" />
          {/* Tassel line */}
          <path
            d="M 100 54 Q 74 60 70 82"
            stroke="#0C4A9E"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tassel fringe */}
          <rect x="66" y="82" width="8" height="14" rx="3" fill="#0C4A9E" />
        </g>

        {/* Floating dot matrix accents */}
        <g opacity="0.45" fill="#1A73E8">
          <circle cx="215" cy="40" r="1.8" />
          <circle cx="225" cy="40" r="1.8" />
          <circle cx="215" cy="52" r="1.8" />
          <circle cx="225" cy="52" r="1.8" />
          <circle cx="215" cy="64" r="1.8" />
          <circle cx="225" cy="64" r="1.8" />
          <circle cx="215" cy="76" r="1.8" />
          <circle cx="225" cy="76" r="1.8" />
        </g>
      </svg>
    </div>
  );
};

export const PassportIllustration: React.FC<{ className?: string }> = ({ className = 'w-48 h-28' }) => {
  return (
    <div className={`relative flex items-center justify-end select-none shrink-0 ${className}`}>
      <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft background blue glow */}
        <circle cx="150" cy="70" r="65" fill="#E0F0FE" fillOpacity="0.85" />
        <ellipse cx="140" cy="80" rx="85" ry="50" fill="#EBF5FE" fillOpacity="0.6" />

        {/* Passport card 1 (White ID card behind) */}
        <g transform="translate(130, 22)">
          <rect x="0" y="0" width="70" height="92" rx="10" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
          {/* User photo box */}
          <circle cx="35" cy="28" r="14" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
          <circle cx="35" cy="24" r="6" fill="#93C5FD" />
          <path d="M 25 38 C 25 33 45 33 45 38 Z" fill="#93C5FD" />
          {/* Data lines */}
          <rect x="12" y="52" width="46" height="4" rx="2" fill="#CBD5E1" />
          <rect x="12" y="62" width="36" height="4" rx="2" fill="#E2E8F0" />
          <rect x="12" y="72" width="40" height="4" rx="2" fill="#E2E8F0" />
        </g>

        {/* Passport card 2 (Blue credential passport in front) */}
        <g transform="translate(68, 26) rotate(-8)">
          <rect x="0" y="0" width="76" height="96" rx="10" fill="#1A73E8" />
          {/* Inner border line */}
          <rect x="4" y="4" width="68" height="88" rx="8" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          
          {/* Graduation cap emblem */}
          <g transform="translate(18, 16) scale(0.65)">
            <polygon points="30,8 55,20 30,32 5,20" fill="#FFFFFF" />
            <path d="M 18 25 L 18 36 C 18 42 42 42 42 36 L 42 25" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
            <path d="M 46 22 L 46 36" stroke="#93C5FD" strokeWidth="2" />
          </g>

          {/* Certificate lines */}
          <rect x="14" y="54" width="48" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.9" />
          <rect x="14" y="64" width="38" height="4" rx="2" fill="#93C5FD" />
          <rect x="14" y="72" width="44" height="4" rx="2" fill="#93C5FD" />

          {/* Golden/White Ribbon tag */}
          <circle cx="56" cy="80" r="7" fill="#FFFFFF" />
          <path d="M 53 80 L 55 82 L 59 78" stroke="#1A73E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Shield Check Badge in front */}
        <g transform="translate(125, 76)">
          <circle cx="16" cy="16" r="16" fill="#FFFFFF" />
          <path
            d="M 16 3 L 26 7 C 26 18 16 26 16 26 C 16 26 6 18 6 7 Z"
            fill="#1A73E8"
          />
          <path
            d="M 12 14 L 15 17 L 20 11"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Floating dot matrix accents */}
        <g opacity="0.4" fill="#1A73E8">
          <circle cx="216" cy="40" r="1.8" />
          <circle cx="226" cy="40" r="1.8" />
          <circle cx="216" cy="52" r="1.8" />
          <circle cx="226" cy="52" r="1.8" />
          <circle cx="216" cy="64" r="1.8" />
          <circle cx="226" cy="64" r="1.8" />
        </g>
      </svg>
    </div>
  );
};

export const OutcomesIllustration: React.FC<{ className?: string }> = ({ className = 'w-44 h-24' }) => {
  return (
    <div className={`relative flex items-center justify-end select-none shrink-0 ${className}`}>
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft background blue glow */}
        <circle cx="110" cy="60" r="50" fill="#E0F0FE" fillOpacity="0.85" />
        <ellipse cx="110" cy="70" rx="70" ry="40" fill="#EBF5FE" fillOpacity="0.6" />

        {/* Growth Bars */}
        <g transform="translate(45, 30)">
          {/* Bar 1 */}
          <rect x="0" y="44" width="16" height="32" rx="4" fill="#93C5FD" />
          {/* Bar 2 */}
          <rect x="22" y="30" width="16" height="46" rx="4" fill="#60A5FA" />
          {/* Bar 3 */}
          <rect x="44" y="16" width="16" height="60" rx="4" fill="#38BDF8" />
          {/* Bar 4 */}
          <rect x="66" y="2" width="16" height="74" rx="4" fill="#1A73E8" />
        </g>

        {/* Upward curved growth line */}
        <path
          d="M 40 76 Q 75 68 115 28"
          stroke="#1A73E8"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead */}
        <polygon points="115,22 125,28 118,36" fill="#1A73E8" />

        {/* Briefcase in front */}
        <g transform="translate(95, 52)">
          {/* Briefcase shadow */}
          <rect x="2" y="4" width="46" height="34" rx="6" fill="#CBD5E1" fillOpacity="0.3" />
          {/* Briefcase body */}
          <rect x="0" y="2" width="46" height="34" rx="6" fill="#38BDF8" />
          {/* Briefcase flap */}
          <path d="M 0 6 C 0 3 46 3 46 6 L 46 16 L 0 16 Z" fill="#0284C7" />
          {/* Handle */}
          <path d="M 17 2 L 17 -3 C 17 -5 29 -5 29 -3 L 29 2" stroke="#0284C7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Metal clasp */}
          <rect x="20" y="13" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        </g>

        {/* Floating sparkles */}
        <path d="M 155 24 L 157 29 L 162 31 L 157 33 L 155 38 L 153 33 L 148 31 L 153 29 Z" fill="#60A5FA" opacity="0.8" />
        <circle cx="170" cy="45" r="2" fill="#93C5FD" />
      </svg>
    </div>
  );
};

export const JobsIllustration: React.FC<{ className?: string }> = ({ className = 'w-48 h-28' }) => {
  return (
    <div className={`relative flex items-center justify-end select-none shrink-0 ${className}`}>
      <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft background blue glow */}
        <circle cx="150" cy="70" r="65" fill="#E0F0FE" fillOpacity="0.85" />
        <ellipse cx="140" cy="80" rx="85" ry="50" fill="#EBF5FE" fillOpacity="0.6" />

        {/* Application / Resume Card */}
        <g transform="translate(85, 20)">
          <rect x="0" y="0" width="78" height="96" rx="8" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
          {/* Avatar icon */}
          <circle cx="22" cy="22" r="8" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1" />
          <circle cx="22" cy="20" r="3" fill="#1A73E8" />
          <path d="M 17 28 C 17 25 27 25 27 28 Z" fill="#1A73E8" />
          {/* Lines */}
          <rect x="36" y="16" width="30" height="4" rx="2" fill="#1A73E8" />
          <rect x="36" y="24" width="22" height="3" rx="1.5" fill="#93C5FD" />
          {/* Body lines */}
          <rect x="14" y="38" width="50" height="4" rx="2" fill="#E2E8F0" />
          <rect x="14" y="48" width="42" height="4" rx="2" fill="#E2E8F0" />
          <rect x="14" y="58" width="46" height="4" rx="2" fill="#E2E8F0" />
          <rect x="14" y="68" width="34" height="4" rx="2" fill="#E2E8F0" />
          <rect x="14" y="78" width="28" height="4" rx="2" fill="#93C5FD" />
        </g>

        {/* Magnifying Glass */}
        <g transform="translate(130, 40) rotate(-15)">
          <circle cx="24" cy="24" r="18" fill="#EFF6FF" fillOpacity="0.8" stroke="#1A73E8" strokeWidth="4" />
          <circle cx="24" cy="24" r="12" fill="#BFDBFE" fillOpacity="0.3" />
          {/* Handle */}
          <path d="M 38 38 L 54 54" stroke="#1A73E8" strokeWidth="5.5" strokeLinecap="round" />
        </g>

        {/* Briefcase */}
        <g transform="translate(160, 56)">
          <rect x="0" y="6" width="46" height="34" rx="6" fill="#1A73E8" />
          <path d="M 0 10 C 0 7 46 7 46 10 L 46 20 L 0 20 Z" fill="#0C4A9E" />
          <path d="M 16 6 L 16 1 C 16 -1 30 -1 30 1 L 30 6" stroke="#0C4A9E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <rect x="20" y="17" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        </g>

        {/* Dot matrix accents */}
        <g opacity="0.4" fill="#1A73E8">
          <circle cx="218" cy="38" r="1.8" />
          <circle cx="228" cy="38" r="1.8" />
          <circle cx="218" cy="50" r="1.8" />
          <circle cx="228" cy="50" r="1.8" />
          <circle cx="218" cy="62" r="1.8" />
          <circle cx="228" cy="62" r="1.8" />
        </g>
      </svg>
    </div>
  );
};

export const ApplicationsIllustration: React.FC<{ className?: string }> = ({ className = 'w-48 h-28' }) => {
  return (
    <div className={`relative flex items-center justify-end select-none shrink-0 ${className}`}>
      <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft background blue glow */}
        <circle cx="150" cy="70" r="65" fill="#E0F0FE" fillOpacity="0.85" />
        <ellipse cx="140" cy="80" rx="85" ry="50" fill="#EBF5FE" fillOpacity="0.6" />

        {/* Application status form / sheet */}
        <g transform="translate(90, 22)">
          <rect x="0" y="0" width="76" height="92" rx="8" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />
          {/* Avatar icon */}
          <circle cx="22" cy="22" r="9" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
          <circle cx="22" cy="19" r="3.5" fill="#1A73E8" />
          <path d="M 16 28 C 16 25 28 25 28 28 Z" fill="#1A73E8" />
          
          {/* Verified status badge on card */}
          <circle cx="56" cy="22" r="8" fill="#10B981" />
          <path d="M 53 22 L 55 24 L 59 20" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Form lines */}
          <rect x="14" y="40" width="48" height="4" rx="2" fill="#E2E8F0" />
          <rect x="14" y="50" width="38" height="4" rx="2" fill="#E2E8F0" />
          <rect x="14" y="60" width="44" height="4" rx="2" fill="#E2E8F0" />
          <rect x="14" y="70" width="28" height="4" rx="2" fill="#93C5FD" />
        </g>

        {/* Briefcase */}
        <g transform="translate(145, 52)">
          <rect x="0" y="6" width="48" height="34" rx="6" fill="#1A73E8" />
          <path d="M 0 10 C 0 7 48 7 48 10 L 48 20 L 0 20 Z" fill="#0C4A9E" />
          <path d="M 17 6 L 17 1 C 17 -1 31 -1 31 1 L 31 6" stroke="#0C4A9E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <rect x="21" y="17" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        </g>

        {/* Dot matrix accents */}
        <g opacity="0.4" fill="#1A73E8">
          <circle cx="218" cy="38" r="1.8" />
          <circle cx="228" cy="38" r="1.8" />
          <circle cx="218" cy="50" r="1.8" />
          <circle cx="228" cy="50" r="1.8" />
          <circle cx="218" cy="62" r="1.8" />
          <circle cx="228" cy="62" r="1.8" />
        </g>
      </svg>
    </div>
  );
};
