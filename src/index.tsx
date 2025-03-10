import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import "@fontsource-variable/onest"; 

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        <Header />
        <main>
          <Presentacion />
          <Projects />
          <Skills />
          <ContactForm />
          <Footer />
        </main>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
