import React, { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 'home', label: 'Начало' },
  { id: 'models', label: 'Модели' },
  { id: 'gallery', label: 'За нас' },
  { id: 'contact', label: 'Контакти' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollTimeout = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        const scrollPos = window.scrollY + window.innerHeight / 3;

        let current = 'home';
        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el && el.offsetTop <= scrollPos) {
            current = section.id;
          }
        }
        setActiveSection(current);
      }, 100); // debounce timeout 100ms
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set active on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold select-none cursor-pointer"
          onClick={closeMenu}
        >
          <span className="text-green-600">Bul</span>
<span className="bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">Shoes</span>

        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={closeMenu}
                className={`cursor-pointer transition-colors duration-300 ${
  activeSection === id
    ? 'text-green-600 font-semibold'
    : 'text-gray-700 hover:text-green-800'
}`}

              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out origin-top transform ${
          isOpen
            ? 'scale-y-100 opacity-100'
            : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 font-medium text-gray-700">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={closeMenu}
                className={`cursor-pointer transition-colors duration-300 ${
  activeSection === id
    ? 'text-green-600 font-semibold'
    : 'text-gray-700 hover:text-green-800'
}`}

              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
