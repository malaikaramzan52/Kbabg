import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'HAMZA TARIQ',
      comment: 'Hands down the most authentic charcoal seekh kebabs in the city. The meat melts effortlessly in your mouth, and that smoky aroma stays with you long after the meal.',
      rating: 5,
    },
    {
      id: 2,
      name: 'AYESHA SIDDIQUI',
      comment: 'We brought our entire family of 12 for dinner. The Royal Mix Platter and Desi Ghee Koyla Karahi blew everyone away. Exceptional service, authentic taste, and pristine cleanliness!',
      rating: 5,
    },
    {
      id: 3,
      name: 'BILAL KHAN',
      comment: 'The chicken malai boti here sets the gold standard. Creamy, juicy, without being overpowered by spices. Kabab G never compromises on meat quality.',
      rating: 5,
    },
  ];

  // Auto rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="relative bg-[#111111] text-[#FFFFFF] py-24 sm:py-28 lg:py-32 overflow-hidden flex items-center">
      
      {/* 1. Background Image (test.webp from public folder) - Clearly Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/test.webp"
          alt="Kabab G Dining Testimonials Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Balanced Dark Overlay: Image is visible with improved contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 2. Centered Content (matching attached image format) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Quote Mark Icon (no person image added as requested) */}
        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 rounded-full bg-[#F5B800]/20 border border-[#F5B800]/40 flex items-center justify-center text-[#F5B800]">
            <Quote className="w-6 h-6 fill-[#F5B800]" />
          </div>
        </div>

        {/* Testimonial Quote Text */}
        <div className="min-h-[120px] sm:min-h-[100px] flex items-center justify-center">
          <p className="font-poppins text-[18px] sm:text-[22px] lg:text-[25px] text-[#FFFFFF] leading-relaxed font-normal transition-opacity duration-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            "{reviews[currentSlide].comment}"
          </p>
        </div>

        {/* 5 Golden Stars */}
        <div className="flex items-center justify-center gap-1.5 pt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          {[...Array(reviews[currentSlide].rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#F5B800] text-[#F5B800]" />
          ))}
        </div>

        {/* Author Name */}
        <div className="pt-1">
          <span className="font-poppins text-[15px] sm:text-[17px] font-bold text-[#FFFFFF] tracking-[0.2em] uppercase block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            BY {reviews[currentSlide].name}
          </span>
        </div>

        {/* Slider Navigation Dots */}
        <div className="flex items-center justify-center gap-2.5 pt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Show review ${idx + 1}`}
              className={`rounded-full transition-all duration-300 focus:outline-none ${
                currentSlide === idx
                  ? 'w-7 h-2 bg-[#F5B800]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
