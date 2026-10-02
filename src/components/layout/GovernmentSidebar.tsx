import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { governmentNavigation } from '../../config/navigation';
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

export const GovernmentSidebar: React.FC = () => {
  const { anomalies, interventions, sidebarOpen, toggleSidebar } = useApp();

  const openAnomalies = anomalies.filter(a => a.status === 'Requires Review').length;
  const activeInterventions = interventions.filter(i => i.status === 'Recommended').length;

  const categories = ['CORE', 'PROGRAM ANALYTICS', 'INTELLIGENCE', 'GOVERNANCE'] as const;

  return (
    <aside 
      className={`bg-gov-950 text-slate-300 flex flex-col border-r border-gov-900 shrink-0 select-none transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Header Badge */}
      <div className="p-3 border-b border-gov-900 bg-gov-900/60 flex items-center justify-between min-h-[57px]">
        {sidebarOpen ? (
          <>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider truncate">
                Govt Intelligence
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleSidebar}
                className="p-1 hover:bg-gov-800 text-slate-400 hover:text-white rounded transition cursor-pointer"
                title="Collapse Sidebar"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center p-1.5 hover:bg-gov-800 text-blue-400 rounded transition cursor-pointer"
            title="Expand Sidebar Navigation"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-4">
        {categories.map(cat => {
          const items = governmentNavigation.filter(item => item.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="space-y-1">
              {sidebarOpen && (
                <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">
                  {cat}
                </div>
              )}

              {items.map(item => {
                let dynamicBadge = item.badge;
                if (item.path === '/dashboard/government/ai-anomaly' && openAnomalies > 0) {
                  dynamicBadge = `${openAnomalies}`;
                } else if (item.path === '/dashboard/government/early-intervention' && activeInterventions > 0) {
                  dynamicBadge = `${activeInterventions}`;
                }

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/dashboard/government'}
                    title={!sidebarOpen ? item.label : undefined}
                    className={({ isActive }) => `w-full flex items-center ${
                      sidebarOpen ? 'justify-between px-3 py-2' : 'justify-center py-2 px-0'
                    } rounded-lg text-xs font-medium transition ${
                      isActive
                        ? 'bg-gov-700 text-white font-bold shadow-sm border-l-4 border-blue-400'
                        : 'text-slate-300 hover:bg-gov-900 hover:text-white'
                    }`}
                  >
                    <div className={`flex items-center ${sidebarOpen ? 'gap-2.5' : 'justify-center'}`}>
                      <span>{item.icon}</span>
                      {sidebarOpen && <span className="truncate">{item.label}</span>}
                    </div>

                    {dynamicBadge && sidebarOpen && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        item.path === '/dashboard/government/ai-anomaly' ? 'bg-rose-500 text-white' :
                        item.path === '/dashboard/government/early-intervention' ? 'bg-amber-500 text-white' :
                        'bg-gov-800 text-blue-300'
                      }`}>
                        {dynamicBadge}
                      </span>
                    )}
                    {dynamicBadge && !sidebarOpen && (
                      <span className={`w-2 h-2 rounded-full absolute top-1 right-1 ${
                        item.path === '/dashboard/government/ai-anomaly' ? 'bg-rose-500' :
                        item.path === '/dashboard/government/early-intervention' ? 'bg-amber-500' :
                        'bg-blue-400'
                      }`} />
                    )}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </nav>

      {/* Bottom Footer Info */}
      <div className="p-3 border-t border-gov-900 bg-gov-900/40 text-[11px] text-slate-400 flex items-center justify-between">
        {sidebarOpen ? (
          <>
            <div>
              <p className="font-semibold text-slate-300">State Skill Mission</p>
              <p className="text-[10px] text-slate-400">Policy & Impact Portal</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Government System Active" />
          </>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Government System Active" />
          </div>
        )}
      </div>
    </aside>
  );
};
