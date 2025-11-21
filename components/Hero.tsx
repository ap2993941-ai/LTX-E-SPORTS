import React from 'react';
import { FaShieldAlt, FaMobileAlt, FaBolt } from 'react-icons/fa';
import { logoUrl, downloadUrl } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-20 -left-40 w-96 h-96 border-4 border-cyan-500/30 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -right-40 w-[500px] h-[500px] border-4 border-blue-700/30 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-glow">
          LTX E-SPORTS
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-cyan-400 font-light text-glow">
          Next-Gen Tournament Platform
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-cyan-400/20">
            <FaBolt className="text-cyan-400" />
            <span className="text-xs sm:text-sm font-semibold">Instant Payouts</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-cyan-400/20">
            <FaShieldAlt className="text-cyan-400" />
            <span className="text-xs sm:text-sm font-semibold">Anti-Cheat System</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-cyan-400/20">
            <FaMobileAlt className="text-cyan-400" />
            <span className="text-xs sm:text-sm font-semibold">Mobile-Only Tournaments</span>
          </div>
        </div>

        <div className="mt-10 relative">
          <img 
            src={logoUrl}
            alt="LTX E-SPORTS App Logo"
            className="inline-block h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full border-2 border-cyan-400/50 neon-glow object-contain"
          />
        </div>
        
        <div className="mt-10 flex justify-center">
          <a href={downloadUrl} className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-black font-bold uppercase rounded-md btn-glow text-lg">
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;