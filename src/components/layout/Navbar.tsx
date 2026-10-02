import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  Bell, 
  Database,
  ChevronDown,
  UserCircle2,
  BarChart2,
  LogOut,
  Building2,
  ShieldCheck,
  Layers,
  GraduationCap
} from 'lucide-react';
import type { UserRole } from '../../types';

export const Navbar: React.FC = () => {
  const { 
    selectedRole, 
    setSelectedRole, 
    loadDemoData, 
    anomalies,
    currentUser,
    logout
  } = useApp();

  const navigate = useNavigate();
  const location = useLocation();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const pendingAnomaliesCount = anomalies.filter(a => a.status === 'Requires Review').length;

  const isGovDashboard = location.pathname !== '/trainee-dashboard';
  const isTraineeDashboard = location.pathname === '/trainee-dashboard';

  const roleOptions: { role: UserRole; label: string; icon: React.ReactNode }[] = [
    { role: 'ADMIN', label: 'Program Admin (MSDE)', icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
    { role: 'TRAINING_PROVIDER', label: 'Training Provider (MSDC)', icon: <Building2 className="w-4 h-4 text-blue-500" /> },
    { role: 'EMPLOYER', label: 'Employer Partner (HR)', icon: <Layers className="w-4 h-4 text-purple-500" /> },
    { role: 'TRAINEE', label: 'Trainee Portal (Rahul S.)', icon: <GraduationCap className="w-4 h-4 text-amber-500" /> },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 shadow-sm">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-3 group shrink-0">
        <div className="w-10 h-10 rounded-xl bg-[#1565C0] text-white flex items-center justify-center font-extrabold text-sm shadow-md group-hover:bg-[#1976D2] transition">
          ST
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-extrabold text-[#0D1B3E] tracking-tight">SkillTrack</h1>
            <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-200">
              State Skill Mission
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium hidden sm:block leading-tight">
            Outcome Intelligence Platform • From Training to Sustainable Employment
          </p>
        </div>
      </Link>

      {/* Center Nav Tabs */}
      <nav className="hidden md:flex items-center gap-2">
        {/* Trainee Dashboard */}
        <Link
          to="/trainee-dashboard"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
            isTraineeDashboard
              ? 'bg-[#1565C0] text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <UserCircle2 className="w-4 h-4" />
          <span>Trainee Dashboard</span>
        </Link>

        {/* Government Dashboard */}
        <Link
          to="/"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
            isGovDashboard
              ? 'bg-[#1565C0] text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          <span>Government Dashboard</span>
        </Link>

        {/* Reload Data */}
        <button
          onClick={loadDemoData}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
          title="Reload active candidate dataset"
        >
          <Database className="w-4 h-4" />
          <span>Reload Data</span>
        </button>
      </nav>

      {/* Right: Bell + User */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Notification Bell */}
        <button 
          onClick={() => navigate('/anomalies')}
          className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition"
          title="AI Anomaly Alerts"
        >
          <Bell className="w-5 h-5" />
          {pendingAnomaliesCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white font-bold text-[9px] flex items-center justify-center rounded-full">
              {pendingAnomaliesCount}
            </span>
          )}
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2.5 bg-[#0D1B3E] hover:bg-[#1a2f5e] px-3 py-1.5 rounded-xl transition cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-[#1565C0] text-white font-extrabold text-xs flex items-center justify-center">
              {currentUser?.name?.[0] || 'D'}
            </div>
            <div className="text-left hidden md:block">
              <span className="text-xs font-bold text-white block leading-tight">{currentUser?.name || 'Dr. Rajesh Deshmukh'}</span>
              <span className="text-[9px] text-blue-300 block leading-tight font-semibold">{selectedRole}</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-blue-300" />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Signed In As</span>
                <p className="text-xs font-bold text-[#0D1B3E] truncate">{currentUser?.email}</p>
                <span className="text-[10px] text-blue-700 font-semibold">{currentUser?.organization}</span>
              </div>

              <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                Switch Access Role
              </div>

              {roleOptions.map(opt => (
                <button
                  key={opt.role}
                  onClick={() => { setSelectedRole(opt.role); setUserMenuOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-xs hover:bg-slate-50 transition ${
                    selectedRole === opt.role ? 'bg-blue-50 font-bold text-[#0D1B3E]' : 'text-slate-700'
                  }`}
                >
                  {opt.icon}
                  <span>{opt.label}</span>
                </button>
              ))}

              <div className="border-t border-slate-100 mt-1 pt-1">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-left text-xs text-rose-600 hover:bg-rose-50 font-bold transition cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close menu */}
      {userMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
      )}
    </header>
  );
};
