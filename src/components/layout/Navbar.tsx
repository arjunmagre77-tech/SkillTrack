import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  Building2,
  Wifi,
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
  const isGovUser = currentUser?.role === 'GOVERNMENT';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const roleOptions: { role: UserRole; label: string; sub: string; icon: React.ReactNode; color: string }[] = [
    {
      role: 'GOVERNMENT',
      label: 'Government Official',
      sub: 'Policy & Intelligence Portal',
      icon: <Building2 className="w-4 h-4" />,
      color: 'text-brand-600',
    },
    {
      role: 'TRAINEE',
      label: 'Trainee / Candidate',
      sub: 'Individual Outcome Dashboard',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'text-violet-600',
    },
  ];

  return (
    <header className="h-16 bg-white/95 backdrop-blur-md border-b border-[#D9E2EF] sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 shadow-nav">
      {/* LEFT — Sidebar Toggle + Brand */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={toggleSidebar}
          className="p-2 text-[#64748B] hover:text-navy-900 hover:bg-[#F5F8FC] rounded-xl transition-all duration-150 cursor-pointer shrink-0"
          title={sidebarOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen
            ? <PanelLeft className="w-5 h-5" />
            : <Menu className="w-5 h-5" />
          }
        </button>

        <Link
          to={isTraineeActive ? '/dashboard/trainee' : '/dashboard/government'}
          className="flex items-center gap-2.5 group shrink-0"
        >
          {/* Logo mark */}
          {isTraineeActive ? (
            <div className="flex items-end gap-1 h-6 shrink-0 text-[#1A73E8] px-1">
              <span className="w-1.5 h-3 bg-[#1A73E8] rounded-xs" />
              <span className="w-1.5 h-6 bg-[#1A73E8] rounded-xs" />
              <span className="w-1.5 h-4.5 bg-[#1A73E8] rounded-xs" />
            </div>
          ) : (
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-navy-800 text-white flex items-center justify-center font-black text-sm shadow-blue-sm group-hover:shadow-blue transition-shadow duration-200">
              ST
            </div>
          )}
          {/* Brand text */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold text-navy-900 tracking-tight">SkillTrack</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isGovUser
                  ? 'bg-brand-50 text-brand-700 border-brand-200'
                  : 'bg-[#EFF6FF] text-[#1A73E8] border-[#DBEAFE]'
              }`}>
                {isGovUser ? 'Government Portal' : 'Trainee Portal'}
              </span>
            </div>
            <p className="text-[10px] text-[#94A3B8] font-medium leading-tight hidden md:block">
              Outcome Intelligence Platform
            </p>
          </div>
        </Link>
      </div>

      {/* CENTER — Portal Indicator + Search */}
      <div className="hidden lg:flex items-center gap-4 flex-1 max-w-md mx-8">
        {/* Portal context badge */}
        <div className="flex items-center gap-2 bg-[#F5F8FC] border border-[#D9E2EF] px-3 py-1.5 rounded-xl shrink-0">
          {isGovUser
            ? <><Landmark className="w-3.5 h-3.5 text-brand-600" /><span className="text-xs font-semibold text-navy-800">Government Intelligence</span></>
            : <><GraduationCap className="w-3.5 h-3.5 text-[#1A73E8]" /><span className="text-xs font-bold text-[#1A73E8]">Trainee Dashboard</span></>
          }
        </div>

        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search candidates, districts, programs, or sectors..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#F5F8FC] border border-[#D9E2EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 focus:bg-white transition-all duration-150 placeholder:text-[#94A3B8]"
          />
        </div>
      </div>

      {/* RIGHT — Actions */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Reload Data */}
        <button
          onClick={loadDemoData}
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-[#F5F8FC] hover:bg-[#EBF1FA] text-navy-700 hover:text-brand-700 text-xs font-semibold border border-[#D9E2EF] rounded-xl transition-all duration-150 cursor-pointer"
          title="Reload Demo Dataset"
        >
          <Database className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Reload Data</span>
        </button>

        {/* Anomaly Bell */}
        <button
          onClick={() => navigate('/dashboard/government/ai-anomaly')}
          className="relative p-2 text-[#64748B] hover:text-navy-900 hover:bg-[#F5F8FC] border border-transparent hover:border-[#D9E2EF] rounded-xl transition-all duration-150 cursor-pointer"
          title={`AI Anomaly Alerts${pendingAnomaliesCount > 0 ? ` (${pendingAnomaliesCount} pending)` : ''}`}
        >
          <Bell className="w-4 h-4" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white font-bold text-[9px] flex items-center justify-center rounded-full ring-2 ring-white">
            {pendingAnomaliesCount > 0 ? pendingAnomaliesCount : 2}
          </span>
        </button>

        {/* User Menu */}
        <div className="relative">
          {isTraineeActive ? (
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 pl-1 pr-2 py-1 hover:bg-slate-100 rounded-xl transition-all duration-150 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-[#1A73E8] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                DT
              </div>
              <div className="hidden md:block text-left">
                <div className="text-xs font-bold text-[#0F172A] leading-tight">Dr. Trainee</div>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          ) : (
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-navy-900 hover:bg-navy-800 text-white rounded-xl transition-all duration-150 cursor-pointer shadow-sm"
            >
              <div className="w-6 h-6 rounded-lg font-bold text-[10px] flex items-center justify-center shrink-0 bg-brand-500/30 text-brand-200">
                {currentUser?.name?.[0] || 'U'}
              </div>
              <div className="hidden md:block text-left">
                <div className="text-[11px] font-bold leading-tight">{currentUser?.name?.split(' ')[0] || 'User'}</div>
                <div className="text-[9px] text-navy-300 leading-tight">Gov. Official</div>
              </div>
              <ChevronDown className={`w-3 h-3 text-navy-300 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          )}

          <AnimatePresence>
            {userMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute right-0 top-full mt-2 w-72 bg-white/98 backdrop-blur-sm rounded-2xl shadow-panel border border-[#D9E2EF] py-2 z-50 overflow-hidden"
              >
                {/* User info header */}
                <div className="px-4 py-3 border-b border-[#F0F4F9]">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl font-extrabold text-sm flex items-center justify-center ${
                      isGovUser ? 'bg-brand-100 text-brand-700' : 'bg-violet-100 text-violet-700'
                    }`}>
                      {currentUser?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy-900">{currentUser?.name || 'User'}</p>
                      <p className="text-[10px] text-[#64748B] truncate max-w-[160px]">{currentUser?.email}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Wifi className="w-2.5 h-2.5 text-success-500" />
                        <span className="text-[9px] text-success-600 font-medium">Authenticated</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Switch Role */}
                <div className="px-3 pt-2 pb-1">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider px-1 mb-1.5">Switch Portal</p>
                  {roleOptions.map(opt => (
                    <button
                      key={opt.role}
                      onClick={() => {
                        setSelectedRole?.(opt.role);
                        setUserMenuOpen(false);
                        navigate(opt.role === 'TRAINEE' ? '/dashboard/trainee' : '/dashboard/government');
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs transition-all duration-150 cursor-pointer mb-0.5 ${
                        selectedRole === opt.role
                          ? 'bg-brand-50 border border-brand-200 font-bold text-navy-900'
                          : 'hover:bg-[#F5F8FC] text-[#334155]'
                      }`}
                    >
                      <span className={`p-1.5 rounded-lg ${selectedRole === opt.role ? 'bg-brand-100' : 'bg-slate-100'} ${opt.color}`}>
                        {opt.icon}
                      </span>
                      <div className="text-left">
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-[10px] text-[#64748B]">{opt.sub}</div>
                      </div>
                      {selectedRole === opt.role && (
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-500 ml-auto" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Logout */}
                <div className="border-t border-[#F0F4F9] mt-1 px-3 pt-2 pb-1">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs text-danger-600 hover:bg-danger-50 font-semibold transition-all duration-150 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Click-outside overlay */}
      {userMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setUserMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};
