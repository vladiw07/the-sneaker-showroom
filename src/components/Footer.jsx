import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-white select-none cursor-default">
          Kicks<span className="text-indigo-600">Zone</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 text-gray-400 text-sm font-medium">
          <a href="#" className="hover:text-white transition">Начало</a>
          <a href="#" className="hover:text-white transition">Модели</a>
          <a href="#" className="hover:text-white transition">Галерия</a>
          <a href="#" className="hover:text-white transition">Контакти</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-400 text-lg">
          <a href="#" aria-label="Facebook" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KicksZone. Всички права запазени.
      </div>
    </footer>
  );
}

export default Footer;
