import React from 'react';
import { Users } from 'lucide-react';

export default function SpecialPlatter() {
  const platterItems = [
    {
      name: 'MUTTON SEEKH KEBABS',
      qty: '4 Skewers',
      desc: 'Hand-ground prime mutton blended with cracked hill spices and skewered over live embers.',
    },
    {
      name: 'CHICKEN MALAI BOTI',
      qty: '6 Chunks',
      desc: 'Melt-in-mouth boneless chicken cubes steeped overnight in clotted cream and white pepper.',
    },
    {
      name: 'CHICKEN RESHMI KEBABS',
      qty: '4 Skewers',
      desc: 'Silky minced chicken skewers infused with fresh green coriander, cream, and gentle seasonings.',
    },
    {
      name: 'CHAR-GRILLED LAMB CHOPS',
      qty: '4 Pieces',
      desc: 'Succulent prime lamb chops marinated in heirloom spices and char-broiled on open charcoal.',
    },
  ];

  return (
    <section className="relative bg-[#0d0d0d] text-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      
      {/* 1. Subtle Food Doodle Art Background (Matching Attached Reference Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          {/* Fish / Culinary Doodles */}
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

          {/* Skewers & Embers */}
          <circle cx="950" cy="680" r="50" strokeDasharray="5 5" />
          <path d="M900 680 L 1000 680" />
          <path d="M950 630 L 950 730" />
        </svg>
      </div>

      {/* Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: BIG CIRCULAR PLATTER IMAGE ================= */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] aspect-square rounded-full p-2 bg-gradient-to-tr from-[#F5B800]/30 via-white/5 to-[#F5B800]/20 shadow-[0_20px_60px_rgba(0,0,0,0.9)] group">
              
              {/* Inner Circular Frame */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-neutral-700/80 group-hover:border-[#F5B800] transition-colors duration-500 bg-neutral-900">
                <img
                  src="/platters.webp"
                  alt="The Grand Kabab G Royal Sizzler Platter"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: PLATTER ITEMS & DETAILS ================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#F5B800]"></span>
              <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
                CHEF'S SIGNATURE FEAST
              </span>
              <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            </div>

            {/* Heading */}
            <h2 className="text-section-heading font-playfair text-[#FFFFFF] leading-[1.15]">
              The Grand Kabab G <br />
              <span className="text-[#F5B800]">Royal Sizzler Platter</span>
            </h2>

            {/* Description */}
            <p className="font-poppins text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed max-w-xl">
              A grand assortment of our most celebrated charcoal barbecue skewers, accompanied by tandoori breads and special chutneys on a sizzling iron bed.
            </p>

            {/* Category Subhead with Orange Underline (Matching attached reference style) */}
            <div className="pt-2">
              <div className="inline-block">
                <h3 className="font-poppins font-bold text-[18px] sm:text-[20px] tracking-wider text-white uppercase">
                  PLATTER SPECIALITIES
                </h3>
                <div className="w-12 h-[2.5px] bg-[#F5B800] mt-2 rounded-full" />
              </div>
            </div>

            {/* 4 Platter Items with Dotted Leader Lines */}
            <div className="space-y-5 pt-1 max-w-xl">
              {platterItems.map((item) => (
                <div key={item.name} className="group">
                  <div className="flex items-baseline justify-between gap-2">
                    {/* Item Name */}
                    <span className="font-poppins font-bold text-[14px] sm:text-[15px] text-white tracking-wide group-hover:text-[#F5B800] transition-colors">
                      {item.name}
                    </span>

                    {/* Dotted Leader Line */}
                    <div className="flex-1 border-b border-dotted border-neutral-600 mx-2 mb-1" />

                    {/* Quantity */}
                    <span className="font-poppins font-bold text-[#F5B800] text-[14px] sm:text-[15px] shrink-0 whitespace-nowrap">
                      {item.qty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-poppins text-[12px] sm:text-[13px] text-neutral-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Serves Badge */}
            <div className="pt-4 border-t border-neutral-800/80 flex items-center">
              <span className="inline-flex items-center gap-2 font-poppins text-[12px] sm:text-[13px] font-semibold text-[#111111] bg-[#F5B800] px-4 py-1.5 rounded-full uppercase tracking-wider shadow">
                <Users className="w-3.5 h-3.5" />
                Serves 4 - 5 Persons
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
