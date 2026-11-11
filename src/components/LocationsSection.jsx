import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function LocationsSection() {
  const branches = [
    {
      id: 1,
      name: 'Gulshan Market Branch',
      tag: 'Main Branch',
      address: 'Gulshan Market, New Multan Colony, Multan, Punjab, Pakistan',
      phone: '+92 303 017 30 57',
      timings: '12:00 PM – 02:00 AM (Mon - Sun)',
      features: ['Family Dining Hall', 'Live Charcoal Grill', 'Takeaway & Delivery'],
      mapsUrl: 'https://maps.google.com/?q=Gulshan+Market+New+Multan+Pakistan',
    },
    {
      id: 2,
      name: 'Nagana Chowk Branch',
      tag: 'Express & Dine-In',
      address: 'Near Nagana Chowk, Multan, Punjab, Pakistan',
      phone: '+92 303 017 30 57',
      timings: '12:00 PM – 02:00 AM (Mon - Sun)',
      features: ['Outdoor Sizzling Ambience', 'Live Koyla Karahi', 'Fast Takeaway'],
      mapsUrl: 'https://maps.google.com/?q=Nagana+Chowk+Multan+Pakistan',
    },
  ];

  return (
    <section id="locations" className="bg-[#0e0e0e] text-[#FFFFFF] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-widest uppercase text-[#F5B800]">
              VISIT KABAB G
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h2 className="text-section-heading text-[#FFFFFF]">
            Our Locations
          </h2>
          <p className="text-body-custom text-neutral-300 mt-3">
            Visit our authentic charcoal grill branches across Multan for an unforgettable family dining experience.
          </p>
        </div>

        {/* 2 Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="group relative bg-[#161616] border border-neutral-800 hover:border-[#F5B800] rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(245,184,0,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Branch Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F5B800]/15 border border-[#F5B800]/30 flex items-center justify-center text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-[#111111] transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-poppins text-[12px] font-semibold text-[#F5B800] bg-[#F5B800]/10 border border-[#F5B800]/25 px-3 py-1 rounded-full uppercase tracking-wider">
                    {branch.tag}
                  </span>
                </div>

                {/* Branch Name */}
                <h3 className="font-playfair text-[24px] sm:text-[27px] font-bold text-[#FFFFFF] group-hover:text-[#F5B800] transition-colors duration-200">
                  {branch.name}
                </h3>

                {/* Details List */}
                <div className="mt-5 space-y-3.5 text-neutral-300 text-small-custom">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <Navigation className="w-4 h-4 text-[#F5B800] shrink-0 mt-1" />
                    <span className="leading-relaxed text-neutral-200">{branch.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#F5B800] shrink-0" />
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                      className="hover:text-[#F5B800] transition-colors font-medium text-white"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Timings */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#F5B800] shrink-0" />
                    <span className="text-neutral-300">{branch.timings}</span>
                  </div>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-neutral-800">
                  {branch.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-[12px] font-poppins bg-[#202020] text-neutral-300 px-2.5 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-8 pt-4">
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#dfa600] text-[#111111] font-poppins font-semibold text-[14px] py-3 px-5 rounded-xl transition-all duration-200 group-hover:shadow-lg"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
