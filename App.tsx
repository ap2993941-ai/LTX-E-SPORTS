
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import LiveStats from './components/LiveStats';
import ScreenshotsSlider from './components/ScreenshotsSlider';
import WhyChooseUs from './components/WhyChooseUs';
import SecurityBadges from './components/SecurityBadges';
import ReviewsCarousel from './components/ReviewsCarousel';
import DownloadCTA from './components/DownloadCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { extraFeatures, advancedFeatures } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/10 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <FeaturesGrid title="APP FEATURES" features={extraFeatures} />
          <FeaturesGrid title="APPS EXTRA FEATURES" features={advancedFeatures} isPremium={true} />
          <LiveStats />
          <ScreenshotsSlider />
          <WhyChooseUs />
          <SecurityBadges />
          <ReviewsCarousel />
          <DownloadCTA />
          <FAQ />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
};

export default App;