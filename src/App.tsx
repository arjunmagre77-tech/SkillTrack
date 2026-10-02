import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Toast } from './components/common/Toast';

import { LoginPage } from './pages/LoginPage';
import { OverviewPage } from './pages/OverviewPage';
import { TraineeDashboardPage } from './pages/TraineeDashboardPage';
import { ProgramImpactDashboardPage } from './pages/ProgramImpactDashboardPage';
import { TraineesPage } from './pages/TraineesPage';
import { TrainingProgramsPage } from './pages/TrainingProgramsPage';
import { EmploymentOutcomesPage } from './pages/EmploymentOutcomesPage';
import { SkillGapsPage } from './pages/SkillGapsPage';
import { ProvidersPage } from './pages/ProvidersPage';
import { DistrictInsightsPage } from './pages/DistrictInsightsPage';
import { OutcomePassportPage } from './pages/OutcomePassportPage';
import { FollowupsPage } from './pages/FollowupsPage';
import { AnomalyCenterPage } from './pages/AnomalyCenterPage';
import { EarlyInterventionPage } from './pages/EarlyInterventionPage';
import { ProgramROIInvestmentPage } from './pages/ProgramROIInvestmentPage';
import { ReportsPage } from './pages/ReportsPage';
import { ConsentPrivacyPage } from './pages/ConsentPrivacyPage';
import { SettingsPage } from './pages/SettingsPage';

import { CodeBackground } from './components/ui/code-background';

// Protected Route Guard
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useApp();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="min-h-screen bg-[#EEF2F7]/90 backdrop-blur-sm flex flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative z-10">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-[#EEF2F7]/80 p-4 md:p-6">
          {children}
        </main>
      </div>
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="relative min-h-screen">
        {/* Main Animated Code Lattice Background */}
        <CodeBackground className="fixed inset-0 z-0 pointer-events-none" />

        {/* Website Content Layer */}
        <div className="relative z-10">
          <BrowserRouter>
            <Routes>
              {/* Public Authentication Route */}
              <Route path="/login" element={<LoginPage />} />

              {/* Authenticated Dashboard Routes */}
              <Route path="/" element={<ProtectedRoute><OverviewPage /></ProtectedRoute>} />
              <Route path="/trainee-dashboard" element={<ProtectedRoute><TraineeDashboardPage /></ProtectedRoute>} />
              <Route path="/program-impact" element={<ProtectedRoute><ProgramImpactDashboardPage /></ProtectedRoute>} />
              <Route path="/trainees" element={<ProtectedRoute><TraineesPage /></ProtectedRoute>} />
              <Route path="/programs" element={<ProtectedRoute><TrainingProgramsPage /></ProtectedRoute>} />
              <Route path="/employment-outcomes" element={<ProtectedRoute><EmploymentOutcomesPage /></ProtectedRoute>} />
              <Route path="/skill-gaps" element={<ProtectedRoute><SkillGapsPage /></ProtectedRoute>} />
              <Route path="/providers" element={<ProtectedRoute><ProvidersPage /></ProtectedRoute>} />
              <Route path="/district-insights" element={<ProtectedRoute><DistrictInsightsPage /></ProtectedRoute>} />
              <Route path="/outcome-passport" element={<ProtectedRoute><OutcomePassportPage /></ProtectedRoute>} />
              <Route path="/followups" element={<ProtectedRoute><FollowupsPage /></ProtectedRoute>} />
              <Route path="/anomalies" element={<ProtectedRoute><AnomalyCenterPage /></ProtectedRoute>} />
              <Route path="/early-warning" element={<ProtectedRoute><EarlyInterventionPage /></ProtectedRoute>} />
              <Route path="/program-roi" element={<ProtectedRoute><ProgramROIInvestmentPage /></ProtectedRoute>} />
              <Route path="/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />
              <Route path="/consent-privacy" element={<ProtectedRoute><ConsentPrivacyPage /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

              {/* Fallback Redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
