function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Instalación de Drywall",
      description:
        "Instalación profesional de muros, divisiones y estructuras en drywall."
    },
    {
      icon: "🔨",
      title: "Cielos rasos",
      description:
        "Diseño e instalación de cielos rasos para hogares, oficinas y negocios."
    },
    {
      icon: "🎨",
      title: "Acabados",
      description:
        "Masillado, lijado, pintura y acabados para obtener superficies profesionales."
    },
    {
      icon: "🧱",
      title: "Venta de materiales",
      description:
        "Materiales y accesorios para realizar tus proyectos de drywall."
    }
  ];

  return (
    <section id="servicios" className="section">

      <p className="section-subtitle">
        LO QUE HACEMOS
      </p>

      <h2>
        Nuestros servicios
      </h2>

      <div className="services">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;