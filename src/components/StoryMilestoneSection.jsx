import React, { useState, useEffect, useRef } from 'react';

// Animated Counter component that counts up when scrolled into view
function Counter({ target, duration = 1800, suffix = '' }) {
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
            // Ease-out quad for natural decelerating motion
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
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StoryMilestoneSection() {
  return (
    <section 
      id="our-story" 
      className="relative bg-[#0d0d0d] text-[#FFFFFF] py-20 lg:py-28 overflow-hidden"
    >
      {/* 1. Background Image with True Parallax Scrolling Effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: `url('/hero-2.jpg')` }}
      >
        {/* Dark Opacity & Gradient Overlays for High Text Contrast */}
        <div className="absolute inset-0 bg-[#0d0d0d]/88 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/92 to-[#0d0d0d]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Enlarged Main Image (kbabg.webp) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Increased Image Height & Width */}
              <div className="relative w-full h-[420px] sm:h-[520px] md:h-[580px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl border-2 border-neutral-800/80 group">
                <img
                  src="/about.png"
                  alt="Kabab G Restaurant Dining & Ambience"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              </div>

              {/* Overlapping Milestone Badge with Animated Counter */}
              <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:right-6 bg-[#FFF9E9] text-[#111111] p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-[#F5B800] text-center min-w-[150px] sm:min-w-[180px] transform hover:scale-105 transition-transform duration-200 z-10">
                <span className="font-poppins text-[54px] sm:text-[66px] font-black leading-none block text-[#111111] tracking-tight">
                  <Counter target={25} />
                </span>
                <span className="font-poppins text-[11px] sm:text-[12px] font-bold tracking-widest uppercase text-neutral-800 mt-1.5 block">
                  YEARS OF <br /> EXCELLENCE
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Heading Shifted Upwards + Large Numbers on Next Line */}
          <div className="lg:col-span-6 space-y-6 pt-2 lg:pt-0 -mt-2 sm:-mt-6 lg:-mt-10">
            
            {/* Tagline */}
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#F5B800]"></span>
                <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
                  OUR STORY
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-section-heading font-playfair text-[#FFFFFF] tracking-tight uppercase leading-[1.12]">
                CELEBRATING <br />
                <span className="text-[#F5B800]">
                  <span className="font-poppins font-black tracking-tight"><Counter target={25} /></span> <span className="font-playfair">YEARS</span>
                </span>
              </h2>
            </div>

            {/* Contextual Story Paragraphs */}
            <div className="space-y-4 text-body-custom text-neutral-300 leading-relaxed">
              <p>
                Kabab G was first established with a singular passion for the age-old art of charcoal smoking. We started with unyielding zeal and continue to uphold the highest standard of authentic Pakistani cuisine with unwavering dedication.
              </p>

              <p>
                From our roots in Punjab’s vibrant food streets to serving families nationwide, Kabab G remains steadfast in delivering smoky, melt-in-the-mouth kebabs, rich karahis, and clay-oven naans—crafted strictly with prime halal cuts and time-honoured spice secrets passed down through generations.
              </p>
            </div>

            {/* Horizontal Divider Line */}
            <div className="border-t border-neutral-800 pt-6" />

            {/* Stats Animated Counters with Poppins Black */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <span className="font-poppins text-[46px] sm:text-[56px] lg:text-[64px] font-black text-[#FFFFFF] block leading-none tracking-tight">
                  <Counter target={25} suffix="+" />
                </span>
                <span className="font-poppins text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#F5B800] uppercase mt-2.5 block">
                  YEARS SERVING
                </span>
              </div>

              <div>
                <span className="font-poppins text-[46px] sm:text-[56px] lg:text-[64px] font-black text-[#FFFFFF] block leading-none tracking-tight">
                  <Counter target={12} suffix="" />
                </span>
                <span className="font-poppins text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#F5B800] uppercase mt-2.5 block">
                  LOCATIONS
                </span>
              </div>

              <div>
                <span className="font-poppins text-[46px] sm:text-[56px] lg:text-[64px] font-black text-[#FFFFFF] block leading-none tracking-tight">
                  <Counter target={150} suffix="K+" />
                </span>
                <span className="font-poppins text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#F5B800] uppercase mt-2.5 block">
                  HAPPY FOODIES
                </span>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <a
                href="#menu"
                className="btn-custom text-[15px] font-semibold bg-[#FFF9E9] hover:bg-[#F5B800] text-[#111111] px-8 py-3.5 rounded-lg shadow-lg hover:shadow-[#F5B800]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider inline-block"
              >
                LEARN MORE
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
