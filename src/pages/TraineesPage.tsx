import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, CheckCircle2, Eye, MapPin, Users } from 'lucide-react';
import { GovPageHeader } from './OverviewPage';

const AVATAR_COLORS = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-teal-500',
  'bg-indigo-500',
  'bg-orange-500',
];

const STATUS_STYLES: Record<string, string> = {
  'Employed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Self-Employed': 'bg-purple-50 text-purple-700 border-purple-200',
  'Apprenticeship': 'bg-blue-50 text-blue-700 border-blue-200',
  'Unemployed': 'bg-amber-50 text-amber-700 border-amber-200',
};

const ROW_ACCENT: Record<string, string> = {
  'Employed': 'border-l-emerald-500',
  'Self-Employed': 'border-l-purple-500',
  'Apprenticeship': 'border-l-blue-500',
  'Unemployed': 'border-l-amber-500',
};

export const TraineesPage: React.FC = () => {
  const { trainees, setSelectedTraineeId, setActiveTab } = useApp();
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
      <GovPageHeader
        icon={<Users className="w-4 h-4" />}
        label="Government & Policy Intelligence"
        title="Trainees Outcome Directory"
        subtitle={`Longitudinal candidate repository with multi-source verified outcome records (${trainees.length} Total)`}
      />

      {/* Filters & Search */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col md:flex-row items-center gap-3">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search candidate name, ID or program..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
          />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2 py-1">
            <MapPin className="w-3.5 h-3.5 text-blue-500" />
            <select value={districtFilter} onChange={e => setDistrictFilter(e.target.value)} className="bg-transparent text-xs font-semibold text-[#0D1B3E] focus:outline-none">
              <option value="ALL">All Districts</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Nashik">Nashik</option>
              <option value="Thane">Thane</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2 py-1">
            <Users className="w-3.5 h-3.5 text-purple-500" />
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="bg-transparent text-xs font-semibold text-[#0D1B3E] focus:outline-none">
              <option value="ALL">All Statuses</option>
              <option value="Employed">Employed</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Apprenticeship">Apprenticeship</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Candidate</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Program & Provider</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">District</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Certification</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Employment Status</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Salary</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 50).map((t, rowIdx) => {
                const avatarColor = AVATAR_COLORS[rowIdx % AVATAR_COLORS.length];
                const accentColor = ROW_ACCENT[t.employmentStatus] || 'border-l-slate-300';

                return (
                  <tr key={t.id} className={`border-b border-slate-100 hover:bg-blue-50/40 transition border-l-4 ${accentColor}`}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full ${avatarColor} text-white font-extrabold flex items-center justify-center text-xs shrink-0`}>
                          {t.name[0]}
                        </div>
                        <div>
                          <strong className="text-[#0D1B3E] font-bold block leading-tight">{t.name}</strong>
                          <span className="text-[10px] text-slate-400 font-mono">{t.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-slate-800 block leading-tight">{t.programName}</span>
                      <span className="text-[10px] text-slate-500">{t.providerName}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-slate-700 font-medium">
                        <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                        {t.district}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        {t.certificationStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${STATUS_STYLES[t.employmentStatus] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                        {t.employmentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-[#0D1B3E]">
                      {t.salary ? `₹${t.salary.toLocaleString()}/mo` : 'N/A'}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => {
                          setSelectedTraineeId(t.id);
                          setActiveTab('trainee-dashboard');
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0D1B3E] hover:bg-[#1565C0] text-white text-[11px] font-bold rounded-xl transition cursor-pointer shadow-sm"
                      >
                        <Eye className="w-3 h-3" />
                        Outcome Profile
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <Users className="w-10 h-10 mx-auto mb-2 opacity-30" />
              <p className="text-sm font-medium">No trainees found matching filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
