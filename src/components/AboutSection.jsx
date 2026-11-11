import React from 'react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Flame } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Traditional Charcoal Mangal Grills and Clay Tandoors',
    'Hand-Pounded Masalas Prepared In-House Every Week',
    'Ethically Sourced 100% Certified Prime Cuts',
    'Generations of Heirloom Culinary Secrets from Master Ustads',
  ];

  return (
    <section id="about" className="bg-[#FFF9E9] text-[#111111] py-20 lg:py-28 border-b border-[#EAE2CE] relative overflow-hidden">
      
      {/* Decorative Warm Shapes */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#F5B800]/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage & Heritage Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="rounded-3xl overflow-hidden border-4 border-[#FFFFFF] shadow-2xl bg-neutral-900 relative">
                <img
                  src="/hero.png"
                  alt="Authentic Kabab G Kitchen Grill"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[#F5B800] text-small-custom font-semibold uppercase tracking-wider block mb-1">
                    ESTABLISHED WITH PASSION
                  </span>
                  <p className="font-playfair text-[22px] font-bold">
                    Preserving Pakistan’s Rich Barbecue Legacy
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#111111] text-[#FFFFFF] p-6 rounded-2xl shadow-2xl border-2 border-[#F5B800] max-w-[220px]">
                <div className="flex items-center gap-2 text-[#F5B800] mb-2">
                  <Flame className="w-5 h-5 fill-[#F5B800]" />
                  <span className="font-poppins text-small-custom font-bold uppercase tracking-wider">
                    25+ Years
                  </span>
                </div>
                <p className="font-playfair text-[18px] font-bold leading-tight mb-1">
                  Master Grilling
                </p>
                <p className="text-small-custom text-neutral-300 text-[13px]">
                  Unmatched smoky perfection since day one.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#F5B800]"></span>
              <span className="font-poppins text-small-custom font-semibold tracking-wider uppercase text-[#111111]">
                ABOUT KABAB G
              </span>
            </div>

            {/* Section Heading: 42px Playfair Display Bold */}
            <h2 className="text-section-heading text-[#111111]">
              A Royal Journey of Smoke, Spices, and Soul
            </h2>

            {/* Subheading: 26px Playfair Display */}
            <h3 className="text-subheading text-[#8c6700]">
              True Pakistani hospitality on every plate.
            </h3>

            {/* Body Text: 16px Poppins */}
            <p className="text-body-custom text-neutral-700">
              At <strong className="text-[#111111] font-semibold">Kabab G</strong>, barbecue is more than just cooking—it is an art form honed over generations. Born from a deep reverence for the culinary traditions of Lahore’s historic food streets and the rugged aromatic grills of Peshawar, our kitchen is governed by one rule: uncompromising authenticity.
            </p>

            <p className="text-body-custom text-neutral-700">
              We never cut corners. Our kebabs are hand-minced, delicately rested with natural marinades, and threaded onto long steel skewers to roast patiently over live acacia hardwood charcoal coals. The result is a signature crust with an exceptionally tender, juicy center.
            </p>

            {/* Highlight Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F5B800] shrink-0 mt-0.5" />
                  <span className="text-small-custom text-neutral-800 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons & Signoff */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#menu"
                className="btn-custom text-[15px] font-semibold bg-[#111111] hover:bg-[#222222] text-[#FFFFFF] hover:text-[#F5B800] px-7 py-3.5 rounded-full shadow-lg transition-all"
              >
                Experience the Taste
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5B800]/20 flex items-center justify-center text-[#111111]">
                  <HeartHandshake className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
                  <span className="text-small-custom font-bold text-[#111111] block">Freshly Grilled Guarantee</span>
                  <span className="text-small-custom text-neutral-600 text-[13px]">Never pre-cooked or reheated</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

