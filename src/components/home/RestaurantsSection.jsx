import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { ChefHat } from 'lucide-react';

const RestaurantsSection = ({ restaurants, onRestaurantClick }) => {
  return (
    <section id="restaurants" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--bvs-cream)] mb-6">
            Nuestros Restaurantes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada uno de nuestros establecimientos ofrece una experiencia única, 
            combinando tradición culinaria con innovación gastronómica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer group"
              onClick={() => onRestaurantClick(restaurant.id)}
            >
              <div className="h-72 bg-gray-100 relative overflow-hidden">
                <img 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={`${restaurant.name} restaurant interior`}
                 src={restaurant.imagPath} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-[var(--bvs-dark)]">{restaurant.type}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-[var(--bvs-dark)] mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-4 h-12">{restaurant.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <ChefHat className="h-4 w-4 mr-2" />
                  {restaurant.specialty}
                </div>
                <Button 
                  className="w-full bg-[var(--bvs-dark)] hover:bg-gray-800 text-white rounded-full py-3"
                >
                  Descubrir
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;