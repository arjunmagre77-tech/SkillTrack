import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { traineeNavigation } from '../../config/navigation';
import { ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';

export const TraineeSidebar: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useApp();

  const categories = ['CORE', 'MY CAREER', 'OUTCOMES'] as const;

  return (
    <aside 
      className={`bg-teal-950 text-slate-200 flex flex-col border-r border-teal-900 shrink-0 select-none transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Header Badge */}
      <div className="p-3 border-b border-teal-900 bg-teal-900/60 flex items-center justify-between min-h-[57px]">
        {sidebarOpen ? (
          <>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                <UserCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-teal-200 uppercase tracking-wider truncate">
                Trainee Portal
              </span>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-1 hover:bg-teal-800 text-slate-300 hover:text-white rounded transition cursor-pointer"
              title="Collapse Sidebar"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center p-1.5 hover:bg-teal-800 text-teal-400 rounded transition cursor-pointer"
            title="Expand Sidebar Navigation"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-4">
        {categories.map(cat => {
          const items = traineeNavigation.filter(item => item.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="space-y-1">
              {sidebarOpen && (
                <div className="px-2 py-1 text-[10px] font-bold text-teal-400/80 uppercase tracking-wider truncate">
                  {cat}
                </div>
              )}

              {items.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/dashboard/trainee'}
                  title={!sidebarOpen ? item.label : undefined}
                  className={({ isActive }) => `w-full flex items-center ${
                    sidebarOpen ? 'justify-between px-3 py-2' : 'justify-center py-2 px-0'
                  } rounded-lg text-xs font-medium transition ${
                    isActive
                      ? 'bg-teal-800/80 text-white font-bold shadow-sm border-l-4 border-teal-400'
                      : 'text-slate-300 hover:bg-teal-900/60 hover:text-white'
                  }`}
                >
                  <div className={`flex items-center ${sidebarOpen ? 'gap-2.5' : 'justify-center'}`}>
                    <span>{item.icon}</span>
                    {sidebarOpen && <span className="truncate">{item.label}</span>}
                  </div>

                  {item.badge && sidebarOpen && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-900 text-teal-300">
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
      <div className="p-3 border-t border-teal-900 bg-teal-900/40 text-[11px] text-slate-300 flex items-center justify-between">
        {sidebarOpen ? (
          <>
            <div>
              <p className="font-semibold text-teal-100">Candidate Dashboard</p>
              <p className="text-[10px] text-teal-300/70">Individual Outcome Tracker</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" title="Trainee Portal Active" />
          </>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" title="Trainee Portal Active" />
          </div>
        )}
      </div>
    </aside>
  );
};
