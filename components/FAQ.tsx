
import React, { useState } from 'react';
import { faqItems } from '../constants';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow uppercase">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-cyan-400/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 bg-slate-900/50 hover:bg-slate-800/70 transition-colors"
              >
                <span className="font-semibold text-lg">{item.question}</span>
                {openIndex === index ? <FaChevronUp className="text-cyan-400" /> : <FaChevronDown className="text-cyan-400" />}
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 bg-slate-900 text-gray-300">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
