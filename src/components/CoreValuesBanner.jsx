import React from 'react';
import { Utensils, ShieldCheck, Bike, Flame, Sparkles } from 'lucide-react';

export default function CoreValuesBanner() {
  const values = [
    {
      icon: (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto text-white group-hover:scale-110 group-hover:border-white transition-all duration-300">
          <Utensils className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.75]" />
        </div>
      ),
      title: 'ORIGINAL RECIPES',
      desc: 'Centuries-old Khyber & Lahori spice secrets perfected by master ustads, infused with authentic slow-marinated heritage.',
    },
    {
      icon: (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto text-white group-hover:scale-110 group-hover:border-white transition-all duration-300">
          <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.75]" />
        </div>
      ),
      title: '100% QUALITY FOODS',
      desc: 'Hand-selected grain-fed chicken, prime mutton cuts, and pure desi ghee prepared fresh daily with zero compromise.',
    },
    {
      icon: (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto text-white group-hover:scale-110 group-hover:border-white transition-all duration-300">
          <Bike className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.75]" />
        </div>
      ),
      title: 'FASTEST DELIVERY',
      desc: 'Piping hot and packed in temperature-sealed containers straight from our live charcoal pit directly to your doorstep.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Image: her-2.webp */}
      <div className="absolute inset-0 z-0">
        <img
          src="/her-2.webp"
          alt="Kabab G Kitchen Ambience"
          className="w-full h-full object-cover object-center"
        />
        {/* Muted / Dull Golden Amber Opacity Overlay */}
        <div className="absolute inset-0 bg-[#111111]/30" />
        <div className="absolute inset-0 bg-[#A67807]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#946A04]/88 via-[#AC7D08]/82 to-[#946A04]/88" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center">
          {values.map((item, idx) => (
            <div key={idx} className="group space-y-4 px-4 sm:px-6">
              {/* White Icon */}
              <div className="mb-5 flex justify-center">
                {item.icon}
              </div>

              {/* Title (White, Uppercase, Bold) */}
              <h3 className="font-poppins text-[20px] sm:text-[22px] font-bold text-[#FFFFFF] tracking-wider uppercase drop-shadow-sm">
                {item.title}
              </h3>

              {/* Description (White text according to context) */}
              <p className="font-poppins text-[15px] sm:text-[16px] text-[#FFFFFF]/95 leading-relaxed drop-shadow-sm font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
