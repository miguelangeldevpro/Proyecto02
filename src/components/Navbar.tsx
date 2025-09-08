import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual") || "null");

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <span style={{ color: "#0d6efd" }}>Movil</span>
          <span style={{ color: "#ffffff" }}>Nova</span>
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/checkout">Pago</Link></li>
          </ul>

          <ul className="navbar-nav ms-3 d-flex align-items-center">
            {/* Usuario con dropdown */}
            <li className="nav-item dropdown me-3">
              <button
                className="btn nav-link dropdown-toggle d-flex align-items-center gap-2"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <User size={24} />
                {usuarioActual ? usuarioActual.nombre : "Cuenta"}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                {usuarioActual ? (
                  <>
                    <li><Link className="dropdown-item" to="/perfil">Perfil</Link></li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={() => {
                          localStorage.removeItem("usuarioActual");
                          window.location.href = "/login";
                        }}
                      >
                        Cerrar Sesión
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/login">Iniciar Sesión</Link></li>
                    <li><Link className="dropdown-item" to="/register">Crear Cuenta</Link></li>
                  </>
                )}
              </ul>
            </li>

            {/* Carrito */}
            <li className="nav-item position-relative me-3">
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
