import React from 'react';

export default function MenuSection() {
  const galleryItems = [
    {
      id: 1,
      name: 'Reshmi Kebab Skewers',
      description: 'Tender minced chicken blended with rich fresh cream, roasted coriander, green chilies, and smoked over acacia coals.',
      image: '/hero.png',
    },
    {
      id: 2,
      name: 'Sher Khan Platter',
      description: 'A majestic feast of sizzling seekh kebabs, succulent malai boti, grilled chops, and hot tandoori roghni naans.',
      image: '/platters.webp',
    },
    {
      id: 3,
      name: 'Desi Ghee Koyla Karahi',
      description: 'Wok-cooked chicken in pure desi ghee with ripe country tomatoes, sliced ginger, and finished with a live charcoal dum.',
      image: '/Desi%20krahi.webp',
    },
    {
      id: 4,
      name: 'Tandoori Roghni Naan Basket',
      description: 'Freshly slapped against the fiery clay tandoor walls, glazed with clarified butter and toasted white sesame seeds.',
      image: '/Tandoor.jpg',
    },
    {
      id: 5,
      name: 'Balochi Charcoal Sajji',
      description: 'Whole chicken skewered and roasted around slow-burning hardwood embers, seasoned with our signature kaala masala.',
      image: '/Sajji.jpg',
    },
    {
      id: 6,
      name: 'Dum Pukht Handi Gosht',
      description: 'Tender baby mutton simmered in a sealed earthenware handi with caramelized brown onions, crushed cardamom, and saffron gravy.',
      image: '/krahi.webp',
    },
  ];

  return (
    <section id="menu" className="bg-[#111111] text-[#FFFFFF] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F5B800]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-widest uppercase text-[#F5B800]">
              AUTHENTIC FLAVOURS
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h2 className="text-section-heading font-playfair text-[#FFFFFF] leading-tight">
            Masterpieces of the <br className="hidden sm:inline" />
            <span className="text-[#F5B800]">Charcoal Grill</span>
          </h2>
          <p className="text-body-custom text-neutral-300 mt-3">
            Explore our visual gallery of authentic Pakistani cuisine, prepared with fire, patience, and heirloom recipes.
          </p>
        </div>

        {/* Gallery Grid (3x2 layout matching attached image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden group cursor-pointer bg-neutral-950 shadow-xl"
            >
              {/* Food Image with Smooth Zoom on Hover */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Dark Gradient Overlay for High Contrast Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent group-hover:via-black/75 group-hover:from-black/95 transition-all duration-300" />

              {/* Text Container: Just Name Visible, Description on Hover ONLY */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col justify-end transition-all duration-300">
                
                {/* Dish Name (Always Visible) */}
                <h3 className="font-playfair text-[18px] sm:text-[21px] font-bold text-[#FFFFFF] group-hover:text-[#F5B800] transition-colors duration-200 uppercase tracking-wider">
                  {item.name}
                </h3>

                {/* Description (Hidden by default, reveals ONLY on hover) */}
                <div className="max-h-0 opacity-0 group-hover:max-h-36 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="font-poppins text-[13px] sm:text-[14px] text-neutral-200 mt-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
