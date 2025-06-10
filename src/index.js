import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
AOS.init({
  duration: 1000,
  once: true,
});
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
