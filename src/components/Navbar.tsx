import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path: string, exact: boolean = false) => {
    if (exact) return location.pathname === path && !location.search;
    if (path === '/missions?status=planned,enroute') return location.pathname === '/missions' && location.search.includes('planned');
    if (path === '/missions') return location.pathname === '/missions' && !location.search.includes('planned');
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020611]/90 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <span className="text-2xl font-black font-display tracking-widest text-[#00f0ff] uppercase">
              SPACE VERSE
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { label: 'HOME', path: '/', exact: true },
              { label: 'MISSIONS', path: '/missions' },
              { label: 'FUTURE', path: '/missions?status=planned,enroute' },
              { label: 'AGENCIES', path: '/agencies' },
              { label: 'NEWS', path: '/news' }
            ].map(link => (
              <Link 
                key={link.label}
                to={link.path} 
                className={`relative px-4 py-2 font-mono text-sm tracking-widest transition-colors duration-300 ${isCurrent(link.path, link.exact) ? 'text-[#00f0ff]' : 'text-slate-400 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-[#00f0ff] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#00f0ff]/20 bg-[#020611]/95 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {[
                { label: 'HOME', path: '/' },
                { label: 'MISSIONS', path: '/missions' },
                { label: 'FUTURE', path: '/missions?status=planned,enroute' },
                { label: 'AGENCIES', path: '/agencies' },
                { label: 'NEWS', path: '/news' }
              ].map(link => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-md font-mono text-base tracking-widest text-slate-300 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
