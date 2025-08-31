// src/pages/Checkout.tsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    medioPago: "Tarjeta",
    nrotarjeta: "",
    titular: "",
    dni: "",
    vencimiento: "",
    cvc: "",
  });

  // ✅ Función para mostrar alertas
  const showAlert = (message: string) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  // ✅ Manejo del cambio en inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Generar fecha de vencimiento aleatoria
  const generarFechaVencimiento = () => {
    const mes = Math.floor(Math.random() * 12) + 1;
    const año = new Date().getFullYear() + Math.floor(Math.random() * 5) + 1;
    return `${mes.toString().padStart(2, "0")}/${año}`;
  };

  // ✅ Procesar compra
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      showAlert("⚠️ El carrito está vacío.");
      return;
    }

    // Generar fecha vencimiento si está vacía
    const vencimientoFinal = formData.vencimiento || generarFechaVencimiento();

    // Crear objeto de compra
    const purchaseData = {
      cliente: { ...formData, vencimiento: vencimientoFinal },
      productos: cartItems.map((item) => ({
        nombre: item.product.name,
        cantidad: item.quantity,
        subtotal: item.product.price * item.quantity,
      })),
      total: cartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      ),
      fecha: new Date().toLocaleString(),
    };

    // Guardar en LocalStorage
    const existingPurchases = JSON.parse(localStorage.getItem("compras") || "[]");
    existingPurchases.push(purchaseData);
    localStorage.setItem("compras", JSON.stringify(existingPurchases));

    // Mensaje de éxito
    showAlert("🎉 Tu pago fue realizado con éxito");

    clearCart();
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Formulario de Pago</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Medio de Pago</label>
          <select
            name="medioPago"
            value={formData.medioPago}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Tarjeta">Tarjeta</option>
            <option value="Yape">Yape</option>
            <option value="Plin">Plin</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Número de Tarjeta</label>
          <input
            type="text"
            name="nrotarjeta"
            value={formData.nrotarjeta}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Titular</label>
          <input
            type="text"
            name="titular"
            value={formData.titular}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">DNI</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Fecha de Vencimiento</label>
          <input
            type="text"
            name="vencimiento"
            value={formData.vencimiento}
            onChange={handleChange}
            placeholder="MM/AAAA"
            className="form-control"
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">CVC</label>
          <input
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
            Pagar
          </button>
        </div>
      </form>
    </div>
  );
}
