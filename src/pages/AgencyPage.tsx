import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAgencyBySlug } from '../services/api';
import MissionCard from '../components/MissionCard';

export default function AgencyPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgency = async () => {
      try {
        if (!slug) return;
        const res = await getAgencyBySlug(slug);
        setData(res);
      } catch (err: any) {
        if (err.response && err.response.status === 404) {
          navigate('/', { replace: true });
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAgency();
  }, [slug, navigate]);

  if (loading) {
    return <div className="min-h-screen pt-24 text-center"><div className="animate-pulse w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin mx-auto"></div></div>;
  }

  if (!data) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen"
    >
      <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="15 18 9 12 15 6"></polyline></svg>
        Back Home
      </Link>

      <div className="glass-card p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full"></div>
        
        <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-[#0a0a0f] rounded-2xl p-6 flex flex-col items-center justify-center border border-indigo-500/50 shadow-[0_0_20px_rgba(79,70,229,0.2)]">
          <img 
            src={{ 'nasa': 'https://flagcdn.com/w160/us.png', 'isro': 'https://flagcdn.com/w160/in.png', 'esa': 'https://flagcdn.com/w160/eu.png', 'cnsa': 'https://flagcdn.com/w160/cn.png', 'jaxa': 'https://flagcdn.com/w160/jp.png', 'roscosmos': 'https://flagcdn.com/w160/ru.png' }[data.slug as string] || ''} 
            alt="flag" 
            className="w-16 md:w-24 h-auto object-contain rounded-sm" 
          />
        </div>
        
        <div className="text-center md:text-left z-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{data.name}</h1>
            <span className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm font-medium border border-white/5">{data.country}</span>
          </div>
          <p className="text-indigo-400 font-medium mb-4">Founded in {data.founded}</p>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            {data.description}
          </p>
        </div>
      </div>

      <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
        <h2 className="text-3xl font-bold text-white">Missions ({data.missions.length})</h2>
      </div>

      {data.missions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.missions.map((mission: any) => (
            <MissionCard key={mission.slug} mission={mission} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-slate-400 glass-card">
          No missions found for this agency in the database.
        </div>
      )}
    </motion.div>
  );
}
