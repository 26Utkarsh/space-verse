import React from 'react';

interface FilterBarProps {
  filters: any;
  setFilters: (filters: any) => void;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center bg-[#0a0e17] p-4 rounded-3xl border border-slate-800">
      <select 
        name="agency" 
        value={filters.agency} 
        onChange={handleChange}
        className="w-full md:w-auto flex-1 bg-[#050508] text-slate-300 border border-slate-800 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
      >
        <option value="">All Agencies</option>
        <option value="NASA">NASA</option>
        <option value="ISRO">ISRO</option>
        <option value="ESA">ESA</option>
        <option value="CNSA">CNSA</option>
        <option value="JAXA">JAXA</option>
        <option value="Roscosmos">Roscosmos</option>
      </select>

      <select 
        name="type" 
        value={filters.type} 
        onChange={handleChange}
        className="w-full md:w-auto flex-1 bg-[#050508] text-slate-300 border border-slate-800 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
      >
        <option value="">All Types</option>
        <option value="rover">Rover</option>
        <option value="orbiter">Orbiter</option>
        <option value="lander">Lander</option>
        <option value="flyby">Flyby</option>
        <option value="crewed">Crewed</option>
        <option value="telescope">Telescope</option>
      </select>

      <select 
        name="status" 
        value={filters.status} 
        onChange={handleChange}
        className="w-full md:w-auto flex-1 bg-[#050508] text-slate-300 border border-slate-800 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
      >
        <option value="">All Statuses</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        <option value="planned">Planned</option>
        <option value="enroute">Enroute</option>
        <option value="failed">Failed</option>
      </select>

      {/* Clear Filters */}
      {(filters.agency || filters.type || filters.status) && (
        <button 
          onClick={() => setFilters({ search: filters.search, agency: '', type: '', status: '', page: 1, limit: filters.limit })}
          className="text-xs font-mono tracking-widest text-[#ff9900] hover:text-white transition-colors uppercase px-4 py-2 border border-[#ff9900]/30 rounded-xl hover:bg-[#ff9900]/10"
        >
          Clear
        </button>
      )}
    </div>
  );
}
