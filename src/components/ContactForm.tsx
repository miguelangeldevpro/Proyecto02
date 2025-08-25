import React, { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("📩 Datos enviados:", { name, email, subject, message });

    Swal.fire({
      icon: "success",
      title: "¡Mensaje enviado!",
      text: `Gracias ${name || "usuario"}, hemos recibido tu mensaje.`,
      confirmButtonText: "Aceptar",
    });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Columna izquierda: formulario */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Formulario de Contacto</h2>
              <p className="text-center text-muted mb-4">
                Complete el formulario y nuestro equipo se pondrá en contacto con usted lo antes posible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Escriba su nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={50}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="ejemplo@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Motivo de contacto"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    maxLength={100}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Escriba su mensaje..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={500}
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Columna derecha: mapa */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-3 h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.751331763566!2d-77.04279368561697!3d-12.0463740914666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8bfc3f77df7%3A0x1e7f9db3c6a3b72f!2sLima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1692467891234!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.5rem" }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
