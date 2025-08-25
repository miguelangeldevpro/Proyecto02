import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#212529",
        color: "white",
        padding: "2rem 1rem",
        marginTop: "2rem",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Columna de navegación */}
          <div className="col-md-4 mb-3">
            <h5>Tienda Electrónica</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-light">Inicio</Link></li>
              <li><Link to="/products" className="text-decoration-none text-light">Productos</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light">Contacto</Link></li>
           
            </ul>
          </div>

          {/* Columna de contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p className="mb-1">📍 Av. Principal 123, Lima - Perú</p>
            <p className="mb-1">📞 +51 999 999 999</p>
            <p>📧 contacto@tienda.com</p>
          </div>

          {/* Columna de redes sociales */}
          <div className="col-md-4 mb-3">
            <h5>Síguenos</h5>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  style={{ width: "28px", height: "28px" }}
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  style={{ width: "28px", height: "28px" }}
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  style={{ width: "28px", height: "28px" }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            marginTop: "1rem",
            paddingTop: "1rem",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} Tienda Electrónica. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
