import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-espresso to-[#5D4037] text-cream text-center py-6 mt-16 border-t-4 border-[#D4C4B0]">
      <p className="opacity-90 font-serif text-sm">
        &copy; {new Date().getFullYear()} Joy Christopher. Crafted with passion and attention to detail.
      </p>
    </footer>
  );
};

export default Footer;
