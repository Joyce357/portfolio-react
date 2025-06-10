import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-cream bg-opacity-95 backdrop-blur shadow-md fixed w-full top-0 z-50 border-b border-[#D4C4B0]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-espresso font-serif">
          <img src="/images/logo.png" alt="Joy Christopher" className="h-12" />
        </Link>
        <ul className="flex gap-8 text-mocha font-medium text-lg">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-espresso font-bold" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-espresso font-bold" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-espresso font-bold" : ""}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-espresso font-bold" : ""}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
