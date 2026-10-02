/**
 * BackgroundPaths — Lightweight ambient background for the SkillTrack application.
 *
 * PERFORMANCE FIX: The previous version used 60 Framer Motion SVG paths all
 * animating infinitely (pathLength + pathOffset + opacity). This caused severe
 * GPU thrashing and frame drops across both dashboards.
 *
 * Replaced with a pure CSS approach: static gradient + two CSS-animated
 * decorative blobs using @keyframes + will-change: transform (GPU composited,
 * no JS overhead, no layout recalculation per frame).
 */
export function BackgroundPaths({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F8FC] via-white to-[#EBF1FA]" />

      {/* Decorative blobs — GPU-composited via will-change: transform */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] bg-brand-500 blur-3xl"
        style={{ willChange: 'transform', animation: 'bg-drift-1 18s ease-in-out infinite alternate' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.05] bg-cyan-500 blur-3xl"
        style={{ willChange: 'transform', animation: 'bg-drift-2 22s ease-in-out infinite alternate' }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(to right, #2563EB 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 0%, transparent 60%, rgba(7,26,51,0.03) 100%)',
        }}
      />

      <style>{`
        @keyframes bg-drift-1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(40px, 30px) scale(1.08); }
        }
        @keyframes bg-drift-2 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-30px, -40px) scale(1.06); }
        }
      `}</style>
    </div>
  );
}

/**
 * DashboardBackground — Slightly more pronounced variant for dashboard content areas.
 */
export function DashboardBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

export default BackgroundPaths;
