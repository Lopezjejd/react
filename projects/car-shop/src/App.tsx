import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import type { Product } from './types/types'
import { ProductItem } from './components/Product'
import { useProducts } from './hooks/useProducts'
function App() {
const { products, cart, addToCart, removeFromCart } = useProducts()
     const totalPrice = cart.reduce((acc, product) => acc + product.price, 0)

  return (
    <>
      <h1>Pc Gamer Shop</h1>
      <p>For here you will find the best gaming pcs</p>
      <ul className='product-list'>
        {products.map(product => (
          <ProductItem key={product.id} product={product} buttonAct={addToCart} type='add To Cart' />
        ))}
      </ul>
      <h2>Shopping cart</h2>
      <span>cantidad de productos {cart.length}

      </span>
      <span>precio total{totalPrice}</span>
      <ul className='product-list'>
        {cart.map(product => (
          <ProductItem key={product.id} product={product} buttonAct={removeFromCart} type='Remove from cart' />
        ))}
      </ul>
    </>
  )
}

export default App
