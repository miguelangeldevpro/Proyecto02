import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";


export default function Navbar() {
  const { cartItems } = useCart();

  // Total de productos en el carrito
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3 sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <span style={{ color: "#0d6efd" }}>Movil</span>
          <span style={{ color: "#ffffff" }}>Nova</span>
        </Link>

        {/* Botón hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
            <li>
              <Link className="nav-link" to = "/checkout"> Pago </Link>
            </li>
          </ul>

          {/* Carrito con contador */}
          <ul className="navbar-nav ms-3 d-flex align-items-center">
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                <ShoppingCart size={28} />
                {totalCount > 0 && (
                  <span
                    className="position-absolute translate-middle badge rounded-pill bg-danger"
                    style={{ top: "0px", right: "0px", fontSize: "12px" }}
                  >
                    {totalCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
