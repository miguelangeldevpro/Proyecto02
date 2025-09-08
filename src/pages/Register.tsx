import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!correo.includes("@")) {
      Swal.fire("Correo inválido", "Por favor ingresa un correo válido 📧", "error");
      return;
    }
    if (password.length < 6) {
      Swal.fire("Contraseña débil", "Debe tener al menos 6 caracteres 🔑", "warning");
      return;
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const existe = usuariosGuardados.find((u: any) => u.correo === correo);
    if (existe) {
      Swal.fire("Error", "Este correo ya está registrado 🚫", "error");
      return;
    }

    const nuevoUsuario = { nombre, correo, password };
    localStorage.setItem("usuarios", JSON.stringify([...usuariosGuardados, nuevoUsuario]));

    Swal.fire({
      title: "Cuenta creada 🎉",
      text: "Ahora puedes iniciar sesión",
      icon: "success",
      confirmButtonText: "Iniciar Sesión",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="card shadow-lg p-4" style={{ width: "450px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4">Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
