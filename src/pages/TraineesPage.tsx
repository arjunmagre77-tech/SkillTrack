import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Award,
  Briefcase,
  AlertTriangle,
  Search,
  MapPin,
  CheckCircle2,
  X,
  Phone,
  Mail,
  GraduationCap,
  Calendar,
  ArrowRight,
  MoreHorizontal
} from 'lucide-react';

interface CandidateRow {
  id: string;
  cid: string;
  name: string;
  avatar: string;
  program: string;
  provider: string;
  district: string;
  certStatus: 'Certified' | 'In Progress';
  empStatus: 'Employed' | 'Self-Employed' | 'Apprenticeship' | 'Unemployed' | 'Not Placed';
  salary: string;
  retention: number;
  lastVerified: string;
  phone: string;
  email: string;
  certDate: string;
  certId: string;
  employerName: string;
  timeline: { step: string; date: string; done: boolean }[];
  followupDate: string;
}

export const TraineesPage: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedTraineeId } = useApp();

  const [search, setSearch] = useState('');
  const [districtFilter, setDistrictFilter] = useState('ALL');
  const [programFilter, setProgramFilter] = useState('ALL');
  const [providerFilter, setProviderFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('Last Updated');

  // Candidate Data matching Image 5
  const candidateList: CandidateRow[] = [
    {
      id: '1',
      cid: 'CID: STC2024001',
      name: 'Rahul Sharma',
      avatar: 'RS',
      program: 'Advanced Data Analytics & AI',
      provider: 'MSDC',
      district: 'Pune',
      certStatus: 'Certified',
      empStatus: 'Employed',
      salary: '₹28,000',
      retention: 92,
      lastVerified: '12 Jun 2025',
      phone: '+91 98765 43210',
      email: 'rahul.sharma@email.com',
      certDate: '15 May 2024',
      certId: 'MSDC-DA-2024-001',
      employerName: 'Tech Solutions Pvt. Ltd.',
      timeline: [
        { step: 'Enrolled', date: 'Jan 2024', done: true },
        { step: 'Certified', date: 'May 2024', done: true },
        { step: 'Employed', date: 'Jun 2024', done: true },
        { step: '6M Follow-up', date: 'Dec 2024', done: true },
      ],
      followupDate: 'Next review in 6 months (Dec 2025)'
    },
    {
      id: '2',
      cid: 'CID: STC2024002',
      name: 'Amit Patil',
      avatar: 'AP',
      program: 'Precision Manufacturing & CNC',
      provider: 'VSI',
      district: 'Nagpur',
      certStatus: 'Certified',
      empStatus: 'Employed',
      salary: '₹18,700',
      retention: 88,
      lastVerified: '10 Jun 2025',
      phone: '+91 98221 55670',
      email: 'amit.patil@email.com',
      certDate: '18 Apr 2024',
      certId: 'VSI-CNC-2024-042',
      employerName: 'Precision Tools Corp',
      timeline: [
        { step: 'Enrolled', date: 'Dec 2023', done: true },
        { step: 'Certified', date: 'Apr 2024', done: true },
        { step: 'Employed', date: 'May 2024', done: true },
        { step: '6M Follow-up', date: 'Nov 2024', done: true },
      ],
      followupDate: 'Next review in 6 months (Nov 2025)'
    },
    {
      id: '3',
      cid: 'CID: STC2024003',
      name: 'Priya Kulkarni',
      avatar: 'PK',
      program: 'Electric Vehicle Service & Battery Tech',
      provider: 'Sahyadri Skill & Tech Foundation',
      district: 'Nashik',
      certStatus: 'Certified',
      empStatus: 'Self-Employed',
      salary: '₹19,500',
      retention: 76,
      lastVerified: '08 Jun 2025',
      phone: '+91 97654 33211',
      email: 'priya.kulkarni@email.com',
      certDate: '22 Mar 2024',
      certId: 'SSTF-EV-2024-118',
      employerName: 'Self-Owned EV Workshop',
      timeline: [
        { step: 'Enrolled', date: 'Nov 2023', done: true },
        { step: 'Certified', date: 'Mar 2024', done: true },
        { step: 'Employed', date: 'Apr 2024', done: true },
        { step: '6M Follow-up', date: 'Oct 2024', done: true },
      ],
      followupDate: 'Next review in 6 months (Oct 2025)'
    },
    {
      id: '4',
      cid: 'CID: STC2024004',
      name: 'Suresh Deshmukh',
      avatar: 'SD',
      program: 'General Healthcare Assistant & Patient Care',
      provider: 'Maharashtra Skill Initiative',
      district: 'Thane',
      certStatus: 'Certified',
      empStatus: 'Apprenticeship',
      salary: '₹12,500',
      retention: 64,
      lastVerified: '05 Jun 2025',
      phone: '+91 94231 88900',
      email: 'suresh.deshmukh@email.com',
      certDate: '10 Feb 2024',
      certId: 'MSI-GHA-2024-009',
      employerName: 'Apollo Clinics Partner',
      timeline: [
        { step: 'Enrolled', date: 'Oct 2023', done: true },
        { step: 'Certified', date: 'Feb 2024', done: true },
        { step: 'Employed', date: 'Mar 2024', done: true },
        { step: '6M Follow-up', date: 'Sep 2024', done: true },
      ],
      followupDate: 'Next review in 6 months (Sep 2025)'
    },
    {
      id: '5',
      cid: 'CID: STC2024005',
      name: 'Neha Joshi',
      avatar: 'NJ',
      program: 'Full Stack Web & Mobile Development',
      provider: 'Karmyabati Skill Development Centre',
      district: 'Chhatrapati Sambhajinagar',
      certStatus: 'Certified',
      empStatus: 'Unemployed',
      salary: 'N/A',
      retention: 0,
      lastVerified: '02 Jun 2025',
      phone: '+91 93220 11456',
      email: 'neha.joshi@email.com',
      certDate: '28 Jan 2024',
      certId: 'KSDC-FS-2024-088',
      employerName: 'Looking for Opportunities',
      timeline: [
        { step: 'Enrolled', date: 'Sep 2023', done: true },
        { step: 'Certified', date: 'Jan 2024', done: true },
        { step: 'Employed', date: 'Pending', done: false },
        { step: '6M Follow-up', date: 'Pending', done: false },
      ],
      followupDate: 'Early Intervention Recommended'
    },
    {
      id: '6',
      cid: 'CID: STC2024006',
      name: 'Rohit Yadav',
      avatar: 'RY',
      program: 'Warehouse & Logistics Management',
      provider: 'Future Skills Academy',
      district: 'Pune',
      certStatus: 'Certified',
      empStatus: 'Employed',
      salary: '₹16,800',
      retention: 85,
      lastVerified: '31 May 2025',
      phone: '+91 98900 66723',
      email: 'rohit.yadav@email.com',
      certDate: '15 Mar 2024',
      certId: 'FSA-WLM-2024-034',
      employerName: 'Blue Dart Logistics',
      timeline: [
        { step: 'Enrolled', date: 'Nov 2023', done: true },
        { step: 'Certified', date: 'Mar 2024', done: true },
        { step: 'Employed', date: 'Apr 2024', done: true },
        { step: '6M Follow-up', date: 'Oct 2024', done: true },
      ],
      followupDate: 'Next review in 6 months (Oct 2025)'
    },
    {
      id: '7',
      cid: 'CID: STC2024007',
      name: 'Sneha More',
      avatar: 'SM',
      program: 'Retail Sales & Customer Service',
      provider: 'Skill India Mission',
      district: 'Kolhapur',
      certStatus: 'Certified',
      empStatus: 'Employed',
      salary: '₹14,200',
      retention: 80,
      lastVerified: '28 May 2025',
      phone: '+91 97632 99012',
      email: 'sneha.more@email.com',
      certDate: '10 Feb 2024',
      certId: 'SIM-RS-2024-192',
      employerName: 'Reliance Retail Ltd',
      timeline: [
        { step: 'Enrolled', date: 'Oct 2023', done: true },
        { step: 'Certified', date: 'Feb 2024', done: true },
        { step: 'Employed', date: 'Mar 2024', done: true },
        { step: '6M Follow-up', date: 'Sep 2024', done: true },
      ],
      followupDate: 'Next review in 6 months (Sep 2025)'
    },
    {
      id: '8',
      cid: 'CID: STC2024008',
      name: 'Akash Singh',
      avatar: 'AS',
      program: 'Fashion Design & Apparel',
      provider: 'Creative Skills Institute',
      district: 'Nashik',
      certStatus: 'In Progress',
      empStatus: 'Not Placed',
      salary: 'N/A',
      retention: 0,
      lastVerified: '25 May 2025',
      phone: '+91 95450 33412',
      email: 'akash.singh@email.com',
      certDate: 'In Training',
      certId: 'CSI-FDA-2024-201',
      employerName: 'Not Placed',
      timeline: [
        { step: 'Enrolled', date: 'Feb 2024', done: true },
        { step: 'Certified', date: 'In Progress', done: false },
        { step: 'Employed', date: 'Pending', done: false },
        { step: '6M Follow-up', date: 'Pending', done: false },
      ],
      followupDate: 'Assessment scheduled Jul 2025'
    },
  ];

  // Selected Candidate for Drawer (default Rahul Sharma)
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateRow>(candidateList[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  // Status badge styling helper
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Employed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Self-Employed':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Apprenticeship':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Unemployed':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Not Placed':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const filteredCandidates = candidateList.filter(c => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.cid.toLowerCase().includes(search.toLowerCase()) ||
      c.program.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search);
    const matchDistrict = districtFilter === 'ALL' || c.district === districtFilter;
    const matchStatus = statusFilter === 'ALL' || c.empStatus === statusFilter;
    return matchSearch && matchDistrict && matchStatus;
  });

  return (
    <div className="space-y-5 pb-12">
      {/* LIGHT HERO BANNER — Matching Image 5 */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#eef5ff] via-[#f4f8ff] to-[#edf4fc] border border-blue-100 p-6 md:p-8 shadow-2xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                GOVERNMENT & POLICY INTELLIGENCE HUB
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight leading-tight">
              Trainees Outcome Directory
            </h1>
            <p className="text-xs md:text-sm text-slate-600 font-normal max-w-3xl leading-relaxed">
              Track and monitor candidate journeys from training to employment with long-term outcome data.
            </p>
          </div>

          <div className="shrink-0 inline-flex items-center gap-2 bg-[#0B1528] rounded-xl px-3.5 py-2 text-xs font-semibold text-white shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-300 font-normal">Jurisdiction:</span>
            <span className="font-bold text-blue-300">Maharashtra (State Level)</span>
          </div>
        </div>
      </div>

      {/* 4 TOP STAT CARDS — Matching Image 5 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Total Candidates */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Candidates</span>
            <div className="text-2xl font-black text-[#0D1B3E]">1,24,532</div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
              <span>↑ 12.5% vs. last 6 months</span>
            </div>
          </div>
        </div>

        {/* 2. Certified */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Certified</span>
            <div className="text-2xl font-black text-[#0D1B3E]">98,421</div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
              <span>78.4% of total</span>
            </div>
          </div>
        </div>

        {/* 3. Employed */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Employed</span>
            <div className="text-2xl font-black text-[#0D1B3E]">77,856</div>
            <div className="text-xs font-semibold text-purple-700 flex items-center gap-1 mt-0.5">
              <span>62.0% of total</span>
            </div>
          </div>
        </div>

        {/* 4. Follow-up Required */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Follow-up Required</span>
            <div className="text-2xl font-black text-[#0D1B3E]">8,732</div>
            <div className="text-xs font-semibold text-amber-600 flex items-center gap-1 mt-0.5">
              <span>7.0% of total</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTERS BAR — Matching Image 5 */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-2xs flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, candidate ID, phone, or program..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          {/* District */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">District:</span>
            <select
              value={districtFilter}
              onChange={e => setDistrictFilter(e.target.value)}
              className="bg-transparent font-medium text-slate-700 focus:outline-none"
            >
              <option value="ALL">All Districts</option>
              <option value="Pune">Pune</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Nashik">Nashik</option>
              <option value="Thane">Thane</option>
              <option value="Kolhapur">Kolhapur</option>
            </select>
          </div>

          {/* Program */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Program:</span>
            <select
              value={programFilter}
              onChange={e => setProgramFilter(e.target.value)}
              className="bg-transparent font-medium text-slate-700 focus:outline-none max-w-[110px] truncate"
            >
              <option value="ALL">All Programs</option>
              <option value="Data">Data Analytics</option>
              <option value="CNC">CNC Manufacturing</option>
              <option value="EV">EV Tech</option>
            </select>
          </div>

          {/* Provider */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Provider:</span>
            <select
              value={providerFilter}
              onChange={e => setProviderFilter(e.target.value)}
              className="bg-transparent font-medium text-slate-700 focus:outline-none max-w-[100px] truncate"
            >
              <option value="ALL">All Providers</option>
              <option value="MSDC">MSDC</option>
              <option value="VSI">VSI</option>
            </select>
          </div>

          {/* Status */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Status:</span>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="bg-transparent font-medium text-slate-700 focus:outline-none"
            >
              <option value="ALL">All Statuses</option>
              <option value="Employed">Employed</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Apprenticeship">Apprenticeship</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>

          <button className="px-4 py-2 bg-[#1976D2] hover:bg-[#1565C0] text-white text-xs font-bold rounded-xl shadow-xs transition active:scale-95 cursor-pointer">
            Apply Filters
          </button>
        </div>
      </div>

      {/* MAIN CONTENT: TABLE + CANDIDATE DETAILS DRAWER — Matching Image 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* CANDIDATE TABLE (7 or 12 cols depending on drawer) */}
        <div className={`${isDrawerOpen ? 'lg:col-span-8' : 'lg:col-span-12'} bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3`}>
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-[#0D1B3E]">1,24,532 candidates found</span>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 cursor-pointer focus:outline-none"
              >
                <option value="Last Updated">Last Updated</option>
                <option value="Salary (High to Low)">Salary (High to Low)</option>
                <option value="Retention">Retention Rate</option>
                <option value="Name">Name (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="py-2.5 px-2 w-6">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-0" />
                  </th>
                  <th className="py-2.5 px-2">#</th>
                  <th className="py-2.5 px-2">Candidate Name</th>
                  <th className="py-2.5 px-2">Program & Provider</th>
                  <th className="py-2.5 px-2">District</th>
                  <th className="py-2.5 px-2">Certification Status</th>
                  <th className="py-2.5 px-2">Employment Status</th>
                  <th className="py-2.5 px-2">Salary (₹/mo)</th>
                  <th className="py-2.5 px-2">Retention (6M)</th>
                  <th className="py-2.5 px-2">Last Verified</th>
                  <th className="py-2.5 px-2">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCandidates.map((c, idx) => {
                  const isSelected = selectedCandidate?.id === c.id;

                  return (
                    <tr
                      key={c.id}
                      onClick={() => {
                        setSelectedCandidate(c);
                        setIsDrawerOpen(true);
                      }}
                      className={`hover:bg-blue-50/50 transition cursor-pointer ${
                        isSelected ? 'bg-blue-50/70' : ''
                      }`}
                    >
                      <td className="py-3 px-2">
                        <input type="checkbox" checked={isSelected} onChange={() => {}} className="rounded text-blue-600" />
                      </td>
                      <td className="py-3 px-2 text-slate-400 font-bold">{idx + 1}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                            {c.avatar}
                          </div>
                          <div>
                            <p className="font-bold text-[#0D1B3E] leading-tight">{c.name}</p>
                            <span className="text-[10px] text-slate-400 font-mono">{c.cid}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <p className="font-semibold text-slate-800 leading-tight line-clamp-1">{c.program}</p>
                        <span className="text-[10px] text-slate-400">{c.provider}</span>
                      </td>
                      <td className="py-3 px-2 text-slate-600 font-medium">{c.district}</td>
                      <td className="py-3 px-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          c.certStatus === 'Certified'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}>
                          {c.certStatus}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(c.empStatus)}`}>
                          {c.empStatus}
                        </span>
                      </td>
                      <td className="py-3 px-2 font-bold text-[#0D1B3E]">{c.salary}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                          {/* Radial indicator */}
                          <div className="w-4 h-4 rounded-full border-2 border-emerald-500 border-t-transparent flex items-center justify-center"></div>
                          <span>{c.retention}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-slate-500 text-[11px] whitespace-nowrap">{c.lastVerified}</td>
                      <td className="py-3 px-2" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              setSelectedCandidate(c);
                              setIsDrawerOpen(true);
                            }}
                            className="px-2.5 py-1 bg-[#1976D2] hover:bg-[#1565C0] text-white text-[10px] font-bold rounded-lg transition active:scale-95 cursor-pointer shadow-2xs"
                          >
                            View
                          </button>
                          <button className="text-slate-400 hover:text-slate-600 p-1">
                            <MoreHorizontal className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CANDIDATE DETAILS DRAWER / SIDEBAR (4 cols) — Matching Image 5 */}
        {isDrawerOpen && selectedCandidate && (
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-4 relative animate-in fade-in duration-200">
            {/* Header: Candidate Details + Close Button */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-[#0D1B3E]">Candidate Details</h3>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {selectedCandidate.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0D1B3E] leading-tight">
                    {selectedCandidate.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {selectedCandidate.cid}
                  </p>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${getStatusBadge(selectedCandidate.empStatus)}`}>
                {selectedCandidate.empStatus}
              </span>
            </div>

            {/* Contact Details */}
            <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedCandidate.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{selectedCandidate.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedCandidate.district}, Maharashtra</span>
              </div>
            </div>

            {/* Program & Provider Section */}
            <div className="space-y-2 border-t border-slate-100 pt-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D1B3E]">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Program & Provider</span>
              </div>
              <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100 space-y-2 text-xs">
                <div>
                  <strong className="text-[#0D1B3E] block leading-tight">{selectedCandidate.program}</strong>
                  <p className="text-[11px] text-slate-500 mt-0.5">{selectedCandidate.provider} (Maharashtra Skill Development Centre)</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 pt-1 border-t border-slate-200/60">
                  <div>
                    <span className="text-slate-400 block">Training District</span>
                    <span className="font-bold text-slate-700">{selectedCandidate.district}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Certification Date</span>
                    <span className="font-bold text-slate-700">{selectedCandidate.certDate}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block">Certification ID</span>
                    <span className="font-bold text-slate-700 font-mono">{selectedCandidate.certId}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome Snapshot */}
            <div className="space-y-2 border-t border-slate-100 pt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D1B3E]">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                  <span>Outcome Snapshot</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedTraineeId?.('TRN-2026-001');
                    navigate('/dashboard/trainee');
                  }}
                  className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-0.5 cursor-pointer"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* 4-Step Horizontal Timeline */}
              <div className="py-2">
                <div className="flex items-center justify-between relative">
                  {/* Connecting Line */}
                  <div className="absolute top-2.5 left-4 right-4 h-0.5 bg-blue-400 -z-0"></div>

                  {selectedCandidate.timeline.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center relative z-10 text-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${
                        item.done ? 'bg-blue-600' : 'bg-slate-300'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#0D1B3E] mt-1">{item.step}</span>
                      <span className="text-[9px] text-slate-400">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Metric Cards in Snapshot */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-medium">Current Salary</span>
                  <strong className="text-xs font-black text-[#0D1B3E]">{selectedCandidate.salary}/mo</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-medium">Retention (6M)</span>
                  <strong className="text-xs font-black text-emerald-600">{selectedCandidate.retention}%</strong>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-medium">Outcome Profile</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md inline-block mt-0.5">
                    Successful
                  </span>
                </div>
              </div>
            </div>

            {/* Verification Sources */}
            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0D1B3E]">Verification Sources</span>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>
              <div className="space-y-1 text-[11px] text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Training Provider ({selectedCandidate.provider})</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Employer Verification ({selectedCandidate.employerName})</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Government Database (SkillTrack)</span>
                </div>
              </div>
            </div>

            {/* Follow-up Required Action */}
            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-900">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span>Follow-up Required</span>
              </div>
              <p className="text-[11px] text-purple-700">{selectedCandidate.followupDate}</p>
              <button className="w-full py-1.5 bg-white hover:bg-purple-100 text-purple-800 font-bold text-xs rounded-lg border border-purple-200 transition active:scale-95 cursor-pointer">
                Mark as Reviewed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TraineesPage;
