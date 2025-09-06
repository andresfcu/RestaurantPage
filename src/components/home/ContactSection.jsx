import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';

const ContactSection = ({ onContactClick }) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación Principal',
      details: ['Zona Rosa, Bogotá', 'Carrera 13 #85-32', 'Colombia'],
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lunes - Jueves: 12:00 - 23:00', 'Viernes - Sábado: 12:00 - 01:00', 'Domingo: 12:00 - 22:00'],
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+57 (1) 234-5678', '+57 300 123 4567', 'Línea de reservas'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bvsgroup.com', 'reservas@bvsgroup.com', 'eventos@bvsgroup.com'],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[var(--bvs-dark)] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Información de Contacto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para atenderte. Contáctanos para reservas, 
            eventos especiales o cualquier consulta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <div className="text-gray-300">
                {item.details.map((line, i) => <p key={i} className="text-sm">{line}</p>)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button 
            onClick={onContactClick}
            className="bg-white text-[var(--bvs-dark)] hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-full hover-lift tracking-wider"
          >
            Hacer Reserva
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;