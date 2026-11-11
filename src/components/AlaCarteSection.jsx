import React from 'react';

export default function AlaCarteSection() {
  const leftCategories = [
    {
      categoryTitle: 'KARAHI & HANDI',
      items: [
        {
          name: 'DESI GHEE KOYLA KARAHI',
          badge: 'POPULAR',
          price: 'Rs. 1,650',
          desc: 'Fresh farm chicken wok-simmered in pure desi ghee, crushed country tomatoes, sliced ginger, and finished over live charcoal embers.',
          image: '/krahi-1.png',
        },
        {
          name: 'SHAHI DUM PUKHT HANDI',
          badge: 'RECOMMENDED',
          price: 'Rs. 2,450',
          desc: 'Prime baby mutton simmered slow in a sealed earthenware clay handi with cardamom, saffron, and rich caramelized onion gravy.',
          image: '/Mutton.webp',
        },
        {
          name: 'MAKHNI CHICKEN HANDI',
          badge: null,
          price: 'Rs. 1,450',
          desc: 'Tender boneless chicken cubes cooked in silky dairy cream, crushed cashews, and aromatic kasuri methi in traditional copper deg.',
          image: '/krahi.webp',
        },
      ],
    },
    {
      categoryTitle: 'TRADITIONAL PULAO',
      items: [
        {
          name: 'KABAB G MUTTON YAKHNI PULAO',
          badge: "CHEF'S SPECIAL",
          price: 'Rs. 1,250',
          desc: 'Aged fragrant basmati rice steeped in rich bone marrow broth with succulent mutton cuts, caramelized raisins, and roasted almonds.',
          image: '/Pulao.jpg',
        },
        {
          name: 'BANNU BEEF PULAO',
          badge: null,
          price: 'Rs. 950',
          desc: 'Authentic Khyber Bannu recipe with slow-braised tender beef shanks, bone marrow essence, and spiced long-grain basmati.',
          image: '/Pulao.jpg',
        },
      ],
    },
    {
      categoryTitle: 'SALADS & SIDES',
      items: [
        {
          name: 'FRESH KACHUMBER & ZEERA RAITA',
          badge: null,
          price: 'Rs. 220',
          desc: 'Crisp diced cucumbers, ripe tomatoes, red onions tossed with lemon juice and paired with chilled roasted cumin yogurt.',
          image: '/salad.webp',
        },
        {
          name: 'SPECIAL KABAB G RUSSIAN SALAD',
          badge: null,
          price: 'Rs. 380',
          desc: 'Diced orchard apples, pineapple chunks, sweet garden peas, and sweet corn folded in velvety chilled cream dressing.',
          image: '/salad.webp',
        },
      ],
    },
  ];

  const rightCategories = [
    {
      categoryTitle: 'CHARCOAL BBQ',
      items: [
        {
          name: 'CHICKEN RESHMI SEEKH KEBAB',
          badge: 'RECOMMENDED',
          price: 'Rs. 890',
          desc: 'Finely minced chicken spiced with roasted coriander, white pepper, fresh dairy cream, and roasted over glowing hardwood coals.',
          image: '/hero.png',
        },
        {
          name: 'CHICKEN MALAI BOTI',
          badge: 'POPULAR',
          price: 'Rs. 950',
          desc: 'Melt-in-mouth boneless chicken thighs marinated overnight in thick clotted cream, green chillies, and mild royal spices.',
          image: '/bbq.webp',
        },
        {
          name: 'MUTTON SEEKH KEBAB',
          badge: null,
          price: 'Rs. 1,290',
          desc: 'Coarse-ground prime mutton blended with onions, fresh mint, and pomegranate powder, char-grilled on long steel skewers.',
          image: '/bbq-1.png',
        },
        {
          name: 'KASTOORI CHICKEN BOTI',
          badge: null,
          price: 'Rs. 980',
          desc: 'Succulent chicken cubes coated in a spiced golden egg glaze with cracked black pepper and char-grilled over acacia charcoal.',
          image: '/bbq.webp',
        },
      ],
    },
    {
      categoryTitle: 'BALOCHI SAJJI',
      items: [
        {
          name: 'SPECIAL BALOCHI CHARCOAL SAJJI',
          badge: 'SIGNATURE',
          price: 'Rs. 1,550',
          desc: 'Whole chicken skewered around glowing hardwood embers, slow-roasted with pure rock salt and Kabab G signature Kaala masala.',
          image: '/Sajji-1.png',
        },
        {
          name: 'MUTTON SAJJI (HALF / FULL)',
          badge: null,
          price: 'Rs. 3,200',
          desc: 'Tender prime mutton leg slow-roasted on an open fire pit for 4 hours until exceptionally crisp outside and juicy inside.',
          image: '/sajji-1.jpg',
        },
      ],
    },
    {
      categoryTitle: 'TANDOOR',
      items: [
        {
          name: 'SPECIAL TANDOORI ROGHNI NAAN',
          badge: 'FRESH & HOT',
          price: 'Rs. 90',
          desc: 'Puffy leavened flatbread baked against fiery clay tandoor walls, brushed with pure clarified butter and toasted white sesame seeds.',
          image: '/Tandoor.jpg',
        },
      ],
    },
  ];

  const scrollToMenuOrContact = () => {
    const el = document.getElementById('menu') || document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#0d0d0d] text-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      
      {/* 1. Subtle Food Doodle Art Background (Matching Attached Reference Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          {/* Fish / Culinary Doodles */}
          <path d="M120 180 C 180 120, 260 120, 320 180 C 260 240, 180 240, 120 180 Z" />
          <path d="M320 180 L 360 150 L 360 210 Z" />
          <circle cx="160" cy="175" r="4" fill="#FFFFFF" />
          
          {/* Lemon / Citrus Wedge */}
          <path d="M980 140 A 60 60 0 0 1 1060 220 L 980 220 Z" />
          <path d="M990 155 A 45 45 0 0 1 1045 210 L 990 210 Z" strokeDasharray="3 3" />

          {/* Fork & Knife Doodle */}
          <path d="M150 650 L 150 750 M140 650 L 140 680 M160 650 L 160 680" />
          <path d="M220 650 C 230 670, 230 700, 220 750" />

          {/* Cooking Pot / Handi Doodle */}
          <ellipse cx="1020" cy="650" rx="70" ry="25" />
          <path d="M950 650 C 950 720, 1090 720, 1090 650" />
          <path d="M990 625 Q 1020 600 1050 625" />

          {/* Ambient circles & sparks */}
          <circle cx="600" cy="120" r="40" strokeDasharray="4 4" />
          <circle cx="650" cy="720" r="50" strokeDasharray="5 5" />
          <path d="M500 400 Q 550 350 600 400 T 700 400" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.25em] uppercase text-[#F5B800]">
              TRADITIONAL PAKISTANI SPREAD
            </span>
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#F5B800]"></span>
          </div>

          <h2 className="font-playfair text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-[#FFFFFF] tracking-tight leading-none uppercase">
            SHAHI <span className="text-[#F5B800]">DASTARKHWAN</span>
          </h2>
        </div>

        {/* ================= 2-COLUMN MENU GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* ---------- LEFT COLUMN (Karahi & Handi, Pulao, Salads) ---------- */}
          <div className="space-y-12">
            {leftCategories.map((cat) => (
              <div key={cat.categoryTitle} className="space-y-6">
                
                {/* Category Heading with Orange Underline */}
                <div>
                  <h3 className="font-poppins font-bold text-[18px] sm:text-[20px] tracking-wider text-white uppercase">
                    {cat.categoryTitle}
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#F5B800] mt-2 rounded-full" />
                </div>

                {/* Items in this category */}
                <div className="space-y-6">
                  {cat.items.map((item) => (
                    <div 
                      key={item.name}
                      className="group flex items-start gap-3.5 sm:gap-4 p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.02]"
                    >
                      {/* Circular Dish Image */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-neutral-700/80 shadow-md group-hover:border-[#F5B800] group-hover:scale-105 transition-all duration-300 bg-neutral-900">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          {/* Dish Name & Badge */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-poppins font-bold text-[13px] sm:text-[14px] md:text-[15px] text-white tracking-wide group-hover:text-[#F5B800] transition-colors">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="bg-[#F5B800] text-[#111111] text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {/* Dotted Leader Line */}
                          <div className="hidden sm:flex flex-1 border-b border-dotted border-neutral-700 mx-2 mb-1" />

                          {/* Price in PKR */}
                          <span className="font-poppins font-bold text-[#F5B800] text-[14px] sm:text-[16px] shrink-0 whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>

                        {/* Dish Description */}
                        <p className="font-poppins text-[12px] sm:text-[13px] text-neutral-400 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* ---------- RIGHT COLUMN (Charcoal BBQ, Balochi Sajji) ---------- */}
          <div className="space-y-12">
            {rightCategories.map((cat) => (
              <div key={cat.categoryTitle} className="space-y-6">
                
                {/* Category Heading with Orange Underline */}
                <div>
                  <h3 className="font-poppins font-bold text-[18px] sm:text-[20px] tracking-wider text-white uppercase">
                    {cat.categoryTitle}
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#F5B800] mt-2 rounded-full" />
                </div>

                {/* Items in this category */}
                <div className="space-y-6">
                  {cat.items.map((item) => (
                    <div 
                      key={item.name}
                      className="group flex items-start gap-3.5 sm:gap-4 p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.02]"
                    >
                      {/* Circular Dish Image */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-neutral-700/80 shadow-md group-hover:border-[#F5B800] group-hover:scale-105 transition-all duration-300 bg-neutral-900">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          {/* Dish Name & Badge */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-poppins font-bold text-[13px] sm:text-[14px] md:text-[15px] text-white tracking-wide group-hover:text-[#F5B800] transition-colors">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="bg-[#F5B800] text-[#111111] text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {/* Dotted Leader Line */}
                          <div className="hidden sm:flex flex-1 border-b border-dotted border-neutral-700 mx-2 mb-1" />

                          {/* Price in PKR */}
                          <span className="font-poppins font-bold text-[#F5B800] text-[14px] sm:text-[16px] shrink-0 whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>

                        {/* Dish Description */}
                        <p className="font-poppins text-[12px] sm:text-[13px] text-neutral-400 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* ================= BOTTOM ACTION: VIEW FULL MENU ONLY ================= */}
        <div className="mt-16 sm:mt-20 text-center">
          <button
            type="button"
            onClick={scrollToMenuOrContact}
            className="btn-custom text-[14px] sm:text-[15px] font-bold text-[#111111] bg-[#F5B800] hover:bg-[#dfa600] px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg shadow-xl hover:shadow-[#F5B800]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase tracking-wider inline-flex items-center justify-center"
          >
            VIEW FULL MENU
          </button>
        </div>

      </div>
    </section>
  );
}
