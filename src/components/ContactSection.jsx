import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
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
    <section id="contact" className="bg-[#111111] text-[#FFFFFF] py-20 lg:py-28 relative">
      <span id="get-in-touch" className="absolute -top-24 opacity-0 pointer-events-none"></span>

      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#F5B800]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-wider uppercase text-[#F5B800]">
              GET IN TOUCH & VISIT US
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h2 className="text-section-heading text-[#FFFFFF] mb-3">
            Book Your Table or Order Direct
          </h2>
          <p className="text-body-custom text-neutral-300">
            Visit our restaurant or reach out to us for family feasts and reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
            
            {/* Address Card */}
            <div className="flex-1 bg-neutral-900/90 border border-neutral-800 hover:border-[#F5B800] p-5 rounded-2xl transition-all duration-300 flex items-center gap-4">
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
            <div className="flex-1 bg-neutral-900/90 border border-neutral-800 hover:border-[#F5B800] p-5 rounded-2xl transition-all duration-300 flex items-center gap-4">
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
            <div className="flex-1 bg-neutral-900/90 border border-neutral-800 hover:border-[#F5B800] p-5 rounded-2xl transition-all duration-300 flex items-center gap-4">
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
              className="flex-1 bg-neutral-900/90 border border-neutral-800 hover:border-[#F5B800] p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 group block"
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
            <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative h-full flex flex-col justify-between">
              
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
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-playfair text-[24px] font-bold text-white">
                    Request Received!
                  </h4>
                  <p className="font-poppins text-[15px] text-neutral-300 max-w-md mx-auto">
                    Thank you <strong className="text-[#F5B800]">{formData.name || 'valued guest'}</strong>. We have received your request and will contact you shortly at <span className="text-white font-semibold">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', message: '' });
                    }}
                    className="btn-custom text-[14px] font-semibold bg-[#111111] border border-neutral-700 text-white hover:border-[#F5B800] px-6 py-2.5 rounded-full"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <label className="block font-poppins text-[14px] text-neutral-300 font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asad Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 focus:border-[#F5B800] rounded-xl px-4 py-3 text-white text-[15px] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-[14px] text-neutral-300 font-medium mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0303 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 focus:border-[#F5B800] rounded-xl px-4 py-3 text-white text-[15px] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label className="block font-poppins text-[14px] text-neutral-300 font-medium mb-1.5">
                      Message / Special Request
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your table reservation, number of persons, or general inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full flex-1 min-h-[90px] bg-neutral-950 border border-neutral-700 focus:border-[#F5B800] rounded-xl px-4 py-3 text-white text-[15px] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-custom w-full text-[15px] font-semibold bg-[#F5B800] hover:bg-[#dfa600] text-[#111111] py-4 px-8 rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 mt-2 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
