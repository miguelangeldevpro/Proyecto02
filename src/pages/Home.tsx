// ... (importaciones)
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { marcas, categories, products, Marca, Category, Product } from "../data/products";
import { useCart } from "../context/CartContext";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const featuredProducts: Product[] = products.slice(0, 6);
  const { addToCart } = useCart();

  const [alert, setAlert] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Agrega al carrito y muestra alerta
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAlert({ show: true, message: `Producto "${product.name}" agregado al carrito.` });
    setTimeout(() => setAlert({ show: false, message: "" }), 3000);
  };

  const handleViewMore = (product: Product) => {
    setSelectedProduct(product);
    const modal = new window.bootstrap.Modal(document.getElementById("productModal")!);
    modal.show();
  };

  return (
    <div className="container py-4">
      {/* ✅ Alerta Bootstrap */}
      {alert.show && (
        <div className="alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3" style={{ zIndex: 2000 }}>
          {alert.message}
          <button type="button" className="btn-close" onClick={() => setAlert({ show: false, message: "" })}></button>
        </div>
      )}

      {/* Bienvenida */}
      <div className="text-center mb-5">
        <h1 className="display-4">Bienvenido a Tienda Electrónica</h1>
        <p className="lead">Compra los últimos smartphones, laptops, accesorios y mucho más.</p>
      </div>

      {/* Carrusel de marcas */}
      <div id="brandsCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {marcas.map((marca: Marca, index: number) => (
            <div key={marca.idmarca} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={marca.image} className="d-block mx-auto" alt={marca.name} style={{ maxHeight: "150px", objectFit: "contain" }} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#brandsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#brandsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* Categorías */}
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
                    <button className="btn btn-primary w-100" onClick={() => handleAddToCart(product)}>
                      Agregar al carrito
                    </button>
                    <button className="btn btn-outline-secondary w-100" onClick={() => handleViewMore(product)}>
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal Ver Más */}
      <div className="modal fade" id="productModal" tabIndex={-1} aria-labelledby="productModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {selectedProduct && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProduct.name}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
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
                    <button className="btn btn-primary mt-3" onClick={() => handleAddToCart(selectedProduct)}>
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
