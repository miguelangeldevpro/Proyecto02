import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.product.name}</td>
                  <td>${item.product.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.product.price * item.quantity}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.product.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="text-end fw-bold">Total</td>
                <td colSpan={2} className="fw-bold">${total}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-start gap-2">
  <button className="btn btn-secondary" onClick={clearCart}>
    Vaciar Carrito
  </button>
  <button className="btn btn-primary" onClick={clearCart}>
    Siguiente
  </button>
</div>

        </>
      )}
    </div>
  );
}