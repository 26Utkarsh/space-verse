import React, { useState, useEffect } from 'react';
import { getMissionImages } from '../services/api';

interface ImageGalleryProps {
  nasaId: string | null;
}

export default function ImageGallery({ nasaId }: ImageGalleryProps) {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      if (!nasaId) {
        setLoading(false);
        return;
      }
      try {
        const data = await getMissionImages(nasaId);
        setImages(data);
      } catch (err) {
        console.error('Error fetching images', err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [nasaId]);

  if (loading) {
    return <div className="animate-pulse flex gap-4 mt-4">
      <div className="w-1/3 aspect-square bg-white/10 rounded-lg"></div>
      <div className="w-1/3 aspect-square bg-white/10 rounded-lg"></div>
      <div className="w-1/3 aspect-square bg-white/10 rounded-lg"></div>
    </div>;
  }

  if (!images.length) {
    return <p className="text-slate-400 mt-4 italic">No gallery images available for this mission.</p>;
  }

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-6">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="break-inside-avoid relative group cursor-pointer rounded-lg overflow-hidden glass-card"
            onClick={() => openModal(i)}
          >
            <img 
              src={img.url} 
              alt={img.caption} 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="p-3 text-sm text-white line-clamp-2">{img.caption || 'NASA Image'}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md" onClick={closeModal}>
          <button onClick={closeModal} className="absolute top-6 right-6 text-white hover:text-cyan-400 z-10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <button onClick={prevImage} className="absolute left-6 text-white hover:text-cyan-400 z-10 p-2 glass-card transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="max-w-5xl max-h-[80vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img src={images[currentIndex].url} alt={images[currentIndex].caption} referrerPolicy="no-referrer" className="max-h-[70vh] object-contain rounded-md" />
            <div className="mt-4 text-center max-w-2xl">
              <p className="text-white text-sm md:text-base">{images[currentIndex].caption}</p>
              {images[currentIndex].photographer && (
                <p className="text-slate-400 text-xs mt-1">Photo: {images[currentIndex].photographer}</p>
              )}
              <p className="text-slate-500 text-xs mt-2">{currentIndex + 1} of {images.length}</p>
            </div>
          </div>
          
          <button onClick={nextImage} className="absolute right-6 text-white hover:text-cyan-400 z-10 p-2 glass-card transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      )}
    </div>
  );
}
