import React, { useState } from "react";
import { TAGS } from "./Tags";


const projects = [
  {
    id: 1,
    title: "Acústica Music",
    category: "WordPress",
    description: "Tienda eCommerce de instrumentos musicales, aprovechando WordPress como CMS para la gestión de ventas, pedidos y contenido.",
    image: "/images/acustica.png",
    tech: [TAGS.JS, TAGS.CSS, TAGS.HTML, TAGS.PHP, TAGS.WORDPRESS],
    links: {
      code: "https://acusticamusic.cl/",
    },
  },
  {
    id: 2,
    title: "Ignifor",
    category: "WordPress",
    description: "Página web para la promoción de servicios de instalación y mantención de calefont",
    image: "/images/ignifor.png",
    tech: [TAGS.JS, TAGS.CSS, TAGS.HTML, TAGS.PHP, TAGS.WORDPRESS],
    links: {
      code: "https://ignifor.cl",
    },
  },
  {
    id: 3,
    title: "Psicología",
    category: "Vanilla",
    description: "Perfil profesiona de psicología",
    image: "/images/psico.png",
    tech: [TAGS.JS, TAGS.CSS, TAGS.HTML],
    links: {
      code: "https://example.com/demo-blog",
    },
  },
  {
    id: 4,
    title: "En Progreso",
    category: "Otros",
    description: "2 proximos proyectos muy pronto.",
    image: "/images/soon.png",
    tech: [TAGS.REACT, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    links: {
      code: "https://example.com/demo-blog",
    },
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-opacity-0 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Proyectos</h2>

      {/* Filtros por categoría */}
      <div className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap">
        {["Todos", "Vanilla", "WordPress", "Otros"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === category
                ? "bg-color2 text-white text-xl"
                : "bg-color5 text-gray-200 hover:bg-color2 text-xl"
            } transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Proyectos filtrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
            <div
            key={project.id}
            className="relative group overflow-hidden rounded-3xl shadow-lg w-full aspect-square transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
            {/* Imagen del proyecto */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:opacity-70 group-hover:blur-sm transition-all duration-300 rounded-3xl"
            />

            {/* Slider de información */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-color5 bg-opacity-90 p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-md ${tech.class} rounded-3xl flex items-center gap-1`}
                  >
                    {tech.icon} 
                  
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex gap-4">
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-color2 text-white px-5 py-2 rounded-3xl hover:bg-color4 transition"
                  >
                    Ver Más
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
