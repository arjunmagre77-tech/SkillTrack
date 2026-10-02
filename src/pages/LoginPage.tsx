import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import type { UserRole } from '../types';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Mail,
  KeyRound,
  GraduationCap,
  ArrowRight,
  Landmark,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
  Lock
} from 'lucide-react';

type LoginType = 'GOVERNMENT' | 'TRAINEE';

interface LoginConfig {
  role: LoginType;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  demoEmail: string;
  demoName: string;
  accentGradient: string;
  accentBorder: string;
  accentText: string;
  badgeBg: string;
}

const loginConfigs: LoginConfig[] = [
  {
    role: 'GOVERNMENT',
    label: 'Government Official',
    subtitle: 'Ministry & State Policy Analytics Portal',
    icon: <Landmark className="w-6 h-6" />,
    demoEmail: 'admin@skilltrack.gov.in',
    demoName: 'Dr. Rajesh Deshmukh',
    accentGradient: 'from-blue-600/20 via-blue-900/30 to-[#071A33]',
    accentBorder: 'border-blue-500/80 shadow-blue-500/20 shadow-lg',
    accentText: 'text-blue-400',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
  },
  {
    role: 'TRAINEE',
    label: 'Trainee / Candidate',
    subtitle: 'Individual Outcome Passport & Skill Hub',
    icon: <GraduationCap className="w-6 h-6" />,
    demoEmail: 'rahul.sharma@example.com',
    demoName: 'Rahul Sharma',
    accentGradient: 'from-teal-600/20 via-teal-900/30 to-[#071A33]',
    accentBorder: 'border-teal-500/80 shadow-teal-500/20 shadow-lg',
    accentText: 'text-teal-400',
    badgeBg: 'bg-teal-500/20 text-teal-300 border-teal-400/40',
  },
];

export const LoginPage: React.FC = () => {
  const { login } = useApp();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState<LoginType>('GOVERNMENT');
  const [email, setEmail] = useState(loginConfigs[0].demoEmail);
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const active = loginConfigs.find(c => c.role === selectedType)!;

  const handleSelectType = (cfg: LoginConfig) => {
    setSelectedType(cfg.role);
    setEmail(cfg.demoEmail);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, selectedType as UserRole, active.demoName);
    navigate(selectedType === 'GOVERNMENT' ? '/dashboard/government' : '/dashboard/trainee');
  };

  const handleQuickLogin = (cfg: LoginConfig) => {
    login(cfg.demoEmail, cfg.role as UserRole, cfg.demoName);
    navigate(cfg.role === 'GOVERNMENT' ? '/dashboard/government' : '/dashboard/trainee');
  };

  return (
    <div className="min-h-screen bg-[#071A33]/90 backdrop-blur-md flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Background Lighting & Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl space-y-6 relative z-10"
      >
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 bg-[#0A2246]/80 border border-[#1E3A8A]/50 px-5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-blue-500/30 ring-2 ring-white/20">
              ST
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black text-white tracking-tight">SkillTrack</h1>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  v2.4
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-medium">Outcome Intelligence & Longitudinal Tracking</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 max-w-sm mx-auto">
            State-Level Digital Public Infrastructure for Skilling & Employment Verification
          </p>
        </div>

        {/* Type Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {loginConfigs.map(cfg => {
            const isSelected = selectedType === cfg.role;
            return (
              <button
                key={cfg.role}
                type="button"
                onClick={() => handleSelectType(cfg)}
                className={`relative rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected
                    ? `bg-gradient-to-br ${cfg.accentGradient} ${cfg.accentBorder}`
                    : 'bg-[#0A2246]/40 border-[#1E3A8A]/30 hover:border-blue-500/40 hover:bg-[#0A2246]/70'
                }`}
              >
                {/* Active check indicator */}
                {isSelected && (
                  <div className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full bg-blue-500/30 border border-blue-400 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  </div>
                )}

                <div className={`mb-3 ${isSelected ? cfg.accentText : 'text-slate-400'} transition-colors`}>
                  {cfg.icon}
                </div>
                <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'} transition-colors`}>
                  {cfg.label}
                </div>
                <div className={`text-[11px] mt-1 leading-snug ${isSelected ? 'text-slate-300' : 'text-slate-400'} transition-colors`}>
                  {cfg.subtitle}
                </div>

                {isSelected && (
                  <div className={`mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border ${cfg.badgeBg}`}>
                    <CheckCircle2 className="w-3 h-3" /> Active Profile
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Login Form Card */}
        <div className="bg-[#0A2246]/70 border border-[#1E3A8A]/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-5">
          <div className="flex items-center justify-between border-b border-[#1E3A8A]/30 pb-4">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>{active.label} Authentication</span>
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">{active.subtitle}</p>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              <Lock className="w-4 h-4 text-blue-400" />
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-200 block">Official ID / Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@organization.gov.in"
                  className="w-full pl-10 pr-4 py-3 bg-[#071A33]/80 border border-[#1E3A8A]/50 rounded-xl text-xs font-medium text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-200 block">Security Password</label>
                <span className="text-[11px] font-semibold text-blue-400 cursor-pointer hover:underline">Forgot?</span>
              </div>
              <div className="relative">
                <KeyRound className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-10 py-3 bg-[#071A33]/80 border border-[#1E3A8A]/50 rounded-xl text-xs font-medium text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white transition cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 bg-[#071A33] border-[#1E3A8A]"
                />
                <span className="text-xs text-slate-300 font-medium">Remember on this workstation</span>
              </label>
              <span className="text-[10px] text-blue-300/80 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> 256-Bit SSL
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer ring-1 ring-white/20"
            >
              <span>Access {active.label} Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Login */}
          <div className="border-t border-[#1E3A8A]/30 pt-4 space-y-2.5">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              One-Click Quick Demo Switcher:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {loginConfigs.map(cfg => (
                <button
                  key={cfg.role}
                  type="button"
                  onClick={() => handleQuickLogin(cfg)}
                  className="px-3.5 py-3 bg-[#071A33]/80 hover:bg-[#071A33] border border-[#1E3A8A]/50 hover:border-blue-400/60 rounded-xl text-left transition-all flex items-center justify-between gap-2 group cursor-pointer"
                >
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white truncate group-hover:text-blue-300 transition-colors">
                      {cfg.label}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{cfg.demoEmail}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] text-slate-400 pt-2">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> DPDP Act Compliant</span>
          <span>•</span>
          <span>EPFO Payroll Verified</span>
          <span>•</span>
          <span>State Skill Mission DPI</span>
        </div>
      </motion.div>
    </div>
  );
};
