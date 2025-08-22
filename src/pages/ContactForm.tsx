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

    // ✅ Mostrar alerta con SweetAlert2
    Swal.fire({
      icon: "success",
      title: "¡Mensaje enviado!",
      text: `Gracias ${name || "usuario"}, hemos recibido tu mensaje.`,
      showConfirmButton: true,
      confirmButtonText: "Aceptar",
    });

    // Limpiar formulario
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Formulario de Contacto</h2>
              <p className="text-center text-muted mb-4">
                Complete el formulario y nuestro equipo se pondrá en contacto con usted lo antes posible.
              </p>
  </div>
    </div>
      </div>

        </div>
              <form onSubmit={handleSubmit}>
                {/* Nombre */}
                <div className="mb-3">
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

                {/* Correo */}
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

                {/* Asunto */}
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

                {/* Mensaje */}
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
                  ></textarea>
                </div>

                {/* Botón */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>

 

  );
}
