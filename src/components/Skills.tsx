import React from "react";
import { TAGS } from "./Tags";

const skills = [
  TAGS.WORDPRESS,
  TAGS.PHP,
  TAGS.REACT,
  TAGS.JS,
  TAGS.HTML,
  TAGS.CSS,
  TAGS.PYTHON,
  TAGS.DJANGO,
  TAGS.TAILWIND,
  TAGS.BOOTSTRAP,
];

const Skills = () => {
  return (
    <section id="my-skills" className="py-10 px-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Habilidades</h2>
      <div className="relative p-4 bg-opacity-100 border-4 border-color5 rounded-3xl shadow-lg">
        {/* Contenedor principal con los íconos */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4 place-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className={`p-3 rounded-full ${skill.class}`}>{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
