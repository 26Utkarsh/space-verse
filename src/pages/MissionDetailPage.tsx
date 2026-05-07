import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getMissionBySlug } from '../services/api';
import AgencyBadge from '../components/AgencyBadge';
import MissionTimeline from '../components/MissionTimeline';
import ImageGallery from '../components/ImageGallery';

export default function MissionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [mission, setMission] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchMission = async () => {
      try {
        if (!slug) return;
        const data = await getMissionBySlug(slug);
        setMission(data);
      } catch (err: any) {
        if (err.response && err.response.status === 404) {
          navigate('/missions', { replace: true });
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMission();
  }, [slug, navigate]);

  if (loading) {
    return <div className="min-h-screen pt-24 text-center"><div className="animate-pulse w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin mx-auto"></div></div>;
  }

  if (!mission) return null;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'instruments', label: 'Instruments' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pb-16"
    >
      {/* Hero Header */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={mission.coverImage} 
          alt={mission.name} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-20"></div>
        
        <div className="absolute bottom-0 left-0 right-0 z-30 max-w-7xl mx-auto px-4 pb-8">
          <Link to="/missions" className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white mb-4 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Back to Missions
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <AgencyBadge agency={mission.agency} />
            <span className={`px-2 py-0.5 text-xs font-semibold rounded-md border backdrop-blur-sm uppercase tracking-wider ${
              mission.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 
              mission.status === 'completed' ? 'bg-slate-500/20 text-slate-400 border-slate-500/30' : 
              mission.status === 'planned' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 
              mission.status === 'enroute' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : 
              'bg-red-500/20 text-red-400 border-red-500/30'}`}>
              {mission.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{mission.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar border-b border-white/10 mb-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors relative ${activeTab === tab.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="activetab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-invert max-w-none text-lg text-slate-300 leading-relaxed">
                  <p className="font-semibold text-slate-200 mb-6">{mission.objective}</p>
                  {mission.description && (
                    <p className="text-slate-400 mt-4 leading-relaxed">{mission.description}</p>
                  )}
                </motion.div>
              )}

              {activeTab === 'timeline' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <MissionTimeline timeline={mission.timeline} />
                </motion.div>
              )}

              {activeTab === 'achievements' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {mission.achievements && mission.achievements.length > 0 ? (
                    <ul className="space-y-4">
                      {mission.achievements.map((achievement: any, idx: number) => (
                        <li key={idx} className="flex gap-4 p-4 glass-card relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500/50"></div>
                          <div className="mt-1 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-cyan-400 font-mono mb-1">
                              {new Date(achievement.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <span className="text-slate-200 text-lg leading-relaxed">{achievement.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400">No achievements recorded yet.</p>
                  )}
                </motion.div>
              )}

              {activeTab === 'instruments' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mission.instruments && mission.instruments.length > 0 ? (
                    mission.instruments.map((inst: any, idx: number) => (
                      <div key={idx} className="glass-card p-5">
                        <h4 className="text-lg font-bold text-white mb-2">{inst.name}</h4>
                        <p className="text-slate-400 text-sm">{inst.purpose}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-400 sm:col-span-2">No instruments data available.</p>
                  )}
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <ImageGallery nasaId={mission.nasaId} />
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Mission Specs</h3>
              
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Target</p>
                  <p className="text-lg font-medium text-slate-200 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><circle cx="12" cy="12" r="10"></circle><ellipse cx="12" cy="12" rx="10" ry="3"></ellipse></svg>
                    {mission.targetBody}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-slate-500 mb-1">Mission Type</p>
                  <p className="text-lg font-medium text-slate-200 capitalize">{mission.type}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500 mb-1">Launch Date</p>
                  <p className="text-lg font-medium text-slate-200">
                    {new Date(mission.launchDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>

                {mission.endDate && (
                  <div>
                    <p className="text-sm text-slate-500 mb-1">End Date</p>
                    <p className="text-lg font-medium text-slate-200">
                      {new Date(mission.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                )}

                {mission.budget && (
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Budget</p>
                    <p className="text-lg font-medium text-emerald-400">{mission.budget}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
