import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bvsLogo from '../imagen/bvsLogo.png';

const Header = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'restaurants', 'about', 'partners', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass-effect backdrop-blur-lg bg-white/80 border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img 
             src={bvsLogo}
              alt="BVS Group Logo" 
              className="h-12 w-12"
            />
            <span className="font-playfair font-bold text-2xl text-[var(--bvs-dark)]">BVS Group</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-10">
            {['restaurants', 'about', 'partners', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-sm font-medium tracking-wider uppercase text-gray-600 hover:text-[var(--bvs-dark)] transition-colors duration-300"
              >
                {section === 'restaurants' ? 'Restaurantes' :
                 section === 'about' ? 'Nosotros' :
                 section === 'partners' ? 'Socios' : 'Contacto'}
                {activeSection === section && (
                  <motion.div 
                    className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-[var(--bvs-dark)]"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;