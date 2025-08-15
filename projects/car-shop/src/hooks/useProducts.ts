import { useState } from 'react';

// Mock data de productos
import type { Product } from '../types/types';
 const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Gaming PC',
    price: 1200,
    image: 'https://imgs.search.brave.com/ANL7yxI_xdHADPgXkKVaJXYubcsPBRIGqjFlJjEtJyE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5waWNoYXUuY29t/LmJyL21lZGlhL2Nh/dGFsb2cvcHJvZHVj/dC9jYWNoZS9lZjcy/ZDNjMjc4NjQ1MTBl/NWQ0YzBjZTY5YmFk/ZTI1OS9rL2kva2l0/LXBjLWNvbXBsZXRv/LWh4MTEwLWdwdS1t/LW9yYy12Mi1tb25p/dG9yLmpwZw',
    quantity: 1
  },
  {
    id: 2,
    name: 'Workstation PC',
    price: 1500,
    image: 'https://imgs.search.brave.com/Rbtz3cLZaQlXOcyZkoTW3HwNzUNV_6WKSDkYUf1EJGc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFWbUhZcWRIc0wu/anBn',
    quantity: 1
}
 ] 



export function useProducts() {
    const [products] = useState<Product[]>(mockProducts);
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product,quantity:number) => {
        setCart((prev) => {
            // Check if the product is already in the cart
            const existingProduct = prev.find((p) => p.id === product.id);
            if (existingProduct) {
                // If it exists, increase the quantity
                return prev.map((p) =>
                    p.id === product.id ? { ...p, quantity: (p.quantity || 1) + quantity } : p
                );
            }
            // If it doesn't exist, add it to the cart
            const newProduct = { ...product, quantity: quantity || 1 };
            console.log(`New product added:`,newProduct)
            return  [...prev, newProduct];
        });
    };
const filterByPrice = () => {
    const filteredProducts = [...cart].sort((a, b) => b.price - a.price);
    setCart(filteredProducts);
}
const IncreaseAmount = (product: Product) => {
    setCart((prev) => prev.map((p) => p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p));
}
const DecreaseAmount = (product: Product) => {
    setCart((prev) => prev.map((p) => p.id === product.id ? { ...p, quantity: (p.quantity || 1) - 1 } : p));
}
    const removeFromCart = (product: Product) => {
        setCart((prev) => prev.filter((p) => p.id !== product.id));
    };

    return {
        products,
        cart,
        addToCart,
        removeFromCart,
        filterByPrice,
        IncreaseAmount,
        DecreaseAmount
    };
}