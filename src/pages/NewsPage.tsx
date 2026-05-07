import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, ExternalLink, Clock } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState('All');

  const fetchNews = async (isRefresh = false, tab = activeTab) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    
    try {
      const searchParam = tab !== 'All' ? `?search=${tab}&limit=12` : '?limit=12';
      const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${searchParam}`);
      if (!response.ok) throw new Error('Failed to fetch news');
      const data = await response.json();
      setNews(data.results);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Unable to load latest news at the moment.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews(false, activeTab);
    
    // Auto update every 5 minutes (300000 ms)
    const interval = setInterval(() => {
      fetchNews(true, activeTab);
    }, 300000);
    
    return () => clearInterval(interval);
  }, [activeTab]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && news.length === 0) {
    return <div className="min-h-screen pt-24 text-center"><div className="animate-pulse w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin mx-auto"></div></div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen"
    >
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest font-display uppercase mb-4 flex items-center gap-4">
            Space News
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Latest updates and breakthroughs in space exploration from around the globe.
          </p>
        </div>
        
        <button 
          onClick={() => fetchNews(true)}
          disabled={refreshing}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-mono text-sm tracking-wider uppercase transition-all whitespace-nowrap disabled:opacity-50"
        >
          <RefreshCcw className={`w-4 h-4 ${refreshing ? 'animate-spin text-indigo-400' : ''}`} />
          {refreshing ? 'Updating...' : 'Update News'}
        </button>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {['All', 'NASA', 'ISRO', 'ESA', 'JAXA', 'CNSA'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-mono text-sm tracking-wider uppercase transition-all ${
              activeTab === tab 
                ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-8 font-mono text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <motion.a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            whileHover={{ y: -5 }}
            className="glass-card flex flex-col overflow-hidden group border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="h-48 w-full relative overflow-hidden bg-white/5">
              <img 
                src={item.image_url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200';
                }}
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-mono font-bold tracking-wider text-white border border-white/10 uppercase">
                {item.news_site}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono tracking-wider uppercase mb-3">
                <Clock className="w-3 h-3" />
                {formatDate(item.published_at)}
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 line-clamp-3 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h2>
              
              <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
                {item.summary}
              </p>
              
              <div className="mt-auto flex items-center justify-between text-sm pt-4 border-t border-white/5">
                <span className="text-[#00f0ff] font-medium group-hover:text-white transition-colors">
                  Read Full Story
                </span>
                <ExternalLink className="w-4 h-4 text-[#00f0ff] group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
