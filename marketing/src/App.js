import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};
