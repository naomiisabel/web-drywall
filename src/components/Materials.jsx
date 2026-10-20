function Materials() {
  const materials = [
    {
      name: "Placas de Drywall",
      description: "Placas para muros, divisiones y cielos rasos."
    },
    {
      name: "Parantes metálicos",
      description: "Perfiles para estructuras de drywall."
    },
    {
      name: "Rieles metálicos",
      description: "Elementos estructurales para sistemas de drywall."
    },
    {
      name: "Masilla para juntas",
      description: "Ideal para obtener acabados uniformes."
    },
    {
      name: "Cinta para juntas",
      description: "Para reforzar y dar acabado a las uniones."
    },
    {
      name: "Accesorios",
      description: "Tornillos, esquineros y accesorios para instalación."
    }
  ];

  return (
    <section id="materiales" className="section materials-section">

      <p className="section-subtitle">
        NUESTROS PRODUCTOS
      </p>

      <h2>
        Materiales para drywall
      </h2>

      <div className="materials-grid">

        {materials.map((material, index) => (

          <div className="material-card" key={index}>

            <div className="material-icon">
              🧱
            </div>

            <div>
              <h3>
                {material.name}
              </h3>

              <p>
                {material.description}
              </p>
            </div>

            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noreferrer"
              className="material-button"
            >
              Consultar
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Materials;