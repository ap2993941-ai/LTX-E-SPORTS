
import React, { useState, useEffect } from 'react';
import { reviews } from '../constants';
import { FaStar } from 'react-icons/fa';

const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow uppercase">Player Reviews</h2>
        <div className="relative h-64 w-full max-w-3xl mx-auto overflow-hidden">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <div className="p-1 rounded-lg bg-gradient-to-r from-cyan-600/50 via-transparent to-cyan-600/50 h-full">
                <div className="bg-slate-900 p-8 rounded-lg h-full flex flex-col justify-between">
                  <p className="text-gray-300 italic">"{review.comment}"</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-white">{review.name}</p>
                      <p className="text-sm text-cyan-400">{review.username}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
