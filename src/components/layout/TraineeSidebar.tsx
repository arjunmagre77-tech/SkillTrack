import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { traineeNavigation } from '../../config/navigation';
import { ChevronLeft, ChevronRight, UserCheck, Sparkles } from 'lucide-react';

export const TraineeSidebar: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useApp();

  const categories = ['CORE', 'MY CAREER', 'OUTCOMES'] as const;

  return (
    <aside 
      className={`bg-[#071A33] text-slate-200 flex flex-col border-r border-[#1E3A8A]/30 shrink-0 select-none transition-all duration-300 relative z-20 shadow-xl ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Header Badge */}
      <div className="p-3.5 border-b border-[#1E3A8A]/30 bg-[#0A2246]/50 backdrop-blur-md flex items-center justify-between min-h-[61px]">
        {sidebarOpen ? (
          <>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-teal-500/20">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Candidate Portal
                </span>
                <span className="text-[10px] text-teal-400 font-medium">Outcome Passport</span>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-1.5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Collapse Sidebar"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center p-2 hover:bg-white/10 text-teal-400 rounded-lg transition-colors cursor-pointer"
            title="Expand Sidebar Navigation"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto p-2.5 space-y-4 custom-scrollbar">
        {categories.map(cat => {
          const items = traineeNavigation.filter(item => item.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="space-y-1">
              {sidebarOpen && (
                <div className="px-3 py-1 text-[10px] font-bold text-teal-400/80 uppercase tracking-widest truncate">
                  {cat}
                </div>
              )}

              {items.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/dashboard/trainee'}
                  title={!sidebarOpen ? item.label : undefined}
                  className={({ isActive }) => `relative w-full flex items-center ${
                    sidebarOpen ? 'justify-between px-3 py-2.5' : 'justify-center py-3 px-0'
                  } rounded-xl text-xs font-medium transition-all group ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-600/90 to-cyan-600/90 text-white font-bold shadow-lg shadow-teal-900/40 border border-teal-400/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                    <span className="text-base shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                    {sidebarOpen && <span className="truncate tracking-wide">{item.label}</span>}
                  </div>

                  {item.badge && sidebarOpen && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-900/80 border border-teal-500/30 text-teal-300">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-3 border-t border-[#1E3A8A]/30 bg-[#0A2246]/30 backdrop-blur-sm text-[11px] text-slate-300 flex items-center justify-between">
        {sidebarOpen ? (
          <>
            <div>
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Candidate Portal</span>
              </p>
              <p className="text-[10px] text-slate-400">Longitudinal Tracker</p>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 ring-4 ring-teal-400/20 animate-pulse" title="Trainee Portal Active" />
          </>
        ) : (
          <div className="w-full flex justify-center py-1">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 ring-4 ring-teal-400/20 animate-pulse" title="Trainee Portal Active" />
          </div>
        )}
      </div>
    </aside>
  );
};
