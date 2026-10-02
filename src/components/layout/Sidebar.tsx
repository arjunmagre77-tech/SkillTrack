import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BarChart3, 
  Users, 
  BookOpen, 
  Briefcase, 
  Target, 
  Building, 
  MapPin, 
  Award, 
  PhoneCall, 
  ShieldAlert, 
  AlertTriangle, 
  FileSpreadsheet, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  category: 'CORE' | 'PROGRAM ANALYTICS' | 'INTELLIGENCE' | 'GOVERNANCE';
  badge?: string;
  badgeColor?: 'blue' | 'rose' | 'amber';
}

export const Sidebar: React.FC = () => {
  const { anomalies, interventions } = useApp();
  const [collapsed, setCollapsed] = useState(false);

  const openAnomalies = anomalies.filter(a => a.status === 'Requires Review').length;
  const activeInterventions = interventions.filter(i => i.status === 'Recommended').length;

  const navItems: NavItem[] = [
    // CORE
    { path: '/', label: 'Overview', icon: <Home className="w-4 h-4" />, category: 'CORE' },
    
    // PROGRAM ANALYTICS
    { path: '/program-impact', label: 'Program Impact Dashboard', icon: <BarChart3 className="w-4 h-4" />, category: 'PROGRAM ANALYTICS', badge: 'Govt', badgeColor: 'blue' },
    { path: '/programs', label: 'Training Programs', icon: <BookOpen className="w-4 h-4" />, category: 'PROGRAM ANALYTICS' },
    { path: '/providers', label: 'Training Providers', icon: <Building className="w-4 h-4" />, category: 'PROGRAM ANALYTICS' },
    { path: '/trainees', label: 'Trainee Outcomes', icon: <Users className="w-4 h-4" />, category: 'PROGRAM ANALYTICS' },
    { path: '/employment-outcomes', label: 'Employment Outcomes', icon: <Briefcase className="w-4 h-4" />, category: 'PROGRAM ANALYTICS' },

    // INTELLIGENCE
    { path: '/skill-gaps', label: 'Skill Gap Engine', icon: <Target className="w-4 h-4" />, category: 'INTELLIGENCE' },
    { path: '/district-insights', label: 'District Intelligence', icon: <MapPin className="w-4 h-4" />, category: 'INTELLIGENCE' },
    { path: '/anomalies', label: 'AI Anomaly Center', icon: <ShieldAlert className="w-4 h-4" />, category: 'INTELLIGENCE', badge: openAnomalies > 0 ? `${openAnomalies}` : undefined, badgeColor: 'rose' },
    { path: '/early-warning', label: 'Early Intervention', icon: <AlertTriangle className="w-4 h-4" />, category: 'INTELLIGENCE', badge: activeInterventions > 0 ? `${activeInterventions}` : undefined, badgeColor: 'amber' },

    // GOVERNANCE
    { path: '/outcome-passport', label: 'Outcome Passport', icon: <Award className="w-4 h-4" />, category: 'GOVERNANCE' },
    { path: '/followups', label: 'Follow-ups Engine', icon: <PhoneCall className="w-4 h-4" />, category: 'GOVERNANCE' },
    { path: '/reports', label: 'Reports & Analytics', icon: <FileSpreadsheet className="w-4 h-4" />, category: 'GOVERNANCE' },
  ];

  const categories = ['CORE', 'PROGRAM ANALYTICS', 'INTELLIGENCE', 'GOVERNANCE'] as const;

  const getBadgeClass = (color?: string) => {
    if (color === 'rose') return 'bg-rose-500 text-white';
    if (color === 'amber') return 'bg-amber-500 text-white';
    return 'bg-[#1565C0] text-white';
  };

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-60'} bg-[#0D1B3E] text-white flex flex-col shrink-0 transition-all duration-300 select-none relative`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        {!collapsed && (
          <span className="text-xs font-extrabold text-white uppercase tracking-widest">
            GOVT INTELLIGENCE
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition cursor-pointer"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto py-3 space-y-1">
        {categories.map(cat => {
          const items = navItems.filter(item => item.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="mb-1">
              {!collapsed && (
                <div className="px-4 pt-3 pb-1.5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  {cat}
                </div>
              )}
              {collapsed && <div className="mt-2" />}

              {items.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  title={collapsed ? item.label : undefined}
                  className={({ isActive }) => `
                    flex items-center gap-3 mx-2 px-3 py-2.5 rounded-xl text-xs font-medium transition cursor-pointer
                    ${isActive
                      ? 'bg-[#1565C0] text-white font-bold shadow-lg shadow-blue-900/30'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }
                    ${collapsed ? 'justify-center' : ''}
                  `}
                >
                  <span className="shrink-0">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none ${getBadgeClass(item.badgeColor)}`}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  {collapsed && item.badge && (
                    <span className={`absolute right-1 top-1 w-3.5 h-3.5 text-[8px] font-bold flex items-center justify-center rounded-full ${getBadgeClass(item.badgeColor)}`}>
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className={`p-3 border-t border-white/10 flex items-center gap-2 ${collapsed ? 'justify-center' : ''}`}>
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" title="System Online" />
        {!collapsed && (
          <div>
            <p className="text-[11px] font-semibold text-white/80">State Skill Mission</p>
            <p className="text-[10px] text-white/40">Govt. Outcome Portal</p>
          </div>
        )}
      </div>
    </aside>
  );
};
