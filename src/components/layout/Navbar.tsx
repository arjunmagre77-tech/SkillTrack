import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  Bell, 
  Database,
  ChevronDown,
  LogOut,
  PanelLeft,
  Menu,
  Landmark,
  GraduationCap,
  ShieldCheck,
  Search,
} from 'lucide-react';
import type { UserRole } from '../../types';

export const Navbar: React.FC = () => {
  const { 
    loadDemoData, 
    anomalies,
    currentUser,
    logout,
    sidebarOpen,
    toggleSidebar,
    selectedRole,
    setSelectedRole,
  } = useApp();

  const navigate = useNavigate();
  const location = useLocation();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isTraineeActive = location.pathname.startsWith('/dashboard/trainee');
  const pendingAnomaliesCount = anomalies.filter(a => a.status === 'Requires Review').length;
  const isGovUser = currentUser?.role === 'GOVERNMENT' || selectedRole === 'GOVERNMENT';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const roleOptions: { role: UserRole; label: string; icon: React.ReactNode }[] = [
    { role: 'GOVERNMENT', label: 'Government Official (Admin)', icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
    { role: 'TRAINEE', label: 'Trainee Portal (Rahul S.)', icon: <GraduationCap className="w-4 h-4 text-amber-500" /> },
  ];

  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 shadow-sm">
      {/* Sidebar Toggle & Brand Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition cursor-pointer"
          title={sidebarOpen ? "Collapse Navigation Sidebar" : "Expand Navigation Sidebar"}
          aria-label="Toggle Sidebar Navigation"
        >
          {sidebarOpen ? <PanelLeft className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
        </button>

        <Link to={isTraineeActive ? "/dashboard/trainee" : "/dashboard/government"} className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#1565C0] text-white flex items-center justify-center font-black text-sm shadow-md group-hover:bg-[#1976D2] transition">
            <span className="text-teal-300">ST</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-extrabold text-[#0D1B3E] tracking-tight">SkillTrack</h1>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isGovUser
                  ? 'bg-blue-100 text-blue-800 border-blue-200'
                  : 'bg-violet-100 text-violet-800 border-violet-200'
              }`}>
                {isGovUser ? 'Government Portal' : 'Trainee Portal'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block leading-tight">
              Outcome Intelligence Platform • From Training to Sustainable Employment
            </p>
          </div>
        </Link>
      </div>

      {/* PORTAL INDICATOR (contextual) */}
      <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
        {isGovUser ? (
          <>
            <Landmark className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-[#0D1B3E]">Government Dashboard</span>
          </>
        ) : (
          <>
            <GraduationCap className="w-4 h-4 text-violet-600" />
            <span className="text-xs font-bold text-[#0D1B3E]">Trainee Dashboard</span>
          </>
        )}
      </div>

      {/* Global Search */}
      <div className="hidden xl:flex items-center relative w-64">
        <Search className="w-4 h-4 absolute left-3 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search candidate, district, provider..."
          className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
      </div>

      {/* Right Actions: Reload, Alerts, User Menu */}
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        {/* Reload Demo Data */}
        <button
          onClick={loadDemoData}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition active:scale-95 cursor-pointer"
          title="Reload active candidate dataset"
        >
          <Database className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reload Data</span>
        </button>

        {/* Anomaly Bell */}
        <button 
          onClick={() => navigate('/dashboard/government/ai-anomaly')}
          className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition cursor-pointer"
          title="AI Anomaly Alerts"
        >
          <Bell className="w-4 h-4" />
          {pendingAnomaliesCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white font-bold text-[9px] flex items-center justify-center rounded-full">
              {pendingAnomaliesCount}
            </span>
          )}
        </button>

        {/* User Info & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2.5 bg-[#0D1B3E] hover:bg-[#1a2f5e] px-3 py-1.5 rounded-xl transition cursor-pointer"
          >
            <div className={`w-6 h-6 rounded-full font-bold text-[10px] flex items-center justify-center text-white ${
              isGovUser ? 'bg-blue-600' : 'bg-violet-600'
            }`}>
              {currentUser?.name?.[0] || 'U'}
            </div>
            <div className="text-left hidden md:block">
              <span className="text-[11px] font-bold text-white block leading-tight">{currentUser?.name || 'User'}</span>
              <span className="text-[9px] text-blue-200 block leading-tight font-medium">
                {isGovUser ? 'Government Official' : 'Trainee / Candidate'}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-blue-200" />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Signed In As</span>
                <p className="text-xs font-bold text-[#0D1B3E] truncate">{currentUser?.email}</p>
                <span className="text-[10px] text-blue-700 font-semibold">{currentUser?.organization}</span>
              </div>

              <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                Switch Role / View
              </div>

              {roleOptions.map(opt => (
                <button
                  key={opt.role}
                  onClick={() => {
                    setSelectedRole?.(opt.role);
                    setUserMenuOpen(false);
                    if (opt.role === 'TRAINEE') {
                      navigate('/dashboard/trainee');
                    } else {
                      navigate('/dashboard/government');
                    }
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-xs hover:bg-slate-50 transition cursor-pointer ${
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
