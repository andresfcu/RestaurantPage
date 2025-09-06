import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "../../components/ui/button";
import bvsLogo from "../../imagen/bvsLogo.png";
import heroMp4 from "../../video/CASA _Belen2.mp4";


/* Opcional: define en CSS global
:root { --navbar-h: 64px; --logo-dock-left: 24px; }
*/
const HeroSection = ({
  scrollToSection,
  navbarHeight,        // px (opcional) → si no, lee --navbar-h o 64
  dockLeft = 24,       // px desde el borde izquierdo
  dockAt = 0.92,       // progreso (0–1) donde termina de acoplarse
}) => {
  const heroRef = useRef(null);

  // Altura navbar (prop -> CSS var -> fallback)
  const [navH, setNavH] = useState(() => {
    if (typeof window === "undefined") return navbarHeight ?? 64;
    if (navbarHeight) return navbarHeight;
    const cssVar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--navbar-h")) || 0;
    return cssVar || 64;
  });
  const [dockLeftPx, setDockLeftPx] = useState(() => {
    if (typeof window === "undefined") return dockLeft;
    const cssVar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--logo-dock-left")) || 0;
    return cssVar || dockLeft;
  });

  // Tamaño de viewport para centrar el logo al inicio
  const [vwvh, setVwvh] = useState({ vw: 0, vh: 0 });
  useEffect(() => {
    const readVars = () => {
      if (navbarHeight) setNavH(navbarHeight);
      else {
        const cssH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--navbar-h")) || 0;
        setNavH(cssH || 64);
      }
      const cssDock = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--logo-dock-left")) || 0;
      setDockLeftPx(cssDock || dockLeft);
      setVwvh({ vw: window.innerWidth, vh: window.innerHeight });
    };
    readVars();
    window.addEventListener("resize", readVars);
    return () => window.removeEventListener("resize", readVars);
  }, [navbarHeight, dockLeft]);

  const center = useMemo(() => ({ x: vwvh.vw / 2, y: vwvh.vh / 2 }), [vwvh]);

  // Progreso de scroll SOLO del héroe
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // ---------- Parallax del fondo y texto ----------
  const bgY       = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.12, 0.6]);
  const textY     = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textAlpha = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // ---------- Logo con parallax (NO fixed) + dock al navbar ----------
  const t = useTransform(scrollYProgress, [0, dockAt], [0, 1], { clamp: true });
  const logoLift = useTransform(t, [0, 1], [0, -120]); // parallax propio del logo

  // Centrando al inicio
  const xStart = `${center.x}px`;
  const yStart = `${center.y}px`;

  // Destino: alineado al navbar (izquierda y centrado verticalmente en el alto del navbar)
  const xEnd   = `${dockLeftPx}px`;
  const yEnd   = `${navH / 2}px`;

  // Interpolaciones
  const xRaw  = useTransform(t, [0, 0.6, 1], [xStart, xStart, xEnd]);
  const yRaw  = useTransform(t, [0, 1], [yStart, yEnd]);
  const txRaw = useTransform(t, [0, 0.6, 1], ["-50%", "-50%", "0%"]); // -50% → 0% al final

  const spring = { stiffness: 700, damping: 60, mass: 0.9 };
  const x  = useSpring(xRaw, spring);
  const y  = useSpring(yRaw, spring);
  const tX = useSpring(txRaw, spring);

  return (
    <section ref={heroRef} id="home" className="relative min-h-[160svh]">
      {/* Contenedor STICKY del héroe */}
      <div className="sticky top-0 min-h-[100svh]">
        {/* Fondo parallax */}
        <motion.div style={{ y: bgY, willChange: "transform" }} className="absolute inset-0">
          <motion.video
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    // Autoplay en móviles requiere muted + playsInline
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/media/hero-poster.jpg" // opcional: imagen de respaldo mientras carga
    aria-hidden="true"
  >
    {/* Usa ambas fuentes si las tienes */}

  <source src={heroMp4}  type="video/mp4" />
    {/* Fallback de texto por accesibilidad */}
    Tu navegador no soporta video HTML5.
  </motion.video>
          <motion.div className="absolute inset-0 bg-black" style={{ opacity: bgOpacity }} />
        </motion.div>



        {/* Contenido */}
       <motion.div
  className="relative z-10 flex min-h-[100svh] items-center justify-center text-center px-4"
  style={{ y: textY, opacity: textAlpha }}
>
  <div className="space-y-8 max-w-4xl flex flex-col items-center">
    <motion.img
      src={bvsLogo}
      alt="BVS Group Logo"
      className="h-auto select-none mb-6"
      style={{ width: "min(10vw, 120px)" }}
    />
    <h1 className="font-playfair text-5xl md:text-8xl font-bold gradient-text text-shadow">
      BVS Group
    </h1>

    <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto">
      Excelencia gastronómica que trasciende expectativas
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
      <Button
        onClick={() => scrollToSection?.("restaurants")}
        className="bg-[var(--bvs-dark)] hover:bg-gray-800 text-white px-10 py-6 text-lg font-semibold rounded-full hover-lift tracking-wider"
      >
        Nuestros Restaurantes
      </Button>
      <Button

        onClick={() => scrollToSection?.("about")}
        className="bg-[var(--bvs-dark)] hover:bg-gray-800 text-white px-10 py-6 text-lg font-semibold rounded-full hover-lift tracking-wider"
      >
        Conocer Más
      </Button>
    </div>
  </div>
</motion.div>
      </div>

      {/* Padding para que exista scroll tras el héroe */}
      <div className="min-h-[60svh] bg-white" />
      
    </section>
  );
};

export default HeroSection;
