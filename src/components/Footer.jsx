import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = React.memo(() => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-white select-none cursor-default">
          Kicks<span className="text-indigo-600">Zone</span>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation" className="flex gap-8 text-gray-400 text-sm font-medium">
          <a href="#home" className="hover:text-white transition">Начало</a>
          <a href="#models" className="hover:text-white transition">Модели</a>
          <a href="#gallery" className="hover:text-white transition">Галерия</a>
          <a href="#contact" className="hover:text-white transition">Контакти</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-400 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KicksZone. Всички права запазени.
      </div>
    </footer>
  );
});

export default Footer;
