import React, { useState, useEffect, useRef } from 'react';

// Price Animated Counter that counts up to the target amount when in view
function PriceCounter({ target = 1650, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease-out quad
            const easeOut = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef} className="tabular-nums">{count.toLocaleString()}</span>;
}

export default function PromoDealBanner() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger 360-degree rotation animation when scrolled into view or refreshed
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Reset so scrolling back triggers the 360° rotation again
          setIsInView(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Trigger shortly after mount if already in viewport on page refresh
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsInView(true);
        }
      }
    }, 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#0b0b0b] text-[#FFFFFF] py-20 sm:py-24 lg:py-32 min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
    >
      {/* 1. Subtle Background Food Doodle Art (Matching attached reference style) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          <circle cx="150" cy="120" r="50" strokeDasharray="6 6" />
          <path d="M100 480 Q 200 380 300 480" />
          <circle cx="850" cy="160" r="70" strokeDasharray="8 8" />
          <path d="M780 160 Q 850 90 920 160" />
          <path d="M1050 420 Q 1120 350 1180 440" />
          <path d="M600 80 Q 640 40 680 80" />
          <path d="M950 320 C 970 300, 1010 310, 1000 340 C 990 370, 930 350, 950 320 Z" />
          <path d="M220 220 C 240 200, 280 210, 270 240 C 260 270, 200 250, 220 220 Z" />
        </svg>
      </div>

      {/* Ambient Warm Golden Glow behind Karahi on the Right */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#F5B800]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* 2. Left Column: Text & Pricing Details */}
          <div className="lg:col-span-5 space-y-6 text-left pr-0 lg:pr-4 order-2 lg:order-1">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#F5B800]"></span>
              <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
                CHEF'S SIGNATURE SPECIALITY
              </span>
            </div>

            {/* Title: Playfair Display Serif */}
            <div>
              <h2 className="font-playfair text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-[#FFFFFF] leading-[1.12] tracking-tight">
                Special Mutton <br />
                <span className="text-[#F5B800]">Koyla Karahi</span>
              </h2>
            </div>

            {/* Description: Italicized recipe details */}
            <p className="font-poppins italic text-[15px] sm:text-[17px] text-neutral-300 max-w-lg leading-relaxed">
              Tender prime mutton simmered in pure desi ghee, fresh ginger juliennes, crushed tomatoes, green chillies, and roasted ground spices over live coals.
            </p>

            {/* Pricing Options: Clean Boxed Sizes with Enlarged Numbers */}
            <div className="pt-4 space-y-5 max-w-md">
              
              {/* Size 1: Half KG */}
              <div className="flex items-center gap-5 sm:gap-7">
                <div className="border border-neutral-600 bg-neutral-900/60 backdrop-blur-sm px-4 sm:px-5 py-2.5 rounded-sm min-w-[130px] sm:min-w-[140px] text-center">
                  <span className="font-poppins text-[12px] sm:text-[13px] font-semibold text-neutral-300 tracking-[0.2em] uppercase block">
                    HALF KG
                  </span>
                </div>
                {/* Enlarged Numbers Font Size */}
                <div className="font-stat text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white tracking-tight flex items-baseline gap-1.5 leading-none">
                  <span className="text-[#F5B800] text-[18px] sm:text-[22px] font-poppins font-semibold">Rs.</span>
                  <PriceCounter target={1650} duration={1400} />
                </div>
              </div>

              {/* Size 2: Full KG */}
              <div className="flex items-center gap-5 sm:gap-7">
                <div className="border border-neutral-600 bg-neutral-900/60 backdrop-blur-sm px-4 sm:px-5 py-2.5 rounded-sm min-w-[130px] sm:min-w-[140px] text-center">
                  <span className="font-poppins text-[12px] sm:text-[13px] font-semibold text-neutral-300 tracking-[0.2em] uppercase block">
                    FULL KG
                  </span>
                </div>
                {/* Enlarged Numbers Font Size */}
                <div className="font-stat text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white tracking-tight flex items-baseline gap-1.5 leading-none">
                  <span className="text-[#F5B800] text-[18px] sm:text-[22px] font-poppins font-semibold">Rs.</span>
                  <PriceCounter target={3150} duration={1700} />
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="pt-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 font-poppins text-[14px] sm:text-[15px] font-semibold text-[#111111] bg-[#F5B800] hover:bg-[#dfa600] px-8 py-3.5 rounded-full shadow-xl hover:shadow-[#F5B800]/40 transition-all duration-200 transform hover:-translate-y-0.5 uppercase tracking-wider cursor-pointer"
              >
                Order This Karahi
              </a>
            </div>

          </div>

          {/* 3. Right Column: Krahi-1.png Image on the Right */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[360px] sm:w-[480px] md:w-[580px] lg:w-[680px] xl:w-[760px] translate-x-3 sm:translate-x-5 lg:translate-x-8 xl:translate-x-10">
              
              {/* Continuous Gentle Floating Wrapper */}
              <div className="animate-float-karahi">
                {/* Slower 720-Degree Rotation on Scroll & Refresh */}
                <div 
                  style={{
                    transform: isInView 
                      ? 'rotate(0deg) scale(1)' 
                      : 'rotate(-720deg) scale(0.92)',
                    opacity: isInView ? 1 : 0,
                    transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out',
                  }}
                >
                  <img
                    src="/krahi-1.png"
                    alt="Kabab G Special Mutton Koyla Karahi"
                    className="w-full h-auto object-contain scale-105 sm:scale-110 lg:scale-115 drop-shadow-[0_35px_60px_rgba(0,0,0,0.95)] select-none"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
