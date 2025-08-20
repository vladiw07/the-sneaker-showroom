import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = React.memo(() => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white select-none cursor-default tracking-tight">
          Bul<span className="text-green-500">Shoes</span>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation" className="flex gap-8 text-slate-400 text-sm font-medium">
          <a href="#home" className="hover:text-white transition-colors">Начало</a>
          <a href="#models" className="hover:text-white transition-colors">Модели</a>
          <a href="#gallery" className="hover:text-white transition-colors">Галерия</a>
          <a href="#contact" className="hover:text-white transition-colors">Контакти</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-slate-400 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-green-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-green-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-green-500 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-500 transition-colors"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} BulShoes. Всички права запазени.
      </div>
    </footer>
  );
});

export default Footer;
