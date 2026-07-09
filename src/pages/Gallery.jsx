import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = Array.from({ length: 9 }).map((_, i) => (
    `https://placehold.co/800x600/1a1a1a/ffffff?text=Gallery+Image+${i + 1}`
  ));

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Event <span className="text-gradient">Gallery</span></h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="cursor-pointer overflow-hidden rounded-xl border border-white/10 group" onClick={() => setSelectedImg(src)}>
            <img src={src} alt={`Gallery ${idx}`} className="w-full h-64 object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
            <X size={40} />
          </button>
          <img src={selectedImg} alt="Enlarged" className="max-w-full max-h-[90vh] rounded-lg border border-white/20 shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}