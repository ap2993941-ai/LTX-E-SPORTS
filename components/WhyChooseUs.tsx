import React from 'react';
import { FaEye, FaTrophy, FaCog } from 'react-icons/fa';

const pillars = [
  {
    icon: FaEye,
    title: '100% Transparency',
    description: 'Fair matchmaking, clear rules, and transparent prize distribution. What you see is what you get.'
  },
  {
    icon: FaTrophy,
    title: 'Instant Rewards',
    description: 'Win and get your prize money credited to your secure wallet instantly. No delays, no excuses.'
  },
  {
    icon: FaCog,
    title: 'Pro-Level System',
    description: 'Built by gamers, for gamers. Experience a professional-grade tournament system on your mobile.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow uppercase">Why Choose LTX E-SPORTS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="p-1 rounded-lg bg-gradient-to-br from-cyan-500/50 to-blue-600/50 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">
                <div className="bg-slate-900 p-8 rounded-lg h-full">
                    <pillar.icon className="text-4xl text-cyan-400 mb-4 text-glow" />
                    <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                    <p className="text-gray-400">{pillar.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;