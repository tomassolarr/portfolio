import React from "react";

const Footer = () => {
  return (
    <footer className="bg-opacity-0 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Sección de información */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold">Tomas Developer</h4>
            <p className="text-sm opacity-75">
              Desarrollador Web | React | WordPress | Tailwind
            </p>
          </div>

          {/* Navegación */}
          <div className="flex gap-6">
            <a href="#about" className="hover:text-color1 transition">
              Sobre mí
            </a>
            <a href="#my-skills" className="hover:text-color1 transition">
              Habilidades
            </a>
            <a href="#projects" className="hover:text-color1 transition">
              Proyectos
            </a>
            <a href="#contact" className="hover:text-color1 transition">
              Contacto
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-4">
            <a
              href="https://github.com/tomassolarr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-color1 transition"
            >
              <img
                src="/images/github-dark.svg" 
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://linkedin.com/in/tsolardev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-color1 transition"
            >
              <img
                src="/images/linkedin.svg" 
                alt="Linkedin"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* Nota de derechos reservados */}
        <div className="text-center mt-6 text-sm opacity-75">
          © {new Date().getFullYear()} Tomás Solar Developer. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
