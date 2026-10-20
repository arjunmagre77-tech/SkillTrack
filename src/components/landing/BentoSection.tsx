import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  MapPin,
  Zap,
  Users,
  Award,
  BarChart3,
  Shield,
  ChevronRight,
  Sparkles,
  Target,
  Globe,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

const fadeIn = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

/* ─────────────────────────────────────────────────────────────
   SMALL REUSABLE CARD WRAPPER
───────────────────────────────────────────────────────────── */
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'purple' | 'cyan' | 'pink' | 'teal' | 'none';
  style?: React.CSSProperties;
  delay?: number;
}

const glowMap = {
  purple: 'rgba(139,92,246,0.18)',
  cyan:   'rgba(6,182,212,0.18)',
  pink:   'rgba(236,72,153,0.16)',
  teal:   'rgba(20,184,166,0.16)',
  none:   'transparent',
};

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glow = 'none', style, delay = 0 }) => (
  <motion.div
    variants={fadeIn}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    whileHover={{ scale: 1.018, transition: { duration: 0.25 } }}
    className={`relative rounded-3xl border border-white/8 overflow-hidden ${className}`}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 48px rgba(0,0,0,0.4)`,
      ...style,
    }}
  >
    {/* per-card ambient glow */}
    {glow !== 'none' && (
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${glowMap[glow]} 0%, transparent 70%)`,
          filter: 'blur(32px)',
        }}
      />
    )}
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   MINI STAT BAR (inside cards)
───────────────────────────────────────────────────────────── */
const StatBar: React.FC<{ pct: number; color: string }> = ({ pct, color }) => (
  <div className="w-full h-1 rounded-full bg-white/8 overflow-hidden mt-2">
    <motion.div
      className="h-full rounded-full"
      style={{ background: color, width: 0 }}
      whileInView={{ width: `${pct}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
    />
  </div>
);

/* ─────────────────────────────────────────────────────────────
   SVG SKILL RADAR ILLUSTRATION (center card)
───────────────────────────────────────────────────────────── */
const SkillRadar: React.FC = () => {
  const skills = [
    { label: 'Analytics', pct: 88 },
    { label: 'Leadership', pct: 72 },
    { label: 'Tech Skills', pct: 94 },
    { label: 'Soft Skills', pct: 79 },
    { label: 'Domain', pct: 83 },
  ];

  return (
    <div className="relative w-full h-44 flex items-center justify-center">
      {/* rings */}
      {[1, 0.75, 0.5, 0.25].map((r, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/6"
          style={{ width: `${r * 100}%`, height: `${r * 100}%` }}
        />
      ))}

      {/* bars radial */}
      {skills.map((s, i) => {
        const angle = (i / skills.length) * 360 - 90;
        const rad   = (angle * Math.PI) / 180;
        const maxR  = 72;
        const barR  = maxR * (s.pct / 100);
        const x2    = 50 + Math.cos(rad) * barR;
        const y2    = 50 + Math.sin(rad) * barR;
        return (
          <svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.line
              x1="50" y1="50" x2={x2} y2={y2}
              strokeWidth="2"
              strokeLinecap="round"
              stroke="url(#radarGrad)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
            />
            <defs>
              <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* dot at end */}
            <circle cx={x2} cy={y2} r="2.5" fill="#8B5CF6" opacity="0.9" />
          </svg>
        );
      })}

      {/* centre dot */}
      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
        <Brain className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   MINI SPARKLINE (for analytics card)
───────────────────────────────────────────────────────────── */
const Sparkline: React.FC = () => {
  const points = [20, 35, 28, 55, 42, 68, 58, 80, 72, 95];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 100, h = 40;
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / (max - min)) * (h - 4) - 2;
    return `${x},${y}`;
  });

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={coords.join(' ')}
        fill="none"
        stroke="url(#sparkGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      />
    </svg>
  );
};

/* ─────────────────────────────────────────────────────────────
   BENTO SECTION
───────────────────────────────────────────────────────────── */
const BentoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView      = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
      style={{ background: 'linear-gradient(to bottom, #050008 0%, #020010 50%, #000 100%)' }}
    >
      {/* ── ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)', filter: 'blur(80px)', animation: 'glow-pulse 6s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)', filter: 'blur(80px)', animation: 'glow-pulse 8s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 65%)', filter: 'blur(60px)', animation: 'glow-pulse 7s ease-in-out infinite 1s' }} />
      </div>

      {/* section header */}
      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-center mb-16 relative z-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-4">
          <Sparkles className="w-3 h-3" />
          Platform Capabilities
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Everything you need to
          <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            track, learn & grow.
          </span>
        </h2>
        <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
          A unified intelligence platform powering India's skill development ecosystem — from trainee to placement.
        </p>
      </motion.div>

      {/* ════════════════════════════════════
          BENTO GRID
          Structure (mirrors reference image):
          ┌──────────┬──────────────────────┬──────────┐
          │  Card A  │                      │  Card C  │
          │  (stat)  │   CARD B (featured)  │  (stat)  │
          │  Card A2 │                      │  Card C2 │
          └──────────┴──────────────────────┴──────────┘
          └──────── Card D (wide footer) ──────────────┘
          ════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Main 3-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr_1fr] gap-4 mb-4">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-4">

            {/* Card A — Trainees stat */}
            <GlassCard glow="purple" delay={0.1} className="p-6 flex-1">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                  <Users className="w-4.5 h-4.5 text-violet-300" style={{ width: '18px', height: '18px' }} />
                </div>
                <span className="text-[10px] font-bold text-violet-400 tracking-widest uppercase bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">Live</span>
              </div>
              <div className="text-3xl font-black text-white mb-0.5">12,480</div>
              <div className="text-slate-400 text-xs font-medium">Active Trainees</div>
              <StatBar pct={78} color="linear-gradient(to right, #7C3AED, #8B5CF6)" />
              <div className="flex items-center gap-1 mt-2.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-semibold">+18.4% this month</span>
              </div>
            </GlassCard>

            {/* Card A2 — Districts */}
            <GlassCard glow="teal" delay={0.2} className="p-6 flex-1">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-3" style={{ width: '36px', height: '36px' }}>
                <MapPin className="w-4.5 h-4.5 text-teal-300" style={{ width: '18px', height: '18px' }} />
              </div>
              <div className="text-3xl font-black text-white mb-0.5">28</div>
              <div className="text-slate-400 text-xs font-medium">States & UTs Covered</div>
              <StatBar pct={85} color="linear-gradient(to right, #14B8A6, #06B6D4)" />
              <div className="flex items-center gap-1 mt-2.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-400 text-xs font-semibold">National coverage</span>
              </div>
            </GlassCard>

          </div>

          {/* ── CENTER CARD B — Featured (large) ── */}
          <GlassCard glow="purple" delay={0.05} className="p-8 min-h-[420px] flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, rgba(139,92,246,0.12) 0%, rgba(6,182,212,0.06) 50%, rgba(236,72,153,0.06) 100%)',
              border: '1px solid rgba(139,92,246,0.2)',
            }}
          >
            {/* top badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-violet-300 bg-violet-500/15 border border-violet-500/25 px-3 py-1 rounded-full">
                  <Brain className="w-3.5 h-3.5" />
                  AI Skill Intelligence
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-violet-400 opacity-80" style={{ animation: 'glow-pulse 2s ease-in-out infinite' }} />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-60" style={{ animation: 'glow-pulse 2s ease-in-out infinite 0.5s' }} />
                  <div className="w-2 h-2 rounded-full bg-pink-400 opacity-40" style={{ animation: 'glow-pulse 2s ease-in-out infinite 1s' }} />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white leading-tight mb-2">
                Real-time Skill Gap<br />
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Detection Engine
                </span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Our AI maps each trainee's skills against live industry demand, surfacing gaps, recommending programs, and tracking progress in real time.
              </p>
            </div>

            {/* Radar viz */}
            <SkillRadar />

            {/* skill labels */}
            <div className="flex flex-wrap gap-2">
              {['Analytics', 'Leadership', 'Tech Skills', 'Soft Skills', 'Domain'].map((s, i) => (
                <span key={i} className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-5 group flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              Explore Skill Analytics
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </GlassCard>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-4">

            {/* Card C — Placement Rate */}
            <GlassCard glow="pink" delay={0.15} className="p-6 flex-1">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center" style={{ width: '36px', height: '36px' }}>
                  <Award className="w-4.5 h-4.5 text-pink-300" style={{ width: '18px', height: '18px' }} />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">↑ Top</span>
              </div>
              <div className="text-3xl font-black text-white mb-0.5">94%</div>
              <div className="text-slate-400 text-xs font-medium">Placement Rate</div>
              <StatBar pct={94} color="linear-gradient(to right, #EC4899, #F43F5E)" />
              <div className="flex items-center gap-1 mt-2.5">
                <Target className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-pink-400 text-xs font-semibold">Industry-leading outcome</span>
              </div>
            </GlassCard>

            {/* Card C2 — Programs */}
            <GlassCard glow="cyan" delay={0.25} className="p-6 flex-1">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-3" style={{ width: '36px', height: '36px' }}>
                <Zap className="w-4.5 h-4.5 text-cyan-300" style={{ width: '18px', height: '18px' }} />
              </div>
              <div className="text-3xl font-black text-white mb-0.5">500+</div>
              <div className="text-slate-400 text-xs font-medium">Training Programs</div>
              <StatBar pct={65} color="linear-gradient(to right, #06B6D4, #0EA5E9)" />
              <div className="flex items-center gap-1 mt-2.5">
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-400 text-xs font-semibold">Across 12 domains</span>
              </div>
            </GlassCard>

          </div>
        </div>

        {/* ── CARD D — Wide footer row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* D1 — Analytics trending */}
          <GlassCard glow="cyan" delay={0.3} className="p-6"
            style={{ border: '1px solid rgba(6,182,212,0.15)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Live Analytics</span>
                </div>
                <div className="text-white font-black text-lg">Placement Trend</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-white">↑ 23%</div>
                <div className="text-xs text-slate-400">vs last quarter</div>
              </div>
            </div>
            <Sparkline />
            <div className="flex justify-between mt-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => (
                <span key={m} className="text-[9px] text-slate-600">{m}</span>
              ))}
            </div>
          </GlassCard>

          {/* D2 — Govt. features */}
          <GlassCard glow="purple" delay={0.35} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">Government-Grade</span>
            </div>
            <h4 className="text-white font-black text-lg mb-4">Built for Scale & Trust</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Data Privacy', icon: Shield,      color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
                { label: 'AI-Powered',  icon: Brain,        color: 'text-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20'   },
                { label: 'Real-time',   icon: Zap,          color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20'  },
                { label: 'MoE Aligned', icon: Award,        color: 'text-pink-400',   bg: 'bg-pink-500/10',   border: 'border-pink-500/20'   },
              ].map(({ label, icon: Icon, color, bg, border }) => (
                <div key={label} className={`flex items-center gap-2 p-2.5 rounded-xl ${bg} border ${border}`}>
                  <Icon className={`w-3.5 h-3.5 ${color} shrink-0`} style={{ width: '14px', height: '14px' }} />
                  <span className="text-slate-300 text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default BentoSection;
