import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createMission } from '../services/api';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    slug: '', name: '', agency: 'NASA', type: 'rover', status: 'active',
    targetBody: '', launchDate: '', endDate: '', objective: '',
    achievements: '',
    instruments: '',
    nasaId: '', coverImage: '', timeline: '', budget: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      setIsAuthorized(true);
      setError('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      const payload = {
        ...formData,
        achievements: formData.achievements.split('\n').filter(a => a.trim() !== ''),
        instruments: formData.instruments.split('\n').filter(i => i.trim() !== '').map(line => {
          const parts = line.split(':');
          return { name: parts[0]?.trim() || '', purpose: parts[1]?.trim() || '' };
        }),
        timeline: formData.timeline.split('\n').filter(t => t.trim() !== '').map(line => {
          const parts = line.split('|');
          return { date: parts[0]?.trim() || '', event: parts[1]?.trim() || '' };
        })
      };
      
      if (!payload.endDate) delete payload.endDate;
      if (!payload.nasaId) delete payload.nasaId;

      await createMission(payload, password);
      setSuccess('Mission created successfully!');
      
      // Reset form on success but keep easy defaults
      setFormData({
        ...formData, slug: '', name: '', targetBody: '', objective: '', achievements: '', instruments: '', timeline: '', nasaId: '', coverImage: ''
      });
      
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create mission');
      if (err.response?.status === 401) {
        setIsAuthorized(false);
        setPassword('');
      }
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Access</h2>
          {error && <div className="bg-red-500/20 text-red-400 p-3 rounded mb-4 text-sm">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded transition-colors">
              Enter
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-24 pb-16 px-4 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 items-center flex justify-between">
        Add New Mission
        <button onClick={() => setIsAuthorized(false)} className="text-sm font-normal text-slate-400 hover:text-white">Logout</button>
      </h1>
      
      {error && <div className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-6 border border-red-500/30">{error}</div>}
      {success && <div className="bg-emerald-500/20 text-emerald-400 p-4 rounded-lg mb-6 border border-emerald-500/30">{success}</div>}
      
      <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Slug (unique URL ID)*</label>
            <input type="text" name="slug" required value={formData.slug} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" placeholder="e.g. curiosity-rover" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Name*</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Agency*</label>
            <select name="agency" required value={formData.agency} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none">
              <option value="NASA">NASA</option>
              <option value="ISRO">ISRO</option>
              <option value="ESA">ESA</option>
              <option value="CNSA">CNSA</option>
              <option value="JAXA">JAXA</option>
              <option value="Roscosmos">Roscosmos</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Type*</label>
            <select name="type" required value={formData.type} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none">
              <option value="rover">Rover</option>
              <option value="orbiter">Orbiter</option>
              <option value="lander">Lander</option>
              <option value="flyby">Flyby</option>
              <option value="crewed">Crewed</option>
              <option value="telescope">Telescope</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Status*</label>
            <select name="status" required value={formData.status} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none">
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Target Body*</label>
            <input type="text" name="targetBody" required value={formData.targetBody} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" placeholder="e.g. Mars" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Launch Date*</label>
            <input type="date" name="launchDate" required value={formData.launchDate} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">End Date</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Budget</label>
            <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" placeholder="$2.5 billion" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">NASA Image API ID</label>
            <input type="text" name="nasaId" value={formData.nasaId} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" placeholder="e.g. Curiosity" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Cover Image URL*</label>
          <input type="url" name="coverImage" required value={formData.coverImage} onChange={handleChange} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Objective*</label>
          <textarea name="objective" required value={formData.objective} onChange={handleChange} rows={3} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Achievements (one per line)*</label>
          <textarea name="achievements" required value={formData.achievements} onChange={handleChange} rows={4} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" placeholder="Discovered water...&#10;Completed primary mission..."></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Instruments (Format: Name : Purpose, one per line)*</label>
          <textarea name="instruments" required value={formData.instruments} onChange={handleChange} rows={4} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" placeholder="Mastcam : High-res imaging&#10;SAM : Sample analysis"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Timeline (Format: YYYY-MM-DD | Event Description, one per line)*</label>
          <textarea name="timeline" required value={formData.timeline} onChange={handleChange} rows={4} className="w-full bg-[#0a0a0f] border border-white/20 rounded p-2 text-white focus:border-indigo-500 focus:outline-none" placeholder="2020-07-30 | Launched from Earth&#10;2021-02-18 | Landed on Mars"></textarea>
        </div>

        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded transition-colors mt-4">
          Create Mission
        </button>
      </form>
    </motion.div>
  );
}
