// src/pages/Checkout.tsx
import React, { useState } from "react";
import { CreditCard, QrCode } from "lucide-react";
import { useCart } from "../context/CartContext";

type PaymentData = {
  medioPago: string;
  nrotarjeta?: string;
  titular?: string;
  dni?: string;
  vencimiento?: string;
  cvc?: string;
  telefono?: string;
};

const Checkout: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const generarVencimiento = () => {
    const mes = Math.floor(Math.random() * 12) + 1; // 1 a 12
    const año = Math.floor(Math.random() * 6) + 25; // 25 a 30 (2025-2030)
    return `${mes.toString().padStart(2, "0")}/${año}`;
  };

  const [formData, setFormData] = useState<PaymentData>({
    medioPago: "",
    vencimiento: generarVencimiento(),
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Validaciones en tiempo real
    if (name === "nrotarjeta") {
      if (!/^\d{0,9}$/.test(value)) return;
    }
    if (name === "titular") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }
    if (name === "dni") {
      if (!/^\d{0,8}$/.test(value)) return;
    }
    if (name === "cvc") {
      if (!/^\d{0,3}$/.test(value)) return;
    }
    if (name === "telefono") {
      if (!/^\d{0,9}$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    if (formData.medioPago === "Tarjeta") {
      if (!formData.nrotarjeta || formData.nrotarjeta.length !== 9) {
        newErrors.nrotarjeta = "Ingrese un número de tarjeta válido (9 dígitos)";
        valid = false;
      }
      if (!formData.titular || formData.titular.trim().length < 3) {
        newErrors.titular = "Ingrese el nombre del titular";
        valid = false;
      }
      if (!formData.dni || formData.dni.length !== 8) {
        newErrors.dni = "Ingrese un DNI válido (8 dígitos)";
        valid = false;
      }
      if (!formData.vencimiento) {
        newErrors.vencimiento = "Vencimiento inválido";
        valid = false;
      }
      if (!formData.cvc || formData.cvc.length !== 3) {
        newErrors.cvc = "Ingrese un CVC válido (3 dígitos)";
        valid = false;
      }
    }

    if (formData.medioPago === "Yape") {
      if (!formData.telefono || formData.telefono.length !== 9) {
        newErrors.telefono = "Ingrese un número de teléfono válido (9 dígitos)";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    if (!validate()) return;

    const purchaseData = {
      cliente: formData,
      productos: cartItems.map((item) => ({
        nombre: item.product.name,
        cantidad: item.quantity,
        subtotal: item.product.price * item.quantity,
      })),
      total: cartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      ),
    };

    const existingPurchases = JSON.parse(localStorage.getItem("compras") || "[]");
    existingPurchases.push(purchaseData);
    localStorage.setItem("compras", JSON.stringify(existingPurchases));

alert("Tu pago fue procesado correctamente. Pronto recibirás tu pedido 🚚");
clearCart();


  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3>Resumen de Productos</h3>
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.product.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  {item.product.name} x {item.quantity}
                  <span>S/. {item.product.price * item.quantity}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>S/. {total}</strong>
              </li>
            </ul>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="card p-4 shadow-sm mb-3">
                <h3 className="mb-3">Selecciona el Medio de Pago</h3>
                <div className="d-flex flex-column gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-primary d-flex align-items-center gap-2"
                    onClick={() => {
                      setFormData({ ...formData, medioPago: "Tarjeta" });
                      nextStep();
                    }}
                  >
                    <CreditCard /> Tarjeta
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success d-flex align-items-center gap-2"
                    onClick={() => {
                      setFormData({ ...formData, medioPago: "Yape" });
                      nextStep();
                    }}
                  >
                    <QrCode /> Yape
                  </button>
                </div>
              </div>
            )}

            {step === 2 && formData.medioPago === "Tarjeta" && (
              <div className="card p-4 shadow-sm mb-3">
                <h3 className="mb-3">Datos de Tarjeta</h3>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Número de Tarjeta (9 dígitos)"
                  name="nrotarjeta"
                  value={formData.nrotarjeta || ""}
                  onChange={handleChange}
                  required
                />
                {errors.nrotarjeta && <p className="text-danger">{errors.nrotarjeta}</p>}

                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Titular"
                  name="titular"
                  value={formData.titular || ""}
                  onChange={handleChange}
                  required
                />
                {errors.titular && <p className="text-danger">{errors.titular}</p>}

                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="DNI (8 dígitos)"
                  name="dni"
                  value={formData.dni || ""}
                  onChange={handleChange}
                  required
                />
                {errors.dni && <p className="text-danger">{errors.dni}</p>}

                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Vencimiento MM/AA"
                  name="vencimiento"
                  value={formData.vencimiento}
                  disabled
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="CVC (3 dígitos)"
                  name="cvc"
                  value={formData.cvc || ""}
                  onChange={handleChange}
                  required
                />
                {errors.cvc && <p className="text-danger">{errors.cvc}</p>}

                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary" onClick={prevStep}>
                    Volver
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Pagar
                  </button>
                </div>
              </div>
            )}

            {step === 2 && formData.medioPago === "Yape" && (
              <div className="card p-4 shadow-sm mb-3">
                <h3 className="mb-3">Pago con Yape</h3>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Número de teléfono (9 dígitos)"
                  name="telefono"
                  value={formData.telefono || ""}
                  onChange={handleChange}
                  required
                />
                {errors.telefono && <p className="text-danger">{errors.telefono}</p>}

                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary" onClick={prevStep}>
                    Volver
                  </button>
                  <button type="submit" className="btn btn-success">
                    Pagar
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
