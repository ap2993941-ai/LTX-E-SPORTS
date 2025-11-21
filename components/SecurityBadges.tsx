
import React from 'react';
import { FaShieldAlt, FaLock, FaUserCheck } from 'react-icons/fa';

const badges = [
  { icon: FaUserCheck, text: 'Verified Platform' },
  { icon: FaLock, text: 'Secure Payment Gateway' },
  { icon: FaShieldAlt, text: 'Anti-Cheat Protected' },
];

const SecurityBadges: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-400/20 hologram-effect"
            >
              <badge.icon className="text-4xl text-cyan-400 text-glow"/>
              <span className="text-lg font-semibold uppercase tracking-wider">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityBadges;
