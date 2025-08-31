// src/pages/Intranet.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Intranet() {
  const [usuario, setUsuario] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioActual") || "null");
    if (!user) {
      navigate("/login"); // Si no hay usuario, redirigir al login
    } else {
      setUsuario(user);
    }
  }, [navigate]);

  const cerrarSesion = () => {
    localStorage.removeItem("usuarioActual");
    navigate("/login");
  };

  if (!usuario) return null;

  return (
    <div className="container mt-5 text-center">
      <h1>Bienvenido 🚀</h1>
      <h3>{usuario.nombre}</h3>
      <p><strong>Correo:</strong> {usuario.correo}</p>
      <button className="btn btn-danger mt-3" onClick={cerrarSesion}>
        Cerrar Sesión
      </button>
    </div>
  );
}
