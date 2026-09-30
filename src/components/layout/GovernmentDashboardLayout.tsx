import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Navbar } from './Navbar';
import { GovernmentSidebar } from './GovernmentSidebar';
import { Toast } from '../common/Toast';

export const GovernmentDashboardLayout: React.FC = () => {
  const { isAuthenticated } = useApp();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <GovernmentSidebar />
        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
      <Toast />
    </div>
  );
};
