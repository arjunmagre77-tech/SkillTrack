import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  User, 
  GraduationCap, 
  Target, 
  Compass, 
  BookOpen, 
  Briefcase, 
  CheckSquare, 
  FileText, 
  Award,
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface SidebarNavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  category: 'CORE' | 'MY CAREER' | 'OUTCOMES';
}

const navItems: SidebarNavItem[] = [
  {
    path: '/dashboard/trainee',
    label: 'Overview',
    icon: <Home className="w-4 h-4" />,
    category: 'CORE',
  },
  {
    path: '/dashboard/trainee/profile',
    label: 'My Profile',
    icon: <User className="w-4 h-4" />,
    category: 'MY CAREER',
  },
  {
    path: '/dashboard/trainee/skills',
    label: 'My Skills',
    icon: <GraduationCap className="w-4 h-4" />,
    category: 'MY CAREER',
  },
  {
    path: '/dashboard/trainee/skill-gap',
    label: 'Skill Gap Analysis',
    icon: <Target className="w-4 h-4" />,
    category: 'MY CAREER',
  },
  {
    path: '/dashboard/trainee/roadmap',
    label: 'Career Roadmap',
    icon: <Compass className="w-4 h-4" />,
    category: 'MY CAREER',
  },
  {
    path: '/dashboard/trainee/training',
    label: 'Recommended Training',
    icon: <BookOpen className="w-4 h-4" />,
    category: 'MY CAREER',
  },
  {
    path: '/dashboard/trainee/jobs',
    label: 'Job Opportunities',
    icon: <Briefcase className="w-4 h-4" />,
    category: 'MY CAREER',
  },
  {
    path: '/dashboard/trainee/applications',
    label: 'Applications',
    icon: <CheckSquare className="w-4 h-4" />,
    category: 'MY CAREER',
  },
  {
    path: '/dashboard/trainee/outcomes',
    label: 'Employment Outcomes',
    icon: <FileText className="w-4 h-4" />,
    category: 'OUTCOMES',
  },
  {
    path: '/dashboard/trainee/passport',
    label: 'My Outcome Passport',
    icon: <Award className="w-4 h-4" />,
    category: 'OUTCOMES',
  },
];

export const TraineeSidebar: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useApp();

  const categories: ('CORE' | 'MY CAREER' | 'OUTCOMES')[] = ['CORE', 'MY CAREER', 'OUTCOMES'];

  return (
    <aside 
      className={`bg-white text-slate-700 flex flex-col border-r border-[#E2E8F0] shrink-0 select-none transition-all duration-300 relative z-20 shadow-xs ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Top Candidate Portal Badge */}
      <div className="p-3.5 border-b border-[#E2E8F0]">
        {sidebarOpen ? (
          <div className="flex items-center justify-between p-2.5 bg-[#EFF6FF] border border-[#DBEAFE] rounded-xl">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#1A73E8] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-[#0F172A] truncate block leading-tight">
                  Candidate Portal
                </span>
                <span className="text-[10px] text-[#1A73E8] font-semibold leading-tight block">
                  Outcome Passport
                </span>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-1 hover:bg-blue-100/60 text-[#64748B] hover:text-[#0F172A] rounded-lg transition-colors cursor-pointer shrink-0"
              title="Collapse Sidebar"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center p-2 hover:bg-slate-100 text-[#1A73E8] rounded-lg transition-colors cursor-pointer"
            title="Expand Sidebar Navigation"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-4 custom-scrollbar">
        {categories.map(cat => {
          const items = navItems.filter(item => item.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="space-y-1">
              {sidebarOpen && (
                <div className="px-3 py-1 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider truncate">
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
                    sidebarOpen ? 'px-3 py-2.5' : 'justify-center py-3 px-0'
                  } text-xs transition-all duration-150 ${
                    isActive
                      ? 'bg-[#EFF6FF] text-[#1A73E8] font-bold border-l-4 border-[#1A73E8] rounded-r-xl'
                      : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A] font-medium rounded-xl'
                  }`}
                >
                  {({ isActive }) => (
                    <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
                      <span className={`text-base shrink-0 ${isActive ? 'text-[#1A73E8]' : 'text-[#64748B]'}`}>
                        {item.icon}
                      </span>
                      {sidebarOpen && <span className="truncate tracking-normal">{item.label}</span>}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          );
        })}
      </nav>

      {/* Collapse / Expand toggle button at bottom */}
      <div className="p-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#94A3B8]">
        {sidebarOpen ? (
          <>
            <span className="text-[11px] font-medium text-[#64748B]">Trainee Portal Active</span>
            <button
              onClick={toggleSidebar}
              className="p-1 hover:bg-slate-100 rounded-lg text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
              title="Collapse"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button
            onClick={toggleSidebar}
            className="w-full flex justify-center py-1 hover:bg-slate-100 rounded-lg text-[#64748B] transition-colors cursor-pointer"
            title="Expand"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </aside>
  );
};
