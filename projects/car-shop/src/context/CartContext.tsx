// context/CartContext.tsx
import { createContext, useContext,useMemo, useState,type ReactNode } from "react";
import type { Product } from "../types/types";

/** Datos de ejemplo */
// mockProducts.ts
export const mockProducts = [
  {
    id: 1,
    name: "Producto 1",
    price: 100,
    image: "/imgs/pc3.webp", // 👉 pon aquí "/images/pc1.jpg"
    quantity: 1,
  },
  {
    id: 2,
    name: "Producto 2",
    price: 200,
    image: "",
    quantity: 1,
  },
  {
    id: 3,
    name: "Producto 3",
    price: 300,
    image: "",
    quantity: 1,
  },
  {
    id: 4,
    name: "Producto 4",
    price: 400,
    image: "",
    quantity: 1,
  },
  {
    id: 5,
    name: "Producto 5",
    price: 500,
    image: "",
    quantity: 1,
  },
  {
    id: 6,
    name: "Producto 6",
    price: 600,
    image: "",
    quantity: 1,
  },
  {
    id: 7,
    name: "Producto 7",
    price: 700,
    image: "",
    quantity: 1,
  },
  {
    id: 8,
    name: "Producto 8",
    price: 800,
    image: "",
    quantity: 1,
  },
  {
    id: 9,
    name: "Producto 9",
    price: 900,
    image: "",
    quantity: 1,
  },
  {
    id: 10,
    name: "Producto 10",
    price: 1000,
    image: "",
    quantity: 1,
  },
  {
    id: 11,
    name: "Producto 11",
    price: 1100,
    image: "",
    quantity: 1,
  },
  {
    id: 12,
    name: "Producto 12",
    price: 1200,
    image: "",
    quantity: 1,
  }];
const imgs = '/imgs/pc3.webp'
mockProducts.forEach((product) => {
  product.image = imgs;
}
);


/** Tipo para el contexto */
type CartContextType = {
  products: Product[];
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>; // 👈
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  filterByPrice: () => void;
  IncreaseAmount: (product: Product) => void;
  DecreaseAmount: (product: Product) => void;
    totalPrice: number; // 👈 falta esto
};
//tipamos las funciones que vamos a usar en el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);
//aquí creamos el provider que va a envolver nuestra aplicación

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Estado para productos y carrito
  const [products] = useState<Product[]>(mockProducts);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (existingProduct) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: (p.quantity || 1) + quantity }
            : p
        );
      }
      return [...prev, { ...product, quantity: quantity || 1 }];
    });
  };

  const filterByPrice = () => {
    const filteredProducts = [...cart].sort((a, b) => b.price - a.price);
    setCart(filteredProducts);
  };

  const IncreaseAmount = (product: Product) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === product.id
          ? { ...p, quantity: (p.quantity || 1) + 1 }
          : p
      )
    );
  };

  const DecreaseAmount = (product: Product) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === product.id
          ? { ...p, quantity: (p.quantity || 1) - 1 }
          : p
      )
    );
  };

  const removeFromCart = (product: Product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };
const totalPrice = useMemo(()=>{
  return cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0);



},[cart])
//guardamos el carrito en el localstorage



  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        setCart, // 👈
        addToCart,
        removeFromCart,
        filterByPrice,
        IncreaseAmount,
        DecreaseAmount,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


/** Hook para consumir fácil */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
};
