// ✅ All imports first
import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ✅ AOS CSS here
import App from './App';
import './index.css'; // ✅ Tailwind and AOS CSS (again, optional)

AOS.init({
  duration: 1000,
  once: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
