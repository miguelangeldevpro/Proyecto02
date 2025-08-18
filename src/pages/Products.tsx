// src/pages/Products.tsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { products, marcas, categories, Product, Marca, Category } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  // Estado de filtros
  const [selectedMarca, setSelectedMarca] = useState<number | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<number | "all">("all");

  // Filtrar productos
  const filteredProducts = products.filter((p: Product) => {
    return (selectedMarca === "all" || p.idmarca === selectedMarca) &&
           (selectedCategory === "all" || p.categoryId === selectedCategory);
  });

  return (
    <div className="container py-4">

      <div className="text-center mb-5">
        <h1 className="display-5">Todos los Productos</h1>
        <p className="lead">Filtra por marca o categoría y agrega al carrito tus productos favoritos.</p>
      </div>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <select className="form-select" value={selectedMarca} onChange={(e) => setSelectedMarca(e.target.value === "all" ? "all" : Number(e.target.value))}>
            <option value="all">Todas las marcas</option>
            {marcas.map((marca: Marca) => (
              <option key={marca.idmarca} value={marca.idmarca}>{marca.name}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-2">
          <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value === "all" ? "all" : Number(e.target.value))}>
            <option value="all">Todas las categorías</option>
            {categories.map((cat: Category) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Listado de productos */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <p className="text-center">No hay productos que coincidan con el filtro.</p>
        ) : (
          filteredProducts.map((product: Product) => {
            const marca = marcas.find(m => m.idmarca === product.idmarca);
            const category = categories.find(c => c.id === product.categoryId);

            return (
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
                    <p className="text-muted mb-1">{marca?.name} - {category?.name}</p>
                    <p className="text-success fw-bold mb-1">${product.price}</p>
                    <p className="text-truncate mb-2">{product.description}</p>
                    <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
