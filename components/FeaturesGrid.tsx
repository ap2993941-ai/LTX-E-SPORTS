import React from 'react';
import type { Feature } from '../types';

interface FeaturesGridProps {
  title: string;
  features: Feature[];
  isPremium?: boolean;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ title, features, isPremium = false }) => {
  const cardBaseClasses = "bg-slate-900/50 border border-cyan-400/20 p-6 rounded-lg text-center transition-all duration-300";
  const premiumCardClasses = "animated-border before:bg-conic-gradient-premium shadow-lg shadow-cyan-500/20";
  
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow uppercase">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${cardBaseClasses} ${isPremium ? 'hover:scale-105 hover:border-cyan-400' : 'hover:bg-slate-800/70 hover:-translate-y-2'}`}
            >
              <div className={`mx-auto mb-4 flex items-center justify-center h-16 w-16 rounded-full ${isPremium ? 'bg-cyan-500/10' : 'bg-slate-800'}`}>
                <feature.icon className={`h-8 w-8 ${isPremium ? 'text-cyan-400 text-glow' : 'text-cyan-500'}`} />
              </div>
              <h3 className="font-semibold text-sm sm:text-base">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;