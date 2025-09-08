// src/pages/Home.tsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { marcas, categories, products, Product } from "../data/products";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function Home() {
  const featuredProducts: Product[] = products.slice(0, 6);
  const { addToCart } = useCart();

  const showAlert = (message: string) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1300
    });
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showAlert(`"${product.name}" fue agregado al carrito.`);
  };

  return (
    <div>
      {/* Hero con carrusel */}
      <div className="hero-container position-relative">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="1000"
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
        <h2 className="mb-4">Productos Destacados</h2>
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
                  
                  {/* Precio con descuento */}
                  <p className="text-success fw-bold mb-1">
                    S/
                    {product.discount
                      ? (product.price * (1 - product.discount / 100)).toFixed(2)
                      : product.price.toFixed(2)}
                  </p>

                  {/* Calificación con estrellas */}
                  <p className="mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        style={{ color: i < (product.rating || 0) ? "#ffc107" : "#e4e5e9" }}
                      >
                        ★
                      </span>
                    ))}
                  </p>

                  <p className="text-truncate">{product.description}</p>
                  <div className="mt-auto">
                    <button
                      className="btn btn-primary w-100"
                       onClick={() => handleAddToCart(product)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
