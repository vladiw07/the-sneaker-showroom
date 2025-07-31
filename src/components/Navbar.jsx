import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
       <a
  href="#"
  className="text-2xl font-bold text-gray-900 select-none cursor-pointer"
>
  <span className="text-black">Kicks</span>
  <span className="text-indigo-600">Zone</span>
</a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">Начало</li>
          <li className="hover:text-black cursor-pointer">Модели</li>
          <li className="hover:text-black cursor-pointer">Галерия</li>
          <li className="hover:text-black cursor-pointer">Контакти</li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out origin-top transform ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">Начало</li>
          <li className="hover:text-black cursor-pointer">Модели</li>
          <li className="hover:text-black cursor-pointer">Галерия</li>
          <li className="hover:text-black cursor-pointer">Контакти</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
