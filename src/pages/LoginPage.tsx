import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import type { UserRole } from '../types';
import { 
  ShieldCheck, 
  Mail, 
  KeyRound, 
  Building2, 
  GraduationCap, 
  Layers, 
  ArrowRight
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login } = useApp();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState<UserRole>('ADMIN');
  const [email, setEmail] = useState('admin@skilltrack360.gov.in');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);

  // If already logged in, offer quick jump to dashboard
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, selectedRole);
    navigate('/');
  };

  const handleQuickLogin = (role: UserRole, demoEmail: string, demoName: string) => {
    setSelectedRole(role);
    setEmail(demoEmail);
    login(demoEmail, role, demoName);
    navigate('/');
  };

  const roleConfigs: { role: UserRole; title: string; email: string; name: string; icon: React.ReactNode; desc: string }[] = [
    { 
      role: 'ADMIN', 
      title: 'Program Admin', 
      email: 'admin@skilltrack360.gov.in', 
      name: 'Dr. Rajesh Deshmukh',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      desc: 'State & Central Ministry Policy Analytics' 
    },
    { 
      role: 'TRAINING_PROVIDER', 
      title: 'Training Provider', 
      email: 'provider@msdc.gov.in', 
      name: 'MSDC Pune Center',
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      desc: 'Vocational Center Outcome Management' 
    },
    { 
      role: 'EMPLOYER', 
      title: 'Employer HR', 
      email: 'hr@xyztech.com', 
      name: 'XYZ Technologies HR',
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      desc: 'Corporate Hiring & Payroll Verification' 
    },
    { 
      role: 'TRAINEE', 
      title: 'Trainee Portal', 
      email: 'rahul.sharma@example.com', 
      name: 'Rahul Sharma',
      icon: <GraduationCap className="w-5 h-5 text-amber-600" />,
      desc: 'Individual Digital Outcome Passport' 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Background Lighting & Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl space-y-6 relative z-10">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 bg-gov-950/80 border border-gov-800 px-4 py-2 rounded-2xl shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gov-900 text-teal-400 flex items-center justify-center font-extrabold text-xl border border-gov-800">
              360
            </div>
            <div className="text-left">
              <h1 className="text-xl font-black text-white tracking-tight">SkillTrack 360</h1>
              <p className="text-[11px] text-slate-400 font-medium">Outcome Intelligence & Longitudinal Tracking</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Sign in to access your authorized role portal & digital outcome passport records
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
          {/* Role Selector Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">Select Access Role:</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {roleConfigs.map(item => (
                <button
                  key={item.role}
                  type="button"
                  onClick={() => {
                    setSelectedRole(item.role);
                    setEmail(item.email);
                  }}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center gap-1 transition cursor-pointer ${
                    selectedRole === item.role
                      ? 'bg-gov-950 text-white border-gov-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.icon}
                  <span className="text-[11px] font-bold leading-tight mt-0.5">{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Credentials Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Official Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@organization.gov.in"
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-gov-600 focus:bg-white transition"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 block">Password</label>
                <span className="text-[11px] font-semibold text-teal-700 cursor-pointer hover:underline">Forgot password?</span>
              </div>
              <div className="relative">
                <KeyRound className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-gov-600 focus:bg-white transition"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <span className="text-xs text-slate-600 font-medium">Keep me signed in</span>
              </label>

              <span className="text-[10px] text-slate-400 font-mono">SSL Encrypted 256-bit</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gov-900 hover:bg-gov-800 text-teal-300 font-extrabold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <span>Sign In to {selectedRole} Portal</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </form>

          {/* Quick Demo One-Click Jump Buttons */}
          <div className="border-t border-slate-100 pt-4 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Quick One-Click Access (Demo Login):
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {roleConfigs.map(c => (
                <button
                  key={c.role}
                  type="button"
                  onClick={() => handleQuickLogin(c.role, c.email, c.name)}
                  className="px-3 py-2 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl text-left transition text-[11px] font-medium text-slate-700 flex items-center justify-between cursor-pointer"
                >
                  <span className="truncate font-bold text-gov-900">{c.title}</span>
                  <ArrowRight className="w-3 h-3 text-teal-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Security Badges */}
        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> DPDP Act Compliant</span>
          <span>•</span>
          <span>EPFO Payroll Verification</span>
          <span>•</span>
          <span>State Skill Mission</span>
        </div>
      </div>
    </div>
  );
};
