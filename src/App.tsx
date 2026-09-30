import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';

import { TraineeDashboardLayout } from './components/layout/TraineeDashboardLayout';
import { GovernmentDashboardLayout } from './components/layout/GovernmentDashboardLayout';

import { LoginPage } from './pages/LoginPage';

// Trainee Pages
import { TraineeDashboardPage } from './pages/TraineeDashboardPage';
import { TraineeProfilePage } from './pages/trainee/TraineeProfilePage';
import { TraineeSkillsPage } from './pages/trainee/TraineeSkillsPage';
import { TraineeSkillGapPage } from './pages/trainee/TraineeSkillGapPage';
import { TraineeRoadmapPage } from './pages/trainee/TraineeRoadmapPage';
import { TraineeTrainingPage } from './pages/trainee/TraineeTrainingPage';
import { TraineeJobsPage } from './pages/trainee/TraineeJobsPage';
import { TraineeApplicationsPage } from './pages/trainee/TraineeApplicationsPage';
import { TraineeOutcomesPage } from './pages/trainee/TraineeOutcomesPage';
import { TraineeFollowupsPage } from './pages/trainee/TraineeFollowupsPage';

// Government Pages
import { GovernmentOverviewPage } from './pages/government/GovernmentOverviewPage';
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

// Root Redirect Component based on User Role
const RootRedirect: React.FC = () => {
  const { selectedRole } = useApp();
  if (selectedRole === 'TRAINEE') {
    return <Navigate to="/dashboard/trainee" replace />;
  }
  return <Navigate to="/dashboard/government" replace />;
};

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Authentication Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* DASHBOARD 1 — TRAINEE / CANDIDATE DASHBOARD ROUTE GROUP */}
          <Route path="/dashboard/trainee" element={<TraineeDashboardLayout />}>
            <Route index element={<TraineeDashboardPage />} />
            <Route path="profile" element={<TraineeProfilePage />} />
            <Route path="skills" element={<TraineeSkillsPage />} />
            <Route path="skill-gap" element={<TraineeSkillGapPage />} />
            <Route path="roadmap" element={<TraineeRoadmapPage />} />
            <Route path="training" element={<TraineeTrainingPage />} />
            <Route path="jobs" element={<TraineeJobsPage />} />
            <Route path="applications" element={<TraineeApplicationsPage />} />
            <Route path="outcomes" element={<TraineeOutcomesPage />} />
            <Route path="passport" element={<OutcomePassportPage />} />
            <Route path="follow-ups" element={<TraineeFollowupsPage />} />
          </Route>

          {/* DASHBOARD 2 — GOVERNMENT / PROGRAM IMPACT DASHBOARD ROUTE GROUP */}
          <Route path="/dashboard/government" element={<GovernmentDashboardLayout />}>
            <Route index element={<GovernmentOverviewPage />} />
            <Route path="program-impact" element={<ProgramImpactDashboardPage />} />
            <Route path="training-programs" element={<TrainingProgramsPage />} />
            <Route path="training-providers" element={<ProvidersPage />} />
            <Route path="trainee-outcomes" element={<TraineesPage />} />
            <Route path="employment-outcomes" element={<EmploymentOutcomesPage />} />
            <Route path="skill-gap-engine" element={<SkillGapsPage />} />
            <Route path="district-intelligence" element={<DistrictInsightsPage />} />
            <Route path="ai-anomaly" element={<AnomalyCenterPage />} />
            <Route path="early-intervention" element={<EarlyInterventionPage />} />
            <Route path="outcome-passport" element={<OutcomePassportPage />} />
            <Route path="follow-ups" element={<FollowupsPage />} />
            <Route path="program-roi" element={<ProgramROIInvestmentPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="consent-privacy" element={<ConsentPrivacyPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Legacy route redirects to preserve deep links */}
          <Route path="/trainee-dashboard" element={<Navigate to="/dashboard/trainee" replace />} />
          <Route path="/program-impact" element={<Navigate to="/dashboard/government/program-impact" replace />} />
          <Route path="/trainees" element={<Navigate to="/dashboard/government/trainee-outcomes" replace />} />
          <Route path="/programs" element={<Navigate to="/dashboard/government/training-programs" replace />} />
          <Route path="/employment-outcomes" element={<Navigate to="/dashboard/government/employment-outcomes" replace />} />
          <Route path="/skill-gaps" element={<Navigate to="/dashboard/government/skill-gap-engine" replace />} />
          <Route path="/providers" element={<Navigate to="/dashboard/government/training-providers" replace />} />
          <Route path="/district-insights" element={<Navigate to="/dashboard/government/district-intelligence" replace />} />
          <Route path="/outcome-passport" element={<Navigate to="/dashboard/government/outcome-passport" replace />} />
          <Route path="/followups" element={<Navigate to="/dashboard/government/follow-ups" replace />} />
          <Route path="/anomalies" element={<Navigate to="/dashboard/government/ai-anomaly" replace />} />
          <Route path="/early-warning" element={<Navigate to="/dashboard/government/early-intervention" replace />} />
          <Route path="/program-roi" element={<Navigate to="/dashboard/government/program-roi" replace />} />
          <Route path="/reports" element={<Navigate to="/dashboard/government/reports" replace />} />
          <Route path="/consent-privacy" element={<Navigate to="/dashboard/government/consent-privacy" replace />} />
          <Route path="/settings" element={<Navigate to="/dashboard/government/settings" replace />} />

          {/* Root & Fallback Redirects */}
          <Route path="/" element={<RootRedirect />} />
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
