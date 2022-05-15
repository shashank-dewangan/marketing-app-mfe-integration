import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

const mount = (element) => {
  const root = ReactDom.createRoot(element);
  root.render(<App />);
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#root');
  if (element) mount(element);
}
