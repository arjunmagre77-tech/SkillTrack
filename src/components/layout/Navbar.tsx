import React from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  ShieldCheck, 
  GraduationCap,
  ChevronDown,
  Database,
  LogOut,
  PanelLeft,
  Menu,
  Landmark,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
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
  const location = useLocation();

  const isTraineeActive = location.pathname.startsWith('/dashboard/trainee');
  const isGovernmentActive = location.pathname.startsWith('/dashboard/government');

  const pendingAnomaliesCount = anomalies.filter(a => a.status === 'Requires Review').length;
  const isGovUser = currentUser?.role === 'GOVERNMENT';

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

        <Link to={isTraineeActive ? "/dashboard/trainee" : "/dashboard/government"} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gov-900 text-white flex items-center justify-center font-black text-lg shadow-md border border-gov-800 group-hover:bg-gov-800 transition">
            <span className="text-teal-400">ST</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-extrabold text-gov-900 tracking-tight">SkillTrack</h1>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isGovUser
                  ? 'bg-teal-100 text-teal-800 border-teal-200'
                  : 'bg-violet-100 text-violet-800 border-violet-200'
              }`}>
                {isGovUser ? 'Government Portal' : 'Trainee Portal'}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              Outcome Intelligence Platform • From Training to Sustainable Employment
            </p>
          </div>
        </Link>
      </div>

      {/* PORTAL INDICATOR (non-clickable, shows current role context) */}
      <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
        {isGovUser ? (
          <>
            <Landmark className="w-4 h-4 text-teal-600" />
            <span className="text-xs font-bold text-gov-900">Government Dashboard</span>
          </>
        ) : (
          <>
            <GraduationCap className="w-4 h-4 text-violet-600" />
            <span className="text-xs font-bold text-gov-900">Trainee Dashboard</span>
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
          className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100/80 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-600 focus:bg-white transition"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Reload Demo Data — only shown for government users */}
        {isGovUser && (
          <button
            onClick={loadDemoData}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold rounded-lg shadow-sm transition active:scale-95 cursor-pointer"
            title="Reload active candidate dataset"
          >
            <Database className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reload Data</span>
          </button>
        )}

        {/* Anomaly Bell — only shown for government users */}
        {isGovUser && (
          <button 
            onClick={() => navigate('/dashboard/government/ai-anomaly')}
            className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition cursor-pointer"
            title="AI Anomaly Alerts"
          >
            <Bell className="w-4 h-4" />
            {pendingAnomaliesCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center rounded-full">
                {pendingAnomaliesCount}
              </span>
            )}
          </button>
        )}

        {/* User Info & Logout Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 cursor-pointer transition">
            <div className={`w-6 h-6 rounded-full font-bold text-[10px] flex items-center justify-center ${
              isGovUser ? 'bg-gov-900 text-teal-300' : 'bg-violet-700 text-violet-200'
            }`}>
              {currentUser?.name?.[0] || 'U'}
            </div>
            <div className="text-left hidden md:block">
              <span className="text-[11px] font-bold text-gov-900 block leading-tight">{currentUser?.name || 'User'}</span>
              <span className="text-[9px] text-slate-500 block leading-tight font-medium">
                {isGovUser ? 'Government Official' : 'Trainee / Candidate'}
              </span>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-500" />
          </div>

          <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 py-1 hidden group-hover:block z-50">
            {/* User Info */}
            <div className="px-3 py-2 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Signed In As</span>
              <p className="text-xs font-bold text-gov-900 truncate">{currentUser?.email}</p>
              <span className="text-[10px] text-teal-700 font-semibold">{currentUser?.organization}</span>
            </div>

            {/* Portal Badge */}
            <div className="px-3 py-2 flex items-center gap-2">
              {isGovUser
                ? <><ShieldCheck className="w-4 h-4 text-teal-600" /><span className="text-xs text-teal-700 font-bold">Government Portal</span></>
                : <><GraduationCap className="w-4 h-4 text-violet-600" /><span className="text-xs text-violet-700 font-bold">Trainee Portal</span></>
              }
            </div>

            {/* Logout */}
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
