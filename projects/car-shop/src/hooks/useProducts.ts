import { useState } from 'react';
import type { Product } from '../types/types';

/** Datos de ejemplo para productos */
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



/**
 * Hook personalizado para gestionar productos y carrito de compras
 * @returns {Object} Objeto con productos, carrito y métodos para manipularlos
 * - products: Lista de productos disponibles
 * - cart: Productos en el carrito
 * - addToCart: Añade o incrementa productos en el carrito
 * - removeFromCart: Elimina un producto del carrito
 * - filterByPrice: Ordena productos del carrito por precio
 * - IncreaseAmount: Incrementa cantidad de un producto en el carrito
 * - DecreaseAmount: Reduce cantidad de un producto en el carrito
 */
export function useProducts() {
    const [products] = useState<Product[]>(mockProducts);
    const [cart, setCart] = useState<Product[]>([]);

    /** 
     * Añade un producto al carrito o incrementa su cantidad si ya existe
     * @param product Producto a añadir
     * @param quantity Cantidad a añadir
     */
    const addToCart = (product: Product, quantity: number) => {
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

    /** 
     * Ordena productos del carrito por precio (mayor a menor)
     */
    const filterByPrice = () => {
        const filteredProducts = [...cart].sort((a, b) => b.price - a.price);
        setCart(filteredProducts);
    }

    /**
     * Incrementa en 1 la cantidad de un producto en el carrito
     */
    const IncreaseAmount = (product: Product) => {
        setCart((prev) => prev.map((p) => p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p));
    }

    /**
     * Reduce en 1 la cantidad de un producto en el carrito
     */
    const DecreaseAmount = (product: Product) => {
        setCart((prev) => prev.map((p) => p.id === product.id ? { ...p, quantity: (p.quantity || 1) - 1 } : p));
    }

    /**
     * Elimina completamente un producto del carrito
     */
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