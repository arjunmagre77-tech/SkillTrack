import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import type { UserRole } from '../types';
import {
  ShieldCheck,
  Mail,
  KeyRound,
  GraduationCap,
  ArrowRight,
  Landmark,
  Eye,
  EyeOff,
} from 'lucide-react';

type LoginType = 'GOVERNMENT' | 'TRAINEE';

interface LoginConfig {
  role: LoginType;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  demoEmail: string;
  demoName: string;
  accentFrom: string;
  accentTo: string;
  accentBorder: string;
  accentText: string;
  badgeColor: string;
}

const loginConfigs: LoginConfig[] = [
  {
    role: 'GOVERNMENT',
    label: 'Government Official',
    subtitle: 'Ministry / State Policy Analytics Portal',
    icon: <Landmark className="w-7 h-7" />,
    demoEmail: 'admin@skilltrack.gov.in',
    demoName: 'Dr. Rajesh Deshmukh',
    accentFrom: 'from-slate-800',
    accentTo: 'to-gov-950',
    accentBorder: 'border-teal-500',
    accentText: 'text-teal-300',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  },
  {
    role: 'TRAINEE',
    label: 'Trainee / Candidate',
    subtitle: 'Individual Outcome Passport & Skill Hub',
    icon: <GraduationCap className="w-7 h-7" />,
    demoEmail: 'rahul.sharma@example.com',
    demoName: 'Rahul Sharma',
    accentFrom: 'from-indigo-900',
    accentTo: 'to-violet-950',
    accentBorder: 'border-violet-400',
    accentText: 'text-violet-300',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  },
];

export const LoginPage: React.FC = () => {
  const { login } = useApp();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState<LoginType>('GOVERNMENT');
  const [email, setEmail] = useState(loginConfigs[0].demoEmail);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
      {/* Ambient Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-lg space-y-7 relative z-10">

        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-slate-700 px-5 py-2.5 rounded-2xl shadow-xl backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-teal-500/20">
              ST
            </div>
            <div className="text-left">
              <h1 className="text-xl font-black text-white tracking-tight">SkillTrack</h1>
              <p className="text-[11px] text-slate-400 font-medium">Outcome Intelligence & Longitudinal Tracking</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Secure access portal — select your login type to continue
          </p>
        </div>

        {/* Type Selector Cards */}
        <div className="grid grid-cols-2 gap-3">
          {loginConfigs.map(cfg => (
            <button
              key={cfg.role}
              type="button"
              onClick={() => handleSelectType(cfg)}
              className={`relative rounded-2xl border-2 p-5 text-left transition-all duration-200 group cursor-pointer ${
                selectedType === cfg.role
                  ? `bg-gradient-to-br ${cfg.accentFrom} ${cfg.accentTo} ${cfg.accentBorder} shadow-lg shadow-black/30`
                  : 'bg-slate-900 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
              }`}
            >
              {/* Active check indicator */}
              {selectedType === cfg.role && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
              )}

              <div className={`mb-3 ${selectedType === cfg.role ? cfg.accentText : 'text-slate-400'} transition-colors`}>
                {cfg.icon}
              </div>
              <div className={`text-sm font-bold ${selectedType === cfg.role ? 'text-white' : 'text-slate-300'} transition-colors`}>
                {cfg.label}
              </div>
              <div className={`text-[11px] mt-0.5 leading-snug ${selectedType === cfg.role ? 'text-slate-300' : 'text-slate-500'} transition-colors`}>
                {cfg.subtitle}
              </div>

              {selectedType === cfg.role && (
                <div className={`mt-3 inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${cfg.badgeColor}`}>
                  <ShieldCheck className="w-3 h-3" /> Selected
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Login Form Card */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-sm space-y-5">
          <div>
            <h2 className="text-base font-bold text-white">{active.label} Sign In</h2>
            <p className="text-xs text-slate-400 mt-0.5">{active.subtitle}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 block">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@organization.gov.in"
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-800 border border-slate-600 rounded-xl text-xs font-medium text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-400 block">Password</label>
                <span className="text-[11px] font-semibold text-teal-500 cursor-pointer hover:underline">Forgot password?</span>
              </div>
              <div className="relative">
                <KeyRound className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-9 pr-10 py-2.5 bg-slate-800 border border-slate-600 rounded-xl text-xs font-medium text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="rounded text-teal-500 focus:ring-teal-500 w-4 h-4 bg-slate-700 border-slate-600"
                />
                <span className="text-xs text-slate-400 font-medium">Keep me signed in</span>
              </label>
              <span className="text-[10px] text-slate-600 font-mono">SSL 256-bit</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
            >
              <span>Sign In to {active.label} Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Login */}
          <div className="border-t border-slate-800 pt-4 space-y-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              ⚡ Quick Demo Login (One-Click):
            </span>
            <div className="grid grid-cols-2 gap-2">
              {loginConfigs.map(cfg => (
                <button
                  key={cfg.role}
                  type="button"
                  onClick={() => handleQuickLogin(cfg)}
                  className="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-xl text-left transition flex items-center justify-between gap-2 group cursor-pointer"
                >
                  <div>
                    <div className="text-[11px] font-bold text-white truncate">{cfg.label}</div>
                    <div className="text-[10px] text-slate-500 truncate">{cfg.demoEmail}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-600">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-teal-600" /> DPDP Act Compliant</span>
          <span>•</span>
          <span>EPFO Payroll Verified</span>
          <span>•</span>
          <span>State Skill Mission</span>
        </div>
      </div>
    </div>
  );
};
