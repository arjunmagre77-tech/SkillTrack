import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { governmentNavigation } from '../../config/navigation';
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

// Category display config
const CATEGORY_META: Record<string, { label: string; accent: string }> = {
  'CORE':             { label: 'Core', accent: 'text-brand-400' },
  'PROGRAM ANALYTICS':{ label: 'Program Analytics', accent: 'text-cyan-400' },
  'INTELLIGENCE':     { label: 'Intelligence', accent: 'text-violet-400' },
  'GOVERNANCE':       { label: 'Governance', accent: 'text-amber-400' },
};

export const GovernmentSidebar: React.FC = () => {
  const { anomalies, interventions, sidebarOpen, toggleSidebar } = useApp();

  const openAnomalies     = anomalies.filter(a => a.status === 'Requires Review').length;
  const activeInterventions = interventions.filter(i => i.status === 'Recommended').length;
  const categories = ['CORE', 'PROGRAM ANALYTICS', 'INTELLIGENCE', 'GOVERNANCE'] as const;

  return (
    <aside
      className={`flex flex-col shrink-0 select-none transition-[width] duration-200 ease-in-out ${
        sidebarOpen ? 'w-64' : 'w-16'
      } bg-navy-900 border-r border-navy-800 text-slate-300`}
      style={{ minHeight: 0 }}
    >
      {/* Header */}
      <div className={`flex items-center border-b border-navy-800/70 min-h-[57px] px-3 ${
        sidebarOpen ? 'justify-between' : 'justify-center'
      }`}>
        {sidebarOpen && (
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-lg bg-brand-600/20 border border-brand-500/30 text-brand-400 flex items-center justify-center shrink-0">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white leading-tight">Govt Intelligence</p>
              <p className="text-[9px] text-navy-400 font-medium">State Skill Mission</p>
            </div>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className={`p-1.5 rounded-lg text-navy-400 hover:text-white hover:bg-navy-800 transition-colors duration-150 cursor-pointer shrink-0 ${
            sidebarOpen ? '' : 'mx-auto'
          }`}
          title={sidebarOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
        >
          {sidebarOpen
            ? <ChevronLeft className="w-4 h-4" />
            : <ChevronRight className="w-4 h-4" />
          }
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-5">
        {categories.map(cat => {
          const items = governmentNavigation.filter(item => item.category === cat);
          if (items.length === 0) return null;
          const meta = CATEGORY_META[cat] || { label: cat, accent: 'text-slate-400' };

          return (
            <div key={cat} className="space-y-0.5">
              {/* Category label — simple CSS transition, no Framer Motion */}
              {sidebarOpen && (
                <div className={`px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${meta.accent} mb-1`}>
                  {meta.label}
                </div>
              )}

              {items.map(item => {
                // Dynamic badge counts
                let dynamicBadge = item.badge;
                if (item.path === '/dashboard/government/ai-anomaly' && openAnomalies > 0) {
                  dynamicBadge = `${openAnomalies}`;
                } else if (item.path === '/dashboard/government/early-intervention' && activeInterventions > 0) {
                  dynamicBadge = `${activeInterventions}`;
                }

                const badgeClass =
                  item.path === '/dashboard/government/ai-anomaly'    ? 'bg-danger-600 text-white' :
                  item.path === '/dashboard/government/early-intervention' ? 'bg-warning-500 text-white' :
                  'bg-brand-600/30 text-brand-300';

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/dashboard/government'}
                    title={!sidebarOpen ? item.label : undefined}
                    className={({ isActive }) =>
                      `relative flex items-center rounded-xl text-xs font-medium transition-colors duration-150 cursor-pointer group ${
                        sidebarOpen
                          ? 'px-3 py-2.5 gap-3 justify-between'
                          : 'px-0 py-2.5 justify-center'
                      } ${
                        isActive
                          ? 'bg-brand-600/20 text-white border border-brand-500/30 shadow-sm'
                          : 'text-navy-300 hover:bg-navy-800 hover:text-white border border-transparent'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                          {/* Active indicator bar */}
                          {isActive && sidebarOpen && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-brand-400" />
                          )}
                          <span className={`shrink-0 transition-colors duration-150 ${isActive ? 'text-brand-400' : 'text-navy-400 group-hover:text-slate-300'}`}>
                            {item.icon}
                          </span>
                          {sidebarOpen && (
                            <span className="truncate">{item.label}</span>
                          )}
                        </div>

                        {/* Badge (expanded) */}
                        {dynamicBadge && sidebarOpen && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${badgeClass}`}>
                            {dynamicBadge}
                          </span>
                        )}

                        {/* Badge dot (collapsed) */}
                        {dynamicBadge && !sidebarOpen && (
                          <span className={`absolute top-1 right-1 w-2 h-2 rounded-full ${
                            item.path === '/dashboard/government/ai-anomaly' ? 'bg-danger-500' :
                            item.path === '/dashboard/government/early-intervention' ? 'bg-warning-500' :
                            'bg-brand-400'
                          }`} />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-navy-800/70 px-3 py-3">
        <div className={`flex items-center ${sidebarOpen ? 'gap-2.5' : 'justify-center'}`}>
          <div className="w-2 h-2 rounded-full bg-success-400 animate-pulse shrink-0" title="System Online" />
          {sidebarOpen && (
            <div className="overflow-hidden">
              <p className="text-[11px] font-semibold text-slate-300 leading-tight">System Online</p>
              <p className="text-[9px] text-navy-400">v2.6.0 · Live Data</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
