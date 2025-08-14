// src/pages/Home.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import  { marcas } from "../data/products"; // Importamos la lista de productos

export default function Home() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Bienvenido a la Tienda de Celulares</h1>
      <p>Explora los últimos modelos y ofertas exclusivas.</p>

      {/* Carrusel */}
      <div id="carouselExampleCaptions" className="carousel slide mb-5">
        {/* Indicadores */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85):max_bytes(102400)/https://assets.iprofesional.com/assets/jpg/2023/05/554288.jpg" className="d-block w-100" alt="Primer producto" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Primer producto</h5>
              <p>El último lanzamiento con tecnología de punta.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85):max_bytes(102400)/https://assets.iprofesional.com/assets/jpg/2023/05/554288.jpg" className="d-block w-100" alt="Segundo producto" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Segundo producto</h5>
              <p>Potencia y diseño en la palma de tu mano.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85):max_bytes(102400)/https://assets.iprofesional.com/assets/jpg/2023/05/554288.jpg" className="d-block w-100" alt="Tercer producto" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Tercer producto</h5>
              <p>El equilibrio perfecto entre rendimiento y precio.</p>
            </div>
          </div>
        </div>

        {/* Controles */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Lista de productos */}
      <div className="row">
  {marcas.slice(0, 4).map((marca) => (
    <div key={marca.id} className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={marca.image}
          className="card-img-top p-3"
          alt={marca.name}
          style={{ height: "150px", objectFit: "contain" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{marca.name}</h5>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
