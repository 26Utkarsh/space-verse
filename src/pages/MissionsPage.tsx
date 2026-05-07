import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import MissionCard from '../components/MissionCard';
import SkeletonCard from '../components/SkeletonCard';
import { getMissions } from '../services/api';
import { useDebounce } from '../hooks/useDebounce';

export default function MissionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialStatus = searchParams.get('status') || '';
  const initialAgency = searchParams.get('agency') || '';
  const initialType = searchParams.get('type') || '';
  
  const [missions, setMissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: initialSearch,
    agency: initialAgency,
    type: initialType,
    status: initialStatus,
    page: 1,
    limit: 12
  });
  const [totalPages, setTotalPages] = useState(1);

  const debouncedSearch = useDebounce(filters.search, 300);

  useEffect(() => {
    // Sync state if URL changes externally
    const urlStatus = searchParams.get('status') || '';
    const urlAgency = searchParams.get('agency') || '';
    const urlType = searchParams.get('type') || '';
    
    setFilters(prev => {
      if (prev.status !== urlStatus || prev.agency !== urlAgency || prev.type !== urlType) {
        return { ...prev, status: urlStatus, agency: urlAgency, type: urlType, page: 1 };
      }
      return prev;
    });
  }, [searchParams]);

  useEffect(() => {
    const fetchMissions = async () => {
      setLoading(true);
      try {
        const queryParams = { ...filters, search: debouncedSearch };
        const data = await getMissions(queryParams);
        setMissions(data.missions || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error('Error fetching missions', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
    
    // Update URL params
    const params = new URLSearchParams();
    if (debouncedSearch) params.set('search', debouncedSearch);
    if (filters.status) params.set('status', filters.status);
    if (filters.agency) params.set('agency', filters.agency);
    if (filters.type) params.set('type', filters.type);
    setSearchParams(params, { replace: true });
    
  }, [debouncedSearch, filters.agency, filters.type, filters.status, filters.page, setSearchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value, page: 1 });
  };

  const handlePageChange = (newPage: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFilters({ ...filters, page: newPage });
  };

  const isFuture = filters.status === 'planned,enroute';

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')]"></div>
      
      {/* Dynamic Header styling based on page intent */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-32 pb-4 px-4"
      >
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
           
           <div className="flex items-center gap-4 w-full mb-12">
             <div className="w-12 h-px bg-[#00f0ff]"></div>
             <span className="text-[#ff9900] text-lg">☀️</span>
             <h1 className="text-sm md:text-base font-mono tracking-[0.3em] uppercase text-[#00f0ff]">
               {isFuture ? 'FUTURE MISSIONS' : 'OUR SOLAR SYSTEM'}
             </h1>
             <div className="flex-1 h-px bg-slate-800/50"></div>
           </div>

           <div className="w-full max-w-4xl opacity-80 hover:opacity-100 transition-opacity">
              <SearchBar value={filters.search} onChange={handleSearchChange} />
           </div>
           
           <div className="w-full max-w-5xl mt-6">
              <FilterBar filters={filters} setFilters={setFilters} />
           </div>
         </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <p className="text-slate-400 text-sm font-medium tracking-wide">
             {loading ? 'Searching archives...' : 'Showing results'}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : missions.length > 0 ? (
          <>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {missions.map(mission => (
                <MissionCard key={mission.slug} mission={mission} />
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 gap-2">
                <button 
                  disabled={filters.page === 1}
                  onClick={() => handlePageChange(filters.page - 1)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full font-medium text-slate-300 border border-white/10"
                >
                  Previous
                </button>
                <div className="flex space-x-1 mx-4">
                   <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                     {filters.page}
                   </span>
                   <span className="w-10 h-10 flex items-center justify-center text-slate-500">
                     /
                   </span>
                   <span className="w-10 h-10 flex items-center justify-center text-slate-400 font-medium">
                     {totalPages}
                   </span>
                </div>
                <button 
                  disabled={filters.page === totalPages}
                  onClick={() => handlePageChange(filters.page + 1)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full font-medium text-slate-300 border border-white/10"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-white/[0.02] rounded-3xl border border-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-slate-700 mb-6 drop-shadow-md"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <h3 className="text-2xl font-semibold text-white mb-3">No matching records found</h3>
            <p className="text-slate-400 font-light max-w-sm mx-auto">Our archives returned empty for your current filters. Try adjusting your search parameters.</p>
            <button 
              onClick={() => setFilters({...filters, search: '', agency: '', type: '', status: ''})}
              className="mt-8 px-6 py-2 rounded-full border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
