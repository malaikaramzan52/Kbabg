import React from 'react';
import { Flame, Utensils, Award, CheckCircle2, HeartHandshake, ShieldCheck, Phone, ArrowRight, Calendar } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  // Elements row matching the attached reference image with Karahi added & enlarged icons
  const menuElements = [
    {
      name: 'KEBABS',
      icon: (
        <svg className="w-13 h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 stroke-[#111111] fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 48 48">
          {/* Skewer rod */}
          <line x1="7" y1="41" x2="41" y2="7" strokeWidth="3.2" />
          {/* Skewer tip & handle */}
          <path d="M5 43l3-3M40 8l3-3" strokeWidth="3.4" />
          {/* Chunky Kebab 1 */}
          <rect x="11" y="27" width="11" height="8" rx="3" transform="rotate(-45 16.5 31)" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <line x1="14" y1="28" x2="19" y2="33" strokeWidth="2.6" />
          {/* Chunky Kebab 2 */}
          <rect x="21" y="17" width="11" height="8" rx="3" transform="rotate(-45 26.5 21)" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <line x1="24" y1="18" x2="29" y2="23" strokeWidth="2.6" />
          {/* Chunky Kebab 3 */}
          <rect x="30" y="8" width="9" height="7" rx="2.5" transform="rotate(-45 34.5 11.5)" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
        </svg>
      ),
    },
    {
      name: 'CHICKEN',
      icon: (
        <svg className="w-13 h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 stroke-[#111111] fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 48 48">
          {/* Crispy Drumsticks */}
          <path d="M17 20c-3-4.5-1-8.5 2.5-10.5s8 .5 8.5 4.5c.5 4-3.5 7.5-7 8" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <path d="M16 20l-4 4.5c-1 1-2.5.5-3-.5s0-2.5 1-3" strokeWidth="2.8" />
          <path d="M31 18c3-3.5 7-3 8.5-1s1.5 7-1 9-6.5 1-7.5-1.5" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <path d="M37 24l4 4c1 1 .5 2.5-.5 3s-2.5 0-3-1" strokeWidth="2.8" />
          {/* Chicken Bucket */}
          <path d="M9 22h30l-3.5 20H12.5L9 22z" fill="#111111" fillOpacity="0.1" strokeWidth="2.8" />
          <line x1="9" y1="28" x2="39" y2="28" strokeWidth="2.5" strokeDasharray="3 3" />
        </svg>
      ),
    },
    {
      name: 'KARAHI',
      icon: (
        <svg className="w-13 h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 stroke-[#111111] fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 48 48">
          {/* Deep Karahi Wok Body */}
          <path d="M8 22c0 10.5 7.163 19 16 19s16-8.5 16-19H8z" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <line x1="5" y1="22" x2="43" y2="22" strokeWidth="3.2" />
          {/* Left Ring Handle */}
          <path d="M6 22c-3.5 0-4.5-3.5-4.5-5.5s2.5-5.5 5.5-5.5" strokeWidth="2.8" />
          {/* Right Ring Handle */}
          <path d="M42 22c3.5 0 4.5-3.5 4.5-5.5s-2.5-5.5-5.5-5.5" strokeWidth="2.8" />
          {/* Sizzling Steam Flames/Aroma */}
          <path d="M17 15c0-4.5 3.5-4.5 3.5-9" strokeWidth="2.8" />
          <path d="M24 14c0-4.5 3.5-4.5 3.5-9" strokeWidth="2.8" />
          <path d="M31 15c0-4.5 3.5-4.5 3.5-9" strokeWidth="2.8" />
        </svg>
      ),
    },
    {
      name: 'SAJJI',
      icon: (
        <svg className="w-13 h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 stroke-[#111111] fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 48 48">
          {/* Whole Roast Chicken Body */}
          <ellipse cx="24" cy="25" rx="14" ry="10" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <path d="M15 21c-4.5-4-2-9.5 3-8.5s7.5 4.5 5.5 8.5" strokeWidth="2.8" />
          <path d="M33 21c4.5-4 2-9.5-3-8.5s-7.5 4.5-5.5 8.5" strokeWidth="2.8" />
          {/* Vertical Skewer Spit */}
          <line x1="24" y1="5" x2="24" y2="43" strokeWidth="3.2" />
          {/* Fire Embers Base */}
          <line x1="11" y1="41" x2="37" y2="41" strokeWidth="3" />
          <line x1="15" y1="45" x2="33" y2="45" strokeWidth="2.6" />
        </svg>
      ),
    },
    {
      name: 'TANDOOR',
      icon: (
        <svg className="w-13 h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 stroke-[#111111] fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 48 48">
          {/* Clay Tandoor Mouth */}
          <ellipse cx="24" cy="13" rx="11" ry="4.5" strokeWidth="3.2" />
          {/* Curved Earthen Pot Walls */}
          <path d="M13 13c-4.5 7.5-4.5 18.5 0 26h22c4.5-7.5 4.5-18.5 0-26" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <line x1="11" y1="39" x2="37" y2="39" strokeWidth="3" />
          {/* Charcoal Flame Inside */}
          <path d="M24 20c-2.5 2.5-3.5 5-3.5 7.5s2.5 5 3.5 5 3.5-2.5 3.5-5-1-4-3.5-7.5z" fill="#111111" strokeWidth="2.4" />
        </svg>
      ),
    },
    {
      name: 'SALADS',
      icon: (
        <svg className="w-13 h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 stroke-[#111111] fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 48 48">
          {/* Salad Bowl */}
          <path d="M8 22c0 9.5 7.163 17 16 17s16-7.5 16-17H8z" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <line x1="6" y1="22" x2="42" y2="22" strokeWidth="3.2" />
          {/* Fresh Crisp Leaves */}
          <path d="M14 22c-2.5-5.5 1-11 6.5-10s6.5 5.5 4.5 10" strokeWidth="2.8" />
          <path d="M22 22c1-6.5 6.5-10 11-7s3 6.5 0 10" strokeWidth="2.8" />
          {/* Salad Fork */}
          <line x1="33" y1="7" x2="27" y2="22" strokeWidth="2.8" />
          <path d="M30 6l4 3.5M34 5l3 2.5" strokeWidth="2.6" />
        </svg>
      ),
    },
    {
      name: 'DRINKS',
      icon: (
        <svg className="w-13 h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 stroke-[#111111] fill-none stroke-[2.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 48 48">
          {/* Cup Body */}
          <path d="M12 16h24l-3.5 25H15.5L12 16z" fill="#111111" fillOpacity="0.2" strokeWidth="2.8" />
          <rect x="10" y="12" width="28" height="4.5" rx="2" strokeWidth="3" />
          {/* Straw */}
          <path d="M27 4l-4 9M27 4l4.5-1.5" strokeWidth="3.2" />
          {/* Refreshing Bubbles / Mint */}
          <circle cx="20" cy="25" r="3" strokeWidth="2.4" strokeDasharray="2 2" />
          <circle cx="27" cy="32" r="2.5" strokeWidth="2.4" strokeDasharray="2 2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#111111] text-[#FFFFFF]">
      
      {/* 1. Hero Section: Uses kbabg.webp as background image */}
      <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center overflow-hidden border-b border-neutral-800">
        
        {/* Background Image: about.png - Bright and Vibrant (No Dullness) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/about.png"
            alt="Kabab G Heritage Kitchen"
            className="w-full h-full object-cover object-center"
          />
          {/* Balanced Dark Overlay so text is clearly legible while about.png remains visible */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/35 to-black/55" />
        </div>

        {/* Hero Content & Breadcrumb */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.25em] uppercase text-[#F5B800] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              25 YEARS OF EXCELLENCE
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h1 className="text-hero-heading text-[#FFFFFF] tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]">
            About Us
          </h1>

          <p className="font-poppins text-[16px] sm:text-[18px] text-white max-w-2xl mx-auto mt-3 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Preserving Pakistan’s rich charcoal barbecue heritage with heirloom recipes, prime meats, and heartfelt hospitality.
          </p>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 mt-5 text-[14px] font-poppins text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <button
              onClick={() => {
                if (setActivePage) setActivePage('Home');
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#F5B800] transition-colors focus:outline-none cursor-pointer font-medium"
            >
              Home
            </button>
            <span className="text-[#F5B800] font-bold">/</span>
            <span className="text-[#F5B800] font-semibold">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. Three Images on Left (setting.webp, Tandoor.webp, salad.webp) & Story Text on Right */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3 Images Collage (setting.webp, Tandoor.webp, salad.webp) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: setting-1.webp (Top full width across 2 cols) */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl group aspect-[16/9] bg-neutral-900">
                <img
                  src="/setting-1.webp"
                  alt="Kabab G Dining Setting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="font-poppins text-[12px] font-bold uppercase tracking-wider text-[#F5B800] bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#F5B800]/40">
                    Dining Ambience
                  </span>
                </div>
              </div>

              {/* Image 2: Tandoor.webp (Bottom Left) */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl group aspect-square bg-neutral-900">
                <img
                  src="/Tandoor.webp"
                  alt="Clay Tandoor Roghni Naan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-poppins text-[11px] font-bold uppercase tracking-wider text-white">
                    Live Clay Tandoor
                  </span>
                </div>
              </div>

              {/* Image 3: salad.webp (Bottom Right) */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl group aspect-square bg-neutral-900">
                <img
                  src="/salad.webp"
                  alt="Fresh Country Salads & Chutneys"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-poppins text-[11px] font-bold uppercase tracking-wider text-white">
                    Fresh Salads & Chutneys
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-6 space-y-6 text-left pt-6 lg:pt-0">
            
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#F5B800]"></span>
              <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800]">
                HERITAGE & CRAFTSMANSHIP
              </span>
            </div>

            <h2 className="text-section-heading font-playfair text-[#FFFFFF] leading-[1.18]">
              Crafting Pure Barbecue Flavours <br />
              <span className="text-[#F5B800]">With Patience & Fire</span>
            </h2>

            <p className="font-poppins text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed">
              Founded in 1999, Kabab G was born from an unyielding obsession with authentic slow-burning charcoal cooking. What started as a dedicated pitmaster grill has blossomed into Multan’s most celebrated destination for royal Pakistani cuisine.
            </p>

            <p className="font-poppins text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed">
              We never take shortcuts. Every seekh kebab is hand-minced with selected prime cuts, marinated with heirloom whole spices pounded fresh weekly, and flame-kissed over live acacia embers. From fiery wok-tossed desi ghee karahis to steaming clay tandoor naans, every plate honors our ancestral roots.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              {[
                '100% Certified Halal Prime Meats & Fresh Country Ingredients',
                'Hand-Crushed Secret Masalas Prepared Fresh Weekly',
                'Live Acacia Wood Mangal & Traditional Fiery Clay Tandoor',
                'Generous Royal Portions Tailored for Joyous Family Dining',
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F5B800] shrink-0" />
                  <span className="font-poppins text-[14px] sm:text-[15px] text-neutral-200">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 3. Attached Reference Section: "KABAB G... WHAT ELSE?" with elements including Karahi */}
      <section className="relative py-24 sm:py-28 bg-[#111111] text-[#FFFFFF] overflow-hidden border-y border-neutral-800">
        
        {/* Subtle Background Elements/Food Doodle Outlines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <circle cx="100" cy="100" r="60" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeDasharray="6 6" />
            <circle cx="700" cy="300" r="80" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeDasharray="8 8" />
            <path d="M50 350 Q 150 250 250 350" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            <path d="M650 80 Q 720 20 780 80" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Main Heading: First word in golden yellow (#F5B800 matching navbar "Get in Touch" button) */}
          <h2 className="font-oswald text-[38px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight uppercase leading-tight">
            <span className="text-[#F5B800]">KABAB G... </span>
            <span className="text-[#FFFFFF]">WHAT ELSE?</span>
          </h2>

          {/* Description Paragraph */}
          <p className="font-poppins text-[14px] sm:text-[16px] text-neutral-300 max-w-3xl mx-auto mt-4 leading-relaxed">
            Slow-cooked with pure patience, heirloom masalas, and the authentic smoke of burning acacia charcoal. From hand-skewered seekh kebabs and sizzling koyla karahis to fresh tandoori naans, discover the quintessential taste of Multan.
          </p>

          {/* Line-Art Category Elements Row with Yellow Background and Large Enhanced Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-7 lg:gap-8 mt-14 mb-16">
            {menuElements.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 text-center"
              >
                {/* Yellow Icon Container (#F5B800) with High Visibility & Large Proportions */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-3xl bg-[#F5B800] border-2 border-[#dfa600] shadow-[0_8px_25px_rgba(245,184,0,0.25)] group-hover:shadow-[0_15px_35px_rgba(245,184,0,0.45)] flex items-center justify-center text-[#111111] mb-3 group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Element Name */}
                <span className="font-oswald text-[16px] sm:text-[18px] md:text-[19px] font-bold text-[#FFFFFF] group-hover:text-[#F5B800] tracking-wider uppercase transition-colors duration-200">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Golden Yellow CTA Button matching #F5B800 */}
          <div>
            <button
              onClick={() => {
                if (setActivePage) setActivePage('Home');
                setTimeout(() => {
                  const menuEl = document.getElementById('menu');
                  if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center justify-center bg-[#F5B800] hover:bg-[#dfa600] text-[#111111] font-oswald text-[17px] sm:text-[18px] font-bold tracking-wider uppercase px-10 py-4 rounded-xl shadow-xl hover:shadow-[0_10px_25px_rgba(245,184,0,0.35)] transition-all duration-200 transform hover:scale-105 cursor-pointer"
            >
              EXPLORE FULL MENU
            </button>
          </div>

        </div>
      </section>

      {/* 4. First Attached Reference Section: Asymmetric 2-Column Discovery Section with Karahi & BBQ Images */}
      <section className="py-24 sm:py-28 bg-[#111111] text-[#FFFFFF] relative overflow-hidden border-b border-neutral-800">
        
        {/* Ambient Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F5B800]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading + Description + Bottom Image (krahi.webp) */}
            <div className="space-y-6">
              
              {/* Heading matching the attached format */}
              <div>
                <span className="font-poppins text-small-custom font-semibold tracking-[0.2em] uppercase text-[#F5B800] block mb-2">
                  AUTHENTIC MULTANI TASTE
                </span>
                <h2 className="font-oswald text-[36px] sm:text-[44px] lg:text-[50px] font-bold text-[#FFFFFF] tracking-tight uppercase leading-[1.12]">
                  DISCOVER THE AUTHENTIC TASTE <br />
                  <span className="text-[#F5B800]">OF KOYLA KARAHI & BBQ</span>
                </h2>
              </div>

              {/* Description */}
              <p className="font-poppins text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed">
                Slow-simmered in pure desi ghee with crushed coriander, freshly roasted cumin, country tomatoes, and hand-selected prime cuts. Infused with live acacia dum for an unmistakable smoky depth that leaves an unforgettable impression.
              </p>

              {/* Image 1: Karahi Image from public folder (krahi.webp) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-neutral-800 group aspect-[4/3] bg-neutral-900 mt-6">
                <img
                  src="/krahi.webp"
                  alt="Desi Koyla Karahi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="font-poppins text-[13px] font-bold uppercase tracking-wider text-[#F5B800]">
                    Desi Ghee Koyla Karahi
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Top Image (bbq.webp) + Subtitle + CTA Button */}
            <div className="space-y-6">
              
              {/* Image 2: BBQ Image from public folder (bbq.webp) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-neutral-800 group aspect-[4/3] bg-neutral-900">
                <img
                  src="/bbq.webp"
                  alt="Live Charcoal BBQ"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="font-poppins text-[13px] font-bold uppercase tracking-wider text-[#F5B800]">
                    Live Mangal Charcoal BBQ
                  </span>
                </div>
              </div>

              {/* Paragraph below Image */}
              <p className="font-poppins text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed pt-2">
                Every seekh kebab and sizzling chop is grilled fresh over white acacia embers, locking in every drop of moisture and essential aroma. Prepared with heirloom family recipes guarded for over 25 years.
              </p>

              {/* CTA Button as requested */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    if (setActivePage) setActivePage('Contact');
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#dfa600] text-[#111111] font-poppins font-bold text-[15px] py-4 px-8 rounded-xl shadow-xl hover:shadow-[#F5B800]/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Book Your Table Now</span>
                  <Utensils className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Dedicated High-Impact Call-to-Action (CTA) Banner */}
      <section className="relative py-20 sm:py-24 lg:py-28 bg-[#0b0b0b] text-[#FFFFFF] overflow-hidden border-t border-neutral-800">
        
        {/* Parallax / Ambient BBQ Background with Dark Warm Glow */}
        <div className="absolute inset-0 z-0">
          <img
            src="/her-2.webp"
            alt="Kabab G Dining Ambience"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/90 to-[#0b0b0b]" />
          <div className="absolute inset-0 bg-[#F5B800]/5 mix-blend-overlay" />
        </div>

        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F5B800]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.25em] uppercase text-[#F5B800]">
              JOIN US FOR A ROYAL FEAST
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          {/* Heading */}
          <h2 className="font-playfair text-[34px] sm:text-[44px] lg:text-[54px] font-bold text-[#FFFFFF] leading-[1.15] max-w-3xl mx-auto">
            Ready to Taste 25 Years of <br />
            <span className="text-[#F5B800]">Authentic Charcoal Perfection?</span>
          </h2>

          {/* Subheading */}
          <p className="font-poppins text-[15px] sm:text-[17px] text-neutral-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Treat your family and loved ones to Multan’s most celebrated charcoal skewers, sizzling hand-ground seekh kebabs, and authentic desi ghee karahis.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-9">
            {/* Primary Action: Book Table */}
            <button
              type="button"
              onClick={() => {
                if (setActivePage) setActivePage('Contact');
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="btn-custom inline-flex items-center gap-2.5 bg-[#F5B800] hover:bg-[#dfa600] text-[#111111] font-poppins font-bold text-[16px] px-8 py-4 rounded-full shadow-2xl hover:shadow-[#F5B800]/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#111111]" />
              <span>Reserve Your Table Now</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            {/* Secondary Action: Call Directly */}
            <a
              href="tel:+923030173057"
              className="btn-custom inline-flex items-center gap-2.5 bg-[#181818] hover:bg-[#222222] text-[#FFFFFF] border border-neutral-700 hover:border-[#F5B800] font-poppins font-semibold text-[16px] px-7 py-4 rounded-full shadow-xl transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#F5B800]" />
              <span>Call: +92 303 017 30 57</span>
            </a>
          </div>

          {/* Trust Perks Strip */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[13px] sm:text-[14px] text-neutral-400 font-poppins">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B800]"></span>
              100% Halal Prime Meat
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B800]"></span>
              Family Dining Halls
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B800]"></span>
              Live Acacia Charcoal Dum
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B800]"></span>
              Open Daily Until 2:00 AM
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
