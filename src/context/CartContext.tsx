import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
export default function ProductCard({ product }: { product: { id: number; name: string; price: number; image: string } }) {
  const handleAddToCart = () => {
    alert(`🛒 ${product.name} agregado al carrito por $${product.price}`);
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "1rem",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "0.5rem" }}
      />
      <h3 style={{ margin: "0.5rem 0" }}>{product.name}</h3>
      <p style={{ fontWeight: "bold", color: "#007bff" }}>${product.price}</p>
      <button
        onClick={handleAddToCart}
        style={{
          background: "#007bff",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "0.5rem"
        }}>
        Agregar al carrito
      </button>
    </div>
  );
}
