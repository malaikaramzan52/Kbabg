import React, { useState } from 'react';
import { Maximize2, X, Flame } from 'lucide-react';

export default function BestsellersSection() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const bestsellers = [
    {
      id: 1,
      code: 'SPECIALITY #01',
      badge: 'TOP BESTSELLER',
      title: 'Desi Ghee Koyla Karahi',
      description: 'Slow-simmered in a heavy iron wok with country tomatoes, fresh ginger juliennes, green chillies, and finished with a live acacia charcoal dum.',
      image: '/krahi.webp',
    },
    {
      id: 2,
      code: 'SPECIALITY #02',
      badge: "CHEF'S PICK",
      title: 'Royal Charcoal Seekh Kebabs',
      description: 'Hand-minced prime meat infused with heirloom ground masalas, roasted cumin, and fresh mint, char-broiled over glowing embers on long skewers.',
      image: '/hero-1.webp',
    },
    {
      id: 3,
      code: 'SPECIALITY #03',
      badge: 'HERITAGE RECIPE',
      title: 'Authentic Balochi Sajji',
      description: 'Tender whole chicken marinated in natural rock salt and crushed secret spices, slow-roasted around burning hardwood coals to crispy golden skin.',
      image: '/sajji-1.jpg',
    },
  ];

  return (
    <section className="bg-[#111111] text-[#FFFFFF] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Consistent Playfair & Gold Accent Style */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
              TOP CULINARY PICKS
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h2 className="text-section-heading font-playfair text-[#FFFFFF] uppercase tracking-tight leading-tight">
            OUR <span className="text-[#F5B800]">BESTSELLERS</span>
          </h2>

          <p className="font-poppins text-[15px] sm:text-[16px] text-neutral-300 mt-3 leading-relaxed">
            Every dish perfected over fire and live embers, cherished by generations of Pakistani food lovers.
          </p>
        </div>

        {/* 3 Bestseller Cards Grid: All images on TOP, stylish text below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {bestsellers.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col bg-[#161616]/70 rounded-2xl border border-neutral-800/80 hover:border-[#F5B800]/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#F5B800]/10 hover:-translate-y-1"
            >
              
              {/* 1. Image on TOP (Across all cards) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Subtle dark bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                {/* Floating Top Left Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#111111]/85 backdrop-blur-md border border-[#F5B800]/40 text-[#F5B800] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    <Flame className="w-3 h-3 fill-[#F5B800]" />
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Right Expand / Zoom Icon */}
                <button
                  type="button"
                  onClick={() => setLightboxImage(item)}
                  aria-label={`Expand image of ${item.title}`}
                  className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 hover:bg-[#F5B800] hover:text-[#111111] text-white border border-white/20 hover:border-[#F5B800] backdrop-blur-md flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer focus:outline-none z-10"
                  title="Click to view full photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* 2. Stylish Text Area Below the Image */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  {/* Category / Code Sub-tag */}
                  <span className="text-[11px] font-poppins font-semibold tracking-[0.22em] text-[#F5B800] uppercase block">
                    {item.code}
                  </span>

                  {/* Title */}
                  <h3 className="font-playfair text-[21px] sm:text-[23px] font-bold text-[#FFFFFF] group-hover:text-[#F5B800] transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-[13.5px] sm:text-[14px] text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer transition-all duration-300 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[85vh] flex items-center justify-center cursor-default">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 z-10 text-white hover:text-[#F5B800] p-1.5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Pure image floating in center */}
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-auto max-w-full max-h-[80vh] object-contain shadow-2xl rounded-2xl border border-neutral-700"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </section>
  );
}
