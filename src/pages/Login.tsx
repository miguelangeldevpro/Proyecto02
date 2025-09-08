import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const usuariosBase = [
  { nombre: "Miguel Angel", correo: "miguel@example.com", password: "123456" },
  { nombre: "Hugo Stiven", correo: "hugo@example.com", password: "654321" },
  { nombre: "Ronald", correo: "ronald@example.com", password: "abcdef" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const todosUsuarios = [...usuariosBase, ...usuariosGuardados];

    const user = todosUsuarios.find(
      (u) => u.correo === email && u.password === password
    );

    if (user) {
      localStorage.setItem("usuarioActual", JSON.stringify(user));

      Swal.fire("Bienvenido", `Hola ${user.nombre} 🚀`, "success");
      navigate("/perfil");
    } else {
      Swal.fire("Error", "Correo o contraseña incorrectos ❌", "error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
