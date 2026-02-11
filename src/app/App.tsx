import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FaktaPage } from './pages/FaktaPage';
import { TurismePage } from './pages/TurismePage';
import { SprakPage } from './pages/SprakPage';
import { GeografiPage } from './pages/GeografiPage';
import { KulturPage } from './pages/KulturPage';
import { TradisjonerPage } from './pages/TradisjonerPage';
import { BaerekraftigPage } from './pages/BaerekraftigPage';
import { MatkulturPage } from './pages/MatkulturPage';
import { KilderPage } from './pages/KilderPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fakta-om-usa" element={<FaktaPage />} />
        <Route path="/turisme" element={<TurismePage />} />
        <Route path="/sprak" element={<SprakPage />} />
        <Route path="/geografi" element={<GeografiPage />} />
        <Route path="/kultur" element={<KulturPage />} />
        <Route path="/tradisjoner" element={<TradisjonerPage />} />
        <Route path="/baerekraftig-utvikling" element={<BaerekraftigPage />} />
        <Route path="/matkultur" element={<MatkulturPage />} />
        <Route path="/kilder" element={<KilderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}