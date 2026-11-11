import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

export default function ContactPage({ setActivePage }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#111111] text-[#FFFFFF]">
      
      {/* 1. Contact Hero Banner */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden border-b border-neutral-800">
        {/* Background Image: conatct.jpeg from public folder - Clearly Visible */}
        <div className="absolute inset-0 z-0">
          <img
            src="/conatct.jpeg"
            alt="Kabab G Contact Us Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Dark Overlay so image is clearly visible */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />
        </div>

        {/* Hero Title & Breadcrumb */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.25em] uppercase text-[#F5B800] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              GET IN TOUCH
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h1 className="text-hero-heading text-[#FFFFFF] tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]">
            Contact Us
          </h1>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[14px] font-poppins text-neutral-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <button
              onClick={() => {
                if (setActivePage) setActivePage('Home');
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#F5B800] transition-colors focus:outline-none cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#F5B800] font-bold">/</span>
            <span className="text-[#F5B800] font-semibold">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Form Section (Matching Homepage Form & Details) */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-wider uppercase text-[#F5B800]">
              DIRECT COMMUNICATION
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>
          <h2 className="text-section-heading text-[#FFFFFF]">
            Book Your Table or Order Direct
          </h2>
          <p className="text-body-custom text-neutral-300 mt-2">
            Visit our restaurant in Multan or send us a message for reservations and catering inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
            
            {/* Address Card */}
            <div className="flex-1 bg-[#181818] border border-neutral-800 hover:border-[#F5B800] p-5 rounded-2xl transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5B800] text-[#111111] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-poppins text-[16px] font-bold text-[#FFFFFF] mb-0.5">
                  Restaurant Location
                </h3>
                <p className="font-poppins text-[13px] sm:text-[14px] text-neutral-300 leading-snug">
                  Block Z, 18-Z New Multan Service Rd, Block Z New Multan Colony, Multan, Punjab 60000, Pakistan
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex-1 bg-[#181818] border border-neutral-800 hover:border-[#F5B800] p-5 rounded-2xl transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5B800] text-[#111111] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-poppins text-[16px] font-bold text-[#FFFFFF] mb-0.5">
                  Call & Reservations
                </h3>
                <a
                  href="tel:+923030173057"
                  className="font-poppins text-[15px] font-semibold text-[#F5B800] hover:underline block"
                >
                  +92 303 017 30 57
                </a>
                <span className="font-poppins text-[12px] sm:text-[13px] text-neutral-400">Open 12:00 PM – 02:00 AM Daily</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex-1 bg-[#181818] border border-neutral-800 hover:border-[#F5B800] p-5 rounded-2xl transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5B800] text-[#111111] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-poppins text-[16px] font-bold text-[#FFFFFF] mb-0.5">
                  Official Email
                </h3>
                <a
                  href="mailto:zeeshanashraf102@gmail.com"
                  className="font-poppins text-[14px] text-neutral-300 hover:text-[#F5B800] transition-colors break-all"
                >
                  zeeshanashraf102@gmail.com
                </a>
              </div>
            </div>

            {/* Facebook Page Link Card */}
            <a
              href="https://www.facebook.com/kababg.resturent1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#181818] border border-neutral-800 hover:border-[#F5B800] p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5B800] text-[#111111] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="font-poppins text-[15px] font-bold text-[#FFFFFF] group-hover:text-[#F5B800] transition-colors block">
                  Follow on Facebook
                </span>
                <span className="font-poppins text-[13px] text-neutral-400 block">
                  fb.com/kababg.resturent1
                </span>
              </div>
            </a>

          </div>

          {/* Right Column: Clean & Simple Reservation Form */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-[#181818] border border-neutral-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative h-full flex flex-col justify-between">
              
              <div className="mb-6">
                <h3 className="font-playfair text-[24px] sm:text-[28px] font-bold text-[#FFFFFF] mb-1">
                  Send a Message / Reservation
                </h3>
                <p className="font-poppins text-[14px] text-neutral-400">
                  Fill out this quick form and our manager will call to confirm.
                </p>
              </div>

              {submitted ? (
                <div className="bg-neutral-950 border border-[#F5B800] rounded-2xl p-8 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 bg-[#F5B800] text-[#111111] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-playfair text-[22px] font-bold text-[#FFFFFF]">
                    Message Received!
                  </h4>
                  <p className="font-poppins text-[14px] text-neutral-300 max-w-md mx-auto">
                    Shukriya! Aapka message record ho gaya hai. Hamari team aapse jald rabta karegi.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#F5B800] text-[#111111] font-semibold text-[14px] hover:bg-[#dfa600] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <label className="block text-[14px] font-medium text-neutral-300 mb-1.5">
                      Your Full Name <span className="text-[#F5B800]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111111] border border-neutral-700 focus:border-[#F5B800] rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-neutral-300 mb-1.5">
                      Phone Number <span className="text-[#F5B800]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0303 0173057"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#111111] border border-neutral-700 focus:border-[#F5B800] rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label className="block text-[14px] font-medium text-neutral-300 mb-1.5">
                      Message / Table Details <span className="text-[#F5B800]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Mention number of guests, date, time, or your query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full flex-1 min-h-[90px] bg-[#111111] border border-neutral-700 focus:border-[#F5B800] rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F5B800] hover:bg-[#dfa600] text-[#111111] font-poppins font-bold text-[16px] py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#F5B800]/25 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. Google Maps with Floating Yellow/Golden Cards (matching the attached image) */}
      <section className="relative overflow-hidden pt-6 pb-20 sm:pb-24">
        
        {/* Full-Width Google Map Background */}
        <div className="w-full h-[450px] sm:h-[500px] lg:h-[560px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52420.588022604796!2d71.4394448533939!3d30.24183320246121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35000f521487%3A0x2e59b014fb3ff98c!2sKabab%20G!5e1!3m2!1sen!2s!4v1793780796470!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Kabab G Google Map"
            className="w-full h-full filter saturate-[1.2]"
          ></iframe>
        </div>

        {/* Floating 3 Yellow/Golden Cards (Matching Attached Image Layout) */}
        <div className="relative -mt-20 sm:-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6">
            
            {/* Card 1: LOCATION */}
            <div className="bg-[#F5B800] text-[#111111] p-6 sm:p-7 rounded-2xl shadow-2xl flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shrink-0 shadow">
                <MapPin className="w-6 h-6 text-[#111111]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-poppins text-[17px] sm:text-[18px] font-bold text-[#111111] tracking-wider uppercase">
                  LOCATION
                </h4>
                <p className="font-poppins text-[13px] font-semibold text-neutral-900">
                  Phone: +92 303 017 30 57
                </p>
                <p className="font-poppins text-[12px] text-neutral-800 leading-snug">
                  Block Z, 18-Z New Multan Service Rd, Multan, Punjab 60000
                </p>
                <p className="font-poppins text-[12px] font-medium text-neutral-900 pt-1">
                  Daily: 12:00 PM to 02:00 AM
                </p>
              </div>
            </div>

            {/* Card 2: WORKING HOURS */}
            <div className="bg-[#F5B800] text-[#111111] p-6 sm:p-7 rounded-2xl shadow-2xl flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shrink-0 shadow">
                <Clock className="w-6 h-6 text-[#111111]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-poppins text-[17px] sm:text-[18px] font-bold text-[#111111] tracking-wider uppercase">
                  WORKING HOURS
                </h4>
                <p className="font-poppins text-[13px] font-semibold text-neutral-900">
                  Phone: +92 303 017 30 57
                </p>
                <p className="font-poppins text-[12px] text-neutral-800 leading-snug">
                  Dine-In, Takeaway & Live Koyla Karahi
                </p>
                <p className="font-poppins text-[12px] font-medium text-neutral-900 pt-1">
                  Daily: 12:00 PM to 02:00 AM
                </p>
              </div>
            </div>

            {/* Card 3: RESERVATIONS & EVENTS (Replaces 'ORDER NOW') */}
            <div className="bg-[#F5B800] text-[#111111] p-6 sm:p-7 rounded-2xl shadow-2xl flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shrink-0 shadow">
                <Calendar className="w-6 h-6 text-[#111111]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-poppins text-[17px] sm:text-[18px] font-bold text-[#111111] tracking-wider uppercase">
                  RESERVATIONS & EVENTS
                </h4>
                <p className="font-poppins text-[13px] font-semibold text-neutral-900">
                  Phone: +92 303 017 30 57
                </p>
                <p className="font-poppins text-[12px] text-neutral-800 leading-snug">
                  zeeshanashraf102@gmail.com
                </p>
                <p className="font-poppins text-[12px] font-medium text-neutral-900 pt-1">
                  Family Hall & Party Booking
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}
