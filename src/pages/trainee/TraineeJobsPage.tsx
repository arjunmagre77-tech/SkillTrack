import React from 'react';
import { useApp } from '../../context/AppContext';
import { Briefcase, MapPin, Building } from 'lucide-react';

export const TraineeJobsPage: React.FC = () => {
  const { selectedTrainee, showToast } = useApp();

  const mockJobs = [
    { id: 'JOB-101', role: 'Junior Data Analyst', company: 'TechSolutions India', location: `${selectedTrainee.district}, Maharashtra`, salary: '₹28,000 / mo', match: '94% Match' },
    { id: 'JOB-102', role: 'Solar Operations Associate', company: 'CleanEnergy Corp', location: 'Pune, Maharashtra', salary: '₹25,500 / mo', match: '88% Match' },
    { id: 'JOB-103', role: 'CNC Machine Technician', company: 'Precision Engineering Ltd', location: 'Thane, Maharashtra', salary: '₹26,000 / mo', match: '82% Match' },
    { id: 'JOB-104', role: 'Quality Control Executive', company: 'Apex Motors Pvt Ltd', location: 'Nashik, Maharashtra', salary: '₹24,000 / mo', match: '79% Match' },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-950 via-gov-900 to-slate-900 text-white p-6 rounded-2xl shadow-md border border-indigo-800 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="w-4 h-4 text-indigo-300" />
            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">Industry Placement</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Job Opportunities</h1>
          <p className="text-xs text-indigo-200/80 mt-1">Curated placements matched against candidate skill radar for {selectedTrainee.name}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockJobs.map(j => (
          <div key={j.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-600 font-mono">{j.id}</span>
              <span className="text-xs font-extrabold bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full">{j.match}</span>
            </div>
            <h3 className="text-base font-extrabold text-gov-900">{j.role}</h3>
            <p className="text-xs text-slate-600 flex items-center gap-2 font-medium">
              <Building className="w-3.5 h-3.5 text-slate-400" /> {j.company}
              <span>•</span>
              <MapPin className="w-3.5 h-3.5 text-slate-400" /> {j.location}
            </p>
            <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
              <span className="text-sm font-black text-emerald-600">{j.salary}</span>
              <button
                onClick={() => showToast(`Submitted application for ${j.role} at ${j.company}!`, 'success')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow transition cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
