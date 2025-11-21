
import React, { useState, useEffect, useCallback } from 'react';
import { screenshots } from '../constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ScreenshotsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1));
  };
  
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [nextSlide]);

  return (
    <section id="screenshots" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow uppercase">SCREENSHOTS</h2>
        <div className="relative h-[650px] w-full max-w-sm mx-auto">
          <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-10 p-3 bg-white/10 rounded-full text-cyan-400 hover:bg-cyan-400/20 transition-all">
            <FaChevronLeft size={24} />
          </button>
          <div className="relative w-full h-full overflow-hidden">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              >
                <div className="w-full h-full p-4 bg-black rounded-[40px] border-2 border-cyan-500/30 neon-glow">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover rounded-[30px]"
                  />
                </div>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 z-10 p-3 bg-white/10 rounded-full text-cyan-400 hover:bg-cyan-400/20 transition-all">
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSlider;