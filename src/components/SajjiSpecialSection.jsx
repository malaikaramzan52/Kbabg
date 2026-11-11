import React, { useState, useEffect, useRef } from 'react';

// Price Animated Counter that counts up to the target amount when in view
function PriceCounter({ target = 850, duration = 1500 }) {
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

export default function SajjiSpecialSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger 720-degree rotation animation when scrolled into view or refreshed
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Reset so scrolling back triggers the 720° rotation again
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
      className="relative bg-[#0d0d0d] text-[#FFFFFF] py-20 sm:py-24 lg:py-32 min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
    >
      {/* 1. Subtle Background Food Doodle Art */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          <circle cx="200" cy="180" r="60" strokeDasharray="6 6" />
          <path d="M150 420 Q 250 320 350 420" />
          <circle cx="950" cy="200" r="65" strokeDasharray="8 8" />
          <path d="M850 120 Q 920 60 990 120" />
          <path d="M1100 380 Q 1150 320 1200 400" />
          <path d="M550 100 Q 590 60 630 100" />
          <path d="M880 340 C 900 320, 940 330, 930 360 C 920 390, 860 370, 880 340 Z" />
          <path d="M280 260 C 300 240, 340 250, 330 280 C 320 310, 260 290, 280 260 Z" />
        </svg>
      </div>

      {/* Ambient Warm Golden Glow behind Sajji on the Left */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#F5B800]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* 2. Left Column: Sajji Image with 720° Rotation & Continuous Floating */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-start">
            <div className="relative w-[360px] sm:w-[480px] md:w-[580px] lg:w-[680px] xl:w-[760px] -translate-x-3 sm:-translate-x-5 lg:-translate-x-8 xl:-translate-x-10">
              
              {/* Continuous Gentle Floating Wrapper */}
              <div className="animate-float-karahi">
                {/* 720-Degree Rotation on Scroll & Refresh */}
                <div 
                  style={{
                    transform: isInView 
                      ? 'rotate(0deg) scale(1)' 
                      : 'rotate(720deg) scale(0.92)',
                    opacity: isInView ? 1 : 0,
                    transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out',
                  }}
                >
                  <img
                    src="/Sajji-1.png"
                    alt="Kabab G Special Balochi Charcoal Sajji"
                    className="w-full h-auto object-contain scale-105 sm:scale-110 lg:scale-115 drop-shadow-[0_35px_60px_rgba(0,0,0,0.95)] select-none"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* 3. Right Column: Text & Pricing Details */}
          <div className="lg:col-span-5 space-y-6 text-left pl-0 lg:pl-4">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#F5B800]"></span>
              <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
                TRADITIONAL BALOCHI HERITAGE
              </span>
            </div>

            {/* Title: Playfair Display Serif */}
            <div>
              <h2 className="font-playfair text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-[#FFFFFF] leading-[1.12] tracking-tight">
                Special Balochi <br />
                <span className="text-[#F5B800]">Charcoal Sajji</span>
              </h2>
            </div>

            {/* Description: Italicized recipe details */}
            <p className="font-poppins italic text-[15px] sm:text-[17px] text-neutral-300 max-w-lg leading-relaxed">
              Whole tender chicken marinated with mountain rock salt and freshly crushed dry coriander, skewered on live spits, and slow-roasted patiently around glowing acacia embers.
            </p>

            {/* Pricing Options: Clean Boxed Sizes with Enlarged Numbers */}
            <div className="pt-4 space-y-5 max-w-md">
              
              {/* Size 1: Half Sajji */}
              <div className="flex items-center gap-5 sm:gap-7">
                <div className="border border-neutral-600 bg-neutral-900/60 backdrop-blur-sm px-4 sm:px-5 py-2.5 rounded-sm min-w-[130px] sm:min-w-[140px] text-center">
                  <span className="font-poppins text-[12px] sm:text-[13px] font-semibold text-neutral-300 tracking-[0.2em] uppercase block">
                    HALF SAJJI
                  </span>
                </div>
                {/* Enlarged Numbers Font Size */}
                <div className="font-stat text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white tracking-tight flex items-baseline gap-1.5 leading-none">
                  <span className="text-[#F5B800] text-[18px] sm:text-[22px] font-poppins font-semibold">Rs.</span>
                  <PriceCounter target={850} duration={1400} />
                </div>
              </div>

              {/* Size 2: Full Sajji */}
              <div className="flex items-center gap-5 sm:gap-7">
                <div className="border border-neutral-600 bg-neutral-900/60 backdrop-blur-sm px-4 sm:px-5 py-2.5 rounded-sm min-w-[130px] sm:min-w-[140px] text-center">
                  <span className="font-poppins text-[12px] sm:text-[13px] font-semibold text-neutral-300 tracking-[0.2em] uppercase block">
                    FULL SAJJI
                  </span>
                </div>
                {/* Enlarged Numbers Font Size */}
                <div className="font-stat text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white tracking-tight flex items-baseline gap-1.5 leading-none">
                  <span className="text-[#F5B800] text-[18px] sm:text-[22px] font-poppins font-semibold">Rs.</span>
                  <PriceCounter target={1650} duration={1700} />
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="pt-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 font-poppins text-[14px] sm:text-[15px] font-semibold text-[#111111] bg-[#F5B800] hover:bg-[#dfa600] px-8 py-3.5 rounded-full shadow-xl hover:shadow-[#F5B800]/40 transition-all duration-200 transform hover:-translate-y-0.5 uppercase tracking-wider cursor-pointer"
              >
                Order This Sajji
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

