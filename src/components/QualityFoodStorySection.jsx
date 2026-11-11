import React from 'react';

export default function QualityFoodStorySection({ setActivePage }) {
  const handleLearnMore = () => {
    if (setActivePage) {
      setActivePage('About us');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      const el = document.getElementById('our-story');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#0c0c0c] text-[#FFFFFF] py-20 sm:py-24 lg:py-28 overflow-hidden">
      
      {/* 1. Subtle Food Doodle Art Background (Matching Attached Reference Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          {/* Fish / Charcoal Grill Doodles */}
          <path d="M120 180 C 180 120, 260 120, 320 180 C 260 240, 180 240, 120 180 Z" />
          <path d="M320 180 L 360 150 L 360 210 Z" />
          <circle cx="160" cy="175" r="4" fill="#FFFFFF" />

          {/* Citrus / Lemon Wedge */}
          <path d="M1020 120 A 70 70 0 0 1 1100 210 L 1020 210 Z" />
          <path d="M1030 135 A 55 55 0 0 1 1085 200 L 1030 200 Z" strokeDasharray="3 3" />

          {/* Cooking Pot & Flame */}
          <ellipse cx="140" cy="650" rx="60" ry="22" />
          <path d="M80 650 C 80 710, 200 710, 200 650" />
          <path d="M120 625 Q 140 600 160 625" />

          {/* Skewers & Circles */}
          <circle cx="950" cy="680" r="50" strokeDasharray="5 5" />
          <path d="M900 680 L 1000 680" />
          <path d="M950 630 L 950 730" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Tagline with Gold Line (Matching reference: NUTRITION AND TASTE —) */}
            <div className="inline-flex items-center gap-3">
              <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
                HERITAGE & PURITY
              </span>
              <span className="w-10 sm:w-14 h-[1.5px] bg-[#F5B800]"></span>
            </div>

            {/* Main Heading (Matching reference layout: QUALITY & BALANCED FOOD) */}
            <h2 className="font-playfair text-[38px] sm:text-[46px] lg:text-[54px] font-bold text-[#FFFFFF] tracking-tight leading-[1.12] uppercase">
              QUALITY & <br />
              <span className="text-[#F5B800]">AUTHENTIC TASTE</span>
            </h2>

            {/* Description Paragraph (Matching reference tone & phrasing) */}
            <p className="font-poppins text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed max-w-lg">
              We serve food, harmony, and togetherness. Crafting slow-marinated charcoal delicacies, pure desi ghee gravies, and providing a memorable family dining experience since 1999.
            </p>

            {/* Action Button (Matching reference: LEARN MORE in orange/gold block) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleLearnMore}
                className="btn-custom text-[13px] sm:text-[14px] font-bold text-[#111111] bg-[#F5B800] hover:bg-[#dfa600] px-8 py-3.5 rounded-md shadow-lg hover:shadow-[#F5B800]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase tracking-wider inline-flex items-center justify-center"
              >
                LEARN MORE
              </button>
            </div>

          </div>

          {/* ================= RIGHT DUAL OVERLAPPING IMAGES COLUMN ================= */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[600px] pt-4 pb-8 sm:pb-12">
              
              {/* Back / Top Image: Authentic Charcoal BBQ (Tall & Generous) */}
              <div className="w-[70%] sm:w-[66%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-10 group bg-neutral-900">
                <img
                  src="/bbq.webp"
                  alt="Kabab G Authentic Charcoal BBQ"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Front / Bottom Image: Desi Ghee Handi / Karahi (Wide & Overlapping) */}
              <div className="w-[78%] sm:w-[74%] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border-4 border-[#0c0c0c] -mt-28 sm:-mt-36 ml-auto relative z-20 group bg-neutral-900">
                <img
                  src="/Desi krahi.webp"
                  alt="Kabab G Handi and Karahi"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Ambient Glow behind images */}
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#F5B800]/10 rounded-full blur-[110px] pointer-events-none -z-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

