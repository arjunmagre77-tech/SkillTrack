import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { 
  NavigationTab, 
  UserRole, 
  AuthUser,
  Trainee, 
  TrainingProgram, 
  TrainingProvider, 
  DistrictMetric, 
  AnomalyAlert, 
  Interventions 
} from '../types';
import { 
  DEMO_TRAINEES, 
  INITIAL_PROGRAMS, 
  INITIAL_PROVIDERS, 
  INITIAL_DISTRICTS, 
  INITIAL_ANOMALIES, 
  INITIAL_INTERVENTIONS 
} from '../data/mockData';

interface AppContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  isAuthenticated: boolean;
  currentUser: AuthUser | null;
  login: (email: string, role: UserRole, name?: string) => void;
  logout: () => void;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  selectedTraineeId: string;
  setSelectedTraineeId: (id: string) => void;
  selectedTrainee: Trainee;
  selectedDistrict: string;
  setSelectedDistrict: (district: string) => void;
  selectedRole: UserRole;
  setSelectedRole: (role: UserRole) => void;
  trainees: Trainee[];
  programs: TrainingProgram[];
  providers: TrainingProvider[];
  districts: DistrictMetric[];
  anomalies: AnomalyAlert[];
  interventions: Interventions[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  loadDemoData: () => void;
  updateConsent: (traineeId: string, consentKey: keyof Trainee['consent'], value: boolean) => void;
  resolveAnomaly: (anomalyId: string, status: AnomalyAlert['status']) => void;
  addIntervention: (intervention: Omit<Interventions, 'id'>) => void;
  triggerFollowup: (traineeId: string, milestone: string, channel: string) => void;
  toast: { message: string; type: 'success' | 'info' | 'warning' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  // Load auth from localStorage or default to logged-in Admin for smooth access
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const saved = localStorage.getItem('skilltrack_auth');
    return saved ? JSON.parse(saved).isAuthenticated : true;
  });

  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    const saved = localStorage.getItem('skilltrack_auth');
    return saved ? JSON.parse(saved).user : {
      id: 'USR-001',
      name: 'Dr. Rajesh Deshmukh',
      email: 'admin@skilltrack.gov.in',
      role: 'ADMIN',
      organization: 'Ministry of Skill Development & Entrepreneurship'
    };
  });

  const [selectedRole, setSelectedRole] = useState<UserRole>(() => currentUser?.role || 'ADMIN');
  const [activeTab, setActiveTab] = useState<NavigationTab>('overview');
  const [selectedTraineeId, setSelectedTraineeId] = useState<string>('TRN-2026-001');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Pune');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [trainees, setTrainees] = useState<Trainee[]>(DEMO_TRAINEES);
  const [programs] = useState<TrainingProgram[]>(INITIAL_PROGRAMS);
  const [providers] = useState<TrainingProvider[]>(INITIAL_PROVIDERS);
  const [districts] = useState<DistrictMetric[]>(INITIAL_DISTRICTS);
  const [anomalies, setAnomalies] = useState<AnomalyAlert[]>(INITIAL_ANOMALIES);
  const [interventions, setInterventions] = useState<Interventions[]>(INITIAL_INTERVENTIONS);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'warning' } | null>(null);

  const selectedTrainee = trainees.find(t => t.id === selectedTraineeId) || trainees[0];

  const login = (email: string, role: UserRole, customName?: string) => {
    const defaultNames: Record<UserRole, string> = {
      ADMIN: 'Dr. Rajesh Deshmukh',
      TRAINING_PROVIDER: 'Maharashtra Skill Center (MSDC)',
      EMPLOYER: 'XYZ Technologies HR Portal',
      TRAINEE: 'Rahul Sharma'
    };

    const userObj: AuthUser = {
      id: `USR-${Date.now().toString().slice(-4)}`,
      name: customName || defaultNames[role] || 'System User',
      email: email,
      role: role,
      organization: role === 'ADMIN' ? 'State Skill Mission' : role === 'TRAINING_PROVIDER' ? 'MSDC Pune' : role === 'EMPLOYER' ? 'XYZ Tech' : 'Candidate Portal'
    };

    setIsAuthenticated(true);
    setCurrentUser(userObj);
    setSelectedRole(role);
    localStorage.setItem('skilltrack_auth', JSON.stringify({ isAuthenticated: true, user: userObj }));
    showToast(`Welcome back, ${userObj.name}! Signed in as ${role}`, 'success');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('skilltrack_auth');
    showToast('Signed out successfully.', 'info');
  };

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const loadDemoData = () => {
    setTrainees([...DEMO_TRAINEES]);
    setAnomalies([...INITIAL_ANOMALIES]);
    setInterventions([...INITIAL_INTERVENTIONS]);
    showToast('Loaded active candidate outcome dataset & regional indicators!', 'success');
  };

  const updateConsent = (traineeId: string, consentKey: keyof Trainee['consent'], value: boolean) => {
    setTrainees(prev => prev.map(t => {
      if (t.id === traineeId) {
        return {
          ...t,
          consent: {
            ...t.consent,
            [consentKey]: value
          }
        };
      }
      return t;
    }));
    showToast(`Consent setting updated for ${consentKey}: ${value ? 'Granted' : 'Revoked'}`, 'info');
  };

  const resolveAnomaly = (anomalyId: string, status: AnomalyAlert['status']) => {
    setAnomalies(prev => prev.map(a => a.id === anomalyId ? { ...a, status } : a));
    showToast(`Anomaly alert status updated to '${status}'`, 'success');
  };

  const addIntervention = (newInt: Omit<Interventions, 'id'>) => {
    const id = `int-${Date.now().toString().slice(-4)}`;
    setInterventions(prev => [{ ...newInt, id }, ...prev]);
    showToast(`Early intervention logged and assigned to ${newInt.assignedTo || 'Counselor'}`, 'success');
  };

  const triggerFollowup = (traineeId: string, milestone: string, channel: string) => {
    setTrainees(prev => prev.map(t => {
      if (t.id === traineeId) {
        return {
          ...t,
          followUps: t.followUps.map(f => {
            if (f.milestone === milestone) {
              return {
                ...f,
                status: 'Completed',
                completedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                lastContactChannel: channel as any
              };
            }
            return f;
          })
        };
      }
      return t;
    }));
    showToast(`Automated longitudinal follow-up sent via ${channel} for ${milestone} check!`, 'success');
  };

  return (
    <AppContext.Provider value={{
      sidebarOpen,
      setSidebarOpen,
      toggleSidebar,
      isAuthenticated,
      currentUser,
      login,
      logout,
      activeTab,
      setActiveTab,
      selectedTraineeId,
      setSelectedTraineeId,
      selectedTrainee,
      selectedDistrict,
      setSelectedDistrict,
      selectedRole,
      setSelectedRole: (role: UserRole) => {
        setSelectedRole(role);
        if (currentUser) {
          setCurrentUser({ ...currentUser, role });
        }
      },
      trainees,
      programs,
      providers,
      districts,
      anomalies,
      interventions,
      searchQuery,
      setSearchQuery,
      loadDemoData,
      updateConsent,
      resolveAnomaly,
      addIntervention,
      triggerFollowup,
      toast,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
