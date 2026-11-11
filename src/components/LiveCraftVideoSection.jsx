import React from 'react';
import { Flame, Utensils } from 'lucide-react';

export default function LiveCraftVideoSection() {
  return (
    <section className="relative bg-[#0b0b0b] text-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#F5B800]"></span>
              <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
                LIVE CULINARY EXPERIENCE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-section-heading font-playfair text-[#FFFFFF] leading-[1.15]">
              The Passion of <br />
              <span className="text-[#F5B800]">Live Fire & Smoke</span>
            </h2>

            {/* Short Paragraph */}
            <p className="font-poppins text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed">
              Witness the authentic theatrical craft of traditional Pakistani cuisine. From glowing hardwood embers to rich wok-simmered karahis in pure desi ghee, every dish is an heirloom masterwork of flavor and flame.
            </p>

            {/* 2 Bullet Points */}
            <div className="space-y-4 pt-2">
              
              {/* Point 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F5B800]/10 border border-[#F5B800]/30 flex items-center justify-center text-[#F5B800] shrink-0 mt-0.5">
                  <Flame className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-white text-[15px] sm:text-[16px]">
                    100% Live Hardwood Charcoal
                  </h4>
                  <p className="font-poppins text-[13px] text-neutral-400 mt-0.5 leading-relaxed">
                    Pure acacia embers infuse that authentic, unforgettable smoky aroma into every single bite.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F5B800]/10 border border-[#F5B800]/30 flex items-center justify-center text-[#F5B800] shrink-0 mt-0.5">
                  <Utensils className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-white text-[15px] sm:text-[16px]">
                    Time-Honored Heirloom Recipes
                  </h4>
                  <p className="font-poppins text-[13px] text-neutral-400 mt-0.5 leading-relaxed">
                    Perfected by our master ustads over 25 years using fresh country tomatoes and stone-ground spices.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT VIDEO COLUMN (No text on video) ================= */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/80 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] w-full">
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle glass frame border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

