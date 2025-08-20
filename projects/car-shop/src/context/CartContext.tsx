// context/CartContext.tsx
import { createContext, useContext, useState,type ReactNode } from "react";
import type { Product } from "../types/types";

/** Datos de ejemplo */
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Gaming PC",
    price: 1200,
    image: "https://imgs.search.brave.com/auJV-lNim2zTG56JiiwfY9JJwfrFrOsEAtPQ61nxW6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmZv/bWF4cGFyaXMuY29t/LzI3MTMxLWhvbWVf/ZGVmYXVsdC9wYy1n/YW1lci1lbGV2ZW4u/anBn",
    quantity: 1,
  },
  {
    id: 2,
    name: "Workstation PC",
    price: 1500,
    image: "https://imgs.search.brave.com/7o9p115aUqTeB4766k5iyn0eCytD7DVRfwgz9eijdhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg5MDgzOS1NTEE4/NDc0ODM5NDA0Nl8w/NTIwMjUtVi53ZWJw",
    quantity: 1,
  },
];

/** Tipo para el contexto */
type CartContextType = {
  products: Product[];
  cart: Product[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  filterByPrice: () => void;
  IncreaseAmount: (product: Product) => void;
  DecreaseAmount: (product: Product) => void;
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

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        filterByPrice,
        IncreaseAmount,
        DecreaseAmount,
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
