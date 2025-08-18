// src/pages/Home.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { marcas, categories, products, Marca, Category, Product } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  // Productos destacados: los primeros 6 por stock
  const featuredProducts: Product[] = products.slice(0, 6);
   const { addToCart } = useCart();

  return (
    <div className="container py-4">

      {/* Sección de bienvenida */}
      <div className="text-center mb-5">
        <h1 className="display-4">Bienvenido a Tienda Electrónica</h1>
        <p className="lead">Compra los últimos smartphones, laptops, accesorios y mucho más.</p>
      </div>

      {/* Carrusel de marcas */}
      <div id="brandsCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {marcas.map((marca: Marca, index: number) => (
            <div key={marca.idmarca} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img 
                src={marca.image} 
                className="d-block mx-auto" 
                alt={marca.name} 
                style={{ maxHeight: "150px", objectFit: "contain" }} 
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#brandsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#brandsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Sección de categorías */}
      <div className="mb-5">
        <h2 className="mb-4">Categorías</h2>
        <div className="row">
          {categories.map((cat: Category) => (
            <div key={cat.id} className="col-6 col-md-2 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <h6 className="card-title text-center">{cat.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Productos destacados */}
      <div className="mb-5">
        <h2 className="mb-4">Productos Destacados</h2>
        <div className="row">
          {featuredProducts.map((product: Product) => (
            <div key={product.id} className="col-6 col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top p-3" alt={product.name} style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-success fw-bold">${product.price}</p>
                  <p className="text-truncate">{product.description}</p>
                  <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
