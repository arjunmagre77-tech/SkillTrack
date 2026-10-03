import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Users,
  ShieldCheck,
  Clock,
  MapPin,
  Filter,
  RotateCcw,
  TrendingUp,
  AlertTriangle,
  Info,
  CheckCircle2,
  ArrowRight,
  ArrowUpDown
} from 'lucide-react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip
} from 'recharts';

export const ProvidersPage: React.FC = () => {
  const navigate = useNavigate();

  const [filterDistrict, setFilterDistrict] = useState('ALL');
  const [filterType, setFilterType] = useState('ALL');
  const [filterAudit, setFilterAudit] = useState('ALL');
  const [filterTime, setFilterTime] = useState('Last 6 Months');
  const [viewTab, setViewTab] = useState<'ALL' | 'TOP5'>('ALL');
  const [chartView, setChartView] = useState<'RADAR' | 'BAR'>('RADAR');

  const providerList = [
    {
      id: 'prov-1',
      name: 'Maharashtra Skill Development Centre (MSDC)',
      type: 'Government',
      typeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-100 text-blue-600',
      district: 'Pune',
      trained: '10,000',
      certRate: '78.4%',
      empRate: '62.1%',
      retRate: '71.0%',
      audit: '98%',
      trend: '+6.3%',
    },
    {
      id: 'prov-2',
      name: 'National Skill Training Institute (NSTI)',
      type: 'Government',
      typeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-indigo-100 text-indigo-600',
      district: 'Mumbai Suburban',
      trained: '9,500',
      certRate: '76.8%',
      empRate: '58.7%',
      retRate: '66.9%',
      audit: '94%',
      trend: '+4.7%',
    },
    {
      id: 'prov-3',
      name: 'Vidarbha Vocational Excellence Trust',
      type: 'NGO',
      typeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-100 text-amber-600',
      district: 'Nagpur',
      trained: '6,200',
      certRate: '71.2%',
      empRate: '54.3%',
      retRate: '61.8%',
      audit: '91%',
      trend: '+3.2%',
    },
    {
      id: 'prov-4',
      name: 'Sahyadri Skill & Tech Foundation',
      type: 'Private',
      typeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      iconBg: 'bg-purple-100 text-purple-600',
      district: 'Nashik',
      trained: '5,800',
      certRate: '69.5%',
      empRate: '48.9%',
      retRate: '55.4%',
      audit: '86%',
      trend: '+1.9%',
    },
  ];

  // Radar chart data for 4 providers across 5 dimensions
  const radarData = [
    { subject: 'Certification Rate', msdc: 78.4, nsti: 76.8, vidarbha: 71.2, sahyadri: 69.5, fullMark: 100 },
    { subject: 'Employment Conversion', msdc: 62.1, nsti: 58.7, vidarbha: 54.3, sahyadri: 48.9, fullMark: 100 },
    { subject: 'Retention (6 Months)', msdc: 71.0, nsti: 66.9, vidarbha: 61.8, sahyadri: 55.4, fullMark: 100 },
    { subject: 'Audit Completeness', msdc: 98.0, nsti: 94.0, vidarbha: 91.0, sahyadri: 86.0, fullMark: 100 },
    { subject: 'Training Volume', msdc: 85.0, nsti: 80.0, vidarbha: 55.0, sahyadri: 50.0, fullMark: 100 },
  ];

  const handleReset = () => {
    setFilterDistrict('ALL');
    setFilterType('ALL');
    setFilterAudit('ALL');
    setFilterTime('Last 6 Months');
  };

  return (
    <div className="space-y-5 pb-12">
      {/* LIGHT HERO BANNER — Matching Image 4 */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#eef5ff] via-[#f4f8ff] to-[#edf4fc] border border-blue-100 p-6 md:p-8 shadow-2xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                GOVERNMENT & POLICY INTELLIGENCE HUB
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#0D1B3E] tracking-tight leading-tight">
              Training Provider Outcome Analytics
            </h1>
            <p className="text-xs md:text-sm text-slate-600 font-normal max-w-3xl leading-relaxed">
              Comparative neural performance indicators for institutional quality audit (INV-11).
            </p>
          </div>

          <div className="shrink-0 inline-flex items-center gap-2 bg-[#0B1528] rounded-xl px-3.5 py-2 text-xs font-semibold text-white shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-300 font-normal">Jurisdiction:</span>
            <span className="font-bold text-blue-300">Maharashtra (State Level)</span>
          </div>
        </div>
      </div>

      {/* FILTER BAR — Matching Image 4 */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
            {/* District */}
            <div>
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">District</label>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={filterDistrict}
                  onChange={e => setFilterDistrict(e.target.value)}
                  className="bg-transparent font-medium text-slate-700 w-full focus:outline-none"
                >
                  <option value="ALL">All Districts</option>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai Suburban">Mumbai Suburban</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Nashik">Nashik</option>
                </select>
              </div>
            </div>

            {/* Provider Type */}
            <div>
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Provider Type</label>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={filterType}
                  onChange={e => setFilterType(e.target.value)}
                  className="bg-transparent font-medium text-slate-700 w-full focus:outline-none"
                >
                  <option value="ALL">All Provider Types</option>
                  <option value="Government">Government</option>
                  <option value="NGO">NGO</option>
                  <option value="Private">Private</option>
                </select>
              </div>
            </div>

            {/* Audit Status */}
            <div>
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Audit Status</label>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={filterAudit}
                  onChange={e => setFilterAudit(e.target.value)}
                  className="bg-transparent font-medium text-slate-700 w-full focus:outline-none"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="Compliant">Compliant (&gt;90%)</option>
                  <option value="NeedsReview">Needs Review (&lt;90%)</option>
                </select>
              </div>
            </div>

            {/* Time Period */}
            <div>
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Time Period</label>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={filterTime}
                  onChange={e => setFilterTime(e.target.value)}
                  className="bg-transparent font-medium text-slate-700 w-full focus:outline-none"
                >
                  <option value="Last 6 Months">Last 6 Months</option>
                  <option value="Last 12 Months">Last 12 Months</option>
                  <option value="All Time">All Time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-4 lg:pt-0">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1976D2] hover:bg-[#1565C0] text-white text-xs font-bold rounded-xl shadow-xs transition active:scale-95 cursor-pointer">
              <Filter className="w-3.5 h-3.5" />
              <span>Apply Filters</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 METRIC STAT CARDS — Matching Image 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Providers Assessed */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Providers Assessed</span>
            <div className="text-2xl font-black text-[#0D1B3E]">12</div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
              <span>↑ 2 new this period</span>
            </div>
          </div>
        </div>

        {/* 2. Average Audit Completeness */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Average Audit Completeness</span>
            <div className="text-2xl font-black text-[#0D1B3E]">87.6%</div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
              <span>↑ 6.2% vs. previous period</span>
            </div>
          </div>
        </div>

        {/* 3. Average Employment Conversion */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Average Employment Conversion</span>
            <div className="text-2xl font-black text-[#0D1B3E]">68.4%</div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
              <span>↑ 4.8% vs. previous period</span>
            </div>
          </div>
        </div>

        {/* 4. Average 6-Month Retention */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Average 6-Month Retention</span>
            <div className="text-2xl font-black text-[#0D1B3E]">72.3%</div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
              <span>↑ 5.1% vs. previous period</span>
            </div>
          </div>
        </div>
      </div>

      {/* SPLIT SECTION: PROVIDER TABLE & PERFORMANCE COMPARISON — Matching Image 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT (7 cols): Provider Comparison Table */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-[#0D1B3E]">Provider Comparison</h3>
            {/* Toggle tabs */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setViewTab('ALL')}
                className={`px-3 py-1 rounded-lg transition ${
                  viewTab === 'ALL' ? 'bg-[#1976D2] text-white font-bold shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Providers
              </button>
              <button
                onClick={() => setViewTab('TOP5')}
                className={`px-3 py-1 rounded-lg transition ${
                  viewTab === 'TOP5' ? 'bg-[#1976D2] text-white font-bold shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Top 5
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="py-2.5 px-2">#</th>
                  <th className="py-2.5 px-2">Provider Name</th>
                  <th className="py-2.5 px-2">District</th>
                  <th className="py-2.5 px-2">Trained Candidates</th>
                  <th className="py-2.5 px-2">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span>Certification Rate</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th className="py-2.5 px-2">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span>Employment Conversion</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th className="py-2.5 px-2">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span>Retention (6 Months)</span>
                      <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </th>
                  <th className="py-2.5 px-2">Audit Completeness</th>
                  <th className="py-2.5 px-2">Trend</th>
                  <th className="py-2.5 px-2">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {providerList.map((p, idx) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3 px-2 text-slate-400 font-bold">{idx + 1}</td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${p.iconBg}`}>
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="font-bold text-[#0D1B3E] leading-tight line-clamp-1">{p.name}</p>
                          <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-md border mt-0.5 inline-block ${p.typeColor}`}>
                            {p.type}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-slate-600 font-medium">{p.district}</td>
                    <td className="py-3 px-2 font-bold text-[#0D1B3E]">{p.trained}</td>
                    <td className="py-3 px-2 text-slate-700 font-medium">{p.certRate}</td>
                    <td className="py-3 px-2 font-semibold text-slate-800">{p.empRate}</td>
                    <td className="py-3 px-2 text-slate-700 font-medium">{p.retRate}</td>
                    <td className="py-3 px-2 font-bold text-emerald-700">{p.audit}</td>
                    <td className="py-3 px-2 font-bold text-emerald-600 flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" />
                      <span>{p.trend}</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="space-y-1">
                        <button
                          onClick={() => {
                            navigate('/dashboard/government/program-impact');
                          }}
                          className="px-2.5 py-1 bg-[#1976D2] hover:bg-[#1565C0] text-white text-[10px] font-bold rounded-lg transition active:scale-95 cursor-pointer block text-center shadow-2xs"
                        >
                          View Provider
                        </button>
                        <button
                          onClick={() => navigate('/dashboard/government/program-impact')}
                          className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-0.5 mx-auto cursor-pointer"
                        >
                          <span>Compare</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT (5 cols): Performance Comparison & Audit Insights */}
        <div className="lg:col-span-5 space-y-5">
          {/* Radar Chart Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-[#0D1B3E]">Performance Comparison</h3>
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-[11px] font-semibold">
                <button
                  onClick={() => setChartView('RADAR')}
                  className={`px-2.5 py-0.5 rounded-md ${
                    chartView === 'RADAR' ? 'bg-[#1976D2] text-white font-bold' : 'text-slate-600'
                  }`}
                >
                  Radar View
                </button>
                <button
                  onClick={() => setChartView('BAR')}
                  className={`px-2.5 py-0.5 rounded-md ${
                    chartView === 'BAR' ? 'bg-[#1976D2] text-white font-bold' : 'text-slate-600'
                  }`}
                >
                  Bar View
                </button>
              </div>
            </div>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="72%" data={radarData}>
                  <PolarGrid stroke="#E2E8F0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: '#64748B' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 8 }} />
                  <Tooltip />
                  <Radar name="MSDC" dataKey="msdc" stroke="#2563EB" fill="#2563EB" fillOpacity={0.25} />
                  <Radar name="NSTI" dataKey="nsti" stroke="#10B981" fill="#10B981" fillOpacity={0.2} />
                  <Radar name="Vidarbha VET" dataKey="vidarbha" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.15} />
                  <Radar name="Sahyadri STF" dataKey="sahyadri" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.15} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Radar Legend */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-slate-100 text-[10px] font-medium text-slate-600">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#2563EB]"></div>
                <span>MSDC</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                <span>NSTI</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
                <span>Vidarbha VET</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
                <span>Sahyadri STF</span>
              </div>
            </div>
          </div>

          {/* Audit & Compliance Insights Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-[#0D1B3E]">Audit & Compliance Insights</h3>
              <button
                onClick={() => navigate('/dashboard/government/ai-anomaly')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {/* Item 1: MSDC Compliant */}
              <div className="flex items-start justify-between gap-2 p-2.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#0D1B3E] block">MSDC</strong>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      Highest audit compliance (98%). No major issues found.
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md border border-emerald-200 shrink-0">
                  Compliant
                </span>
              </div>

              {/* Item 2: Sahyadri STF Needs Review */}
              <div className="flex items-start justify-between gap-2 p-2.5 bg-amber-50/50 rounded-xl border border-amber-100">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#0D1B3E] block">Sahyadri STF</strong>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      Audit completeness below average (86%). Review pending for infrastructure and placement records.
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md border border-amber-200 shrink-0">
                  Needs Review
                </span>
              </div>

              {/* Item 3: Vidarbha VET Under Watch */}
              <div className="flex items-start justify-between gap-2 p-2.5 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#0D1B3E] block">Vidarbha VET</strong>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      Certification rate lower than state average (71.2%). Monitor for improvement.
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md border border-blue-200 shrink-0">
                  Under Watch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidersPage;
