import React from 'react';

/* ─── partner / ecosystem logos ─── */
const ROW_A = [
  { name: 'Skill India',    abbr: 'SI'  },
  { name: 'NSDC',           abbr: 'NS'  },
  { name: 'NASSCOM',        abbr: 'NA'  },
  { name: 'TCS',            abbr: 'TC'  },
  { name: 'Infosys',        abbr: 'IN'  },
  { name: 'AICTE',          abbr: 'AI'  },
  { name: 'Wipro',          abbr: 'WI'  },
  { name: 'HCL Tech',       abbr: 'HC'  },
  { name: 'Accenture',      abbr: 'AC'  },
  { name: 'Microsoft',      abbr: 'MS'  },
];

const ROW_B = [
  { name: 'Google',         abbr: 'GO'  },
  { name: 'Amazon',         abbr: 'AZ'  },
  { name: 'IBM',            abbr: 'IB'  },
  { name: 'NITI Aayog',     abbr: 'NI'  },
  { name: 'Deloitte',       abbr: 'DE'  },
  { name: 'UGC',            abbr: 'UG'  },
  { name: 'Cognizant',      abbr: 'CO'  },
  { name: 'Tech Mahindra',  abbr: 'TM'  },
  { name: 'Oracle',         abbr: 'OR'  },
  { name: 'SAP',            abbr: 'SA'  },
];

/* accent colour per logo — cycles through subtle palette */
const ACCENTS = [
  'rgba(6,182,212,0.15)',   // cyan
  'rgba(139,92,246,0.15)',  // violet
  'rgba(20,184,166,0.15)',  // teal
  'rgba(236,72,153,0.12)',  // pink
  'rgba(59,130,246,0.15)',  // blue
];

interface LogoChipProps {
  name: string;
  abbr: string;
  idx: number;
}

const LogoChip: React.FC<LogoChipProps> = ({ name, idx }) => {
  const accent = ACCENTS[idx % ACCENTS.length];
  return (
    <div
      className="flex items-center gap-2.5 px-5 py-2.5 rounded-full mx-4 shrink-0
                 border border-white/10 backdrop-blur-sm
                 transition-all duration-300 hover:border-white/25 hover:scale-105 cursor-default"
      style={{ background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.03))` }}
    >
      <span className="text-white/90 text-sm font-semibold tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

/* duplicates array so the seam is invisible */
function doubled<T>(arr: T[]): T[] {
  return [...arr, ...arr];
}

/* ─── main component ─── */
const LogoCarousel: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-16"
      style={{ background: 'linear-gradient(to bottom, #000 0%, #050008 60%, #000 100%)' }}
    >
      {/* ambient glow behind row 1 */}
      <div
        className="absolute left-1/4 top-4 w-96 h-32 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'glow-pulse 4s ease-in-out infinite',
        }}
      />
      {/* ambient glow behind row 2 */}
      <div
        className="absolute right-1/4 bottom-4 w-80 h-28 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'glow-pulse 5s ease-in-out infinite 1.5s',
        }}
      />

      {/* section label */}
      <p className="text-center text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase mb-8 px-4">
        Trusted by India's Leading Skill & Tech Ecosystem
      </p>

      {/* ── ROW 1 — right to left ── */}
      <div
        className="relative mb-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          overflow: 'hidden',
        }}
      >
        <div className="marquee-rtl">
          {doubled(ROW_A).map((logo, i) => (
            <LogoChip key={`a-${i}`} name={logo.name} abbr={logo.abbr} idx={i} />
          ))}
        </div>
      </div>

      {/* ── ROW 2 — left to right ── */}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          overflow: 'hidden',
        }}
      >
        <div className="marquee-ltr">
          {doubled(ROW_B).map((logo, i) => (
            <LogoChip key={`b-${i}`} name={logo.name} abbr={logo.abbr} idx={i + 3} />
          ))}
        </div>
      </div>

      {/* divider line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.3), rgba(6,182,212,0.3), transparent)' }}
      />
    </section>
  );
};

export default LogoCarousel;
