import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SpaceAIAssistant from './components/SpaceAIAssistant';

// Lazy loading pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const MissionsPage = lazy(() => import('./pages/MissionsPage'));
const MissionDetailPage = lazy(() => import('./pages/MissionDetailPage'));
const AgencyPage = lazy(() => import('./pages/AgencyPage'));
const AgenciesPage = lazy(() => import('./pages/AgenciesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen pt-24 text-center"><div className="animate-pulse w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin mx-auto"></div></div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/missions" element={<MissionsPage />} />
              <Route path="/missions/:slug" element={<MissionDetailPage />} />
              <Route path="/agencies" element={<AgenciesPage />} />
              <Route path="/agencies/:slug" element={<AgencyPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </Suspense>
          <SpaceAIAssistant />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
