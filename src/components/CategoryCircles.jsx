import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryCircles() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const categories = [
    {
      name: 'Chicken',
      subtitle: 'Tender & Juicy',
      image: '/chichken.webp',
      link: '#menu',
    },
    {
      name: 'BBQ',
      subtitle: 'Charcoal Smoked',
      image: '/bbq.webp',
      link: '#menu',
    },
    {
      name: 'Mutton',
      subtitle: 'Prime Cuts',
      image: '/Mutton.webp',
      link: '#menu',
    },
    {
      name: 'Desi Karahi',
      subtitle: 'Clay Wok Cooked',
      image: '/Desi%20krahi.webp',
      link: '#menu',
    },
    {
      name: 'Sajji',
      subtitle: 'Balochi Charcoal',
      image: '/Sajji.jpg',
      link: '#menu',
    },
    {
      name: 'Platters',
      subtitle: 'Royal Feasts',
      image: '/platters.webp',
      link: '#menu',
    },
    {
      name: 'Rice',
      subtitle: 'Aged Dum Basmati',
      image: '/Pulao.jpg',
      link: '#menu',
    },
    {
      name: 'Tandoor',
      subtitle: 'Clay Oven Breads',
      image: '/Tandoor.jpg',
      link: '#menu',
    },
    {
      name: 'Salad',
      subtitle: 'Fresh & Crisp',
      image: '/salad.webp',
      link: '#menu',
    },
  ];

  // Triple-duplicated categories for seamless infinite moving loop
  const displayCategories = [...categories, ...categories, ...categories];

  // Continuous smooth moving stream
  useEffect(() => {
    let animationFrameId;
    const container = scrollContainerRef.current;
    if (!container) return;

    // Elegant smooth speed
    const speed = 0.85;

    const autoScroll = () => {
      if (!isPaused && container) {
        const oneSetWidth = container.scrollWidth / 3;

        container.scrollLeft += speed;

        // When scrolled past one full duplicate set, seamlessly loop back with 0 visible jump
        if (container.scrollLeft >= oneSetWidth * 2) {
          container.scrollLeft -= oneSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += oneSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, categories.length]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const clientWidth = scrollContainerRef.current.clientWidth;
      const scrollStep = clientWidth < 640 ? 220 : 360;
      const scrollAmount = direction === 'left' ? -scrollStep : scrollStep;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#111111] text-[#FFFFFF] pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-18 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-wider uppercase text-[#F5B800]">
              EXPLORE OUR FLAVOURS
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>
          <h2 className="text-section-heading font-playfair text-[#FFFFFF] leading-tight">
            Popular <span className="text-[#F5B800]">Categories</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          
          {/* Scrollable Continuous Moving Row */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-5 sm:gap-8 md:gap-9 overflow-x-auto pb-4 pt-2 px-2 sm:px-6 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayCategories.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group flex flex-col items-center flex-shrink-0 text-center transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer focus:outline-none"
              >
                {/* Large Circular Dish Image */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full p-1.5 bg-[#181818] shadow-2xl border-2 border-neutral-800 group-hover:border-[#F5B800] transition-all duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Golden Glowing Outer Ring on Hover */}
                  <div className="absolute inset-0 rounded-full border-3 border-[#F5B800] opacity-0 group-hover:opacity-100 scale-105 transition-all duration-300 pointer-events-none" />
                </div>

                {/* Category Title */}
                <span className="mt-4 font-poppins text-[16px] sm:text-[18px] font-bold text-[#FFFFFF] group-hover:text-[#F5B800] transition-colors duration-200">
                  {item.name}
                </span>

                {/* Subtitle tag */}
                <span className="text-[13px] text-neutral-400 font-poppins mt-0.5 group-hover:text-neutral-200 transition-colors">
                  {item.subtitle}
                </span>
              </a>
            ))}
          </div>

          {/* Navigation Arrows placed BELOW the images - Prominently visible & responsive on mobile */}
          <div className="flex items-center justify-between px-3 sm:px-8 mt-5 sm:mt-6">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll Left"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#181818] hover:bg-[#F5B800] text-[#FFFFFF] hover:text-[#111111] border border-neutral-700 hover:border-[#F5B800] shadow-xl flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Mobile swipe hint */}
            <span className="font-poppins text-[12px] text-neutral-400 sm:hidden tracking-wider">
              Swipe or tap arrows
            </span>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll Right"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#181818] hover:bg-[#F5B800] text-[#FFFFFF] hover:text-[#111111] border border-neutral-700 hover:border-[#F5B800] shadow-xl flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
