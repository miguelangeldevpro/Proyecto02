// src/data/products.ts

// Interfaces
export interface Marca {
  idmarca: number;
  name: string;
  image: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  idmarca: number;
  categoryId: number;
  price: number;
  stock: number;
  image: string;
  description: string;
}

// Marcas disponibles
export const marcas: Marca[] = [
  { idmarca: 1, name: "Apple", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { idmarca: 2, name: "Samsung", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { idmarca: 3, name: "Xiaomi", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { idmarca: 4, name: "Huawei", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Huawei_Standard_logo.svg" },
  { idmarca: 5, name: "Sony", image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.svg" },
  { idmarca: 6, name: "LG", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/LG_logo.svg" },
];

// Categorías
export const categories: Category[] = [
  { id: 1, name: "Smartphones" },
  { id: 2, name: "Tablets" },
  { id: 3, name: "Laptops" },
  { id: 4, name: "Accesorios" },
  { id: 5, name: "Wearables" },
];

// Productos
export const products: Product[] = [
  // Smartphones Apple
  {
    id: 1,
    name: "iPhone 15 Pro",
    idmarca: 1,
    categoryId: 1,
    price: 1200,
    stock: 15,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162332-1200-auto?v=638682359818430000",
    description: "Último iPhone con cámara Pro y rendimiento increíble."
  },
  {
    id: 2,
    name: "iPhone 15",
    idmarca: 1,
    categoryId: 1,
    price: 999,
    stock: 20,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162333-1200-auto",
    description: "iPhone con gran batería y diseño elegante."
  },
  // Smartphones Samsung
  {
    id: 3,
    name: "Samsung Galaxy S23",
    idmarca: 2,
    categoryId: 1,
    price: 1000,
    stock: 18,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162334-1200-auto",
    description: "Potente smartphone con cámara profesional."
  },
  {
    id: 4,
    name: "Samsung Galaxy Tab S9",
    idmarca: 2,
    categoryId: 2,
    price: 750,
    stock: 12,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162335-1200-auto",
    description: "Tablet Android con pantalla AMOLED y alta productividad."
  },
  // Smartphones Xiaomi
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    idmarca: 3,
    categoryId: 1,
    price: 800,
    stock: 25,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162336-1200-auto",
    description: "Gran rendimiento a precio competitivo."
  },
  {
    id: 6,
    name: "Xiaomi Pad 6",
    idmarca: 3,
    categoryId: 2,
    price: 450,
    stock: 30,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162337-1200-auto",
    description: "Tablet de alto rendimiento para estudiantes y profesionales."
  },
  // Laptops
  {
    id: 7,
    name: "MacBook Pro 16\" M2",
    idmarca: 1,
    categoryId: 3,
    price: 2500,
    stock: 10,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162338-1200-auto",
    description: "Laptop profesional con chip M2 y pantalla Retina."
  },
  {
    id: 8,
    name: "Sony Vaio Z",
    idmarca: 5,
    categoryId: 3,
    price: 2000,
    stock: 8,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162339-1200-auto",
    description: "Laptop ultraligera y potente para trabajo y ocio."
  },
  // Accesorios
  {
    id: 9,
    name: "Apple AirPods Pro",
    idmarca: 1,
    categoryId: 4,
    price: 250,
    stock: 50,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162340-1200-auto",
    description: "Auriculares inalámbricos con cancelación de ruido."
  },
  {
    id: 10,
    name: "Samsung Galaxy Watch 6",
    idmarca: 2,
    categoryId: 5,
    price: 350,
    stock: 30,
    image: "https://carsaperupoc.vtexassets.com/arquivos/ids/162341-1200-auto",
    description: "Smartwatch con seguimiento de salud y deportes."
  },
];
