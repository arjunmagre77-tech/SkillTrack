import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Search, CheckCircle2, Eye } from 'lucide-react';

export const TraineesPage: React.FC = () => {
  const { trainees, setSelectedTraineeId } = useApp();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [districtFilter, setDistrictFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filtered = trainees.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                        t.id.toLowerCase().includes(search.toLowerCase()) ||
                        t.programName.toLowerCase().includes(search.toLowerCase());
    const matchDistrict = districtFilter === 'ALL' || t.district === districtFilter;
    const matchStatus = statusFilter === 'ALL' || t.employmentStatus === statusFilter;
    return matchSearch && matchDistrict && matchStatus;
  });

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-gov-900">Trainees Outcome Directory</h1>
          <p className="text-xs text-slate-500">Longitudinal candidate repository with multi-source verified outcome records ({trainees.length} Total)</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search candidate name, ID or program..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-600"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <select
            value={districtFilter}
            onChange={e => setDistrictFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg p-2 font-semibold text-slate-800"
          >
            <option value="ALL">All Districts</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Nashik">Nashik</option>
            <option value="Thane">Thane</option>
          </select>

          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg p-2 font-semibold text-slate-800"
          >
            <option value="ALL">All Statuses</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Apprenticeship">Apprenticeship</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>
      </div>

      {/* Trainees Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">Candidate</th>
                <th className="p-3">Program & Provider</th>
                <th className="p-3">District</th>
                <th className="p-3">Certification</th>
                <th className="p-3">Employment Status</th>
                <th className="p-3">Salary</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.slice(0, 50).map(t => (
                <tr key={t.id} className="hover:bg-slate-50 transition">
                  <td className="p-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gov-900 text-teal-300 font-bold flex items-center justify-center text-xs">
                        {t.name[0]}
                      </div>
                      <div>
                        <strong className="text-gov-900 font-bold block">{t.name}</strong>
                        <span className="text-[10px] text-slate-400 font-mono">{t.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="font-semibold text-slate-800 block">{t.programName}</span>
                    <span className="text-[10px] text-slate-500">{t.providerName}</span>
                  </td>
                  <td className="p-3 font-medium text-slate-700">{t.district}</td>
                  <td className="p-3">
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {t.certificationStatus}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      t.employmentStatus === 'Employed' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                      t.employmentStatus === 'Self-Employed' ? 'bg-purple-50 text-purple-800 border-purple-200' :
                      t.employmentStatus === 'Apprenticeship' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                      'bg-amber-50 text-amber-800 border-amber-200'
                    }`}>
                      {t.employmentStatus}
                    </span>
                  </td>
                  <td className="p-3 font-bold text-slate-900">
                    {t.salary ? `₹${t.salary.toLocaleString()}/mo` : 'N/A'}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => {
                        setSelectedTraineeId(t.id);
                        navigate('/dashboard/trainee');
                      }}
                      className="px-2.5 py-1 bg-gov-900 hover:bg-gov-800 text-teal-300 text-[11px] font-bold rounded flex items-center gap-1 transition cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Outcome Profile</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
