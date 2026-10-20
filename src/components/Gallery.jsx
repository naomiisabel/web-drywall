function Gallery() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      title: "Cielo raso moderno",
      category: "Cielos rasos"
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      title: "Diseño interior",
      category: "Acabados"
    },
    {
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      title: "Divisiones interiores",
      category: "Drywall"
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      title: "Acabado residencial",
      category: "Acabados"
    }
  ];

  return (
    <section id="galeria" className="gallery-section">

      <div className="gallery-header">

        <p className="section-subtitle">
          NUESTROS TRABAJOS
        </p>

        <h2>
          Proyectos realizados
        </h2>

        <p>
          Conoce algunos de nuestros trabajos y descubre
          las posibilidades que podemos crear para tu espacio.
        </p>

      </div>


      <div className="gallery-grid">

        {projects.map((project, index) => (

          <div className="gallery-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="gallery-overlay">

              <span>
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

            </div>

          </div>

        ))}

      </div>


      <div className="gallery-button">

        <a
          href="https://wa.me/51999999999"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Quiero un proyecto similar
        </a>

      </div>

    </section>
  );
}

export default Gallery;