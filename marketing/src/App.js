import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  );
};
