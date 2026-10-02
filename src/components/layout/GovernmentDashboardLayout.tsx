import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Navbar } from './Navbar';
import { GovernmentSidebar } from './GovernmentSidebar';
import { Toast } from '../common/Toast';

export const GovernmentDashboardLayout: React.FC = () => {
  const { isAuthenticated, currentUser } = useApp();
  const location = useLocation();

  // If not logged in at all, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If logged in but NOT a GOVERNMENT user, redirect to their own dashboard
  if (currentUser?.role !== 'GOVERNMENT') {
    return <Navigate to="/dashboard/trainee" replace />;
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <GovernmentSidebar />
        <main className="flex-1 overflow-y-auto bg-[#F5F8FC] p-4 md:p-8 custom-scrollbar">
          <Outlet />
        </main>
      </div>
      <Toast />
    </div>
  );
};
