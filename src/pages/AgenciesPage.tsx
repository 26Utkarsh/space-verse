import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { getAgencies } from '../services/api';

export default function AgenciesPage() {
  const [agencies, setAgencies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const agenciesData = await getAgencies();
        setAgencies(agenciesData || []);
      } catch (err) {
        console.error("Failed to load agencies", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAgencies();
  }, []);

  const agencyFlags: Record<string, string> = {
    nasa: 'https://flagcdn.com/w160/us.png',
    isro: 'https://flagcdn.com/w160/in.png',
    esa: 'https://flagcdn.com/w160/eu.png',
    cnsa: 'https://flagcdn.com/w160/cn.png',
    jaxa: 'https://flagcdn.com/w160/jp.png',
    roscosmos: 'https://flagcdn.com/w160/ru.png'
  };

  if (loading) {
    return <div className="min-h-screen pt-24 text-center"><div className="animate-pulse w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin mx-auto"></div></div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen"
    >
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest font-display uppercase mb-4">
          Space Agencies
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg">
          Explore the organizations leading humanity's journey into the cosmos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agencies.map((agency) => {
          const flag = agencyFlags[agency.slug] || agency.name.substring(0, 2).toUpperCase();
          
          return (
            <motion.div
              key={agency.slug}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/agencies/${agency.slug}`)}
              className="glass-card p-8 flex flex-col items-center text-center cursor-pointer group border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="w-24 h-24 mb-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0a0a0f] group-hover:border-indigo-500/50 group-hover:scale-110 shadow-sm group-hover:shadow-[0_0_20px_rgba(79,70,229,0.2)]">
                <img src={flag} alt={`${agency.country} flag`} className="w-12 md:w-16 h-auto transition-all duration-300 object-contain rounded-sm" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{agency.name}</h2>
              <p className="text-sm text-indigo-400 font-medium tracking-wide uppercase mb-4">{agency.country}</p>
              <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                {agency.description}
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm font-medium text-[#00f0ff] hover:text-white transition-colors">
                  View Profile
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
