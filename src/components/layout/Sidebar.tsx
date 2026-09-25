import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  UserCheck, 
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
  TrendingUp, 
  FileSpreadsheet, 
  Lock, 
  Settings
} from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  category?: 'Core' | 'Dashboards' | 'Analytics & Ops' | 'Innovations & Governance';
  badge?: string;
}

export const Sidebar: React.FC = () => {
  const { anomalies, interventions } = useApp();

  const openAnomalies = anomalies.filter(a => a.status === 'Requires Review').length;
  const activeInterventions = interventions.filter(i => i.status === 'Recommended').length;

  const navItems: NavItem[] = [
    { path: '/', label: 'Overview', icon: <Home className="w-4 h-4" />, category: 'Core' },
    
    { path: '/trainee-dashboard', label: 'Trainee Outcome Dashboard', icon: <UserCheck className="w-4 h-4 text-teal-400" />, category: 'Dashboards', badge: 'Indiv' },
    { path: '/program-impact', label: 'Program Impact Dashboard', icon: <BarChart3 className="w-4 h-4 text-blue-400" />, category: 'Dashboards', badge: 'Govt' },
    
    { path: '/trainees', label: 'Trainees Directory', icon: <Users className="w-4 h-4" />, category: 'Analytics & Ops' },
    { path: '/programs', label: 'Training Programs', icon: <BookOpen className="w-4 h-4" />, category: 'Analytics & Ops' },
    { path: '/employment-outcomes', label: 'Employment Outcomes', icon: <Briefcase className="w-4 h-4" />, category: 'Analytics & Ops' },
    { path: '/skill-gaps', label: 'Skill Gap Engine', icon: <Target className="w-4 h-4" />, category: 'Analytics & Ops' },
    { path: '/providers', label: 'Training Providers', icon: <Building className="w-4 h-4" />, category: 'Analytics & Ops' },
    { path: '/district-insights', label: 'District Intelligence', icon: <MapPin className="w-4 h-4" />, category: 'Analytics & Ops' },
    
    { path: '/outcome-passport', label: 'Outcome Passport', icon: <Award className="w-4 h-4 text-amber-400" />, category: 'Innovations & Governance' },
    { path: '/followups', label: 'Follow-ups Engine', icon: <PhoneCall className="w-4 h-4" />, category: 'Innovations & Governance' },
    { path: '/anomalies', label: 'AI Anomaly Center', icon: <ShieldAlert className="w-4 h-4 text-rose-400" />, category: 'Innovations & Governance', badge: openAnomalies > 0 ? `${openAnomalies}` : undefined },
    { path: '/early-warning', label: 'Early Intervention', icon: <AlertTriangle className="w-4 h-4 text-amber-500" />, category: 'Innovations & Governance', badge: activeInterventions > 0 ? `${activeInterventions}` : undefined },
    { path: '/program-roi', label: 'Program ROI & Impact', icon: <TrendingUp className="w-4 h-4 text-emerald-400" />, category: 'Innovations & Governance' },
    { path: '/reports', label: 'Report Generator', icon: <FileSpreadsheet className="w-4 h-4" />, category: 'Innovations & Governance' },
    { path: '/consent-privacy', label: 'Privacy & Consent', icon: <Lock className="w-4 h-4" />, category: 'Innovations & Governance' },
    { path: '/settings', label: 'Settings', icon: <Settings className="w-4 h-4" />, category: 'Innovations & Governance' },
  ];

  const categories = ['Core', 'Dashboards', 'Analytics & Ops', 'Innovations & Governance'] as const;

  return (
    <aside className="w-64 bg-gov-950 text-slate-300 flex flex-col border-r border-gov-900 shrink-0 select-none">
      {/* Platform Title */}
      <div className="p-4 border-b border-gov-900 bg-gov-900/60 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          System Navigation
        </span>
        <span className="text-[10px] bg-gov-800 text-teal-300 px-2 py-0.5 rounded font-mono">
          v2.6.0
        </span>
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-4">
        {categories.map(cat => {
          const items = navItems.filter(item => item.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="space-y-1">
              <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {cat}
              </div>

              {items.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition ${
                    isActive
                      ? 'bg-gov-700 text-white font-bold shadow-sm border-l-4 border-teal-400'
                      : 'text-slate-300 hover:bg-gov-900 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span>{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      item.path === '/anomalies' ? 'bg-rose-500 text-white' :
                      item.path === '/early-warning' ? 'bg-amber-500 text-white' :
                      'bg-gov-800 text-teal-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          );
        })}
      </nav>

      {/* Bottom Footer Info */}
      <div className="p-3 border-t border-gov-900 bg-gov-900/40 text-[11px] text-slate-400 flex items-center justify-between">
        <div>
          <p className="font-semibold text-slate-300">State Skill Mission</p>
          <p className="text-[10px] text-slate-400">Govt. Outcome Portal</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="System Online & Syncing" />
      </div>
    </aside>
  );
};
