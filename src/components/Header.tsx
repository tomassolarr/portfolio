import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-auto px-6 py-2 mt-4 transition-all duration-300 rounded-3xl z-50 ${
        scrolled ? 'bg-color5 bg-opacity-60 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-center items-center">
        {/* Menú en desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-xl">
            <li><a href="#about" className="text-white hover:text-gray-300 font-medium">Inicio</a></li>
            <li><a href="#about" className="text-white hover:text-gray-300 font-medium">Sobre mí</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-300 font-medium">Proyectos</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300 font-medium">Contacto</a></li>
          </ul>
        </nav>
        
        {/* Icono de menú en mobile */}
        <div className="md:hidden flex justify-center w-full">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Menú desplegable en mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-auto bg-color5 bg-opacity-90 backdrop-blur-md p-4 flex flex-col items-center md:hidden">
          <ul className="space-y-6 text-xl text-center">
            <li><a href="#home" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#about" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
