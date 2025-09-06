import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '../src/pages/HomePage';
import RestaurantPage from '../src/pages/RestaurantPage';

function App() {
  return (
    <>
      <Helmet>
        <title>BVS Group - Excelencia Gastronómica</title>
        <meta name="description" content="BVS Group S.A.S - Grupo empresarial líder en el sector gastronómico con múltiples restaurantes de alta calidad y experiencias culinarias excepcionales." />
        <meta property="og:title" content="BVS Group - Excelencia Gastronómica" />
        <meta property="og:description" content="Descubre nuestros restaurantes exclusivos y vive experiencias gastronómicas únicas con BVS Group S.A.S" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </>
  );
}

export default App;