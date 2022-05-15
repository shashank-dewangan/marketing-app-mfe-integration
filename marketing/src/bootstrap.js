import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const mount = (element) => {
  const root = ReactDOM.createRoot(element);
  root.render(
    <div>
      <h1>React app</h1>
      <App />
    </div>
  );
};

if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#dev-marketing');
  if (root) mount(root);
}
