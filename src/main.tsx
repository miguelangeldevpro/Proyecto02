// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./context/CartContext";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// 🔑 Clave pública de Stripe
const stripePromise = loadStripe("pk_test_TU_PUBLIC_KEY");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </CartProvider>
  </React.StrictMode>
);
