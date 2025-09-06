import React from 'react';
import bvsLogo from '../../imagen/bvsLogo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <img 
          src={bvsLogo}
            alt="BVS Group Logo" 
            className="h-8 w-8"
          />
          <span className="font-playfair font-bold text-lg">BVS Group S.A.S</span>
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 BVS Group S.A.S. Todos los derechos reservados. | Excelencia gastronómica desde 2009
        </p>
      </div>
    </footer>
  );
};

export default Footer;