"use client";

import { motion } from "framer-motion";

/**
 * FloatingPaths — SVG animated path system based on the BackgroundPaths design language.
 * Optimized for use as a subtle decorative background behind dashboard content.
 * Uses pointer-events-none so it never blocks UI interaction.
 */
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    // Navy/blue color palette to match new SkillTrack design system
    strokeOpacity: 0.04 + i * 0.018,
    width: 0.4 + i * 0.025,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#navyGradient)"
            strokeWidth={path.width}
            strokeOpacity={path.strokeOpacity}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, path.strokeOpacity * 3, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 22 + (path.id % 7) * 3,
              repeat: Infinity,
              ease: "linear",
              delay: path.id * 0.4,
            }}
          />
        ))}
        <defs>
          <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#071A33" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * BackgroundPaths — Global ambient background for the SkillTrack application.
 *
 * Design principles:
 * - Subtle animated SVG paths in navy/blue palette
 * - Low opacity to never compete with dashboard content
 * - pointer-events-none to never block UI interaction
 * - Respects prefers-reduced-motion
 * - Single instance per layout shell for performance
 *
 * Usage:
 *   <BackgroundPaths className="fixed inset-0 z-0 pointer-events-none" />
 */
export function BackgroundPaths({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Soft background gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F8FC] via-white to-[#EBF1FA]" />

      {/* Animated SVG path layers - two opposite directions for depth */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Subtle radial vignette to softly darken corners */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, transparent 60%, rgba(7,26,51,0.03) 100%)",
        }}
      />
    </div>
  );
}

/**
 * DashboardBackground — Darker variant for dashboard content areas.
 * Slightly more pronounced paths on the light content backdrop.
 */
export function DashboardBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50" />
      <FloatingPaths position={1} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.03) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export default BackgroundPaths;
