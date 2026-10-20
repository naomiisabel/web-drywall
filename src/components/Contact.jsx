import { useState } from "react";
import company from "../company";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = company.whatsapp;

    const text = `
Hola, estoy interesado(a) en solicitar una cotización.

Nombre: ${formData.nombre}

Teléfono: ${formData.telefono}

Servicio: ${formData.servicio}

Detalle del proyecto:
${formData.mensaje}
    `;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contacto" className="contact-section">

      <div className="contact-container">

        <div className="contact-info">

          <p className="section-subtitle">
            COTIZA TU PROYECTO
          </p>

          <h2>
            Cuéntanos qué necesitas
          </h2>

          <p>
            Completa el formulario y envíanos los detalles
            de tu proyecto. Te atenderemos por WhatsApp.
          </p>

          <div className="contact-item">
            <strong>📱 WhatsApp</strong>
            <span>{company.phone}</span>
          </div>

          <div className="contact-item">
            <strong>📍 Ubicación</strong>
            <span>{company.location}</span>
          </div>

          <div className="contact-item">
            <strong>🕐 Atención</strong>
            <span>{company.schedule}</span>
          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>
              Nombre completo
            </label>

            <input
              type="text"
              name="nombre"
              placeholder="Escribe tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Teléfono
            </label>

            <input
              type="tel"
              name="telefono"
              placeholder="Ej. 987654321"
              value={formData.telefono}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Servicio
            </label>

            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
            >

              <option value="">
                Selecciona un servicio
              </option>

              <option value="Instalación de drywall">
                Instalación de drywall
              </option>

              <option value="Cielos rasos">
                Cielos rasos
              </option>

              <option value="Acabados">
                Acabados
              </option>

              <option value="Venta de materiales">
                Venta de materiales
              </option>

              <option value="Otro proyecto">
                Otro proyecto
              </option>

            </select>

          </div>


          <div className="form-group">

            <label>
              Cuéntanos sobre tu proyecto
            </label>

            <textarea
              name="mensaje"
              placeholder="Ej. Necesito instalar drywall en una habitación de aproximadamente 20 m²."
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />

          </div>


          <button
            type="submit"
            className="form-button"
          >
            Solicitar cotización por WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;