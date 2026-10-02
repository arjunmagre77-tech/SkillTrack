import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Navbar } from './Navbar';
import { TraineeSidebar } from './TraineeSidebar';
import { Toast } from '../common/Toast';

export const TraineeDashboardLayout: React.FC = () => {
  const { isAuthenticated, currentUser } = useApp();
  const location = useLocation();

  // If not logged in at all, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If logged in but NOT a TRAINEE, redirect to their own dashboard
  if (currentUser?.role !== 'TRAINEE') {
    return <Navigate to="/dashboard/government" replace />;
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <TraineeSidebar />
        <main className="flex-1 overflow-y-auto bg-[#F5F8FC] p-4 md:p-8 custom-scrollbar">
          <Outlet />
        </main>
      </div>
      <Toast />
    </div>
  );
};
