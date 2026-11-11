import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin } from 'lucide-react';

export default function Navbar({ activePage = 'Home', setActivePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 -mb-20 sm:-mb-22 md:-mb-24 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0d0d0d]/90 backdrop-blur-md shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 md:h-24">
          
          {/* 1. Left: Navigation Items */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 flex-1 justify-start">
            {navLinks.map((item) => {
              const isActive = activePage === item.name;

              return (
                <div key={item.name} className="relative flex flex-col items-center">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (setActivePage) {
                        if (item.name === 'Contact') {
                          e.preventDefault();
                          setActivePage('Contact');
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        } else if (item.name === 'About us') {
                          e.preventDefault();
                          setActivePage('About us');
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        } else {
                          setActivePage('Home');
                          if (item.name === 'Menu') {
                            setTimeout(() => {
                              const menuEl = document.getElementById('menu');
                              if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
                            }, 50);
                          }
                        }
                      }
                    }}
                    className={`font-poppins text-[14px] lg:text-[15px] tracking-wider uppercase transition-colors duration-200 py-1 cursor-pointer drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] ${
                      isActive 
                        ? 'text-[#F5B800] font-bold' 
                        : 'text-neutral-100 font-medium hover:text-[#F5B800]'
                    }`}
                  >
                    {item.name}
                  </a>
                  {/* Underline indicator */}
                  {isActive && (
                    <div className="w-full h-[2px] bg-[#F5B800] rounded-full mt-0.5 transition-all duration-300 shadow-[0_0_8px_rgba(245,184,0,0.8)]" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* 2. Middle: Logo Centered */}
          <div className="flex items-center justify-center flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                if (setActivePage) {
                  setActivePage('Home');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }
              }}
              className="flex items-center justify-center group cursor-pointer py-1"
            >
              <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/logo-rm.png" 
                  alt="Kabab G Logo" 
                  className="h-16 sm:h-18 md:h-20 lg:h-22 w-auto object-contain max-w-[220px] sm:max-w-[260px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
                />
              </div>
            </a>
          </div>

          {/* 3. Right: Facebook, WhatsApp & Google Maps (GMP) Icons */}
          <div className="hidden md:flex items-center justify-end flex-1 gap-2.5 lg:gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/kababg.resturent1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F5B800] border border-white/20 hover:border-[#F5B800] text-white hover:text-[#111111] flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md backdrop-blur-sm cursor-pointer"
              aria-label="Facebook"
              title="Visit Kabab G on Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923030173057"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] border border-white/20 hover:border-[#25D366] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md backdrop-blur-sm cursor-pointer"
              aria-label="WhatsApp"
              title="Chat with Kabab G on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </a>

            {/* Location (GMP - Google Maps) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kabab+G+Multan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F5B800] border border-white/20 hover:border-[#F5B800] text-white hover:text-[#111111] flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md backdrop-blur-sm cursor-pointer"
              aria-label="Google Maps Location"
              title="Find Kabab G on Google Maps"
            >
              <MapPin className="w-4 h-4 stroke-[2.2]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-white hover:bg-neutral-800/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7 text-[#F5B800]" />
              ) : (
                <MenuIcon className="h-7 w-7 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#161616]/98 backdrop-blur-xl border-t border-neutral-800 px-6 pt-4 pb-6 space-y-3 shadow-2xl animate-fade-in">
          {navLinks.map((item) => {
            const isActive = activePage === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  if (setActivePage) {
                    if (item.name === 'Contact') {
                      setActivePage('Contact');
                    } else if (item.name === 'About us') {
                      setActivePage('About us');
                    } else {
                      setActivePage('Home');
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={`block font-poppins text-[15px] px-4 py-2.5 rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'font-bold text-[#F5B800] bg-neutral-900 border-l-4 border-[#F5B800]'
                    : 'font-medium text-neutral-200 hover:text-[#F5B800] hover:bg-neutral-900'
                }`}
              >
                {item.name}
              </a>
            );
          })}

          {/* Mobile Social & Location Icons */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/kababg.resturent1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#F5B800] text-white hover:text-[#F5B800] flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            <a
              href="https://wa.me/923030173057"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#25D366] text-white hover:text-[#25D366] flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kabab+G+Multan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#F5B800] text-white hover:text-[#F5B800] flex items-center justify-center transition-colors"
              aria-label="Google Maps Location"
            >
              <MapPin className="w-4 h-4 stroke-[2.2]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
