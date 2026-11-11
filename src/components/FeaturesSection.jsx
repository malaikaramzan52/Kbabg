import React from 'react';
import { Flame, Award, Utensils, Sparkles } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Flame className="w-8 h-8 text-[#F5B800]" />,
      title: "Live Charcoal Smoke",
      desc: "Skewers grilled over authentic slow-burning hardwood coal for that unmistakable aroma and juicy tenderness.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#F5B800]" />,
      title: "100% Fresh Halal Cuts",
      desc: "Strictly fresh, grain-fed chicken, prime mutton, and beef handpicked daily with no artificial tenderizers.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#F5B800]" />,
      title: "Heirloom Secret Spices",
      desc: "Our distinct spice blends originate from traditional royal kitchens of Peshawar, Lahore, and Delhi.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-[#F5B800]" />,
      title: "Sizzling Fresh Tabletop",
      desc: "Served piping hot straight from the embers with tandoori breads, fresh mint raita, and zesty pickled onions.",
    },
  ];

  return (
    <section className="bg-[#FFF9E9] py-16 lg:py-20 border-b border-[#EAE2CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-wider uppercase text-[#111111]">
              The Kabab G Standard
            </span>
            <span className="w-6 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h2 className="text-section-heading text-[#111111] mb-4">
            Why Our Flavours Reign Supreme
          </h2>
          <p className="text-body-custom text-neutral-700">
            Every skewer is a testament to culinary heritage, cooked with patience, passion, and uncompromising purity.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#F0E6D2] shadow-sm hover:shadow-xl hover:border-[#F5B800] transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-xl bg-[#111111] flex items-center justify-center mb-6 group-hover:bg-[#F5B800] transition-colors duration-300">
                  <div className="group-hover:text-[#111111] transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-card-title text-[#111111] mb-3 group-hover:text-[#F5B800] transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-body-custom text-neutral-600 text-[15px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-small-custom font-medium text-[#111111]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800] mr-2"></span>
                Kabab G Promise
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

