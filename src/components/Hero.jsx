import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ setActivePage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/hero.png',
      tagline: 'WELCOME TO KABAB G',
      headingLine1: 'WHERE EVERY BITE',
      headingLine2: 'FEELS',
      headingHighlight: 'SPECIAL',
      subtitle: 'Seekh Kebabs · Desi Karahi · Balochi Sajji · Clay Tandoor · Royal Platters',
      btnText: 'Explore Our Menu',
      btnLink: '#menu',
    },
    {
      id: 2,
      image: '/hero-2.jpg',
      tagline: 'WOOD CHARCOAL PERFECTION',
      headingLine1: 'SIZZLING LIVE',
      headingLine2: 'FROM THE',
      headingHighlight: 'TANDOOR',
      subtitle: 'Tender Marinated Meats · Secret Heirloom Masalas · Live Acacia Embers',
      btnText: 'Discover Sizzlers',
      btnLink: '#menu',
    },
  ];

  // Auto move slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section 
      id="home" 
      className="relative bg-[#0d0d0d] text-[#FFFFFF] overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center"
    >
      {/* 1. Full-Width Background Slides with Reduced Opacity (Food clearly visible like sample) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, idx) => {
          const isActive = currentSlide === idx;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={`Kabab G Background ${idx + 1}`}
                className="w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out scale-100 hover:scale-105"
              />

              {/* Reduced opacity overlays so the delicious food is clearly visible */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0d0d0d]" />
            </div>
          );
        })}

        {/* Ambient Warm Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F5B800]/10 rounded-full blur-[140px] pointer-events-none z-10" />
      </div>

      {/* 2. Foreground Content: Centered Layout (Matching Reference Sample Image) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full text-center">
        
        {/* Top Tagline with Decorative Gold Lines: — WELCOME TO KABAB G — */}
        <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <span className="w-8 sm:w-16 h-[1.5px] bg-[#F5B800]"></span>
          <span className="font-poppins text-[12px] sm:text-[14px] font-bold tracking-[0.25em] uppercase text-[#F5B800] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {slides[currentSlide].tagline}
          </span>
          <span className="w-8 sm:w-16 h-[1.5px] bg-[#F5B800]"></span>
        </div>

        {/* Main Heading: Large Playfair Display in Pure White & Gold */}
        <h1 className="font-playfair text-[38px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] uppercase transition-all duration-700">
          {slides[currentSlide].headingLine1} <br />
          <span className="text-white">
            {slides[currentSlide].headingLine2}{' '}
          </span>
          <span className="text-[#F5B800]">
            {slides[currentSlide].headingHighlight}
          </span>
        </h1>

        {/* Subtitle Line with dot separators: Seekh Kebabs · Desi Karahi · ... */}
        <p className="font-poppins text-[15px] sm:text-[17px] md:text-[19px] text-neutral-100 max-w-2xl mx-auto tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mt-5 sm:mt-6 leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>

        {/* Centered Action Buttons */}
        <div className="pt-8 sm:pt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button */}
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              const menuEl = document.getElementById('menu');
              if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-custom text-[15px] font-semibold bg-[#F5B800] hover:bg-[#e0a700] text-[#111111] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-2xl hover:shadow-[#F5B800]/40 transform hover:-translate-y-0.5 active:translate-y-0 transition duration-200 group cursor-pointer uppercase tracking-wider flex items-center justify-center"
          >
            {slides[currentSlide].btnText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Secondary Button */}
          <button
            type="button"
            onClick={() => {
              if (setActivePage) setActivePage('Contact');
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
            className="btn-custom text-[15px] font-semibold bg-black/40 backdrop-blur-md hover:bg-black/70 text-[#FFFFFF] border-2 border-white/80 hover:border-[#F5B800] hover:text-[#F5B800] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition duration-200 shadow-xl cursor-pointer uppercase tracking-wider"
          >
            Visit Us
          </button>
        </div>

        {/* Bottom Slider Navigation Dots */}
        <div className="pt-10 sm:pt-12 flex items-center justify-center space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                currentSlide === idx
                  ? 'w-8 h-2.5 bg-[#F5B800]'
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
