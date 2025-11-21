import React from 'react';
import { downloadUrl } from '../constants';

const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-cyan-900/30 to-[#050816]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-glow uppercase">
          Join The Battle
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          Download the LTX E-SPORTS app now and start competing in the most exciting mobile tournaments.
        </p>
        <div className="mt-10 flex justify-center">
          <a href={downloadUrl} className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-black font-bold uppercase rounded-md btn-glow text-lg">
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;