import React from 'react';
import { FaYoutube, FaDiscord, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { logoUrl } from '../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaYoutube, href: 'https://www.youtube.com/@LTXESPORT', name: 'YouTube' },
    { icon: FaWhatsapp, href: 'https://whatsapp.com/channel/0029Vb6nyZH8qIznS0JGMB08', name: 'WhatsApp' },
    { icon: FaTelegram, href: 'https://t.me/LTXESPORTS', name: 'Telegram' },
    { icon: FaDiscord, href: 'https://discord.gg/5NsHWHkaq', name: 'Discord' },
  ];

  return (
    <footer className="bg-black/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <img src={logoUrl} alt="LTX E-SPORTS Logo" className="h-20 w-20 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-glow">LTX E-SPORTS</h3>
        <div className="flex justify-center items-center gap-6 my-6">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visit our ${link.name} page`}
              className="text-2xl hover:text-cyan-400 transition-colors duration-300"
            >
              <link.icon />
            </a>
          ))}
        </div>
        <p className="mb-2">Support Email: <a href="mailto:support@ltxesports.com" className="hover:text-cyan-400">support@ltxesports.com</a></p>
        <p className="text-sm">&copy; {new Date().getFullYear()} LTX E-SPORTS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;