import "./App.css";
import company from "./company";


import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Materials from "./components/Materials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Navbar />

      {/* INICIO */}
      <section id="inicio" className="hero">

        <div className="hero-content">

          <p className="subtitle">
            SOLUCIONES PROFESIONALES EN DRYWALL
          </p>

          <h1>
            {company.slogan}
          </h1>

          <p className="description">
            {company.description}
          </p>

          <div className="hero-buttons">

            <a
              href="#contacto"
              className="btn-primary"
            >
              Solicitar cotización
            </a>

            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Hablar por WhatsApp
            </a>

          </div>

        </div>

      </section>


      {/* SERVICIOS */}
      <Services />


      {/* MATERIALES */}
      <Materials />

      {/* GALERIA */}
      <Gallery />


      {/* CONTACTO */}
      <Contact />

      


      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-floating"
      >
        💬
      </a>


      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Drywall Pro Perú.
          Todos los derechos reservados.
        </p>

      </footer>

    </>
  );
}

export default App;
