import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Phone, Star, ChefHat, Wine, Utensils } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { Helmet } from 'react-helmet';
import bvsLogo from '../imagen/bvsLogo.png';

const RestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const restaurantData = {
    'casa-bellen': {
      name: 'Bella Vista',
      type: 'Cocina Mediterránea',
      description: 'Experiencia gastronómica refinada con vista panorámica de la ciudad. Nuestro chef ejecutivo combina técnicas tradicionales mediterráneas con ingredientes locales de la más alta calidad.',
      image: 'Elegant Mediterranean restaurant with panoramic city views and sophisticated dining room',
      specialty: 'Mariscos frescos y pasta artesanal',
      rating: 4.8,
      priceRange: '$$$',
      address: 'Carrera 13 #85-32, Zona Rosa, Bogotá',
      phone: '+57 (1) 234-5678',
      hours: 'Lun-Dom: 12:00 - 23:00',
      features: ['Vista panorámica', 'Terraza al aire libre', 'Bar de vinos', 'Eventos privados'],
      menu: [
        { category: 'Entradas', items: ['Carpaccio de atún', 'Bruschetta mediterránea', 'Tabla de quesos artesanales'] },
        { category: 'Platos principales', items: ['Paella valenciana', 'Salmón a la plancha', 'Risotto de mariscos'] },
        { category: 'Postres', items: ['Tiramisú clásico', 'Panna cotta', 'Gelato artesanal'] }
      ]
    },
    'la-martina': {
      name: 'Urban Grill',
      type: 'Parrilla Gourmet',
      description: 'Carnes premium en un ambiente urbano sofisticado. Especializados en cortes importados y técnicas de cocción que resaltan el sabor natural de cada pieza.',
      image: 'Modern upscale steakhouse with urban industrial design and open grill',
      specialty: 'Cortes premium y vinos selectos',
      rating: 4.9,
      priceRange: '$$$$',
      address: 'Calle 85 #12-15, Chapinero, Bogotá',
      phone: '+57 (1) 234-5679',
      hours: 'Mar-Sáb: 18:00 - 01:00',
      features: ['Parrilla a la vista', 'Cava de vinos', 'Ambiente urbano', 'Música en vivo'],
      menu: [
        { category: 'Carnes', items: ['Wagyu A5', 'Tomahawk steak', 'Cordero patagónico'] },
        { category: 'Acompañamientos', items: ['Papas trufadas', 'Vegetales asados', 'Ensalada César'] },
        { category: 'Vinos', items: ['Malbec reserva', 'Cabernet Sauvignon', 'Pinot Noir'] }
      ]
    },
    'vicente': {
      name: 'Garden Bistro',
      type: 'Cocina Contemporánea',
      description: 'Fusión de sabores en un ambiente natural único. Nuestro concepto farm-to-table garantiza ingredientes frescos y de temporada en cada plato.',
      image: 'Contemporary bistro with garden terrace, natural lighting and organic design',
      specialty: 'Cocina de autor con ingredientes orgánicos',
      rating: 4.7,
      priceRange: '$$$',
      address: 'Carrera 15 #93-47, Usaquén, Bogotá',
      phone: '+57 (1) 234-5680',
      hours: 'Lun-Dom: 11:00 - 22:00',
      features: ['Jardín interior', 'Ingredientes orgánicos', 'Menú estacional', 'Opciones veganas'],
      menu: [
        { category: 'Ensaladas', items: ['Bowl de quinoa', 'Ensalada de burrata', 'Mix de verdes orgánicos'] },
        { category: 'Principales', items: ['Salmón con quinoa', 'Pollo de corral', 'Pasta vegana'] },
        { category: 'Bebidas', items: ['Jugos naturales', 'Kombucha artesanal', 'Té de hierbas'] }
      ]
    }
  };

  const restaurant = restaurantData[id];

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bvs-cream)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--bvs-dark)] mb-4">Restaurante no encontrado</h1>
          <Button onClick={() => navigate('/')} className="bg-[var(--bvs-dark)] text-white">
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const handleReservation = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>{restaurant.name} - BVS Group</title>
        <meta name="description" content={`${restaurant.description} - ${restaurant.type} en BVS Group`} />
        <meta property="og:title" content={`${restaurant.name} - BVS Group`} />
        <meta property="og:description" content={restaurant.description} />
      </Helmet>

      <div className="min-h-screen bg-[var(--bvs-cream)]">
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full z-50 glass-effect backdrop-blur-md bg-white/90 border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-[var(--bvs-dark)] hover:bg-gray-100"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Volver</span>
              </Button>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={bvsLogo}
                  alt="BVS Group Logo" 
                  className="h-8 w-8"
                />
                <span className="font-playfair font-bold text-lg text-[var(--bvs-dark)]">BVS Group</span>
              </div>
            </div>
          </div>
        </motion.nav>

        <section className="relative h-[80vh] md:h-screen">
          <div className="absolute inset-0">
            <img   
              class="w-full h-full object-cover"
              alt={`${restaurant.name} restaurant interior and ambiance`}
              src="https://images.unsplash.com/photo-1470256699805-a29e1b58598a" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto px-4"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4">
                {restaurant.type}
              </span>
              
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow">
                {restaurant.name}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                {restaurant.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={handleReservation}
                  className="bg-white text-[var(--bvs-dark)] hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full hover-lift"
                >
                  Hacer Reserva
                </Button>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-bold">{restaurant.rating}</span>
                  <span className="text-white/80">({restaurant.priceRange})</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-playfair text-3xl font-bold text-[var(--bvs-dark)] mb-6">
                    Sobre {restaurant.name}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {restaurant.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <ChefHat className="h-6 w-6 text-[var(--bvs-dark)]" />
                      <span className="text-gray-700">{restaurant.specialty}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-6 w-6 text-yellow-500" />
                      <span className="text-gray-700">Calificación: {restaurant.rating}/5</span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-2xl font-bold text-[var(--bvs-dark)] mb-4">
                    Características Especiales
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {restaurant.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[var(--bvs-dark)] rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[var(--bvs-light-gray)] rounded-2xl p-6 sticky top-24"
                >
                  <h3 className="font-playfair text-xl font-bold text-[var(--bvs-dark)] mb-6">
                    Información de Contacto
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-[var(--bvs-dark)] mt-1" />
                      <div>
                        <p className="font-medium text-[var(--bvs-dark)]">Dirección</p>
                        <p className="text-gray-600 text-sm">{restaurant.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-[var(--bvs-dark)] mt-1" />
                      <div>
                        <p className="font-medium text-[var(--bvs-dark)]">Teléfono</p>
                        <p className="text-gray-600 text-sm">{restaurant.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-[var(--bvs-dark)] mt-1" />
                      <div>
                        <p className="font-medium text-[var(--bvs-dark)]">Horarios</p>
                        <p className="text-gray-600 text-sm">{restaurant.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleReservation}
                    className="w-full bg-[var(--bvs-dark)] hover:bg-gray-800 text-white rounded-full mb-4"
                  >
                    Reservar Mesa
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={handleReservation}
                    className="w-full border-[var(--bvs-dark)] text-[var(--bvs-dark)] hover:bg-[var(--bvs-dark)] hover:text-white rounded-full"
                  >
                    Ver Carta Completa
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--bvs-light-gray)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-playfair text-4xl font-bold text-[var(--bvs-dark)] mb-4">
                Selección del Menú
              </h2>
              <p className="text-xl text-gray-600">
                Una muestra de nuestras especialidades más destacadas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {restaurant.menu.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Utensils className="h-6 w-6 text-[var(--bvs-dark)]" />
                    <h3 className="font-playfair text-xl font-bold text-[var(--bvs-dark)]">
                      {section.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[var(--bvs-dark)] rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
              © 2025 BVS Group S.A.S. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RestaurantPage;