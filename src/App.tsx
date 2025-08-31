// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ContactForm from "./components/ContactForm";
import Checkout from "./pages/Checkout";

// Páginas nuevas
import Login from "./pages/Login";
import Register from "./pages/Register";
import Intranet from "./pages/intranet";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* 🔽 Rutas nuevas */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/intranet" element={<Intranet />} /> {/* 👈 nueva ruta */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
