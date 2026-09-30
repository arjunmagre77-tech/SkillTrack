import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Navbar } from './Navbar';
import { TraineeSidebar } from './TraineeSidebar';
import { Toast } from '../common/Toast';

export const TraineeDashboardLayout: React.FC = () => {
  const { isAuthenticated } = useApp();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <TraineeSidebar />
        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
      <Toast />
    </div>
  );
};
