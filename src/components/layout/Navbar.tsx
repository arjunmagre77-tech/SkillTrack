import React from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import type { UserRole } from '../../types';
import { 
  Search, 
  Bell, 
  Building2, 
  ShieldCheck, 
  GraduationCap, 
  ChevronDown,
  Layers,
  Database,
  LogOut,
  PanelLeft,
  Menu
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    selectedRole, 
    setSelectedRole, 
    loadDemoData, 
    searchQuery, 
    setSearchQuery,
    anomalies,
    currentUser,
    logout,
    sidebarOpen,
    toggleSidebar
  } = useApp();

  const navigate = useNavigate();

  const pendingAnomaliesCount = anomalies.filter(a => a.status === 'Requires Review').length;

  const roleOptions: { role: UserRole; label: string; icon: React.ReactNode }[] = [
    { role: 'ADMIN', label: 'Program Admin (MSDE)', icon: <ShieldCheck className="w-4 h-4 text-emerald-600" /> },
    { role: 'TRAINING_PROVIDER', label: 'Training Provider (MSDC)', icon: <Building2 className="w-4 h-4 text-blue-600" /> },
    { role: 'EMPLOYER', label: 'Employer Partner (HR)', icon: <Layers className="w-4 h-4 text-purple-600" /> },
    { role: 'TRAINEE', label: 'Trainee Portal (Rahul S.)', icon: <GraduationCap className="w-4 h-4 text-amber-600" /> },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 shadow-sm">
      {/* Sidebar Toggle & Brand Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 text-slate-600 hover:text-gov-900 hover:bg-slate-100 rounded-lg transition cursor-pointer"
          title={sidebarOpen ? "Collapse Navigation Sidebar" : "Expand Navigation Sidebar"}
          aria-label="Toggle Sidebar Navigation"
        >
          {sidebarOpen ? <PanelLeft className="w-5 h-5 text-gov-800" /> : <Menu className="w-5 h-5 text-gov-800" />}
        </button>

        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gov-900 text-white flex items-center justify-center font-black text-lg shadow-md border border-gov-800 group-hover:bg-gov-800 transition">
            <span className="text-teal-400">ST</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-extrabold text-gov-900 tracking-tight">SkillTrack</h1>
              <span className="text-[10px] font-bold bg-gov-100 text-gov-900 px-2 py-0.5 rounded-full border border-gov-200">
                State Skill Mission
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              Outcome Intelligence Platform • From Training to Sustainable Employment
            </p>
          </div>
        </Link>
      </div>

      {/* Global Search */}
      <div className="hidden lg:flex items-center relative w-72">
        <Search className="w-4 h-4 absolute left-3 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search candidate, district, provider..."
          className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100/80 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-600 focus:bg-white transition"
        />
      </div>

      {/* Actions & Role Switcher */}
      <div className="flex items-center gap-3">
        {/* Load Data Dataset Button */}
        <button
          onClick={loadDemoData}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold rounded-lg shadow-sm transition active:scale-95 cursor-pointer"
          title="Reload active candidate dataset"
        >
          <Database className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reload Dataset</span>
        </button>

        {/* Notifications Alert Center badge */}
        <button 
          onClick={() => navigate('/anomalies')}
          className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
          title="AI Anomaly Alerts"
        >
          <Bell className="w-4 h-4" />
          {pendingAnomaliesCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center rounded-full">
              {pendingAnomaliesCount}
            </span>
          )}
        </button>

        {/* Role & Auth Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 cursor-pointer transition">
            <div className="w-6 h-6 rounded-full bg-gov-900 text-teal-300 font-bold text-[10px] flex items-center justify-center">
              {currentUser?.name?.[0] || 'U'}
            </div>
            <div className="text-left hidden md:block">
              <span className="text-[11px] font-bold text-gov-900 block leading-tight">{currentUser?.name || 'User'}</span>
              <span className="text-[9px] text-slate-500 block leading-tight font-medium">{selectedRole}</span>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-500" />
          </div>

          <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 py-1 hidden group-hover:block z-50">
            <div className="px-3 py-2 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Signed In As</span>
              <p className="text-xs font-bold text-gov-900 truncate">{currentUser?.email}</p>
              <span className="text-[10px] text-teal-700 font-semibold">{currentUser?.organization}</span>
            </div>

            <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
              Switch Access Role
            </div>

            {roleOptions.map(opt => (
              <button
                key={opt.role}
                onClick={() => setSelectedRole(opt.role)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs hover:bg-slate-50 transition ${
                  selectedRole === opt.role ? 'bg-slate-100 font-bold text-gov-900' : 'text-slate-700'
                }`}
              >
                {opt.icon}
                <span>{opt.label}</span>
              </button>
            ))}

            <div className="border-t border-slate-100 mt-1 pt-1">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-left text-xs text-rose-600 hover:bg-rose-50 font-bold transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
