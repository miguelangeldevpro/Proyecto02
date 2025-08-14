// src/pages/Products.tsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "iPhone 15 Pro", price: 1200, image: "https://via.placeholder.com/200?text=iPhone+15+Pro" },
  { id: 2, name: "Samsung Galaxy S23", price: 1000, image: "https://via.placeholder.com/200?text=Galaxy+S23" },
  { id: 3, name: "Xiaomi 13 Pro", price: 800, image: "https://via.placeholder.com/200?text=Xiaomi+13+Pro" },
  { id: 4, name: "Google Pixel 8", price: 950, image: "https://via.placeholder.com/200?text=Pixel+8" },
  { id: 5, name: "OnePlus 11", price: 850, image: "https://via.placeholder.com/200?text=OnePlus+11" },
];

const Products: React.FC = () => {
  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">📱 Tienda de Celulares</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Precio: <strong>${product.price}</strong>
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
