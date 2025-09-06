import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/ui/use-toast';
import { ChevronDown } from 'lucide-react';

import RestaurantsSection from '../components/home/RestaurantsSection';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PartnersSection from '../components/home/PartnersSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/layout/Footer';
import bvsLogo from '../imagen/bvsLogo.png';
import bvsBelen from '../imagen/casa_belen.jpg';
import bvsVicen from '../imagen/vicente.jpg';
import bvsMartina from '../imagen/laMartina.jpg';

const HomePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate logo based on the hero section scroll progress
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, isMobile ? 0.25 : 0.15]);
  const logoX = useTransform(scrollYProgress, [0.5, 1], ['50%', isMobile ? '15%' : '8%']);
  const logoY = useTransform(scrollYProgress, [0.5, 1], ['50%', isMobile ? '5%' : '5%']);
  const logoTranslateX = useTransform(scrollYProgress, [0.5, 1], ['-50%', '-50%']);
  const logoTranslateY = useTransform(scrollYProgress, [0.5, 1], ['-47%', '-47%']);
  
  // Fade out hero text and background overlay
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.7, 1], [0.5, 0]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navH =
      parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue("--navbar-h")) || 64;

    const y = el.getBoundingClientRect().top + window.scrollY - navH - 8; // 8px de aire
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  const handleRestaurantClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje 🚀"
    });
  };

  const restaurants = [
    {
      id: 'casa-bellen',
      name: 'Casa Belén',
      type: 'Cocina Mediterránea',
      description: 'Experiencia gastronómica refinada con vista panorámica',
      image: 'Elegant Mediterranean restaurant with panoramic city views',
      specialty: 'Mariscos frescos y pasta artesanal',
      imagPath:bvsBelen
    },
    {
      id: 'la-martina',
      name: 'La Martina',
      type: 'Parrilla Gourmet',
      description: 'Carnes premium en ambiente urbano sofisticado',
      image: 'Modern upscale steakhouse with urban industrial design',
      specialty: 'Cortes premium y vinos selectos',
       imagPath:bvsMartina
    },
    {
      id: 'vicente',
      name: 'Vicente',
      type: 'Cocina Contemporánea',
      description: 'Fusión de sabores en un ambiente natural',
      image: 'Contemporary bistro with garden terrace and natural lighting',
      specialty: 'Cocina de autor con ingredientes orgánicos',
       imagPath:bvsVicen
    }
  ];

  const partners = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO & Fundador',
      experience: '15 años en gastronomía',
      image: 'Professional executive chef in elegant restaurant setting'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Directora Culinaria',
      experience: 'Chef internacional',
      image: 'Female culinary director in modern kitchen environment'
    },
    {
      name: 'Miguel Santos',
      role: 'Director de Operaciones',
      experience: 'Experto en hospitalidad',
      image: 'Restaurant operations manager in upscale dining room'
    }
  ];

  return (
    <div className="bg-[var(--bvs-cream)]">
 
      
      <main className="relative z-10 bg-[var(--bvs-cream)]">
        <HeroSection scrollToSection={scrollToSection} />
        <RestaurantsSection restaurants={restaurants} onRestaurantClick={handleRestaurantClick} />
        <AboutSection />
        <PartnersSection partners={partners} />
        <ContactSection onContactClick={handleContactClick} />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;