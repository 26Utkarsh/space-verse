import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MissionCardProps {
  mission: any;
  key?: React.Key;
}

export default function MissionCard({ mission }: MissionCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-[#00f0ff]';
      case 'completed': return 'text-slate-400';
      case 'failed': return 'text-red-500';
      case 'planned': return 'text-[#ff9900]';
      case 'enroute': return 'text-purple-400';
      default: return 'text-slate-400';
    }
  };
  
  const getStatusDotColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-[#00f0ff]';
      case 'completed': return 'bg-slate-400';
      case 'failed': return 'bg-red-500';
      case 'planned': return 'bg-[#ff9900]';
      case 'enroute': return 'bg-purple-400';
      default: return 'bg-slate-400';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-[#0a0e17] rounded-3xl overflow-hidden group border border-slate-800/50 hover:border-[#00f0ff]/30 transition-all flex flex-col relative h-full"
    >
      <Link to={`/missions/${mission.slug}`} className="flex flex-col h-full focus:outline-none">
        
        {/* Header section with image and gradient fade */}
        <div className="relative h-64 w-full">
          <img 
            src={mission.coverImage} 
            alt={mission.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient fade to match dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/80 to-transparent"></div>
          
          <div className="absolute top-4 right-4 text-xs font-mono tracking-wider opacity-60">
            {mission.agency}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 pb-2">
            <div className="flex justify-between items-end mb-2">
              <h3 className="text-4xl font-display font-bold text-white tracking-tight">{mission.name}</h3>
              <span className="text-sm font-mono text-slate-400 tracking-widest">{mission.type}</span>
            </div>
            
            <div className="flex items-center justify-between border-t border-slate-800/50 pt-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${getStatusDotColor(mission.status)}`}></span>
                <span className={`text-xs font-mono font-bold tracking-widest uppercase ${getStatusColor(mission.status)}`}>
                  {mission.status}
                </span>
              </div>
              
              {/* Fake progress bar mimicking the 'habitability' bar */}
              <div className="hidden sm:flex items-center gap-4 w-1/3">
                 <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${getStatusDotColor(mission.status)}`} style={{ width: mission.status === 'completed' ? '100%' : '50%' }}></div>
                 </div>
                 <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff]">
                    {new Date(mission.launchDate).getFullYear()}
                 </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Display section */}
        <div className="p-6 flex-grow flex flex-col pt-4">
          <p className="text-slate-300 text-sm xs:text-base leading-relaxed mb-6 font-light">
            {mission.description.substring(0, 150)}...
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#121824] rounded-xl p-4 border border-slate-800/50">
              <p className="text-[10px] font-mono tracking-widest text-slate-500 mb-1 uppercase">TARGET</p>
              <p className="font-mono text-sm">{mission.targetBody}</p>
            </div>
            <div className="bg-[#121824] rounded-xl p-4 border border-slate-800/50">
              <p className="text-[10px] font-mono tracking-widest text-slate-500 mb-1 uppercase">BUDGET</p>
              <p className="font-mono text-sm">{mission.budget}</p>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-4 mb-4">
               <h4 className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase whitespace-nowrap">MISSION CAPABILITIES</h4>
               <div className="h-px w-full bg-slate-800/50"></div>
            </div>
            
            <ul className="space-y-2">
              {mission.instruments?.slice(0, 2).map((inst: any, idx: number) => (
                <li key={idx} className="flex gap-2 text-sm text-slate-400 items-start">
                  <span className="text-[#00f0ff] inline-block mt-0.5">▸</span>
                  <span className="font-light"><strong className="font-medium text-slate-300">{inst.name}</strong> - {inst.purpose}</span>
                </li>
              ))}
              {(!mission.instruments || mission.instruments.length === 0) && (
                <li className="text-sm text-slate-500 italic font-light">Data not available</li>
              )}
            </ul>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
