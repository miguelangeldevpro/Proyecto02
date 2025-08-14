import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      padding: "1rem",
      background: "#1e1e1e",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>📱 Tienda de Celulares</h2>
      <div>
        <Link to="/" style={{ margin: "0 1rem", color: "#fff" }}>Inicio</Link>
        <Link to="/products" style={{ margin: "0 1rem", color: "#fff" }}>Productos</Link>
        <Link to="/cart" style={{ margin: "0 1rem", color: "#fff" }}>Carrito</Link>
      </div>
    </nav>
  );
}
