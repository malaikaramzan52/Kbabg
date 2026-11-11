import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCircles from './components/CategoryCircles';
import StoryMilestoneSection from './components/StoryMilestoneSection';
import BestsellersSection from './components/BestsellersSection';
import CoreValuesBanner from './components/CoreValuesBanner';
import PromoDealBanner from './components/PromoDealBanner';
import SajjiSpecialSection from './components/SajjiSpecialSection';
import BbqSpecialSection from './components/BbqSpecialSection';
import SpecialPlatter from './components/SpecialPlatter';
import MenuSection from './components/MenuSection';
import AlaCarteSection from './components/AlaCarteSection';
import LiveCraftVideoSection from './components/LiveCraftVideoSection';
import QualityFoodStorySection from './components/QualityFoodStorySection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState('Home');

  // Automatically scroll to the exact start of the page whenever activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-[#111111] text-[#111111] flex flex-col font-poppins selection:bg-[#F5B800] selection:text-[#111111]">
      {/* 1. Header Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'Contact' ? (
          <ContactPage setActivePage={setActivePage} />
        ) : activePage === 'About us' ? (
          <AboutPage setActivePage={setActivePage} />
        ) : (
          <>
            {/* 2. Hero Section */}
            <Hero setActivePage={setActivePage} />

            {/* 3. Circular Food Categories (EXPLORE OUR FLAVOURS) */}
            <CategoryCircles />

            {/* 4. Our Story Section (CELEBRATING 25 YEARS) */}
            <StoryMilestoneSection />

            {/* 5. Special Koyla Karahi Banner (CHEF'S SIGNATURE SPECIALITY) */}
            <PromoDealBanner />

            {/* 6. Special Balochi Sajji Banner (TRADITIONAL BALOCHI HERITAGE) */}
            <SajjiSpecialSection />

            {/* 7. Special Charcoal BBQ Platter Banner (PITMASTER'S CHARCOAL GRILL) */}
            <BbqSpecialSection />

            {/* 8. Signature Menu Section with Filters (AUTHENTIC FLAVOURS) */}
            <MenuSection />

            {/* 9. Traditional À La Carte Menu (Karahi, Handi, Pulao, BBQ, Sajji, Salad) */}
            <AlaCarteSection />

            {/* 10. Live Craft Video Section (Live Fire & Charcoal Craft) */}
            <LiveCraftVideoSection />

            {/* 11. Quality & Authentic Food Story (Overlapping Images Layout) */}
            <QualityFoodStorySection setActivePage={setActivePage} />

            {/* 9. Bestsellers Showcase (OUR BESTSELLERS) */}
            <BestsellersSection />

            {/* 10. Core Values Banner (ORIGINAL RECIPES / 100% QUALITY FOODS / FASTEST DELIVERY) */}
            <CoreValuesBanner />

            {/* 11. The Grand Kabab G Royal Sizzler Platter */}
            <SpecialPlatter />

            {/* 10. Customer Reviews & Testimonials */}
            <Testimonials />

            {/* 11. Table Reservation & Contact Us */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 13. Premium Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
