// src/pages/Home.tsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { marcas, categories, products, Marca, Category, Product } from "../data/products";
import { useCart } from "../context/CartContext";
import ContactForm from "../components/ContactForm";
import Swal from "sweetalert2";

export default function Home() {
  const featuredProducts: Product[] = products.slice(0, 6);
  const { addToCart } = useCart();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // ✅ Función para mostrar alertas con SweetAlert2
  const showAlert = (message: string) => {
    Swal.fire({
      title: "Producto agregado",
      text: message,
      icon: "success",
      timerProgressBar: true,
  
      
    });
  };

  // Agregar al carrito con alerta
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showAlert(`"${product.name}" fue agregado al carrito.`);
  };

  const handleViewMore = (product: Product) => {
    setSelectedProduct(product);
    const modal = new window.bootstrap.Modal(document.getElementById("productModal")!);
    modal.show();
  };

  return (
    <div>
      {/* 🔹 Hero con carrusel */}
      <div className="hero-container position-relative">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
                className="d-block w-100"
                alt="Smartphones"
                style={{ height: "90vh", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                className="d-block w-100"
                alt="Auriculares"
                style={{ height: "90vh", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3"
                className="d-block w-100"
                alt="Laptop"
                style={{ height: "90vh", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Texto encima del carrusel */}
        <div
          className="hero-text text-center text-light position-absolute top-50 start-50 translate-middle"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          <h1 className="display-2 fw-bold">
            Bienvenido a <span style={{ color: "#0d6efd" }}>MovilNova</span>
          </h1>
          <p className="lead fs-4">Compra los últimos smartphones, laptops, accesorios y mucho más.</p>
        </div>
      </div>

      {/* Productos Destacados */}
      <div id="featured" className="container mb-5">
        <h2 className="mb-4"> </h2>
        <div className="row">
          {featuredProducts.map((product: Product) => (
            <div key={product.id} className="col-6 col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-success fw-bold">${product.price}</p>
                  <p className="text-truncate">{product.description}</p>
                  <div className="mt-auto d-flex gap-2">
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleAddToCart(product)}
                    >
                      Agregar al carrito
                    </button>
                    <button
                      className="btn btn-outline-secondary w-100"
                      onClick={() => handleViewMore(product)}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Ver Más */}
      <div
        className="modal fade"
        id="productModal"
        tabIndex={-1}
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {selectedProduct && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProduct.name}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Cerrar"
                  ></button>
                </div>
                <div className="modal-body d-flex flex-column flex-md-row align-items-center gap-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="img-fluid"
                    style={{ maxWidth: "300px", objectFit: "contain" }}
                  />
                  <div>
                    <h4 className="text-success">${selectedProduct.price}</h4>
                    <p>{selectedProduct.description}</p>
                    <p><strong>Material:</strong> Aluminio y vidrio</p>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
