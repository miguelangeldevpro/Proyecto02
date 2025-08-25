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
                <div className="mb-3">z
                  <label htmlFor="name" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Escriba su nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
          
          </div>
        </div>
      </div>
    </div>
  );
}
