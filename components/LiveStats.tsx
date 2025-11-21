
import React, { useState, useEffect, useRef } from 'react';

// A simple CountUp component to avoid external dependencies
const CountUp: React.FC<{ end: number, duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let start = 0;
    const endValue = end;
    const increment = endValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const LiveStats: React.FC = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const stats = [
        { label: 'Total Downloads', value: 1250000 },
        { label: 'Total Players', value: 850000 },
        { label: 'Matches Hosted Today', value: 15000 },
        { label: 'Prize Money Distributed', value: 5000000 },
    ];

    return (
        <section className="py-20 sm:py-28 bg-black/20">
            <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 text-glow">
                                {inView ? <CountUp end={stat.value} /> : '0'}{stat.label.includes('Money') ? '' : '+'}
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-gray-400 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiveStats;
