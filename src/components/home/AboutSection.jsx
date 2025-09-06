import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-[var(--bvs-dark)] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              BVS Group S.A.S nació de la pasión por crear experiencias gastronómicas 
              excepcionales. Desde nuestros inicios, hemos mantenido un compromiso 
              inquebrantable con la calidad, la innovación y el servicio excepcional.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestro grupo empresarial se ha consolidado como referente en el sector 
              gastronómico, ofreciendo conceptos únicos que combinan tradición culinaria 
              con las últimas tendencias gastronómicas internacionales.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, value: '15+', label: 'Años de experiencia' },
                { icon: Star, value: '3', label: 'Restaurantes exclusivos' },
                { icon: Users, value: '50+', label: 'Colaboradores' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <p className="font-bold text-2xl text-[var(--bvs-dream)]">{item.value}</p>
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img 
                class="w-full h-80 object-cover rounded-xl mb-6"
                alt="BVS Group team and restaurant ambiance"
               src="https://images.unsplash.com/photo-1570890178293-32c6736fa013" />
              <h3 className="font-playfair text-2xl font-bold text-[var(--bvs-dark)] mb-4">
                Misión & Visión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Crear experiencias gastronómicas memorables que superen las expectativas 
                de nuestros huéspedes, manteniendo los más altos estándares de calidad 
                y servicio en cada uno de nuestros establecimientos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;