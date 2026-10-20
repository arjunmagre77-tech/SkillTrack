import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Target,
  Briefcase,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import LogoCarousel from '../components/landing/LogoCarousel';
import BentoSection  from '../components/landing/BentoSection';

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */
const TOTAL_FRAMES = 40;
const LERP         = 0.09;

const frameSrc = (n: number) =>
  `/frames2/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

/* ─────────────────────────────────────────────────────────────
   FLOATING CARDS  (unchanged)
───────────────────────────────────────────────────────────── */
const featureCards = [
  { icon: <GraduationCap className="w-5 h-5 text-cyan-300" />,   title: 'Learn',             sub: 'Build your skills',      delay: 0    },
  { icon: <Target         className="w-5 h-5 text-teal-300" />,   title: 'Gain Experience',   sub: 'Work on real projects',  delay: 0.15 },
  { icon: <Briefcase      className="w-5 h-5 text-emerald-300" />, title: 'Get Opportunities', sub: 'Land your dream job',    delay: 0.3  },
];

const navLinks = ['Home', 'Features', 'About', 'Dashboard', 'Contact'];

/* ─────────────────────────────────────────────────────────────
   SCROLL-CANVAS HOOK
───────────────────────────────────────────────────────────── */
function useScrollCanvas(
  canvasRef:    React.RefObject<HTMLCanvasElement>,
  containerRef: React.RefObject<HTMLDivElement>,
) {
  const frames         = useRef<(HTMLImageElement | null)[]>(Array(TOTAL_FRAMES).fill(null));
  const currentFrame   = useRef(0);
  const targetFrame    = useRef(0);
  const lastDrawn      = useRef(-1);
  const rafId          = useRef(0);
  const prefersReduced = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  function draw(idx: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = frames.current[Math.round(idx)];
    if (!img || !img.complete || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const cw  = canvas.clientWidth;
    const ch  = canvas.clientHeight;

    if (canvas.width !== Math.round(cw * dpr) || canvas.height !== Math.round(ch * dpr)) {
      canvas.width  = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, cw, ch);

    const CROP = 0.18;
    const srcW = img.naturalWidth;
    const srcH = img.naturalHeight * (1 - CROP);
    const scale = Math.max(cw / srcW, ch / srcH);
    const dw = srcW * scale;
    const dh = srcH * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.drawImage(img, 0, 0, srcW, srcH, dx, dy, dw, dh);

    const fadeY = ch * 0.70;
    const grad  = ctx.createLinearGradient(0, fadeY, 0, ch);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, fadeY, cw, ch - fadeY);
  }

  function tick() {
    const t = targetFrame.current;
    let   c = currentFrame.current;
    c = prefersReduced.current ? Math.round(t) : c + (t - c) * LERP;
    currentFrame.current = c;

    const rounded = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(c)));
    if (rounded !== lastDrawn.current) {
      draw(rounded);
      lastDrawn.current = rounded;
    }
    rafId.current = requestAnimationFrame(tick);
  }

  function onScroll() {
    const el = containerRef.current;
    if (!el) return;
    const rect       = el.getBoundingClientRect();
    const scrollable = el.offsetHeight - window.innerHeight;
    const scrolled   = Math.max(0, -rect.top);
    const progress   = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
    targetFrame.current = progress * (TOTAL_FRAMES - 1);

    // Fade + hide canvas once user scrolls past the hero container
    const canvas = canvasRef.current;
    if (canvas) {
      const heroBottom  = el.offsetTop + el.offsetHeight;
      const viewBottom  = window.scrollY + window.innerHeight;
      const distFromEnd = heroBottom - viewBottom; // >0 = still inside hero
      const FADE_ZONE   = 200;

      if (distFromEnd > FADE_ZONE) {
        canvas.style.opacity    = '1';
        canvas.style.visibility = 'visible';
      } else if (distFromEnd > 0) {
        canvas.style.opacity    = String(distFromEnd / FADE_ZONE);
        canvas.style.visibility = 'visible';
      } else {
        canvas.style.opacity    = '0';
        canvas.style.visibility = 'hidden';
      }
    }
  }

  function onResize() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width  = 0;
    canvas.height = 0;
    lastDrawn.current = -1;
  }

  useEffect(() => {
    let alive = true;
    function load(i: number) {
      if (!alive) return;
      const img = new Image();
      img.src    = frameSrc(i + 1);
      img.onload = () => {
        if (!alive) return;
        frames.current[i] = img;
        if (i === 0 && lastDrawn.current === -1) {
          draw(0);
          lastDrawn.current = 0;
        }
      };
    }
    load(0);
    for (let i = 1; i < TOTAL_FRAMES; i++) load(i);
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    onScroll();
    rafId.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/* ─────────────────────────────────────────────────────────────
   CANVAS COMPONENT
───────────────────────────────────────────────────────────── */
const ScrollCanvas: React.FC<{ containerRef: React.RefObject<HTMLDivElement> }> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useScrollCanvas(canvasRef, containerRef);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position     : 'fixed',
        inset        : 0,
        width        : '100%',
        height       : '100%',
        display      : 'block',
        zIndex       : 15,
        background   : '#000',
        pointerEvents: 'none',
        opacity      : 1,
        visibility   : 'visible',
        transition   : 'opacity 0.3s ease',
      }}
    />
  );
};

/* ─────────────────────────────────────────────────────────────
   LANDING PAGE
───────────────────────────────────────────────────────────── */
const LandingPage: React.FC = () => {
  const { isAuthenticated, selectedRole } = useApp();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleExploreDashboard = () => {
    if (isAuthenticated) {
      navigate(selectedRole === 'TRAINEE' ? '/dashboard/trainee' : '/dashboard/government');
    } else {
      navigate('/login');
    }
  };

  const words = ['Coding', 'Design', 'Data', 'Business', 'Future'];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIdx(p => (p + 1) % words.length), 2000);
    return () => clearInterval(id);
  }, []);

  /* ─── NOTE: plain <div style="display:contents"> acts like a fragment
     but is valid for OXC / Vite's strict JSX parser ─── */
  return (
    <div style={{ display: 'contents' }}>

      {/* ══════════════════════════════════════
          HERO — 400 vh scroll container
          The canvas is position:fixed and auto-hides when the
          user scrolls past this container into the sections below.
          ══════════════════════════════════════ */}
      <div
        ref={containerRef}
        className="font-sans select-none"
        style={{ height: '400vh', position: 'relative', overflowX: 'hidden' }}
      >
        {/* Cinematic scroll-linked canvas */}
        <ScrollCanvas containerRef={containerRef} />

        {/* Sticky hero shell — stays at viewport top while container scrolls */}
        <div
          style={{
            position      : 'sticky',
            top           : 0,
            height        : '100vh',
            zIndex        : 20,
            display       : 'flex',
            flexDirection : 'column',
          }}
        >
          {/* Vignette & bottom fade — INSIDE sticky so they never bleed onto lower sections */}
          <div
            aria-hidden="true"
            style={{
              position  : 'absolute',
              inset     : 0,
              zIndex    : 0,
              pointerEvents: 'none',
              background: 'radial-gradient(ellipse at 30% 50%, transparent 20%, rgba(0,0,0,0.65) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position  : 'absolute',
              bottom    : 0,
              left      : 0,
              right     : 0,
              height    : '140px',
              zIndex    : 0,
              pointerEvents: 'none',
              background: 'linear-gradient(to top, #000 0%, transparent 100%)',
            }}
          />

          {/* ── NAVBAR ── */}
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ zIndex: 50 }}
            className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
              scrolled
                ? 'bg-[#060e1e]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40'
                : 'bg-transparent'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
              {/* Brand */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-black text-lg tracking-tight">SkillTrack</span>
              </div>

              {/* Desktop links */}
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link, i) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-sm font-medium transition-colors ${
                        i === 0
                          ? 'text-cyan-400 border-b border-cyan-400 pb-0.5'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Desktop CTAs */}
              <div className="hidden md:flex items-center gap-3">
                {isAuthenticated && (
                  <button
                    onClick={() => navigate(selectedRole === 'TRAINEE' ? '/dashboard/trainee' : '/dashboard/government')}
                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    My Dashboard
                  </button>
                )}
                <button
                  onClick={handleExploreDashboard}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white text-sm font-bold shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
                >
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileOpen(p => !p)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden bg-[#060e1e]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6 pt-4 space-y-4"
              >
                {navLinks.map(link => (
                  <a key={link} href="#" className="block text-slate-300 hover:text-white text-sm font-medium py-1">
                    {link}
                  </a>
                ))}
                <button
                  onClick={handleExploreDashboard}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-bold mt-2"
                >
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </motion.nav>

          {/* ── HERO CONTENT ── */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
            <div className="flex w-full items-center justify-between gap-10 pt-16">

              {/* Left — text */}
              <div className="flex-1 max-w-2xl space-y-7">
                {/* Badge */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    Skills Today, Opportunities Tomorrow.
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-1">
                  <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                    Track. Learn.
                  </h1>
                  <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                      Build Your Future.
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-slate-300 text-base leading-relaxed max-w-lg">
                  SkillTrack is a government initiative to help students, professionals
                  and institutions track skills, discover opportunities and build
                  future-ready careers — with data-driven insights and AI-powered guidance.
                </motion.p>

                {/* Word ticker */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="flex items-center gap-3">
                  <span className="text-slate-500 text-sm font-medium">Specializations:</span>
                  <motion.span
                    key={wordIdx}
                    initial={{ opacity: 0, y: 8  }}
                    animate={{ opacity: 1, y: 0  }}
                    exit={{    opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-400 font-bold text-sm"
                  >
                    {words[wordIdx]}
                  </motion.span>
                </motion.div>

                {/* CTAs */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap items-center gap-4">
                  <button
                    id="explore-dashboard-btn"
                    onClick={handleExploreDashboard}
                    className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
                  >
                    Explore Dashboard
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white font-semibold text-sm backdrop-blur-sm transition-all">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>

              {/* Right — floating feature cards */}
              <div className="hidden lg:flex flex-col gap-4 items-end shrink-0">
                {featureCards.map(card => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0  }}
                    transition={{ duration: 0.6, delay: 0.5 + card.delay }}
                    whileHover={{ scale: 1.05, x: -6 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30 w-56 cursor-default"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)' }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{card.title}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{card.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>{/* end sticky hero shell */}
      </div>{/* end 400vh container */}

      {/* ══════════════════════════════════════
          LOGO CAROUSEL — appears after hero scroll ends
          ══════════════════════════════════════ */}
      <LogoCarousel />

      {/* ══════════════════════════════════════
          BENTO GRID
          ══════════════════════════════════════ */}
      <BentoSection />

    </div>
  );
};

export default LandingPage;
