import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = ({ partners }) => {
  return (
    <section id="partners" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--bvs-cream)] mb-6">
            Nuestro Equipo Directivo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Líderes apasionados con amplia experiencia en el sector gastronómico 
            y hospitalario, comprometidos con la excelencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
            >
              <div className="h-80 bg-gray-100 overflow-hidden">
                <img 
                  class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  alt={`${partner.name} - ${partner.role}`}
                 src="https://images.unsplash.com/photo-1575383596664-30f4489f9786" />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="font-playfair text-xl font-bold text-[var(--bvs-dark)] mb-2">
                  {partner.name}
                </h3>
                <p className="text-[var(--bvs-dark)] font-medium mb-2">{partner.role}</p>
                <p className="text-gray-600 text-sm">{partner.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;