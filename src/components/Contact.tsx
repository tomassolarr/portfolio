import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpwpzwvd");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="bg-opacity-0 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Contacto</h2>
      <div className="max-w-lg mx-auto bg-color4 p-8 rounded-3xl shadow-2xl">
        <form onSubmit={handleFormSubmit} className="space-y-4">
        {state.succeeded && (
          <p className="text-white text-center text-lg">¡Mensaje enviado con éxito!</p>
        )}
          
          {/* Nombre */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name} 
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-color5 border border-white focus:outline-none focus:ring-2 focus:ring-color2"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email} 
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-color5 border border-white focus:outline-none focus:ring-2 focus:ring-color2"
              placeholder="Ingresa tu email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-color5 border border-white focus:outline-none focus:ring-2 focus:ring-color2"
              placeholder="Escribe tu mensaje..."
              rows={4}
              required
            ></textarea>
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-20 px-4 py-2 bg-color5 text-white rounded-3xl shadow-md hover:bg-color2 transition-all mx-auto block">
            Enviar
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
