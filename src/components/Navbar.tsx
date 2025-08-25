// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Tienda Electrónica
        </Link>

        <div className="collapse navbar-collapse">
          {/* Links de navegación */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/map">
                Mapa
              </Link>
            </li>
          </ul>

          {/* Ícono del carrito separado */}
          <ul className="navbar-nav ms-4">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
               <img 
                  src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" 
                  alt="carrito de compras " 
                  style={{ width: "32px", height: "32px" }} 
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
