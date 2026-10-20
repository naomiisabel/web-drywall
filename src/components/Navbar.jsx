import company from "../company";


function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
      {company.shortName}
      </div>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#materiales">Materiales</a>
        <a href="#galeria">Galería</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a
        className="btn-whatsapp"
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

    </header>
  );
}

export default Navbar;