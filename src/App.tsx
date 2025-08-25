// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Páginas
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ContactForm from "./components/ContactForm";
import IframeMap from "./components/IframeMap";

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar arriba */}
        <Navbar />

        {/* Contenido principal */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/map" element={<IframeMap />} />
           
          </Routes>
        </div>

        {/* Footer abajo */}
        <Footer />
      </div>
    </Router>
  );
}
 