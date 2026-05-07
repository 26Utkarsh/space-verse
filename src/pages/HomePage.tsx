import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MissionCard from '../components/MissionCard';
import { getMissions, getAgencies } from '../services/api';

export default function HomePage() {
  const [missions, setMissions] = useState<any[]>([]);
  const [agencies, setAgencies] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    // Elegant floating particles
    const starContainer = document.getElementById('star-container');
    if (starContainer && starContainer.children.length === 0) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'absolute rounded-full bg-white/40 blur-[1px]';
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.animate([
          { opacity: Math.random() * 0.5, transform: 'translateY(0px)' },
          { opacity: Math.random(), transform: `translateY(-${Math.random() * 50 + 20}px)` },
          { opacity: Math.random() * 0.5, transform: 'translateY(0px)' }
        ], {
          duration: Math.random() * 5000 + 5000,
          iterations: Infinity,
          easing: 'ease-in-out',
          delay: Math.random() * 5000
        });
        starContainer.appendChild(star);
      }
    }

    const fetchAgencies = async () => {
      try {
        const agenciesData = await getAgencies();
        setAgencies(agenciesData || []);
      } catch (err) {
        console.error("Failed to load agencies", err);
      }
    };
    fetchAgencies();

    return () => {
      if (starContainer) starContainer.innerHTML = '';
    };
  }, []);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const params: any = { limit: 6, status: 'completed' };
        const missionsData = await getMissions(params);
        setMissions(missionsData.missions || []);
      } catch (err) {
        console.error("Failed to load missions", err);
      }
    };
    fetchMissions();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchValue.trim()) {
      navigate(`/missions?search=${encodeURIComponent(searchValue)}`);
    }
  };

  const navigateToAgency = (agencySlug: string) => {
    navigate(`/agencies/${agencySlug}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050508]">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#050508] to-[#050508]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        <div id="star-container" className="absolute inset-0" style={{ perspective: '1000px' }}></div>
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50"></div>
      </div>
      
      {/* Hero Section */}
      <motion.section 
        style={{ y: y1, opacity }}
        className="pt-40 pb-20 px-4 flex flex-col items-center justify-center text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-sm font-medium tracking-wide mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Decades of Human Exploration
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 text-white drop-shadow-2xl">
            Unveil The <br className="md:hidden" />
            <span className="bg-gradient-to-br from-indigo-300 via-cyan-300 to-emerald-200 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">Cosmos</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 font-light leading-relaxed">
            The definitive archive of past triumphs and future leaps in space exploration. 
            Search any spacecraft, agency, or target celestial body.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-2xl px-4 relative z-20 group" 
        >
          <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-500"></div>
          <SearchBar value={searchValue} onChange={handleSearch} onSubmit={handleSearchSubmit} />
        </motion.div>
      </motion.section>

      {/* Agencies Carousel */}
      <section className="px-4 py-16 w-full relative z-10 border-t border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center gap-4 w-full mb-12 justify-center">
             <span className="text-sm font-medium tracking-widest text-slate-400 uppercase">
               Pioneering Organizations
             </span>
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap overflow-x-auto hide-scrollbar gap-6 md:gap-8 justify-center px-4 pb-4" style={{ scrollbarWidth: 'none' }}>
            {agencies.map((agency) => {
              const agencyFlags: Record<string, string> = {
                nasa: 'https://flagcdn.com/w160/us.png',
                isro: 'https://flagcdn.com/w160/in.png',
                esa: 'https://flagcdn.com/w160/eu.png',
                cnsa: 'https://flagcdn.com/w160/cn.png',
                jaxa: 'https://flagcdn.com/w160/jp.png',
                roscosmos: 'https://flagcdn.com/w160/ru.png'
              };
              const flag = agencyFlags[agency.slug] || agency.name.substring(0, 2).toUpperCase();
              
              return (
                <motion.button
                  key={agency.slug}
                  onClick={() => navigateToAgency(agency.slug)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center gap-4 min-w-[100px] focus:outline-none group cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0a0a0f] group-hover:border-indigo-500/50 shadow-sm group-hover:shadow-[0_0_20px_rgba(79,70,229,0.2)]">
                     <img src={flag} alt="flag" className="w-10 h-auto transition-colors duration-300 object-contain rounded-sm" />
                  </div>
                  
                  <span className="font-medium text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                    {agency.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legacy Missions (Completed) */}
      <section className="px-4 py-24 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 mb-12">
          <div className="relative">
            <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-indigo-500 to-cyan-400 rounded-r-md"></div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Historic Triumphs</h2>
            <p className="text-slate-400 max-w-lg text-lg">Notable completed missions that forever changed our understanding of the universe.</p>
          </div>
          <Link to="/missions?status=completed" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Explore All Completed
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, idx) => (
            <motion.div 
              key={mission.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <MissionCard mission={mission} />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="px-4 pb-24 w-full relative z-10">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/missions?status=active" className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 p-10 flex flex-col items-start justify-center min-h-[250px] transition-all hover:border-indigo-500/50">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 to-[#0a0a0f] opacity-80 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600')] bg-cover bg-center opacity-20 filter mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
               <div className="relative z-10">
                 <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-200 transition-colors">Active Missions</h3>
                 <p className="text-slate-400 max-w-sm">Spacecraft currently operational across the solar system.</p>
               </div>
            </Link>
            
            <Link to="/missions?status=planned,enroute" className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 p-10 flex flex-col items-start justify-center min-h-[250px] transition-all hover:border-cyan-500/50">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 to-[#0a0a0f] opacity-80 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=600')] bg-cover bg-center opacity-20 filter mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
               <div className="relative z-10">
                 <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-200 transition-colors">Future & Enroute</h3>
                 <p className="text-slate-400 max-w-sm">The next generation of exploration and spacecraft currently traveling.</p>
               </div>
            </Link>
         </div>
      </section>

    </div>
  );
}
