import React from "react";
import { useCart } from "../context/CartContext"; // 👈 Importamos el hook del carrito
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart(); // 👈 Usamos el contexto

  const handleAddToCart = () => {
    addToCart(product); // 👉 Ahora sí agrega al carrito
    alert(`🛒 ${product.name} agregado al carrito por $${product.price}`);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        padding: "1rem",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "0.5rem" }}
      />
      <h3 style={{ margin: "0.5rem 0" }}>{product.name}</h3>
      <p style={{ fontWeight: "bold", color: "#007bff" }}>${product.price}</p>
      <button
        onClick={handleAddToCart}
        style={{
          background: "#007bff",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "0.5rem",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
