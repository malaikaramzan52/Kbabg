import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, Check } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', page: 'Home' },
    { name: 'About Us', href: '#about', page: 'About us' },
    { name: 'Menu', href: '#menu', sectionId: 'menu' },
    { name: 'Contact', href: '#contact', page: 'Contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (!setActivePage) return;

    if (link.page) {
      setActivePage(link.page);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else if (link.sectionId) {
      setActivePage('Home');
      setTimeout(() => {
        const el = document.getElementById(link.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="relative bg-[#0b0806] text-[#FFFFFF] overflow-hidden">
      {/* 1. Background Image with Warm Restaurant Interior Opacity Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/footer.jpeg"
          alt="Kabab G Restaurant Dining Ambience"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Layered overlay with balanced warmth & optimal dullness */}
        <div className="absolute inset-0 bg-[#0a0705]/68" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/58 to-black/70" />
      </div>

      {/* 2. Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: OPENING HOURS ================= */}
          <div className="space-y-6 text-left">
            <h4 className="font-poppins text-[15px] sm:text-[16px] font-semibold tracking-[0.22em] text-[#FFFFFF] uppercase">
              OPENING HOURS
            </h4>

            <div className="space-y-3.5 font-poppins text-[13px] sm:text-[14px]">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-neutral-400">Monday - Friday</span>
                <span className="text-white font-medium">12:00 PM – 01:00 AM</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-neutral-400">Saturday</span>
                <span className="text-white font-medium">12:00 PM – 02:00 AM</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-neutral-400">Sunday</span>
                <span className="text-white font-medium">12:00 PM – 02:00 AM</span>
              </div>

              <div className="flex justify-between items-center pt-3 text-[13px]">
                <span className="text-[#F5B800] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800]" />
                  Live Charcoal BBQ
                </span>
                <span className="text-neutral-300 font-medium">05:00 PM – 02:00 AM</span>
              </div>
            </div>
          </div>

          {/* ================= CENTER COLUMN: LOGO & DETAILS ================= */}
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Center Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                if (setActivePage) setActivePage('Home');
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="inline-block cursor-pointer group"
              aria-label="Kabab G Home"
            >
              <img
                src="/logo-rm.png"
                alt="Kabab G Logo"
                className="h-18 sm:h-22 w-auto object-contain mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Brand Title / Tagline */}
            <div className="space-y-1">
              <div className="inline-flex items-center justify-center gap-2 text-[13px] sm:text-[14px] tracking-[0.25em] uppercase text-[#F5B800] font-semibold">
                <span>★</span>
                <span>KABAB G RESTAURANT</span>
                <span>★</span>
              </div>
              <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-neutral-400">
                CHARCOAL BBQ & DESI CUISINE • EST. 1999
              </p>
            </div>

            {/* Address */}
            <p className="text-[13px] text-neutral-300 max-w-sm leading-relaxed pt-1">
              Block Z, 18-Z New Multan Service Rd, Block Z New Multan Colony, Multan, Punjab 60000
            </p>

            {/* Contact Details */}
            <div className="text-[13px] text-neutral-300 space-y-1 pt-1">
              <p>
                <span className="text-neutral-400 font-medium">M: </span>
                <a
                  href="mailto:zeeshanashraf102@gmail.com"
                  className="hover:text-[#F5B800] transition-colors"
                >
                  zeeshanashraf102@gmail.com
                </a>
              </p>
              <p>
                <span className="text-neutral-400 font-medium">T: </span>
                <a
                  href="tel:+923030173057"
                  className="hover:text-[#F5B800] font-medium transition-colors"
                >
                  +92 303 017 30 57
                </a>
              </p>
            </div>

            {/* Social Media Icons (Centered Row) */}
            <div className="flex items-center justify-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/kababg.resturent1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#F5B800] hover:text-[#111111] hover:bg-[#F5B800] text-neutral-300 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Phone / Call */}
              <a
                href="tel:+923030173057"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#F5B800] hover:text-[#111111] hover:bg-[#F5B800] text-neutral-300 flex items-center justify-center transition-all duration-300"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923030173057"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#F5B800] hover:text-[#111111] hover:bg-[#F5B800] text-neutral-300 flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: NEWSLETTER ================= */}
          <div className="space-y-6 text-left">
            <h4 className="font-poppins text-[15px] sm:text-[16px] font-semibold tracking-[0.22em] text-[#FFFFFF] uppercase">
              NEWSLETTER
            </h4>

            <p className="font-poppins text-[13px] sm:text-[14px] text-neutral-300 leading-relaxed">
              Receive the latest news and exclusive weekend deals from us.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4 pt-1">
              {/* Minimal Underline Style Input Box (Matching Attached Reference) */}
              <div className="relative border-b border-neutral-500 focus-within:border-[#F5B800] pb-2.5 flex items-center transition-colors">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-white placeholder-neutral-400 text-[14px] focus:outline-none w-full pr-10 font-poppins"
                />
                <button
                  type="submit"
                  className="absolute right-0 text-neutral-300 hover:text-[#F5B800] transition-colors p-1"
                  aria-label="Submit Email"
                >
                  <ArrowRight className="w-5 h-5 stroke-[1.8]" />
                </button>
              </div>

              {/* Privacy Policy Agreement Checkbox */}
              <label className="flex items-center gap-2.5 text-[12px] sm:text-[13px] text-neutral-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="accent-[#F5B800] w-4 h-4 rounded cursor-pointer"
                />
                <span>I agree to the Privacy Policy</span>
              </label>

              {subscribed && (
                <div className="flex items-center gap-2 text-[13px] text-[#F5B800] font-medium pt-1 animate-fade-in">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Thank you for subscribing to Kabab G!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 mt-14 sm:mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] sm:text-[13px] text-neutral-400 font-poppins">
          
          {/* Bottom Left Note */}
          <div className="text-center md:text-left">
            <span className="text-white font-medium">Kabab G</span> Restaurant & Charcoal BBQ Multan
          </div>

          {/* Bottom Center Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 uppercase tracking-wider text-[11px] sm:text-[12px] font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="hover:text-[#F5B800] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Bottom Right Copyright */}
          <div className="text-center md:text-right">
            © Copyright Kabab G 2026. Powered by{' '}
            <a
              href="https://hattechmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F5B800] underline decoration-neutral-600 hover:decoration-[#F5B800] transition-colors"
            >
              HATTech Media
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
