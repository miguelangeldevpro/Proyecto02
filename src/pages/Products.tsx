// src/pages/Products.tsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { products, marcas, categories, Product, Marca, Category } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  const [selectedMarca, setSelectedMarca] = useState<number | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<number | "all">("all");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((p: Product) => {
    return (
      (selectedMarca === "all" || p.idmarca === selectedMarca) &&
      (selectedCategory === "all" || p.categoryId === selectedCategory)
    );
  });

  return (
    <div className="container py-4">
      <div className="text-center mb-5">
        <h1 className="display-5">Todos los Productos</h1>
        <p className="lead">
          Filtra por marca o categoría y agrega al carrito tus productos favoritos.
        </p>
      </div>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={selectedMarca}
            onChange={(e) =>
              setSelectedMarca(e.target.value === "all" ? "all" : Number(e.target.value))
            }
          >
            <option value="all">Todas las marcas</option>
            {marcas.map((marca: Marca) => (
              <option key={marca.idmarca} value={marca.idmarca}>
                {marca.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value === "all" ? "all" : Number(e.target.value))
            }
          >
            <option value="all">Todas las categorías</option>
            {categories.map((cat: Category) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Productos */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <p className="text-center">No hay productos que coincidan con el filtro.</p>
        ) : (
          filteredProducts.map((product: Product) => {
            const marca = marcas.find((m) => m.idmarca === product.idmarca);
            const category = categories.find((c) => c.id === product.categoryId);

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
                    <p className="text-muted mb-1">
                      {marca?.name} - {category?.name}
                    </p>
                    <p className="text-success fw-bold mb-1">${product.price}</p>
                    <p className="text-truncate mb-2">{product.description}</p>
                    
                    {/* Botón Comprar Ahora con alert */}
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => {
                        addToCart(product);
                        alert(`${product.name} fue agregado al carrito ✅`);
                      }}
                    >
                      Comprar Ahora
                    </button>

                    <button
                      className="btn btn-outline-secondary mt-2"
                      onClick={() => setSelectedProduct(product)}
                      data-bs-toggle="modal"
                      data-bs-target="#productModal"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal Ver más */}
      <div
        className="modal fade"
        id="productModal"
        tabIndex={-1}
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {selectedProduct && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="productModalLabel">
                    {selectedProduct.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body row">
                  <div className="col-md-6 text-center">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="img-fluid"
                      style={{ maxHeight: "350px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Precio:</strong> ${selectedProduct.price}
                    </p>
                    <p>
                      <strong>Stock:</strong> {selectedProduct.stock} unidades
                    </p>
                    <p>
                      <strong>Descripción:</strong>
                    </p>
                    <p>{selectedProduct.description}</p>

                    {/* Botón Añadir al carrito con alert */}
                    <button
                      className="btn btn-success mt-3"
                      onClick={() => {
                        addToCart(selectedProduct);
                        alert(`${selectedProduct.name} fue agregado al carrito ✅`);

                        const modal = document.getElementById("productModal");
                        if (modal) {
                          (modal as any).classList.remove("show");
                          document.body.classList.remove("modal-open");
                          modal.setAttribute("aria-hidden", "true");
                          modal.removeAttribute("aria-modal");
                        }
                      }}
                    >
                      Añadir al carrito
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
